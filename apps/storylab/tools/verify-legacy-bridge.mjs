import { createReadStream } from "node:fs";
import { access, readFile, readdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const [distArgument = "dist", baseArgument = "/ai-storylab-1/"] = process.argv.slice(2);
const dist = path.resolve(distArgument);
const base = normalizeBase(baseArgument);
const legacyBase = `${base}legacy/v0.3.0/`;
const bridgeBase = `${base}legacy/bridge/`;

function normalizeBase(value) {
  const prefixed = value.startsWith("/") ? value : `/${value}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}

async function requireRegularFile(file, allowEmpty = false) {
  await access(file);
  const info = await stat(file);
  if (!info.isFile()) throw new Error(`No es archivo regular: ${file}`);
  if (!allowEmpty && info.size === 0) throw new Error(`Archivo vacío: ${file}`);
  return info.size;
}

function localReferences(html) {
  return [...html.matchAll(/\b(?:src|href)=["']([^"'#]+)["']/g)]
    .map((match) => match[1])
    .filter((value) => !/^(?:https?:|data:|mailto:|tel:)/.test(value));
}

async function resolveReference(reference, expectedBase) {
  const clean = reference.split(/[?#]/, 1)[0];
  if (!clean.startsWith(expectedBase)) throw new Error(`Recurso fuera de ${expectedBase}: ${reference}`);
  const relative = clean.slice(base.length);
  const file = path.resolve(dist, relative);
  if (!file.startsWith(`${dist}${path.sep}`)) throw new Error(`Escape de dist: ${reference}`);
  await requireRegularFile(file);
  return { url: clean, file };
}

const legacyIndexPath = path.join(dist, "legacy", "v0.3.0", "index.html");
const bridgeIndexPath = path.join(dist, "legacy", "bridge", "index.html");
const bridgeJsPath = path.join(dist, "legacy", "bridge", "legacy-bridge.js");
const bridgeCssPath = path.join(dist, "legacy", "bridge", "legacy-bridge.css");
const legacyIndex = await readFile(legacyIndexPath, "utf8");
const bridgeIndex = await readFile(bridgeIndexPath, "utf8");
const bridgeJs = await readFile(bridgeJsPath, "utf8");
const legacyRefs = localReferences(legacyIndex);
if (legacyRefs.length === 0) throw new Error("Snapshot legacy sin recursos.");
const resolvedLegacyRefs = [];
for (const reference of legacyRefs) resolvedLegacyRefs.push(await resolveReference(reference, legacyBase));
await requireRegularFile(bridgeIndexPath);
await requireRegularFile(bridgeJsPath);
await requireRegularFile(bridgeCssPath);
for (const key of ["aistorylab_student_progress_v0_2", "aistorylab_group_progress_v0_2"]) {
  if (!bridgeJs.includes(key)) throw new Error(`Puente no reconoce ${key}`);
}
for (const forbidden of [".setItem(", ".removeItem(", ".clear("]) {
  if (bridgeJs.includes(forbidden)) throw new Error(`Puente contiene escritura prohibida: ${forbidden}`);
}
for (const token of ['id="confirm-backup"', 'id="download-backup"', "../v0.3.0/", "../../"]) {
  if (!bridgeIndex.includes(token)) throw new Error(`Falta contrato: ${token}`);
}
const contentType = (file) => file.endsWith(".html") ? "text/html; charset=utf-8" : file.endsWith(".js") ? "text/javascript; charset=utf-8" : file.endsWith(".css") ? "text/css; charset=utf-8" : file.endsWith(".svg") ? "image/svg+xml" : "application/octet-stream";
const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url ?? "/", "http://127.0.0.1").pathname;
    if (!pathname.startsWith(base)) { response.writeHead(404).end("Not found"); return; }
    let relative = pathname.slice(base.length);
    if (relative.endsWith("/")) relative += "index.html";
    const file = path.resolve(dist, relative);
    if (!file.startsWith(`${dist}${path.sep}`)) { response.writeHead(400).end("Bad request"); return; }
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "content-type": contentType(file), "content-length": info.size });
    createReadStream(file).pipe(response);
  } catch { response.writeHead(404).end("Not found"); }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
try {
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No se obtuvo puerto de humo.");
  const origin = `http://127.0.0.1:${address.port}`;
  for (const url of [legacyBase, bridgeBase, ...resolvedLegacyRefs.map((entry) => entry.url)]) {
    const response = await fetch(`${origin}${url}`);
    if (response.status !== 200) throw new Error(`${url}: HTTP ${response.status}`);
  }
} finally {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
process.stdout.write(`${JSON.stringify({
  status: "PASS",
  base,
  legacyBase,
  bridgeBase,
  legacyAssets: resolvedLegacyRefs.length,
  bridgeReadOnly: true,
  sourceKeysPreserved: true,
  semanticConversionPerformed: false,
  files: (await readdir(path.join(dist, "legacy", "bridge"))).sort(),
}, null, 2)}\n`);

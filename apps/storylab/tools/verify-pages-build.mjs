import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { access, readFile, readdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const [distArgument = "dist", baseArgument = "/ai-storylab-1/"] = process.argv.slice(2);
const dist = path.resolve(distArgument);
const base = normalizeBase(baseArgument);

function normalizeBase(value) {
  const prefixed = value.startsWith("/") ? value : `/${value}`;
  return prefixed.endsWith("/") ? prefixed : `${prefixed}/`;
}
function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".js")) return "text/javascript; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}
async function sha256(file) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest("hex");
}
async function requireFile(file) {
  await access(file);
  const info = await stat(file);
  if (!info.isFile() || info.size === 0) throw new Error(`Archivo ausente o vacío: ${file}`);
  return info.size;
}

const indexPath = path.join(dist, "index.html");
const index = await readFile(indexPath, "utf8");
if (!index.includes('<div id="root"></div>')) throw new Error("index.html no contiene el root de React.");

const references = [...index.matchAll(/\b(?:src|href)=["']([^"'#]+)["']/g)]
  .map((match) => match[1])
  .filter((value) => !/^(?:https?:|data:|mailto:|tel:)/.test(value));
if (references.length === 0) throw new Error("index.html no contiene recursos locales.");

const assets = [];
for (const reference of references) {
  const clean = reference.split(/[?#]/, 1)[0];
  if (!clean.startsWith(base)) throw new Error(`Recurso fuera de la base ${base}: ${reference}`);
  const relative = clean.slice(base.length);
  if (!relative || relative.includes("..")) throw new Error(`Ruta inválida: ${reference}`);
  const file = path.resolve(dist, relative);
  if (!file.startsWith(`${dist}${path.sep}`)) throw new Error(`Escape de dist: ${reference}`);
  const size = await requireFile(file);
  assets.push({ url: clean, relative, size, sha256: await sha256(file) });
}
const noJekyllPath = path.join(dist, ".nojekyll");
await access(noJekyllPath);
const noJekyllInfo = await stat(noJekyllPath);
if (!noJekyllInfo.isFile()) {
  throw new Error(".nojekyll existe, pero no es un archivo regular.");
}

const server = createServer(async (request, response) => {
  try {
    const pathname = new URL(request.url ?? "/", "http://127.0.0.1").pathname;
    if (!pathname.startsWith(base)) return response.writeHead(404).end("Not found");
    const relative = pathname === base ? "index.html" : pathname.slice(base.length);
    const file = path.resolve(dist, relative);
    if (file !== indexPath && !file.startsWith(`${dist}${path.sep}`)) return response.writeHead(400).end("Bad request");
    const info = await stat(file);
    if (!info.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "content-type": contentType(file), "content-length": info.size });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
try {
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("Puerto de humo ausente.");
  const origin = `http://127.0.0.1:${address.port}`;
  const indexResponse = await fetch(`${origin}${base}`);
  if (indexResponse.status !== 200) throw new Error(`Index HTTP ${indexResponse.status}`);
  if (!(await indexResponse.text()).includes('<div id="root"></div>')) throw new Error("Index servido inválido.");
  for (const asset of assets) {
    const response = await fetch(`${origin}${asset.url}`);
    if (response.status !== 200) throw new Error(`${asset.url}: HTTP ${response.status}`);
    if ((await response.arrayBuffer()).byteLength !== asset.size) throw new Error(`${asset.url}: tamaño divergente.`);
  }
} finally {
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
const report = {
  status: "PASS",
  base,
  index: { relative: "index.html", size: await requireFile(indexPath), sha256: await sha256(indexPath) },
  noJekyll: (await readdir(dist)).includes(".nojekyll"),
  noJekyllSize: noJekyllInfo.size,
  assetCount: assets.length,
  assets,
  assertions: {
    subpathIndexServed: true,
    allIndexAssetsUnderBase: true,
    allIndexAssetsServed: true,
    noJekyllPresent: true,
  },
};
process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

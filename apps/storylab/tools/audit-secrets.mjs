import { readdirSync, readFileSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const ignoredDirectories = new Set(["node_modules", ".git", "dist"]);
const ignoredFiles = new Set(["package-lock.json"]);
const textExtensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".json",
  ".md",
  ".css",
  ".html",
  ".yml",
  ".yaml",
  ".npmrc",
  "",
]);
const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}\b/,
  /\bsk-[A-Za-z0-9]{20,}\b/,
  /\b(?:api[_-]?key|secret|token|password)\s*[:=]\s*["'][^"']{8,}["']/i,
];

const files = [];
const errors = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(path);
      continue;
    }
    if (ignoredFiles.has(entry.name)) continue;
    if (entry.name.startsWith(".env")) {
      errors.push(`ENV_FILE_PROHIBITED:${relative(root, path)}`);
      continue;
    }
    if (textExtensions.has(extname(path)) || basename(path) === ".npmrc") {
      files.push(path);
    }
  }
};

visit(root);
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    if (pattern.test(text)) {
      errors.push(`SECRET_PATTERN:${relative(root, file)}:${String(pattern)}`);
    }
  }
}

console.log(
  JSON.stringify(
    {
      status: errors.length === 0 ? "PASS" : "FAIL",
      scannedFiles: files.length,
      errors,
    },
    null,
    2,
  ),
);
if (errors.length > 0) process.exit(1);

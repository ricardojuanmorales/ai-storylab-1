
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const scanRoots = ["src/domain", "src/ports"];
const prohibitedDirectories = [
  "src/application",
  "src/adapters",
  "src/presentation",
];
const prohibited = [
  /from\s+["']react(?:-dom)?["']/,
  /from\s+["'][^"']*(?:adapters|presentation)[^"']*["']/,
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bwindow\./,
  /\bdocument\./,
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
  /node:https?/,
  /from\s+["']axios["']/,
  /src\/App\.jsx/,
];

const files = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (extname(path) === ".ts") files.push(path);
  }
};

const errors = [];
for (const directory of prohibitedDirectories) {
  if (existsSync(join(root, directory))) {
    errors.push(`PROHIBITED_DIRECTORY:${directory}`);
  }
}
for (const directory of scanRoots) {
  visit(join(root, directory));
}
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const pattern of prohibited) {
    if (pattern.test(text)) {
      errors.push(
        `PROHIBITED_DEPENDENCY:${relative(root, file)}:${String(pattern)}`,
      );
    }
  }
}

const packageJson = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);
if (Object.keys(packageJson.dependencies ?? {}).length !== 0) {
  errors.push("PRODUCT_RUNTIME_DEPENDENCIES_PRESENT");
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  prohibitedDirectories,
  runtimeDependencies: Object.keys(packageJson.dependencies ?? {}),
  errors,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

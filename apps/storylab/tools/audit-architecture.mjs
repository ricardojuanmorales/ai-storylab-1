import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const requiredDirectories = ["src/domain", "src/ports", "src/application", "src/adapters"];
const prohibitedDirectories = ["src/presentation"];
const layers = ["domain", "ports", "application", "adapters"];
const environmentPatterns = [
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bwindow\./,
  /\bdocument\./,
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
];
const dependencyRules = {
  domain: [/\.\.\/ports/, /\.\.\/application/, /\.\.\/adapters/, /presentation/],
  ports: [/\.\.\/application/, /\.\.\/adapters/, /presentation/],
  application: [/\.\.\/adapters/, /presentation/, /from\s+["']react(?:-dom)?["']/],
  adapters: [/\.\.\/application/, /presentation/, /from\s+["']react(?:-dom)?["']/],
};

const files = [];
const visit = (directory, layer) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path, layer);
    else if (extname(path) === ".ts") files.push({ path, layer });
  }
};

const errors = [];
for (const directory of requiredDirectories) {
  if (!existsSync(join(root, directory))) errors.push(`REQUIRED_DIRECTORY_MISSING:${directory}`);
}
for (const directory of prohibitedDirectories) {
  if (existsSync(join(root, directory))) errors.push(`PROHIBITED_DIRECTORY:${directory}`);
}
for (const layer of layers) {
  const directory = join(root, "src", layer);
  if (existsSync(directory)) visit(directory, layer);
}

for (const { path, layer } of files) {
  const text = readFileSync(path, "utf8");
  const patterns = dependencyRules[layer] ?? [];
  for (const pattern of patterns) {
    if (pattern.test(text)) {
      errors.push(`DEPENDENCY_DIRECTION:${layer}:${relative(root, path)}:${String(pattern)}`);
    }
  }
  if (layer !== "adapters") {
    for (const pattern of environmentPatterns) {
      if (pattern.test(text)) {
        errors.push(`ENVIRONMENT_LEAK:${layer}:${relative(root, path)}:${String(pattern)}`);
      }
    }
  }
  if (/src\/App\.jsx|from\s+["'][^"']*legacy[^"']*["']/.test(text)) {
    errors.push(`LEGACY_IMPORT:${relative(root, path)}`);
  }
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
if (Object.keys(packageJson.dependencies ?? {}).length !== 0) {
  errors.push("PRODUCT_RUNTIME_DEPENDENCIES_PRESENT");
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  layers,
  requiredDirectories,
  prohibitedDirectories,
  runtimeDependencies: Object.keys(packageJson.dependencies ?? {}),
  errors,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

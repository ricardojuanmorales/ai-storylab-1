import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const requiredDirectories = [
  "src/domain",
  "src/ports",
  "src/application",
  "src/adapters",
  "src/presentation",
];
const layers = ["domain", "ports", "application", "adapters", "presentation"];
const sourceExtensions = new Set([".ts", ".tsx"]);

const dependencyRules = {
  domain: [
    /\.\.\/ports/,
    /\.\.\/application/,
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
  ports: [
    /\.\.\/application/,
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
  application: [
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
  adapters: [
    /\.\.\/application/,
    /\.\.\/presentation/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
  presentation: [/\.\.\/adapters/, /\.\.\/schemas/],
};

const coreEnvironmentPatterns = [
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bindexedDB\b/,
  /\bwindow\./,
  /\bdocument\./,
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
];

const presentationProhibitedPatterns = [
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bindexedDB\b/,
  /\bfetch\s*\(/,
  /\bXMLHttpRequest\b/,
  /\bWebSocket\b/,
];

const files = [];
const visit = (directory, layer) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path, layer);
    else if (sourceExtensions.has(extname(path))) files.push({ path, layer });
  }
};

const errors = [];
for (const directory of requiredDirectories) {
  if (!existsSync(join(root, directory))) {
    errors.push(`REQUIRED_DIRECTORY_MISSING:${directory}`);
  }
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
      errors.push(
        `DEPENDENCY_DIRECTION:${layer}:${relative(root, path)}:${String(pattern)}`,
      );
    }
  }

  const environmentPatterns =
    layer === "presentation"
      ? presentationProhibitedPatterns
      : coreEnvironmentPatterns;

  for (const pattern of environmentPatterns) {
    if (pattern.test(text)) {
      errors.push(
        `ENVIRONMENT_LEAK:${layer}:${relative(root, path)}:${String(pattern)}`,
      );
    }
  }

  if (/src\/App\.jsx|from\s+["'][^"']*legacy[^"']*["']/.test(text)) {
    errors.push(`LEGACY_IMPORT:${relative(root, path)}`);
  }
}

const packageJson = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);
const runtimeDependencies = Object.keys(packageJson.dependencies ?? {}).sort();
const allowedRuntimeDependencies = ["react", "react-dom"];

if (
  runtimeDependencies.length !== allowedRuntimeDependencies.length ||
  runtimeDependencies.some(
    (dependency, index) => dependency !== allowedRuntimeDependencies[index],
  )
) {
  errors.push(
    `RUNTIME_DEPENDENCIES_UNEXPECTED:${runtimeDependencies.join(",")}`,
  );
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  layers,
  requiredDirectories,
  runtimeDependencies,
  allowedRuntimeDependencies,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

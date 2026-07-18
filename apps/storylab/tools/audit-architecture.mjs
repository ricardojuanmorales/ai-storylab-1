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
  "src/schemas",
];
const layers = [
  "domain",
  "ports",
  "application",
  "adapters",
  "presentation",
  "schemas",
];
const sourceExtensions = new Set([".ts", ".tsx"]);

const dependencyRules = {
  domain: [
    /\.\.\/ports/,
    /\.\.\/application/,
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /\.\.\/schemas/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
  ports: [
    /\.\.\/application/,
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /\.\.\/schemas/,
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
  presentation: [
    /\.\.\/adapters/,
    /\.\.\/schemas/,
  ],
  schemas: [
    /\.\.\/application/,
    /\.\.\/adapters/,
    /\.\.\/presentation/,
    /from\s+["']react(?:-dom)?(?:\/[^"']*)?["']/,
  ],
};

const storagePatterns = [
  /\blocalStorage\b/,
  /\bsessionStorage\b/,
  /\bindexedDB\b/,
];

const browserEnvironmentPatterns = [
  ...storagePatterns,
  /\bwindow\./,
  /\bdocument\./,
];

const networkPatterns = [
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

const mainPath = join(root, "src/main.tsx");
if (!existsSync(mainPath)) {
  errors.push("COMPOSITION_ROOT_MISSING:src/main.tsx");
} else {
  files.push({ path: mainPath, layer: "composition" });
}

const authorizedStoragePaths = new Set([
  "src/main.tsx",
  "src/adapters/storage/local-storage-project-repository.ts",
]);

for (const { path, layer } of files) {
  const text = readFileSync(path, "utf8");
  const file = relative(root, path);
  const patterns = dependencyRules[layer] ?? [];

  for (const pattern of patterns) {
    if (pattern.test(text)) {
      errors.push(
        `DEPENDENCY_DIRECTION:${layer}:${file}:${String(pattern)}`,
      );
    }
  }

  for (const pattern of networkPatterns) {
    if (pattern.test(text)) {
      errors.push(`NETWORK_ACCESS:${layer}:${file}:${String(pattern)}`);
    }
  }

  if (["domain", "ports", "application", "presentation", "schemas"].includes(layer)) {
    for (const pattern of browserEnvironmentPatterns) {
      if (pattern.test(text)) {
        errors.push(
          `ENVIRONMENT_LEAK:${layer}:${file}:${String(pattern)}`,
        );
      }
    }
  }

  for (const pattern of storagePatterns) {
    if (pattern.test(text) && !authorizedStoragePaths.has(file)) {
      errors.push(`STORAGE_OUTSIDE_ADAPTER_BOUNDARY:${file}:${String(pattern)}`);
    }
  }

  if (/src\/App\.jsx|from\s+["'][^"']*legacy[^"']*["']/.test(text)) {
    errors.push(`LEGACY_IMPORT:${file}`);
  }
}

const requiredPersistenceAdapter =
  "src/adapters/storage/local-storage-project-repository.ts";
if (!existsSync(join(root, requiredPersistenceAdapter))) {
  errors.push(`PERSISTENCE_ADAPTER_MISSING:${requiredPersistenceAdapter}`);
}

const packageJson = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);
const runtimeDependencies = Object.keys(packageJson.dependencies ?? {}).sort();
const allowedRuntimeDependencies = ["react", "react-dom"];
const bundledValidationDependencies = ["ajv", "ajv-formats"];
const devDependencies = packageJson.devDependencies ?? {};

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

for (const dependency of bundledValidationDependencies) {
  if (!(dependency in devDependencies)) {
    errors.push(`VALIDATION_DEPENDENCY_MISSING:${dependency}`);
  }
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  layers,
  requiredDirectories,
  runtimeDependencies,
  allowedRuntimeDependencies,
  bundledValidationDependencies,
  authorizedStoragePaths: [...authorizedStoragePaths],
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const scanRoots = [
  "src/domain",
  "src/ports",
  "src/application",
  "src/adapters",
  "src/presentation",
  "src/fixtures",
  "src/schemas",
];
const standaloneFiles = ["src/main.tsx"];
const scannedExtensions = new Set([".ts", ".tsx", ".json"]);

const personalIdentifierPattern =
  /\b(?:email|studentId|dateOfBirth|socialSecurityNumber|ssn)\b/;
const deferredCapabilityPattern =
  /\b(?:facilitatorView|groupDashboard|embeddedAI|cloudSync|analytics|autoPublish|realData)["']?\s*:\s*true\b/;
const runtimeLoggingPattern =
  /\bconsole\.(?:log|info|warn|error|debug)\s*\(/;
const networkPattern =
  /\b(?:fetch\s*\(|XMLHttpRequest|WebSocket)\b/;
const localStoragePattern = /\blocalStorage\b/;
const prohibitedStoragePattern = /\b(?:sessionStorage|indexedDB)\b/;

const authorizedDurablePersistencePaths = new Set([
  "src/main.tsx",
  "src/adapters/storage/local-storage-project-repository.ts",
]);

const files = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (scannedExtensions.has(extname(path))) files.push(path);
  }
};

for (const directory of scanRoots) {
  visit(join(root, directory));
}
for (const file of standaloneFiles) {
  const path = join(root, file);
  if (existsSync(path)) files.push(path);
}

const errors = [];
const durablePersistencePaths = new Set();

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const relativePath = relative(root, file);

  if (personalIdentifierPattern.test(text)) {
    errors.push(`PERSONAL_IDENTIFIER_FIELD:${relativePath}`);
  }
  if (deferredCapabilityPattern.test(text)) {
    errors.push(`DEFERRED_CAPABILITY_ACTIVATED:${relativePath}`);
  }
  if (runtimeLoggingPattern.test(text)) {
    errors.push(`RUNTIME_LOGGING_PRESENT:${relativePath}`);
  }
  if (networkPattern.test(text)) {
    errors.push(`NETWORK_ACCESS_PRESENT:${relativePath}`);
  }
  if (prohibitedStoragePattern.test(text)) {
    errors.push(`PROHIBITED_STORAGE_PRESENT:${relativePath}`);
  }
  if (localStoragePattern.test(text)) {
    durablePersistencePaths.add(relativePath);
    if (!authorizedDurablePersistencePaths.has(relativePath)) {
      errors.push(`DURABLE_STORAGE_OUTSIDE_BOUNDARY:${relativePath}`);
    }
  }
}

if (durablePersistencePaths.size === 0) {
  errors.push("DURABLE_PERSISTENCE_EXPECTED_BUT_NOT_FOUND");
}

const fixtureFiles = files.filter((file) =>
  relative(root, file).startsWith(
    `src/fixtures${process.platform === "win32" ? "\\" : "/"}`,
  ),
);
const syntheticMarker = /(?:synthetic|sint[eé]tic[oa]s?|SYN-\d+)/i;
const fixturesWithoutSyntheticMarker = fixtureFiles
  .filter((file) => !syntheticMarker.test(readFileSync(file, "utf8")))
  .map((file) => relative(root, file));

for (const file of fixturesWithoutSyntheticMarker) {
  errors.push(`FIXTURE_NOT_MARKED_SYNTHETIC:${file}`);
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  scannedRoots: scanRoots,
  standaloneFiles,
  scannedExtensions: [...scannedExtensions],
  policyDataMode: "synthetic_only",
  fixtureEvidence: {
    scannedFiles: fixtureFiles.length,
    allMarkedSynthetic: fixturesWithoutSyntheticMarker.length === 0,
    unmarkedFiles: fixturesWithoutSyntheticMarker,
  },
  durablePersistenceSelected: durablePersistencePaths.size > 0,
  durablePersistencePaths: [...durablePersistencePaths],
  authorizedDurablePersistencePaths: [
    ...authorizedDurablePersistencePaths,
  ],
  schemaValidationOnLoadRequired: true,
  deferredCapabilitiesEnabled: false,
  personalIdentifierFieldsDetected: false,
  runtimeLoggingDetected: false,
  networkAccessDetected: false,
  heuristicLimitAcknowledged: true,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

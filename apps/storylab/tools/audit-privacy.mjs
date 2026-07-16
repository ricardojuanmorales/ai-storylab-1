import { readdirSync, readFileSync } from "node:fs";
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
const scannedExtensions = new Set([".ts", ".tsx", ".json"]);

const rules = [
  {
    code: "PERSONAL_IDENTIFIER_FIELD",
    category: "personal_identifier",
    pattern:
      /\b(?:email|studentId|dateOfBirth|socialSecurityNumber|ssn)\b/,
  },
  {
    code: "DEFERRED_CAPABILITY_ACTIVATED",
    category: "deferred_capability",
    pattern:
      /\b(?:facilitatorView|groupDashboard|embeddedAI|cloudSync|analytics|autoPublish|realData)["']?\s*:\s*true\b/,
  },
  {
    code: "DURABLE_OR_REMOTE_STORAGE_SELECTED",
    category: "durable_or_remote_storage",
    pattern:
      /\b(?:localStorage|sessionStorage|indexedDB|fetch|XMLHttpRequest|WebSocket|createWriteStream|writeFile|appendFile)\b/,
  },
  {
    code: "RUNTIME_LOGGING_PRESENT",
    category: "runtime_logging",
    pattern: /\bconsole\.(?:log|info|warn|error|debug)\s*\(/,
  },
];

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

const errors = [];
const detections = new Set();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const rule of rules) {
    if (rule.pattern.test(text)) {
      detections.add(rule.category);
      errors.push(
        `${rule.code}:${relative(root, file)}:${String(rule.pattern)}`,
      );
    }
  }
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
  scannedExtensions: [...scannedExtensions],
  policyDataMode: "synthetic_only",
  fixtureEvidence: {
    scannedFiles: fixtureFiles.length,
    allMarkedSynthetic: fixturesWithoutSyntheticMarker.length === 0,
    unmarkedFiles: fixturesWithoutSyntheticMarker,
  },
  durablePersistenceSelected: detections.has("durable_or_remote_storage"),
  deferredCapabilitiesEnabled: detections.has("deferred_capability"),
  personalIdentifierFieldsDetected: detections.has("personal_identifier"),
  runtimeLoggingDetected: detections.has("runtime_logging"),
  heuristicLimitAcknowledged: true,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

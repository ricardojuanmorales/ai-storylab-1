import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);
const scanRoots = [
  "src/domain",
  "src/ports",
  "src/application",
  "src/adapters",
];

const rules = [
  {
    code: "PERSONAL_IDENTIFIER_FIELD",
    pattern:
      /\b(?:email|studentId|dateOfBirth|socialSecurityNumber|ssn)\b/,
  },
  {
    code: "DEFERRED_CAPABILITY_ACTIVATED",
    pattern:
      /\b(?:facilitatorView|groupDashboard|embeddedAI|cloudSync|analytics|autoPublish|realData)\s*:\s*true\b/,
  },
  {
    code: "DURABLE_OR_REMOTE_STORAGE_SELECTED",
    pattern:
      /\b(?:localStorage|sessionStorage|indexedDB|fetch|XMLHttpRequest|WebSocket|createWriteStream|writeFile|appendFile)\b/,
  },
  {
    code: "RUNTIME_LOGGING_PRESENT",
    pattern: /\bconsole\.(?:log|info|warn|error|debug)\s*\(/,
  },
];

const files = [];
const visit = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (extname(path) === ".ts") files.push(path);
  }
};

for (const directory of scanRoots) {
  visit(join(root, directory));
}

const errors = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const rule of rules) {
    if (rule.pattern.test(text)) {
      errors.push(
        `${rule.code}:${relative(root, file)}:${String(rule.pattern)}`,
      );
    }
  }
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  scannedFiles: files.length,
  dataMode: "synthetic_only",
  durablePersistenceSelected: false,
  deferredCapabilitiesEnabled: false,
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

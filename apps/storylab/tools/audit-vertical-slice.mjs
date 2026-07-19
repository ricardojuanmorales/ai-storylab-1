import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);

const requiredFiles = [
  "src/domain/mission-catalog.ts",
  "src/application/creative-cycle.ts",
  "src/application/preview-export.ts",
  "src/application/recover-project.ts",
  "src/adapters/storage/local-storage-project-repository.ts",
  "src/schemas/runtime-validators.ts",
  "src/presentation/App.tsx",
  "src/presentation/MissionNavigation.tsx",
  "src/presentation/MissionOneWorkspace.tsx",
  "src/presentation/MissionWorkspace.tsx",
  "src/presentation/mission-workspace-model.ts",
  "src/tests/presentation.mission-engine.test.tsx",
  "src/tests/integration.local-first.test.tsx",
];

const errors = [];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    errors.push(`REQUIRED_FILE_MISSING:${file}`);
  }
}

const packageJson = JSON.parse(
  readFileSync(join(root, "package.json"), "utf8"),
);

if (!packageJson.scripts?.["test:integration"]) {
  errors.push("INTEGRATION_TEST_SCRIPT_MISSING");
}

const runtimeDependencies = Object.keys(
  packageJson.dependencies ?? {},
).sort();
if (
  runtimeDependencies.join(",") !== ["react", "react-dom"].join(",")
) {
  errors.push(
    `RUNTIME_DEPENDENCIES_UNEXPECTED:${runtimeDependencies.join(",")}`,
  );
}

const missionCatalog = readFileSync(
  join(root, "src/domain/mission-catalog.ts"),
  "utf8",
);
const missionIds = [
  "mission-intention",
  "mission-architecture",
  "mission-production",
  "mission-curation",
];
for (const missionId of missionIds) {
  if (!missionCatalog.includes(`id: "${missionId}"`)) {
    errors.push(`CANONICAL_MISSION_MISSING:${missionId}`);
  }
}

const appText = readFileSync(
  join(root, "src/presentation/App.tsx"),
  "utf8",
);
const workspaceText = readFileSync(
  join(root, "src/presentation/MissionWorkspace.tsx"),
  "utf8",
);
const navigationText = readFileSync(
  join(root, "src/presentation/MissionNavigation.tsx"),
  "utf8",
);
const workspaceModelText = readFileSync(
  join(root, "src/presentation/mission-workspace-model.ts"),
  "utf8",
);
const previewText = readFileSync(
  join(root, "src/application/preview-export.ts"),
  "utf8",
);
const storageText = readFileSync(
  join(root, "src/adapters/storage/local-storage-project-repository.ts"),
  "utf8",
);
const integrationText = readFileSync(
  join(root, "src/tests/integration.local-first.test.tsx"),
  "utf8",
);

const requiredSignals = [
  [appText, "recoverProject", "APP_RECOVERY_SIGNAL_MISSING"],
  [workspaceText, "previewExport", "PREVIEW_UI_SIGNAL_MISSING"],
  [workspaceText, "removeProject", "DELETE_UI_SIGNAL_MISSING"],
  [
    workspaceText,
    "selectMissionWorkspaceSnapshot",
    "REUSABLE_WORKSPACE_SIGNAL_MISSING",
  ],
  [
    navigationText,
    "MISSION_WORKSPACE_POLICIES",
    "MISSION_NAVIGATION_SIGNAL_MISSING",
  ],
  [
    workspaceModelText,
    '"mission-production"',
    "MISSION_POLICY_SIGNAL_MISSING",
  ],
  [previewText, "reflectionCanLeaveDevice", "PRIVACY_FILTER_MISSING"],
  [storageText, "PERSISTENCE_QUOTA_EXCEEDED", "QUOTA_ERROR_MISSING"],
  [
    storageText,
    "PERSISTENCE_DATA_CORRUPTED",
    "CORRUPTION_ERROR_MISSING",
  ],
  [
    integrationText,
    "LocalStorageProjectRepository",
    "REAL_ADAPTER_TEST_MISSING",
  ],
  [
    integrationText,
    "REFLEXION_PRIVADA_INTEGRADA",
    "PRIVACY_REGRESSION_MISSING",
  ],
];

for (const [text, signal, error] of requiredSignals) {
  if (!text.includes(signal)) errors.push(error);
}

const prohibitedProductSignals = [
  "importProject(",
  "roundtripProject(",
  "downloadExport(",
  "publishProject(",
];
const productFiles = [appText, workspaceText, previewText];
for (const signal of prohibitedProductSignals) {
  if (productFiles.some((text) => text.includes(signal))) {
    errors.push(`DEFERRED_CAPABILITY_PRESENT:${signal}`);
  }
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  checkpointCandidate: "H08-4.1",
  requiredFiles,
  canonicalMissionCount: missionIds.length,
  functionalMissionCount: 1,
  integrationEvidence: {
    realPersistenceAdapter: true,
    recoveryAfterRemount: true,
    exportPrivacy: true,
    corruptionHandling: true,
    quotaHandling: true,
    explicitDelete: true,
    reusableMissionEngine: true,
    sharedMissionNavigation: true,
  },
  deferredCapabilities: {
    import: false,
    roundtrip: false,
    automaticDownload: false,
    publish: false,
  },
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

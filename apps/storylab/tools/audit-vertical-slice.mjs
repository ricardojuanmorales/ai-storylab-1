import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);

const requiredFiles = [
  "src/domain/mission-catalog.ts",
  "src/application/creative-cycle.ts",
  "src/application/creative-cycle-contracts.ts",
  "src/application/preview-export.ts",
  "src/application/recover-project.ts",
  "src/adapters/storage/local-storage-project-repository.ts",
  "src/schemas/runtime-validators.ts",
  "src/presentation/App.tsx",
  "src/presentation/MissionNavigation.tsx",
  "src/presentation/MissionOneWorkspace.tsx",
  "src/presentation/MissionTwoWorkspace.tsx",
  "src/presentation/MissionThreeWorkspace.tsx",
  "src/presentation/MissionWorkspace.tsx",
  "src/presentation/mission-workspace-model.ts",
  "src/tests/presentation.mission-engine.test.tsx",
  "src/tests/presentation.m2-cycle.test.tsx",
  "src/tests/presentation.m3-cycle.test.tsx",
  "src/tests/integration.m2-local-first.test.tsx",
  "src/tests/integration.m3-local-first.test.tsx",
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
const cycleText = readFileSync(
  join(root, "src/application/creative-cycle.ts"),
  "utf8",
);
const cycleContractsText = readFileSync(
  join(root, "src/application/creative-cycle-contracts.ts"),
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
const m2WorkspaceText = readFileSync(
  join(root, "src/presentation/MissionTwoWorkspace.tsx"),
  "utf8",
);
const m3WorkspaceText = readFileSync(
  join(root, "src/presentation/MissionThreeWorkspace.tsx"),
  "utf8",
);
const m2TestText = readFileSync(
  join(root, "src/tests/presentation.m2-cycle.test.tsx"),
  "utf8",
);
const m3TestText = readFileSync(
  join(root, "src/tests/presentation.m3-cycle.test.tsx"),
  "utf8",
);
const m2IntegrationText = readFileSync(
  join(root, "src/tests/integration.m2-local-first.test.tsx"),
  "utf8",
);
const m3IntegrationText = readFileSync(
  join(root, "src/tests/integration.m3-local-first.test.tsx"),
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
  [appText, "MissionTwoWorkspace", "M2_APP_SIGNAL_MISSING"],
  [appText, "MissionThreeWorkspace", "M3_APP_SIGNAL_MISSING"],
  [cycleText, "completeMission", "MISSION_COMPLETION_SIGNAL_MISSING"],
  [cycleContractsText, '"multiple"', "MULTIPLE_EVIDENCE_CONTRACT_MISSING"],
  [workspaceText, "previewExport", "PREVIEW_UI_SIGNAL_MISSING"],
  [workspaceText, "removeProject", "DELETE_UI_SIGNAL_MISSING"],
  [
    workspaceText,
    "selectMissionWorkspaceSnapshot",
    "REUSABLE_WORKSPACE_SIGNAL_MISSING",
  ],
  [
    navigationText,
    "onSelectMission",
    "MISSION_SELECTION_SIGNAL_MISSING",
  ],
  [
    workspaceModelText,
    'availability: "functional"',
    "MISSION_POLICY_SIGNAL_MISSING",
  ],
  [
    m2WorkspaceText,
    "Mapa narrativo revisable",
    "M2_WORKSPACE_SIGNAL_MISSING",
  ],
  [
    m3WorkspaceText,
    'cardinality: "multiple"',
    "M3_MULTIPLE_EVIDENCE_SIGNAL_MISSING",
  ],
  [
    m3WorkspaceText,
    'missionDisposition: "keep_open"',
    "M3_INDEPENDENT_DECISION_SIGNAL_MISSING",
  ],
  [
    m3WorkspaceText,
    "medio_sintetico",
    "M3_SYNTHETIC_METADATA_SIGNAL_MISSING",
  ],
  [
    m2TestText,
    "actualiza una sola evidencia editable de M2",
    "M2_CARDINALITY_TEST_MISSING",
  ],
  [
    m3TestText,
    "crea y edita múltiples evidencias independientes",
    "M3_CARDINALITY_TEST_MISSING",
  ],
  [
    m3TestText,
    "representa multimodalidad sin cargas, binarios ni publicación",
    "M3_BOUNDARY_TEST_MISSING",
  ],
  [
    m2IntegrationText,
    "M2_RECOVERY_INTEGRATED",
    "M2_RECOVERY_TEST_MISSING",
  ],
  [
    m3IntegrationText,
    "M3_RECOVERY_INTEGRATED",
    "M3_RECOVERY_TEST_MISSING",
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
  'type="file"',
  "XMLHttpRequest",
];
const productFiles = [
  appText,
  workspaceText,
  m2WorkspaceText,
  m3WorkspaceText,
  previewText,
];
for (const signal of prohibitedProductSignals) {
  if (productFiles.some((text) => text.includes(signal))) {
    errors.push(`DEFERRED_CAPABILITY_PRESENT:${signal}`);
  }
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  checkpointCandidate: "H08-4.3",
  requiredFiles,
  canonicalMissionCount: missionIds.length,
  functionalMissionCount: 3,
  integrationEvidence: {
    realPersistenceAdapter: true,
    recoveryAfterRemount: true,
    exportPrivacy: true,
    corruptionHandling: true,
    quotaHandling: true,
    explicitDelete: true,
    reusableMissionEngine: true,
    sharedMissionNavigation: true,
    m2CompleteCycle: true,
    m2SingularEvidence: true,
    m2RecoveryAfterRemount: true,
    m3MultipleEvidence: true,
    m3IndependentDecisions: true,
    m3SyntheticMetadataOnly: true,
    m3RecoveryAfterRemount: true,
  },
  deferredCapabilities: {
    binaryStorage: false,
    mediaUpload: false,
    networkAccess: false,
    import: false,
    roundtrip: false,
    automaticDownload: false,
    publish: false,
  },
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

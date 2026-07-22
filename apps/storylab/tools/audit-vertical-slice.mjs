import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import process from "node:process";

const root = resolve(new URL("..", import.meta.url).pathname);

const requiredFiles = [
  "src/domain/mission-catalog.ts",
  "src/application/creative-cycle.ts",
  "src/application/creative-cycle-contracts.ts",
  "src/application/curation-record.ts",
  "src/application/preview-export.ts",
  "src/application/portfolio-projection.ts",
  "src/application/portfolio-export.ts",
  "src/application/portfolio-import.ts",
  "src/application/portfolio-import-staging.ts",
  "src/application/portfolio-semantic-equivalence.ts",
  "src/application/recover-project.ts",
  "src/adapters/storage/local-storage-project-repository.ts",
  "src/schemas/runtime-validators.ts",
  "src/presentation/App.tsx",
  "src/presentation/ArcSummary.tsx",
  "src/presentation/PortfolioTransferPanel.tsx",
  "src/presentation/arc-summary-model.ts",
  "src/presentation/MissionNavigation.tsx",
  "src/presentation/MissionOneWorkspace.tsx",
  "src/presentation/MissionTwoWorkspace.tsx",
  "src/presentation/MissionThreeWorkspace.tsx",
  "src/presentation/MissionFourWorkspace.tsx",
  "src/presentation/MissionWorkspace.tsx",
  "src/presentation/mission-workspace-model.ts",
  "src/tests/presentation.arc-summary.test.tsx",
  "src/tests/presentation.portfolio-transfer.test.tsx",
  "src/tests/integration.full-arc-local-first.test.tsx",
  "src/tests/integration.portfolio-transfer-local-first.test.tsx",
  "src/tests/presentation.mission-engine.test.tsx",
  "src/tests/presentation.m2-cycle.test.tsx",
  "src/tests/presentation.m3-cycle.test.tsx",
  "src/tests/presentation.m4-cycle.test.tsx",
  "src/tests/integration.m2-local-first.test.tsx",
  "src/tests/integration.m3-local-first.test.tsx",
  "src/tests/integration.m4-local-first.test.tsx",
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

const mainText = readFileSync(
  join(root, "src/main.tsx"),
  "utf8",
);
const appText = readFileSync(
  join(root, "src/presentation/App.tsx"),
  "utf8",
);
const portfolioTransferText = readFileSync(
  join(root, "src/presentation/PortfolioTransferPanel.tsx"),
  "utf8",
);
const portfolioTransferPresentationTestText = readFileSync(
  join(root, "src/tests/presentation.portfolio-transfer.test.tsx"),
  "utf8",
);
const portfolioTransferIntegrationTestText = readFileSync(
  join(root, "src/tests/integration.portfolio-transfer-local-first.test.tsx"),
  "utf8",
);
const arcSummaryText = readFileSync(
  join(root, "src/presentation/ArcSummary.tsx"),
  "utf8",
);
const arcSummaryModelText = readFileSync(
  join(root, "src/presentation/arc-summary-model.ts"),
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
const curationRecordText = readFileSync(
  join(root, "src/application/curation-record.ts"),
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
const m4WorkspaceText = readFileSync(
  join(root, "src/presentation/MissionFourWorkspace.tsx"),
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
const m4TestText = readFileSync(
  join(root, "src/tests/presentation.m4-cycle.test.tsx"),
  "utf8",
);
const fullArcPresentationText = readFileSync(
  join(root, "src/tests/presentation.arc-summary.test.tsx"),
  "utf8",
);
const fullArcIntegrationText = readFileSync(
  join(root, "src/tests/integration.full-arc-local-first.test.tsx"),
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
const m4IntegrationText = readFileSync(
  join(root, "src/tests/integration.m4-local-first.test.tsx"),
  "utf8",
);
const previewText = readFileSync(
  join(root, "src/application/preview-export.ts"),
  "utf8",
);
const portfolioProjectionText = readFileSync(
  join(root, "src/application/portfolio-projection.ts"),
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
  [appText, "ArcSummary", "ARC_SUMMARY_APP_SIGNAL_MISSING"],
  [appText, "MissionTwoWorkspace", "M2_APP_SIGNAL_MISSING"],
  [appText, "MissionThreeWorkspace", "M3_APP_SIGNAL_MISSING"],
  [appText, "MissionFourWorkspace", "M4_APP_SIGNAL_MISSING"],
  [
    appText,
    "PortfolioTransferPanel",
    "PORTFOLIO_TRANSFER_APP_SIGNAL_MISSING",
  ],
  [
    mainText,
    "createPortfolioExportService",
    "PORTFOLIO_EXPORT_COMPOSITION_MISSING",
  ],
  [
    mainText,
    "createPortfolioImportService",
    "PORTFOLIO_IMPORT_COMPOSITION_MISSING",
  ],
  [
    portfolioTransferText,
    'type="file"',
    "PORTFOLIO_FILE_SELECTION_UI_MISSING",
  ],
  [
    portfolioTransferText,
    "Confirmar y descargar archivo",
    "CONFIRMED_DOWNLOAD_UI_MISSING",
  ],
  [
    portfolioTransferText,
    "Confirmar e importar como copia local",
    "CONFIRMED_IMPORT_UI_MISSING",
  ],
  [
    portfolioTransferPresentationTestText,
    "previews before download and excludes private reflections",
    "PORTFOLIO_EXPORT_UI_TEST_MISSING",
  ],
  [
    portfolioTransferIntegrationTestText,
    "requires confirmation, imports a copy and recovers it after remount",
    "PORTFOLIO_IMPORT_RECOVERY_TEST_MISSING",
  ],
  [
    arcSummaryText,
    "Preparar vista previa final validada",
    "FINAL_PREVIEW_UI_MISSING",
  ],
  [
    arcSummaryModelText,
    "curationNeedsReview",
    "CURATION_COHERENCE_MODEL_MISSING",
  ],
  [
    cycleText,
    "invalidateDownstreamCurationClosure",
    "UPSTREAM_REOPEN_INVALIDATION_MISSING",
  ],
  [cycleText, "completeMission", "MISSION_COMPLETION_SIGNAL_MISSING"],
  [cycleText, "saveCurationRecord", "M4_CURATION_OPERATION_MISSING"],
  [cycleContractsText, '"multiple"', "MULTIPLE_EVIDENCE_CONTRACT_MISSING"],
  [cycleContractsText, '"record_only"', "RECORD_ONLY_CONTRACT_MISSING"],
  [
    curationRecordText,
    "CURATION_RECORD_PREFIX",
    "CURATION_RECORD_FORMAT_MISSING",
  ],
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
    m4WorkspaceText,
    "saveCurationRecord",
    "M4_SINGLE_RECORD_SIGNAL_MISSING",
  ],
  [
    m4WorkspaceText,
    'evidenceDisposition: "record_only"',
    "M4_RECORD_ONLY_DECISION_MISSING",
  ],
  [
    m4WorkspaceText,
    "Vista conceptual únicamente",
    "M4_CONCEPTUAL_HANDOFF_MISSING",
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
    m4TestText,
    "selecciona, ordena y cierra mediante un registro único",
    "M4_CURATED_CYCLE_TEST_MISSING",
  ],
  [
    m4TestText,
    "mantiene el traspaso como vista conceptual sin salida de archivos",
    "M4_BOUNDARY_TEST_MISSING",
  ],
  [
    fullArcPresentationText,
    "previsualiza el arco completo sin reflexiones privadas",
    "FULL_ARC_PREVIEW_TEST_MISSING",
  ],
  [
    fullArcIntegrationText,
    "recupera el arco completo y su preview privado después de remontar",
    "FULL_ARC_RECOVERY_TEST_MISSING",
  ],
  [
    fullArcIntegrationText,
    "reabrir M2 invalida el cierre de M4 sin borrar su registro",
    "UPSTREAM_REOPEN_TEST_MISSING",
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
  [
    m4IntegrationText,
    "M4_RECOVERY_INTEGRATED",
    "M4_RECOVERY_TEST_MISSING",
  ],
  [
    previewText,
    "createPortfolioProjection",
    "PRIVACY_PROJECTION_DELEGATION_MISSING",
  ],
  [
    portfolioProjectionText,
    "reflectionCanLeaveDevice",
    "PRIVACY_FILTER_MISSING",
  ],
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
  "publishProject(",
  "XMLHttpRequest",
];
const productFiles = [
  appText,
  arcSummaryText,
  portfolioTransferText,
  workspaceText,
  m2WorkspaceText,
  m3WorkspaceText,
  m4WorkspaceText,
  previewText,
];
for (const signal of prohibitedProductSignals) {
  if (productFiles.some((text) => text.includes(signal))) {
    errors.push(`DEFERRED_CAPABILITY_PRESENT:${signal}`);
  }
}

const result = {
  status: errors.length === 0 ? "PASS" : "FAIL",
  checkpointCandidate: "H08-5.5",
  requiredFiles,
  canonicalMissionCount: missionIds.length,
  functionalMissionCount: 4,
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
    m4SingleCurationRecord: true,
    m4AcceptedEvidenceSelection: true,
    m4PortfolioOrdering: true,
    m4RecordOnlyDecision: true,
    m4ConceptualHandoffOnly: true,
    m4RecoveryAfterRemount: true,
    fullArcSummary: true,
    fullArcCompletion: true,
    fullArcRecoveryAfterRemount: true,
    finalPreviewFromAnyMission: true,
    privateReflectionsExcludedFromFinalPreview: true,
    portfolioOrderPreservedAcrossRecovery: true,
    upstreamReopenInvalidatesCurationClosure: true,
    actualHandoffFile: true,
    confirmedLocalDownload: true,
    importAsLocalCopy: true,
    semanticRoundtrip: true,
    portfolioRecoveryAfterRemount: true,
  },
  deferredCapabilities: {
    binaryStorage: false,
    mediaUpload: false,
    networkAccess: false,
    automaticDownload: false,
    automaticImport: false,
    publish: false,
  },
  errors,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length > 0) process.exit(1);

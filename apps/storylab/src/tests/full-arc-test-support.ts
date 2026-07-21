import type {
  CreativeCycleMutationUseCases,
  CreativeCycleProjectResult,
} from "../application";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type { CreativeProject } from "../domain/model";
import type {
  EvidenceId,
  ProjectId,
} from "../domain/types";

const PRIVATE_MARKERS = [
  "FULL_ARC_PRIVATE_M1",
  "FULL_ARC_PRIVATE_M2",
  "FULL_ARC_PRIVATE_M3",
  "FULL_ARC_PRIVATE_M4",
] as const;

const unwrap = async (
  operation: Promise<CreativeCycleProjectResult>,
  label: string,
): Promise<CreativeProject> => {
  const result = await operation;
  if (!result.ok) {
    throw new Error(`${label}:${result.error.code}`);
  }
  return result.value;
};

export interface FullArcFixture {
  readonly project: CreativeProject;
  readonly selectedEvidenceIds: readonly EvidenceId[];
  readonly rejectedEvidenceId: EvidenceId;
  readonly privateMarkers: typeof PRIVATE_MARKERS;
  readonly portfolioTitles: readonly string[];
}

export const completeFullArc = async (
  useCases: CreativeCycleMutationUseCases,
  projectId: ProjectId,
): Promise<FullArcFixture> => {
  const selectedEvidenceIds: EvidenceId[] = [];
  const portfolioTitles = [
    "Producción integrada",
    "Arquitectura integrada",
    "Intención integrada",
  ] as const;

  for (const [missionIndex, title, marker] of [
    [0, "Intención integrada", PRIVATE_MARKERS[0]],
    [1, "Arquitectura integrada", PRIVATE_MARKERS[1]],
  ] as const) {
    const definition = MISSION_CATALOG[missionIndex];

    await unwrap(
      useCases.startMission({ projectId, definition }),
      `start-${missionIndex}`,
    );
    await unwrap(
      useCases.saveTextActivity({
        projectId,
        missionId: definition.id,
        text: `Actividad transversal de ${title}.`,
      }),
      `activity-${missionIndex}`,
    );
    const created = await unwrap(
      useCases.createTextEvidence({
        projectId,
        missionId: definition.id,
        title,
        summary: `Resumen transversal de ${title}.`,
      }),
      `evidence-${missionIndex}`,
    );
    const evidence = created.evidence.find(
      (item) => item.missionId === definition.id,
    );
    if (!evidence) {
      throw new Error(`FULL_ARC_SOURCE_MISSING:${missionIndex}`);
    }

    await unwrap(
      useCases.saveReflection({
        projectId,
        missionId: definition.id,
        text: marker,
        privacyClass: "private",
      }),
      `reflection-${missionIndex}`,
    );
    await unwrap(
      useCases.decideEvidence({
        projectId,
        evidenceId: evidence.id,
        value: "accept",
      }),
      `decision-${missionIndex}`,
    );
    selectedEvidenceIds.push(evidence.id);
  }

  const productionDefinition = MISSION_CATALOG[2];
  await unwrap(
    useCases.startMission({
      projectId,
      definition: productionDefinition,
    }),
    "start-m3",
  );
  await unwrap(
    useCases.saveTextActivity({
      projectId,
      missionId: productionDefinition.id,
      text: "Plan transversal de producción sintética.",
    }),
    "activity-m3",
  );
  const acceptedProduction = await unwrap(
    useCases.createTextEvidence({
      projectId,
      missionId: productionDefinition.id,
      cardinality: "multiple",
      title: "Producción integrada",
      summary:
        "[medio_sintetico:image_description]\nPieza integrada aceptada.",
    }),
    "accepted-evidence-m3",
  );
  const acceptedProductionEvidence =
    acceptedProduction.evidence.find(
      (item) => item.title === "Producción integrada",
    );
  if (!acceptedProductionEvidence) {
    throw new Error("FULL_ARC_M3_ACCEPTED_MISSING");
  }

  const rejectedProduction = await unwrap(
    useCases.createTextEvidence({
      projectId,
      missionId: productionDefinition.id,
      cardinality: "multiple",
      title: "Borrador descartado",
      summary:
        "[medio_sintetico:audio_description]\nPieza integrada rechazada.",
    }),
    "rejected-evidence-m3",
  );
  const rejectedProductionEvidence =
    rejectedProduction.evidence.find(
      (item) => item.title === "Borrador descartado",
    );
  if (!rejectedProductionEvidence) {
    throw new Error("FULL_ARC_M3_REJECTED_MISSING");
  }

  await unwrap(
    useCases.saveReflection({
      projectId,
      missionId: productionDefinition.id,
      text: PRIVATE_MARKERS[2],
      privacyClass: "private",
    }),
    "reflection-m3",
  );
  await unwrap(
    useCases.decideEvidence({
      projectId,
      evidenceId: acceptedProductionEvidence.id,
      value: "accept",
      missionDisposition: "keep_open",
    }),
    "accept-m3",
  );
  await unwrap(
    useCases.decideEvidence({
      projectId,
      evidenceId: rejectedProductionEvidence.id,
      value: "reject",
      missionDisposition: "keep_open",
    }),
    "reject-m3",
  );
  await unwrap(
    useCases.completeMission({
      projectId,
      missionId: productionDefinition.id,
    }),
    "complete-m3",
  );

  const curationDefinition = MISSION_CATALOG[3];
  await unwrap(
    useCases.startMission({
      projectId,
      definition: curationDefinition,
    }),
    "start-m4",
  );
  await unwrap(
    useCases.saveTextActivity({
      projectId,
      missionId: curationDefinition.id,
      text: "Lectura transversal del arco completo.",
    }),
    "activity-m4",
  );

  const orderedEvidenceIds = [
    acceptedProductionEvidence.id,
    selectedEvidenceIds[1]!,
    selectedEvidenceIds[0]!,
  ];

  const curated = await unwrap(
    useCases.saveCurationRecord({
      projectId,
      missionId: curationDefinition.id,
      title: "Registro de integración H08-4.5",
      statement:
        "La selección final representa intención, arquitectura y producción.",
      handoff:
        "Continuar con revisión humana antes de cualquier capacidad futura.",
      selectedEvidenceIds: orderedEvidenceIds,
    }),
    "curation-m4",
  );
  const curationRecord = curated.evidence.find(
    (item) => item.missionId === curationDefinition.id,
  );
  if (!curationRecord) {
    throw new Error("FULL_ARC_M4_RECORD_MISSING");
  }

  await unwrap(
    useCases.saveReflection({
      projectId,
      missionId: curationDefinition.id,
      text: PRIVATE_MARKERS[3],
      privacyClass: "private",
    }),
    "reflection-m4",
  );
  const project = await unwrap(
    useCases.decideEvidence({
      projectId,
      evidenceId: curationRecord.id,
      value: "accept",
      evidenceDisposition: "record_only",
    }),
    "decision-m4",
  );

  return {
    project,
    selectedEvidenceIds: orderedEvidenceIds,
    rejectedEvidenceId: rejectedProductionEvidence.id,
    privateMarkers: PRIVATE_MARKERS,
    portfolioTitles,
  };
};

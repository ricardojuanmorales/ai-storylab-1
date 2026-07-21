import { parseCurationRecord } from "../application/curation-record";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type {
  CreativeProject,
  MissionDefinition,
  PortfolioItem,
} from "../domain/model";
import type { MissionStatus } from "../domain/types";

export interface ArcMissionSummary {
  readonly definition: MissionDefinition;
  readonly status: MissionStatus;
  readonly activityCount: number;
  readonly evidenceCount: number;
  readonly decisionCount: number;
  readonly reflectionCount: number;
}

export interface ArcPortfolioSummary {
  readonly item: PortfolioItem;
  readonly evidenceTitle: string;
}

export interface ArcSummarySnapshot {
  readonly missions: readonly ArcMissionSummary[];
  readonly completedMissionCount: number;
  readonly canonicalMissionCount: number;
  readonly allMissionsCompleted: boolean;
  readonly portfolio: readonly ArcPortfolioSummary[];
  readonly privateReflectionCount: number;
  readonly curationNeedsReview: boolean;
  readonly readyForFinalPreview: boolean;
}

export const missionStatusLabel = (
  status: MissionStatus,
): string =>
  status === "not_started"
    ? "No iniciada"
    : status === "in_progress"
      ? "En progreso"
      : status === "ready_for_review"
        ? "Lista para revisión"
        : status === "completed"
          ? "Completada"
          : "Reabierta";

const sameOrderedIds = (
  left: readonly string[],
  right: readonly string[],
): boolean =>
  left.length === right.length &&
  left.every((value, index) => value === right[index]);

export const selectArcSummarySnapshot = (
  project: CreativeProject,
): ArcSummarySnapshot => {
  const missions = MISSION_CATALOG.map((definition) => {
    const progress = project.missions.find(
      (item) => item.missionId === definition.id,
    );
    const evidence = project.evidence.filter(
      (item) => item.missionId === definition.id,
    );
    const evidenceIds = new Set(
      evidence.map((item) => item.id as string),
    );

    return {
      definition,
      status: progress?.status ?? "not_started",
      activityCount: project.activityResponses.filter(
        (item) => item.missionId === definition.id,
      ).length,
      evidenceCount: evidence.length,
      decisionCount: project.decisions.filter((item) =>
        evidenceIds.has(item.evidenceId as string),
      ).length,
      reflectionCount: project.reflections.filter(
        (item) => item.missionId === definition.id,
      ).length,
    };
  });

  const portfolio = [...project.portfolio.items]
    .sort((left, right) => left.order - right.order)
    .map((item) => ({
      item,
      evidenceTitle:
        project.evidence.find(
          (evidence) => evidence.id === item.evidenceId,
        )?.title ?? item.title,
    }));

  const acceptedEvidenceIds = new Set(
    project.decisions
      .filter(
        (decision) =>
          decision.actor === "human_user" &&
          decision.value === "accept",
      )
      .map((decision) => decision.evidenceId as string),
  );

  const curationEvidence = project.evidence.find(
    (item) => item.missionId === MISSION_CATALOG[3].id,
  );
  const curationDocument = curationEvidence
    ? parseCurationRecord(curationEvidence.summary)
    : null;
  const selectedIds =
    curationDocument?.selectedEvidenceIds.map((id) => id as string) ??
    [];
  const portfolioIds = portfolio.map(
    ({ item }) => item.evidenceId as string,
  );
  const curationSelectionIsCurrent =
    !curationDocument ||
    (selectedIds.every((id) => acceptedEvidenceIds.has(id)) &&
      sameOrderedIds(selectedIds, portfolioIds));
  const completedMissionCount = missions.filter(
    (mission) => mission.status === "completed",
  ).length;
  const allMissionsCompleted =
    completedMissionCount === MISSION_CATALOG.length;
  const curationNeedsReview = Boolean(
    curationDocument && !curationSelectionIsCurrent,
  );

  return {
    missions,
    completedMissionCount,
    canonicalMissionCount: MISSION_CATALOG.length,
    allMissionsCompleted,
    portfolio,
    privateReflectionCount: project.reflections.filter(
      (item) => item.privacyClass === "private",
    ).length,
    curationNeedsReview,
    readyForFinalPreview:
      allMissionsCompleted &&
      portfolio.length > 0 &&
      !curationNeedsReview,
  };
};

import { MISSION_CATALOG } from "../domain/mission-catalog";
import type {
  ActivityResponse,
  CreativeProject,
  Evidence,
  HumanDecision,
  MissionDefinition,
  MissionProgress,
  PortfolioItem,
  Reflection,
} from "../domain/model";
import type { MissionId } from "../domain/types";

export type MissionEvidenceCardinality =
  | "one_editable"
  | "multiple"
  | "one_curation_record";

export type MissionReflectionCardinality =
  "zero_or_one_editable_private";

export type MissionDecisionCardinality =
  "zero_or_one_current_human_decision";

export type MissionAvailability = "functional" | "planned";

export interface MissionWorkspacePolicy {
  readonly definition: MissionDefinition;
  readonly label: string;
  readonly availability: MissionAvailability;
  readonly evidenceCardinality: MissionEvidenceCardinality;
  readonly reflectionCardinality: MissionReflectionCardinality;
  readonly decisionCardinality: MissionDecisionCardinality;
}

interface MissionPolicySeed {
  readonly label: string;
  readonly availability: MissionAvailability;
  readonly evidenceCardinality: MissionEvidenceCardinality;
}

const POLICY_BY_ID: Readonly<Record<string, MissionPolicySeed>> = {
  "mission-intention": {
    label: "M1",
    availability: "functional",
    evidenceCardinality: "one_editable",
  },
  "mission-architecture": {
    label: "M2",
    availability: "functional",
    evidenceCardinality: "one_editable",
  },
  "mission-production": {
    label: "M3",
    availability: "planned",
    evidenceCardinality: "multiple",
  },
  "mission-curation": {
    label: "M4",
    availability: "planned",
    evidenceCardinality: "one_curation_record",
  },
};

export const MISSION_WORKSPACE_POLICIES: readonly MissionWorkspacePolicy[] =
  MISSION_CATALOG.map((definition) => {
    const seed = POLICY_BY_ID[definition.id as string];

    if (!seed) {
      throw new Error(`Missing workspace policy for ${definition.id as string}`);
    }

    return {
      definition,
      ...seed,
      reflectionCardinality: "zero_or_one_editable_private",
      decisionCardinality: "zero_or_one_current_human_decision",
    };
  });

export const getMissionWorkspacePolicy = (
  missionId: MissionId,
): MissionWorkspacePolicy | undefined =>
  MISSION_WORKSPACE_POLICIES.find(
    (policy) => policy.definition.id === missionId,
  );

export interface MissionWorkspaceSnapshot {
  readonly mission: MissionProgress | undefined;
  readonly activities: readonly ActivityResponse[];
  readonly evidence: readonly Evidence[];
  readonly reflections: readonly Reflection[];
  readonly decisions: readonly HumanDecision[];
  readonly portfolioItems: readonly PortfolioItem[];
  readonly primaryActivity: ActivityResponse | undefined;
  readonly primaryEvidence: Evidence | undefined;
  readonly primaryReflection: Reflection | undefined;
  readonly primaryDecision: HumanDecision | undefined;
  readonly primaryPortfolioItem: PortfolioItem | undefined;
}

export const selectMissionWorkspaceSnapshot = (
  project: CreativeProject,
  missionId: MissionId,
): MissionWorkspaceSnapshot => {
  const activities = project.activityResponses.filter(
    (item) => item.missionId === missionId,
  );
  const evidence = project.evidence.filter(
    (item) => item.missionId === missionId,
  );
  const reflections = project.reflections.filter(
    (item) => item.missionId === missionId,
  );
  const evidenceIds = new Set(
    evidence.map((item) => item.id as string),
  );
  const decisions = project.decisions.filter((item) =>
    evidenceIds.has(item.evidenceId as string),
  );
  const portfolioItems = project.portfolio.items.filter((item) =>
    evidenceIds.has(item.evidenceId as string),
  );
  const primaryEvidence = evidence[0];

  return {
    mission: project.missions.find((item) => item.missionId === missionId),
    activities,
    evidence,
    reflections,
    decisions,
    portfolioItems,
    primaryActivity: activities[0],
    primaryEvidence,
    primaryReflection: reflections[0],
    primaryDecision: primaryEvidence
      ? decisions.find((item) => item.evidenceId === primaryEvidence.id)
      : undefined,
    primaryPortfolioItem: primaryEvidence
      ? portfolioItems.find((item) => item.evidenceId === primaryEvidence.id)
      : undefined,
  };
};

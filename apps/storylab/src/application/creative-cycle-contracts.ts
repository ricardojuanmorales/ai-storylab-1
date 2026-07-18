import type { DomainError } from "../domain/errors";
import type {
  CreativeProject,
  ExportPackage,
  MissionDefinition,
} from "../domain/model";
import type { Result } from "../domain/result";
import type {
  ActivityResponseId,
  EvidenceId,
  HumanDecisionValue,
  MissionId,
  PortfolioItemId,
  ProjectId,
  ReflectionPrivacyClass,
} from "../domain/types";

export interface StartMissionInput {
  readonly projectId: ProjectId;
  readonly definition: MissionDefinition;
}

export interface ReopenMissionInput {
  readonly projectId: ProjectId;
  readonly missionId: MissionId;
}

export interface SaveTextActivityInput {
  readonly projectId: ProjectId;
  readonly missionId: MissionId;
  readonly responseId?: ActivityResponseId;
  readonly text: string;
}

export interface CreateTextEvidenceInput {
  readonly projectId: ProjectId;
  readonly missionId: MissionId;
  readonly title: string;
  readonly summary: string;
}

export interface SaveReflectionInput {
  readonly projectId: ProjectId;
  readonly missionId: MissionId;
  readonly text: string;
  readonly privacyClass: ReflectionPrivacyClass;
}

export interface DecideEvidenceInput {
  readonly projectId: ProjectId;
  readonly evidenceId: EvidenceId;
  readonly value: HumanDecisionValue;
  readonly rationale?: string;
}

export interface CuratePortfolioInput {
  readonly projectId: ProjectId;
  readonly evidenceId: EvidenceId;
  readonly title: string;
}

export interface RemovePortfolioItemInput {
  readonly projectId: ProjectId;
  readonly portfolioItemId: PortfolioItemId;
}

export interface PreviewExportInput {
  readonly projectId: ProjectId;
}

export type CreativeCycleProjectResult = Result<CreativeProject, DomainError>;
export type ExportPreviewResult = Result<ExportPackage, DomainError>;

export interface CreativeCycleUseCases {
  readonly startMission: (
    input: StartMissionInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly reopenMission: (
    input: ReopenMissionInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly saveTextActivity: (
    input: SaveTextActivityInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly createTextEvidence: (
    input: CreateTextEvidenceInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly saveReflection: (
    input: SaveReflectionInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly decideEvidence: (
    input: DecideEvidenceInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly curatePortfolio: (
    input: CuratePortfolioInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly removePortfolioItem: (
    input: RemovePortfolioItemInput,
  ) => Promise<CreativeCycleProjectResult>;
  readonly previewExport: (
    input: PreviewExportInput,
  ) => Promise<ExportPreviewResult>;
}

export type CreativeCycleMutationUseCases = Omit<
  CreativeCycleUseCases,
  "previewExport"
>;

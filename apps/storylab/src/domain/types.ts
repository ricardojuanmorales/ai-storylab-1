export type Brand<Value, Name extends string> = Value & {
  readonly __brand: Name;
};

export type ProjectId = Brand<string, "ProjectId">;
export type MissionId = Brand<string, "MissionId">;
export type ActivityResponseId = Brand<string, "ActivityResponseId">;
export type EvidenceId = Brand<string, "EvidenceId">;
export type ReflectionId = Brand<string, "ReflectionId">;
export type HumanDecisionId = Brand<string, "HumanDecisionId">;
export type PortfolioItemId = Brand<string, "PortfolioItemId">;
export type ISODateTime = Brand<string, "ISODateTime">;

export type ProjectStatus =
  | "new"
  | "active"
  | "review"
  | "completed"
  | "archived";

export type MissionStatus =
  | "not_started"
  | "in_progress"
  | "ready_for_review"
  | "completed"
  | "reopened";

export type EvidenceStatus =
  | "draft"
  | "reviewed"
  | "accepted_for_portfolio"
  | "removed";

export type PrivacyClass =
  | "private"
  | "shareable_with_purpose"
  | "exportable_after_review"
  | "institutional_public"
  | "high_care";

export type HumanDecisionValue = "accept" | "revise" | "reject" | "defer";

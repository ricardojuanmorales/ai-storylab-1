import {
  validateMissionTransition,
  validateProjectInvariants,
} from "../domain/invariants";
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
import { err, ok, type Result } from "../domain/result";
import type {
  ISODateTime,
  MissionId,
  MissionStatus,
  ProjectId,
} from "../domain/types";
import type { DomainError } from "../domain/errors";
import type { Clock, IdGenerator, ProjectRepository } from "../ports";
import type {
  CreativeCycleMutationUseCases,
  CreativeCycleProjectResult,
} from "./creative-cycle-contracts";

export interface CreativeCycleDependencies {
  readonly repository: ProjectRepository;
  readonly clock: Clock;
  readonly ids: IdGenerator;
}

const domainError = (
  code: DomainError["code"],
  path: string,
  safeMessage: string,
  details?: Readonly<Record<string, unknown>>,
): DomainError => {
  const base = { code, path, safeMessage };
  return details === undefined ? base : { ...base, details };
};

const loadExistingProject = async (
  projectId: ProjectId,
  repository: ProjectRepository,
): Promise<Result<CreativeProject, DomainError>> => {
  const loaded = await repository.load(projectId);
  if (!loaded.ok) return loaded;
  if (!loaded.value) {
    return err(
      domainError(
        "PROJECT_NOT_FOUND",
        "projectId",
        "No se encontró el proyecto local.",
      ),
    );
  }
  return ok(loaded.value);
};

const persist = async (
  project: CreativeProject,
  dependencies: CreativeCycleDependencies,
): Promise<CreativeCycleProjectResult> => {
  const [firstError] = validateProjectInvariants(project);
  if (firstError) return err(firstError);

  const saved = await dependencies.repository.save(project);
  if (!saved.ok) return saved;
  return ok(project);
};

const missionWithStatus = (
  mission: MissionProgress,
  status: MissionStatus,
  now: ISODateTime,
): MissionProgress => ({
  missionId: mission.missionId,
  status,
  ...(mission.startedAt ? { startedAt: mission.startedAt } : {}),
  ...(status === "completed" ? { completedAt: now } : {}),
});

const replaceMission = (
  missions: readonly MissionProgress[],
  replacement: MissionProgress,
): readonly MissionProgress[] =>
  missions.map((mission) =>
    mission.missionId === replacement.missionId ? replacement : mission,
  );

const reorderPortfolio = (
  items: readonly PortfolioItem[],
): readonly PortfolioItem[] =>
  items.map((item, order) => ({ ...item, order }));

const missionEvidenceIds = (
  project: CreativeProject,
  missionId: MissionId,
): ReadonlySet<string> =>
  new Set(
    project.evidence
      .filter((item) => item.missionId === missionId)
      .map((item) => item.id as string),
  );

const invalidateMissionOutputs = (
  project: CreativeProject,
  missionId: MissionId,
): Pick<CreativeProject, "evidence" | "decisions" | "portfolio"> => {
  const evidenceIds = missionEvidenceIds(project, missionId);
  return {
    evidence: project.evidence.map((item) =>
      evidenceIds.has(item.id as string) ? { ...item, status: "draft" } : item,
    ),
    decisions: project.decisions.filter(
      (decision) => !evidenceIds.has(decision.evidenceId as string),
    ),
    portfolio: {
      items: reorderPortfolio(
        project.portfolio.items.filter(
          (item) => !evidenceIds.has(item.evidenceId as string),
        ),
      ),
    },
  };
};

const findMission = (
  project: CreativeProject,
  missionId: MissionId,
): MissionProgress | undefined =>
  project.missions.find((mission) => mission.missionId === missionId);

const requireMission = (
  project: CreativeProject,
  missionId: MissionId,
): Result<MissionProgress, DomainError> => {
  const mission = findMission(project, missionId);
  return mission
    ? ok(mission)
    : err(
        domainError(
          "MISSION_NOT_FOUND",
          "missionId",
          "No se encontró la misión solicitada.",
        ),
      );
};

const validDefinition = (definition: MissionDefinition): boolean =>
  definition.title.trim().length > 0 &&
  definition.purpose.trim().length > 0 &&
  definition.instructions.length > 0 &&
  definition.instructions.every((instruction) => instruction.trim().length > 0);

const ensureTransition = (
  from: MissionStatus,
  to: MissionStatus,
): Result<void, DomainError> => {
  if (from === to) return ok(undefined);
  const [firstError] = validateMissionTransition(from, to);
  return firstError ? err(firstError) : ok(undefined);
};

export const createCreativeCycleUseCases = (
  dependencies: CreativeCycleDependencies,
): CreativeCycleMutationUseCases => ({
  startMission: async (input) => {
    if (!validDefinition(input.definition)) {
      return err(
        domainError(
          "MISSION_DEFINITION_INVALID",
          "definition",
          "La definición de la misión está incompleta.",
        ),
      );
    }

    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const existing = findMission(project, input.definition.id);
    const now = dependencies.clock.now();

    if (existing?.status === "in_progress") return ok(project);
    if (existing && existing.status !== "not_started") {
      return err(
        domainError(
          "INVALID_STATE_TRANSITION",
          "mission.status",
          "Use la edición o la reapertura para continuar esta misión.",
          { status: existing.status },
        ),
      );
    }
    if (existing) {
      const transition = ensureTransition(existing.status, "in_progress");
      if (!transition.ok) return transition;
    }

    const mission: MissionProgress = existing
      ? missionWithStatus(existing, "in_progress", now)
      : {
          missionId: input.definition.id,
          status: "in_progress",
          startedAt: now,
        };

    return persist(
      {
        ...project,
        status: project.status === "new" ? "active" : project.status,
        missions: existing
          ? replaceMission(project.missions, mission)
          : [...project.missions, mission],
        updatedAt: now,
      },
      dependencies,
    );
  },

  reopenMission: async (input) => {
    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const missionResult = requireMission(project, input.missionId);
    if (!missionResult.ok) return missionResult;

    const transition = ensureTransition(missionResult.value.status, "reopened");
    if (!transition.ok) return transition;

    const now = dependencies.clock.now();
    const invalidated = invalidateMissionOutputs(project, input.missionId);

    return persist(
      {
        ...project,
        status: "active",
        missions: replaceMission(
          project.missions,
          missionWithStatus(missionResult.value, "reopened", now),
        ),
        ...invalidated,
        updatedAt: now,
      },
      dependencies,
    );
  },

  saveTextActivity: async (input) => {
    const text = input.text.trim();
    if (!text) {
      return err(
        domainError(
          "ACTIVITY_TEXT_REQUIRED",
          "text",
          "Escriba un borrador antes de guardarlo.",
        ),
      );
    }

    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const missionResult = requireMission(project, input.missionId);
    if (!missionResult.ok) return missionResult;

    if (missionResult.value.status === "completed") {
      return err(
        domainError(
          "INVALID_STATE_TRANSITION",
          "mission.status",
          "Reabra la misión antes de editar su actividad.",
        ),
      );
    }

    const transition = ensureTransition(
      missionResult.value.status,
      "in_progress",
    );
    if (!transition.ok) return transition;

    const existing = input.responseId
      ? project.activityResponses.find(
          (response) => response.id === input.responseId,
        )
      : project.activityResponses.find(
          (response) => response.missionId === input.missionId,
        );

    if (input.responseId && !existing) {
      return err(
        domainError(
          "ACTIVITY_RESPONSE_NOT_FOUND",
          "responseId",
          "No se encontró el borrador solicitado.",
        ),
      );
    }

    const now = dependencies.clock.now();
    const response: ActivityResponse = existing
      ? {
          ...existing,
          text,
          updatedAt: now,
        }
      : {
          id: dependencies.ids.next("activity") as ActivityResponse["id"],
          missionId: input.missionId,
          text,
          updatedAt: now,
        };

    const invalidated = invalidateMissionOutputs(project, input.missionId);

    return persist(
      {
        ...project,
        status: "active",
        missions: replaceMission(
          project.missions,
          missionWithStatus(missionResult.value, "in_progress", now),
        ),
        activityResponses: existing
          ? project.activityResponses.map((item) =>
              item.id === response.id ? response : item,
            )
          : [...project.activityResponses, response],
        ...invalidated,
        updatedAt: now,
      },
      dependencies,
    );
  },

  createTextEvidence: async (input) => {
    const title = input.title.trim();
    const summary = input.summary.trim();

    if (!title) {
      return err(
        domainError(
          "EVIDENCE_TITLE_REQUIRED",
          "title",
          "Se requiere un título para la evidencia.",
        ),
      );
    }
    if (!summary) {
      return err(
        domainError(
          "EVIDENCE_SUMMARY_REQUIRED",
          "summary",
          "Se requiere un resumen para la evidencia.",
        ),
      );
    }

    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const missionResult = requireMission(project, input.missionId);
    if (!missionResult.ok) return missionResult;

    if (missionResult.value.status === "completed") {
      return err(
        domainError(
          "INVALID_STATE_TRANSITION",
          "mission.status",
          "Reabra la misión antes de modificar su evidencia.",
        ),
      );
    }

    const activity = project.activityResponses.find(
      (response) => response.missionId === input.missionId,
    );
    if (!activity) {
      return err(
        domainError(
          "ACTIVITY_RESPONSE_NOT_FOUND",
          "missionId",
          "Guarde una actividad antes de crear evidencia.",
        ),
      );
    }

    const transition = ensureTransition(
      missionResult.value.status,
      "ready_for_review",
    );
    if (!transition.ok) return transition;

    const existing = project.evidence.find(
      (item) => item.missionId === input.missionId,
    );
    const now = dependencies.clock.now();
    const evidence: Evidence = existing
      ? {
          ...existing,
          title,
          summary,
          status: "draft",
        }
      : {
          id: dependencies.ids.next("evidence") as Evidence["id"],
          missionId: input.missionId,
          title,
          kind: "text",
          summary,
          status: "draft",
          createdAt: now,
        };

    const evidenceIds = new Set([evidence.id as string]);

    return persist(
      {
        ...project,
        status: "active",
        missions: replaceMission(
          project.missions,
          missionWithStatus(missionResult.value, "ready_for_review", now),
        ),
        evidence: existing
          ? project.evidence.map((item) =>
              item.id === evidence.id ? evidence : item,
            )
          : [...project.evidence, evidence],
        decisions: project.decisions.filter(
          (decision) => !evidenceIds.has(decision.evidenceId as string),
        ),
        portfolio: {
          items: reorderPortfolio(
            project.portfolio.items.filter(
              (item) => !evidenceIds.has(item.evidenceId as string),
            ),
          ),
        },
        updatedAt: now,
      },
      dependencies,
    );
  },

  saveReflection: async (input) => {
    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const missionResult = requireMission(project, input.missionId);
    if (!missionResult.ok) return missionResult;

    const evidence = project.evidence.find(
      (item) => item.missionId === input.missionId,
    );
    if (!evidence) {
      return err(
        domainError(
          "EVIDENCE_NOT_FOUND",
          "missionId",
          "Cree una evidencia antes de guardar la reflexión.",
        ),
      );
    }

    const text = input.text.trim();
    const existing = project.reflections.find(
      (reflection) => reflection.missionId === input.missionId,
    );
    const now = dependencies.clock.now();

    if (!text) {
      return persist(
        {
          ...project,
          reflections: project.reflections.filter(
            (reflection) => reflection.missionId !== input.missionId,
          ),
          updatedAt: now,
        },
        dependencies,
      );
    }

    const reflection: Reflection = existing
      ? {
          ...existing,
          text,
          privacyClass: input.privacyClass,
          selectedForExport: false,
        }
      : {
          id: dependencies.ids.next("reflection") as Reflection["id"],
          missionId: input.missionId,
          text,
          privacyClass: input.privacyClass,
          selectedForExport: false,
          createdAt: now,
        };

    return persist(
      {
        ...project,
        reflections: existing
          ? project.reflections.map((item) =>
              item.id === reflection.id ? reflection : item,
            )
          : [...project.reflections, reflection],
        updatedAt: now,
      },
      dependencies,
    );
  },

  decideEvidence: async (input) => {
    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const evidence = project.evidence.find(
      (item) => item.id === input.evidenceId,
    );
    if (!evidence) {
      return err(
        domainError(
          "EVIDENCE_NOT_FOUND",
          "evidenceId",
          "No se encontró la evidencia solicitada.",
        ),
      );
    }

    const missionResult = requireMission(project, evidence.missionId);
    if (!missionResult.ok) return missionResult;
    if (missionResult.value.status !== "ready_for_review") {
      return err(
        domainError(
          "INVALID_STATE_TRANSITION",
          "mission.status",
          "La evidencia debe estar lista para revisión.",
        ),
      );
    }

    const now = dependencies.clock.now();
    const rationale = input.rationale?.trim();
    const decision: HumanDecision = {
      id: dependencies.ids.next("decision") as HumanDecision["id"],
      evidenceId: input.evidenceId,
      actor: "human_user",
      value: input.value,
      ...(rationale ? { rationale } : {}),
      decidedAt: now,
    };

    const missionStatus: MissionStatus =
      input.value === "accept" || input.value === "reject"
        ? "completed"
        : input.value === "revise"
          ? "in_progress"
          : "ready_for_review";

    const transition = ensureTransition(
      missionResult.value.status,
      missionStatus,
    );
    if (!transition.ok) return transition;

    const keepPortfolio = input.value === "accept";

    return persist(
      {
        ...project,
        missions: replaceMission(
          project.missions,
          missionWithStatus(missionResult.value, missionStatus, now),
        ),
        evidence: project.evidence.map((item) =>
          item.id === evidence.id
            ? {
                ...item,
                status:
                  input.value === "accept"
                    ? "accepted_for_portfolio"
                    : "reviewed",
              }
            : item,
        ),
        decisions: [
          ...project.decisions.filter(
            (item) => item.evidenceId !== input.evidenceId,
          ),
          decision,
        ],
        portfolio: keepPortfolio
          ? project.portfolio
          : {
              items: reorderPortfolio(
                project.portfolio.items.filter(
                  (item) => item.evidenceId !== input.evidenceId,
                ),
              ),
            },
        updatedAt: now,
      },
      dependencies,
    );
  },

  curatePortfolio: async (input) => {
    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const evidence = project.evidence.find(
      (item) => item.id === input.evidenceId,
    );
    if (!evidence) {
      return err(
        domainError(
          "EVIDENCE_NOT_FOUND",
          "evidenceId",
          "No se encontró la evidencia solicitada.",
        ),
      );
    }

    const accepted = project.decisions.some(
      (decision) =>
        decision.evidenceId === input.evidenceId &&
        decision.actor === "human_user" &&
        decision.value === "accept",
    );
    if (!accepted) {
      return err(
        domainError(
          "HUMAN_DECISION_REQUIRED",
          "evidenceId",
          "La curaduría requiere una decisión humana de aceptación.",
        ),
      );
    }

    if (
      project.portfolio.items.some(
        (item) => item.evidenceId === input.evidenceId,
      )
    ) {
      return err(
        domainError(
          "PORTFOLIO_DUPLICATE_EVIDENCE",
          "evidenceId",
          "La evidencia ya está en el portafolio.",
        ),
      );
    }

    const now = dependencies.clock.now();
    const item: PortfolioItem = {
      id: dependencies.ids.next("portfolio") as PortfolioItem["id"],
      evidenceId: input.evidenceId,
      title: input.title.trim() || evidence.title,
      order: project.portfolio.items.length,
      includedAt: now,
    };

    return persist(
      {
        ...project,
        evidence: project.evidence.map((candidate) =>
          candidate.id === evidence.id
            ? { ...candidate, status: "accepted_for_portfolio" }
            : candidate,
        ),
        portfolio: {
          items: [...project.portfolio.items, item],
        },
        updatedAt: now,
      },
      dependencies,
    );
  },

  removePortfolioItem: async (input) => {
    const loaded = await loadExistingProject(
      input.projectId,
      dependencies.repository,
    );
    if (!loaded.ok) return loaded;

    const project = loaded.value;
    const item = project.portfolio.items.find(
      (candidate) => candidate.id === input.portfolioItemId,
    );
    if (!item) {
      return err(
        domainError(
          "PORTFOLIO_ITEM_NOT_FOUND",
          "portfolioItemId",
          "No se encontró el elemento de portafolio.",
        ),
      );
    }

    const now = dependencies.clock.now();

    return persist(
      {
        ...project,
        evidence: project.evidence.map((evidence) =>
          evidence.id === item.evidenceId
            ? { ...evidence, status: "removed" }
            : evidence,
        ),
        portfolio: {
          items: reorderPortfolio(
            project.portfolio.items.filter(
              (candidate) => candidate.id !== input.portfolioItemId,
            ),
          ),
        },
        updatedAt: now,
      },
      dependencies,
    );
  },
});

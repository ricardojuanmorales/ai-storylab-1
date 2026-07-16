import { describe, expect, it } from "vitest";
import {
  canTransitionMission,
  validateMissionTransition,
  validateProjectInvariants,
} from "../domain/invariants";
import type { CreativeProject } from "../domain/model";
import { clone, loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);
const completed = loadJson<CreativeProject>(
  "../fixtures/valid/completed-project.json",
);

const errorCodes = (project: CreativeProject): readonly string[] =>
  validateProjectInvariants(project).map((item) => item.code);

describe("mission transitions", () => {
  it("permite la ruta gobernada", () => {
    expect(canTransitionMission("not_started", "in_progress")).toBe(true);
    expect(canTransitionMission("in_progress", "ready_for_review")).toBe(true);
    expect(canTransitionMission("ready_for_review", "completed")).toBe(true);
    expect(canTransitionMission("completed", "reopened")).toBe(true);
  });

  it("rechaza saltos y cierres automáticos", () => {
    expect(canTransitionMission("not_started", "completed")).toBe(false);
    expect(canTransitionMission("in_progress", "completed")).toBe(false);
  });

  it("emite un error tipado para una transición inválida", () => {
    expect(validateMissionTransition("not_started", "completed")).toEqual([
      expect.objectContaining({
        code: "INVALID_STATE_TRANSITION",
        path: "mission.status",
        safeMessage: "La transición solicitada no está permitida.",
      }),
    ]);
  });
});

describe("project invariants", () => {
  it("acepta fixtures sintéticas válidas", () => {
    expect(validateProjectInvariants(minimal)).toEqual([]);
    expect(validateProjectInvariants(completed)).toEqual([]);
  });

  it("requiere seudónimo", () => {
    const project = clone(minimal) as CreativeProject & {
      profile: { pseudonym: string };
    };
    project.profile.pseudonym = "   ";
    expect(errorCodes(project)).toContain("PROFILE_PSEUDONYM_REQUIRED");
  });

  it("aplica el límite al seudónimo serializado completo", () => {
    const project = clone(minimal) as unknown as {
      profile: { pseudonym: string };
    };
    project.profile.pseudonym = ` ${"x".repeat(80)}`;
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("PROFILE_PSEUDONYM_TOO_LONG");
  });

  it("aplica el límite al título serializado completo", () => {
    const project = {
      ...clone(minimal),
      title: ` ${"x".repeat(120)}`,
    } as CreativeProject;
    expect(errorCodes(project)).toContain("PROJECT_TITLE_TOO_LONG");
  });

  it("requiere decisión humana para el portafolio", () => {
    const project = clone(completed) as CreativeProject & {
      decisions: [];
    };
    project.decisions = [];
    expect(errorCodes(project)).toContain("HUMAN_DECISION_REQUIRED");
  });

  it("rechaza clases de privacidad fuera del enum", () => {
    const project = clone(completed) as unknown as {
      reflections: Array<{
        privacyClass: string;
        selectedForExport: boolean;
      }>;
    };
    const reflection = project.reflections[0];
    if (!reflection) throw new Error("SYNTHETIC_REFLECTION_MISSING");
    reflection.privacyClass = "public";
    reflection.selectedForExport = false;
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("REFLECTION_PRIVACY_INVALID");
  });

  it("protege reflexiones privadas", () => {
    const project = clone(completed) as unknown as {
      reflections: Array<{
        privacyClass: string;
        selectedForExport: boolean;
      }>;
    };
    const reflection = project.reflections[0];
    if (!reflection) throw new Error("SYNTHETIC_REFLECTION_MISSING");
    reflection.privacyClass = "private";
    reflection.selectedForExport = true;
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("EXPORT_SELECTION_REQUIRED");
  });

  it("mantiene capacidades diferidas desactivadas", () => {
    const project = clone(minimal) as unknown as {
      featureFlags: Record<string, boolean>;
    };
    project.featureFlags.embeddedAI = true;
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("DEFERRED_CAPABILITY_ENABLED");
  });

  it("detecta identificadores duplicados", () => {
    const project = clone(completed) as unknown as {
      evidence: Array<{ id: string }>;
      decisions: Array<{ id: string }>;
    };
    const decision = project.decisions[0];
    const evidence = project.evidence[0];
    if (!decision || !evidence) {
      throw new Error("SYNTHETIC_IDENTIFIER_FIXTURE_INCOMPLETE");
    }
    decision.id = evidence.id;
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("DUPLICATE_IDENTIFIER");
  });

  it("detecta fechas inválidas o invertidas", () => {
    const project = {
      ...clone(minimal),
      updatedAt: "not-a-date",
    } as unknown as CreativeProject;
    expect(errorCodes(project)).toContain("TIMESTAMP_ORDER_INVALID");
  });

  it("rechaza decisiones atribuidas a automatización", () => {
    const project = clone(completed) as unknown as {
      decisions: Array<{ actor: string }>;
    };
    const decision = project.decisions[0];
    if (!decision) throw new Error("SYNTHETIC_DECISION_MISSING");
    decision.actor = "system";
    expect(
      errorCodes(project as unknown as CreativeProject),
    ).toContain("AUTOMATED_DECISION_PROHIBITED");
  });
});

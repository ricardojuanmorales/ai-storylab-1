import { describe, expect, it } from "vitest";
import {
  createCreativeCycleUseCases,
  createProject,
  parseCurationRecord,
} from "../application";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import { M1_INTENTION_DEFINITION, MISSION_CATALOG } from "../domain";
import type {
  ISODateTime,
  ProjectId,
} from "../domain/types";
import type { Clock, IdGenerator } from "../ports";

const clock: Clock = {
  now: () => "2026-07-16T22:00:00.000Z" as ISODateTime,
};

class Ids implements IdGenerator {
  #counter = 0;

  next(namespace: string): string {
    this.#counter += 1;
    return `${namespace}:synthetic-${this.#counter}`;
  }
}

const setup = async () => {
  const repository = new InMemoryProjectRepository();
  const ids = new Ids();
  const created = await createProject(
    {
      title: "Proyecto sintético",
      pseudonym: "Brisa",
    },
    { repository, clock, ids },
  );
  if (!created.ok) throw new Error(created.error.code);
  return {
    repository,
    ids,
    project: created.value,
    cycle: createCreativeCycleUseCases({ repository, clock, ids }),
  };
};

const prepareEvidence = async () => {
  const context = await setup();
  await context.cycle.startMission({
    projectId: context.project.id,
    definition: M1_INTENTION_DEFINITION,
  });
  await context.cycle.saveTextActivity({
    projectId: context.project.id,
    missionId: M1_INTENTION_DEFINITION.id,
    text: "Borrador sintético",
  });
  const evidenceResult = await context.cycle.createTextEvidence({
    projectId: context.project.id,
    missionId: M1_INTENTION_DEFINITION.id,
    title: "Evidencia",
    summary: "Resumen",
  });
  if (!evidenceResult.ok) throw new Error(evidenceResult.error.code);
  const evidence = evidenceResult.value.evidence[0];
  if (!evidence) throw new Error("SYNTHETIC_EVIDENCE_MISSING");
  return { ...context, evidence };
};

describe("creative cycle engine", () => {
  it("abre una misión configurable sin duplicarla", async () => {
    const { cycle, project } = await setup();

    const first = await cycle.startMission({
      projectId: project.id,
      definition: M1_INTENTION_DEFINITION,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.value.missions).toHaveLength(1);
    expect(first.value.missions[0]?.status).toBe("in_progress");

    const second = await cycle.startMission({
      projectId: project.id,
      definition: M1_INTENTION_DEFINITION,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.value.missions).toHaveLength(1);
  });

  it("crea y edita un solo borrador por misión", async () => {
    const { cycle, project } = await setup();
    await cycle.startMission({
      projectId: project.id,
      definition: M1_INTENTION_DEFINITION,
    });

    const saved = await cycle.saveTextActivity({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      text: "Primera intención",
    });
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;

    const response = saved.value.activityResponses[0];
    if (!response) throw new Error("SYNTHETIC_ACTIVITY_MISSING");

    const edited = await cycle.saveTextActivity({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      responseId: response.id,
      text: "Intención revisada",
    });
    expect(edited.ok).toBe(true);
    if (!edited.ok) return;
    expect(edited.value.activityResponses).toHaveLength(1);
    expect(edited.value.activityResponses[0]?.text).toBe(
      "Intención revisada",
    );
  });

  it("rechaza actividad vacía", async () => {
    const { cycle, project } = await setup();
    await cycle.startMission({
      projectId: project.id,
      definition: M1_INTENTION_DEFINITION,
    });

    const result = await cycle.saveTextActivity({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      text: "   ",
    });

    expect(result).toMatchObject({
      ok: false,
      error: { code: "ACTIVITY_TEXT_REQUIRED" },
    });
  });

  it("crea evidencia y mueve la misión a revisión", async () => {
    const { cycle, project } = await setup();
    await cycle.startMission({
      projectId: project.id,
      definition: M1_INTENTION_DEFINITION,
    });
    await cycle.saveTextActivity({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      text: "Una isla recuerda a quienes la abandonaron.",
    });

    const result = await cycle.createTextEvidence({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      title: "Premisa inicial",
      summary: "Una isla con memoria espera el regreso de su comunidad.",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.evidence).toHaveLength(1);
    expect(result.value.evidence[0]?.status).toBe("draft");
    expect(result.value.missions[0]?.status).toBe("ready_for_review");
    expect(result.value.portfolio.items).toEqual([]);
  });

  it("guarda o retira una reflexión privada opcional", async () => {
    const { cycle, project } = await prepareEvidence();

    const saved = await cycle.saveReflection({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      text: "Quiero conservar la ambigüedad.",
      privacyClass: "private",
    });
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;
    expect(saved.value.reflections[0]).toMatchObject({
      privacyClass: "private",
      selectedForExport: false,
    });

    const removed = await cycle.saveReflection({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
      text: "",
      privacyClass: "private",
    });
    expect(removed.ok).toBe(true);
    if (!removed.ok) return;
    expect(removed.value.reflections).toEqual([]);
  });

  it("registra una decisión humana y completa M1", async () => {
    const { cycle, project, evidence } = await prepareEvidence();

    const result = await cycle.decideEvidence({
      projectId: project.id,
      evidenceId: evidence.id,
      value: "accept",
      rationale: "Representa mi intención.",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.decisions[0]).toMatchObject({
      actor: "human_user",
      value: "accept",
    });
    expect(result.value.missions[0]?.status).toBe("completed");
    expect(result.value.evidence[0]?.status).toBe(
      "accepted_for_portfolio",
    );
  });

  it("una decisión de revisión devuelve la misión al borrador", async () => {
    const { cycle, project, evidence } = await prepareEvidence();

    const result = await cycle.decideEvidence({
      projectId: project.id,
      evidenceId: evidence.id,
      value: "revise",
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.missions[0]?.status).toBe("in_progress");
    expect(result.value.portfolio.items).toEqual([]);
  });

  it("bloquea la curaduría sin aceptación humana", async () => {
    const { cycle, project, evidence } = await prepareEvidence();

    const result = await cycle.curatePortfolio({
      projectId: project.id,
      evidenceId: evidence.id,
      title: evidence.title,
    });

    expect(result).toMatchObject({
      ok: false,
      error: { code: "HUMAN_DECISION_REQUIRED" },
    });
  });

  it("incorpora y retira evidencia sin destruirla", async () => {
    const { cycle, project, evidence } = await prepareEvidence();

    await cycle.decideEvidence({
      projectId: project.id,
      evidenceId: evidence.id,
      value: "accept",
    });
    const curated = await cycle.curatePortfolio({
      projectId: project.id,
      evidenceId: evidence.id,
      title: evidence.title,
    });
    expect(curated.ok).toBe(true);
    if (!curated.ok) return;

    const item = curated.value.portfolio.items[0];
    if (!item) throw new Error("SYNTHETIC_PORTFOLIO_ITEM_MISSING");

    const removed = await cycle.removePortfolioItem({
      projectId: project.id,
      portfolioItemId: item.id,
    });
    expect(removed.ok).toBe(true);
    if (!removed.ok) return;
    expect(removed.value.portfolio.items).toEqual([]);
    expect(removed.value.evidence).toHaveLength(1);
    expect(removed.value.evidence[0]?.status).toBe("removed");
  });

  it("reabre M1 y elimina decisiones y curaduría vigentes", async () => {
    const { cycle, project, evidence } = await prepareEvidence();

    await cycle.decideEvidence({
      projectId: project.id,
      evidenceId: evidence.id,
      value: "accept",
    });
    await cycle.curatePortfolio({
      projectId: project.id,
      evidenceId: evidence.id,
      title: evidence.title,
    });

    const reopened = await cycle.reopenMission({
      projectId: project.id,
      missionId: M1_INTENTION_DEFINITION.id,
    });

    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;
    expect(reopened.value.missions[0]?.status).toBe("reopened");
    expect(reopened.value.decisions).toEqual([]);
    expect(reopened.value.portfolio.items).toEqual([]);
    expect(reopened.value.activityResponses).toHaveLength(1);
    expect(reopened.value.evidence).toHaveLength(1);
  });

  it("crea y edita múltiples evidencias identificables para M3", async () => {
    const context = await setup();
    const definition = MISSION_CATALOG[2];

    await context.cycle.startMission({
      projectId: context.project.id,
      definition,
    });
    await context.cycle.saveTextActivity({
      projectId: context.project.id,
      missionId: definition.id,
      text: "Plan de producción sintético",
    });

    const first = await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: definition.id,
      cardinality: "multiple",
      title: "Pieza uno",
      summary: "[medio_sintetico:text_fragment]\nPrimera pieza",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;

    const second = await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: definition.id,
      cardinality: "multiple",
      title: "Pieza dos",
      summary: "[medio_sintetico:audio_description]\nSegunda pieza",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.value.evidence).toHaveLength(2);

    const firstEvidence = second.value.evidence.find(
      (item) => item.title === "Pieza uno",
    );
    if (!firstEvidence) throw new Error("M3_FIRST_EVIDENCE_MISSING");

    const updated = await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: definition.id,
      evidenceId: firstEvidence.id,
      cardinality: "multiple",
      title: "Pieza uno revisada",
      summary: "[medio_sintetico:text_fragment]\nPrimera pieza revisada",
    });

    expect(updated.ok).toBe(true);
    if (!updated.ok) return;
    expect(updated.value.evidence).toHaveLength(2);
    expect(
      updated.value.evidence.find((item) => item.id === firstEvidence.id)
        ?.title,
    ).toBe("Pieza uno revisada");
  });

  it("mantiene M3 abierta hasta que todas las evidencias tienen decisión final", async () => {
    const context = await setup();
    const definition = MISSION_CATALOG[2];

    await context.cycle.startMission({
      projectId: context.project.id,
      definition,
    });
    await context.cycle.saveTextActivity({
      projectId: context.project.id,
      missionId: definition.id,
      text: "Plan de dos piezas",
    });

    await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: definition.id,
      cardinality: "multiple",
      title: "Pieza A",
      summary: "[medio_sintetico:image_description]\nPieza A",
    });
    const created = await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: definition.id,
      cardinality: "multiple",
      title: "Pieza B",
      summary: "[medio_sintetico:video_description]\nPieza B",
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;

    const [firstEvidence, secondEvidence] = created.value.evidence;
    if (!firstEvidence || !secondEvidence) {
      throw new Error("M3_EVIDENCE_SET_MISSING");
    }

    const firstDecision = await context.cycle.decideEvidence({
      projectId: context.project.id,
      evidenceId: firstEvidence.id,
      value: "accept",
      missionDisposition: "keep_open",
    });
    expect(firstDecision.ok).toBe(true);
    if (!firstDecision.ok) return;
    expect(firstDecision.value.missions[0]?.status).toBe("ready_for_review");

    const premature = await context.cycle.completeMission({
      projectId: context.project.id,
      missionId: definition.id,
    });
    expect(premature).toMatchObject({
      ok: false,
      error: { code: "HUMAN_DECISION_REQUIRED" },
    });

    await context.cycle.decideEvidence({
      projectId: context.project.id,
      evidenceId: secondEvidence.id,
      value: "reject",
      missionDisposition: "keep_open",
    });

    const completed = await context.cycle.completeMission({
      projectId: context.project.id,
      missionId: definition.id,
    });
    expect(completed.ok).toBe(true);
    if (!completed.ok) return;
    expect(completed.value.missions[0]?.status).toBe("completed");
    expect(completed.value.decisions).toHaveLength(2);
  });

  it("guarda, ordena y actualiza un solo registro de curaduría", async () => {
    const context = await setup();
    const sourceEvidence = [];

    for (const [definition, title] of [
      [MISSION_CATALOG[0], "Intención fuente"],
      [MISSION_CATALOG[1], "Arquitectura fuente"],
    ] as const) {
      await context.cycle.startMission({
        projectId: context.project.id,
        definition,
      });
      await context.cycle.saveTextActivity({
        projectId: context.project.id,
        missionId: definition.id,
        text: `Actividad para ${title}`,
      });
      const created = await context.cycle.createTextEvidence({
        projectId: context.project.id,
        missionId: definition.id,
        title,
        summary: `Resumen de ${title}`,
      });
      expect(created.ok).toBe(true);
      if (!created.ok) return;

      const evidence = created.value.evidence.find(
        (item) => item.missionId === definition.id,
      );
      if (!evidence) throw new Error("M4_SOURCE_EVIDENCE_MISSING");

      await context.cycle.decideEvidence({
        projectId: context.project.id,
        evidenceId: evidence.id,
        value: "accept",
      });
      sourceEvidence.push(evidence);
    }

    const definition = MISSION_CATALOG[3];
    await context.cycle.startMission({
      projectId: context.project.id,
      definition,
    });
    await context.cycle.saveTextActivity({
      projectId: context.project.id,
      missionId: definition.id,
      text: "Lectura de cierre",
    });

    const saved = await context.cycle.saveCurationRecord({
      projectId: context.project.id,
      missionId: definition.id,
      title: "Registro final",
      statement: "La selección representa el proceso.",
      handoff: "Revisión humana futura.",
      selectedEvidenceIds: [
        sourceEvidence[1]!.id,
        sourceEvidence[0]!.id,
      ],
    });
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;

    expect(
      saved.value.portfolio.items.map((item) => item.evidenceId),
    ).toEqual([sourceEvidence[1]!.id, sourceEvidence[0]!.id]);

    const record = saved.value.evidence.find(
      (item) => item.missionId === definition.id,
    );
    if (!record) throw new Error("M4_RECORD_MISSING");

    expect(
      parseCurationRecord(record.summary)?.selectedEvidenceIds,
    ).toEqual([sourceEvidence[1]!.id, sourceEvidence[0]!.id]);

    const updated = await context.cycle.saveCurationRecord({
      projectId: context.project.id,
      missionId: definition.id,
      evidenceId: record.id,
      title: "Registro final revisado",
      statement: "La selección revisada conserva una evidencia.",
      handoff: "Mantener revisión humana.",
      selectedEvidenceIds: [sourceEvidence[0]!.id],
    });
    expect(updated.ok).toBe(true);
    if (!updated.ok) return;

    expect(
      updated.value.evidence.filter(
        (item) => item.missionId === definition.id,
      ),
    ).toHaveLength(1);
    expect(updated.value.portfolio.items).toHaveLength(1);

    const decided = await context.cycle.decideEvidence({
      projectId: context.project.id,
      evidenceId: record.id,
      value: "accept",
      evidenceDisposition: "record_only",
    });
    expect(decided.ok).toBe(true);
    if (!decided.ok) return;

    expect(
      decided.value.missions.find(
        (mission) => mission.missionId === definition.id,
      )?.status,
    ).toBe("completed");
    expect(
      decided.value.evidence.find((item) => item.id === record.id)?.status,
    ).toBe("reviewed");
    expect(
      decided.value.portfolio.items.some(
        (item) => item.evidenceId === record.id,
      ),
    ).toBe(false);
  });

  it("rechaza una curaduría basada en evidencia sin aceptación humana", async () => {
    const context = await setup();
    const sourceDefinition = MISSION_CATALOG[0];

    await context.cycle.startMission({
      projectId: context.project.id,
      definition: sourceDefinition,
    });
    await context.cycle.saveTextActivity({
      projectId: context.project.id,
      missionId: sourceDefinition.id,
      text: "Actividad pendiente",
    });
    const source = await context.cycle.createTextEvidence({
      projectId: context.project.id,
      missionId: sourceDefinition.id,
      title: "Evidencia pendiente",
      summary: "Todavía no tiene decisión humana.",
    });
    expect(source.ok).toBe(true);
    if (!source.ok) return;

    const sourceEvidence = source.value.evidence.find(
      (item) => item.missionId === sourceDefinition.id,
    );
    if (!sourceEvidence) throw new Error("M4_PENDING_SOURCE_MISSING");

    const definition = MISSION_CATALOG[3];
    await context.cycle.startMission({
      projectId: context.project.id,
      definition,
    });
    await context.cycle.saveTextActivity({
      projectId: context.project.id,
      missionId: definition.id,
      text: "Lectura de cierre pendiente",
    });

    const result = await context.cycle.saveCurationRecord({
      projectId: context.project.id,
      missionId: definition.id,
      title: "Registro inválido",
      statement: "No debe guardarse.",
      handoff: "Pendiente.",
      selectedEvidenceIds: [sourceEvidence.id],
    });

    expect(result).toMatchObject({
      ok: false,
      error: { code: "HUMAN_DECISION_REQUIRED" },
    });
  });

  it("devuelve un error tipado para un proyecto ausente", async () => {
    const repository = new InMemoryProjectRepository();
    const cycle = createCreativeCycleUseCases({
      repository,
      clock,
      ids: new Ids(),
    });

    const result = await cycle.startMission({
      projectId: "project:missing" as ProjectId,
      definition: M1_INTENTION_DEFINITION,
    });

    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
    });
  });
});

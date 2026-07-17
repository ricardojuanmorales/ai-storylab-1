import { describe, expect, it } from "vitest";
import type { ProjectId } from "../domain/types";
import { M1_INTENTION_DEFINITION } from "../domain/mission-catalog";
import { createTestStoryLabRuntime } from "./storylab-test-runtime";

const createProject = async () => {
  const runtime = createTestStoryLabRuntime();
  const created = await runtime.useCases.createProject({
    title: "Proyecto recuperable",
    pseudonym: "Brisa",
  });
  if (!created.ok) throw new Error(created.error.code);
  return { ...runtime, project: created.value };
};

const preparePortfolio = async () => {
  const context = await createProject();
  const { useCases, project } = context;

  await useCases.startMission({
    projectId: project.id,
    definition: M1_INTENTION_DEFINITION,
  });
  await useCases.saveTextActivity({
    projectId: project.id,
    missionId: M1_INTENTION_DEFINITION.id,
    text: "Una isla recuerda las voces de su comunidad.",
  });
  const evidenceResult = await useCases.createTextEvidence({
    projectId: project.id,
    missionId: M1_INTENTION_DEFINITION.id,
    title: "Premisa recuperable",
    summary: "Una isla conserva las voces de quienes partieron.",
  });
  if (!evidenceResult.ok) throw new Error(evidenceResult.error.code);
  const evidence = evidenceResult.value.evidence[0];
  if (!evidence) throw new Error("SYNTHETIC_EVIDENCE_MISSING");

  await useCases.saveReflection({
    projectId: project.id,
    missionId: M1_INTENTION_DEFINITION.id,
    text: "Reflexión privada que no debe exportarse.",
    privacyClass: "private",
  });
  await useCases.decideEvidence({
    projectId: project.id,
    evidenceId: evidence.id,
    value: "accept",
  });
  const curated = await useCases.curatePortfolio({
    projectId: project.id,
    evidenceId: evidence.id,
    title: evidence.title,
  });
  if (!curated.ok) throw new Error(curated.error.code);

  return { ...context, project: curated.value };
};

describe("recovery and export use cases", () => {
  it("recupera el proyecto más reciente", async () => {
    const { useCases, project } = await createProject();

    const recovered = await useCases.recoverProject();

    expect(recovered).toMatchObject({
      ok: true,
      value: { id: project.id },
    });
  });

  it("descarta la recuperación reciente", async () => {
    const { useCases } = await createProject();

    expect(await useCases.clearRecovery()).toMatchObject({ ok: true });
    expect(await useCases.recoverProject()).toEqual({
      ok: true,
      value: null,
    });
  });

  it("elimina un proyecto mediante el caso de uso", async () => {
    const { useCases, project } = await createProject();

    expect(await useCases.removeProject(project.id)).toMatchObject({
      ok: true,
    });
    expect(await useCases.recoverProject()).toEqual({
      ok: true,
      value: null,
    });
  });

  it("requiere portafolio antes de previsualizar", async () => {
    const { useCases, project } = await createProject();

    expect(
      await useCases.previewExport({ projectId: project.id }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_SELECTION_REQUIRED" },
    });
  });

  it("produce un paquete validado sin reflexión privada", async () => {
    const { useCases, project } = await preparePortfolio();

    const result = await useCases.previewExport({
      projectId: project.id,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.exportType).toBe("storylab_project");
    expect(result.value.project.portfolio.items).toHaveLength(1);
    expect(result.value.project.reflections).toEqual([]);
  });

  it("no modifica el proyecto almacenado al previsualizar", async () => {
    const { useCases, repository, project } = await preparePortfolio();

    await useCases.previewExport({ projectId: project.id });
    const loaded = await repository.load(project.id);

    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;
    expect(loaded.value.reflections).toHaveLength(1);
    expect(loaded.value.reflections[0]?.privacyClass).toBe("private");
  });

  it("devuelve un error tipado para proyecto ausente", async () => {
    const { useCases } = createTestStoryLabRuntime();

    expect(
      await useCases.previewExport({
        projectId: "project:synthetic-missing" as ProjectId,
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
    });
  });
});

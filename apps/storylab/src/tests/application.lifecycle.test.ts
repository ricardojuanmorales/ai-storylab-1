import { describe, expect, it } from "vitest";
import { loadProject, removeProject, saveProject } from "../application";
import { InMemoryProjectRepository } from "../adapters";
import type { CreativeProject } from "../domain/model";
import type { ProjectId } from "../domain/types";
import { clone, loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>("../fixtures/valid/minimal-project.json");

describe("application project lifecycle skeleton", () => {
  it("carga un proyecto existente", async () => {
    const repository = new InMemoryProjectRepository([minimal]);
    const result = await loadProject(minimal.id, repository);
    expect(result).toMatchObject({ ok: true, value: { id: minimal.id } });
  });

  it("devuelve null cuando el proyecto no existe", async () => {
    const repository = new InMemoryProjectRepository();
    const result = await loadProject("project:missing" as ProjectId, repository);
    expect(result).toEqual({ ok: true, value: null });
  });

  it("valida antes de guardar", async () => {
    const invalid = { ...clone(minimal), title: "   " } as CreativeProject;
    const result = await saveProject(invalid, new InMemoryProjectRepository());
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_TITLE_REQUIRED" },
    });
  });

  it("elimina mediante el puerto de repositorio", async () => {
    const repository = new InMemoryProjectRepository([minimal]);
    expect((await removeProject(minimal.id, repository)).ok).toBe(true);
    expect(await repository.load(minimal.id)).toEqual({ ok: true, value: null });
  });
});

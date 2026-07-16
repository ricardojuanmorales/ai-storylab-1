import { describe, expect, it } from "vitest";
import { createProject, saveProject } from "../application";
import { InMemoryProjectRepository } from "../adapters";
import type { CreativeProject } from "../domain/model";
import type { ISODateTime } from "../domain/types";
import { loadJson } from "./helpers";

const fixedTime = "2026-07-15T21:45:00.000Z" as ISODateTime;
const clock = { now: () => fixedTime };
const ids = { next: (namespace: string) => `${namespace}:synthetic-r1` };
const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);

describe("H08-1A remediation contract guards", () => {
  it("rechaza seudónimo mayor de 80 caracteres", async () => {
    const result = await createProject(
      { title: "Proyecto", pseudonym: "x".repeat(81) },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROFILE_PSEUDONYM_TOO_LONG" },
    });
  });

  it("rechaza título mayor de 120 caracteres", async () => {
    const result = await createProject(
      { title: "x".repeat(121), pseudonym: "Luz" },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_TITLE_TOO_LONG" },
    });
  });

  it("rechaza contexto mayor de 120 caracteres", async () => {
    const result = await createProject(
      { title: "Proyecto", pseudonym: "Luz", context: "x".repeat(121) },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROFILE_CONTEXT_TOO_LONG" },
    });
  });

  it("impide guardar un proyecto que viola los límites de dominio", async () => {
    const repository = new InMemoryProjectRepository();
    const project = {
      ...minimal,
      title: "x".repeat(121),
    } as CreativeProject;
    const result = await saveProject(project, repository);
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_TITLE_TOO_LONG" },
    });
    expect(await repository.load(project.id)).toMatchObject({
      ok: true,
      value: null,
    });
  });
});

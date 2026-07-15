import { describe, expect, it } from "vitest";
import { InMemoryProjectRepository } from "../adapters";
import type { CreativeProject } from "../domain/model";
import type { ProjectId } from "../domain/types";
import { clone, loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>("../fixtures/valid/minimal-project.json");

describe("InMemoryProjectRepository", () => {
  it("implementa save y load", async () => {
    const repository = new InMemoryProjectRepository();
    expect((await repository.save(minimal)).ok).toBe(true);
    expect(await repository.load(minimal.id)).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
  });

  it("devuelve copias para impedir mutación lateral", async () => {
    const repository = new InMemoryProjectRepository([minimal]);
    const first = await repository.load(minimal.id);
    expect(first.ok && first.value).toBeTruthy();
    if (!first.ok || !first.value) return;
    const mutable = first.value as unknown as { title: string };
    mutable.title = "Mutación externa";
    const second = await repository.load(minimal.id);
    expect(second.ok && second.value?.title).toBe(minimal.title);
  });

  it("reemplaza el valor de la misma identidad", async () => {
    const repository = new InMemoryProjectRepository([minimal]);
    const changed = { ...clone(minimal), title: "Título actualizado" } as CreativeProject;
    await repository.save(changed);
    const result = await repository.load(minimal.id);
    expect(result.ok && result.value?.title).toBe("Título actualizado");
  });

  it("remove es idempotente", async () => {
    const repository = new InMemoryProjectRepository();
    const id = "project:missing" as ProjectId;
    expect((await repository.remove(id)).ok).toBe(true);
    expect((await repository.remove(id)).ok).toBe(true);
  });
});

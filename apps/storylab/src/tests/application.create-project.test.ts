import { describe, expect, it } from "vitest";
import { createProject } from "../application";
import { InMemoryProjectRepository } from "../adapters";
import type { ISODateTime } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";

const fixedTime = "2026-07-15T21:45:00.000Z" as ISODateTime;
const clock: Clock = { now: () => fixedTime };
const ids: IdGenerator = { next: (namespace) => `${namespace}:synthetic-001` };

describe("createProject", () => {
  it("crea y persiste un proyecto mínimo", async () => {
    const repository = new InMemoryProjectRepository();
    const result = await createProject(
      { title: "  Proyecto sintético  ", pseudonym: "  Aurora  " },
      { repository, clock, ids },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.title).toBe("Proyecto sintético");
    expect(result.value.profile.pseudonym).toBe("Aurora");
    expect(result.value.id).toBe("project:synthetic-001");
    expect((await repository.load(result.value.id)).ok).toBe(true);
  });

  it("mantiene todas las capacidades diferidas en false", async () => {
    const result = await createProject(
      { title: "Proyecto", pseudonym: "Luz" },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(Object.values(result.value.featureFlags)).toEqual([
      false, false, false, false, false, false, false,
    ]);
  });

  it("rechaza un título vacío", async () => {
    const result = await createProject(
      { title: "   ", pseudonym: "Luz" },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_TITLE_REQUIRED" },
    });
  });

  it("rechaza un seudónimo vacío", async () => {
    const result = await createProject(
      { title: "Proyecto", pseudonym: "   " },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROFILE_PSEUDONYM_REQUIRED" },
    });
  });

  it("conserva el contexto opcional sin inventar identidad", async () => {
    const result = await createProject(
      { title: "Proyecto", pseudonym: "Luz", context: "  laboratorio local  " },
      { repository: new InMemoryProjectRepository(), clock, ids },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.profile.context).toBe("laboratorio local");
    expect(result.value.profile).not.toHaveProperty("email");
    expect(result.value.profile).not.toHaveProperty("studentId");
  });
});

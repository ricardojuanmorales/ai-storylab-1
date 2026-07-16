import { describe, expect, it } from "vitest";
import { updateAccessibilityPreferences } from "../application";
import { InMemoryProjectRepository } from "../adapters";
import type { CreativeProject } from "../domain/model";
import type { ISODateTime, ProjectId } from "../domain/types";
import { loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);

const clock = {
  now: () => "2026-07-15T23:00:00.000Z" as ISODateTime,
};

describe("updateAccessibilityPreferences", () => {
  it("actualiza y persiste preferencias", async () => {
    const repository = new InMemoryProjectRepository([minimal]);

    const result = await updateAccessibilityPreferences(
      {
        projectId: minimal.id,
        preferences: {
          reducedMotion: true,
          highContrast: true,
          textScale: "extra_large",
        },
      },
      { repository, clock },
    );

    expect(result).toMatchObject({
      ok: true,
      value: {
        profile: {
          accessibility: {
            reducedMotion: true,
            highContrast: true,
            textScale: "extra_large",
          },
        },
      },
    });

    expect(await repository.load(minimal.id)).toMatchObject({
      ok: true,
      value: { updatedAt: "2026-07-15T23:00:00.000Z" },
    });
  });

  it("preserva todas las capacidades diferidas", async () => {
    const repository = new InMemoryProjectRepository([minimal]);

    const result = await updateAccessibilityPreferences(
      {
        projectId: minimal.id,
        preferences: {
          reducedMotion: true,
          highContrast: false,
          textScale: "large",
        },
      },
      { repository, clock },
    );

    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(Object.values(result.value.featureFlags)).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  it("devuelve un error seguro cuando el proyecto no existe", async () => {
    const result = await updateAccessibilityPreferences(
      {
        projectId: "project:missing" as ProjectId,
        preferences: {
          reducedMotion: true,
          highContrast: false,
          textScale: "large",
        },
      },
      {
        repository: new InMemoryProjectRepository(),
        clock,
      },
    );

    expect(result).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
    });
  });

  it("rechaza entrada inválida sin cambiar el almacenamiento", async () => {
    const repository = new InMemoryProjectRepository([minimal]);

    const result = await updateAccessibilityPreferences(
      {
        projectId: minimal.id,
        preferences: {
          reducedMotion: true,
          highContrast: false,
          textScale: "huge",
        },
      },
      { repository, clock },
    );

    expect(result.ok).toBe(false);
    expect(await repository.load(minimal.id)).toMatchObject({
      ok: true,
      value: {
        profile: {
          accessibility: minimal.profile.accessibility,
        },
      },
    });
  });
});

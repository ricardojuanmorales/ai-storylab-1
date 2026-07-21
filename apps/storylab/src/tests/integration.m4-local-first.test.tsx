// @vitest-environment jsdom

import { createHash } from "node:crypto";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import {
  createStoryLabUseCases,
  parseCurationRecord,
} from "../application";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type { Evidence } from "../domain/model";
import type {
  ISODateTime,
  ProjectId,
} from "../domain/types";
import type { Clock, IdGenerator } from "../ports";
import { App } from "../presentation/App";

afterEach(() => {
  cleanup();
});

class M4Storage implements StorageLike {
  readonly values = new Map<string, string>();

  get length(): number {
    return this.values.size;
  }

  key(index: number): string | null {
    return Array.from(this.values.keys())[index] ?? null;
  }

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

class M4Ids implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:m4-integration-${this.#value}`;
  }
}

class M4Clock implements Clock {
  #value = Date.parse("2026-07-20T23:00:00.000Z");

  now(): ISODateTime {
    const current = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

const integrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const createRuntime = (storage: M4Storage) => {
  const repository = new LocalStorageProjectRepository(storage, {
    integrity,
  });
  const useCases = createStoryLabUseCases({
    repository,
    clock: new M4Clock(),
    ids: new M4Ids(),
  });

  return { repository, useCases };
};

const createAcceptedEvidence = async (
  runtime: ReturnType<typeof createRuntime>,
  projectId: ProjectId,
  missionIndex: 0 | 1,
  title: string,
): Promise<Evidence> => {
  const definition = MISSION_CATALOG[missionIndex];

  await runtime.useCases.startMission({ projectId, definition });
  await runtime.useCases.saveTextActivity({
    projectId,
    missionId: definition.id,
    text: `Actividad local para ${title}`,
  });
  const created = await runtime.useCases.createTextEvidence({
    projectId,
    missionId: definition.id,
    title,
    summary: `Resumen local para ${title}`,
  });
  if (!created.ok) throw new Error(created.error.code);

  const evidence = created.value.evidence.find(
    (item) => item.missionId === definition.id,
  );
  if (!evidence) throw new Error("M4_LOCAL_SOURCE_MISSING");

  const decided = await runtime.useCases.decideEvidence({
    projectId,
    evidenceId: evidence.id,
    value: "accept",
  });
  if (!decided.ok) throw new Error(decided.error.code);

  return evidence;
};

describe("M4 local-first integration", () => {
  it("recupera registro, orden, reflexión y cierre después de remontar", async () => {
    const storage = new M4Storage();
    const firstRuntime = createRuntime(storage);
    const created = await firstRuntime.useCases.createProject({
      title: "Proyecto M4 recuperable",
      pseudonym: "Brisa",
    });
    if (!created.ok) throw new Error(created.error.code);

    const firstEvidence = await createAcceptedEvidence(
      firstRuntime,
      created.value.id,
      0,
      "Intención local",
    );
    const secondEvidence = await createAcceptedEvidence(
      firstRuntime,
      created.value.id,
      1,
      "Arquitectura local",
    );

    const user = userEvent.setup();
    const first = render(
      <App useCases={firstRuntime.useCases} persistenceMode="local" />,
    );

    await screen.findByRole("heading", {
      name: "Proyecto M4 recuperable",
    });
    await user.click(
      screen.getByRole("link", {
        name: /M4 · Curaduría y cierre/i,
      }),
    );
    await user.click(screen.getByRole("button", { name: "Iniciar M4" }));
    await user.type(
      screen.getByRole("textbox", {
        name: "Lectura y criterios de cierre",
      }),
      "M4_RECOVERY_INTEGRATED: cierre local y reversible.",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar lectura de cierre" }),
    );
    await user.click(
      screen.getByRole("checkbox", { name: /Intención local/i }),
    );
    await user.click(
      screen.getByRole("checkbox", { name: /Arquitectura local/i }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Mover Arquitectura local arriba",
      }),
    );
    await user.type(
      screen.getByRole("textbox", {
        name: "Declaración de curaduría",
      }),
      "Dos evidencias resumen el recorrido.",
    );
    await user.type(
      screen.getByRole("textbox", {
        name: "Nota de traspaso conceptual",
      }),
      "TRASPASO_CONCEPTUAL_M4: revisión humana futura.",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar registro de curaduría",
      }),
    );
    await user.type(
      screen.getByRole("textbox", {
        name: "Reflexión privada opcional",
      }),
      "REFLEXION_PRIVADA_M4",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar u omitir reflexión",
      }),
    );
    await user.click(
      screen.getByRole("radio", { name: /Confirmar cierre/i }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de cierre",
      }),
    );

    first.unmount();

    const secondRuntime = createRuntime(storage);
    render(
      <App useCases={secondRuntime.useCases} persistenceMode="local" />,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Proyecto M4 recuperable",
      }),
    ).toBeTruthy();

    const secondUser = userEvent.setup();
    await secondUser.click(
      screen.getByRole("link", {
        name: /M4 · Curaduría y cierre/i,
      }),
    );

    expect(
      screen.getByRole("button", { name: "Reabrir M4" }),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue("REFLEXION_PRIVADA_M4"),
    ).toBeTruthy();
    const conceptualHandoff = screen.getByRole("article", {
      name: "Registro de curaduría",
    });
    expect(
      within(conceptualHandoff).getByText(/TRASPASO_CONCEPTUAL_M4/i),
    ).toBeTruthy();

    const loaded = await secondRuntime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    expect(
      loaded.value.portfolio.items.map((item) => item.evidenceId),
    ).toEqual([secondEvidence.id, firstEvidence.id]);

    const m4Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[3].id,
    );
    expect(m4Evidence).toHaveLength(1);
    expect(
      parseCurationRecord(m4Evidence[0]?.summary ?? "")?.handoff,
    ).toContain("TRASPASO_CONCEPTUAL_M4");
    expect(
      loaded.value.portfolio.items.some(
        (item) => item.evidenceId === m4Evidence[0]?.id,
      ),
    ).toBe(false);
  });
});

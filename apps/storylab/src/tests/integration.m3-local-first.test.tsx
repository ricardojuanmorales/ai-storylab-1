// @vitest-environment jsdom

import { createHash } from "node:crypto";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { createStoryLabUseCases } from "../application";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type { ISODateTime } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";
import { App } from "../presentation/App";

afterEach(() => {
  cleanup();
});

class M3Storage implements StorageLike {
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

class M3Ids implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:m3-integration-${this.#value}`;
  }
}

class M3Clock implements Clock {
  #value = Date.parse("2026-07-20T20:00:00.000Z");

  now(): ISODateTime {
    const current = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

const integrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const createRuntime = (storage: M3Storage) => {
  const repository = new LocalStorageProjectRepository(storage, {
    integrity,
  });
  const useCases = createStoryLabUseCases({
    repository,
    clock: new M3Clock(),
    ids: new M3Ids(),
  });

  return { repository, useCases };
};

const createEvidence = async (
  user: ReturnType<typeof userEvent.setup>,
  title: string,
  summary: string,
  medium: string,
) => {
  await user.selectOptions(
    screen.getByRole("combobox", {
      name: "Medio sintético documentado",
    }),
    medium,
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Título de la evidencia de producción",
    }),
    title,
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Descripción textual y decisiones de proceso",
    }),
    summary,
  );
  await user.click(
    screen.getByRole("button", {
      name: "Crear evidencia de producción",
    }),
  );
};

describe("M3 local-first integration", () => {
  it("recupera múltiples evidencias, reflexión y cierre después de remontar", async () => {
    const storage = new M3Storage();
    const firstRuntime = createRuntime(storage);
    const user = userEvent.setup();
    const first = render(
      <App useCases={firstRuntime.useCases} persistenceMode="local" />,
    );

    await user.type(
      await screen.findByRole("textbox", { name: "Seudónimo local" }),
      "Brisa",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título del proyecto" }),
      "Proyecto M3 recuperable",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear proyecto local" }),
    );
    await user.click(
      screen.getByRole("link", {
        name: /M3 · Producción multimodal/i,
      }),
    );
    await user.click(screen.getByRole("button", { name: "Iniciar M3" }));
    await user.type(
      screen.getByRole("textbox", {
        name: "Plan y decisiones del proceso",
      }),
      "M3_RECOVERY_INTEGRATED: dos piezas descritas sin archivos.",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar plan de producción" }),
    );

    await createEvidence(
      user,
      "Imagen descrita recuperable",
      "Una imagen imaginaria de una ciudad de agua.",
      "image_description",
    );
    await user.type(
      screen.getByRole("textbox", {
        name: "Reflexión privada opcional",
      }),
      "REFLEXION_PRIVADA_M3",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar u omitir reflexión",
      }),
    );
    await user.click(screen.getByRole("radio", { name: /Aceptar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );

    await user.click(
      screen.getByRole("button", { name: "Nueva evidencia" }),
    );
    await createEvidence(
      user,
      "Audio descrito recuperable",
      "Capas de agua, pasos y una campana distante.",
      "audio_description",
    );
    await user.click(screen.getByRole("radio", { name: /Rechazar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );
    await user.click(
      screen.getByRole("button", { name: "Completar M3" }),
    );

    first.unmount();

    const secondRuntime = createRuntime(storage);
    render(
      <App useCases={secondRuntime.useCases} persistenceMode="local" />,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Proyecto M3 recuperable",
      }),
    ).toBeTruthy();

    const secondUser = userEvent.setup();
    await secondUser.click(
      screen.getByRole("link", {
        name: /M3 · Producción multimodal/i,
      }),
    );

    expect(
      screen.getByRole("button", { name: "Reabrir M3" }),
    ).toBeTruthy();
    expect(
      screen.getByText("Imagen descrita recuperable"),
    ).toBeTruthy();
    expect(
      screen.getByText("Audio descrito recuperable"),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue("REFLEXION_PRIVADA_M3"),
    ).toBeTruthy();

    const loaded = await secondRuntime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    const m3Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[2].id,
    );

    expect(m3Evidence).toHaveLength(2);
    expect(m3Evidence.every((item) => item.kind === "text")).toBe(true);
    expect(
      m3Evidence.every((item) =>
        item.summary.startsWith("[medio_sintetico:"),
      ),
    ).toBe(true);
  });
});

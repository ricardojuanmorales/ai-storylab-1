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
import type { ISODateTime } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";
import { App } from "../presentation/App";

afterEach(() => {
  cleanup();
});

class M2Storage implements StorageLike {
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

class M2Ids implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:m2-integration-${this.#value}`;
  }
}

class M2Clock implements Clock {
  #value = Date.parse("2026-07-19T10:00:00.000Z");

  now(): ISODateTime {
    const current = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

const integrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const createRuntime = (storage: M2Storage) => {
  const repository = new LocalStorageProjectRepository(storage, {
    integrity,
  });
  const useCases = createStoryLabUseCases({
    repository,
    clock: new M2Clock(),
    ids: new M2Ids(),
  });

  return { repository, useCases };
};

describe("M2 local-first integration", () => {
  it("recupera M2 completada después de remontar", async () => {
    const storage = new M2Storage();
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
      "Proyecto M2 recuperable",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear proyecto local" }),
    );
    await user.click(
      screen.getByRole("link", {
        name: /M2 · Arquitectura narrativa/i,
      }),
    );
    await user.click(screen.getByRole("button", { name: "Iniciar M2" }));
    await user.type(
      screen.getByRole("textbox", {
        name: "Personajes, mundo, tensiones y estructura",
      }),
      "M2_RECOVERY_INTEGRATED: mundo sintético y estructura circular.",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar borrador" }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título de la arquitectura" }),
      "Arquitectura persistente",
    );
    await user.type(
      screen.getByRole("textbox", {
        name: "Síntesis de personajes, mundo, tensiones y estructura",
      }),
      "Dos personajes disputan las reglas de una ciudad flotante.",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear evidencia" }),
    );
    await user.click(screen.getByRole("radio", { name: /Aceptar/i }));
    await user.click(
      screen.getByRole("button", { name: "Registrar decisión humana" }),
    );
    await user.click(
      screen.getByRole("button", { name: "Incorporar al portafolio" }),
    );

    first.unmount();

    const secondRuntime = createRuntime(storage);
    render(
      <App useCases={secondRuntime.useCases} persistenceMode="local" />,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Proyecto M2 recuperable",
      }),
    ).toBeTruthy();

    const secondUser = userEvent.setup();
    await secondUser.click(
      screen.getByRole("link", {
        name: /M2 · Arquitectura narrativa/i,
      }),
    );

    expect(
      screen.getByDisplayValue(
        "M2_RECOVERY_INTEGRATED: mundo sintético y estructura circular.",
      ),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue(
        "Dos personajes disputan las reglas de una ciudad flotante.",
      ),
    ).toBeTruthy();
    expect(
      screen.getByRole("button", { name: "Retirar del portafolio" }),
    ).toBeTruthy();
  });
});

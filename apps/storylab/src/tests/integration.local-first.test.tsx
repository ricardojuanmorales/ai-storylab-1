// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { createStoryLabUseCases } from "../application";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import type { ISODateTime, ProjectId } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";
import { App } from "../presentation/App";

afterEach(() => {
  cleanup();
});

class IntegratedStorage implements StorageLike {
  readonly values = new Map<string, string>();
  failSetWithQuota = false;

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.failSetWithQuota) {
      throw { name: "QuotaExceededError" };
    }
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

class IntegratedIds implements IdGenerator {
  #counter = 0;

  next(namespace: string): string {
    this.#counter += 1;
    return `${namespace}:integration-${this.#counter}`;
  }
}

class IntegratedClock implements Clock {
  #value = Date.parse("2026-07-17T02:00:00.000Z");

  now(): ISODateTime {
    const value = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return value;
  }
}

const createRuntime = (storage = new IntegratedStorage()) => {
  const repository = new LocalStorageProjectRepository(storage);
  const useCases = createStoryLabUseCases({
    repository,
    clock: new IntegratedClock(),
    ids: new IntegratedIds(),
  });

  return { storage, repository, useCases };
};

const createProjectThroughUi = async (
  runtime: ReturnType<typeof createRuntime>,
  title = "Proyecto integrado",
) => {
  const user = userEvent.setup();
  const view = render(
    <App useCases={runtime.useCases} persistenceMode="local" />,
  );

  await user.type(
    await screen.findByRole("textbox", { name: "Seudónimo local" }),
    "Brisa",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título del proyecto" }),
    title,
  );
  await user.click(
    screen.getByRole("button", { name: "Crear proyecto local" }),
  );

  return { user, view };
};

const completeM1ThroughUi = async (
  runtime: ReturnType<typeof createRuntime>,
) => {
  const context = await createProjectThroughUi(
    runtime,
    "Proyecto de aceptación",
  );
  const { user } = context;

  await user.click(screen.getByRole("button", { name: "Iniciar M1" }));
  await user.type(
    screen.getByRole("textbox", { name: "Borrador de intención" }),
    "Una isla recuerda a su comunidad mediante voces sintéticas.",
  );
  await user.click(
    screen.getByRole("button", { name: "Guardar borrador" }),
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título de la evidencia" }),
    "Premisa integrada",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
    "La isla conserva voces y memorias para una comunidad imaginaria.",
  );
  await user.click(
    screen.getByRole("button", { name: "Crear evidencia" }),
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Reflexión privada opcional",
    }),
    "REFLEXION_PRIVADA_INTEGRADA",
  );
  await user.click(
    screen.getByRole("button", {
      name: "Guardar u omitir reflexión",
    }),
  );
  await user.click(screen.getByRole("radio", { name: /Aceptar/i }));
  await user.click(
    screen.getByRole("button", { name: "Registrar decisión humana" }),
  );
  await user.click(
    screen.getByRole("button", { name: "Incorporar al portafolio" }),
  );

  return context;
};

describe("local-first integrated acceptance", () => {
  it("guarda mediante el adaptador real y recupera después de remontar", async () => {
    const runtime = createRuntime();
    const first = await createProjectThroughUi(runtime);

    const latestId = runtime.storage.values.get(LOCAL_STORAGE_KEYS.latest);
    expect(latestId).toBeTruthy();
    expect(
      runtime.storage.values.has(
        `${LOCAL_STORAGE_KEYS.projectPrefix}${latestId}`,
      ),
    ).toBe(true);

    first.view.unmount();

    render(<App useCases={runtime.useCases} persistenceMode="local" />);

    expect(
      await screen.findByRole("heading", { name: "Proyecto integrado" }),
    ).toBeTruthy();
    expect(screen.getByRole("status").textContent).toContain(
      "recuperado y validado",
    );
  });

  it("recupera el ciclo completo y genera preview sin reflexión privada", async () => {
    const runtime = createRuntime();
    const first = await completeM1ThroughUi(runtime);

    first.view.unmount();

    const second = render(
      <App useCases={runtime.useCases} persistenceMode="local" />,
    );
    const user = userEvent.setup();

    expect(
      await screen.findByRole("heading", {
        name: "Proyecto de aceptación",
      }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole("button", {
        name: "Preparar vista previa validada",
      }),
    );

    const preview = second.container.querySelector("pre");
    expect(preview?.textContent).toContain("storylab_project");
    expect(preview?.textContent).toContain("Premisa integrada");
    expect(preview?.textContent).not.toContain(
      "REFLEXION_PRIVADA_INTEGRADA",
    );
  });

  it("borra el proyecto y limpia las dos claves persistentes", async () => {
    const runtime = createRuntime();
    const { user } = await createProjectThroughUi(runtime);
    const projectId = runtime.storage.values.get(LOCAL_STORAGE_KEYS.latest);

    await user.click(
      screen.getByRole("button", { name: "Preparar borrado local" }),
    );
    await user.click(
      screen.getByRole("button", { name: "Confirmar borrado local" }),
    );

    expect(runtime.storage.values.has(LOCAL_STORAGE_KEYS.latest)).toBe(false);
    expect(
      runtime.storage.values.has(
        `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId}`,
      ),
    ).toBe(false);
    expect(
      await screen.findByRole("textbox", { name: "Seudónimo local" }),
    ).toBeTruthy();
  });

  it("bloquea JSON corrupto y lo descarta mediante el adaptador real", async () => {
    const storage = new IntegratedStorage();
    const projectId = "project:integration-corrupted" as ProjectId;
    storage.values.set(LOCAL_STORAGE_KEYS.latest, projectId as string);
    storage.values.set(
      `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`,
      "{invalid-json",
    );
    const runtime = createRuntime(storage);
    const user = userEvent.setup();

    render(<App useCases={runtime.useCases} persistenceMode="local" />);

    expect(
      await screen.findByRole("heading", {
        name: "El proyecto local no puede recuperarse",
      }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole("button", {
        name: "Descartar datos locales dañados",
      }),
    );

    expect(storage.values.has(LOCAL_STORAGE_KEYS.latest)).toBe(false);
    expect(
      storage.values.has(
        `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`,
      ),
    ).toBe(false);
  });

  it("presenta el error tipado cuando la cuota impide crear el proyecto", async () => {
    const storage = new IntegratedStorage();
    const runtime = createRuntime(storage);
    const user = userEvent.setup();

    render(<App useCases={runtime.useCases} persistenceMode="local" />);

    await user.type(
      await screen.findByRole("textbox", { name: "Seudónimo local" }),
      "Brisa",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título del proyecto" }),
      "Proyecto sin cuota",
    );

    storage.failSetWithQuota = true;
    await user.click(
      screen.getByRole("button", { name: "Crear proyecto local" }),
    );

    expect(screen.getByRole("status").textContent).toContain(
      "no tiene espacio suficiente",
    );
    expect(
      screen.getByRole("textbox", { name: "Título del proyecto" }),
    ).toBeTruthy();
    expect(storage.values.size).toBe(0);
  });

  it("mantiene la importación, el roundtrip y la descarga fuera de la experiencia", async () => {
    const runtime = createRuntime();
    await completeM1ThroughUi(runtime);

    expect(
      screen.queryByRole("button", { name: /importar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /roundtrip/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("link", { name: /descargar/i }),
    ).toBeNull();
  });
});

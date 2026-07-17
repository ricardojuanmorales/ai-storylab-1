// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import type { StoryLabUseCases } from "../application";
import { App } from "../presentation/App";
import { createTestStoryLabRuntime } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const createProjectInUi = async (
  useCases: StoryLabUseCases,
  title = "Proyecto recuperable",
) => {
  const user = userEvent.setup();
  const view = render(
    <App useCases={useCases} persistenceMode="local" />,
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

const completePortfolioInUi = async (
  useCases: StoryLabUseCases,
) => {
  const context = await createProjectInUi(useCases, "Proyecto exportable");
  const { user } = context;

  await user.click(screen.getByRole("button", { name: "Iniciar M1" }));
  await user.type(
    screen.getByRole("textbox", { name: "Borrador de intención" }),
    "Una isla recuerda a su comunidad.",
  );
  await user.click(
    screen.getByRole("button", { name: "Guardar borrador" }),
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título de la evidencia" }),
    "Premisa local",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
    "La isla conserva voces y memorias.",
  );
  await user.click(
    screen.getByRole("button", { name: "Crear evidencia" }),
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Reflexión privada opcional",
    }),
    "SECRETO_PRIVADO_SINTETICO",
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

describe("recovery and export presentation", () => {
  it("recupera el proyecto al montar de nuevo con el mismo repositorio", async () => {
    const runtime = createTestStoryLabRuntime();
    const first = await createProjectInUi(runtime.useCases);

    first.view.unmount();

    render(
      <App
        useCases={runtime.useCases}
        persistenceMode="local"
      />,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Proyecto recuperable",
      }),
    ).toBeTruthy();
    expect(screen.getByRole("status").textContent).toContain(
      "recuperado y validado",
    );
  });

  it("muestra una vista previa sin reflexión privada ni descarga", async () => {
    const runtime = createTestStoryLabRuntime();
    const { user, view } = await completePortfolioInUi(runtime.useCases);

    await user.click(
      screen.getByRole("button", {
        name: "Preparar vista previa validada",
      }),
    );

    expect(screen.getByText("storylab_project")).toBeTruthy();
    expect(screen.getByText("0", { selector: "dd" })).toBeTruthy();
    const jsonPreview = view.container.querySelector("pre");
    expect(jsonPreview?.textContent).not.toContain(
      "SECRETO_PRIVADO_SINTETICO",
    );
    expect(
      screen.queryByRole("link", { name: /descargar/i }),
    ).toBeNull();
  });

  it("exige dos acciones para borrar el proyecto local", async () => {
    const runtime = createTestStoryLabRuntime();
    const { user } = await createProjectInUi(runtime.useCases);

    await user.click(
      screen.getByRole("button", { name: "Preparar borrado local" }),
    );
    expect(
      screen.getByRole("button", { name: "Confirmar borrado local" }),
    ).toBeTruthy();
    expect(
      screen.queryByRole("textbox", { name: "Seudónimo local" }),
    ).toBeNull();

    await user.click(
      screen.getByRole("button", { name: "Confirmar borrado local" }),
    );

    expect(
      await screen.findByRole("textbox", { name: "Seudónimo local" }),
    ).toBeTruthy();
  });

  it("bloquea datos corruptos y permite descartarlos", async () => {
    const runtime = createTestStoryLabRuntime();
    const useCases: StoryLabUseCases = {
      ...runtime.useCases,
      recoverProject: async () => ({
        ok: false,
        error: {
          code: "PERSISTENCE_DATA_CORRUPTED",
          path: "storage.project",
          safeMessage: "El proyecto local está dañado.",
        },
      }),
      clearRecovery: async () => ({ ok: true, value: undefined }),
    };

    const user = userEvent.setup();
    render(<App useCases={useCases} persistenceMode="local" />);

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

    expect(
      await screen.findByRole("textbox", { name: "Seudónimo local" }),
    ).toBeTruthy();
  });
});

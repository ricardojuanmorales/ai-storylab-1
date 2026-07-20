// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import { App } from "../presentation/App";
import { createTestStoryLabRuntime } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const openM2 = async () => {
  const runtime = createTestStoryLabRuntime();
  const user = userEvent.setup();

  render(<App useCases={runtime.useCases} />);

  await user.type(
    await screen.findByRole("textbox", { name: "Seudónimo local" }),
    "Brisa",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título del proyecto" }),
    "Atlas del bosque flotante",
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

  return { runtime, user };
};

const saveM2Activity = async (
  user: ReturnType<typeof userEvent.setup>,
  text = "Personajes viajeros exploran un bosque flotante con reglas cambiantes.",
) => {
  await user.type(
    screen.getByRole("textbox", {
      name: "Personajes, mundo, tensiones y estructura",
    }),
    text,
  );
  await user.click(
    screen.getByRole("button", { name: "Guardar borrador" }),
  );
};

const createM2Evidence = async (
  user: ReturnType<typeof userEvent.setup>,
  title = "Mapa del bosque flotante",
  summary = "Personajes, reglas del mundo, tensión central y estructura en cuatro movimientos.",
) => {
  await user.type(
    screen.getByRole("textbox", { name: "Título de la arquitectura" }),
    title,
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Síntesis de personajes, mundo, tensiones y estructura",
    }),
    summary,
  );
  await user.click(
    screen.getByRole("button", { name: "Crear evidencia" }),
  );
};

describe("M2 functional experience", () => {
  it("completa el ciclo humano y permite reabrir la arquitectura", async () => {
    const { user } = await openM2();

    await saveM2Activity(user);
    await createM2Evidence(user);

    await user.type(
      screen.getByRole("textbox", {
        name: "Reflexión privada opcional",
      }),
      "Quiero conservar varias rutas posibles antes de fijar el cierre.",
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

    expect(
      screen.getByRole("button", { name: "Retirar del portafolio" }),
    ).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "Reabrir M2" }));

    expect(
      screen.getByDisplayValue(
        "Personajes viajeros exploran un bosque flotante con reglas cambiantes.",
      ),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue(
        "Personajes, reglas del mundo, tensión central y estructura en cuatro movimientos.",
      ),
    ).toBeTruthy();
    expect(
      screen.queryByRole("button", { name: "Retirar del portafolio" }),
    ).toBeNull();
  });

  it("actualiza una sola evidencia editable de M2", async () => {
    const { runtime, user } = await openM2();

    await saveM2Activity(user);
    await createM2Evidence(user);

    const title = screen.getByRole("textbox", {
      name: "Título de la arquitectura",
    });
    const summary = screen.getByRole("textbox", {
      name: "Síntesis de personajes, mundo, tensiones y estructura",
    });

    await user.clear(title);
    await user.type(title, "Arquitectura revisada");
    await user.clear(summary);
    await user.type(
      summary,
      "Dos personajes, un mundo con memoria y una estructura circular revisada.",
    );
    await user.click(
      screen.getByRole("button", { name: "Actualizar evidencia" }),
    );

    const loaded = await runtime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    const m2Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[1].id,
    );

    expect(m2Evidence).toHaveLength(1);
    expect(m2Evidence[0]?.title).toBe("Arquitectura revisada");
    expect(m2Evidence[0]?.summary).toContain("estructura circular");
  });

  it("mantiene M1 disponible después de trabajar en M2", async () => {
    const { user } = await openM2();

    await user.click(
      screen.getByRole("link", {
        name: /M1 · Intención creadora/i,
      }),
    );

    expect(
      screen.getByRole("button", { name: "Iniciar M1" }),
    ).toBeTruthy();
  });
});

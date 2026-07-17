// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../presentation/App";
import { createTestStoryLabUseCases } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const openMission = async () => {
  const user = userEvent.setup();
  render(<App useCases={createTestStoryLabUseCases()} />);

  await user.type(
    screen.getByRole("textbox", { name: "Seudónimo local" }),
    "Brisa",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título del proyecto" }),
    "La isla de los ecos",
  );
  await user.click(
    screen.getByRole("button", { name: "Crear proyecto local" }),
  );
  await user.click(screen.getByRole("button", { name: "Iniciar M1" }));

  return user;
};

describe("M1 functional experience", () => {
  it("completa el ciclo desde perfil hasta portafolio reversible", async () => {
    const user = await openMission();

    await user.type(
      screen.getByRole("textbox", { name: "Borrador de intención" }),
      "Crearé una historia sobre una isla que recuerda a su comunidad.",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar borrador" }),
    );

    await user.type(
      screen.getByRole("textbox", { name: "Título de la evidencia" }),
      "Premisa narrativa",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
      "Una isla conserva las voces de quienes partieron.",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear evidencia" }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: "Reflexión privada opcional",
      }),
      "Quiero conservar una zona de misterio.",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar u omitir reflexión",
      }),
    );

    const accept = screen.getByRole("radio", { name: /Aceptar/i });
    expect((accept as HTMLInputElement).checked).toBe(false);

    await user.click(accept);
    await user.click(
      screen.getByRole("button", { name: "Registrar decisión humana" }),
    );
    await user.click(
      screen.getByRole("button", { name: "Incorporar al portafolio" }),
    );

    expect(screen.getByText("Premisa narrativa")).toBeTruthy();
    expect(
      screen.getByRole("button", { name: "Retirar del portafolio" }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole("button", { name: "Retirar del portafolio" }),
    );

    expect(
      screen.getByRole("button", { name: "Incorporar al portafolio" }),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue(
        "Una isla conserva las voces de quienes partieron.",
      ),
    ).toBeTruthy();
  });

  it("no preselecciona la decisión humana", async () => {
    const user = await openMission();

    await user.type(
      screen.getByRole("textbox", { name: "Borrador de intención" }),
      "Borrador",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar borrador" }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título de la evidencia" }),
      "Evidencia",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
      "Resumen",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear evidencia" }),
    );

    const options = screen.getAllByRole("radio") as HTMLInputElement[];
    expect(options).toHaveLength(4);
    expect(options.every((option) => !option.checked)).toBe(true);
    const decisionButton = screen.getByRole("button", {
      name: "Registrar decisión humana",
    }) as HTMLButtonElement;
    expect(decisionButton.disabled).toBe(true);
  });

  it("permite omitir la reflexión sin bloquear el ciclo", async () => {
    const user = await openMission();

    await user.type(
      screen.getByRole("textbox", { name: "Borrador de intención" }),
      "Borrador",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar borrador" }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título de la evidencia" }),
      "Evidencia",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
      "Resumen",
    );
    await user.click(
      screen.getByRole("button", { name: "Crear evidencia" }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar u omitir reflexión",
      }),
    );

    expect(screen.getByRole("status").textContent).toContain(
      "reflexión opcional quedó omitida",
    );
    expect(screen.getAllByRole("radio")).toHaveLength(4);
  });

  it("reabre M1 y conserva los materiales creativos", async () => {
    const user = await openMission();

    await user.type(
      screen.getByRole("textbox", { name: "Borrador de intención" }),
      "Borrador que deseo conservar",
    );
    await user.click(
      screen.getByRole("button", { name: "Guardar borrador" }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Título de la evidencia" }),
      "Evidencia",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Resumen de la evidencia" }),
      "Resumen que deseo conservar",
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
    await user.click(screen.getByRole("button", { name: "Reabrir M1" }));

    expect(
      screen.getByDisplayValue("Borrador que deseo conservar"),
    ).toBeTruthy();
    expect(
      screen.getByDisplayValue("Resumen que deseo conservar"),
    ).toBeTruthy();
    expect(
      screen.queryByRole("button", { name: "Retirar del portafolio" }),
    ).toBeNull();
  });

  it("explica que la sesión todavía es efímera", async () => {
    await openMission();

    expect(
      screen.getByText(/al recargar la página, este proyecto desaparece/i),
    ).toBeTruthy();
  });
});

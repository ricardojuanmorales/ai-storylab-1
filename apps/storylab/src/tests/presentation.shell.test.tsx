// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../presentation/App";
import { createTestStoryLabUseCases } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const renderApp = () =>
  render(<App useCases={createTestStoryLabUseCases()} />);

describe("accessible shell", () => {
  it("expone landmarks y navegación semántica", () => {
    renderApp();

    expect(screen.getByRole("banner")).toBeTruthy();
    expect(
      screen.getByRole("navigation", { name: "Navegación principal" }),
    ).toBeTruthy();
    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByRole("contentinfo")).toBeTruthy();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Tu ciclo creativo puede continuar después de recargar",
      }),
    ).toBeTruthy();
  });

  it("mueve el foco al contenido mediante el enlace de salto", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(
      screen.getByRole("link", { name: "Saltar al contenido principal" }),
    );

    expect(document.activeElement).toBe(screen.getByRole("main"));
  });

  it("activa y anuncia el contraste alto", async () => {
    const user = userEvent.setup();
    renderApp();

    const shell = screen.getByTestId("app-shell");
    const button = screen.getByRole("button", { name: /Contraste alto/i });

    expect(button.getAttribute("aria-pressed")).toBe("false");
    await user.click(button);

    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(shell.getAttribute("data-contrast")).toBe("high");
    expect(screen.getByRole("status").textContent).toContain("contraste alto");
  });

  it("activa la reducción de movimiento", async () => {
    const user = userEvent.setup();
    renderApp();

    const shell = screen.getByTestId("app-shell");
    const button = screen.getByRole("button", {
      name: /Reducir movimiento/i,
    });

    await user.click(button);

    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(shell.getAttribute("data-motion")).toBe("reduced");
  });

  it("cambia la escala de texto mediante un control etiquetado", async () => {
    const user = userEvent.setup();
    renderApp();

    const shell = screen.getByTestId("app-shell");
    const select = screen.getByRole("combobox", { name: "Escala de texto" });

    await user.selectOptions(select, "extra_large");

    expect(shell.getAttribute("data-text-scale")).toBe("extra_large");
    expect(screen.getByRole("status").textContent).toContain(
      "texto extra grande",
    );
  });

  it("hace alcanzables por teclado los controles iniciales", async () => {
    const user = userEvent.setup();
    renderApp();

    const pseudonym = await screen.findByRole("textbox", {
      name: "Seudónimo local",
    });
    const expectedControls = [
      screen.getByRole("button", { name: /Contraste alto/i }),
      screen.getByRole("button", { name: /Reducir movimiento/i }),
      screen.getByRole("combobox", { name: "Escala de texto" }),
      pseudonym,
      screen.getByRole("textbox", { name: "Título del proyecto" }),
    ];
    const reached = new Set<Element>();

    for (let index = 0; index < 22; index += 1) {
      await user.tab();
      if (document.activeElement) reached.add(document.activeElement);
    }

    for (const control of expectedControls) {
      expect(reached.has(control)).toBe(true);
    }
  });

  it("muestra el avance de H08-4.2 sin habilitar importación", () => {
    renderApp();

    expect(screen.getByText("M1 · Intención creadora")).toBeTruthy();
    expect(screen.getByText("M2 · Arquitectura narrativa")).toBeTruthy();
    expect(screen.getByText("M3 · Producción multimodal")).toBeTruthy();
    expect(screen.getByText("M4 · Curaduría y cierre")).toBeTruthy();
    expect(screen.getByText("Recuperación local y export preview")).toBeTruthy();
    expect(screen.getByText("Importación y roundtrip")).toBeTruthy();
    expect(screen.getAllByText("Planificado")).toHaveLength(3);
    expect(screen.getAllByText("Preparado")).toHaveLength(4);
    expect(screen.getByText("Disponible")).toBeTruthy();
  });
});

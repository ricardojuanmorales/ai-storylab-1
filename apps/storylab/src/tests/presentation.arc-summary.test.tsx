// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../presentation/App";
import {
  createTestStoryLabRuntime,
} from "./storylab-test-runtime";
import { completeFullArc } from "./full-arc-test-support";

afterEach(() => {
  cleanup();
});

describe("H08-4.5 arc summary", () => {
  it("muestra un arco incompleto y bloquea el preview final", async () => {
    const runtime = createTestStoryLabRuntime();
    const created = await runtime.useCases.createProject({
      title: "Arco todavía abierto",
      pseudonym: "Brisa",
    });
    if (!created.ok) throw new Error(created.error.code);

    render(<App useCases={runtime.useCases} />);

    const summary = await screen.findByRole("region", {
      name: "Resumen transversal del arco",
    });

    expect(
      within(summary).getByText("0 de 4 misiones completadas"),
    ).toBeTruthy();
    expect(
      within(summary)
        .getByRole("button", {
          name: "Preparar vista previa final validada",
        })
        .hasAttribute("disabled"),
    ).toBe(true);
  });

  it("previsualiza el arco completo sin reflexiones privadas", async () => {
    const runtime = createTestStoryLabRuntime();
    const created = await runtime.useCases.createProject({
      title: "Arco transversal completo",
      pseudonym: "Brisa",
    });
    if (!created.ok) throw new Error(created.error.code);

    const fixture = await completeFullArc(
      runtime.useCases,
      created.value.id,
    );

    render(<App useCases={runtime.useCases} />);
    const user = userEvent.setup();

    const summary = await screen.findByRole("region", {
      name: "Resumen transversal del arco",
    });
    expect(
      within(summary).getByText("4 de 4 misiones completadas"),
    ).toBeTruthy();

    const portfolio = within(summary).getByRole("list", {
      name: "Portafolio final ordenado",
    });
    expect(
      within(portfolio)
        .getAllByRole("listitem")
        .map((item) => item.textContent),
    ).toEqual(fixture.portfolioTitles);

    const button = within(summary).getByRole("button", {
      name: "Preparar vista previa final validada",
    });
    expect(button.hasAttribute("disabled")).toBe(false);
    await user.click(button);

    const preview = within(summary).getByLabelText(
      "Vista previa final validada",
    );
    expect(preview.textContent).toContain("storylab_project");
    for (const title of fixture.portfolioTitles) {
      expect(preview.textContent).toContain(title);
    }
    for (const marker of fixture.privateMarkers) {
      expect(preview.textContent).not.toContain(marker);
    }

    expect(
      screen.queryByRole("link", { name: /descargar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /publicar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /importar/i }),
    ).toBeNull();
  });
});

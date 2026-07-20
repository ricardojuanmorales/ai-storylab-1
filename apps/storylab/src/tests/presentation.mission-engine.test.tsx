// @vitest-environment jsdom

import {
  cleanup,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import { App } from "../presentation/App";
import {
  MISSION_WORKSPACE_POLICIES,
  getMissionWorkspacePolicy,
} from "../presentation/mission-workspace-model";
import { createTestStoryLabUseCases } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const createProject = async () => {
  const user = userEvent.setup();

  render(<App useCases={createTestStoryLabUseCases()} />);

  await user.type(
    await screen.findByRole("textbox", { name: "Seudónimo local" }),
    "Brisa",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título del proyecto" }),
    "La isla de los ecos",
  );
  await user.click(
    screen.getByRole("button", { name: "Crear proyecto local" }),
  );

  return user;
};

describe("H08-4 reusable mission engine", () => {
  it("mantiene la cardinalidad ratificada sin cambiar el schema", () => {
    expect(MISSION_WORKSPACE_POLICIES).toHaveLength(4);
    expect(
      MISSION_WORKSPACE_POLICIES.map(
        (policy) => policy.evidenceCardinality,
      ),
    ).toEqual([
      "one_editable",
      "one_editable",
      "multiple",
      "one_curation_record",
    ]);
    expect(
      MISSION_WORKSPACE_POLICIES.map(
        (policy) => policy.reflectionCardinality,
      ),
    ).toEqual([
      "zero_or_one_editable_private",
      "zero_or_one_editable_private",
      "zero_or_one_editable_private",
      "zero_or_one_editable_private",
    ]);
    expect(
      MISSION_WORKSPACE_POLICIES.filter(
        (policy) => policy.availability === "functional",
      ).map((policy) => policy.definition.id),
    ).toEqual([
      MISSION_CATALOG[0].id,
      MISSION_CATALOG[1].id,
    ]);
    expect(
      getMissionWorkspacePolicy(MISSION_CATALOG[2].id)
        ?.evidenceCardinality,
    ).toBe("multiple");
  });

  it("navega entre M1 y M2 sin habilitar M3 o M4", async () => {
    const user = await createProject();

    const navigation = screen.getByRole("navigation", {
      name: "Misiones del proyecto",
    });
    const scoped = within(navigation);
    const m1 = scoped.getByRole("link", {
      name: /M1 · Intención creadora/i,
    });
    const m2 = scoped.getByRole("link", {
      name: /M2 · Arquitectura narrativa/i,
    });

    expect(m1.getAttribute("aria-current")).toBe("step");
    expect(scoped.getAllByText("Planificada")).toHaveLength(2);
    expect(
      scoped.queryByRole("link", {
        name: /M3 · Producción multimodal/i,
      }),
    ).toBeNull();
    expect(
      scoped.queryByRole("link", {
        name: /M4 · Curaduría y cierre/i,
      }),
    ).toBeNull();

    await user.click(m2);

    expect(
      document.getElementById("mission-title")?.textContent,
    ).toBe("M2 · Arquitectura narrativa");
    expect(
      screen.getByRole("link", {
        name: /M2 · Arquitectura narrativa/i,
      }).getAttribute("aria-current"),
    ).toBe("step");
  });

  it("preserva la entrada funcional de M1 mediante su envoltura", async () => {
    const user = await createProject();

    await user.click(
      screen.getByRole("button", { name: "Iniciar M1" }),
    );

    expect(
      screen.getByRole("textbox", { name: "Borrador de intención" }),
    ).toBeTruthy();
  });
});

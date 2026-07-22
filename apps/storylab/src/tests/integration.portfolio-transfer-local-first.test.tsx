// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "../presentation/App";
import {
  portfolioPackageFor,
} from "./portfolio-import-test-helpers";
import {
  createTestStoryLabRuntime,
} from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const packageFile = (): File => {
  const content = JSON.stringify(
    portfolioPackageFor(),
  );
  const bytes = new TextEncoder().encode(content);
  return {
    name: "roundtrip-ui.storylab.json",
    size: bytes.byteLength,
    type: "application/json",
    arrayBuffer: async () => {
      const copy = new Uint8Array(bytes);
      return copy.buffer as ArrayBuffer;
    },
  } as File;
};

describe("H08-5.5 local-first portfolio transfer integration", () => {
  it("requires confirmation, imports a copy and recovers it after remount", async () => {
    const runtime = createTestStoryLabRuntime();
    const save = vi.spyOn(
      runtime.repository,
      "save",
    );
    const user = userEvent.setup();

    const first = render(
      <App
        useCases={runtime.useCases}
        portfolioTransfer={runtime.portfolioTransfer}
        persistenceMode="local"
      />,
    );

    await screen.findByRole("textbox", {
      name: "Seudónimo local",
    });

    fireEvent.change(
      screen.getByLabelText(
        "Seleccionar archivo de portafolio",
      ),
      {
        target: {
          files: [packageFile()],
        },
      },
    );

    const preview = await screen.findByRole(
      "heading",
      {
        name: "Revisar portafolio antes de importar",
      },
    );
    expect(preview).toBeTruthy();
    expect(save).not.toHaveBeenCalled();
    expect(
      screen.getAllByText("0.8.0-alpha.2", {
        selector: "dd",
      }),
    ).toHaveLength(2);

    await user.click(
      screen.getByRole("button", {
        name: "Confirmar e importar como copia local",
      }),
    );

    await screen.findByRole("heading", {
      name: "Cartas desde la luna verde",
    });
    expect(save).toHaveBeenCalledTimes(1);

    const mostRecent =
      await runtime.repository.loadMostRecent();
    expect(mostRecent).toMatchObject({
      ok: true,
      value: {
        title: "Cartas desde la luna verde",
      },
    });
    if (!mostRecent.ok || mostRecent.value === null) {
      return;
    }
    expect(mostRecent.value.id).not.toBe(
      "project-synthetic-002",
    );

    first.unmount();

    render(
      <App
        useCases={runtime.useCases}
        portfolioTransfer={runtime.portfolioTransfer}
        persistenceMode="local"
      />,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Cartas desde la luna verde",
      }),
    ).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByRole("status").textContent).toContain(
        "recuperado y validado",
      );
    });
  });
});

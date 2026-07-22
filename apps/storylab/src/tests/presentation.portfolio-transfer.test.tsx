// @vitest-environment jsdom

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { CreativeProject } from "../domain/model";
import type { ReflectionId } from "../domain/types";
import { App } from "../presentation/App";
import { clone } from "./helpers";
import {
  portfolioFixture,
} from "./portfolio-import-test-helpers";
import {
  createTestStoryLabRuntime,
} from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const fileLike = (
  name: string,
  content: string,
): File => {
  const bytes = new TextEncoder().encode(content);
  return {
    name,
    size: bytes.byteLength,
    type: "application/json",
    arrayBuffer: async () => {
      const copy = new Uint8Array(bytes);
      return copy.buffer as ArrayBuffer;
    },
  } as File;
};

const projectWithPrivateReflection =
  (): CreativeProject => {
    const source = clone(portfolioFixture.project);
    const reflection = source.reflections[0];
    if (reflection === undefined) {
      throw new Error("SYNTHETIC_REFLECTION_MISSING");
    }

    return {
      ...source,
      reflections: [
        ...source.reflections,
        {
          ...reflection,
          id: "reflection-private-ui" as ReflectionId,
          text: "SECRETO_PRIVADO_UI_H08_5_5",
          privacyClass: "private",
          selectedForExport: false,
        },
      ],
    };
  };

describe("H08-5.5 portfolio transfer presentation", () => {
  it("previews before download and excludes private reflections", async () => {
    const runtime = createTestStoryLabRuntime([
      projectWithPrivateReflection(),
    ]);
    const user = userEvent.setup();

    render(
      <App
        useCases={runtime.useCases}
        portfolioTransfer={runtime.portfolioTransfer}
        persistenceMode="local"
      />,
    );

    await screen.findByRole("heading", {
      name: portfolioFixture.project.title,
    });

    await user.click(
      screen.getByRole("button", {
        name: "Preparar archivo de portafolio",
      }),
    );

    const preview = await screen.findByRole(
      "heading",
      {
        name: "Revisar archivo antes de descargar",
      },
    );
    expect(preview).toBeTruthy();
    expect(runtime.downloads).toHaveLength(0);

    const region = preview.closest("section");
    expect(region).toBeTruthy();
    if (region === null) return;

    expect(
      within(region).getByText(
        portfolioFixture.project.title,
      ),
    ).toBeTruthy();
    expect(region.textContent).not.toContain(
      "SECRETO_PRIVADO_UI_H08_5_5",
    );

    await user.click(
      within(region).getByRole("button", {
        name: "Confirmar y descargar archivo",
      }),
    );

    await waitFor(() => {
      expect(runtime.downloads).toHaveLength(1);
    });
    expect(runtime.downloads[0]?.content).not.toContain(
      "SECRETO_PRIVADO_UI_H08_5_5",
    );
    expect(
      screen.queryByRole("heading", {
        name: "Revisar archivo antes de descargar",
      }),
    ).toBeNull();
  });

  it("rejects malformed JSON without replacing the active project", async () => {
    const runtime = createTestStoryLabRuntime([
      clone(portfolioFixture.project),
    ]);
    const save = vi.spyOn(
      runtime.repository,
      "save",
    );

    render(
      <App
        useCases={runtime.useCases}
        portfolioTransfer={runtime.portfolioTransfer}
        persistenceMode="local"
      />,
    );

    await screen.findByRole("heading", {
      name: portfolioFixture.project.title,
    });

    const input = screen.getByLabelText(
      "Seleccionar archivo de portafolio",
    );
    fireEvent.change(input, {
      target: {
        files: [
          fileLike(
            "malformed.storylab.json",
            '{"packageType":',
          ),
        ],
      },
    });

    await waitFor(() => {
      expect(screen.getByRole("status").textContent).toContain(
        "JSON válido",
      );
    });
    expect(save).not.toHaveBeenCalled();
    expect(
      screen.getByRole("heading", {
        name: portfolioFixture.project.title,
      }),
    ).toBeTruthy();
    expect(
      screen.queryByRole("button", {
        name: "Confirmar e importar como copia local",
      }),
    ).toBeNull();
  });

  it("exposes keyboard-reachable, separately confirmed actions", async () => {
    const runtime = createTestStoryLabRuntime([
      clone(portfolioFixture.project),
    ]);

    render(
      <App
        useCases={runtime.useCases}
        portfolioTransfer={runtime.portfolioTransfer}
        persistenceMode="local"
      />,
    );

    await screen.findByRole("heading", {
      name: portfolioFixture.project.title,
    });

    expect(
      (
        screen.getByLabelText(
          "Seleccionar archivo de portafolio",
        ) as HTMLInputElement
      ).type,
    ).toBe("file");
    expect(
      screen.getByRole("button", {
        name: "Preparar archivo de portafolio",
      }),
    ).toBeTruthy();
    expect(
      screen.queryByRole("button", {
        name: "Confirmar y descargar archivo",
      }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", {
        name: "Confirmar e importar como copia local",
      }),
    ).toBeNull();
  });
});

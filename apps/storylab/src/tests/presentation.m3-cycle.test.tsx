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

const openM3 = async () => {
  const runtime = createTestStoryLabRuntime();
  const user = userEvent.setup();

  render(<App useCases={runtime.useCases} />);

  await user.type(
    await screen.findByRole("textbox", { name: "Seudónimo local" }),
    "Brisa",
  );
  await user.type(
    screen.getByRole("textbox", { name: "Título del proyecto" }),
    "Archivo de mareas sintéticas",
  );
  await user.click(
    screen.getByRole("button", { name: "Crear proyecto local" }),
  );
  await user.click(
    screen.getByRole("link", {
      name: /M3 · Producción multimodal/i,
    }),
  );
  await user.click(screen.getByRole("button", { name: "Iniciar M3" }));
  await user.type(
    screen.getByRole("textbox", {
      name: "Plan y decisiones del proceso",
    }),
    "Documentar piezas textuales con metadatos sintéticos y sin archivos.",
  );
  await user.click(
    screen.getByRole("button", { name: "Guardar plan de producción" }),
  );

  return { runtime, user };
};

const createEvidence = async (
  user: ReturnType<typeof userEvent.setup>,
  title: string,
  summary: string,
  medium: string,
) => {
  await user.selectOptions(
    screen.getByRole("combobox", {
      name: "Medio sintético documentado",
    }),
    medium,
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Título de la evidencia de producción",
    }),
    title,
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Descripción textual y decisiones de proceso",
    }),
    summary,
  );
  await user.click(
    screen.getByRole("button", {
      name: "Crear evidencia de producción",
    }),
  );
};

const beginNewEvidence = async (
  user: ReturnType<typeof userEvent.setup>,
) => {
  await user.click(
    screen.getByRole("button", { name: "Nueva evidencia" }),
  );
};

describe("M3 functional experience", () => {
  it("crea y edita múltiples evidencias independientes", async () => {
    const { runtime, user } = await openM3();

    await createEvidence(
      user,
      "Fotograma sintético",
      "Descripción de una imagen imaginaria con luz de tormenta.",
      "image_description",
    );
    await beginNewEvidence(user);
    await createEvidence(
      user,
      "Paisaje sonoro sintético",
      "Descripción textual de capas de viento y campanas.",
      "audio_description",
    );

    await user.click(
      screen.getByRole("button", {
        name: /Fotograma sintético/i,
      }),
    );

    const description = screen.getByRole("textbox", {
      name: "Descripción textual y decisiones de proceso",
    });
    await user.clear(description);
    await user.type(
      description,
      "Descripción revisada de una imagen imaginaria con luz azul.",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Actualizar evidencia de producción",
      }),
    );

    const loaded = await runtime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    const m3Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[2].id,
    );

    expect(m3Evidence).toHaveLength(2);
    expect(m3Evidence[0]?.summary).toContain("luz azul");
    expect(m3Evidence[1]?.summary).toContain("capas de viento");
    expect(m3Evidence.every((item) => item.kind === "text")).toBe(true);
  });

  it("mantiene decisiones independientes y exige cierre humano", async () => {
    const { user } = await openM3();

    await createEvidence(
      user,
      "Secuencia visual",
      "Tres cuadros descritos como una secuencia.",
      "image_description",
    );
    await user.click(screen.getByRole("radio", { name: /Aceptar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );

    await beginNewEvidence(user);
    await createEvidence(
      user,
      "Boceto sonoro",
      "Ritmo descrito mediante texto y silencios.",
      "audio_description",
    );

    const completeBeforeDecision = screen.getByRole("button", {
      name: "Completar M3",
    });
    expect(completeBeforeDecision.hasAttribute("disabled")).toBe(true);

    await user.click(screen.getByRole("radio", { name: /Rechazar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );

    const complete = screen.getByRole("button", { name: "Completar M3" });
    expect(complete.hasAttribute("disabled")).toBe(false);
    await user.click(complete);

    expect(
      screen.getByRole("button", { name: "Reabrir M3" }),
    ).toBeTruthy();
  });

  it("reabre M3 y conserva las evidencias sin decisiones vigentes", async () => {
    const { runtime, user } = await openM3();

    await createEvidence(
      user,
      "Pieza uno",
      "Primera descripción sintética.",
      "text_fragment",
    );
    await user.click(screen.getByRole("radio", { name: /Aceptar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );

    await beginNewEvidence(user);
    await createEvidence(
      user,
      "Pieza dos",
      "Segunda descripción sintética.",
      "video_description",
    );
    await user.click(screen.getByRole("radio", { name: /Rechazar/i }));
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de esta evidencia",
      }),
    );
    await user.click(
      screen.getByRole("button", { name: "Completar M3" }),
    );
    await user.click(
      screen.getByRole("button", { name: "Reabrir M3" }),
    );

    const loaded = await runtime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    const m3Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[2].id,
    );
    const m3EvidenceIds = new Set(m3Evidence.map((item) => item.id));

    expect(m3Evidence).toHaveLength(2);
    expect(
      loaded.value.decisions.filter((item) =>
        m3EvidenceIds.has(item.evidenceId),
      ),
    ).toEqual([]);
  });

  it("representa multimodalidad sin cargas, binarios ni publicación", async () => {
    const { user } = await openM3();

    expect(document.querySelector('input[type="file"]')).toBeNull();
    expect(
      screen.queryByRole("button", { name: /subir/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /publicar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("link", { name: /descargar/i }),
    ).toBeNull();
    expect(
      screen.getByText(/No se almacena, sube ni simula ningún archivo binario/i),
    ).toBeTruthy();

    await createEvidence(
      user,
      "Interacción descrita",
      "Reglas textuales de una pieza interactiva imaginaria.",
      "interactive_description",
    );

    expect(
      screen.getByRole("button", { name: /Interacción descrita/i }),
    ).toBeTruthy();
  });
});

// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { parseCurationRecord } from "../application";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type { Evidence } from "../domain/model";
import type { ProjectId } from "../domain/types";
import { App } from "../presentation/App";
import { createTestStoryLabRuntime } from "./storylab-test-runtime";

afterEach(() => {
  cleanup();
});

const createAcceptedEvidence = async (
  runtime: ReturnType<typeof createTestStoryLabRuntime>,
  projectId: ProjectId,
  missionIndex: 0 | 1,
  title: string,
): Promise<Evidence> => {
  const definition = MISSION_CATALOG[missionIndex];

  await runtime.useCases.startMission({
    projectId,
    definition,
  });
  await runtime.useCases.saveTextActivity({
    projectId,
    missionId: definition.id,
    text: `Actividad sintética para ${title}`,
  });
  const created = await runtime.useCases.createTextEvidence({
    projectId,
    missionId: definition.id,
    title,
    summary: `Resumen sintético de ${title}`,
  });
  if (!created.ok) throw new Error(created.error.code);

  const evidence = created.value.evidence.find(
    (item) => item.missionId === definition.id,
  );
  if (!evidence) throw new Error("M4_SOURCE_EVIDENCE_MISSING");

  const decided = await runtime.useCases.decideEvidence({
    projectId,
    evidenceId: evidence.id,
    value: "accept",
  });
  if (!decided.ok) throw new Error(decided.error.code);

  return evidence;
};

const prepareM4 = async () => {
  const runtime = createTestStoryLabRuntime();
  const created = await runtime.useCases.createProject({
    title: "Proyecto curado",
    pseudonym: "Brisa",
  });
  if (!created.ok) throw new Error(created.error.code);

  const first = await createAcceptedEvidence(
    runtime,
    created.value.id,
    0,
    "Intención elegida",
  );
  const second = await createAcceptedEvidence(
    runtime,
    created.value.id,
    1,
    "Arquitectura elegida",
  );

  const user = userEvent.setup();
  render(<App useCases={runtime.useCases} />);

  await screen.findByRole("heading", { name: "Proyecto curado" });
  await user.click(
    screen.getByRole("link", {
      name: /M4 · Curaduría y cierre/i,
    }),
  );
  await user.click(screen.getByRole("button", { name: "Iniciar M4" }));
  await user.type(
    screen.getByRole("textbox", {
      name: "Lectura y criterios de cierre",
    }),
    "La selección privilegia claridad, proceso y coherencia.",
  );
  await user.click(
    screen.getByRole("button", { name: "Guardar lectura de cierre" }),
  );

  return { runtime, user, projectId: created.value.id, first, second };
};

const saveRecord = async (
  user: ReturnType<typeof userEvent.setup>,
) => {
  await user.click(
    screen.getByRole("checkbox", { name: /Intención elegida/i }),
  );
  await user.click(
    screen.getByRole("checkbox", { name: /Arquitectura elegida/i }),
  );
  await user.click(
    screen.getByRole("button", {
      name: "Mover Arquitectura elegida arriba",
    }),
  );
  await user.clear(
    screen.getByRole("textbox", {
      name: "Título del registro de curaduría",
    }),
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Título del registro de curaduría",
    }),
    "Cierre curatorial",
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Declaración de curaduría",
    }),
    "Estas evidencias representan el arco creativo.",
  );
  await user.type(
    screen.getByRole("textbox", {
      name: "Nota de traspaso conceptual",
    }),
    "Continuar con revisión humana antes de cualquier salida futura.",
  );
  await user.click(
    screen.getByRole("button", {
      name: "Guardar registro de curaduría",
    }),
  );
};

describe("M4 functional experience", () => {
  it("selecciona, ordena y cierra mediante un registro único", async () => {
    const { runtime, user, projectId, first, second } = await prepareM4();
    await saveRecord(user);

    await user.type(
      screen.getByRole("textbox", {
        name: "Reflexión privada opcional",
      }),
      "La selección final conserva una tensión productiva.",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar u omitir reflexión",
      }),
    );
    await user.click(
      screen.getByRole("radio", { name: /Confirmar cierre/i }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de cierre",
      }),
    );

    expect(
      screen.getByRole("button", { name: "Reabrir M4" }),
    ).toBeTruthy();
    expect(
      screen.getByText(/Vista conceptual únicamente/i),
    ).toBeTruthy();

    const loaded = await runtime.repository.load(projectId);
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    expect(
      loaded.value.portfolio.items.map((item) => item.evidenceId),
    ).toEqual([second.id, first.id]);

    const m4Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[3].id,
    );
    expect(m4Evidence).toHaveLength(1);

    const document = parseCurationRecord(m4Evidence[0]?.summary ?? "");
    expect(document?.selectedEvidenceIds).toEqual([second.id, first.id]);
    expect(m4Evidence[0]?.status).toBe("reviewed");
  });

  it("reabre y actualiza el mismo registro sin duplicarlo", async () => {
    const { runtime, user, projectId } = await prepareM4();
    await saveRecord(user);
    await user.click(
      screen.getByRole("radio", { name: /Confirmar cierre/i }),
    );
    await user.click(
      screen.getByRole("button", {
        name: "Registrar decisión de cierre",
      }),
    );
    await user.click(
      screen.getByRole("button", { name: "Reabrir M4" }),
    );

    const statement = screen.getByRole("textbox", {
      name: "Declaración de curaduría",
    });
    await user.clear(statement);
    await user.type(
      statement,
      "El registro revisado conserva una sola selección documentada.",
    );
    await user.click(
      screen.getByRole("button", {
        name: "Guardar registro de curaduría",
      }),
    );

    const loaded = await runtime.repository.load(projectId);
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    const m4Evidence = loaded.value.evidence.filter(
      (item) => item.missionId === MISSION_CATALOG[3].id,
    );

    expect(m4Evidence).toHaveLength(1);
    expect(
      parseCurationRecord(m4Evidence[0]?.summary ?? "")?.statement,
    ).toContain("registro revisado");
    expect(
      loaded.value.decisions.filter(
        (item) => item.evidenceId === m4Evidence[0]?.id,
      ),
    ).toEqual([]);
    expect(loaded.value.portfolio.items).toHaveLength(2);
  });

  it("mantiene el traspaso como vista conceptual sin salida de archivos", async () => {
    const { user } = await prepareM4();
    await saveRecord(user);

    expect(document.querySelector('input[type="file"]')).toBeNull();
    expect(
      screen.queryByRole("button", { name: /descargar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /publicar/i }),
    ).toBeNull();
    expect(
      screen.queryByRole("button", { name: /exportar/i }),
    ).toBeNull();
    expect(
      screen.getByText(/No se creó, descargó ni publicó ningún archivo/i),
    ).toBeTruthy();
  });
});

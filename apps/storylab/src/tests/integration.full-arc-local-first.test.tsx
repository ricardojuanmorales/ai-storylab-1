// @vitest-environment jsdom

import { createHash } from "node:crypto";
import {
  cleanup,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import {
  createStoryLabUseCases,
  parseCurationRecord,
} from "../application";
import {
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type { ISODateTime } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";
import { App } from "../presentation/App";
import { completeFullArc } from "./full-arc-test-support";

afterEach(() => {
  cleanup();
});

class FullArcStorage implements StorageLike {
  readonly values = new Map<string, string>();

  get length(): number {
    return this.values.size;
  }

  key(index: number): string | null {
    return Array.from(this.values.keys())[index] ?? null;
  }

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.values.delete(key);
  }
}

class FullArcIds implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:full-arc-${this.#value}`;
  }
}

class FullArcClock implements Clock {
  #value = Date.parse("2026-07-21T00:30:00.000Z");

  now(): ISODateTime {
    const current = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

const integrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const createRuntime = (storage: FullArcStorage) => {
  const repository = new LocalStorageProjectRepository(storage, {
    integrity,
  });
  const useCases = createStoryLabUseCases({
    repository,
    clock: new FullArcClock(),
    ids: new FullArcIds(),
  });

  return { repository, useCases };
};

describe("H08-4.5 full arc local-first integration", () => {
  it("recupera el arco completo y su preview privado después de remontar", async () => {
    const storage = new FullArcStorage();
    const firstRuntime = createRuntime(storage);
    const created = await firstRuntime.useCases.createProject({
      title: "FULL_ARC_RECOVERY_INTEGRATED",
      pseudonym: "Brisa",
    });
    if (!created.ok) throw new Error(created.error.code);

    const fixture = await completeFullArc(
      firstRuntime.useCases,
      created.value.id,
    );

    const first = render(
      <App
        useCases={firstRuntime.useCases}
        persistenceMode="local"
      />,
    );
    await screen.findByRole("region", {
      name: "Resumen transversal del arco",
    });
    first.unmount();

    const secondRuntime = createRuntime(storage);
    render(
      <App
        useCases={secondRuntime.useCases}
        persistenceMode="local"
      />,
    );
    const user = userEvent.setup();

    const summary = await screen.findByRole("region", {
      name: "Resumen transversal del arco",
    });
    expect(screen.getByRole("status").textContent).toContain(
      "recuperado y validado",
    );
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

    await user.click(
      within(summary).getByRole("button", {
        name: "Preparar vista previa final validada",
      }),
    );
    const preview = within(summary).getByLabelText(
      "Vista previa final validada",
    );
    for (const marker of fixture.privateMarkers) {
      expect(preview.textContent).not.toContain(marker);
    }

    const loaded = await secondRuntime.repository.loadMostRecent();
    expect(loaded.ok).toBe(true);
    if (!loaded.ok || !loaded.value) return;

    expect(
      loaded.value.missions.map((mission) => mission.status),
    ).toEqual(["completed", "completed", "completed", "completed"]);
    expect(
      loaded.value.portfolio.items.map((item) => item.evidenceId),
    ).toEqual(fixture.selectedEvidenceIds);
  });

  it("reabrir M2 invalida el cierre de M4 sin borrar su registro", async () => {
    const storage = new FullArcStorage();
    const runtime = createRuntime(storage);
    const created = await runtime.useCases.createProject({
      title: "FULL_ARC_UPSTREAM_REOPEN",
      pseudonym: "Brisa",
    });
    if (!created.ok) throw new Error(created.error.code);

    const fixture = await completeFullArc(
      runtime.useCases,
      created.value.id,
    );
    const reopened = await runtime.useCases.reopenMission({
      projectId: created.value.id,
      missionId: MISSION_CATALOG[1].id,
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;

    expect(
      reopened.value.missions.find(
        (mission) => mission.missionId === MISSION_CATALOG[1].id,
      )?.status,
    ).toBe("reopened");
    expect(
      reopened.value.missions.find(
        (mission) => mission.missionId === MISSION_CATALOG[3].id,
      )?.status,
    ).toBe("reopened");

    const record = reopened.value.evidence.find(
      (item) => item.missionId === MISSION_CATALOG[3].id,
    );
    expect(record).toBeTruthy();
    expect(
      parseCurationRecord(record?.summary ?? "")?.selectedEvidenceIds,
    ).toEqual(fixture.selectedEvidenceIds);
    expect(
      reopened.value.decisions.some(
        (decision) => decision.evidenceId === record?.id,
      ),
    ).toBe(false);
    expect(
      reopened.value.reflections.some(
        (reflection) =>
          reflection.missionId === MISSION_CATALOG[3].id &&
          reflection.text === fixture.privateMarkers[3],
      ),
    ).toBe(true);
    expect(
      reopened.value.portfolio.items.map((item) => item.evidenceId),
    ).toEqual([
      fixture.selectedEvidenceIds[0],
      fixture.selectedEvidenceIds[2],
    ]);

    render(
      <App
        useCases={runtime.useCases}
        persistenceMode="local"
      />,
    );

    const summary = await screen.findByRole("region", {
      name: "Resumen transversal del arco",
    });
    expect(
      within(summary).getByRole("alert").textContent,
    ).toContain("curaduría requiere revisión");
    expect(
      within(summary)
        .getByRole("button", {
          name: "Preparar vista previa final validada",
        })
        .hasAttribute("disabled"),
    ).toBe(true);
  });
});

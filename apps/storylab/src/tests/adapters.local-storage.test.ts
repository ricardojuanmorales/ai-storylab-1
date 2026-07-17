import { describe, expect, it } from "vitest";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import type { CreativeProject } from "../domain/model";
import type { ProjectId } from "../domain/types";
import { clone, loadJson } from "./helpers";

class FakeStorage implements StorageLike {
  readonly values = new Map<string, string>();
  getFailure: unknown = null;
  setFailure: unknown = null;
  removeFailure: unknown = null;

  getItem(key: string): string | null {
    if (this.getFailure) throw this.getFailure;
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.setFailure) throw this.setFailure;
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    if (this.removeFailure) throw this.removeFailure;
    this.values.delete(key);
  }
}

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);
const invalidDomain = loadJson<CreativeProject>(
  "../fixtures/invalid/portfolio-without-human-decision.json",
);
const keyFor = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`;

describe("LocalStorageProjectRepository", () => {
  it("guarda y carga un proyecto validado", async () => {
    const storage = new FakeStorage();
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.save(minimal)).toMatchObject({ ok: true });
    const loaded = await repository.load(minimal.id);

    expect(loaded.ok).toBe(true);
    if (!loaded.ok) return;
    expect(loaded.value).toEqual(minimal);
    expect(loaded.value).not.toBe(minimal);
  });

  it("recupera el proyecto más reciente", async () => {
    const storage = new FakeStorage();
    const repository = new LocalStorageProjectRepository(storage);
    await repository.save(minimal);

    const recovered = await repository.loadMostRecent();

    expect(recovered).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
  });

  it("elimina el proyecto y su puntero reciente", async () => {
    const storage = new FakeStorage();
    const repository = new LocalStorageProjectRepository(storage);
    await repository.save(minimal);

    expect(await repository.remove(minimal.id)).toMatchObject({ ok: true });
    expect(storage.values.has(keyFor(minimal.id))).toBe(false);
    expect(storage.values.has(LOCAL_STORAGE_KEYS.latest)).toBe(false);
  });

  it("rechaza JSON corrupto", async () => {
    const storage = new FakeStorage();
    storage.values.set(LOCAL_STORAGE_KEYS.latest, minimal.id as string);
    storage.values.set(keyFor(minimal.id), "{invalid");
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza un snapshot que no satisface el schema", async () => {
    const storage = new FakeStorage();
    storage.values.set(LOCAL_STORAGE_KEYS.latest, minimal.id as string);
    storage.values.set(
      keyFor(minimal.id),
      JSON.stringify({ schemaVersion: "0.8.0-alpha.1" }),
    );
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza un snapshot con invariantes rotas", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LOCAL_STORAGE_KEYS.latest,
      invalidDomain.id as string,
    );
    storage.values.set(
      keyFor(invalidDomain.id),
      JSON.stringify(invalidDomain),
    );
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("devuelve un error tipado de cuota", async () => {
    const storage = new FakeStorage();
    storage.setFailure = { name: "QuotaExceededError" };
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.save(minimal)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_QUOTA_EXCEEDED" },
    });
  });

  it("devuelve indisponibilidad cuando no existe storage", async () => {
    const repository = new LocalStorageProjectRepository(null);

    expect(await repository.save(minimal)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_UNAVAILABLE" },
    });
  });

  it("limpia un puntero reciente huérfano", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LOCAL_STORAGE_KEYS.latest,
      "project:synthetic-missing",
    );
    const repository = new LocalStorageProjectRepository(storage);

    expect(await repository.loadMostRecent()).toEqual({
      ok: true,
      value: null,
    });
    expect(storage.values.has(LOCAL_STORAGE_KEYS.latest)).toBe(false);
  });
});

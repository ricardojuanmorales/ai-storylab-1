
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  LEGACY_LOCAL_STORAGE_KEYS,
  LOCAL_STORAGE_KEYS,
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import type { CreativeProject } from "../domain/model";
import type { ISODateTime, ProjectId } from "../domain/types";
import { clone, loadJson } from "./helpers";

class FakeStorage implements StorageLike {
  readonly values = new Map<string, string>();
  getFailure: unknown = null;
  setFailure: unknown = null;
  removeFailure: unknown = null;
  removeFailureKey: string | null = null;

  get length(): number {
    return this.values.size;
  }

  key(index: number): string | null {
    return Array.from(this.values.keys())[index] ?? null;
  }

  getItem(key: string): string | null {
    if (this.getFailure) throw this.getFailure;
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (this.setFailure) throw this.setFailure;
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    if (this.removeFailure || this.removeFailureKey === key) {
      throw this.removeFailure ?? new Error("REMOVE_FAILED");
    }
    this.values.delete(key);
  }
}

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);
const invalidDomain = loadJson<CreativeProject>(
  "../fixtures/invalid/portfolio-without-human-decision.json",
);
const alpha1 = loadJson<Record<string, unknown>>(
  "../fixtures/migrations/project-alpha.1-source.json",
);
const alpha2Expected = loadJson<CreativeProject>(
  "../fixtures/migrations/project-alpha.2-expected.json",
);

const nodeIntegrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const fixedNow = (): ISODateTime =>
  "2026-07-18T07:00:00.000Z" as ISODateTime;

const repositoryFor = (storage: FakeStorage) =>
  new LocalStorageProjectRepository(storage, {
    integrity: nodeIntegrity,
    now: fixedNow,
  });

const stableProjectKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`;

const stableStagingKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.stagingPrefix}${projectId as string}`;

const alpha2ProjectKey = (projectId: ProjectId): string =>
  `${LEGACY_LOCAL_STORAGE_KEYS.alpha2.projectPrefix}${projectId as string}`;

const alpha1ProjectKey = (projectId: ProjectId): string =>
  `${LEGACY_LOCAL_STORAGE_KEYS.alpha1.projectPrefix}${projectId as string}`;

const storedJson = <Value>(
  storage: FakeStorage,
  key: string,
): Value => JSON.parse(storage.values.get(key) ?? "null") as Value;

describe("LocalStorageProjectRepository H08-3.2", () => {
  it("guarda mediante staging, envelope, índice y recent separado", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);

    expect(await repository.save(minimal)).toMatchObject({ ok: true });
    expect(storage.values.has(stableStagingKey(minimal.id))).toBe(false);

    const envelope = storedJson<Record<string, unknown>>(
      storage,
      stableProjectKey(minimal.id),
    );
    expect(envelope).toMatchObject({
      storageFormat: "ai-storylab-project",
      storageFormatVersion: 1,
      projectId: minimal.id,
      payload: minimal,
      integrity: {
        algorithm: "SHA-256",
      },
    });

    const index = storedJson<{
      entries: readonly Record<string, unknown>[];
    }>(storage, LOCAL_STORAGE_KEYS.index);
    expect(index.entries).toEqual([
      {
        projectId: minimal.id,
        title: minimal.title,
        projectSchemaVersion: minimal.schemaVersion,
        updatedAt: minimal.updatedAt,
        writeState: "committed",
      },
    ]);
    expect(JSON.stringify(index)).not.toContain("recentProjectId");
    expect(JSON.stringify(index)).not.toContain(
      minimal.profile.pseudonym,
    );

    expect(
      storedJson(storage, LOCAL_STORAGE_KEYS.recent),
    ).toMatchObject({
      storageFormat: "ai-storylab-recent-pointer",
      projectId: minimal.id,
    });

    const loaded = await repository.load(minimal.id);
    expect(loaded).toMatchObject({ ok: true, value: minimal });
    if (loaded.ok) expect(loaded.value).not.toBe(minimal);
  });

  it("expone metadatos internos sin duplicar payload privado", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    expect(await repository.listProjectMetadata()).toEqual({
      ok: true,
      value: [
        {
          projectId: minimal.id,
          title: minimal.title,
          schemaVersion: minimal.schemaVersion,
          updatedAt: minimal.updatedAt,
        },
      ],
    });
  });

  it("recupera por roll-forward un staging válido que quedó al final", async () => {
    const storage = new FakeStorage();
    const first = repositoryFor(storage);
    storage.removeFailureKey = stableStagingKey(minimal.id);

    expect(await first.save(minimal)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_UNAVAILABLE" },
    });
    expect(storage.values.has(stableStagingKey(minimal.id))).toBe(true);

    storage.removeFailureKey = null;
    const second = repositoryFor(storage);
    expect(await second.loadMostRecent()).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
    expect(storage.values.has(stableStagingKey(minimal.id))).toBe(false);
  });

  it("ignora claves ajenas al enumerar staging", async () => {
    const storage = new FakeStorage();
    storage.values.set("foreign:staging:project", "{invalid");
    const repository = repositoryFor(storage);

    expect(await repository.load(minimal.id)).toEqual({
      ok: true,
      value: null,
    });
    expect(storage.values.has("foreign:staging:project")).toBe(true);
  });

  it("rechaza y preserva un staging inválido", async () => {
    const storage = new FakeStorage();
    const key = `${LOCAL_STORAGE_KEYS.stagingPrefix}project:invalid`;
    storage.values.set(key, "{invalid");
    const repository = repositoryFor(storage);

    expect(await repository.load(minimal.id)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
    expect(storage.values.has(key)).toBe(true);
  });

  it("promueve un snapshot raw alpha.2 sin destruir su fuente", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      minimal.id as string,
    );
    storage.values.set(
      alpha2ProjectKey(minimal.id),
      JSON.stringify(minimal),
    );
    const repository = repositoryFor(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: true,
      value: minimal,
    });
    expect(storage.values.has(alpha2ProjectKey(minimal.id))).toBe(true);
    expect(storage.values.has(stableProjectKey(minimal.id))).toBe(true);
    expect(storage.values.has(LOCAL_STORAGE_KEYS.recent)).toBe(true);
  });

  it("descubre, migra y promueve alpha.1 preservando la fuente", async () => {
    const storage = new FakeStorage();
    const projectId = alpha1.id as ProjectId;
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha1.latest,
      projectId as string,
    );
    storage.values.set(
      alpha1ProjectKey(projectId),
      JSON.stringify(alpha1),
    );
    const repository = repositoryFor(storage);

    expect(await repository.loadMostRecent()).toEqual({
      ok: true,
      value: alpha2Expected,
    });
    expect(storage.values.has(alpha1ProjectKey(projectId))).toBe(true);
    expect(storage.values.has(stableProjectKey(projectId))).toBe(true);
  });

  it("prioriza recent v1 sobre punteros raw", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    const second: CreativeProject = {
      ...clone(minimal),
      id: "project:synthetic-second" as ProjectId,
      title: "Proyecto raw secundario",
    };
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      second.id as string,
    );
    storage.values.set(
      alpha2ProjectKey(second.id),
      JSON.stringify(second),
    );

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
  });

  it("degrada recent v1 huérfano y continúa con alpha.2", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LOCAL_STORAGE_KEYS.recent,
      JSON.stringify({
        storageFormat: "ai-storylab-recent-pointer",
        storageFormatVersion: 1,
        projectId: "project:missing",
        updatedAt: fixedNow(),
      }),
    );
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      minimal.id as string,
    );
    storage.values.set(
      alpha2ProjectKey(minimal.id),
      JSON.stringify(minimal),
    );
    const repository = repositoryFor(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
    expect(
      storedJson(storage, LOCAL_STORAGE_KEYS.recent),
    ).toMatchObject({ projectId: minimal.id });
  });

  it("rechaza un envelope cuyo payload fue alterado", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    const key = stableProjectKey(minimal.id);
    const envelope = storedJson<{
      payload: CreativeProject;
    } & Record<string, unknown>>(storage, key);
    storage.values.set(
      key,
      JSON.stringify({
        ...envelope,
        payload: {
          ...envelope.payload,
          title: "Título alterado",
        },
      }),
    );

    expect(await repository.load(minimal.id)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza JSON corrupto en un snapshot raw", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      minimal.id as string,
    );
    storage.values.set(alpha2ProjectKey(minimal.id), "{invalid");
    const repository = repositoryFor(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("rechaza un snapshot raw con invariantes rotas", async () => {
    const storage = new FakeStorage();
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      invalidDomain.id as string,
    );
    storage.values.set(
      alpha2ProjectKey(invalidDomain.id),
      JSON.stringify(invalidDomain),
    );
    const repository = repositoryFor(storage);

    expect(await repository.loadMostRecent()).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("devuelve un error tipado de cuota sin crear residuos", async () => {
    const storage = new FakeStorage();
    storage.setFailure = { name: "QuotaExceededError" };
    const repository = repositoryFor(storage);

    expect(await repository.save(minimal)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_QUOTA_EXCEEDED" },
    });
    expect(storage.values.size).toBe(0);
  });

  it("devuelve indisponibilidad cuando no existe storage", async () => {
    const repository = new LocalStorageProjectRepository(null, {
      integrity: nodeIntegrity,
      now: fixedNow,
    });

    expect(await repository.save(minimal)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_UNAVAILABLE" },
    });
  });

  it("elimina envelope, raw sources, índice y punteros", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);
    storage.values.set(
      alpha2ProjectKey(minimal.id),
      JSON.stringify(minimal),
    );
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha2.latest,
      minimal.id as string,
    );
    storage.values.set(
      alpha1ProjectKey(minimal.id),
      JSON.stringify({
        ...minimal,
        schemaVersion: "0.8.0-alpha.1",
      }),
    );
    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha1.latest,
      minimal.id as string,
    );

    expect(await repository.remove(minimal.id)).toMatchObject({ ok: true });
    expect(storage.values.has(stableProjectKey(minimal.id))).toBe(false);
    expect(storage.values.has(alpha2ProjectKey(minimal.id))).toBe(false);
    expect(storage.values.has(alpha1ProjectKey(minimal.id))).toBe(false);
    expect(storage.values.has(LOCAL_STORAGE_KEYS.recent)).toBe(false);
    expect(
      storedJson<{ entries: readonly unknown[] }>(
        storage,
        LOCAL_STORAGE_KEYS.index,
      ).entries,
    ).toEqual([]);
  });

  it("limpia el proyecto reciente y deja el repositorio coherente", async () => {
    const storage = new FakeStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    expect(await repository.clearMostRecent()).toMatchObject({ ok: true });
    expect(storage.values.has(stableProjectKey(minimal.id))).toBe(false);
    expect(storage.values.has(LOCAL_STORAGE_KEYS.recent)).toBe(false);
  });
});

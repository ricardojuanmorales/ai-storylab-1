
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageProjectRepository,
  type StorageLike,
} from "../adapters/storage/local-storage-project-repository";
import type { CreativeProject } from "../domain/model";
import type { ISODateTime, ProjectId } from "../domain/types";
import type {
  ProjectEnvelopeV1,
  ProjectIndexV1,
  StorageQuarantineV1,
} from "../schemas/storage-runtime-validators";
import { clone, loadJson } from "./helpers";

type FaultOperation = "get" | "set" | "remove" | "key" | "length";

interface Fault {
  readonly operation: FaultOperation;
  readonly key?: string;
  readonly failure: unknown;
}

class FaultInjectingStorage implements StorageLike {
  readonly values = new Map<string, string>();
  fault: Fault | null = null;

  #throwIfFault(operation: FaultOperation, key?: string): void {
    if (
      this.fault?.operation === operation &&
      (this.fault.key === undefined || this.fault.key === key)
    ) {
      const failure = this.fault.failure;
      this.fault = null;
      throw failure;
    }
  }

  get length(): number {
    this.#throwIfFault("length");
    return this.values.size;
  }

  key(index: number): string | null {
    this.#throwIfFault("key");
    return Array.from(this.values.keys())[index] ?? null;
  }

  getItem(key: string): string | null {
    this.#throwIfFault("get", key);
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.#throwIfFault("set", key);
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    this.#throwIfFault("remove", key);
    this.values.delete(key);
  }
}

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);

const nodeIntegrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const fixedNow = (): ISODateTime =>
  "2026-07-18T09:00:00.000Z" as ISODateTime;

const repositoryFor = (storage: FaultInjectingStorage) =>
  new LocalStorageProjectRepository(storage, {
    integrity: nodeIntegrity,
    now: fixedNow,
  });

const projectKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`;

const stagingKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.stagingPrefix}${projectId as string}`;

const storedJson = <Value>(
  storage: FaultInjectingStorage,
  key: string,
): Value => JSON.parse(storage.values.get(key) ?? "null") as Value;

const updatedProject = (): CreativeProject => ({
  ...clone(minimal),
  title: "Proyecto actualizado",
  updatedAt: "2026-07-18T08:30:00.000Z" as ISODateTime,
});

const quotaFailure = { name: "QuotaExceededError" };

describe("LocalStorageProjectRepository H08-3.3", () => {
  it("preserva el snapshot confirmado si falla la cuota en staging", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    storage.fault = {
      operation: "set",
      key: stagingKey(minimal.id),
      failure: quotaFailure,
    };

    expect(await repository.save(updatedProject())).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_QUOTA_EXCEEDED",
        details: { kind: "quota_exceeded" },
      },
    });
    expect(
      storedJson<ProjectEnvelopeV1>(
        storage,
        projectKey(minimal.id),
      ).payload.title,
    ).toBe(minimal.title);
  });

  it("recupera después de cuota al promover el snapshot", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    storage.fault = {
      operation: "set",
      key: projectKey(minimal.id),
      failure: quotaFailure,
    };

    expect(await repository.save(updatedProject())).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_QUOTA_EXCEEDED" },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);
    expect(
      storedJson<ProjectEnvelopeV1>(
        storage,
        projectKey(minimal.id),
      ).payload.title,
    ).toBe(minimal.title);

    expect(await repositoryFor(storage).load(minimal.id)).toMatchObject({
      ok: true,
      value: { title: "Proyecto actualizado" },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(false);
  });

  it("recupera después de cuota al escribir el índice", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    storage.fault = {
      operation: "set",
      key: LOCAL_STORAGE_KEYS.index,
      failure: quotaFailure,
    };

    expect(await repository.save(updatedProject())).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_QUOTA_EXCEEDED" },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);

    expect(await repositoryFor(storage).load(minimal.id)).toMatchObject({
      ok: true,
      value: { title: "Proyecto actualizado" },
    });
    expect(
      storedJson<ProjectIndexV1>(
        storage,
        LOCAL_STORAGE_KEYS.index,
      ).entries[0],
    ).toMatchObject({ title: "Proyecto actualizado" });
  });

  it("recupera después de cuota al escribir recent", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    storage.fault = {
      operation: "set",
      key: LOCAL_STORAGE_KEYS.recent,
      failure: quotaFailure,
    };

    expect(await repository.save(updatedProject())).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_QUOTA_EXCEEDED" },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);

    expect(await repositoryFor(storage).loadMostRecent()).toMatchObject({
      ok: true,
      value: { title: "Proyecto actualizado" },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(false);
  });

  it("roll-forward es idempotente si falla la limpieza de staging", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);

    storage.fault = {
      operation: "remove",
      key: stagingKey(minimal.id),
      failure: new Error("INTERRUPTED_CLEANUP"),
    };

    expect(await repository.save(minimal)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_UNAVAILABLE",
        details: { kind: "storage_unavailable" },
      },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);

    expect(await repositoryFor(storage).loadMostRecent()).toMatchObject({
      ok: true,
      value: { id: minimal.id },
    });
    expect(storage.values.has(stagingKey(minimal.id))).toBe(false);
  });

  it("clasifica corrupción sin copiar contenido privado a cuarentena", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    const key = projectKey(minimal.id);
    const envelope = storedJson<ProjectEnvelopeV1>(storage, key);
    storage.values.set(
      key,
      JSON.stringify({
        ...envelope,
        payload: {
          ...envelope.payload,
          title: "Título alterado y sensible",
        },
      }),
    );

    expect(await repository.load(minimal.id)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_DATA_CORRUPTED",
        details: { kind: "integrity_mismatch" },
      },
    });

    const quarantine = storedJson<StorageQuarantineV1>(
      storage,
      LOCAL_STORAGE_KEYS.quarantine,
    );
    expect(quarantine.entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sourceKey: key,
          classification: "integrity_mismatch",
          action: "preserve_source",
          reviewState: "pending_human_review",
        }),
      ]),
    );
    expect(JSON.stringify(quarantine)).not.toContain(
      minimal.profile.pseudonym,
    );
    expect(JSON.stringify(quarantine)).not.toContain(
      "Título alterado y sensible",
    );
    expect(storage.values.get(key)).toContain(
      "Título alterado y sensible",
    );
  });

  it("rechaza una versión futura sin modificar la fuente", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    const key = projectKey(minimal.id);
    const envelope = storedJson<ProjectEnvelopeV1>(storage, key);
    storage.values.set(
      key,
      JSON.stringify({
        ...envelope,
        projectSchemaVersion: "9.0.0",
        payload: {
          ...envelope.payload,
          schemaVersion: "9.0.0",
        },
      }),
    );
    const original = storage.values.get(key);

    expect(await repository.load(minimal.id)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_DATA_CORRUPTED",
        details: { kind: "unsupported_future_version" },
      },
    });
    expect(storage.values.get(key)).toBe(original);
  });

  it("preserva un staging inválido y lo clasifica", async () => {
    const storage = new FaultInjectingStorage();
    const key = `${LOCAL_STORAGE_KEYS.stagingPrefix}project:invalid`;
    storage.values.set(key, "{invalid");

    expect(await repositoryFor(storage).load(minimal.id)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_DATA_CORRUPTED",
        details: { kind: "malformed_json" },
      },
    });
    expect(storage.values.get(key)).toBe("{invalid");
    expect(
      storedJson<StorageQuarantineV1>(
        storage,
        LOCAL_STORAGE_KEYS.quarantine,
      ).entries,
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sourceKey: key,
          classification: "malformed_json",
        }),
      ]),
    );
  });

  it("reconstruye un índice corrupto solo desde snapshots válidos", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);
    storage.values.set(LOCAL_STORAGE_KEYS.index, "{invalid");

    expect(await repository.listProjectMetadata()).toMatchObject({
      ok: true,
      value: [
        {
          projectId: minimal.id,
          title: minimal.title,
        },
      ],
    });
    expect(
      storedJson<ProjectIndexV1>(
        storage,
        LOCAL_STORAGE_KEYS.index,
      ).entries,
    ).toHaveLength(1);
  });

  it("reconstruye metadatos cuando existe snapshot sin índice", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);
    storage.values.delete(LOCAL_STORAGE_KEYS.index);

    expect(await repository.listProjectMetadata()).toMatchObject({
      ok: true,
      value: [{ projectId: minimal.id }],
    });
    expect(
      storedJson<StorageQuarantineV1>(
        storage,
        LOCAL_STORAGE_KEYS.quarantine,
      ).entries,
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sourceKey: projectKey(minimal.id),
          classification: "snapshot_without_index",
        }),
      ]),
    );
  });

  it("elimina entradas huérfanas del índice sin borrar proyectos", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    const index = storedJson<ProjectIndexV1>(
      storage,
      LOCAL_STORAGE_KEYS.index,
    );
    storage.values.set(
      LOCAL_STORAGE_KEYS.index,
      JSON.stringify({
        ...index,
        entries: [
          ...index.entries,
          {
            projectId: "project:missing",
            title: "Huérfano",
            projectSchemaVersion: minimal.schemaVersion,
            updatedAt: minimal.updatedAt,
            writeState: "committed",
          },
        ],
      }),
    );

    expect(await repository.listProjectMetadata()).toMatchObject({
      ok: true,
      value: [{ projectId: minimal.id }],
    });
    expect(
      storedJson<ProjectIndexV1>(
        storage,
        LOCAL_STORAGE_KEYS.index,
      ).entries,
    ).toHaveLength(1);
    expect(storage.values.has(projectKey(minimal.id))).toBe(true);
  });

  it("limpia recent huérfano sin eliminar otros estados", async () => {
    const storage = new FaultInjectingStorage();
    storage.values.set(
      LOCAL_STORAGE_KEYS.recent,
      JSON.stringify({
        storageFormat: "ai-storylab-recent-pointer",
        storageFormatVersion: 1,
        projectId: "project:missing",
        updatedAt: fixedNow(),
      }),
    );

    expect(await repositoryFor(storage).loadMostRecent()).toEqual({
      ok: true,
      value: null,
    });
    expect(storage.values.has(LOCAL_STORAGE_KEYS.recent)).toBe(false);
  });

  it("no sobrescribe un snapshot corrupto con staging válido", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);

    storage.fault = {
      operation: "set",
      key: projectKey(minimal.id),
      failure: quotaFailure,
    };
    await repository.save(updatedProject());
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);

    const key = projectKey(minimal.id);
    const corruptSource = "{invalid";
    storage.values.set(key, corruptSource);

    expect(await repositoryFor(storage).load(minimal.id)).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
    expect(storage.values.get(key)).toBe(corruptSource);
    expect(storage.values.has(stagingKey(minimal.id))).toBe(true);
  });

  it("mantiene la reparación idempotente sin duplicar cuarentena", async () => {
    const storage = new FaultInjectingStorage();
    const repository = repositoryFor(storage);
    await repository.save(minimal);
    storage.values.delete(LOCAL_STORAGE_KEYS.index);

    await repository.listProjectMetadata();
    await repository.listProjectMetadata();

    const entries = storedJson<StorageQuarantineV1>(
      storage,
      LOCAL_STORAGE_KEYS.quarantine,
    ).entries.filter(
      (entry) =>
        entry.sourceKey === projectKey(minimal.id) &&
        entry.classification === "snapshot_without_index",
    );
    expect(entries).toHaveLength(1);
  });

  it("tipa indisponibilidad durante enumeración", async () => {
    const storage = new FaultInjectingStorage();
    storage.fault = {
      operation: "length",
      failure: new Error("STORAGE_BLOCKED"),
    };

    expect(await repositoryFor(storage).load(minimal.id)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_UNAVAILABLE",
        details: { kind: "storage_unavailable" },
      },
    });
  });
});

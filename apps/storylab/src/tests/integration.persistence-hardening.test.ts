
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
import { CURRENT_SCHEMA_VERSION } from "../schemas/schema-version";
import type {
  ProjectEnvelopeV1,
  ProjectIndexV1,
  RecentProjectPointerV1,
  StorageQuarantineV1,
} from "../schemas/storage-runtime-validators";
import { clone, loadJson } from "./helpers";

type FaultOperation = "set" | "remove";

interface Fault {
  readonly operation: FaultOperation;
  readonly key: string;
  readonly failure: unknown;
}

class IntegratedPersistenceStorage implements StorageLike {
  readonly values = new Map<string, string>();
  fault: Fault | null = null;

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
    if (this.fault?.operation === "set" && this.fault.key === key) {
      const failure = this.fault.failure;
      this.fault = null;
      throw failure;
    }
    this.values.set(key, value);
  }

  removeItem(key: string): void {
    if (this.fault?.operation === "remove" && this.fault.key === key) {
      const failure = this.fault.failure;
      this.fault = null;
      throw failure;
    }
    this.values.delete(key);
  }
}

const completedProject = loadJson<CreativeProject>(
  "../fixtures/valid/completed-project.json",
);
const alpha1Source = loadJson<unknown>(
  "../fixtures/migrations/project-alpha.1-source.json",
);

const nodeIntegrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

const fixedNow = (): ISODateTime =>
  "2026-07-18T18:30:00.000Z" as ISODateTime;

const repositoryFor = (storage: IntegratedPersistenceStorage) =>
  new LocalStorageProjectRepository(storage, {
    integrity: nodeIntegrity,
    now: fixedNow,
  });

const projectKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`;

const stagingKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.stagingPrefix}${projectId as string}`;

const storedJson = <Value>(
  storage: IntegratedPersistenceStorage,
  key: string,
): Value => JSON.parse(storage.values.get(key) ?? "null") as Value;

describe("H08-3.4 integrated persistence hardening", () => {
  it("recupera integralmente un proyecto H08-2 sin filtrar contenido privado al índice", async () => {
    const storage = new IntegratedPersistenceStorage();
    const repository = repositoryFor(storage);
    const source = clone(completedProject);

    expect(await repository.save(source)).toMatchObject({ ok: true });

    const recovered = await repositoryFor(storage).loadMostRecent();
    expect(recovered).toMatchObject({
      ok: true,
      value: {
        id: source.id,
        title: source.title,
        schemaVersion: CURRENT_SCHEMA_VERSION,
      },
    });
    if (!recovered.ok) return;
    expect(recovered.value).toEqual(source);

    const envelope = storedJson<ProjectEnvelopeV1>(
      storage,
      projectKey(source.id),
    );
    const index = storedJson<ProjectIndexV1>(
      storage,
      LOCAL_STORAGE_KEYS.index,
    );
    const recent = storedJson<RecentProjectPointerV1>(
      storage,
      LOCAL_STORAGE_KEYS.recent,
    );

    expect(envelope.payload).toEqual(source);
    expect(recent.projectId).toBe(source.id);
    expect(index.entries).toEqual([
      {
        projectId: source.id,
        title: source.title,
        projectSchemaVersion: CURRENT_SCHEMA_VERSION,
        updatedAt: source.updatedAt,
        writeState: "committed",
      },
    ]);

    const serializedIndex = JSON.stringify(index);
    expect(serializedIndex).not.toContain(source.profile.pseudonym);
    expect(serializedIndex).not.toContain('"reflections"');
    expect(serializedIndex).not.toContain('"evidence"');
    expect(storage.values.has(stagingKey(source.id))).toBe(false);
  });

  it("migra y promueve alpha.1 preservando la fuente raw", async () => {
    const storage = new IntegratedPersistenceStorage();
    const source = clone(alpha1Source) as {
      readonly id: string;
      readonly title: string;
      readonly profile: { readonly pseudonym: string };
    };
    const projectId = source.id as ProjectId;
    const rawKey =
      `${LEGACY_LOCAL_STORAGE_KEYS.alpha1.projectPrefix}${source.id}`;
    const rawSource = JSON.stringify(source);

    storage.values.set(
      LEGACY_LOCAL_STORAGE_KEYS.alpha1.latest,
      source.id,
    );
    storage.values.set(rawKey, rawSource);

    const first = await repositoryFor(storage).loadMostRecent();
    expect(first).toMatchObject({
      ok: true,
      value: {
        id: projectId,
        title: source.title,
        schemaVersion: CURRENT_SCHEMA_VERSION,
      },
    });

    expect(storage.values.get(rawKey)).toBe(rawSource);
    expect(storage.values.has(projectKey(projectId))).toBe(true);
    expect(storage.values.has(stagingKey(projectId))).toBe(false);

    const index = storedJson<ProjectIndexV1>(
      storage,
      LOCAL_STORAGE_KEYS.index,
    );
    expect(index.entries[0]).toMatchObject({
      projectId,
      title: source.title,
      projectSchemaVersion: CURRENT_SCHEMA_VERSION,
      writeState: "committed",
    });
    expect(JSON.stringify(index)).not.toContain(
      source.profile.pseudonym,
    );

    const second = await repositoryFor(storage).loadMostRecent();
    expect(second).toEqual(first);
    expect(storage.values.get(rawKey)).toBe(rawSource);
  });

  it("completa roll-forward después de una interrupción y deja metadata coherente", async () => {
    const storage = new IntegratedPersistenceStorage();
    const repository = repositoryFor(storage);
    const original = clone(completedProject);
    const updated: CreativeProject = {
      ...clone(completedProject),
      title: "Proyecto H08-2 recuperado integralmente",
      updatedAt: "2026-07-18T18:20:00.000Z" as ISODateTime,
    };

    expect(await repository.save(original)).toMatchObject({ ok: true });

    storage.fault = {
      operation: "set",
      key: projectKey(updated.id),
      failure: { name: "QuotaExceededError" },
    };

    expect(await repository.save(updated)).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_QUOTA_EXCEEDED",
        details: { kind: "quota_exceeded" },
      },
    });
    expect(storage.values.has(stagingKey(updated.id))).toBe(true);

    const recovered = await repositoryFor(storage).loadMostRecent();
    expect(recovered).toMatchObject({
      ok: true,
      value: {
        id: updated.id,
        title: updated.title,
      },
    });

    const envelope = storedJson<ProjectEnvelopeV1>(
      storage,
      projectKey(updated.id),
    );
    const index = storedJson<ProjectIndexV1>(
      storage,
      LOCAL_STORAGE_KEYS.index,
    );
    const recent = storedJson<RecentProjectPointerV1>(
      storage,
      LOCAL_STORAGE_KEYS.recent,
    );

    expect(envelope.payload.title).toBe(updated.title);
    expect(index.entries[0]?.title).toBe(updated.title);
    expect(recent.projectId).toBe(updated.id);
    expect(storage.values.has(stagingKey(updated.id))).toBe(false);
  });

  it("expone observabilidad local segura y conserva la fuente corrupta", async () => {
    const storage = new IntegratedPersistenceStorage();
    const repository = repositoryFor(storage);
    const source = clone(completedProject);

    expect(await repository.save(source)).toMatchObject({ ok: true });

    const key = projectKey(source.id);
    const envelope = storedJson<ProjectEnvelopeV1>(storage, key);
    const sensitiveMarker = "MARCADOR_PRIVADO_H08_3_4";
    storage.values.set(
      key,
      JSON.stringify({
        ...envelope,
        payload: {
          ...envelope.payload,
          title: sensitiveMarker,
        },
      }),
    );

    const first = await repository.loadMostRecent();
    expect(first).toMatchObject({
      ok: false,
      error: {
        code: "PERSISTENCE_DATA_CORRUPTED",
        details: {
          kind: "integrity_mismatch",
          sourceKey: key,
          quarantineRecorded: true,
        },
      },
    });

    expect(storage.values.get(key)).toContain(sensitiveMarker);

    const quarantine = storedJson<StorageQuarantineV1>(
      storage,
      LOCAL_STORAGE_KEYS.quarantine,
    );
    expect(quarantine.entries).toHaveLength(2);
    expect(quarantine.entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sourceKey:
            `${LOCAL_STORAGE_KEYS.index}#${source.id as string}`,
          classification: "orphan_index_entry",
          action: "preserve_source",
          reviewState: "pending_human_review",
        }),
        expect.objectContaining({
          sourceKey: key,
          classification: "integrity_mismatch",
          action: "preserve_source",
          reviewState: "pending_human_review",
        }),
      ]),
    );

    const serializedQuarantine = JSON.stringify(quarantine);
    expect(serializedQuarantine).not.toContain(sensitiveMarker);
    expect(serializedQuarantine).not.toContain(
      source.profile.pseudonym,
    );
    expect(serializedQuarantine).not.toContain('"payload"');

    const second = await repositoryFor(storage).loadMostRecent();
    expect(second).toMatchObject({
      ok: false,
      error: {
        details: { kind: "integrity_mismatch" },
      },
    });
    expect(
      storedJson<StorageQuarantineV1>(
        storage,
        LOCAL_STORAGE_KEYS.quarantine,
      ).entries,
    ).toHaveLength(2);
  });
});

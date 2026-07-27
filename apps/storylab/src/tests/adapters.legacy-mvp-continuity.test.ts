import { describe, expect, it } from "vitest";
import {
  inspectLegacyMvpContinuity,
  LEGACY_MVP_STORAGE_KEYS,
} from "../adapters/storage/legacy-mvp-continuity";
import { LocalStorageProjectRepository } from "../adapters/storage/local-storage-project-repository";

class MemoryStorage {
  readonly values = new Map<string, string>();
  get length(): number { return this.values.size; }
  key(index: number): string | null { return Array.from(this.values.keys()).sort()[index] ?? null; }
  getItem(key: string): string | null { return this.values.get(key) ?? null; }
  setItem(key: string, value: string): void { this.values.set(key, value); }
  removeItem(key: string): void { this.values.delete(key); }
}

describe("legacy MVP continuity", () => {
  it("detecta las claves históricas sin escribir ni borrar", () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_MVP_STORAGE_KEYS.progress, '{"mission":1}');
    storage.setItem(LEGACY_MVP_STORAGE_KEYS.group, '{"members":[]}');
    const before = new Map(storage.values);
    const summary = inspectLegacyMvpContinuity(storage);
    expect(summary.hasLegacyData).toBe(true);
    expect(summary.invalidJsonKeys).toEqual([]);
    expect(storage.values).toEqual(before);
  });

  it("clasifica JSON inválido sin eliminarlo", () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_MVP_STORAGE_KEYS.progress, "{");
    const summary = inspectLegacyMvpContinuity(storage);
    expect(summary.invalidJsonKeys).toEqual([LEGACY_MVP_STORAGE_KEYS.progress]);
    expect(storage.getItem(LEGACY_MVP_STORAGE_KEYS.progress)).toBe("{");
  });

  it("clearMostRecent de v1 no toca el namespace del MVP", async () => {
    const storage = new MemoryStorage();
    storage.setItem(LEGACY_MVP_STORAGE_KEYS.progress, '{"mission":1}');
    storage.setItem(LEGACY_MVP_STORAGE_KEYS.group, '{"members":[]}');
    const repository = new LocalStorageProjectRepository(storage);
    const result = await repository.clearMostRecent();
    expect(result.ok).toBe(true);
    expect(storage.getItem(LEGACY_MVP_STORAGE_KEYS.progress)).toBe('{"mission":1}');
    expect(storage.getItem(LEGACY_MVP_STORAGE_KEYS.group)).toBe('{"members":[]}');
  });
});


import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import type { CreativeProject } from "../domain/model";
import {
  canonicalStringify,
} from "../schemas/storage-integrity";
import {
  STORAGE_FORMATS,
  STORAGE_FORMAT_VERSION,
  validateProjectEnvelopeV1,
  validateProjectIndexV1,
  validateRecentProjectPointerV1,
} from "../schemas/storage-runtime-validators";
import { loadJson } from "./helpers";

const minimal = loadJson<CreativeProject>(
  "../fixtures/valid/minimal-project.json",
);

const nodeIntegrity = async (value: string): Promise<string> =>
  createHash("sha256").update(value).digest("hex");

describe("storage contracts H08-3.2", () => {
  it("produce serialización canónica determinista", () => {
    expect(
      canonicalStringify({
        zebra: 2,
        alpha: {
          delta: true,
          beta: ["x", "y"],
        },
      }),
    ).toBe('{"alpha":{"beta":["x","y"],"delta":true},"zebra":2}');
  });

  it("valida un envelope con integridad SHA-256", async () => {
    const digest = await nodeIntegrity(canonicalStringify(minimal));
    const result = await validateProjectEnvelopeV1(
      {
        storageFormat: STORAGE_FORMATS.project,
        storageFormatVersion: STORAGE_FORMAT_VERSION,
        projectSchemaVersion: minimal.schemaVersion,
        projectId: minimal.id,
        writtenAt: "2026-07-18T07:00:00.000Z",
        payload: minimal,
        integrity: {
          algorithm: "SHA-256",
          value: digest,
        },
      },
      nodeIntegrity,
    );
    expect(result).toMatchObject({ ok: true });
  });

  it("rechaza un digest que no corresponde al payload", async () => {
    const result = await validateProjectEnvelopeV1(
      {
        storageFormat: STORAGE_FORMATS.project,
        storageFormatVersion: STORAGE_FORMAT_VERSION,
        projectSchemaVersion: minimal.schemaVersion,
        projectId: minimal.id,
        writtenAt: "2026-07-18T07:00:00.000Z",
        payload: minimal,
        integrity: {
          algorithm: "SHA-256",
          value: "0".repeat(64),
        },
      },
      nodeIntegrity,
    );
    expect(result).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("mantiene el índice libre de recent y contenido privado", () => {
    const result = validateProjectIndexV1({
      storageFormat: STORAGE_FORMATS.index,
      storageFormatVersion: STORAGE_FORMAT_VERSION,
      updatedAt: "2026-07-18T07:00:00.000Z",
      entries: [
        {
          projectId: minimal.id,
          title: minimal.title,
          projectSchemaVersion: minimal.schemaVersion,
          updatedAt: minimal.updatedAt,
          writeState: "committed",
        },
      ],
    });

    expect(result).toMatchObject({ ok: true });
    expect(JSON.stringify(result)).not.toContain("recentProjectId");
    expect(JSON.stringify(result)).not.toContain(
      minimal.profile.pseudonym,
    );
  });

  it("rechaza campos privados añadidos al índice", () => {
    expect(
      validateProjectIndexV1({
        storageFormat: STORAGE_FORMATS.index,
        storageFormatVersion: STORAGE_FORMAT_VERSION,
        updatedAt: "2026-07-18T07:00:00.000Z",
        entries: [],
        reflections: minimal.reflections,
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "PERSISTENCE_DATA_CORRUPTED" },
    });
  });

  it("valida el puntero reciente como contrato independiente", () => {
    expect(
      validateRecentProjectPointerV1({
        storageFormat: STORAGE_FORMATS.recent,
        storageFormatVersion: STORAGE_FORMAT_VERSION,
        projectId: minimal.id,
        updatedAt: "2026-07-18T07:00:00.000Z",
      }),
    ).toMatchObject({ ok: true });
  });
});

import { describe, expect, it, vi } from "vitest";
import {
  PORTFOLIO_IMPORT_MAX_BYTES,
  analyzeJsonStructure,
  preflightUntrustedPortfolioFile,
  sanitizeUntrustedFileName,
} from "../application";
import type { UntrustedLocalFile } from "../ports";

const encoder = new TextEncoder();

const fileFromBytes = (
  bytes: Uint8Array,
  options: {
    readonly name?: string;
    readonly declaredSize?: number;
    readonly readBytes?: () => Promise<Uint8Array>;
  } = {},
): UntrustedLocalFile => ({
  name:
    options.name ??
    "synthetic.storylab.json",
  size:
    options.declaredSize ??
    bytes.byteLength,
  mediaType: "application/json",
  readBytes:
    options.readBytes ??
    (async () => bytes),
});

describe("H08-5.3 untrusted file preflight", () => {
  it("rechaza por tamaño declarado antes de leer", async () => {
    const readBytes = vi.fn(async () => new Uint8Array());

    const result = await preflightUntrustedPortfolioFile(
      fileFromBytes(new Uint8Array(), {
        declaredSize:
          PORTFOLIO_IMPORT_MAX_BYTES + 1,
        readBytes,
      }),
    );

    expect(result).toMatchObject({
      ok: false,
      error: { code: "IMPORT_FILE_TOO_LARGE" },
    });
    expect(readBytes).not.toHaveBeenCalled();
  });

  it("rechaza bytes reales excesivos aunque el tamaño declarado mienta", async () => {
    const bytes = new Uint8Array(
      PORTFOLIO_IMPORT_MAX_BYTES + 1,
    );

    expect(
      await preflightUntrustedPortfolioFile(
        fileFromBytes(bytes, {
          declaredSize: 1,
        }),
      ),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_FILE_TOO_LARGE" },
    });
  });

  it("rechaza UTF-8 inválido y JSON malformado", async () => {
    expect(
      await preflightUntrustedPortfolioFile(
        fileFromBytes(
          new Uint8Array([0xff, 0xfe]),
        ),
      ),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_JSON_MALFORMED" },
    });

    expect(
      await preflightUntrustedPortfolioFile(
        fileFromBytes(
          encoder.encode('{"packageType":'),
        ),
      ),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_JSON_MALFORMED" },
    });
  });

  it("exige un objeto JSON en el nivel superior", async () => {
    expect(
      await preflightUntrustedPortfolioFile(
        fileFromBytes(encoder.encode("[]")),
      ),
    ).toMatchObject({
      ok: false,
      error: { code: "IMPORT_PACKAGE_INVALID" },
    });
  });

  it("limita profundidad y cantidad de nodos", () => {
    let nested: unknown = { leaf: true };
    for (let index = 0; index < 33; index += 1) {
      nested = { nested };
    }

    expect(analyzeJsonStructure(nested)).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_STRUCTURE_TOO_COMPLEX",
      },
    });

    expect(
      analyzeJsonStructure({
        values: Array.from(
          { length: 20_001 },
          () => null,
        ),
      }),
    ).toMatchObject({
      ok: false,
      error: {
        code: "IMPORT_STRUCTURE_TOO_COMPLEX",
      },
    });
  });

  it("sanea el nombre sin revelar rutas ni controles", () => {
    expect(
      sanitizeUntrustedFileName(
        "/Users/persona/Downloads/\u0000proyecto.storylab.json",
      ),
    ).toBe("proyecto.storylab.json");
  });
});

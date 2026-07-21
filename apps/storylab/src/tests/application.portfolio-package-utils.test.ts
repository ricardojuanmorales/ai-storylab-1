import { describe, expect, it } from "vitest";
import {
  canonicalizeJson,
  createPortfolioFileName,
} from "../application";
import type { ISODateTime } from "../domain/types";

describe("storylab-canonical-json-v1", () => {
  it("ordena claves y preserva el orden de arrays", () => {
    const first = canonicalizeJson({
      zebra: 2,
      alpha: {
        right: 2,
        left: 1,
      },
      list: ["b", "a"],
    });
    const second = canonicalizeJson({
      list: ["b", "a"],
      alpha: {
        left: 1,
        right: 2,
      },
      zebra: 2,
    });

    expect(first).toEqual(second);
    expect(first).toEqual({
      ok: true,
      value:
        '{"alpha":{"left":1,"right":2},"list":["b","a"],"zebra":2}',
    });
  });

  it("rechaza ciclos y valores no JSON", () => {
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;

    expect(canonicalizeJson(cyclic)).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
    expect(
      canonicalizeJson({ invalid: undefined }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
  });

  it("crea nombres locales seguros sin incluir el seudónimo", () => {
    expect(
      createPortfolioFileName(
        "  Árbol / Luna: ¿Verde?  ",
        "2026-07-21T21:15:00.123Z" as ISODateTime,
      ),
    ).toBe(
      "ai-storylab-arbol-luna-verde-20260721T211500Z.storylab.json",
    );
  });
});

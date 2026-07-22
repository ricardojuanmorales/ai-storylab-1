import { webcrypto } from "node:crypto";
import { describe, expect, it } from "vitest";
import { createWebCryptoSha256Hasher } from "../adapters/crypto/web-crypto-sha256";

describe("Web Crypto SHA-256 adapter", () => {
  it("produce un digest hexadecimal interoperable", async () => {
    const hasher = createWebCryptoSha256Hasher(
      webcrypto as unknown as Crypto,
    );

    expect(await hasher.digestHex("abc")).toEqual({
      ok: true,
      value:
        "ba7816bf8f01cfea414140de5dae2223" +
        "b00361a396177a9cb410ff61f20015ad",
    });
  });

  it("devuelve error tipado cuando Web Crypto falla", async () => {
    const hasher = createWebCryptoSha256Hasher({
      subtle: {
        digest: async () => {
          throw new Error("synthetic failure");
        },
      } as unknown as SubtleCrypto,
    });

    expect(await hasher.digestHex("abc")).toMatchObject({
      ok: false,
      error: { code: "EXPORT_INTEGRITY_UNAVAILABLE" },
    });
  });
});

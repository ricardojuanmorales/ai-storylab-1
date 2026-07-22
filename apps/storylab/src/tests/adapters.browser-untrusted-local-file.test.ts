import { describe, expect, it, vi } from "vitest";
import { createBrowserUntrustedLocalFile } from "../adapters/browser/browser-untrusted-local-file";

describe("browser untrusted local file adapter", () => {
  it("exposes metadata before reading bytes", async () => {
    const bytes = new TextEncoder().encode(
      '{"synthetic":true}',
    );
    const arrayBuffer = vi.fn(
      async (): Promise<ArrayBuffer> => {
        const copy = new Uint8Array(bytes);
        return copy.buffer as ArrayBuffer;
      },
    );
    const file = createBrowserUntrustedLocalFile({
      name: "synthetic.storylab.json",
      size: bytes.byteLength,
      type: "application/json",
      arrayBuffer,
    });

    expect(file).toMatchObject({
      name: "synthetic.storylab.json",
      size: bytes.byteLength,
      mediaType: "application/json",
    });
    expect(arrayBuffer).not.toHaveBeenCalled();

    expect(await file.readBytes()).toEqual(bytes);
    expect(arrayBuffer).toHaveBeenCalledTimes(1);
  });

  it("propagates read failure for safe application mapping", async () => {
    const file = createBrowserUntrustedLocalFile({
      name: "synthetic.storylab.json",
      size: 8,
      type: "application/json",
      arrayBuffer: async () => {
        throw new Error("synthetic read failure");
      },
    });

    await expect(file.readBytes()).rejects.toThrow(
      "synthetic read failure",
    );
  });
});

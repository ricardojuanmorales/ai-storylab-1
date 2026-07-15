
import { describe, expect, it } from "vitest";

describe("offline guard", () => {
  it("bloquea fetch en el runner", async () => {
    await expect(
      fetch("https://example.invalid"),
    ).rejects.toThrow("NETWORK_ACCESS_BLOCKED");
  });
});

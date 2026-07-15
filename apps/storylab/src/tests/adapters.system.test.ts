import { describe, expect, it } from "vitest";
import { RandomUuidGenerator, SystemClock } from "../adapters";

describe("system adapters", () => {
  it("produce una fecha ISO válida", () => {
    const value = new SystemClock().now();
    expect(Number.isFinite(Date.parse(value))).toBe(true);
    expect(value.endsWith("Z")).toBe(true);
  });

  it("produce identificadores opacos con namespace", () => {
    const value = new RandomUuidGenerator().next("project");
    expect(value).toMatch(/^project:[0-9a-f-]{36}$/);
    expect(value).not.toContain("@");
  });
});

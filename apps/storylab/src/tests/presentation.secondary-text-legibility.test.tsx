import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const styles = readFileSync(
  new URL("../presentation/styles.css", import.meta.url),
  "utf8",
);

describe("secondary text legibility", () => {
  it("uses the shared readable scale for compact secondary text", () => {
    expect(styles).toContain("--secondary-text-size: 0.875em;");

    const uses =
      styles.match(/font-size:\s*var\(--secondary-text-size\);/g) ?? [];

    expect(uses).toHaveLength(8);
    expect(styles).not.toMatch(/font-size:\s*0\.(?:78|8|82)em;/);
  });
});

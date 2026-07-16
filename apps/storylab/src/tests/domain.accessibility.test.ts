import { describe, expect, it } from "vitest";
import { parseAccessibilityPreferences } from "../domain/accessibility";

describe("accessibility preferences contract", () => {
  it("acepta preferencias válidas", () => {
    expect(
      parseAccessibilityPreferences({
        reducedMotion: true,
        highContrast: false,
        textScale: "large",
      }),
    ).toMatchObject({
      ok: true,
      value: { textScale: "large" },
    });
  });

  it("rechaza un valor que no sea objeto", () => {
    expect(parseAccessibilityPreferences(null)).toMatchObject({
      ok: false,
      error: { code: "ACCESSIBILITY_PREFERENCES_INVALID" },
    });
  });

  it("rechaza campos ausentes", () => {
    expect(
      parseAccessibilityPreferences({
        reducedMotion: true,
        textScale: "large",
      }),
    ).toMatchObject({
      ok: false,
      error: { details: { reason: "UNEXPECTED_FIELDS" } },
    });
  });

  it("rechaza indicadores que no sean booleanos", () => {
    expect(
      parseAccessibilityPreferences({
        reducedMotion: "yes",
        highContrast: false,
        textScale: "large",
      }),
    ).toMatchObject({
      ok: false,
      error: { details: { reason: "BOOLEAN_REQUIRED" } },
    });
  });

  it("rechaza una escala no autorizada", () => {
    expect(
      parseAccessibilityPreferences({
        reducedMotion: true,
        highContrast: false,
        textScale: "giant",
      }),
    ).toMatchObject({
      ok: false,
      error: { details: { reason: "TEXT_SCALE_INVALID" } },
    });
  });

  it("rechaza campos inesperados de identidad", () => {
    expect(
      parseAccessibilityPreferences({
        reducedMotion: true,
        highContrast: false,
        textScale: "large",
        studentId: "synthetic",
      }),
    ).toMatchObject({
      ok: false,
      error: { details: { reason: "UNEXPECTED_FIELDS" } },
    });
  });
});

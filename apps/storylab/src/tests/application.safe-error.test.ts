import { describe, expect, it } from "vitest";
import {
  toSafeDomainError,
  unexpectedErrorEnvelope,
} from "../application";

describe("safe error envelope", () => {
  it("expone únicamente campos aprobados", () => {
    const result = toSafeDomainError({
      code: "PROJECT_NOT_FOUND",
      path: "internal.projectId",
      safeMessage: "No se encontró el proyecto solicitado.",
      details: { raw: "sensitive" },
    });

    expect(result).toEqual({
      code: "PROJECT_NOT_FOUND",
      message: "No se encontró el proyecto solicitado.",
    });
    expect(result).not.toHaveProperty("path");
    expect(result).not.toHaveProperty("details");
  });

  it("no filtra mensajes de excepciones inesperadas", () => {
    const thrown = new Error("token=do-not-leak");
    void thrown;

    expect(unexpectedErrorEnvelope()).toEqual({
      code: "UNEXPECTED_ERROR",
      message: "Ocurrió un error inesperado.",
    });
  });

  it("devuelve envolturas inmutables", () => {
    expect(
      Object.isFrozen(
        toSafeDomainError({
          code: "PROJECT_NOT_FOUND",
          path: "projectId",
          safeMessage: "No se encontró el proyecto solicitado.",
        }),
      ),
    ).toBe(true);
  });
});

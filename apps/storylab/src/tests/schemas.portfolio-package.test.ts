import { describe, expect, it } from "vitest";
import type { ExportPackage } from "../domain/model";
import {
  PORTFOLIO_PACKAGE_CANONICALIZATION,
  PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
  PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
  PORTFOLIO_PACKAGE_TYPE,
  PORTFOLIO_PACKAGE_VERSION,
  type PortfolioPackageV1,
} from "../domain/portfolio-package";
import type { ISODateTime } from "../domain/types";
import { validatePortfolioPackageSnapshot } from "../schemas/portfolio-package-validator";
import { clone, loadJson } from "./helpers";

const fixture = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);

const validPackage = (): PortfolioPackageV1 => ({
  packageType: PORTFOLIO_PACKAGE_TYPE,
  packageVersion: PORTFOLIO_PACKAGE_VERSION,
  exportedAt:
    "2026-07-21T21:15:00Z" as ISODateTime,
  payload: {
    projectSchemaVersion:
      fixture.project.schemaVersion,
    project: clone(fixture.project),
  },
  integrity: {
    algorithm:
      PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
    canonicalization:
      PORTFOLIO_PACKAGE_CANONICALIZATION,
    scope: PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
    digest: "a".repeat(64),
  },
});

describe("portfolio package v1 schema", () => {
  it("acepta un paquete alpha.2 estricto", () => {
    expect(
      validatePortfolioPackageSnapshot(validPackage()),
    ).toMatchObject({ ok: true });
  });

  it("rechaza campos inesperados", () => {
    const candidate = {
      ...validPackage(),
      automaticPublication: true,
    };

    expect(
      validatePortfolioPackageSnapshot(candidate),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
  });

  it("rechaza reflexiones privadas aunque no estén seleccionadas", () => {
    const candidate = validPackage();
    const reflection =
      candidate.payload.project.reflections[0];
    if (reflection === undefined) {
      throw new Error("SYNTHETIC_REFLECTION_MISSING");
    }

    const privateCandidate = {
      ...candidate,
      payload: {
        ...candidate.payload,
        project: {
          ...candidate.payload.project,
          reflections: [
            ...candidate.payload.project.reflections,
            {
              ...reflection,
              id: "reflection-private-schema" as typeof reflection.id,
              privacyClass: "private" as const,
              selectedForExport: false,
            },
          ],
        },
      },
    };

    expect(
      validatePortfolioPackageSnapshot(privateCandidate),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
  });

  it("rechaza desacuerdo entre versiones declaradas", () => {
    const candidate = validPackage();

    expect(
      validatePortfolioPackageSnapshot({
        ...candidate,
        payload: {
          ...candidate.payload,
          projectSchemaVersion:
            "0.8.0-alpha.1",
        },
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PACKAGE_INVALID" },
    });
  });
});

import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  HUMAN_EXPORT_CONFIRMATION,
  canonicalizeJson,
  createDownloadablePortfolioFile,
  createPortfolioExportService,
} from "../application";
import type { CreativeProject, ExportPackage } from "../domain/model";
import {
  PORTFOLIO_PACKAGE_CANONICALIZATION,
  PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
  PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
  PORTFOLIO_PACKAGE_TYPE,
  PORTFOLIO_PACKAGE_VERSION,
  type PortfolioPackageV1,
} from "../domain/portfolio-package";
import { ok } from "../domain/result";
import type {
  ISODateTime,
  ProjectId,
} from "../domain/types";
import type {
  DownloadableFile,
  LocalFileDownloader,
  ProjectRepository,
  Sha256Hasher,
} from "../ports";
import { clone, loadJson } from "./helpers";

const fixture = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);

const withProtectedReflections = (): CreativeProject => {
  const project = clone(fixture.project);
  const reflection = project.reflections[0];
  if (reflection === undefined) {
    throw new Error("SYNTHETIC_REFLECTION_MISSING");
  }

  return {
    ...project,
    reflections: [
      reflection,
      {
        ...reflection,
        id: "reflection-private-h08-5-2" as typeof reflection.id,
        privacyClass: "private",
        selectedForExport: false,
        text: "Permanece en el dispositivo.",
      },
      {
        ...reflection,
        id: "reflection-high-care-h08-5-2" as typeof reflection.id,
        privacyClass: "high_care",
        selectedForExport: true,
        text: "Contenido de cuidado alto.",
      },
    ],
  };
};

const createRepository = (
  project: CreativeProject,
): ProjectRepository => ({
  load: async (projectId) =>
    ok(
      projectId === project.id
        ? clone(project)
        : null,
    ),
  save: async () => ok(undefined),
  remove: async () => ok(undefined),
});

const hasher: Sha256Hasher = {
  digestHex: async (value) =>
    ok(
      createHash("sha256")
        .update(value, "utf8")
        .digest("hex"),
    ),
};

const clock = {
  now: () =>
    "2026-07-21T21:15:00Z" as ISODateTime,
};

const createContext = (
  project = withProtectedReflections(),
) => {
  const files: DownloadableFile[] = [];
  const downloader: LocalFileDownloader = {
    download: async (file) => {
      files.push(clone(file));
      return ok(undefined);
    },
  };
  const service = createPortfolioExportService({
    repository: createRepository(project),
    clock,
    hasher,
    downloader,
  });
  return { service, files, project };
};

describe("H08-5.2 human-confirmed portfolio export", () => {
  it("prepara una vista previa sin iniciar descarga", async () => {
    const { service, files, project } = createContext();

    const result = await service.prepare({
      projectId: project.id,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(files).toEqual([]);
    expect(result.value).toMatchObject({
      packageType: PORTFOLIO_PACKAGE_TYPE,
      packageVersion: PORTFOLIO_PACKAGE_VERSION,
      projectTitle: project.title,
      portfolioItemCount: 1,
      reflectionCount: 1,
    });
    expect(result.value.checksum).toMatch(/^[0-9a-f]{64}$/);
    expect(result.value.fileName).toBe(
      "ai-storylab-cartas-desde-la-luna-verde-20260721T211500Z.storylab.json",
    );
    expect(result.value.byteLength).toBeGreaterThan(0);
  });

  it("bloquea la descarga sin confirmación humana explícita", async () => {
    const { service, files, project } = createContext();
    const prepared = await service.prepare({
      projectId: project.id,
    });
    if (!prepared.ok) throw new Error(prepared.error.code);

    expect(
      await service.confirm({
        previewId: prepared.value.previewId,
        confirmation: "not_confirmed",
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_CONFIRMATION_REQUIRED" },
    });
    expect(files).toEqual([]);
  });

  it("descarga exactamente el artefacto revisado una sola vez", async () => {
    const { service, files, project } = createContext();
    const prepared = await service.prepare({
      projectId: project.id,
    });
    if (!prepared.ok) throw new Error(prepared.error.code);

    const confirmed = await service.confirm({
      previewId: prepared.value.previewId,
      confirmation: HUMAN_EXPORT_CONFIRMATION,
    });

    expect(confirmed.ok).toBe(true);
    expect(files).toHaveLength(1);

    const file = files[0];
    if (file === undefined) throw new Error("FILE_MISSING");
    const packageValue =
      JSON.parse(file.content) as PortfolioPackageV1;
    expect(packageValue).toMatchObject({
      packageType: PORTFOLIO_PACKAGE_TYPE,
      packageVersion: PORTFOLIO_PACKAGE_VERSION,
      integrity: {
        algorithm:
          PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
        canonicalization:
          PORTFOLIO_PACKAGE_CANONICALIZATION,
        scope: PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
      },
    });
    expect(
      packageValue.payload.project.reflections.map(
        (reflection) => reflection.privacyClass,
      ),
    ).toEqual(["exportable_after_review"]);

    const canonicalPayload =
      canonicalizeJson(packageValue.payload);
    expect(canonicalPayload.ok).toBe(true);
    if (!canonicalPayload.ok) return;
    const expectedDigest = createHash("sha256")
      .update(canonicalPayload.value, "utf8")
      .digest("hex");
    expect(packageValue.integrity.digest).toBe(
      expectedDigest,
    );
    expect(prepared.value.checksum).toBe(expectedDigest);

    expect(
      await service.confirm({
        previewId: prepared.value.previewId,
        confirmation: HUMAN_EXPORT_CONFIRMATION,
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PREVIEW_NOT_FOUND" },
    });
    expect(files).toHaveLength(1);
  });

  it("permite descartar una vista previa sin descargar", async () => {
    const { service, files, project } = createContext();
    const prepared = await service.prepare({
      projectId: project.id,
    });
    if (!prepared.ok) throw new Error(prepared.error.code);

    service.discard(prepared.value.previewId);

    expect(
      await service.confirm({
        previewId: prepared.value.previewId,
        confirmation: HUMAN_EXPORT_CONFIRMATION,
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_PREVIEW_NOT_FOUND" },
    });
    expect(files).toEqual([]);
  });

  it("rechaza una exportación superior a 1 MiB", () => {
    const oversized: PortfolioPackageV1 = {
      packageType: PORTFOLIO_PACKAGE_TYPE,
      packageVersion: PORTFOLIO_PACKAGE_VERSION,
      exportedAt: clock.now(),
      payload: {
        projectSchemaVersion:
          fixture.project.schemaVersion,
        project: {
          ...fixture.project,
          profile: {
            ...fixture.project.profile,
            context: "x".repeat(1_100_000),
          },
        },
      },
      integrity: {
        algorithm:
          PORTFOLIO_PACKAGE_INTEGRITY_ALGORITHM,
        canonicalization:
          PORTFOLIO_PACKAGE_CANONICALIZATION,
        scope: PORTFOLIO_PACKAGE_INTEGRITY_SCOPE,
        digest: "0".repeat(64),
      },
    };

    expect(
      createDownloadablePortfolioFile(oversized),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_FILE_TOO_LARGE" },
    });
  });

  it("devuelve proyecto ausente como error tipado", async () => {
    const { service } = createContext();

    expect(
      await service.prepare({
        projectId:
          "project:missing" as ProjectId,
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "PROJECT_NOT_FOUND" },
    });
  });
});

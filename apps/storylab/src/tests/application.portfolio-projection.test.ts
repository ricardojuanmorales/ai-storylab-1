import { describe, expect, it } from "vitest";
import type {
  CreativeProject,
  ExportPackage,
} from "../domain/model";
import { createPortfolioProjection } from "../application/portfolio-projection";
import { clone, loadJson } from "./helpers";

const exportFixture = loadJson<ExportPackage>(
  "../fixtures/valid/export-package.json",
);

const expandedProject = (): CreativeProject => {
  const project = clone(exportFixture.project);
  const firstEvidence = project.evidence[0];
  const firstDecision = project.decisions[0];
  const firstItem = project.portfolio.items[0];
  const firstReflection = project.reflections[0];

  if (
    !firstEvidence ||
    !firstDecision ||
    !firstItem ||
    !firstReflection
  ) {
    throw new Error("SYNTHETIC_FIXTURE_INCOMPLETE");
  }

  const secondEvidence = {
    ...firstEvidence,
    id: "evidence-synthetic-002" as typeof firstEvidence.id,
    title: "Mapa de resonancias",
    summary: "Un mapa ordena los ecos de la historia.",
  };
  const secondDecision = {
    ...firstDecision,
    id: "decision-synthetic-002" as typeof firstDecision.id,
    evidenceId: secondEvidence.id,
    rationale: "Hace visible la arquitectura elegida.",
  };
  const secondItem = {
    ...firstItem,
    id: "portfolio-item-synthetic-002" as typeof firstItem.id,
    evidenceId: secondEvidence.id,
    title: secondEvidence.title,
    order: 0,
  };
  const privateReflection = {
    ...firstReflection,
    id: "reflection-private-002" as typeof firstReflection.id,
    text: "Esta reflexión permanece solamente en el dispositivo.",
    privacyClass: "private" as const,
    selectedForExport: false,
  };
  const highCareReflection = {
    ...firstReflection,
    id: "reflection-high-care-003" as typeof firstReflection.id,
    text: "Contenido de cuidado alto que nunca cruza la frontera.",
    privacyClass: "high_care" as const,
    selectedForExport: true,
  };
  const unselectedShareableReflection = {
    ...firstReflection,
    id: "reflection-unselected-004" as typeof firstReflection.id,
    text: "Podría compartirse, pero la persona no la seleccionó.",
    privacyClass: "shareable_with_purpose" as const,
    selectedForExport: false,
  };

  return {
    ...project,
    evidence: [firstEvidence, secondEvidence],
    decisions: [firstDecision, secondDecision],
    reflections: [
      firstReflection,
      privateReflection,
      highCareReflection,
      unselectedShareableReflection,
    ],
    portfolio: {
      items: [
        { ...firstItem, order: 1 },
        secondItem,
      ],
    },
  };
};

describe("H08-5.1 canonical portfolio projection", () => {
  it("ordena el portafolio por orden humano y desempata por id", () => {
    const project = expandedProject();
    const original = clone(project);

    const result = createPortfolioProjection(project);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      result.value.portfolio.items.map((item) => item.id),
    ).toEqual([
      "portfolio-item-synthetic-002",
      "portfolio-item-synthetic-001",
    ]);
    expect(project).toEqual(original);
  });

  it("aplica una allowlist de privacidad y selección explícita", () => {
    const project = expandedProject();

    const result = createPortfolioProjection(project);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.reflections).toHaveLength(1);
    expect(result.value.reflections[0]?.id).toBe(
      "reflection-synthetic-001",
    );
    expect(
      result.value.reflections.some(
        (reflection) =>
          reflection.privacyClass === "private" ||
          reflection.privacyClass === "high_care",
      ),
    ).toBe(false);
  });

  it("preserva contenido creativo, decisiones y metadata interna", () => {
    const project = expandedProject();

    const result = createPortfolioProjection(project);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.evidence).toEqual(project.evidence);
    expect(result.value.decisions).toEqual(project.decisions);
    expect(result.value.profile).toEqual(project.profile);
    expect(result.value.featureFlags).toEqual(project.featureFlags);
    expect(result.value.updatedAt).toBe(project.updatedAt);
  });

  it("produce una copia estructural sin efectos laterales", () => {
    const project = expandedProject();

    const result = createPortfolioProjection(project);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value).not.toBe(project);
    expect(result.value.profile).not.toBe(project.profile);
    expect(result.value.portfolio).not.toBe(project.portfolio);
    expect(result.value.portfolio.items[0]).not.toBe(
      project.portfolio.items[1],
    );
  });

  it("rechaza una proyección sin selección de portafolio", () => {
    const project: CreativeProject = {
      ...expandedProject(),
      portfolio: { items: [] },
    };

    expect(createPortfolioProjection(project)).toMatchObject({
      ok: false,
      error: {
        code: "EXPORT_SELECTION_REQUIRED",
        path: "portfolio.items",
      },
    });
  });
});

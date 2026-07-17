import type { DomainError } from "../domain/errors";
import { validateProjectInvariants } from "../domain/invariants";
import type {
  CreativeProject,
  ExportPackage,
  Reflection,
} from "../domain/model";
import { err, type Result } from "../domain/result";
import type { ProjectRepository, Clock } from "../ports";
import { validateExportPackageSnapshot } from "../schemas/runtime-validators";
import type {
  ExportPreviewResult,
  PreviewExportInput,
} from "./creative-cycle-contracts";

export interface PreviewExportDependencies {
  readonly repository: ProjectRepository;
  readonly clock: Clock;
}

const reflectionCanLeaveDevice = (
  reflection: Reflection,
): boolean =>
  reflection.selectedForExport &&
  (reflection.privacyClass === "shareable_with_purpose" ||
    reflection.privacyClass === "exportable_after_review");

const loadProject = async (
  input: PreviewExportInput,
  repository: ProjectRepository,
): Promise<Result<CreativeProject, DomainError>> => {
  const loaded = await repository.load(input.projectId);
  if (!loaded.ok) return loaded;
  if (!loaded.value) {
    return err({
      code: "PROJECT_NOT_FOUND",
      path: "projectId",
      safeMessage: "No se encontró el proyecto local.",
    });
  }
  return { ok: true, value: loaded.value };
};

export const previewExport = async (
  input: PreviewExportInput,
  dependencies: PreviewExportDependencies,
): Promise<ExportPreviewResult> => {
  const loaded = await loadProject(input, dependencies.repository);
  if (!loaded.ok) return loaded;

  const project = loaded.value;
  if (project.portfolio.items.length === 0) {
    return err({
      code: "EXPORT_SELECTION_REQUIRED",
      path: "portfolio.items",
      safeMessage:
        "Incorpore al menos una evidencia al portafolio antes de previsualizar.",
    });
  }

  const exportProject: CreativeProject = {
    ...structuredClone(project),
    reflections: project.reflections
      .filter(reflectionCanLeaveDevice)
      .map((reflection) => structuredClone(reflection)),
  };

  const [firstInvariant] = validateProjectInvariants(exportProject);
  if (firstInvariant) return err(firstInvariant);

  const packageValue: ExportPackage = {
    exportType: "storylab_project",
    schemaVersion: exportProject.schemaVersion,
    exportedAt: dependencies.clock.now(),
    project: exportProject,
  };

  return validateExportPackageSnapshot(packageValue);
};

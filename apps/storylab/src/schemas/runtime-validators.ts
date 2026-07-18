import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import type { DomainError } from "../domain/errors";
import { validateProjectInvariants } from "../domain/invariants";
import type {
  CreativeProject,
  ExportPackage,
} from "../domain/model";
import { err, ok, type Result } from "../domain/result";
import exportPackageSchema from "./export-package.schema.json";
import projectSchema from "./project.schema.json";

type JsonSchema = Record<string, unknown>;

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  validateFormats: true,
});
addFormats(ajv);

const projectSchemaValue = projectSchema as unknown as JsonSchema;
const exportSchemaValue = exportPackageSchema as unknown as JsonSchema;

ajv.addSchema(projectSchemaValue);

const validateProjectSchema = ajv.getSchema(
  String(projectSchemaValue.$id),
);
if (!validateProjectSchema) {
  throw new Error("PROJECT_SCHEMA_NOT_REGISTERED");
}

const validateExportSchema = ajv.compile(exportSchemaValue);

const validationError = (
  code: Extract<
    DomainError["code"],
    "PERSISTENCE_DATA_CORRUPTED" | "EXPORT_PACKAGE_INVALID"
  >,
  path: string,
  safeMessage: string,
  errorCount: number,
): DomainError => ({
  code,
  path,
  safeMessage,
  details: { errorCount },
});

export const validateProjectSnapshot = (
  input: unknown,
): Result<CreativeProject, DomainError> => {
  if (!validateProjectSchema(input)) {
    return err(
      validationError(
        "PERSISTENCE_DATA_CORRUPTED",
        "storage.project",
        "El proyecto local no supera la validación de formato.",
        validateProjectSchema.errors?.length ?? 0,
      ),
    );
  }

  const project = structuredClone(input) as CreativeProject;
  const invariantErrors = validateProjectInvariants(project);
  if (invariantErrors.length > 0) {
    return err({
      code: "PERSISTENCE_DATA_CORRUPTED",
      path: "storage.project",
      safeMessage: "El proyecto local contiene relaciones inconsistentes.",
      details: {
        errorCount: invariantErrors.length,
        firstInvariant: invariantErrors[0]?.code ?? "UNKNOWN",
      },
    });
  }

  return ok(project);
};

export const validateExportPackageSnapshot = (
  input: unknown,
): Result<ExportPackage, DomainError> => {
  if (!validateExportSchema(input)) {
    return err(
      validationError(
        "EXPORT_PACKAGE_INVALID",
        "exportPackage",
        "La vista previa de exportación no supera la validación.",
        validateExportSchema.errors?.length ?? 0,
      ),
    );
  }

  const packageValue = structuredClone(input) as ExportPackage;
  const projectResult = validateProjectSnapshot(packageValue.project);
  if (!projectResult.ok) {
    return err({
      code: "EXPORT_PACKAGE_INVALID",
      path: "exportPackage.project",
      safeMessage: "El proyecto de exportación contiene datos inconsistentes.",
      details: { sourceCode: projectResult.error.code },
    });
  }

  return ok(packageValue);
};

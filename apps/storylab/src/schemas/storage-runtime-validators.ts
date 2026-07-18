
import type { ValidateFunction } from "ajv";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import type { DomainError } from "../domain/errors";
import {
  CURRENT_SCHEMA_VERSION,
  type CreativeProject,
} from "../domain/model";
import { err, ok, type Result } from "../domain/result";
import type { ISODateTime, ProjectId } from "../domain/types";
import projectSchema from "./project.schema.json";
import storageEnvelopeSchema from "./storage-envelope.schema.json";
import storageIndexSchema from "./storage-index.schema.json";
import { canonicalStringify } from "./storage-integrity";
import storageRecentSchema from "./storage-recent.schema.json";
import storageStagingSchema from "./storage-staging.schema.json";
import { validateProjectSnapshot } from "./runtime-validators";

export const STORAGE_FORMAT_VERSION = 1 as const;

export const STORAGE_FORMATS = Object.freeze({
  project: "ai-storylab-project",
  index: "ai-storylab-project-index",
  recent: "ai-storylab-recent-pointer",
  staging: "ai-storylab-staged-write",
} as const);

export interface ProjectEnvelopeV1 {
  readonly storageFormat: typeof STORAGE_FORMATS.project;
  readonly storageFormatVersion: typeof STORAGE_FORMAT_VERSION;
  readonly projectSchemaVersion: typeof CURRENT_SCHEMA_VERSION;
  readonly projectId: ProjectId;
  readonly writtenAt: ISODateTime;
  readonly payload: CreativeProject;
  readonly integrity: {
    readonly algorithm: "SHA-256";
    readonly value: string;
  };
}

export interface ProjectIndexEntryV1 {
  readonly projectId: ProjectId;
  readonly title: string;
  readonly projectSchemaVersion: typeof CURRENT_SCHEMA_VERSION;
  readonly updatedAt: ISODateTime;
  readonly writeState: "committed";
}

export interface ProjectIndexV1 {
  readonly storageFormat: typeof STORAGE_FORMATS.index;
  readonly storageFormatVersion: typeof STORAGE_FORMAT_VERSION;
  readonly updatedAt: ISODateTime;
  readonly entries: readonly ProjectIndexEntryV1[];
}

export interface RecentProjectPointerV1 {
  readonly storageFormat: typeof STORAGE_FORMATS.recent;
  readonly storageFormatVersion: typeof STORAGE_FORMAT_VERSION;
  readonly projectId: ProjectId;
  readonly updatedAt: ISODateTime;
}

export interface StagedProjectWriteV1 {
  readonly storageFormat: typeof STORAGE_FORMATS.staging;
  readonly storageFormatVersion: typeof STORAGE_FORMAT_VERSION;
  readonly operationId: string;
  readonly startedAt: ISODateTime;
  readonly makeRecent: boolean;
  readonly envelope: ProjectEnvelopeV1;
}

export type IntegrityProvider = (value: string) => Promise<string>;

type JsonSchema = Record<string, unknown>;

const ajv = new Ajv2020({
  allErrors: true,
  strict: true,
  validateFormats: true,
});
addFormats(ajv);

for (const schema of [
  projectSchema,
  storageEnvelopeSchema,
  storageIndexSchema,
  storageRecentSchema,
  storageStagingSchema,
]) {
  ajv.addSchema(schema as unknown as JsonSchema);
}

const validatorFor = (id: string): ValidateFunction => {
  const validator = ajv.getSchema(id);
  if (!validator) {
    throw new Error(`STORAGE_SCHEMA_NOT_REGISTERED:${id}`);
  }
  return validator;
};

const validateEnvelopeShape = validatorFor(
  "https://ai-storylab.local/schemas/storage/project-envelope/v1",
);
const validateIndexShape = validatorFor(
  "https://ai-storylab.local/schemas/storage/project-index/v1",
);
const validateRecentShape = validatorFor(
  "https://ai-storylab.local/schemas/storage/recent-pointer/v1",
);
const validateStagingShape = validatorFor(
  "https://ai-storylab.local/schemas/storage/staged-write/v1",
);

const storageContractError = (
  path: string,
  safeMessage: string,
  details?: Readonly<Record<string, unknown>>,
): DomainError => {
  const base = {
    code: "PERSISTENCE_DATA_CORRUPTED" as const,
    path,
    safeMessage,
  };
  return details === undefined ? base : { ...base, details };
};

const integrityUnavailable = (path: string): DomainError => ({
  code: "PERSISTENCE_UNAVAILABLE",
  path,
  safeMessage:
    "El navegador no puede verificar la integridad del proyecto local.",
});

const validateShape = <Value>(
  input: unknown,
  validator: ValidateFunction,
  path: string,
  safeMessage: string,
): Result<Value, DomainError> => {
  if (!validator(input)) {
    return err(
      storageContractError(path, safeMessage, {
        errorCount: validator.errors?.length ?? 0,
      }),
    );
  }

  return ok(structuredClone(input) as Value);
};

export const validateProjectEnvelopeV1 = async (
  input: unknown,
  integrity: IntegrityProvider,
): Promise<Result<ProjectEnvelopeV1, DomainError>> => {
  const shape = validateShape<ProjectEnvelopeV1>(
    input,
    validateEnvelopeShape,
    "storage.envelope",
    "El envelope local no supera la validación de formato.",
  );
  if (!shape.ok) return err(shape.error);

  const project = validateProjectSnapshot(shape.value.payload);
  if (!project.ok) {
    return err(
      storageContractError(
        "storage.envelope.payload",
        "El envelope contiene un proyecto inválido.",
        { sourceCode: project.error.code },
      ),
    );
  }

  if (
    shape.value.projectId !== project.value.id ||
    shape.value.projectSchemaVersion !== project.value.schemaVersion
  ) {
    return err(
      storageContractError(
        "storage.envelope",
        "El envelope no coincide con la identidad o versión de su proyecto.",
      ),
    );
  }

  let expected: string;
  try {
    expected = await integrity(canonicalStringify(project.value));
  } catch {
    return err(integrityUnavailable("storage.envelope.integrity"));
  }

  if (expected !== shape.value.integrity.value) {
    return err(
      storageContractError(
        "storage.envelope.integrity",
        "La verificación de integridad del proyecto local falló.",
      ),
    );
  }

  return ok({
    ...shape.value,
    payload: project.value,
  });
};

export const validateProjectIndexV1 = (
  input: unknown,
): Result<ProjectIndexV1, DomainError> => {
  const shape = validateShape<ProjectIndexV1>(
    input,
    validateIndexShape,
    "storage.index",
    "El índice local no supera la validación de formato.",
  );
  if (!shape.ok) return err(shape.error);

  const seen = new Set<string>();
  for (const entry of shape.value.entries) {
    const id = entry.projectId as string;
    if (seen.has(id)) {
      return err(
        storageContractError(
          "storage.index.entries",
          "El índice local contiene identificadores duplicados.",
          { projectId: id },
        ),
      );
    }
    seen.add(id);
  }

  return ok(shape.value);
};

export const validateRecentProjectPointerV1 = (
  input: unknown,
): Result<RecentProjectPointerV1, DomainError> =>
  validateShape<RecentProjectPointerV1>(
    input,
    validateRecentShape,
    "storage.recent",
    "El puntero de proyecto reciente no supera la validación.",
  );

export const validateStagedProjectWriteV1 = async (
  input: unknown,
  integrity: IntegrityProvider,
): Promise<Result<StagedProjectWriteV1, DomainError>> => {
  const shape = validateShape<StagedProjectWriteV1>(
    input,
    validateStagingShape,
    "storage.staging",
    "La escritura en staging no supera la validación de formato.",
  );
  if (!shape.ok) return err(shape.error);

  const envelope = await validateProjectEnvelopeV1(
    shape.value.envelope,
    integrity,
  );
  if (!envelope.ok) return err(envelope.error);

  return ok({
    ...shape.value,
    envelope: envelope.value,
  });
};

import type { DomainError } from "../../domain/errors";
import { CURRENT_SCHEMA_VERSION, type CreativeProject } from "../../domain/model";
import { err, ok, type Result } from "../../domain/result";
import type { ProjectId } from "../../domain/types";
import type { RecoverableProjectRepository } from "../../ports";
import { validateProjectSnapshot } from "../../schemas/runtime-validators";

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const LOCAL_STORAGE_KEYS = Object.freeze({
  latest: `ai-storylab:${CURRENT_SCHEMA_VERSION}:latest-project`,
  projectPrefix: `ai-storylab:${CURRENT_SCHEMA_VERSION}:project:`,
});

const projectKey = (projectId: ProjectId): string =>
  `${LOCAL_STORAGE_KEYS.projectPrefix}${projectId as string}`;

const storageFailure = (
  failure: unknown,
  path: string,
): DomainError => {
  const name =
    typeof failure === "object" &&
    failure !== null &&
    "name" in failure &&
    typeof failure.name === "string"
      ? failure.name
      : "";

  if (
    name === "QuotaExceededError" ||
    name === "NS_ERROR_DOM_QUOTA_REACHED"
  ) {
    return {
      code: "PERSISTENCE_QUOTA_EXCEEDED",
      path,
      safeMessage:
        "El navegador no tiene espacio suficiente para guardar el proyecto.",
    };
  }

  return {
    code: "PERSISTENCE_UNAVAILABLE",
    path,
    safeMessage: "El almacenamiento local no está disponible.",
  };
};

export class LocalStorageProjectRepository
  implements RecoverableProjectRepository
{
  constructor(readonly storage: StorageLike | null) {}

  async load(
    projectId: ProjectId,
  ): Promise<Result<CreativeProject | null, DomainError>> {
    if (!this.storage) {
      return err(storageFailure(null, "storage"));
    }

    let raw: string | null;
    try {
      raw = this.storage.getItem(projectKey(projectId));
    } catch (failure) {
      return err(storageFailure(failure, "storage.read"));
    }

    if (raw === null) return ok(null);

    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return err({
        code: "PERSISTENCE_DATA_CORRUPTED",
        path: "storage.project",
        safeMessage: "El proyecto local no contiene JSON válido.",
      });
    }

    return validateProjectSnapshot(parsed);
  }

  async loadMostRecent(): Promise<
    Result<CreativeProject | null, DomainError>
  > {
    if (!this.storage) {
      return err(storageFailure(null, "storage"));
    }

    let latestId: string | null;
    try {
      latestId = this.storage.getItem(LOCAL_STORAGE_KEYS.latest);
    } catch (failure) {
      return err(storageFailure(failure, "storage.read"));
    }

    if (!latestId) return ok(null);

    const loaded = await this.load(latestId as ProjectId);
    if (!loaded.ok || loaded.value) return loaded;

    try {
      this.storage.removeItem(LOCAL_STORAGE_KEYS.latest);
    } catch (failure) {
      return err(storageFailure(failure, "storage.cleanup"));
    }
    return ok(null);
  }

  async save(project: CreativeProject): Promise<Result<void, DomainError>> {
    if (!this.storage) {
      return err(storageFailure(null, "storage"));
    }

    const validated = validateProjectSnapshot(project);
    if (!validated.ok) return validated;

    const key = projectKey(project.id);
    let previousProject: string | null;
    let previousLatest: string | null;

    try {
      previousProject = this.storage.getItem(key);
      previousLatest = this.storage.getItem(LOCAL_STORAGE_KEYS.latest);
    } catch (failure) {
      return err(storageFailure(failure, "storage.read"));
    }

    let serialized: string;
    try {
      serialized = JSON.stringify(validated.value);
    } catch {
      return err({
        code: "PERSISTENCE_DATA_CORRUPTED",
        path: "storage.project",
        safeMessage: "El proyecto no puede convertirse a JSON local.",
      });
    }

    try {
      this.storage.setItem(key, serialized);
      this.storage.setItem(
        LOCAL_STORAGE_KEYS.latest,
        project.id as string,
      );
      return ok(undefined);
    } catch (failure) {
      try {
        if (previousProject === null) this.storage.removeItem(key);
        else this.storage.setItem(key, previousProject);

        if (previousLatest === null) {
          this.storage.removeItem(LOCAL_STORAGE_KEYS.latest);
        } else {
          this.storage.setItem(LOCAL_STORAGE_KEYS.latest, previousLatest);
        }
      } catch {
        // Best-effort rollback. The original typed error remains authoritative.
      }
      return err(storageFailure(failure, "storage.write"));
    }
  }

  async remove(projectId: ProjectId): Promise<Result<void, DomainError>> {
    if (!this.storage) {
      return err(storageFailure(null, "storage"));
    }

    try {
      this.storage.removeItem(projectKey(projectId));
      const latest = this.storage.getItem(LOCAL_STORAGE_KEYS.latest);
      if (latest === (projectId as string)) {
        this.storage.removeItem(LOCAL_STORAGE_KEYS.latest);
      }
      return ok(undefined);
    } catch (failure) {
      return err(storageFailure(failure, "storage.remove"));
    }
  }

  async clearMostRecent(): Promise<Result<void, DomainError>> {
    if (!this.storage) {
      return err(storageFailure(null, "storage"));
    }

    try {
      const latest = this.storage.getItem(LOCAL_STORAGE_KEYS.latest);
      if (latest) {
        this.storage.removeItem(projectKey(latest as ProjectId));
      }
      this.storage.removeItem(LOCAL_STORAGE_KEYS.latest);
      return ok(undefined);
    } catch (failure) {
      return err(storageFailure(failure, "storage.clear"));
    }
  }
}

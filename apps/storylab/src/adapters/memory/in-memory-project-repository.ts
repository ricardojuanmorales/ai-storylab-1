import { ok, type Result } from "../../domain/result";
import type { DomainError } from "../../domain/errors";
import type { CreativeProject } from "../../domain/model";
import type { ProjectId } from "../../domain/types";
import type { ProjectRepository } from "../../ports";

const cloneProject = (project: CreativeProject): CreativeProject =>
  structuredClone(project);

export class InMemoryProjectRepository implements ProjectRepository {
  readonly #projects = new Map<string, CreativeProject>();

  constructor(initial: readonly CreativeProject[] = []) {
    for (const project of initial) {
      this.#projects.set(project.id as string, cloneProject(project));
    }
  }

  async load(
    projectId: ProjectId,
  ): Promise<Result<CreativeProject | null, DomainError>> {
    const project = this.#projects.get(projectId as string);
    return ok(project ? cloneProject(project) : null);
  }

  async save(project: CreativeProject): Promise<Result<void, DomainError>> {
    this.#projects.set(project.id as string, cloneProject(project));
    return ok(undefined);
  }

  async remove(projectId: ProjectId): Promise<Result<void, DomainError>> {
    this.#projects.delete(projectId as string);
    return ok(undefined);
  }
}

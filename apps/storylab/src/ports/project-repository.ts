import type { CreativeProject } from "../domain/model";
import type { ProjectId } from "../domain/types";
import type { Result } from "../domain/result";
import type { DomainError } from "../domain/errors";

export interface ProjectRepository {
  load(projectId: ProjectId): Promise<Result<CreativeProject | null, DomainError>>;
  save(project: CreativeProject): Promise<Result<void, DomainError>>;
  remove(projectId: ProjectId): Promise<Result<void, DomainError>>;
}

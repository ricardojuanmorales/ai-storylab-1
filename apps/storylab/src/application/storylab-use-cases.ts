import type { CreateProjectInput } from "./create-project";
import { createProject } from "./create-project";
import {
  createCreativeCycleUseCases,
  type CreativeCycleDependencies,
} from "./creative-cycle";
import type {
  CreativeCycleMutationUseCases,
  CreativeCycleProjectResult,
} from "./creative-cycle-contracts";

export interface StoryLabUseCases extends CreativeCycleMutationUseCases {
  readonly createProject: (
    input: CreateProjectInput,
  ) => Promise<CreativeCycleProjectResult>;
}

export const createStoryLabUseCases = (
  dependencies: CreativeCycleDependencies,
): StoryLabUseCases => ({
  createProject: (input) => createProject(input, dependencies),
  ...createCreativeCycleUseCases(dependencies),
});

import { createStoryLabUseCases } from "../application";
import { InMemoryProjectRepository } from "../adapters/memory/in-memory-project-repository";
import type { ISODateTime } from "../domain/types";
import type { Clock, IdGenerator } from "../ports";

class SequentialIdGenerator implements IdGenerator {
  #value = 0;

  next(namespace: string): string {
    this.#value += 1;
    return `${namespace}:synthetic-${String(this.#value).padStart(3, "0")}`;
  }
}

class SequentialClock implements Clock {
  #value = Date.parse("2026-07-16T22:00:00.000Z");

  now(): ISODateTime {
    const current = new Date(this.#value).toISOString() as ISODateTime;
    this.#value += 1_000;
    return current;
  }
}

export const createTestStoryLabRuntime = () => {
  const repository = new InMemoryProjectRepository();
  const useCases = createStoryLabUseCases({
    repository,
    clock: new SequentialClock(),
    ids: new SequentialIdGenerator(),
  });

  return { repository, useCases };
};

export const createTestStoryLabUseCases = () =>
  createTestStoryLabRuntime().useCases;

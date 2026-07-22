import { describe, expect, it } from "vitest";
import {
  comparePortfolioProjectsSemantically,
} from "../application";
import type { CreativeProject } from "../domain/model";
import type { ProjectId } from "../domain/types";
import { clone } from "./helpers";
import {
  portfolioFixture,
} from "./portfolio-import-test-helpers";

const project = (): CreativeProject =>
  clone(portfolioFixture.project);

describe("H08-5.4 semantic portfolio equivalence", () => {
  it("ignores only project.id and non-semantic collection order", () => {
    const left = project();
    const right: CreativeProject = {
      ...project(),
      id: "project-local-copy" as ProjectId,
      missions: [...left.missions].reverse(),
      activityResponses:
        [...left.activityResponses].reverse(),
      evidence: [...left.evidence].reverse(),
      reflections: [...left.reflections].reverse(),
      decisions: [...left.decisions].reverse(),
    };

    expect(
      comparePortfolioProjectsSemantically(left, right),
    ).toEqual({ equivalent: true });
  });

  it("detects a portfolio order change", () => {
    const left = project();
    const item = left.portfolio.items[0];
    if (item === undefined) throw new Error("ITEM_MISSING");

    const right: CreativeProject = {
      ...project(),
      portfolio: {
        items: [
          {
            ...item,
            order: item.order + 1,
          },
        ],
      },
    };

    expect(
      comparePortfolioProjectsSemantically(left, right),
    ).toMatchObject({
      equivalent: false,
      firstDifferencePath:
        "$.portfolio.items[0].order",
      reason: "VALUE_MISMATCH",
    });
  });

  it("detects changes to human decisions and timestamps", () => {
    const left = project();
    const decision = left.decisions[0];
    if (decision === undefined) {
      throw new Error("DECISION_MISSING");
    }

    const changedDecision: CreativeProject = {
      ...project(),
      decisions: [
        {
          ...decision,
          value: "reject",
        },
      ],
    };
    expect(
      comparePortfolioProjectsSemantically(
        left,
        changedDecision,
      ),
    ).toMatchObject({
      equivalent: false,
      firstDifferencePath:
        "$.decisions[0].value",
    });

    const changedTimestamp: CreativeProject = {
      ...project(),
      updatedAt: "2026-07-15T13:31:00Z" as CreativeProject["updatedAt"],
    };
    expect(
      comparePortfolioProjectsSemantically(
        left,
        changedTimestamp,
      ),
    ).toMatchObject({
      equivalent: false,
      firstDifferencePath: "$.updatedAt",
    });
  });

  it("detects accessibility and deferred flag changes", () => {
    const left = project();
    const accessibility: CreativeProject = {
      ...project(),
      profile: {
        ...left.profile,
        accessibility: {
          ...left.profile.accessibility,
          highContrast:
            !left.profile.accessibility.highContrast,
        },
      },
    };
    expect(
      comparePortfolioProjectsSemantically(
        left,
        accessibility,
      ),
    ).toMatchObject({
      equivalent: false,
      firstDifferencePath:
        "$.profile.accessibility.highContrast",
    });

    const deferredFlag = {
      ...project(),
      featureFlags: {
        ...left.featureFlags,
        autoPublish: true,
      },
    } as unknown as CreativeProject;
    expect(
      comparePortfolioProjectsSemantically(
        left,
        deferredFlag,
      ),
    ).toMatchObject({
      equivalent: false,
      firstDifferencePath:
        "$.featureFlags.autoPublish",
    });
  });
});

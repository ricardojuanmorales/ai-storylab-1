// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "../presentation/App";
import { createTestStoryLabUseCases } from "./storylab-test-runtime";

afterEach(() => { cleanup(); });

describe("legacy continuity panel", () => {
  it("expone respaldo y aplicación histórica cuando detecta datos", () => {
    render(
      <App
        useCases={createTestStoryLabUseCases()}
        legacyContinuity={{
          storageAvailable: true,
          progressPresent: true,
          groupPresent: false,
          hasLegacyData: true,
          invalidJsonKeys: [],
        }}
        legacyAppUrl="/ai-storylab-1/legacy/v0.3.0/"
        legacyBridgeUrl="/ai-storylab-1/legacy/bridge/"
      />,
    );
    expect(screen.getByRole("heading", { name: "Continuidad del MVP histórico" })).toBeTruthy();
    expect(screen.getByText(/Se detectaron datos del MVP v0.3.0/i)).toBeTruthy();
    expect(screen.getByRole("link", { name: "Abrir v0.3.0" }).getAttribute("href")).toBe("/ai-storylab-1/legacy/v0.3.0/");
    expect(screen.getByRole("link", { name: "Revisar y respaldar datos legacy" }).getAttribute("href")).toBe("/ai-storylab-1/legacy/bridge/");
  });
});

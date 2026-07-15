
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/tests/**/*.test.ts"],
    setupFiles: ["src/tests/setup-network-guard.ts"],
    clearMocks: true,
    restoreMocks: true,
    testTimeout: 5_000,
  },
});

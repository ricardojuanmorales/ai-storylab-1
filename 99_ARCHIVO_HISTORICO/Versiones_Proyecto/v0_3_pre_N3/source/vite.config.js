import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local-first MVP: no backend, no proxy, no env secrets.
export default defineConfig({
  plugins: [react()],
  base: "/ai-storylab-1/",
  server: {
    port: 5173,
    open: true,
  },
  test: {
    environment: "node",
  },
});

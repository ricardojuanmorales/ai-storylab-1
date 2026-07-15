
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const loadJson = <Value = unknown>(relativePath: string): Value => {
  const path = fileURLToPath(new URL(relativePath, import.meta.url));
  return JSON.parse(readFileSync(path, "utf8")) as Value;
};

export const clone = <Value>(value: Value): Value => structuredClone(value);

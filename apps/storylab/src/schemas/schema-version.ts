export const CURRENT_SCHEMA_VERSION = "0.8.0-alpha.1" as const;

export const SUPPORTED_SCHEMA_VERSIONS = [
  CURRENT_SCHEMA_VERSION,
] as const;

export type SupportedSchemaVersion =
  (typeof SUPPORTED_SCHEMA_VERSIONS)[number];

export const isSupportedSchemaVersion = (
  value: string,
): value is SupportedSchemaVersion =>
  SUPPORTED_SCHEMA_VERSIONS.includes(value as SupportedSchemaVersion);

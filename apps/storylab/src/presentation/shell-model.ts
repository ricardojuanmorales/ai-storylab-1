export const SHELL_STEPS = [
  {
    id: "preparation",
    label: "Preparación local",
    description: "Ajusta la vista y crea un proyecto sintético.",
    status: "complete",
  },
  {
    id: "mission-intention",
    label: "M1 · Intención creadora",
    description: "Propósito, audiencia, premisa y límites de la creación.",
    status: "complete",
  },
  {
    id: "mission-architecture",
    label: "M2 · Arquitectura narrativa",
    description: "Personajes, mundo, conflicto y estructura revisable.",
    status: "complete",
  },
  {
    id: "mission-production",
    label: "M3 · Producción multimodal",
    description:
      "Múltiples evidencias textuales y metadatos sintéticos de producción.",
    status: "complete",
  },
  {
    id: "mission-curation",
    label: "M4 · Curaduría y cierre",
    description:
      "Selección, orden, registro de curaduría y traspaso conceptual.",
    status: "complete",
  },
  {
    id: "portfolio",
    label: "Portafolio reversible",
    description: "Selección humana que puede incorporarse o retirarse.",
    status: "complete",
  },
  {
    id: "local-recovery-export",
    label: "Recuperación local y export preview",
    description: "Guardado validado, recuperación y vista previa sin descarga.",
    status: "complete",
  },
  {
    id: "arc-integration",
    label: "Integración transversal del arco",
    description:
      "Continuidad M1–M4, coherencia de reapertura y preview final privado.",
    status: "current",
  },
  {
    id: "import-roundtrip",
    label: "Importación y roundtrip",
    description: "Validación de ida y vuelta planificada para H08-5.",
    status: "planned",
  },
] as const;

export type ShellStep = (typeof SHELL_STEPS)[number];
export type ShellStepStatus = ShellStep["status"];

export const shellStepStatusLabel = (
  status: ShellStepStatus,
): string =>
  status === "complete"
    ? "Preparado"
    : status === "current"
      ? "Disponible"
      : "Planificado";

export const SHELL_STEPS = [
  {
    id: "preparation",
    label: "Preparación local",
    description: "Ajusta la vista y conoce los límites de esta versión.",
    status: "current",
  },
  {
    id: "mission-intention",
    label: "M1 · Intención creadora",
    description: "Propósito, audiencia, premisa y límites de la creación.",
    status: "planned",
  },
  {
    id: "mission-architecture",
    label: "M2 · Arquitectura narrativa",
    description: "Personajes, mundo, conflicto y estructura.",
    status: "planned",
  },
  {
    id: "mission-production",
    label: "M3 · Producción multimodal",
    description: "Evidencias creativas y documentación del proceso.",
    status: "planned",
  },
  {
    id: "mission-curation",
    label: "M4 · Curaduría y cierre",
    description: "Reflexión, selección, revisión y cierre humano.",
    status: "planned",
  },
  {
    id: "portfolio",
    label: "Portafolio y revisión final",
    description: "Curaduría reversible antes de preparar cualquier salida.",
    status: "planned",
  },
  {
    id: "export-recovery",
    label: "Exportación, importación y recuperación",
    description: "Cierre validado del ciclo completo de v0.8.0.",
    status: "planned",
  },
] as const;

export type ShellStep = (typeof SHELL_STEPS)[number];

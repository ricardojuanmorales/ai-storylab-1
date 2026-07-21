import { MISSION_CATALOG } from "../domain/mission-catalog";
import {
  MissionWorkspace,
  type MissionWorkspaceCopy,
  type MissionWorkspaceProps,
} from "./MissionWorkspace";

export type MissionTwoWorkspaceProps = Omit<
  MissionWorkspaceProps,
  "definition" | "missionLabel" | "copy"
>;

const M2_ARCHITECTURE_DEFINITION = MISSION_CATALOG[1];

const M2_WORKSPACE_COPY: MissionWorkspaceCopy = {
  eyebrow: "Segunda misión funcional",
  activityTitle: "Mapa narrativo revisable",
  activityLabel: "Personajes, mundo, tensiones y estructura",
  activityHelp:
    "Explora participantes, reglas del mundo, tensiones centrales y una estructura que puedas revisar o reordenar.",
  evidenceTitle: "Arquitectura narrativa",
  evidenceHelp:
    "Documenta una versión revisable de la arquitectura. Guardarla no la incorpora automáticamente al portafolio.",
  evidenceTitleLabel: "Título de la arquitectura",
  evidenceSummaryLabel:
    "Síntesis de personajes, mundo, tensiones y estructura",
};

export function MissionTwoWorkspace(props: MissionTwoWorkspaceProps) {
  return (
    <MissionWorkspace
      {...props}
      definition={M2_ARCHITECTURE_DEFINITION}
      missionLabel="M2"
      copy={M2_WORKSPACE_COPY}
    />
  );
}

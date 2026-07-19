import { M1_INTENTION_DEFINITION } from "../domain/mission-catalog";
import {
  MissionWorkspace,
  type MissionWorkspaceCopy,
  type MissionWorkspaceProps,
} from "./MissionWorkspace";

export type MissionOneWorkspaceProps = Omit<
  MissionWorkspaceProps,
  "definition" | "missionLabel" | "copy"
>;

const M1_WORKSPACE_COPY: MissionWorkspaceCopy = {
  eyebrow: "Primera misión funcional",
  activityTitle: "Borrador de intención",
  activityLabel: "Borrador de intención",
  activityHelp:
    "Puedes volver, revisar y recombinar. Guardar no convierte el borrador en evidencia.",
};

export function MissionOneWorkspace(props: MissionOneWorkspaceProps) {
  return (
    <MissionWorkspace
      {...props}
      definition={M1_INTENTION_DEFINITION}
      missionLabel="M1"
      copy={M1_WORKSPACE_COPY}
    />
  );
}

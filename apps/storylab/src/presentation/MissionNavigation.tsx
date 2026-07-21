import type { MouseEvent } from "react";
import type { MissionId } from "../domain/types";
import { MISSION_WORKSPACE_POLICIES } from "./mission-workspace-model";

export interface MissionNavigationProps {
  readonly activeMissionId: MissionId;
  readonly onSelectMission: (missionId: MissionId) => void;
}

export function MissionNavigation({
  activeMissionId,
  onSelectMission,
}: MissionNavigationProps) {
  const selectMission = (
    event: MouseEvent<HTMLAnchorElement>,
    missionId: MissionId,
  ) => {
    event.preventDefault();
    onSelectMission(missionId);
  };

  return (
    <nav
      className="mission-navigation"
      aria-label="Misiones del proyecto"
    >
      <div className="mission-navigation-heading">
        <p className="eyebrow">Arco activo</p>
        <h3>Misiones del proyecto</h3>
        <p>
          M1, M2, M3 y M4 están disponibles en el mismo proyecto local. Cada
          misión conserva su cardinalidad y sus decisiones humanas.
        </p>
      </div>

      <ol className="mission-navigation-list">
        {MISSION_WORKSPACE_POLICIES.map((policy) => {
          const active = policy.definition.id === activeMissionId;
          const content = (
            <>
              <span className="mission-navigation-label">
                {policy.definition.title}
              </span>
              <span className="mission-navigation-state">
                {policy.availability === "functional"
                  ? "Disponible ahora"
                  : "Planificada"}
              </span>
            </>
          );

          return (
            <li
              key={policy.definition.id as string}
              data-availability={policy.availability}
            >
              {policy.availability === "functional" ? (
                <a
                  href="#mission-workspace"
                  aria-current={active ? "step" : undefined}
                  onClick={(event) =>
                    selectMission(event, policy.definition.id)
                  }
                >
                  {content}
                </a>
              ) : (
                <span aria-disabled="true">{content}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

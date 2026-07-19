import type { MissionId } from "../domain/types";
import { MISSION_WORKSPACE_POLICIES } from "./mission-workspace-model";

export interface MissionNavigationProps {
  readonly activeMissionId: MissionId;
}

export function MissionNavigation({
  activeMissionId,
}: MissionNavigationProps) {
  return (
    <nav
      className="mission-navigation"
      aria-label="Misiones del proyecto"
    >
      <div className="mission-navigation-heading">
        <p className="eyebrow">Motor compartido</p>
        <h3>Arco de misiones</h3>
        <p>
          M1 utiliza el motor reutilizable. Las demás misiones permanecen
          visibles, pero no simulan funcionalidad antes de sus bloques.
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

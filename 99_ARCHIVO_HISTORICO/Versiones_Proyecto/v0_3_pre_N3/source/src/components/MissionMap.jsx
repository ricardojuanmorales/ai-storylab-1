import React from "react";
import sessionsData from "../data/sessions.json";
import badgesData from "../data/badges.json";
import MissionCard from "./MissionCard.jsx";
import MentorAvatarCard from "./MentorAvatarCard.jsx";

const phaseById = Object.fromEntries(sessionsData.phases.map((p) => [p.id, p]));

/**
 * The mission map: nine mission tiles grouped visually by phase color.
 */
export default function MissionMap({ progress, navigate }) {
  const completed = progress.progress.sessions_completed;

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Mapa de Misiones</h2>
        <p className="muted">
          Nueve misiones para construir tu historia multimedia. Avanzas a tu ritmo.
        </p>
      </div>

      <MentorAvatarCard
        compact
        message={
          completed === 0
            ? "Bienvenido al laboratorio. Empieza por la Misión 1: tu Brújula Ética."
            : completed >= 9
            ? "¡Increíble! Completaste las nueve misiones. Es hora de la premier."
            : `Llevas ${completed} de 9 misiones. Sigue así, tu historia toma forma.`
        }
      />

      <div className="mission-grid">
        {sessionsData.sessions.map((meta) => {
          const session = progress.sessions.find((s) => s.session_id === meta.session_id);
          const phase = phaseById[meta.phase] || {};
          const badge = badgesData.badges.find((b) => b.session_id === meta.session_id);
          return (
            <MissionCard
              key={meta.session_id}
              meta={meta}
              session={session}
              phaseLabel={phase.label}
              phaseColor={phase.color}
              badge={badge}
              onEnter={() => navigate("mission", meta.session_id)}
            />
          );
        })}
      </div>
    </section>
  );
}

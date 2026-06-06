import React from "react";
import sessionsData from "../data/sessions.json";
import MentorAvatarCard from "./MentorAvatarCard.jsx";
import { getNextSession } from "../utils/progress.js";

const phaseById = Object.fromEntries(sessionsData.phases.map((p) => [p.id, p]));

function Stat({ value, total, label }) {
  return (
    <div className="stat">
      <div className="stat__value">
        {value}
        {total != null && <span className="stat__total">/{total}</span>}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
}

/**
 * Individual student dashboard.
 */
export default function StudentDashboard({ progress, navigate, onExport, onImportClick }) {
  const p = progress.progress;
  const next = getNextSession(progress);
  const nextMeta = next ? sessionsData.sessions.find((s) => s.session_id === next.session_id) : null;
  const phase = phaseById[p.current_phase];
  const fs = progress.final_submission;

  const finalLabel = {
    pending: "Pendiente",
    submitted: "Entregado",
    validated: "Validado",
  }[fs.video_status] || "Pendiente";

  const mentorMsg =
    p.sessions_completed >= 9
      ? "Completaste tu historia. Revisa la Estación de Entrega Final."
      : p.sessions_completed === 0
      ? "Tu laboratorio está listo. Abre el mapa y empieza tu primera misión."
      : "Vas muy bien. Tu progreso viaja contigo: recuerda exportar tu JSON como respaldo.";

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Panel de {progress.profile.display_name || "estudiante"}</h2>
        <p className="muted">
          {progress.profile.modality !== "individual" && progress.profile.team_name
            ? `Equipo: ${progress.profile.team_name} · `
            : ""}
          Proyecto: {progress.project.title || "sin título"}
        </p>
      </div>

      <MentorAvatarCard compact message={mentorMsg} />

      <div className="stats-grid">
        <Stat value={p.sessions_completed} total={9} label="Misiones completadas" />
        <Stat value={p.badges_awarded.length} total={9} label="Insignias ganadas" />
        <Stat value={p.portfolio_entries_completed} total={9} label="Portafolio" />
      </div>

      <div className="dash-cards">
        <div className="card">
          <h4>Fase actual</h4>
          <p>
            <span className="pill" style={{ background: phase?.color }}>
              {phase?.label || "—"}
            </span>
          </p>
        </div>

        <div className="card">
          <h4>Próxima misión</h4>
          {nextMeta ? (
            <>
              <p>
                <strong>Misión {nextMeta.number}:</strong> {nextMeta.title}
              </p>
              <button className="btn btn--small" onClick={() => navigate("mission", nextMeta.session_id)}>
                Continuar
              </button>
            </>
          ) : (
            <p className="muted">Todas las misiones completadas 🎉</p>
          )}
        </div>

        <div className="card">
          <h4>Entrega final</h4>
          <p>
            <span className={`pill pill--video-${fs.video_status}`}>{finalLabel}</span>
          </p>
          <button className="btn btn--small btn--ghost" onClick={() => navigate("final")}>
            Ver estación
          </button>
        </div>
      </div>

      <div className="actions actions--start">
        <button className="btn" onClick={() => navigate("map")}>
          Ir al mapa de misiones
        </button>
        <button className="btn btn--ghost" onClick={onExport}>
          Exportar mi progreso (JSON)
        </button>
        <button className="btn btn--ghost" onClick={onImportClick}>
          Importar progreso
        </button>
      </div>

      <p className="hint">
        Tu huella de aprendizaje quedó guardada en este navegador. Exporta tu JSON
        para respaldo y entrégalo solo al facilitador si se solicita.
      </p>
    </section>
  );
}

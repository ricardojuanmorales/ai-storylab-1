import React from "react";

const STATUS_LABEL = {
  not_started: "No iniciada",
  in_progress: "En progreso",
  completed: "Completada",
  pending_review: "Pendiente de revisión",
};

/**
 * A single mission tile in the mission map.
 */
export default function MissionCard({ meta, session, phaseLabel, phaseColor, badge, onEnter }) {
  const status = session?.status || "not_started";
  return (
    <article className={`mission-card status-${status}`} style={{ "--phase": phaseColor }}>
      <header className="mission-card__head">
        <span className="mission-card__num">{meta.number}</span>
        <span className="mission-card__phase">{phaseLabel}</span>
      </header>

      <h3 className="mission-card__title">{meta.title}</h3>

      <p className="mission-card__question">“{meta.guiding_question}”</p>

      <dl className="mission-card__meta">
        <div>
          <dt>Producto</dt>
          <dd>{meta.expected_product}</dd>
        </div>
        <div>
          <dt>Insignia</dt>
          <dd>{badge ? badge.name : "—"}</dd>
        </div>
      </dl>

      <footer className="mission-card__foot">
        <span className={`pill pill--${status}`}>{STATUS_LABEL[status]}</span>
        <button className="btn btn--small" onClick={onEnter}>
          Entrar
        </button>
      </footer>
    </article>
  );
}

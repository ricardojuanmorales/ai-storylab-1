import React from "react";
import badgesData from "../data/badges.json";
import competenciesData from "../data/competencies.json";
import MentorAvatarCard from "./MentorAvatarCard.jsx";

const compById = Object.fromEntries(
  competenciesData.competencies.map((c) => [c.competency_id, c])
);

/**
 * Badge wall: locked vs earned badges with evidence and competencies.
 */
export default function BadgeWall({ progress }) {
  const earned = progress.progress.badges_awarded;

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Muro de Insignias</h2>
        <p className="muted">
          {earned.length} de {badgesData.badges.length} insignias desbloqueadas.
        </p>
      </div>

      <MentorAvatarCard
        compact
        message="Cada insignia es prueba de una decisión bien tomada. Colecciónalas con orgullo."
      />

      <div className="badge-grid">
        {badgesData.badges.map((badge) => {
          const isEarned = earned.includes(badge.badge_id);
          return (
            <article key={badge.badge_id} className={`badge-tile ${isEarned ? "is-earned" : "is-locked"}`}>
              <div className="badge-tile__icon" style={{ background: isEarned ? badge.color : "#cbd5e1" }}>
                <img
                  src={`${import.meta.env.BASE_URL}badges/${badge.badge_id}.png`}
                  alt={badge.name}
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "inherit" }}
                />
                <span style={{ display: "none" }}>{isEarned ? "★" : "🔒"}</span>
              </div>
              <h3>{badge.name}</h3>
              <p className="muted small">{badge.description}</p>
              <p className="badge-tile__evidence">
                <strong>Evidencia:</strong> {badge.evidence_required}
              </p>
              <div className="badge-tile__comps">
                {badge.competencies.map((cid) => (
                  <span key={cid} className="tag" title={compById[cid]?.description}>
                    {compById[cid]?.name || cid}
                  </span>
                ))}
              </div>
              <span className={`pill ${isEarned ? "pill--completed" : "pill--not_started"}`}>
                {isEarned ? "Ganada" : "Bloqueada"}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

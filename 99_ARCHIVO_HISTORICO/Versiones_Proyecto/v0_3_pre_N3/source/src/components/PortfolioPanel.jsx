import React, { useState } from "react";
import MentorAvatarCard from "./MentorAvatarCard.jsx";

/**
 * Emergent portfolio panel. Read-only view derived from session work.
 * The portfolio is NOT generated as a Word file — only organized to copy/paste.
 */
export default function PortfolioPanel({ progress, navigate }) {
  const pe = progress.portfolio_emergent;
  const [copied, setCopied] = useState("");

  async function copyText(text, key) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("error");
    }
  }

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Portafolio Emergente</h2>
        <p className="muted">
          Tu portafolio se construye solo, a partir de lo que registras en cada misión.
          Aquí lo organizas para copiarlo a tu documento Word.
        </p>
      </div>

      <MentorAvatarCard
        compact
        message="Tu historia también necesita memoria. Cada misión completada se convierte en una sección de tu portafolio."
      />

      <div className="progressbar">
        <div className="progressbar__fill" style={{ width: `${pe.completion_percentage}%` }} />
        <span className="progressbar__label">
          Progreso del portafolio: {pe.entries_completed}/{pe.entries_expected} ({pe.completion_percentage}%)
        </span>
      </div>

      {pe.entries_completed > 0 && (
        <div className="actions">
          <button
            className="btn btn--ghost"
            onClick={() => copyText(pe.copy_ready_full_portfolio, "all")}
          >
            {copied === "all" ? "¡Copiado!" : "Copiar portafolio completo"}
          </button>
        </div>
      )}

      <div className="portfolio-list">
        {pe.sections.map((s) => (
          <article key={s.session_id} className={`portfolio-entry ${s.completed ? "is-complete" : "is-pending"}`}>
            <header>
              <h3>
                {s.session_id} · {s.title}
              </h3>
              <span className={`pill ${s.completed ? "pill--completed" : "pill--not_started"}`}>
                {s.completed ? "Completada" : "Pendiente"}
              </span>
            </header>

            {s.completed ? (
              <>
                <dl className="portfolio-entry__meta">
                  <div>
                    <dt>Evidencia</dt>
                    <dd>{s.evidence_summary}</dd>
                  </div>
                  {s.tool_used && (
                    <div>
                      <dt>Herramienta</dt>
                      <dd>{s.tool_used}</dd>
                    </div>
                  )}
                  {s.prompt_used && (
                    <div>
                      <dt>Prompt</dt>
                      <dd>{s.prompt_used}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Decisión humana</dt>
                    <dd>{s.human_decision}</dd>
                  </div>
                  <div>
                    <dt>Reflexión ética</dt>
                    <dd>{s.ethical_reflection}</dd>
                  </div>
                </dl>

                <details className="copy-ready">
                  <summary>Texto listo para copiar al portafolio Word</summary>
                  <pre>{s.copy_ready_text}</pre>
                  <button
                    className="btn btn--small btn--ghost"
                    onClick={() => copyText(s.copy_ready_text, s.session_id)}
                  >
                    {copied === s.session_id ? "¡Copiado!" : "Copiar sección"}
                  </button>
                </details>
              </>
            ) : (
              <div className="portfolio-entry__pending">
                <p className="muted">Esta sección se completará al terminar la misión.</p>
                <button className="btn btn--small" onClick={() => navigate("mission", s.session_id)}>
                  Ir a la misión
                </button>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

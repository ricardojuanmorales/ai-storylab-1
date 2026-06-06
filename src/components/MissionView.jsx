import React, { useEffect, useMemo, useState } from "react";
import sessionsData from "../data/sessions.json";
import glossaryData from "../data/glossary.json";
import toolsData from "../data/tools.json";
import MentorAvatarCard from "./MentorAvatarCard.jsx";
import EthicalReflectionBox from "./EthicalReflectionBox.jsx";
import LudicActivityWidget from "./LudicActivityWidget.jsx";
import SuggestedPromptBox from "./SuggestedPromptBox.jsx";
import { getBadgeForSession, canCompleteSession } from "../utils/progress.js";

const phaseById = Object.fromEntries(sessionsData.phases.map((p) => [p.id, p]));

export default function MissionView({ sessionId, session, onSave, onComplete, onSaveLudicOutput, navigate }) {
  const meta = sessionsData.sessions.find((s) => s.session_id === sessionId);
  const badge = getBadgeForSession(sessionId);
  const phase = phaseById[meta.phase] || {};

  const [draft, setDraft] = useState(session);
  const [flash, setFlash] = useState(null);
  const [expandedTerm, setExpandedTerm] = useState(null);

  useEffect(() => {
    setDraft(session);
    setFlash(null);
    setExpandedTerm(null);
  }, [sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  const usesTool = meta.evidence_fields.includes("tool_used");
  const usesPrompt = meta.evidence_fields.includes("prompt_used");

  const relatedTools = useMemo(
    () => toolsData.tools.filter((t) => t.sessions.includes(sessionId)),
    [sessionId]
  );

  const glossaryTerms = useMemo(() => {
    const termIds = meta.glossary_terms || [];
    return glossaryData.terms.filter((t) => termIds.includes(t.term_id));
  }, [meta.glossary_terms]);

  const eligible = canCompleteSession(draft);

  function update(field, value) {
    setDraft((d) => ({ ...d, [field]: value }));
  }

  function handleSave() {
    onSave(sessionId, draft);
    setFlash({ type: "ok", text: "Tu huella de aprendizaje quedó guardada en este navegador." });
  }

  function handleComplete() {
    onSave(sessionId, draft);
    const result = onComplete(sessionId, draft);
    if (result.ok) {
      setFlash({
        type: "badge",
        text: `Misión completada. Has desbloqueado la insignia "${result.badge?.name || ""}".`,
      });
    } else {
      setFlash({
        type: "warn",
        text: "Aún falta evidencia, decisión humana o reflexión ética para completar la misión.",
      });
    }
  }

  function handleSaveLudic(data, summary) {
    const updatedDraft = { ...draft, ludic_output: data };
    if (summary && !draft.evidence_summary) {
      updatedDraft.evidence_summary = summary;
    }
    setDraft(updatedDraft);
    onSaveLudicOutput(sessionId, data, summary);
  }

  function handleUseSuggestedPrompt(text) {
    update("prompt_used", text);
  }

  return (
    <section className="screen mission-view" style={{ "--phase": phase.color }}>
      <button className="link-back" onClick={() => navigate("map")}>
        ← Volver al mapa
      </button>

      <div className="mission-view__head">
        <span className="mission-view__badge-num">Misión {meta.number}</span>
        <h2>{meta.title}</h2>
        <span className="pill" style={{ background: phase.color }}>{phase.label}</span>
      </div>

      <MentorAvatarCard message={meta.mentor_message} />

      <div className="card">
        <h3>Pregunta guía</h3>
        <p className="mission-view__question">"{meta.guiding_question}"</p>

        <h4>Objetivos</h4>
        <ul>
          {meta.objectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>

        <h4>Tu tarea</h4>
        <p>{meta.task_instructions}</p>
        <p className="muted">
          Producto esperado: <strong>{meta.expected_product}</strong>
        </p>
      </div>

      {/* ── Actividad lúdica interactiva ── */}
      <LudicActivityWidget
        config={meta.ludic_config}
        savedOutput={session.ludic_output || {}}
        onSave={handleSaveLudic}
      />

      {/* ── Conceptos clave del glosario ── */}
      {glossaryTerms.length > 0 && (
        <div className="card glossary-section">
          <h4>Conceptos clave de esta misión</h4>
          <div className="glossary-chips">
            {glossaryTerms.map((term) => (
              <div key={term.term_id} className="glossary-chip-wrapper">
                <button
                  type="button"
                  className={`glossary-chip ${expandedTerm === term.term_id ? "glossary-chip--active" : ""}`}
                  onClick={() =>
                    setExpandedTerm(expandedTerm === term.term_id ? null : term.term_id)
                  }
                >
                  {term.term}
                </button>
                {expandedTerm === term.term_id && (
                  <div className="glossary-definition">
                    <span className="glossary-category">{term.category}</span>
                    <p>{term.definition}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Registro de evidencia ── */}
      <div className="card">
        <h3>Registra tu evidencia</h3>

        <label className="field">
          <span>Evidencia (resumen)</span>
          <textarea
            rows={3}
            value={draft.evidence_summary}
            placeholder="Describe lo que produjiste en esta misión."
            onChange={(e) => update("evidence_summary", e.target.value)}
          />
        </label>

        {usesTool && (
          <label className="field">
            <span>Herramienta usada</span>
            <input
              list={`tools-${sessionId}`}
              value={draft.tool_used}
              placeholder={meta.tool_default}
              onChange={(e) => update("tool_used", e.target.value)}
            />
            <datalist id={`tools-${sessionId}`}>
              {relatedTools.map((t) => (
                <option key={t.tool_id} value={t.name} />
              ))}
            </datalist>
          </label>
        )}

        {usesPrompt && (
          <>
            <SuggestedPromptBox
              prompt={meta.suggested_prompt}
              onUse={handleUseSuggestedPrompt}
            />
            <label className="field">
              <span>Prompt usado (si aplica)</span>
              <textarea
                rows={3}
                value={draft.prompt_used}
                placeholder="Pega o edita aquí el prompt que diste a la herramienta de IA."
                onChange={(e) => update("prompt_used", e.target.value)}
              />
            </label>
          </>
        )}

        <EthicalReflectionBox
          humanDecision={draft.human_decision}
          ethicalReflection={draft.ethical_reflection}
          onChange={update}
        />

        <div className={`portfolio-status ${eligible ? "is-ready" : ""}`}>
          Estado del portafolio:{" "}
          <strong>{eligible ? "entrada completa" : "pendiente"}</strong>
          {!eligible && (
            <span className="muted"> — completa evidencia, decisión humana y reflexión ética.</span>
          )}
        </div>

        {flash && <div className={`flash flash--${flash.type}`}>{flash.text}</div>}

        <div className="actions">
          <button className="btn btn--ghost" onClick={handleSave}>
            Guardar
          </button>
          <button className="btn" onClick={handleComplete} disabled={!eligible}>
            Marcar completada
          </button>
        </div>
      </div>

      <div className="card badge-reveal">
        <div className="badge-chip" data-locked={!draft.badge_awarded} style={{ background: badge?.color }}>
          ★
        </div>
        <div>
          <h4>{badge?.name}</h4>
          <p className="muted">{badge?.description}</p>
          <p className="muted small">Evidencia requerida: {badge?.evidence_required}</p>
          <p className="badge-state">
            {draft.badge_awarded ? "Insignia desbloqueada" : "Insignia bloqueada"}
          </p>
        </div>
      </div>
    </section>
  );
}

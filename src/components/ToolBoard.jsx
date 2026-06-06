import React, { useState } from "react";
import toolsData from "../data/tools.json";
import sessionsData from "../data/sessions.json";

const phaseById = Object.fromEntries(sessionsData.phases.map((p) => [p.id, p]));

/**
 * Tool board: filter by session, phase, type, privacy and difficulty.
 */
export default function ToolBoard() {
  const [session, setSession] = useState("");
  const [phase, setPhase] = useState("");
  const [type, setType] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const filtered = toolsData.tools.filter((t) => {
    return (
      (!session || t.sessions.includes(session)) &&
      (!phase || t.phase === phase) &&
      (!type || t.type === type) &&
      (!privacy || t.privacy === privacy) &&
      (!difficulty || t.difficulty === difficulty)
    );
  });

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Tablero de Herramientas</h2>
        <p className="muted">Filtra las herramientas sugeridas para cada etapa del proyecto.</p>
      </div>

      <div className="filters">
        <select value={session} onChange={(e) => setSession(e.target.value)}>
          <option value="">Todas las sesiones</option>
          {sessionsData.sessions.map((s) => (
            <option key={s.session_id} value={s.session_id}>
              {s.session_id} · {s.title}
            </option>
          ))}
        </select>
        <select value={phase} onChange={(e) => setPhase(e.target.value)}>
          <option value="">Todas las fases</option>
          {sessionsData.phases.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Todos los tipos</option>
          {toolsData.tool_types.map((x) => (
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="">Toda privacidad</option>
          {toolsData.privacy_levels.map((x) => (
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Toda dificultad</option>
          {toolsData.difficulties.map((x) => (
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
      </div>

      <p className="muted small">{filtered.length} herramienta(s)</p>

      <div className="tool-grid">
        {filtered.map((t) => (
          <article key={t.tool_id} className="tool-card">
            <header>
              <h3>{t.name}</h3>
              <span className="tag tag--cat">{t.type}</span>
            </header>
            <p>{t.description}</p>
            <p className="muted small">Ejemplo: {t.example}</p>
            <div className="tool-card__meta">
              <span className="tag" style={{ background: phaseById[t.phase]?.color, color: "#fff" }}>
                {phaseById[t.phase]?.label}
              </span>
              <span className="tag tag--muted">Dificultad: {t.difficulty}</span>
              <span className="tag tag--muted">Privacidad: {t.privacy}</span>
            </div>
            <div className="tool-card__sessions">
              {t.sessions.map((s) => (
                <span key={s} className="tag tag--mini">{s}</span>
              ))}
            </div>
          </article>
        ))}
        {filtered.length === 0 && <p className="muted">No hay herramientas con esos filtros.</p>}
      </div>
    </section>
  );
}

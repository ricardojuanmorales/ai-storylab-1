import React, { useState } from "react";
import toolsData from "../data/tools.json";
import sessionsData from "../data/sessions.json";
import ToolCategoryView from "./ToolCategoryView.jsx";

const phaseById = Object.fromEntries(sessionsData.phases.map((p) => [p.id, p]));

export default function ToolBoard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [session, setSession] = useState("");
  const [phase, setPhase] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [difficulty, setDifficulty] = useState("");

  if (selectedCategory) {
    return (
      <ToolCategoryView
        categoryId={selectedCategory}
        onBack={() => setSelectedCategory(null)}
      />
    );
  }

  const filtered = toolsData.tools.filter((t) => {
    return (
      (!session || t.sessions.includes(session)) &&
      (!phase || t.phase === phase) &&
      (!privacy || t.privacy === privacy) &&
      (!difficulty || t.difficulty === difficulty)
    );
  });

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Tablero de Herramientas</h2>
        <p className="muted">Explora estrategias y herramientas por categoría, o filtra por sesión y fase.</p>
      </div>

      {/* ── Categorías expandibles ── */}
      <div className="card">
        <h3>Explorar por categoría</h3>
        <div className="category-grid">
          {toolsData.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className="category-card"
              style={{ borderColor: cat.color }}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-card__icon">{cat.icon}</span>
              <div>
                <strong>{cat.label}</strong>
                <p className="muted small">{cat.description}</p>
              </div>
              <span className="category-card__arrow" style={{ color: cat.color }}>→</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lista filtrable ── */}
      <div className="screen__head">
        <h3>Filtrar herramientas</h3>
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
              <button
                type="button"
                className="tag tag--cat tag--link"
                onClick={() => setSelectedCategory(t.type)}
              >
                {t.type}
              </button>
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

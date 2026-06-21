import React, { useState } from "react";
import toolsData from "../data/tools.json";

export default function ToolCategoryView({ categoryId, onBack }) {
  const [copiedIdx, setCopiedIdx] = useState(null);
  const category = toolsData.categories.find((c) => c.id === categoryId);
  if (!category) return null;

  const tools = toolsData.tools.filter((t) => t.type === categoryId);

  function copyPrompt(text, idx) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  }

  return (
    <section className="screen tool-category-view">
      <button className="link-back" onClick={onBack}>
        ← Volver al tablero
      </button>

      <div className="tool-category-view__head" style={{ borderColor: category.color }}>
        <span className="tool-category-view__icon">{category.icon}</span>
        <div>
          <h2>{category.label}</h2>
          <p className="muted">{category.description}</p>
        </div>
      </div>

      <div className="card">
        <h3>Estrategias básicas de uso</h3>
        <ol className="strategy-list">
          {category.strategies.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>

      <div className="card">
        <h3>Prompts recomendados</h3>
        <p className="muted small">Copia el prompt, reemplaza los [corchetes] y úsalo con un asistente IA.</p>
        <div className="prompt-list">
          {category.recommended_prompts.map((p, i) => (
            <div key={i} className="prompt-item">
              <p className="prompt-item__text">{p}</p>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => copyPrompt(p, i)}
              >
                {copiedIdx === i ? "Copiado" : "Copiar"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Herramientas para esta categoría</h3>
        <div className="teacher-note">
          <strong>Nota del profesor:</strong> {category.teacher_note}
        </div>
        <div className="tool-grid tool-grid--compact">
          {tools.map((t) => (
            <article key={t.tool_id} className="tool-card">
              <header>
                <h4>{t.name}</h4>
              </header>
              <p>{t.description}</p>
              <p className="muted small">Ejemplo: {t.example}</p>
              <div className="tool-card__meta">
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
          {tools.length === 0 && (
            <p className="muted">No hay herramientas específicas registradas para esta categoría aún.</p>
          )}
        </div>
      </div>
    </section>
  );
}

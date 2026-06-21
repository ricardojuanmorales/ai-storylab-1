import React from "react";

/**
 * Reusable ethical reflection input. Reinforces the pedagogical rule
 * that every mission needs a human decision and an ethical reflection.
 */
export default function EthicalReflectionBox({
  humanDecision,
  ethicalReflection,
  onChange,
}) {
  return (
    <div className="ethics-box">
      <div className="ethics-box__header">
        <span className="ethics-box__icon" aria-hidden="true">⚖️</span>
        <div>
          <h4>Tu huella humana</h4>
          <p className="muted">
            Antes de avanzar, deja una nota sobre tu decisión humana y tu
            reflexión ética. Esto alimenta tu portafolio.
          </p>
        </div>
      </div>

      <label className="field">
        <span>Decisión humana</span>
        <textarea
          rows={2}
          value={humanDecision}
          placeholder="¿Qué elegiste tú (no la IA) y por qué?"
          onChange={(e) => onChange("human_decision", e.target.value)}
        />
      </label>

      <label className="field">
        <span>Reflexión ética</span>
        <textarea
          rows={2}
          value={ethicalReflection}
          placeholder="¿Por qué tu decisión es justa, honesta y respetuosa?"
          onChange={(e) => onChange("ethical_reflection", e.target.value)}
        />
      </label>
    </div>
  );
}

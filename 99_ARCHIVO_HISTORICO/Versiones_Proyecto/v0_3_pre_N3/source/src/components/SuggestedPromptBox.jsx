import React, { useState } from "react";

export default function SuggestedPromptBox({ prompt, onUse }) {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  function handleUse() {
    navigator.clipboard.writeText(prompt).catch(() => {});
    onUse(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="suggested-prompt-box">
      <div className="suggested-prompt-box__header">
        <span className="suggested-prompt-box__badge">Prompt sugerido</span>
        <span className="suggested-prompt-box__hint">Cópialo, personaliza las partes entre [corchetes] y úsalo con un asistente IA</span>
      </div>
      <p className="suggested-prompt-box__text">{prompt}</p>
      <button className="btn btn--ghost btn--sm" type="button" onClick={handleUse}>
        {copied ? "Copiado y listo para usar" : "Copiar y usar como prompt"}
      </button>
    </div>
  );
}

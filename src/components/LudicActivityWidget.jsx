import React, { useState } from "react";

function countWords(text) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

function summarizeLudicOutput(config, data) {
  if (!config || !data) return "";
  switch (config.type) {
    case "ethics_dilemma": {
      const decisions = (config.dilemmas || [])
        .map((d, i) => {
          const verdict = data[`dilemma_${i}_verdict`] || "";
          const reason = data[`dilemma_${i}_reason`] || "";
          return verdict ? `"${d.slice(0, 40)}..." → ${verdict}${reason ? ` (${reason})` : ""}` : null;
        })
        .filter(Boolean)
        .join("; ");
      const manifesto = data.manifesto || "";
      return [decisions && `Dilemas: ${decisions}`, manifesto && `Manifiesto: ${manifesto}`]
        .filter(Boolean)
        .join(" | ");
    }
    case "word_counter": {
      const logline = data.logline || "";
      const parts = (config.extra_fields || [])
        .map((f) => (data[f.key] ? `${f.label}: ${data[f.key]}` : null))
        .filter(Boolean)
        .join("; ");
      return [logline && `Logline: "${logline}"`, parts].filter(Boolean).join(" | ");
    }
    case "card_form": {
      return (config.fields || [])
        .map((f) => (data[f.key] ? `${f.label}: ${data[f.key]}` : null))
        .filter(Boolean)
        .join(" | ");
    }
    case "three_acts": {
      return (config.acts || [])
        .map((a) => (data[a.key] ? `${a.label}: ${data[a.key]}` : null))
        .filter(Boolean)
        .join(" | ");
    }
    case "moodboard": {
      const slots = (config.slots || [])
        .map((s) => {
          const el = data[`slot_${s.index}_element`] || "";
          const why = data[`slot_${s.index}_reason`] || "";
          return el ? `${el}${why ? ` — ${why}` : ""}` : null;
        })
        .filter(Boolean)
        .join("; ");
      const style = data.style || "";
      return [slots && `Elementos: ${slots}`, style && `Estilo: ${style}`].filter(Boolean).join(" | ");
    }
    case "reflection_check": {
      return (config.fields || [])
        .map((f) => (data[f.key] ? `${f.label}: ${data[f.key]}` : null))
        .filter(Boolean)
        .join(" | ");
    }
    case "peer_feedback": {
      return (config.fields || [])
        .map((f) => (data[f.key] ? `${f.label}: ${data[f.key]}` : null))
        .filter(Boolean)
        .join(" | ");
    }
    case "checklist": {
      const checked = (config.items || [])
        .filter((item) => data[item.key])
        .map((item) => item.label.split(":")[0])
        .join(", ");
      const notes = data.notes || "";
      return [checked && `Verificado: ${checked}`, notes && `Notas: ${notes}`].filter(Boolean).join(" | ");
    }
    case "reflection": {
      return (config.fields || [])
        .map((f) => (data[f.key] ? `${f.label}: ${data[f.key]}` : null))
        .filter(Boolean)
        .join(" | ");
    }
    default:
      return "";
  }
}

// ── S1: Dilema ────────────────────────────────────────────────────────────────
function EthicsDilemma({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      {(config.dilemmas || []).map((dilemma, i) => (
        <div key={i} className="ludic-dilemma-item">
          <p className="ludic-dilemma-text">
            <strong>{i + 1}.</strong> {dilemma}
          </p>
          <div className="ludic-dilemma-options">
            {(config.options || []).map((opt) => (
              <button
                key={opt}
                type="button"
                className={`ludic-pill ${data[`dilemma_${i}_verdict`] === opt ? "ludic-pill--active" : ""}`}
                onClick={() => onChange(`dilemma_${i}_verdict`, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          {data[`dilemma_${i}_verdict`] && (
            <textarea
              className="ludic-textarea"
              rows={2}
              placeholder="¿Por qué tomaste esa decisión?"
              value={data[`dilemma_${i}_reason`] || ""}
              onChange={(e) => onChange(`dilemma_${i}_reason`, e.target.value)}
            />
          )}
        </div>
      ))}
      <label className="ludic-label">
        <span>{config.manifesto_label}</span>
        <textarea
          className="ludic-textarea"
          rows={4}
          placeholder={config.manifesto_placeholder}
          value={data.manifesto || ""}
          onChange={(e) => onChange("manifesto", e.target.value)}
        />
      </label>
    </div>
  );
}

// ── S2: Word Counter ──────────────────────────────────────────────────────────
function WordCounter({ config, data, onChange }) {
  const words = countWords(data.logline || "");
  const over = words > config.max_words;
  return (
    <div className="ludic-widget__body">
      <label className="ludic-label">
        <span>{config.logline_label}</span>
        <textarea
          className="ludic-textarea"
          rows={3}
          placeholder={config.logline_placeholder}
          value={data.logline || ""}
          onChange={(e) => onChange("logline", e.target.value)}
        />
        <span className={`ludic-word-count ${over ? "ludic-word-count--over" : ""}`}>
          {words} / {config.max_words} palabras {over && "— ¡demasiadas! recorta"}
        </span>
      </label>
      {(config.extra_fields || []).map((f) => (
        <label key={f.key} className="ludic-label">
          <span>{f.label}</span>
          <input
            className="ludic-input"
            type="text"
            placeholder={f.placeholder}
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

// ── S3: Card Form ─────────────────────────────────────────────────────────────
function CardForm({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body ludic-card-grid">
      {(config.fields || []).map((f) => (
        <label key={f.key} className="ludic-card-field">
          <span className="ludic-card-field__label">{f.label}</span>
          <textarea
            className="ludic-textarea"
            rows={2}
            placeholder={f.placeholder}
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

// ── S4: Three Acts ────────────────────────────────────────────────────────────
function ThreeActs({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body ludic-acts">
      {(config.acts || []).map((act) => (
        <div key={act.key} className="ludic-act" style={{ borderTopColor: act.color }}>
          <h5 className="ludic-act__label" style={{ color: act.color }}>
            {act.label}
          </h5>
          <textarea
            className="ludic-textarea"
            rows={4}
            placeholder={act.placeholder}
            value={data[act.key] || ""}
            onChange={(e) => onChange(act.key, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

// ── S5: Moodboard ─────────────────────────────────────────────────────────────
function Moodboard({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      {(config.slots || []).map((slot) => (
        <div key={slot.index} className="ludic-moodboard-slot">
          <label className="ludic-label">
            <span>{slot.element_label}</span>
            <input
              className="ludic-input"
              type="text"
              placeholder={slot.element_placeholder}
              value={data[`slot_${slot.index}_element`] || ""}
              onChange={(e) => onChange(`slot_${slot.index}_element`, e.target.value)}
            />
          </label>
          <label className="ludic-label">
            <span>{slot.reason_label}</span>
            <input
              className="ludic-input"
              type="text"
              placeholder={slot.reason_placeholder}
              value={data[`slot_${slot.index}_reason`] || ""}
              onChange={(e) => onChange(`slot_${slot.index}_reason`, e.target.value)}
            />
          </label>
        </div>
      ))}
      <label className="ludic-label">
        <span>{config.style_label}</span>
        <input
          className="ludic-input"
          type="text"
          placeholder={config.style_placeholder}
          value={data.style || ""}
          onChange={(e) => onChange("style", e.target.value)}
        />
      </label>
    </div>
  );
}

// ── S6: Reflection Check ──────────────────────────────────────────────────────
function ReflectionCheck({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      <p className="ludic-instructions">{config.instructions}</p>
      {(config.fields || []).map((f) => (
        <label key={f.key} className="ludic-label">
          <span>{f.label}</span>
          <textarea
            className="ludic-textarea"
            rows={3}
            placeholder={f.placeholder}
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

// ── S7: Peer Feedback ─────────────────────────────────────────────────────────
function PeerFeedback({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      {(config.fields || []).map((f) => (
        <label key={f.key} className="ludic-label">
          <span>{f.label}</span>
          <textarea
            className="ludic-textarea"
            rows={3}
            placeholder={f.placeholder}
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

// ── S8: Checklist ─────────────────────────────────────────────────────────────
function Checklist({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      <ul className="ludic-checklist">
        {(config.items || []).map((item) => (
          <li key={item.key} className="ludic-checklist-item">
            <label className="ludic-check-label">
              <input
                type="checkbox"
                checked={!!data[item.key]}
                onChange={(e) => onChange(item.key, e.target.checked)}
              />
              <span>{item.label}</span>
            </label>
          </li>
        ))}
      </ul>
      <label className="ludic-label">
        <span>{config.notes_label}</span>
        <textarea
          className="ludic-textarea"
          rows={3}
          placeholder={config.notes_placeholder}
          value={data.notes || ""}
          onChange={(e) => onChange("notes", e.target.value)}
        />
      </label>
    </div>
  );
}

// ── S9: Reflection ────────────────────────────────────────────────────────────
function Reflection({ config, data, onChange }) {
  return (
    <div className="ludic-widget__body">
      {(config.fields || []).map((f) => (
        <label key={f.key} className="ludic-label">
          <span>{f.label}</span>
          <textarea
            className="ludic-textarea"
            rows={f.key === "pitch" ? 5 : 3}
            placeholder={f.placeholder}
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

// ── Main widget ───────────────────────────────────────────────────────────────
export default function LudicActivityWidget({ config, savedOutput = {}, onSave }) {
  const [data, setData] = useState(savedOutput);
  const [saved, setSaved] = useState(false);

  if (!config) return null;

  function handleChange(key, value) {
    setSaved(false);
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    const summary = summarizeLudicOutput(config, data);
    onSave(data, summary);
    setSaved(true);
  }

  const widgets = {
    ethics_dilemma: EthicsDilemma,
    word_counter: WordCounter,
    card_form: CardForm,
    three_acts: ThreeActs,
    moodboard: Moodboard,
    reflection_check: ReflectionCheck,
    peer_feedback: PeerFeedback,
    checklist: Checklist,
    reflection: Reflection,
  };

  const Widget = widgets[config.type];

  return (
    <div className="ludic-widget">
      <div className="ludic-widget__header">
        <span className="ludic-widget__badge">Actividad</span>
        <h4 className="ludic-widget__title">{config.title}</h4>
        {config.instructions && config.type !== "reflection_check" && (
          <p className="ludic-widget__instructions">{config.instructions}</p>
        )}
      </div>

      {Widget ? (
        <Widget config={config} data={data} onChange={handleChange} />
      ) : (
        <p className="muted">Actividad no configurada.</p>
      )}

      <div className="ludic-widget__footer">
        <button className="btn btn--ghost btn--sm" type="button" onClick={handleSave}>
          Guardar actividad
        </button>
        {saved && (
          <span className="ludic-saved-msg">Guardado — esta producción pasará a tu portafolio.</span>
        )}
      </div>
    </div>
  );
}

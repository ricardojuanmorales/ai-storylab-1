import React, { useState } from "react";
import MentorAvatarCard from "./MentorAvatarCard.jsx";
import { updateFinalSubmission } from "../utils/finalSubmission.js";

/**
 * Final Submission Station.
 * IMPORTANT: the video file is NEVER stored. Only metadata + location.
 */
export default function FinalSubmissionPanel({ progress, onUpdate }) {
  const [draft, setDraft] = useState(progress.final_submission);
  const [saved, setSaved] = useState(false);

  function set(field, value) {
    setDraft((d) => ({ ...d, [field]: value }));
    setSaved(false);
  }

  function handleSave() {
    const next = updateFinalSubmission(progress.final_submission, draft);
    setDraft(next);
    onUpdate(next);
    setSaved(true);
  }

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Estación de Entrega Final</h2>
        <p className="muted">Registra los metadatos de tu video. El archivo se entrega aparte.</p>
      </div>

      <MentorAvatarCard
        compact
        message="La entrega final queda registrada aquí. El archivo de video vive en el espacio indicado por el facilitador."
      />

      <div className="notice notice--video">
        El video final no se guarda dentro de esta aplicación. Esta app solo registra
        el estado, nombre, ubicación y validaciones de entrega.
      </div>

      <div className="card">
        <h3>Datos del video</h3>
        <div className="grid-2">
          <label className="field">
            <span>¿Video requerido?</span>
            <select value={String(draft.video_required)} onChange={(e) => set("video_required", e.target.value === "true")}>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </label>
          <label className="field">
            <span>Estado del video</span>
            <select value={draft.video_status} onChange={(e) => set("video_status", e.target.value)}>
              <option value="pending">Pendiente</option>
              <option value="submitted">Entregado</option>
              <option value="validated">Validado</option>
            </select>
          </label>
          <label className="field">
            <span>Nombre del archivo de video</span>
            <input value={draft.video_file_name} placeholder="mi-historia.mp4" onChange={(e) => set("video_file_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Formato</span>
            <input value={draft.video_format} placeholder="mp4" onChange={(e) => set("video_format", e.target.value)} />
          </label>
          <label className="field">
            <span>Duración (minutos)</span>
            <input type="number" min="0" step="0.1" value={draft.video_duration_minutes} onChange={(e) => set("video_duration_minutes", e.target.value)} />
          </label>
          <label className="field">
            <span>Tamaño (MB)</span>
            <input type="number" min="0" step="0.1" value={draft.video_size_mb} onChange={(e) => set("video_size_mb", e.target.value)} />
          </label>
          <label className="field">
            <span>Ubicación de entrega</span>
            <input value={draft.submission_location} placeholder="Ej.: carpeta del facilitador" onChange={(e) => set("submission_location", e.target.value)} />
          </label>
          <label className="field">
            <span>Enlace privado (opcional)</span>
            <input value={draft.private_link} placeholder="enlace compartido con el facilitador" onChange={(e) => set("private_link", e.target.value)} />
          </label>
        </div>
      </div>

      <div className="card">
        <h3>Archivos relacionados</h3>
        <div className="grid-2">
          <label className="field">
            <span>Archivo PowerPoint</span>
            <input value={draft.powerpoint_file_name} placeholder="mi-historia.pptx" onChange={(e) => set("powerpoint_file_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Archivo de portafolio</span>
            <input value={draft.portfolio_file_name} placeholder="portafolio.docx" onChange={(e) => set("portfolio_file_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Archivo JSON exportado</span>
            <input value={draft.json_export_file_name} placeholder="ai-storylab-progreso-...json" onChange={(e) => set("json_export_file_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Licencia</span>
            <input value={draft.license} placeholder="Ej.: CC BY-NC" onChange={(e) => set("license", e.target.value)} />
          </label>
        </div>
      </div>

      <div className="card">
        <h3>Validaciones</h3>
        <div className="checks">
          <label className="check">
            <input type="checkbox" checked={draft.ai_use_declaration_confirmed} onChange={(e) => set("ai_use_declaration_confirmed", e.target.checked)} />
            <span>Confirmo la declaración de uso de IA</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={draft.credits_confirmed} onChange={(e) => set("credits_confirmed", e.target.checked)} />
            <span>Confirmo los créditos y atribuciones</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={draft.privacy_review_confirmed} onChange={(e) => set("privacy_review_confirmed", e.target.checked)} />
            <span>Confirmo la revisión de privacidad</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={draft.gallery_candidate_interest} onChange={(e) => set("gallery_candidate_interest", e.target.checked)} />
            <span>Me interesa ser candidato/a a la galería</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={draft.public_author_option} onChange={(e) => set("public_author_option", e.target.checked)} />
            <span>Autorizo mostrar mi autoría públicamente</span>
          </label>
        </div>

        <label className="field">
          <span>Validación del facilitador</span>
          <select value={draft.facilitator_validation_status} onChange={(e) => set("facilitator_validation_status", e.target.value)}>
            <option value="pending">Pendiente</option>
            <option value="approved">Aprobado</option>
            <option value="needs_changes">Requiere cambios</option>
          </select>
        </label>

        <label className="field">
          <span>Notas</span>
          <textarea rows={2} value={draft.notes} onChange={(e) => set("notes", e.target.value)} />
        </label>
      </div>

      {saved && <div className="flash flash--ok">La entrega final quedó registrada.</div>}

      <div className="actions">
        <button className="btn" onClick={handleSave}>Guardar entrega final</button>
      </div>
    </section>
  );
}

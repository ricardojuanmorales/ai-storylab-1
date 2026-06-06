import React, { useRef, useState } from "react";
import MentorAvatarCard from "./MentorAvatarCard.jsx";
import { downloadProgressJSON, importStudentProgressFile } from "../utils/exportImport.js";

/**
 * Export / import individual student progress as JSON.
 * Warns before replacing local progress.
 */
export default function ExportImportPanel({ progress, hasProfile, onReplaceProgress }) {
  const fileRef = useRef(null);
  const [pending, setPending] = useState(null); // validated data awaiting confirmation
  const [report, setReport] = useState(null);

  function handleExport() {
    const name = downloadProgressJSON(progress);
    setReport({ type: "ok", text: `Progreso exportado como “${name}”. Tu progreso viaja contigo en este archivo JSON.` });
  }

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setReport(null);
    setPending(null);
    try {
      const result = await importStudentProgressFile(file);
      if (!result.valid) {
        setReport({ type: "error", text: `No se pudo importar: ${result.errors.join(" ")}` });
      } else {
        setPending({ data: result.data, warnings: result.warnings, fileName: file.name });
      }
    } catch (err) {
      setReport({ type: "error", text: err.message });
    } finally {
      e.target.value = ""; // allow re-importing the same file
    }
  }

  function confirmReplace() {
    onReplaceProgress(pending.data);
    setReport({ type: "ok", text: "Progreso importado y restaurado en este navegador." });
    setPending(null);
  }

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Exportar / Importar</h2>
        <p className="muted">Respalda o restaura tu progreso individual con un archivo JSON.</p>
      </div>

      <MentorAvatarCard compact message="Tu progreso viaja contigo en este archivo JSON. Guárdalo como respaldo." />

      <div className="grid-2">
        <div className="card">
          <h3>Exportar</h3>
          <p className="muted">Descarga todo tu historial acumulado en un archivo JSON.</p>
          <button className="btn" onClick={handleExport} disabled={!hasProfile}>
            Exportar progreso
          </button>
          {!hasProfile && <p className="muted small">Crea tu perfil para poder exportar.</p>}
        </div>

        <div className="card">
          <h3>Importar</h3>
          <p className="muted">Carga un archivo de progreso para restaurarlo en este navegador.</p>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={handleFile} hidden />
          <button className="btn btn--ghost" onClick={() => fileRef.current?.click()}>
            Elegir archivo JSON
          </button>
        </div>
      </div>

      {pending && (
        <div className="notice notice--warn">
          <p>
            <strong>Advertencia:</strong> importar “{pending.fileName}” reemplazará el progreso
            local actual de <strong>{progress.profile.display_name || "este navegador"}</strong>.
          </p>
          {pending.warnings.length > 0 && (
            <ul className="muted small">
              {pending.warnings.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          )}
          <div className="actions">
            <button className="btn" onClick={confirmReplace}>Reemplazar progreso</button>
            <button className="btn btn--ghost" onClick={() => setPending(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {report && <div className={`flash flash--${report.type}`}>{report.text}</div>}
    </section>
  );
}

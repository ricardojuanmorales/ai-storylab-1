import React, { useRef, useState } from "react";
import sessionsData from "../data/sessions.json";
import MentorAvatarCard from "./MentorAvatarCard.jsx";
import {
  importStudentFilesIntoGroup,
  downloadGroupProgress,
} from "../utils/groupImport.js";
import { createDefaultGroupProgress } from "../templates/defaultGroupProgress.js";

const SESSION_IDS = sessionsData.sessions.map((s) => s.session_id);

const CELL = {
  not_started: { txt: "·", cls: "cell--none", title: "No iniciada" },
  in_progress: { txt: "◐", cls: "cell--progress", title: "En progreso" },
  pending_review: { txt: "?", cls: "cell--review", title: "Pendiente de revisión" },
  completed: { txt: "✓", cls: "cell--done", title: "Completada" },
};

/**
 * Facilitator group dashboard: import many student JSONs, merge, view table.
 */
export default function GroupDashboard({ group, onUpdateGroup }) {
  const fileRef = useRef(null);
  const [results, setResults] = useState([]);
  const [busy, setBusy] = useState(false);

  const g = group || createDefaultGroupProgress();
  const agg = g.aggregate || {};

  async function handleFiles(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setBusy(true);
    try {
      const { group: nextGroup, results: res } = await importStudentFilesIntoGroup(g, files);
      onUpdateGroup(nextGroup);
      setResults(res);
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  function handleExport() {
    downloadGroupProgress(g);
  }

  function handleReset() {
    if (window.confirm("¿Vaciar el dashboard grupal? Esto no afecta los archivos de los estudiantes.")) {
      onUpdateGroup(createDefaultGroupProgress());
      setResults([]);
    }
  }

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Dashboard Grupal (Facilitador)</h2>
        <p className="muted">
          Importa varios archivos JSON de estudiantes. Se fusionan por código sin borrar a los demás.
        </p>
      </div>

      <MentorAvatarCard
        compact
        name="Panel del facilitador"
        message="Importa los JSON de tu cohorte. Si un estudiante ya existe, se conserva el progreso más reciente."
      />

      <div className="actions">
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          multiple
          hidden
          onChange={handleFiles}
        />
        <button className="btn" onClick={() => fileRef.current?.click()} disabled={busy}>
          {busy ? "Importando…" : "Importar JSON de estudiantes"}
        </button>
        <button className="btn btn--ghost" onClick={handleExport} disabled={g.students.length === 0}>
          Exportar group_progress.json
        </button>
        <button className="btn btn--ghost" onClick={handleReset} disabled={g.students.length === 0}>
          Vaciar dashboard
        </button>
      </div>

      {results.length > 0 && (
        <div className="import-report">
          <h4>Resultado de la importación</h4>
          <ul>
            {results.map((r, i) => (
              <li key={i} className={`import-report__item is-${r.status}`}>
                <strong>{r.fileName}</strong>: {r.status}
                {r.errors?.length ? ` — ${r.errors.join(" ")}` : ""}
                {r.warnings?.length ? (
                  <span className="muted small"> ({r.warnings.join(" ")})</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}

      {g.students.length > 0 ? (
        <>
          <div className="agg-grid">
            <Agg label="Estudiantes" value={agg.total_students} />
            <Agg label="Prom. sesiones" value={agg.avg_sessions_completed} />
            <Agg label="Insignias" value={agg.badges_awarded_total} />
            <Agg label="Prom. portafolio" value={agg.avg_portfolio_completed} />
            <Agg label="Videos entregados" value={agg.videos_submitted} />
            <Agg label="Videos pendientes" value={agg.videos_pending} />
            <Agg label="Declaraciones IA" value={agg.ai_declarations_confirmed} />
            <Agg label="Candidatos galería" value={agg.gallery_candidates} />
          </div>

          <div className="per-session">
            {SESSION_IDS.map((id) => (
              <div key={id} className="per-session__item">
                <span className="per-session__id">{id}</span>
                <span className="per-session__count">{agg.per_session_completed?.[id] || 0}</span>
              </div>
            ))}
          </div>

          <div className="table-wrap">
            <table className="group-table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Proyecto</th>
                  {SESSION_IDS.map((id) => (
                    <th key={id} title={id}>{id}</th>
                  ))}
                  <th>Insignias</th>
                  <th>Portaf.</th>
                  <th>Video</th>
                  <th>Decl. IA</th>
                  <th>Galería</th>
                </tr>
              </thead>
              <tbody>
                {g.students.map((s) => (
                  <tr key={s.student_code}>
                    <td>{s.student_code}</td>
                    <td>{s.display_name}</td>
                    <td>{s.project_title || "—"}</td>
                    {SESSION_IDS.map((id) => {
                      const cell = CELL[s.sessions_status?.[id] || "not_started"];
                      return (
                        <td key={id} className={`cell ${cell.cls}`} title={cell.title}>
                          {cell.txt}
                        </td>
                      );
                    })}
                    <td>{s.badges_awarded}/9</td>
                    <td>{s.portfolio_completed}/{s.portfolio_expected}</td>
                    <td>
                      <span className={`pill pill--video-${s.video_status}`}>{s.video_status}</span>
                    </td>
                    <td>{s.ai_use_declaration_confirmed ? "✓" : "—"}</td>
                    <td>{s.gallery_candidate_interest ? "★" : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="muted">Aún no hay estudiantes importados. Carga archivos JSON para empezar.</p>
      )}
    </section>
  );
}

function Agg({ label, value }) {
  return (
    <div className="agg">
      <div className="agg__value">{value ?? 0}</div>
      <div className="agg__label">{label}</div>
    </div>
  );
}

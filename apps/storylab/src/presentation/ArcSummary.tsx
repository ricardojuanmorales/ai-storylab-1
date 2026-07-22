import { useEffect, useState } from "react";
import type { StoryLabUseCases } from "../application";
import type { CreativeProject } from "../domain/model";
import {
  missionStatusLabel,
  selectArcSummarySnapshot,
} from "./arc-summary-model";

export interface ArcSummaryProps {
  readonly project: CreativeProject;
  readonly useCases: StoryLabUseCases;
  readonly onMessage: (message: string) => void;
}

export function ArcSummary({
  project,
  useCases,
  onMessage,
}: ArcSummaryProps) {
  const snapshot = selectArcSummarySnapshot(project);
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    setPreview(null);
  }, [project.updatedAt]);

  const prepareFinalPreview = async () => {
    setBusy(true);
    try {
      const result = await useCases.previewExport({
        projectId: project.id,
      });
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }

      setPreview(JSON.stringify(result.value, null, 2));
      onMessage(
        "La vista previa final fue validada en memoria. La descarga portátil se prepara por separado en Transferir portafolio.",
      );
    } catch {
      onMessage("Ocurrió un error inesperado al preparar la vista previa.");
    } finally {
      setBusy(false);
    }
  };

  const readinessMessage = snapshot.curationNeedsReview
    ? "La curaduría requiere revisión porque cambió una evidencia fuente."
    : snapshot.completedMissionCount < snapshot.canonicalMissionCount
      ? "Completa o revisa las cuatro misiones antes del preview final."
      : snapshot.portfolio.length === 0
        ? "Selecciona al menos una evidencia para el portafolio."
        : "El arco está listo para una vista previa final validada.";

  return (
    <section
      id="resumen-arco"
      className="panel arc-summary"
      aria-labelledby="arc-summary-title"
    >
      <header className="arc-summary-header">
        <div>
          <p className="eyebrow">Integración transversal · H08-5.5</p>
          <h2 id="arc-summary-title">Resumen transversal del arco</h2>
            <p>
              Reúne el estado de M1–M4 y la curaduría vigente. La creación del
              archivo portátil permanece separada en Transferir portafolio.
            </p>
        </div>
        <p className="status-badge">
          {snapshot.completedMissionCount} de{" "}
          {snapshot.canonicalMissionCount} misiones completadas
        </p>
      </header>

      <ol className="arc-mission-grid" aria-label="Estado de las cuatro misiones">
        {snapshot.missions.map((mission) => (
          <li key={mission.definition.id as string}>
            <article>
              <h3>{mission.definition.title}</h3>
              <p className="arc-mission-status">
                {missionStatusLabel(mission.status)}
              </p>
              <dl>
                <div>
                  <dt>Actividades</dt>
                  <dd>{mission.activityCount}</dd>
                </div>
                <div>
                  <dt>Evidencias</dt>
                  <dd>{mission.evidenceCount}</dd>
                </div>
                <div>
                  <dt>Decisiones</dt>
                  <dd>{mission.decisionCount}</dd>
                </div>
                <div>
                  <dt>Reflexiones</dt>
                  <dd>{mission.reflectionCount}</dd>
                </div>
              </dl>
            </article>
          </li>
        ))}
      </ol>

      {snapshot.curationNeedsReview ? (
        <p className="memory-warning" role="alert">
          La curaduría requiere revisión: una evidencia seleccionada dejó de
          tener aceptación humana vigente o cambió el orden del portafolio.
        </p>
      ) : null}

      <div className="arc-summary-columns">
        <section aria-labelledby="arc-portfolio-title">
          <p className="step-kicker">Portafolio vigente</p>
          <h3 id="arc-portfolio-title">Selección final ordenada</h3>
          {snapshot.portfolio.length > 0 ? (
            <ol aria-label="Portafolio final ordenado">
              {snapshot.portfolio.map(({ item, evidenceTitle }) => (
                <li key={item.id as string}>{evidenceTitle}</li>
              ))}
            </ol>
          ) : (
            <p>Todavía no hay evidencias curadas.</p>
          )}
        </section>

        <section aria-labelledby="arc-privacy-title">
          <p className="step-kicker">Privacidad y salida</p>
          <h3 id="arc-privacy-title">Control final</h3>
          <p>
            Reflexiones privadas conservadas localmente:{" "}
            <strong>{snapshot.privateReflectionCount}</strong>
          </p>
          <p>{readinessMessage}</p>
          <button
            type="button"
            className="primary-action"
            onClick={prepareFinalPreview}
            disabled={busy || !snapshot.readyForFinalPreview}
          >
            Preparar vista previa final validada
          </button>
        </section>
      </div>

      {preview ? (
        <section
          className="preview-panel arc-final-preview"
          aria-labelledby="arc-final-preview-title"
        >
          <h3 id="arc-final-preview-title">
            Vista previa final del arco
          </h3>
          <p>
            El contenido fue validado y permanece en memoria. Para crear el
            archivo revisable, continúa en Transferir portafolio.
          </p>
          <pre aria-label="Vista previa final validada">{preview}</pre>
        </section>
      ) : null}
    </section>
  );
}

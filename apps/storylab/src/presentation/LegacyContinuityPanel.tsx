import type { LegacyMvpContinuitySummary } from "../adapters/storage/legacy-mvp-continuity";

export interface LegacyContinuityPanelProps {
  readonly summary: LegacyMvpContinuitySummary;
  readonly legacyAppUrl: string;
  readonly legacyBridgeUrl: string;
}

export function LegacyContinuityPanel({
  summary,
  legacyAppUrl,
  legacyBridgeUrl,
}: LegacyContinuityPanelProps) {
  const message = !summary.storageAvailable
    ? "El almacenamiento local no está disponible. La aplicación histórica y la guía de respaldo permanecen accesibles."
    : summary.hasLegacyData
      ? "Se detectaron datos del MVP v0.3.0. No se convertirán ni borrarán automáticamente."
      : "No se detectaron claves legacy en este navegador. Las rutas históricas permanecen disponibles.";
  return (
    <section id="continuidad-legacy" className="panel legacy-continuity-panel" aria-labelledby="legacy-continuity-title">
      <div className="section-heading">
        <p className="eyebrow">Preservación v0.3.0</p>
        <h2 id="legacy-continuity-title">Continuidad del MVP histórico</h2>
        <p>{message}</p>
      </div>
      {summary.invalidJsonKeys.length > 0 ? (
        <p className="legacy-warning" role="alert">
          Existen claves históricas que no contienen JSON válido. El puente puede respaldar su texto exacto sin modificarlo.
        </p>
      ) : null}
      <div className="legacy-continuity-actions">
        <a href={legacyAppUrl}>Abrir v0.3.0</a>
        <a href={legacyBridgeUrl}>Revisar y respaldar datos legacy</a>
      </div>
    </section>
  );
}

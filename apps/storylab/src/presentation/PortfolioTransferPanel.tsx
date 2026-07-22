import {
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import {
  HUMAN_EXPORT_CONFIRMATION,
  HUMAN_IMPORT_CONFIRMATION,
  type PortfolioExportPreview,
  type PortfolioImportPreview,
  type StoryLabUseCases,
} from "../application";
import type { CreativeProject } from "../domain/model";
import type { PersistenceMode } from "./persistence-mode";
import type { PortfolioTransferRuntime } from "./portfolio-transfer-runtime";

type TransferOperation =
  | "prepare-export"
  | "confirm-export"
  | "stage-import"
  | "confirm-import"
  | null;

export interface PortfolioTransferPanelProps {
  readonly project: CreativeProject | null;
  readonly runtime: PortfolioTransferRuntime;
  readonly persistenceMode: PersistenceMode;
  readonly recoverProject: StoryLabUseCases["recoverProject"];
  readonly onProjectImported: (
    project: CreativeProject,
  ) => void;
  readonly onMessage: (message: string) => void;
}

const formatBytes = (value: number): string =>
  `${new Intl.NumberFormat("es-PR").format(value)} bytes`;

const formatDate = (value: string): string =>
  new Date(value).toLocaleString("es-PR", {
    dateStyle: "medium",
    timeStyle: "short",
  });

export function PortfolioTransferPanel({
  project,
  runtime,
  persistenceMode,
  recoverProject,
  onProjectImported,
  onMessage,
}: PortfolioTransferPanelProps) {
  const [operation, setOperation] =
    useState<TransferOperation>(null);
  const [exportPreview, setExportPreview] =
    useState<PortfolioExportPreview | null>(null);
  const [importPreview, setImportPreview] =
    useState<PortfolioImportPreview | null>(null);

  useEffect(() => {
    setExportPreview((current) => {
      if (current !== null) {
        runtime.exportService.discard(current.previewId);
      }
      return null;
    });
  }, [
    project?.id,
    project?.updatedAt,
    runtime.exportService,
  ]);

  const prepareExport = async () => {
    if (project === null) {
      onMessage(
        "Crea o importa un proyecto antes de preparar un archivo de portafolio.",
      );
      return;
    }

    setOperation("prepare-export");
    try {
      if (exportPreview !== null) {
        runtime.exportService.discard(
          exportPreview.previewId,
        );
      }

      const result =
        await runtime.exportService.prepare({
          projectId: project.id,
        });
      if (!result.ok) {
        setExportPreview(null);
        onMessage(result.error.safeMessage);
        return;
      }

      setExportPreview(result.value);
      onMessage(
        "Archivo preparado en memoria. Revisa el resumen antes de confirmar la descarga.",
      );
    } catch {
      onMessage(
        "Ocurrió un error inesperado al preparar el archivo de portafolio.",
      );
    } finally {
      setOperation(null);
    }
  };

  const confirmExport = async () => {
    if (exportPreview === null) return;

    setOperation("confirm-export");
    try {
      const result =
        await runtime.exportService.confirm({
          previewId: exportPreview.previewId,
          confirmation: HUMAN_EXPORT_CONFIRMATION,
        });
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }

      setExportPreview(null);
      onMessage(
        `Descarga local iniciada: ${result.value.fileName}.`,
      );
    } catch {
      onMessage(
        "Ocurrió un error inesperado al confirmar la descarga.",
      );
    } finally {
      setOperation(null);
    }
  };

  const discardExport = () => {
    if (exportPreview !== null) {
      runtime.exportService.discard(
        exportPreview.previewId,
      );
    }
    setExportPreview(null);
    onMessage(
      "La vista previa de exportación fue descartada sin descargar.",
    );
  };

  const selectImportFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";
    if (file === undefined) return;

    setOperation("stage-import");
    try {
      if (importPreview !== null) {
        runtime.importStaging.discard(
          importPreview.stagingId,
        );
      }

      const result =
        await runtime.importStaging.stage(
          runtime.toUntrustedLocalFile(file),
        );
      if (!result.ok) {
        setImportPreview(null);
        onMessage(result.error.safeMessage);
        return;
      }

      setImportPreview(result.value);
      onMessage(
        "El archivo superó las validaciones locales. Revisa el candidato antes de importar.",
      );
    } catch {
      setImportPreview(null);
      onMessage(
        "Ocurrió un error inesperado al revisar el archivo seleccionado.",
      );
    } finally {
      setOperation(null);
    }
  };

  const confirmImport = async () => {
    if (importPreview === null) return;

    setOperation("confirm-import");
    try {
      const result =
        await runtime.importService.confirm({
          stagingId: importPreview.stagingId,
          confirmation: HUMAN_IMPORT_CONFIRMATION,
        });
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }

      const recovered = await recoverProject();
      if (!recovered.ok) {
        onMessage(recovered.error.safeMessage);
        return;
      }
      if (recovered.value === null) {
        onMessage(
          "La copia importada se guardó, pero no pudo recuperarse como proyecto reciente.",
        );
        return;
      }

      setImportPreview(null);
      onProjectImported(recovered.value);
      onMessage(
        result.value.migrationApplied
          ? "Portafolio alpha.1 migrado e importado como copia local alpha.2."
          : "Portafolio importado como una copia local nueva.",
      );
    } catch {
      onMessage(
        "Ocurrió un error inesperado al confirmar la importación.",
      );
    } finally {
      setOperation(null);
    }
  };

  const discardImport = () => {
    if (importPreview !== null) {
      runtime.importStaging.discard(
        importPreview.stagingId,
      );
    }
    setImportPreview(null);
    onMessage(
      "El candidato de importación fue descartado sin modificar el proyecto local.",
    );
  };

  const busy = operation !== null;

  return (
    <section
      id="transferencia-portafolio"
      className="panel portfolio-transfer"
      aria-labelledby="portfolio-transfer-title"
    >
      <header className="portfolio-transfer-header">
        <div>
          <p className="eyebrow">
            Transferencia local gobernada · H08-5.5
          </p>
          <h2 id="portfolio-transfer-title">
            Exportar e importar el portafolio
          </h2>
          <p>
            Los archivos permanecen en este dispositivo.
            Preparar no descarga, seleccionar no importa y
            confirmar no publica.
          </p>
        </div>
        <p className="status-badge">
          {persistenceMode === "local"
            ? "Copia persistente local"
            : "Copia durante esta sesión"}
        </p>
      </header>

      <div className="transfer-grid">
        <article
          className="transfer-card"
          aria-labelledby="portfolio-export-title"
        >
          <p className="step-kicker">Salida revisable</p>
          <h3 id="portfolio-export-title">
            Crear archivo de portafolio
          </h3>
          <p>
            La proyección excluye reflexiones privadas y
            genera un checksum SHA-256 antes de ofrecer la
            descarga.
          </p>
          <button
            type="button"
            className="primary-action"
            onClick={prepareExport}
            disabled={busy || project === null}
          >
            Preparar archivo de portafolio
          </button>
          {project === null ? (
            <p className="transfer-guidance">
              La exportación estará disponible después de
              crear o importar un proyecto con portafolio.
            </p>
          ) : null}

          {exportPreview !== null ? (
            <section
              className="transfer-preview"
              aria-labelledby="portfolio-export-preview-title"
            >
              <h4 id="portfolio-export-preview-title">
                Revisar archivo antes de descargar
              </h4>
              <p>
                Esta vista previa todavía no ha iniciado
                ninguna descarga.
              </p>
              <dl className="preview-summary">
                <div>
                  <dt>Proyecto</dt>
                  <dd>{exportPreview.projectTitle}</dd>
                </div>
                <div>
                  <dt>Archivo</dt>
                  <dd>{exportPreview.fileName}</dd>
                </div>
                <div>
                  <dt>Elementos</dt>
                  <dd>{exportPreview.portfolioItemCount}</dd>
                </div>
                <div>
                  <dt>Reflexiones compartibles</dt>
                  <dd>{exportPreview.reflectionCount}</dd>
                </div>
                <div>
                  <dt>Tamaño</dt>
                  <dd>{formatBytes(exportPreview.byteLength)}</dd>
                </div>
                <div>
                  <dt>Preparado</dt>
                  <dd>{formatDate(exportPreview.exportedAt)}</dd>
                </div>
              </dl>
              <p className="checksum-line">
                <strong>SHA-256:</strong>{" "}
                <code>{exportPreview.checksum}</code>
              </p>
              <div
                className="transfer-actions"
                aria-label="Confirmación de descarga"
              >
                <button
                  type="button"
                  className="primary-action"
                  onClick={confirmExport}
                  disabled={busy}
                >
                  Confirmar y descargar archivo
                </button>
                <button
                  type="button"
                  className="secondary-action"
                  onClick={discardExport}
                  disabled={busy}
                >
                  Descartar vista previa
                </button>
              </div>
            </section>
          ) : null}
        </article>

        <article
          className="transfer-card"
          aria-labelledby="portfolio-import-title"
        >
          <p className="step-kicker">Entrada no confiable</p>
          <h3 id="portfolio-import-title">
            Importar como copia local
          </h3>
          <p>
            El archivo se limita, valida y compara antes de
            permitir una copia. El proyecto fuente nunca se
            sobrescribe.
          </p>
          <label
            className="file-control"
            htmlFor="portfolio-import-file"
          >
            <span>Seleccionar archivo de portafolio</span>
            <input
              id="portfolio-import-file"
              type="file"
              aria-label="Seleccionar archivo de portafolio"
              accept=".storylab.json,application/json"
              onChange={selectImportFile}
              disabled={busy}
            />
            <small>
              Máximo 1 MiB. Formato
              storylab_portfolio/1.0.0.
            </small>
          </label>

          {importPreview !== null ? (
            <section
              className="transfer-preview"
              aria-labelledby="portfolio-import-preview-title"
            >
              <h4 id="portfolio-import-preview-title">
                Revisar portafolio antes de importar
              </h4>
              <p>
                Validar el archivo no modifica el
                almacenamiento. La copia se crea solo tras la
                siguiente confirmación.
              </p>
              <dl className="preview-summary">
                <div>
                  <dt>Proyecto</dt>
                  <dd>{importPreview.projectTitle}</dd>
                </div>
                <div>
                  <dt>Archivo</dt>
                  <dd>{importPreview.fileName}</dd>
                </div>
                <div>
                  <dt>Versión fuente</dt>
                  <dd>{importPreview.sourceProjectSchemaVersion}</dd>
                </div>
                <div>
                  <dt>Versión candidata</dt>
                  <dd>{importPreview.candidateProjectSchemaVersion}</dd>
                </div>
                <div>
                  <dt>Migración</dt>
                  <dd>
                    {importPreview.migrationApplied
                      ? "Requerida y validada"
                      : "No requerida"}
                  </dd>
                </div>
                <div>
                  <dt>Tamaño</dt>
                  <dd>{formatBytes(importPreview.byteLength)}</dd>
                </div>
                <div>
                  <dt>Elementos</dt>
                  <dd>{importPreview.portfolioItemCount}</dd>
                </div>
                <div>
                  <dt>Reflexiones compartibles</dt>
                  <dd>{importPreview.reflectionCount}</dd>
                </div>
                <div>
                  <dt>Profundidad</dt>
                  <dd>{importPreview.structure.maximumDepth}</dd>
                </div>
                <div>
                  <dt>Nodos JSON</dt>
                  <dd>{importPreview.structure.structuralNodes}</dd>
                </div>
              </dl>
              <p className="checksum-line">
                <strong>SHA-256 verificado:</strong>{" "}
                <code>{importPreview.checksum}</code>
              </p>
              <div
                className="transfer-actions"
                aria-label="Confirmación de importación"
              >
                <button
                  type="button"
                  className="primary-action"
                  onClick={confirmImport}
                  disabled={busy}
                >
                  Confirmar e importar como copia local
                </button>
                <button
                  type="button"
                  className="secondary-action"
                  onClick={discardImport}
                  disabled={busy}
                >
                  Descartar candidato
                </button>
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </section>
  );
}

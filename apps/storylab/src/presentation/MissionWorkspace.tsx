import { useState, type FormEvent } from "react";
import type { StoryLabUseCases } from "../application";
import type {
  CreativeProject,
  ExportPackage,
  MissionDefinition,
} from "../domain/model";
import type {
  HumanDecisionValue,
  MissionId,
} from "../domain/types";
import { MissionNavigation } from "./MissionNavigation";
import { selectMissionWorkspaceSnapshot } from "./mission-workspace-model";
import type { PersistenceMode } from "./persistence-mode";

export interface MissionWorkspaceCopy {
  readonly eyebrow: string;
  readonly activityTitle: string;
  readonly activityLabel: string;
  readonly activityHelp: string;
  readonly evidenceTitle: string;
  readonly evidenceHelp: string;
  readonly evidenceTitleLabel: string;
  readonly evidenceSummaryLabel: string;
}

export interface MissionWorkspaceProps {
  readonly definition: MissionDefinition;
  readonly missionLabel: string;
  readonly copy: MissionWorkspaceCopy;
  readonly project: CreativeProject;
  readonly useCases: StoryLabUseCases;
  readonly persistenceMode: PersistenceMode;
  readonly onProjectChange: (project: CreativeProject) => void;
  readonly onProjectDeleted: () => void;
  readonly onMessage: (message: string) => void;
  readonly onSelectMission: (missionId: MissionId) => void;
}

const DECISION_OPTIONS: readonly {
  readonly value: HumanDecisionValue;
  readonly label: string;
  readonly description: string;
}[] = [
  {
    value: "accept",
    label: "Aceptar",
    description: "La evidencia representa mi intención y puede ser curada.",
  },
  {
    value: "revise",
    label: "Revisar",
    description: "Deseo volver al borrador y transformar la evidencia.",
  },
  {
    value: "reject",
    label: "Rechazar",
    description: "Cierro esta versión sin incorporarla al portafolio.",
  },
  {
    value: "defer",
    label: "Decidir más tarde",
    description: "La evidencia permanece lista para revisión.",
  },
];

export function MissionWorkspace({
  definition,
  missionLabel,
  copy,
  project,
  useCases,
  persistenceMode,
  onProjectChange,
  onProjectDeleted,
  onMessage,
  onSelectMission,
}: MissionWorkspaceProps) {
  const {
    mission,
    primaryActivity: activity,
    primaryEvidence: evidence,
    primaryReflection: reflection,
    primaryDecision: decision,
    primaryPortfolioItem: portfolioItem,
  } = selectMissionWorkspaceSnapshot(project, definition.id);

  const [busy, setBusy] = useState(false);
  const [activityText, setActivityText] = useState(activity?.text ?? "");
  const [evidenceTitle, setEvidenceTitle] = useState(evidence?.title ?? "");
  const [evidenceSummary, setEvidenceSummary] = useState(
    evidence?.summary ?? "",
  );
  const [reflectionText, setReflectionText] = useState(reflection?.text ?? "");
  const [decisionValue, setDecisionValue] = useState<
    HumanDecisionValue | ""
  >("");
  const [rationale, setRationale] = useState("");
  const [exportPreview, setExportPreview] =
    useState<ExportPackage | null>(null);
  const [deleteArmed, setDeleteArmed] = useState(false);

  const apply = async (
    operation: () => ReturnType<StoryLabUseCases["startMission"]>,
    successMessage: string,
  ) => {
    setBusy(true);
    try {
      const result = await operation();
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }
      setExportPreview(null);
      onProjectChange(result.value);
      onMessage(successMessage);
    } catch {
      onMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  const startMission = () =>
    apply(
      () =>
        useCases.startMission({
          projectId: project.id,
          definition: definition,
        }),
      `${missionLabel} está abierta. Puedes explorar y guardar un borrador.`,
    );

  const saveActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveTextActivity({
          projectId: project.id,
          missionId: definition.id,
          ...(activity ? { responseId: activity.id } : {}),
          text: activityText,
        }),
      persistenceMode === "local"
        ? "El borrador quedó guardado localmente y permanece editable."
        : "El borrador quedó guardado en memoria y permanece editable.",
    );
  };

  const saveEvidence = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.createTextEvidence({
          projectId: project.id,
          missionId: definition.id,
          title: evidenceTitle,
          summary: evidenceSummary,
        }),
      "La evidencia quedó lista para revisión y no entró al portafolio.",
    );
  };

  const saveReflection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveReflection({
          projectId: project.id,
          missionId: definition.id,
          text: reflectionText,
          privacyClass: "private",
        }),
      reflectionText.trim()
        ? "La reflexión quedó guardada como privada."
        : "La reflexión opcional quedó omitida.",
    );
  };

  const recordDecision = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!evidence || !decisionValue) {
      onMessage("Selecciona una decisión humana antes de continuar.");
      return Promise.resolve();
    }
    return apply(
      () =>
        useCases.decideEvidence({
          projectId: project.id,
          evidenceId: evidence.id,
          value: decisionValue,
          ...(rationale.trim() ? { rationale } : {}),
        }),
      "La decisión humana quedó registrada.",
    );
  };

  const curate = () => {
    if (!evidence) return Promise.resolve();
    return apply(
      () =>
        useCases.curatePortfolio({
          projectId: project.id,
          evidenceId: evidence.id,
          title: evidence.title,
        }),
      "La evidencia fue incorporada voluntariamente al portafolio.",
    );
  };

  const removeFromPortfolio = () => {
    if (!portfolioItem) return Promise.resolve();
    return apply(
      () =>
        useCases.removePortfolioItem({
          projectId: project.id,
          portfolioItemId: portfolioItem.id,
        }),
      "El elemento fue retirado. La evidencia original permanece.",
    );
  };

  const reopenMission = async () => {
    await apply(
      () =>
        useCases.reopenMission({
          projectId: project.id,
          missionId: definition.id,
        }),
      `${missionLabel} fue reabierta. La evidencia se conserva y la curaduría anterior se retiró.`,
    );
    setDecisionValue("");
    setRationale("");
  };

  const prepareExportPreview = async () => {
    setBusy(true);
    try {
      const result = await useCases.previewExport({
        projectId: project.id,
      });
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }
      setExportPreview(result.value);
      onMessage(
        "Vista previa validada. No se descargó ni publicó ningún archivo.",
      );
    } catch {
      onMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  const deleteProject = async () => {
    setBusy(true);
    try {
      const result = await useCases.removeProject(project.id);
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }
      setExportPreview(null);
      setDeleteArmed(false);
      onProjectDeleted();
    } catch {
      onMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="mission-workspace"
      className="workspace"
      aria-labelledby="workspace-title"
    >
      <header className="workspace-header">
        <div>
          <p className="eyebrow">
            {persistenceMode === "local"
              ? "Proyecto guardado localmente"
              : "Proyecto activo en memoria"}
          </p>
          <h2 id="workspace-title">{project.title}</h2>
          <p>
            Seudónimo: <strong>{project.profile.pseudonym}</strong>
          </p>
        </div>
        <p className="status-badge">
          {mission
            ? `${missionLabel} · ${mission.status}`
            : `${missionLabel} · no iniciada`}
        </p>
      </header>

      <MissionNavigation
        activeMissionId={definition.id}
        onSelectMission={onSelectMission}
      />

      <article className="mission-card" aria-labelledby="mission-title">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h3 id="mission-title">{definition.title}</h3>
          <p>{definition.purpose}</p>
        </div>

        <ol className="instruction-list">
          {definition.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>

        {!mission ? (
          <button
            type="button"
            className="primary-action"
            onClick={startMission}
            disabled={busy}
          >
            Iniciar {missionLabel}
          </button>
        ) : (
          <div className="cycle-stack">
            <form className="cycle-card" onSubmit={saveActivity}>
              <div>
                <p className="step-kicker">1 · Explorar</p>
                <h4>{copy.activityTitle}</h4>
                <p>
                  {copy.activityHelp}
                </p>
              </div>
              <label>
                <span>{copy.activityLabel}</span>
                <textarea
                  value={activityText}
                  onChange={(event) => setActivityText(event.target.value)}
                  rows={7}
                  required
                />
              </label>
              <button
                type="submit"
                className="secondary-action"
                disabled={busy || mission.status === "completed"}
              >
                Guardar borrador
              </button>
            </form>

            {activity ? (
              <form className="cycle-card" onSubmit={saveEvidence}>
                <div>
                  <p className="step-kicker">2 · Documentar</p>
                  <h4>{copy.evidenceTitle}</h4>
                  <p>{copy.evidenceHelp}</p>
                </div>
                <label>
                  <span>{copy.evidenceTitleLabel}</span>
                  <input
                    value={evidenceTitle}
                    onChange={(event) => setEvidenceTitle(event.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>{copy.evidenceSummaryLabel}</span>
                  <textarea
                    value={evidenceSummary}
                    onChange={(event) => setEvidenceSummary(event.target.value)}
                    rows={4}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="secondary-action"
                  disabled={busy || mission.status === "completed"}
                >
                  {evidence ? "Actualizar evidencia" : "Crear evidencia"}
                </button>
              </form>
            ) : null}

            {evidence ? (
              <form className="cycle-card" onSubmit={saveReflection}>
                <div>
                  <p className="step-kicker">3 · Reflexionar</p>
                  <h4>Reflexión privada opcional</h4>
                  <p>
                    Puedes escribir, editar, borrar u omitir. Nunca se
                    selecciona para exportación por defecto.
                  </p>
                </div>
                <label>
                  <span>Reflexión privada opcional</span>
                  <textarea
                    value={reflectionText}
                    onChange={(event) => setReflectionText(event.target.value)}
                    rows={4}
                  />
                </label>
                <button
                  type="submit"
                  className="secondary-action"
                  disabled={busy}
                >
                  Guardar u omitir reflexión
                </button>
                <p className="privacy-note">
                  Privacidad actual: <strong>privada</strong>
                </p>
              </form>
            ) : null}

            {evidence && mission.status === "ready_for_review" ? (
              <form className="cycle-card" onSubmit={recordDecision}>
                <div>
                  <p className="step-kicker">4 · Decidir</p>
                  <h4>Decisión humana</h4>
                  <p>Ninguna opción está preseleccionada.</p>
                </div>
                <fieldset className="decision-grid">
                  <legend>¿Qué deseas hacer con esta evidencia?</legend>
                  {DECISION_OPTIONS.map((option) => (
                    <label key={option.value} className="decision-option">
                      <input
                        type="radio"
                        name={`${definition.id as string}-human-decision`}
                        value={option.value}
                        checked={decisionValue === option.value}
                        onChange={() => setDecisionValue(option.value)}
                      />
                      <span>
                        <strong>{option.label}</strong>
                        <small>{option.description}</small>
                      </span>
                    </label>
                  ))}
                </fieldset>
                <label>
                  <span>Razón opcional</span>
                  <textarea
                    value={rationale}
                    onChange={(event) => setRationale(event.target.value)}
                    rows={3}
                  />
                </label>
                <button
                  type="submit"
                  className="primary-action"
                  disabled={busy || !decisionValue}
                >
                  Registrar decisión humana
                </button>
              </form>
            ) : null}

            {decision ? (
              <article className="cycle-card decision-summary">
                <p className="step-kicker">Decisión registrada</p>
                <h4>{decision.value}</h4>
                <p>
                  Esta decisión pertenece a <strong>human_user</strong>.
                </p>
                {decision.rationale ? <p>{decision.rationale}</p> : null}
              </article>
            ) : null}

            {decision?.value === "accept" ? (
              <article className="cycle-card">
                <p className="step-kicker">5 · Curar</p>
                <h4>Portafolio reversible</h4>
                {portfolioItem ? (
                  <>
                    <p>
                      <strong>{portfolioItem.title}</strong> está en el
                      portafolio.
                    </p>
                    <button
                      type="button"
                      className="danger-action"
                      onClick={removeFromPortfolio}
                      disabled={busy}
                    >
                      Retirar del portafolio
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      La evidencia fue aceptada, pero todavía no está en el
                      portafolio.
                    </p>
                    <button
                      type="button"
                      className="primary-action"
                      onClick={curate}
                      disabled={busy}
                    >
                      Incorporar al portafolio
                    </button>
                  </>
                )}
              </article>
            ) : null}

            {portfolioItem ? (
              <article className="cycle-card export-card">
                <p className="step-kicker">6 · Previsualizar</p>
                <h4>Vista previa de exportación</h4>
                <p>
                  La operación valida el paquete y excluye reflexiones privadas
                  o de alto cuidado. No inicia una descarga.
                </p>
                <button
                  type="button"
                  className="primary-action"
                  onClick={prepareExportPreview}
                  disabled={busy}
                >
                  Preparar vista previa validada
                </button>

                {exportPreview ? (
                  <div className="export-preview" aria-live="polite">
                    <dl className="preview-summary">
                      <div>
                        <dt>Tipo</dt>
                        <dd>{exportPreview.exportType}</dd>
                      </div>
                      <div>
                        <dt>Schema</dt>
                        <dd>{exportPreview.schemaVersion}</dd>
                      </div>
                      <div>
                        <dt>Portafolio</dt>
                        <dd>
                          {exportPreview.project.portfolio.items.length} elemento
                        </dd>
                      </div>
                      <div>
                        <dt>Reflexiones incluidas</dt>
                        <dd>{exportPreview.project.reflections.length}</dd>
                      </div>
                    </dl>
                    <details>
                      <summary>Ver JSON validado</summary>
                      <pre>{JSON.stringify(exportPreview, null, 2)}</pre>
                    </details>
                  </div>
                ) : null}
              </article>
            ) : null}

            {mission.status === "completed" ? (
              <article className="cycle-card reopening-card">
                <p className="step-kicker">Iteración protegida</p>
                <h4>La misión puede reabrirse</h4>
                <p>
                  Reabrir retira la curaduría y la decisión vigentes, pero
                  conserva el borrador, la evidencia y la reflexión privada.
                </p>
                <button
                  type="button"
                  className="secondary-action"
                  onClick={reopenMission}
                  disabled={busy}
                >
                  Reabrir {missionLabel}
                </button>
              </article>
            ) : null}
          </div>
        )}
      </article>

      <aside className="storage-assurance" aria-label="Estado de persistencia">
        <strong>
          {persistenceMode === "local"
            ? "Guardado local automático:"
            : "Modo de sesión:"}
        </strong>{" "}
        {persistenceMode === "local"
          ? "cada operación válida actualiza el proyecto de este navegador."
          : "el proyecto desaparecerá al recargar porque el almacenamiento local no está disponible."}
      </aside>

      <section className="danger-zone" aria-labelledby="delete-project-title">
        <p className="eyebrow">Borrado explícito</p>
        <h3 id="delete-project-title">Eliminar el proyecto local</h3>
        <p>
          Esta acción elimina el proyecto guardado en este navegador. No existe
          sincronización remota ni copia en la nube.
        </p>

        {deleteArmed ? (
          <div className="confirmation-row" role="group" aria-label="Confirmar borrado local">
            <button
              type="button"
              className="danger-action"
              onClick={deleteProject}
              disabled={busy}
            >
              Confirmar borrado local
            </button>
            <button
              type="button"
              className="secondary-action"
              onClick={() => setDeleteArmed(false)}
              disabled={busy}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="danger-action"
            onClick={() => setDeleteArmed(true)}
            disabled={busy}
          >
            Preparar borrado local
          </button>
        )}
      </section>
    </section>
  );
}

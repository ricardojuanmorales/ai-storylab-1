import { useState, type FormEvent } from "react";
import type { StoryLabUseCases } from "../application";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type {
  CreativeProject,
  Evidence,
} from "../domain/model";
import type {
  EvidenceId,
  HumanDecisionValue,
  MissionId,
} from "../domain/types";
import { MissionNavigation } from "./MissionNavigation";
import { selectMissionWorkspaceSnapshot } from "./mission-workspace-model";
import type { PersistenceMode } from "./persistence-mode";

export interface MissionThreeWorkspaceProps {
  readonly project: CreativeProject;
  readonly useCases: StoryLabUseCases;
  readonly persistenceMode: PersistenceMode;
  readonly onProjectChange: (project: CreativeProject) => void;
  readonly onProjectDeleted: () => void;
  readonly onMessage: (message: string) => void;
  readonly onSelectMission: (missionId: MissionId) => void;
}

const M3_PRODUCTION_DEFINITION = MISSION_CATALOG[2];

const MEDIUM_OPTIONS = [
  { value: "text_fragment", label: "Fragmento textual" },
  { value: "image_description", label: "Imagen descrita" },
  { value: "audio_description", label: "Audio descrito" },
  { value: "video_description", label: "Video descrito" },
  { value: "interactive_description", label: "Interacción descrita" },
] as const;

type ProductionMedium = (typeof MEDIUM_OPTIONS)[number]["value"];

const DEFAULT_MEDIUM: ProductionMedium = "text_fragment";
const METADATA_PATTERN = /^\[medio_sintetico:([a-z_]+)\]\n/;

const isProductionMedium = (value: string): value is ProductionMedium =>
  MEDIUM_OPTIONS.some((option) => option.value === value);

const formatProductionSummary = (
  medium: ProductionMedium,
  summary: string,
): string => `[medio_sintetico:${medium}]\n${summary.trim()}`;

const parseProductionSummary = (
  summary: string | undefined,
): { readonly medium: ProductionMedium; readonly summary: string } => {
  if (!summary) {
    return { medium: DEFAULT_MEDIUM, summary: "" };
  }

  const match = summary.match(METADATA_PATTERN);
  const rawMedium = match?.[1];

  return {
    medium:
      rawMedium && isProductionMedium(rawMedium)
        ? rawMedium
        : DEFAULT_MEDIUM,
    summary: match ? summary.slice(match[0].length) : summary,
  };
};

const mediumLabel = (medium: ProductionMedium): string =>
  MEDIUM_OPTIONS.find((option) => option.value === medium)?.label ??
  "Fragmento textual";

const DECISION_OPTIONS: readonly {
  readonly value: HumanDecisionValue;
  readonly label: string;
  readonly description: string;
}[] = [
  {
    value: "accept",
    label: "Aceptar",
    description: "La pieza representa una evidencia válida del proceso.",
  },
  {
    value: "revise",
    label: "Revisar",
    description: "La pieza necesita otra transformación antes del cierre.",
  },
  {
    value: "reject",
    label: "Rechazar",
    description: "La pieza se conserva como proceso, pero no se selecciona.",
  },
  {
    value: "defer",
    label: "Decidir más tarde",
    description: "La pieza permanece abierta para una decisión posterior.",
  },
];

const isFinalDecision = (
  value: HumanDecisionValue | undefined,
): boolean => value === "accept" || value === "reject";

export function MissionThreeWorkspace({
  project,
  useCases,
  persistenceMode,
  onProjectChange,
  onProjectDeleted: _onProjectDeleted,
  onMessage,
  onSelectMission,
}: MissionThreeWorkspaceProps) {
  const snapshot = selectMissionWorkspaceSnapshot(
    project,
    M3_PRODUCTION_DEFINITION.id,
  );
  const {
    mission,
    evidence,
    decisions,
    portfolioItems,
    primaryActivity: activity,
    primaryReflection: reflection,
  } = snapshot;

  const initialEvidence = evidence[0];
  const initialProduction = parseProductionSummary(initialEvidence?.summary);

  const [busy, setBusy] = useState(false);
  const [activityText, setActivityText] = useState(activity?.text ?? "");
  const [selectedEvidenceId, setSelectedEvidenceId] =
    useState<EvidenceId | null>(initialEvidence?.id ?? null);
  const [evidenceTitle, setEvidenceTitle] =
    useState(initialEvidence?.title ?? "");
  const [evidenceSummary, setEvidenceSummary] =
    useState(initialProduction.summary);
  const [medium, setMedium] =
    useState<ProductionMedium>(initialProduction.medium);
  const [reflectionText, setReflectionText] =
    useState(reflection?.text ?? "");
  const [decisionValue, setDecisionValue] =
    useState<HumanDecisionValue | "">("");
  const [rationale, setRationale] = useState("");

  const selectedEvidence = selectedEvidenceId
    ? evidence.find((item) => item.id === selectedEvidenceId)
    : undefined;
  const selectedDecision = selectedEvidence
    ? decisions.find((item) => item.evidenceId === selectedEvidence.id)
    : undefined;
  const selectedPortfolioItem = selectedEvidence
    ? portfolioItems.find((item) => item.evidenceId === selectedEvidence.id)
    : undefined;

  const finalDecisionCount = evidence.filter((item) => {
    const decision = decisions.find(
      (candidate) => candidate.evidenceId === item.id,
    );
    return isFinalDecision(decision?.value);
  }).length;
  const canComplete =
    evidence.length > 0 && finalDecisionCount === evidence.length;

  const apply = async (
    operation: () => ReturnType<StoryLabUseCases["startMission"]>,
    successMessage: string,
    onSuccess?: (next: CreativeProject) => void,
  ) => {
    setBusy(true);
    try {
      const result = await operation();
      if (!result.ok) {
        onMessage(result.error.safeMessage);
        return;
      }
      onProjectChange(result.value);
      onSuccess?.(result.value);
      onMessage(successMessage);
    } catch {
      onMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  const selectEvidence = (item: Evidence) => {
    const production = parseProductionSummary(item.summary);
    setSelectedEvidenceId(item.id);
    setEvidenceTitle(item.title);
    setEvidenceSummary(production.summary);
    setMedium(production.medium);
    setDecisionValue("");
    setRationale("");
  };

  const beginNewEvidence = () => {
    setSelectedEvidenceId(null);
    setEvidenceTitle("");
    setEvidenceSummary("");
    setMedium(DEFAULT_MEDIUM);
    setDecisionValue("");
    setRationale("");
  };

  const startMission = () =>
    apply(
      () =>
        useCases.startMission({
          projectId: project.id,
          definition: M3_PRODUCTION_DEFINITION,
        }),
      "M3 está abierta. Puedes documentar el proceso sin subir archivos.",
    );

  const saveActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveTextActivity({
          projectId: project.id,
          missionId: M3_PRODUCTION_DEFINITION.id,
          ...(activity ? { responseId: activity.id } : {}),
          text: activityText,
        }),
      persistenceMode === "local"
        ? "El plan de producción quedó guardado localmente."
        : "El plan de producción quedó guardado en memoria.",
    );
  };

  const saveEvidence = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatingId = selectedEvidenceId;

    return apply(
      () =>
        useCases.createTextEvidence({
          projectId: project.id,
          missionId: M3_PRODUCTION_DEFINITION.id,
          ...(updatingId ? { evidenceId: updatingId } : {}),
          cardinality: "multiple",
          title: evidenceTitle,
          summary: formatProductionSummary(medium, evidenceSummary),
        }),
      updatingId
        ? "La evidencia de producción fue actualizada."
        : "La evidencia de producción fue creada sin almacenar archivos binarios.",
      (next) => {
        const missionEvidence = next.evidence.filter(
          (item) => item.missionId === M3_PRODUCTION_DEFINITION.id,
        );
        const saved = updatingId
          ? missionEvidence.find((item) => item.id === updatingId)
          : missionEvidence[missionEvidence.length - 1];

        if (saved) selectEvidence(saved);
      },
    );
  };

  const saveReflection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveReflection({
          projectId: project.id,
          missionId: M3_PRODUCTION_DEFINITION.id,
          text: reflectionText,
          privacyClass: "private",
        }),
      reflectionText.trim()
        ? "La reflexión de M3 quedó guardada como privada."
        : "La reflexión opcional de M3 quedó omitida.",
    );
  };

  const recordDecision = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedEvidence || !decisionValue) {
      onMessage("Selecciona una evidencia y una decisión humana.");
      return Promise.resolve();
    }

    return apply(
      () =>
        useCases.decideEvidence({
          projectId: project.id,
          evidenceId: selectedEvidence.id,
          value: decisionValue,
          ...(rationale.trim() ? { rationale } : {}),
          missionDisposition: "keep_open",
        }),
      "La decisión humana quedó asociada a esta evidencia.",
      () => {
        setDecisionValue("");
        setRationale("");
      },
    );
  };

  const curate = () => {
    if (!selectedEvidence) return Promise.resolve();

    return apply(
      () =>
        useCases.curatePortfolio({
          projectId: project.id,
          evidenceId: selectedEvidence.id,
          title: selectedEvidence.title,
        }),
      "La evidencia fue incorporada voluntariamente al portafolio.",
    );
  };

  const removeFromPortfolio = () => {
    if (!selectedPortfolioItem) return Promise.resolve();

    return apply(
      () =>
        useCases.removePortfolioItem({
          projectId: project.id,
          portfolioItemId: selectedPortfolioItem.id,
        }),
      "La evidencia fue retirada del portafolio sin destruirla.",
    );
  };

  const completeMission = () =>
    apply(
      () =>
        useCases.completeMission({
          projectId: project.id,
          missionId: M3_PRODUCTION_DEFINITION.id,
        }),
      "M3 quedó completada mediante una acción humana explícita.",
    );

  const reopenMission = async () => {
    await apply(
      () =>
        useCases.reopenMission({
          projectId: project.id,
          missionId: M3_PRODUCTION_DEFINITION.id,
        }),
      "M3 fue reabierta. Las evidencias permanecen editables.",
    );
    setDecisionValue("");
    setRationale("");
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
          {mission ? `M3 · ${mission.status}` : "M3 · no iniciada"}
        </p>
      </header>

      <MissionNavigation
        activeMissionId={M3_PRODUCTION_DEFINITION.id}
        onSelectMission={onSelectMission}
      />

      <article className="mission-card" aria-labelledby="mission-title">
        <div className="section-heading">
          <p className="eyebrow">Tercera misión funcional</p>
          <h3 id="mission-title">{M3_PRODUCTION_DEFINITION.title}</h3>
          <p>{M3_PRODUCTION_DEFINITION.purpose}</p>
        </div>

        <ol className="instruction-list">
          {M3_PRODUCTION_DEFINITION.instructions.map((instruction) => (
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
            Iniciar M3
          </button>
        ) : (
          <div className="cycle-stack">
            <form className="cycle-card" onSubmit={saveActivity}>
              <div>
                <p className="step-kicker">1 · Planificar</p>
                <h4>Plan de producción</h4>
                <p>
                  Documenta decisiones, transformaciones y límites. Este texto
                  no representa un archivo multimedia almacenado.
                </p>
              </div>
              <label>
                <span>Plan y decisiones del proceso</span>
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
                Guardar plan de producción
              </button>
            </form>

            {activity ? (
              <section
                className="cycle-card"
                aria-labelledby="m3-evidence-collection-title"
              >
                <div>
                  <p className="step-kicker">2 · Documentar</p>
                  <h4 id="m3-evidence-collection-title">
                    Evidencias de producción
                  </h4>
                  <p>
                    Cada pieza conserva texto y un metadato sintético del medio.
                    No se almacena, sube ni simula ningún archivo binario.
                  </p>
                </div>

                <div className="evidence-toolbar">
                  <strong>{evidence.length} evidencia(s) documentada(s)</strong>
                  <button
                    type="button"
                    className="secondary-action"
                    onClick={beginNewEvidence}
                    disabled={busy || mission.status === "completed"}
                  >
                    Nueva evidencia
                  </button>
                </div>

                {evidence.length > 0 ? (
                  <ul className="evidence-collection">
                    {evidence.map((item) => {
                      const production = parseProductionSummary(item.summary);
                      const itemDecision = decisions.find(
                        (candidate) => candidate.evidenceId === item.id,
                      );

                      return (
                        <li key={item.id as string}>
                          <button
                            type="button"
                            className="evidence-selector"
                            aria-pressed={selectedEvidenceId === item.id}
                            onClick={() => selectEvidence(item)}
                          >
                            <strong>{item.title}</strong>
                            <span>{mediumLabel(production.medium)}</span>
                            <small>
                              Decisión: {itemDecision?.value ?? "pendiente"}
                            </small>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="privacy-note">
                    Todavía no hay evidencias. El formulario crea la primera.
                  </p>
                )}

                <form className="evidence-editor" onSubmit={saveEvidence}>
                  <label>
                    <span>Medio sintético documentado</span>
                    <select
                      value={medium}
                      onChange={(event) =>
                        setMedium(event.target.value as ProductionMedium)
                      }
                    >
                      {MEDIUM_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span>Título de la evidencia de producción</span>
                    <input
                      value={evidenceTitle}
                      onChange={(event) => setEvidenceTitle(event.target.value)}
                      required
                    />
                  </label>
                  <label>
                    <span>Descripción textual y decisiones de proceso</span>
                    <textarea
                      value={evidenceSummary}
                      onChange={(event) => setEvidenceSummary(event.target.value)}
                      rows={5}
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="secondary-action"
                    disabled={busy || mission.status === "completed"}
                  >
                    {selectedEvidence
                      ? "Actualizar evidencia de producción"
                      : "Crear evidencia de producción"}
                  </button>
                </form>
              </section>
            ) : null}

            {evidence.length > 0 ? (
              <form className="cycle-card" onSubmit={saveReflection}>
                <div>
                  <p className="step-kicker">3 · Reflexionar</p>
                  <h4>Reflexión privada opcional de M3</h4>
                  <p>
                    Existe una sola reflexión editable para toda la misión y
                    permanece fuera de la vista previa por defecto.
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
              </form>
            ) : null}

            {selectedEvidence && mission.status === "ready_for_review" ? (
              <form className="cycle-card" onSubmit={recordDecision}>
                <div>
                  <p className="step-kicker">4 · Decidir por pieza</p>
                  <h4>Decisión humana sobre {selectedEvidence.title}</h4>
                  <p>
                    La decisión afecta esta evidencia y no cierra M3
                    automáticamente.
                  </p>
                </div>
                <fieldset className="decision-grid">
                  <legend>¿Qué deseas hacer con esta evidencia?</legend>
                  {DECISION_OPTIONS.map((option) => (
                    <label key={option.value} className="decision-option">
                      <input
                        type="radio"
                        name="m3-human-decision"
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
                  Registrar decisión de esta evidencia
                </button>
              </form>
            ) : null}

            {selectedDecision ? (
              <article className="cycle-card decision-summary">
                <p className="step-kicker">Decisión vigente</p>
                <h4>{selectedDecision.value}</h4>
                <p>
                  Esta decisión pertenece a <strong>human_user</strong> y solo
                  corresponde a la evidencia seleccionada.
                </p>
                {selectedDecision.rationale ? (
                  <p>{selectedDecision.rationale}</p>
                ) : null}
              </article>
            ) : null}

            {selectedDecision?.value === "accept" && selectedEvidence ? (
              <article className="cycle-card">
                <p className="step-kicker">5 · Curar</p>
                <h4>Portafolio reversible</h4>
                {selectedPortfolioItem ? (
                  <>
                    <p>
                      <strong>{selectedPortfolioItem.title}</strong> está en el
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

            {evidence.length > 0 ? (
              <article className="cycle-card completion-card">
                <p className="step-kicker">6 · Cerrar humanamente</p>
                <h4>Cierre explícito de M3</h4>
                <p>
                  {finalDecisionCount} de {evidence.length} evidencia(s) tienen
                  una decisión final de aceptación o rechazo.
                </p>
                {mission.status === "completed" ? (
                  <button
                    type="button"
                    className="secondary-action"
                    onClick={reopenMission}
                    disabled={busy}
                  >
                    Reabrir M3
                  </button>
                ) : (
                  <button
                    type="button"
                    className="primary-action"
                    onClick={completeMission}
                    disabled={busy || !canComplete}
                  >
                    Completar M3
                  </button>
                )}
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
    </section>
  );
}

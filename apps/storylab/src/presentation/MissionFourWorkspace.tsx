import { useState, type FormEvent } from "react";
import {
  parseCurationRecord,
  type StoryLabUseCases,
} from "../application";
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

export interface MissionFourWorkspaceProps {
  readonly project: CreativeProject;
  readonly useCases: StoryLabUseCases;
  readonly persistenceMode: PersistenceMode;
  readonly onProjectChange: (project: CreativeProject) => void;
  readonly onMessage: (message: string) => void;
  readonly onSelectMission: (missionId: MissionId) => void;
}

const M4_CURATION_DEFINITION = MISSION_CATALOG[3];

const DECISION_OPTIONS: readonly {
  readonly value: HumanDecisionValue;
  readonly label: string;
  readonly description: string;
}[] = [
  {
    value: "accept",
    label: "Confirmar cierre",
    description:
      "El registro representa mi selección y puede cerrar M4.",
  },
  {
    value: "revise",
    label: "Revisar selección",
    description:
      "Deseo volver a la curaduría y transformar el registro.",
  },
  {
    value: "defer",
    label: "Decidir más tarde",
    description:
      "El registro permanece listo para revisión sin cerrar la misión.",
  },
];

const isAccepted = (
  project: CreativeProject,
  evidenceId: EvidenceId,
): boolean =>
  project.decisions.some(
    (decision) =>
      decision.evidenceId === evidenceId &&
      decision.actor === "human_user" &&
      decision.value === "accept",
  );

const compactEvidence = (
  values: readonly (Evidence | undefined)[],
): readonly Evidence[] =>
  values.filter((value): value is Evidence => value !== undefined);

export function MissionFourWorkspace({
  project,
  useCases,
  persistenceMode,
  onProjectChange,
  onMessage,
  onSelectMission,
}: MissionFourWorkspaceProps) {
  const {
    mission,
    primaryActivity: activity,
    primaryEvidence: record,
    primaryReflection: reflection,
    primaryDecision: decision,
  } = selectMissionWorkspaceSnapshot(
    project,
    M4_CURATION_DEFINITION.id,
  );

  const recordDocument = record
    ? parseCurationRecord(record.summary)
    : null;

  const acceptedEvidence = project.evidence.filter(
    (item) =>
      item.missionId !== M4_CURATION_DEFINITION.id &&
      isAccepted(project, item.id),
  );

  const acceptedEvidenceIds = new Set(
    acceptedEvidence.map((item) => item.id as string),
  );

  const initialSelectedIds =
    recordDocument?.selectedEvidenceIds.filter((id) =>
      acceptedEvidenceIds.has(id as string),
    ) ??
    project.portfolio.items
      .map((item) => item.evidenceId)
      .filter((id) => acceptedEvidenceIds.has(id as string));

  const [busy, setBusy] = useState(false);
  const [activityText, setActivityText] =
    useState(activity?.text ?? "");
  const [selectedIds, setSelectedIds] =
    useState<readonly EvidenceId[]>(initialSelectedIds);
  const [recordTitle, setRecordTitle] =
    useState(record?.title ?? "Registro de curaduría");
  const [statement, setStatement] =
    useState(recordDocument?.statement ?? "");
  const [handoff, setHandoff] =
    useState(recordDocument?.handoff ?? "");
  const [reflectionText, setReflectionText] =
    useState(reflection?.text ?? "");
  const [decisionValue, setDecisionValue] =
    useState<HumanDecisionValue | "">("");
  const [rationale, setRationale] = useState("");

  const selectedEvidence = compactEvidence(
    selectedIds.map((id) =>
      acceptedEvidence.find((item) => item.id === id),
    ),
  );

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
          definition: M4_CURATION_DEFINITION,
        }),
      "M4 está abierta. La selección continúa bajo control humano.",
    );

  const saveActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveTextActivity({
          projectId: project.id,
          missionId: M4_CURATION_DEFINITION.id,
          ...(activity ? { responseId: activity.id } : {}),
          text: activityText,
        }),
      persistenceMode === "local"
        ? "La lectura de cierre quedó guardada localmente."
        : "La lectura de cierre quedó guardada en memoria.",
    );
  };

  const toggleEvidence = (
    evidenceId: EvidenceId,
    checked: boolean,
  ) => {
    setSelectedIds((current) =>
      checked
        ? current.includes(evidenceId)
          ? current
          : [...current, evidenceId]
        : current.filter((id) => id !== evidenceId),
    );
  };

  const moveEvidence = (
    evidenceId: EvidenceId,
    direction: -1 | 1,
  ) => {
    setSelectedIds((current) => {
      const index = current.indexOf(evidenceId);
      const target = index + direction;

      if (index < 0 || target < 0 || target >= current.length) {
        return current;
      }

      const next = [...current];
      const [moved] = next.splice(index, 1);
      if (!moved) return current;
      next.splice(target, 0, moved);
      return next;
    });
  };

  const saveRecord = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return apply(
      () =>
        useCases.saveCurationRecord({
          projectId: project.id,
          missionId: M4_CURATION_DEFINITION.id,
          ...(record ? { evidenceId: record.id } : {}),
          title: recordTitle,
          statement,
          handoff,
          selectedEvidenceIds: selectedIds,
        }),
      "El registro único de curaduría y el orden del portafolio fueron guardados.",
    );
  };

  const saveReflection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveReflection({
          projectId: project.id,
          missionId: M4_CURATION_DEFINITION.id,
          text: reflectionText,
          privacyClass: "private",
        }),
      reflectionText.trim()
        ? "La reflexión de cierre quedó guardada como privada."
        : "La reflexión opcional de cierre quedó omitida.",
    );
  };

  const recordDecision = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!record || !decisionValue) {
      onMessage("Selecciona una decisión humana antes de continuar.");
      return Promise.resolve();
    }

    return apply(
      () =>
        useCases.decideEvidence({
          projectId: project.id,
          evidenceId: record.id,
          value: decisionValue,
          evidenceDisposition: "record_only",
          ...(rationale.trim() ? { rationale } : {}),
        }),
      decisionValue === "accept"
        ? "M4 quedó cerrada mediante confirmación humana."
        : "La decisión humana sobre el registro fue guardada.",
    );
  };

  const reopenMission = async () => {
    await apply(
      () =>
        useCases.reopenMission({
          projectId: project.id,
          missionId: M4_CURATION_DEFINITION.id,
        }),
      "M4 fue reabierta. La selección y las evidencias fuente permanecen.",
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
          {mission ? `M4 · ${mission.status}` : "M4 · no iniciada"}
        </p>
      </header>

      <MissionNavigation
        activeMissionId={M4_CURATION_DEFINITION.id}
        onSelectMission={onSelectMission}
      />

      <article className="mission-card" aria-labelledby="mission-title">
        <div className="section-heading">
          <p className="eyebrow">Cuarta misión funcional</p>
          <h3 id="mission-title">{M4_CURATION_DEFINITION.title}</h3>
          <p>{M4_CURATION_DEFINITION.purpose}</p>
        </div>

        <ol className="instruction-list">
          {M4_CURATION_DEFINITION.instructions.map((instruction) => (
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
            Iniciar M4
          </button>
        ) : (
          <div className="cycle-stack">
            <form className="cycle-card" onSubmit={saveActivity}>
              <div>
                <p className="step-kicker">1 · Revisar</p>
                <h4>Lectura humana del proceso</h4>
                <p>
                  Resume qué cambió, qué aprendiste y qué criterios guiarán la
                  selección. No tienes que revelar información personal.
                </p>
              </div>
              <label>
                <span>Lectura y criterios de cierre</span>
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
                Guardar lectura de cierre
              </button>
            </form>

            {activity ? (
              <section
                className="cycle-card"
                aria-labelledby="curation-source-title"
              >
                <div>
                  <p className="step-kicker">2 · Seleccionar y ordenar</p>
                  <h4 id="curation-source-title">
                    Evidencias aceptadas disponibles
                  </h4>
                  <p>
                    Solo aparecen evidencias con aceptación humana vigente.
                    Seleccionar o retirar aquí actualiza el portafolio al guardar.
                  </p>
                </div>

                {acceptedEvidence.length > 0 ? (
                  <ul className="curation-source-list">
                    {acceptedEvidence.map((item) => {
                      const checked = selectedIds.includes(item.id);

                      return (
                        <li key={item.id as string}>
                          <label className="curation-source-option">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={(event) =>
                                toggleEvidence(item.id, event.target.checked)
                              }
                              disabled={
                                busy || mission.status === "completed"
                              }
                            />
                            <span>
                              <strong>{item.title}</strong>
                              <small>
                                {MISSION_CATALOG.find(
                                  (definition) =>
                                    definition.id === item.missionId,
                                )?.title ?? "Evidencia del proyecto"}
                              </small>
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="memory-warning">
                    M4 necesita al menos una evidencia aceptada humanamente en
                    M1, M2 o M3 antes de guardar su registro.
                  </p>
                )}

                {selectedEvidence.length > 0 ? (
                  <ol className="curation-order-list">
                    {selectedEvidence.map((item, index) => (
                      <li key={item.id as string}>
                        <span>
                          <strong>{index + 1}. {item.title}</strong>
                        </span>
                        <span className="curation-order-actions">
                          <button
                            type="button"
                            className="secondary-action"
                            aria-label={`Mover ${item.title} arriba`}
                            onClick={() => moveEvidence(item.id, -1)}
                            disabled={
                              busy ||
                              mission.status === "completed" ||
                              index === 0
                            }
                          >
                            Subir
                          </button>
                          <button
                            type="button"
                            className="secondary-action"
                            aria-label={`Mover ${item.title} abajo`}
                            onClick={() => moveEvidence(item.id, 1)}
                            disabled={
                              busy ||
                              mission.status === "completed" ||
                              index === selectedEvidence.length - 1
                            }
                          >
                            Bajar
                          </button>
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </section>
            ) : null}

            {activity ? (
              <form className="cycle-card" onSubmit={saveRecord}>
                <div>
                  <p className="step-kicker">3 · Registrar curaduría</p>
                  <h4>Registro único y editable</h4>
                  <p>
                    Este registro documenta la selección y el traspaso
                    conceptual. No es una obra del portafolio ni un archivo de
                    exportación.
                  </p>
                </div>
                <label>
                  <span>Título del registro de curaduría</span>
                  <input
                    value={recordTitle}
                    onChange={(event) => setRecordTitle(event.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>Declaración de curaduría</span>
                  <textarea
                    value={statement}
                    onChange={(event) => setStatement(event.target.value)}
                    rows={5}
                    required
                  />
                </label>
                <label>
                  <span>Nota de traspaso conceptual</span>
                  <textarea
                    value={handoff}
                    onChange={(event) => setHandoff(event.target.value)}
                    rows={5}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="primary-action"
                  disabled={
                    busy ||
                    mission.status === "completed" ||
                    selectedIds.length === 0
                  }
                >
                  Guardar registro de curaduría
                </button>
              </form>
            ) : null}

            {record ? (
              <form className="cycle-card" onSubmit={saveReflection}>
                <div>
                  <p className="step-kicker">4 · Reflexionar</p>
                  <h4>Reflexión privada opcional de cierre</h4>
                  <p>
                    Existe una sola reflexión editable para M4 y permanece
                    fuera de cualquier vista previa por defecto.
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

            {record && mission.status === "ready_for_review" ? (
              <form className="cycle-card" onSubmit={recordDecision}>
                <div>
                  <p className="step-kicker">5 · Confirmar humanamente</p>
                  <h4>Decisión sobre el registro de curaduría</h4>
                  <p>
                    El registro nunca entra al portafolio. Confirmarlo cierra
                    M4 y conserva las evidencias fuente seleccionadas.
                  </p>
                </div>
                <fieldset className="decision-grid">
                  <legend>¿Qué deseas hacer con el registro?</legend>
                  {DECISION_OPTIONS.map((option) => (
                    <label key={option.value} className="decision-option">
                      <input
                        type="radio"
                        name="m4-human-decision"
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
                  Registrar decisión de cierre
                </button>
              </form>
            ) : null}

            {decision ? (
              <article className="cycle-card decision-summary">
                <p className="step-kicker">Decisión vigente</p>
                <h4>{decision.value}</h4>
                <p>
                  Esta decisión pertenece a <strong>human_user</strong> y
                  corresponde únicamente al registro M4.
                </p>
                {decision.rationale ? <p>{decision.rationale}</p> : null}
              </article>
            ) : null}

            {recordDocument ? (
              <article
                className="cycle-card conceptual-handoff"
                aria-labelledby="conceptual-handoff-title"
              >
                <p className="step-kicker">Traspaso conceptual local</p>
                <h4 id="conceptual-handoff-title">{record?.title}</h4>
                <p>{recordDocument.statement}</p>
                <p>
                  <strong>Nota de traspaso:</strong>{" "}
                  {recordDocument.handoff}
                </p>
                <ol>
                  {recordDocument.selectedEvidenceIds.map((id) => {
                    const source = project.evidence.find(
                      (item) => item.id === id,
                    );
                    return (
                      <li key={id as string}>
                        {source?.title ?? "Evidencia no disponible"}
                      </li>
                    );
                  })}
                </ol>
                <p className="privacy-note">
                  Vista conceptual únicamente. No se creó, descargó ni publicó
                  ningún archivo.
                </p>
              </article>
            ) : null}

            {mission.status === "completed" ? (
              <article className="cycle-card reopening-card">
                <p className="step-kicker">Ciclo reversible</p>
                <h4>M4 está cerrada</h4>
                <p>
                  Puedes reabrirla para revisar selección, orden, registro o
                  reflexión sin destruir las evidencias fuente.
                </p>
                <button
                  type="button"
                  className="secondary-action"
                  onClick={reopenMission}
                  disabled={busy}
                >
                  Reabrir M4
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
          ? "la curaduría, el orden y el registro se conservan en este navegador."
          : "el proyecto desaparecerá al recargar porque el almacenamiento local no está disponible."}
      </aside>
    </section>
  );
}

import { useState, type FormEvent } from "react";
import type { StoryLabUseCases } from "../application";
import { M1_INTENTION_DEFINITION } from "../domain/mission-catalog";
import type { CreativeProject } from "../domain/model";
import type { HumanDecisionValue } from "../domain/types";

export interface MissionOneWorkspaceProps {
  readonly project: CreativeProject;
  readonly useCases: StoryLabUseCases;
  readonly onProjectChange: (project: CreativeProject) => void;
  readonly onMessage: (message: string) => void;
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

export function MissionOneWorkspace({
  project,
  useCases,
  onProjectChange,
  onMessage,
}: MissionOneWorkspaceProps) {
  const mission = project.missions.find(
    (item) => item.missionId === M1_INTENTION_DEFINITION.id,
  );
  const activity = project.activityResponses.find(
    (item) => item.missionId === M1_INTENTION_DEFINITION.id,
  );
  const evidence = project.evidence.find(
    (item) => item.missionId === M1_INTENTION_DEFINITION.id,
  );
  const reflection = project.reflections.find(
    (item) => item.missionId === M1_INTENTION_DEFINITION.id,
  );
  const decision = evidence
    ? project.decisions.find((item) => item.evidenceId === evidence.id)
    : undefined;
  const portfolioItem = evidence
    ? project.portfolio.items.find((item) => item.evidenceId === evidence.id)
    : undefined;

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

  const apply = async (
    operation: () => Promise<
      Awaited<ReturnType<StoryLabUseCases["startMission"]>>
    >,
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
          definition: M1_INTENTION_DEFINITION,
        }),
      "M1 está abierta. Puedes explorar y guardar un borrador.",
    );

  const saveActivity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.saveTextActivity({
          projectId: project.id,
          missionId: M1_INTENTION_DEFINITION.id,
          ...(activity ? { responseId: activity.id } : {}),
          text: activityText,
        }),
      "El borrador quedó guardado en memoria y permanece editable.",
    );
  };

  const saveEvidence = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return apply(
      () =>
        useCases.createTextEvidence({
          projectId: project.id,
          missionId: M1_INTENTION_DEFINITION.id,
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
          missionId: M1_INTENTION_DEFINITION.id,
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
          missionId: M1_INTENTION_DEFINITION.id,
        }),
      "M1 fue reabierta. La evidencia se conserva y la curaduría anterior se retiró.",
    );
    setDecisionValue("");
    setRationale("");
  };

  return (
    <section className="workspace" aria-labelledby="workspace-title">
      <header className="workspace-header">
        <div>
          <p className="eyebrow">Proyecto activo en memoria</p>
          <h2 id="workspace-title">{project.title}</h2>
          <p>
            Seudónimo: <strong>{project.profile.pseudonym}</strong>
          </p>
        </div>
        <p className="status-badge">
          {mission ? `M1 · ${mission.status}` : "M1 · no iniciada"}
        </p>
      </header>

      <article className="mission-card" aria-labelledby="mission-one-title">
        <div className="section-heading">
          <p className="eyebrow">Primera misión funcional</p>
          <h3 id="mission-one-title">{M1_INTENTION_DEFINITION.title}</h3>
          <p>{M1_INTENTION_DEFINITION.purpose}</p>
        </div>

        <ol className="instruction-list">
          {M1_INTENTION_DEFINITION.instructions.map((instruction) => (
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
            Iniciar M1
          </button>
        ) : (
          <div className="cycle-stack">
            <form className="cycle-card" onSubmit={saveActivity}>
              <div>
                <p className="step-kicker">1 · Explorar</p>
                <h4>Borrador de intención</h4>
                <p>
                  Puedes volver, revisar y recombinar. Guardar no convierte el
                  borrador en evidencia.
                </p>
              </div>
              <label>
                <span>Borrador de intención</span>
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
                  <h4>Evidencia textual</h4>
                  <p>
                    La evidencia se prepara para revisión, pero nunca entra
                    automáticamente al portafolio.
                  </p>
                </div>
                <label>
                  <span>Título de la evidencia</span>
                  <input
                    value={evidenceTitle}
                    onChange={(event) => setEvidenceTitle(event.target.value)}
                    required
                  />
                </label>
                <label>
                  <span>Resumen de la evidencia</span>
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
                        name="human-decision"
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
                  Reabrir M1
                </button>
              </article>
            ) : null}
          </div>
        )}
      </article>

      <aside className="memory-warning" aria-label="Límite de almacenamiento">
        <strong>Sesión en memoria:</strong> al recargar la página, este proyecto
        desaparece. La recuperación local se implementará en H08-2.4.
      </aside>
    </section>
  );
}

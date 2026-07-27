import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { StoryLabUseCases } from "../application";
import type { LegacyMvpContinuitySummary } from "../adapters/storage/legacy-mvp-continuity";
import { MISSION_CATALOG } from "../domain/mission-catalog";
import type {
  AccessibilityPreferences,
  CreativeProject,
} from "../domain/model";
import type { MissionId } from "../domain/types";
import { ArcSummary } from "./ArcSummary";
import { LegacyContinuityPanel } from "./LegacyContinuityPanel";
import { PortfolioTransferPanel } from "./PortfolioTransferPanel";
import type { PortfolioTransferRuntime } from "./portfolio-transfer-runtime";
import { MissionFourWorkspace } from "./MissionFourWorkspace";
import { MissionOneWorkspace } from "./MissionOneWorkspace";
import { MissionThreeWorkspace } from "./MissionThreeWorkspace";
import { MissionTwoWorkspace } from "./MissionTwoWorkspace";
import type { PersistenceMode } from "./persistence-mode";
import { ProjectSetup } from "./ProjectSetup";
import {
  SHELL_STEPS,
  shellStepStatusLabel,
} from "./shell-model";
import "./styles.css";

const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  reducedMotion: false,
  highContrast: false,
  textScale: "default",
};

const TEXT_SCALE_LABELS: Readonly<
  Record<AccessibilityPreferences["textScale"], string>
> = {
  default: "Predeterminada",
  large: "Grande",
  extra_large: "Extra grande",
};

type RecoveryState = "checking" | "ready";

export interface AppProps {
  readonly useCases: StoryLabUseCases;
  readonly portfolioTransfer?: PortfolioTransferRuntime;
  readonly persistenceMode?: PersistenceMode;
  readonly legacyContinuity?: LegacyMvpContinuitySummary;
  readonly legacyAppUrl?: string;
  readonly legacyBridgeUrl?: string;
}

export function App({
  useCases,
  portfolioTransfer,
  persistenceMode = "memory",
  legacyContinuity,
  legacyAppUrl = "/legacy/v0.3.0/",
  legacyBridgeUrl = "/legacy/bridge/",
}: AppProps) {
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);
  const [project, setProject] = useState<CreativeProject | null>(null);
  const [activeMissionId, setActiveMissionId] = useState<MissionId>(
    MISSION_CATALOG[0].id,
  );
  const [busy, setBusy] = useState(false);
  const [recoveryState, setRecoveryState] =
    useState<RecoveryState>("checking");
  const [recoveryIssue, setRecoveryIssue] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "Comprobando si existe un proyecto local recuperable.",
  );
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let active = true;

    const recover = async () => {
      try {
        const result = await useCases.recoverProject();
        if (!active) return;

        if (!result.ok) {
          setRecoveryIssue(true);
          setStatusMessage(result.error.safeMessage);
          setRecoveryState("ready");
          return;
        }

        setRecoveryIssue(false);
        setProject(result.value);
        setStatusMessage(
          result.value
            ? "Proyecto local recuperado y validado."
            : persistenceMode === "local"
              ? "No se encontró un proyecto guardado. Puedes crear uno."
              : "El almacenamiento local no está disponible. Puedes trabajar durante esta sesión.",
        );
        setRecoveryState("ready");
      } catch {
        if (!active) return;
        setRecoveryIssue(true);
        setRecoveryState("ready");
        setStatusMessage("Ocurrió un error inesperado durante la recuperación.");
      }
    };

    void recover();

    return () => {
      active = false;
    };
  }, [persistenceMode, useCases]);

  const focusMain = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    mainRef.current?.focus();
  };

  const updatePreferences = (
    next: AccessibilityPreferences,
  ) => {
    setPreferences(next);
    const active: string[] = [];

    if (next.highContrast) active.push("contraste alto");
    if (next.reducedMotion) active.push("movimiento reducido");
    if (next.textScale !== "default") {
      active.push(
        `texto ${TEXT_SCALE_LABELS[next.textScale].toLowerCase()}`,
      );
    }

    setStatusMessage(
      active.length === 0
        ? "Preferencias de visualización en valores predeterminados."
        : `Preferencias activas: ${active.join(", ")}.`,
    );
  };

  const createLocalProject = async (
    input: Parameters<StoryLabUseCases["createProject"]>[0],
  ) => {
    setBusy(true);
    try {
      const result = await useCases.createProject(input);
      if (!result.ok) {
        setStatusMessage(result.error.safeMessage);
        return;
      }
      setProject(result.value);
      setActiveMissionId(MISSION_CATALOG[0].id);
      setStatusMessage(
        persistenceMode === "local"
          ? "Proyecto creado y guardado automáticamente en este navegador."
          : "Proyecto creado para esta sesión.",
      );
    } catch {
      setStatusMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  const selectMission = (missionId: MissionId) => {
    const definition = MISSION_CATALOG.find(
      (candidate) => candidate.id === missionId,
    );
    setActiveMissionId(missionId);
    setStatusMessage(
      definition
        ? `${definition.title} seleccionada.`
        : "Misión seleccionada.",
    );
  };

  const clearBrokenRecovery = async () => {
    setBusy(true);
    try {
      const result = await useCases.clearRecovery();
      if (!result.ok) {
        setStatusMessage(result.error.safeMessage);
        return;
      }
      setRecoveryIssue(false);
      setProject(null);
      setActiveMissionId(MISSION_CATALOG[0].id);
      setStatusMessage(
        "Los datos locales dañados fueron descartados. Puedes comenzar de nuevo.",
      );
    } catch {
      setStatusMessage("Ocurrió un error inesperado.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="app-shell"
      data-contrast={preferences.highContrast ? "high" : "standard"}
      data-motion={preferences.reducedMotion ? "reduced" : "full"}
      data-text-scale={preferences.textScale}
      data-testid="app-shell"
    >
      <a
        className="skip-link"
        href="#contenido-principal"
        onClick={focusMain}
      >
        Saltar al contenido principal
      </a>

      <header className="site-header">
        <div>
          <p className="eyebrow">Investigación-creación local-first</p>
          <p className="brand">AI StoryLab 1</p>
        </div>
        <p className="status-badge">
          Portafolio roundtrip local · H08-5.5
        </p>
      </header>

      <nav className="primary-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#preferencias">Accesibilidad</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#resumen-arco">Resumen del arco</a>
        <a href="#transferencia-portafolio">Transferir portafolio</a>
        <a href="#mapa-ciclo">Mapa del ciclo</a>
      </nav>

      <main
        id="contenido-principal"
        ref={mainRef}
        tabIndex={-1}
        className="main-content"
      >
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Ciclo local-first transferible y recuperable</p>
            <h1 id="hero-title">
              Tu ciclo creativo puede continuar después de recargar
            </h1>
            <p className="hero-copy">
              El proyecto se valida antes de recuperarse. El portafolio puede
              exportarse e importarse localmente mediante previews y
              confirmaciones humanas separadas, sin publicación automática.
            </p>
          </div>

          <aside className="boundary-card" aria-labelledby="boundary-title">
            <h2 id="boundary-title">Límites activos</h2>
            <ul>
              <li>Datos sintéticos únicamente</li>
              <li>Persistencia local y recuperación validada</li>
              <li>Exportación e importación como copia local</li>
              <li>Sin red, publicación ni decisiones automatizadas</li>
            </ul>
          </aside>
        </section>

        {legacyContinuity ? (
          <LegacyContinuityPanel
            summary={legacyContinuity}
            legacyAppUrl={legacyAppUrl}
            legacyBridgeUrl={legacyBridgeUrl}
          />
        ) : null}

        <section
          id="preferencias"
          className="panel"
          aria-labelledby="preferences-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Adaptación inmediata</p>
            <h2 id="preferences-title">Preferencias de accesibilidad</h2>
            <p>
              Estos ajustes modifican la vista actual. Las preferencias que
              forman parte del proyecto se preservan durante el roundtrip.
            </p>
          </div>

          <fieldset className="preferences-grid">
            <legend>Configura la presentación visual</legend>

            <button
              type="button"
              className="preference-button"
              aria-pressed={preferences.highContrast}
              onClick={() =>
                updatePreferences({
                  ...preferences,
                  highContrast: !preferences.highContrast,
                })
              }
            >
              <span>Contraste alto</span>
              <span aria-hidden="true">
                {preferences.highContrast ? "Activado" : "Desactivado"}
              </span>
            </button>

            <button
              type="button"
              className="preference-button"
              aria-pressed={preferences.reducedMotion}
              onClick={() =>
                updatePreferences({
                  ...preferences,
                  reducedMotion: !preferences.reducedMotion,
                })
              }
            >
              <span>Reducir movimiento</span>
              <span aria-hidden="true">
                {preferences.reducedMotion ? "Activado" : "Desactivado"}
              </span>
            </button>

            <label className="select-control" htmlFor="text-scale">
              <span>Escala de texto</span>
              <select
                id="text-scale"
                value={preferences.textScale}
                onChange={(event) =>
                  updatePreferences({
                    ...preferences,
                    textScale: event.target
                      .value as AccessibilityPreferences["textScale"],
                  })
                }
              >
                {Object.entries(TEXT_SCALE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </fieldset>
        </section>

        <p className="live-status" role="status" aria-live="polite">
          {statusMessage}
        </p>

        {project ? (
          <ArcSummary
            project={project}
            useCases={useCases}
            onMessage={setStatusMessage}
          />
        ) : null}

        {recoveryState === "ready" &&
        !recoveryIssue &&
        portfolioTransfer ? (
          <PortfolioTransferPanel
            project={project}
            runtime={portfolioTransfer}
            persistenceMode={persistenceMode}
            recoverProject={useCases.recoverProject}
            onProjectImported={(importedProject) => {
              setProject(importedProject);
              setActiveMissionId(MISSION_CATALOG[0].id);
              setRecoveryIssue(false);
            }}
            onMessage={setStatusMessage}
          />
        ) : null}

        <div id="experiencia">
          {recoveryState === "checking" ? (
            <section className="panel recovery-panel" aria-live="polite">
              <p className="eyebrow">Validación local</p>
              <h2>Buscando un proyecto recuperable</h2>
              <p>
                El sistema comprueba el JSON, el schema y las invariantes antes
                de aceptar datos guardados.
              </p>
            </section>
          ) : recoveryIssue ? (
            <section
              className="panel recovery-panel"
              aria-labelledby="recovery-issue-title"
            >
              <p className="eyebrow">Recuperación detenida</p>
              <h2 id="recovery-issue-title">
                El proyecto local no puede recuperarse
              </h2>
              <p>
                Los datos no se cargarán silenciosamente. Puedes descartarlos
                y comenzar con un proyecto sintético nuevo.
              </p>
              <button
                type="button"
                className="danger-action"
                onClick={clearBrokenRecovery}
                disabled={busy}
              >
                Descartar datos locales dañados
              </button>
            </section>
          ) : project ? (
            activeMissionId === MISSION_CATALOG[3].id ? (
              <MissionFourWorkspace
                key={MISSION_CATALOG[3].id as string}
                project={project}
                useCases={useCases}
                persistenceMode={persistenceMode}
                onProjectChange={setProject}
                onMessage={setStatusMessage}
                onSelectMission={selectMission}
              />
            ) : activeMissionId === MISSION_CATALOG[2].id ? (
              <MissionThreeWorkspace
                key={MISSION_CATALOG[2].id as string}
                project={project}
                useCases={useCases}
                persistenceMode={persistenceMode}
                onProjectChange={setProject}
                onProjectDeleted={() => {
                  setProject(null);
                  setActiveMissionId(MISSION_CATALOG[0].id);
                  setStatusMessage(
                    "El proyecto local fue borrado explícitamente.",
                  );
                }}
                onMessage={setStatusMessage}
                onSelectMission={selectMission}
              />
            ) : activeMissionId === MISSION_CATALOG[1].id ? (
              <MissionTwoWorkspace
                key={MISSION_CATALOG[1].id as string}
                project={project}
                useCases={useCases}
                persistenceMode={persistenceMode}
                onProjectChange={setProject}
                onProjectDeleted={() => {
                  setProject(null);
                  setActiveMissionId(MISSION_CATALOG[0].id);
                  setStatusMessage(
                    "El proyecto local fue borrado explícitamente.",
                  );
                }}
                onMessage={setStatusMessage}
                onSelectMission={selectMission}
              />
            ) : (
              <MissionOneWorkspace
                key={MISSION_CATALOG[0].id as string}
                project={project}
                useCases={useCases}
                persistenceMode={persistenceMode}
                onProjectChange={setProject}
                onProjectDeleted={() => {
                  setProject(null);
                  setActiveMissionId(MISSION_CATALOG[0].id);
                  setStatusMessage(
                    "El proyecto local fue borrado explícitamente.",
                  );
                }}
                onMessage={setStatusMessage}
                onSelectMission={selectMission}
              />
            )
          ) : (
            <ProjectSetup
              busy={busy}
              persistenceMode={persistenceMode}
              onCreate={createLocalProject}
            />
          )}
        </div>

        <section
          id="mapa-ciclo"
          className="panel"
          aria-labelledby="cycle-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Ruta gobernada</p>
            <h2 id="cycle-title">Mapa del arco creativo completo de v0.8.0</h2>
            <p>
              H08-5.5 conserva M1–M4, integra transferencia local confirmada y
              recupera las copias importadas después de remontar la aplicación.
            </p>
          </div>

          <ol className="step-list">
            {SHELL_STEPS.map((step, index) => (
              <li
                key={step.id}
                className="step-card"
                aria-current={step.status === "current" ? "step" : undefined}
              >
                <span className="step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-state">
                  {shellStepStatusLabel(step.status)}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="assurance-grid" aria-label="Garantías del ciclo">
          <article>
            <h2>Validación al cargar</h2>
            <p>
              Un proyecto guardado debe superar JSON Schema e invariantes antes
              de regresar a la interfaz.
            </p>
          </article>
          <article>
            <h2>Privacidad de transferencia</h2>
            <p>
              Las reflexiones privadas o de alto cuidado no salen del
              dispositivo ni entran en el paquete portátil.
            </p>
          </article>
          <article>
            <h2>Control humano</h2>
            <p>
              Preparar, descargar, seleccionar e importar son acciones
              separadas, revisables y reversibles.
            </p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          PR #62 · H08-5.5 · Portafolio local · Transferencia confirmada
        </p>
      </footer>
    </div>
  );
}

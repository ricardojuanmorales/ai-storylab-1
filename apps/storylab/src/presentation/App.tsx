import { useRef, useState, type MouseEvent } from "react";
import type { StoryLabUseCases } from "../application";
import type {
  AccessibilityPreferences,
  CreativeProject,
} from "../domain/model";
import { MissionOneWorkspace } from "./MissionOneWorkspace";
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

export interface AppProps {
  readonly useCases: StoryLabUseCases;
}

export function App({ useCases }: AppProps) {
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);
  const [project, setProject] = useState<CreativeProject | null>(null);
  const [busy, setBusy] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "M1 está disponible. Comienza con un perfil sintético.",
  );
  const mainRef = useRef<HTMLElement>(null);

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
      setStatusMessage(
        "Proyecto local creado. Ahora puedes iniciar M1.",
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
        <p className="status-badge">M1 funcional · H08-2.3</p>
      </header>

      <nav className="primary-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#preferencias">Accesibilidad</a>
        <a href="#experiencia">Experiencia</a>
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
            <p className="eyebrow">Primera vertical slice funcional</p>
            <h1 id="hero-title">Tu intención creadora ya puede cerrar un ciclo</h1>
            <p className="hero-copy">
              Crea un proyecto sintético, completa M1, guarda un borrador,
              prepara evidencia, reflexiona, decide y cura un portafolio
              reversible.
            </p>
          </div>

          <aside className="boundary-card" aria-labelledby="boundary-title">
            <h2 id="boundary-title">Límites activos</h2>
            <ul>
              <li>Datos sintéticos únicamente</li>
              <li>Sin conexión de red requerida</li>
              <li>Estado efímero en memoria</li>
              <li>Sin decisiones automatizadas</li>
            </ul>
          </aside>
        </section>

        <section
          id="preferencias"
          className="panel"
          aria-labelledby="preferences-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Adaptación inmediata</p>
            <h2 id="preferences-title">Preferencias de accesibilidad</h2>
            <p>
              Estos ajustes modifican solamente la vista actual y no se
              transmiten.
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

        <div id="experiencia">
          {project ? (
            <MissionOneWorkspace
              project={project}
              useCases={useCases}
              onProjectChange={setProject}
              onMessage={setStatusMessage}
            />
          ) : (
            <ProjectSetup busy={busy} onCreate={createLocalProject} />
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
              M1 demuestra el motor reutilizable. M2, M3 y M4 permanecen
              planificadas para H08-4.
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
            <h2>Agencia humana</h2>
            <p>
              La evidencia requiere una decisión explícita antes de entrar al
              portafolio.
            </p>
          </article>
          <article>
            <h2>Privacidad por defecto</h2>
            <p>
              La reflexión es opcional, editable y privada. No se selecciona
              para exportación.
            </p>
          </article>
          <article>
            <h2>Iteración real</h2>
            <p>
              M1 puede reabrirse. Borrador, evidencia y reflexión se conservan
              mientras la curaduría anterior se invalida.
            </p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>PR #59 · M1 funcional · Datos sintéticos · Sin persistencia</p>
      </footer>
    </div>
  );
}

import { useMemo, useRef, useState } from "react";
import type { AccessibilityPreferences } from "../domain/model";
import { SHELL_STEPS } from "./shell-model";
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

export function App() {
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);
  const mainRef = useRef<HTMLElement>(null);

  const statusMessage = useMemo(() => {
    const active: string[] = [];

    if (preferences.highContrast) active.push("contraste alto");
    if (preferences.reducedMotion) active.push("movimiento reducido");
    if (preferences.textScale !== "default") {
      active.push(
        `texto ${TEXT_SCALE_LABELS[preferences.textScale].toLowerCase()}`,
      );
    }

    return active.length === 0
      ? "Preferencias de visualización en valores predeterminados."
      : `Preferencias activas: ${active.join(", ")}.`;
  }, [preferences]);

  const focusMain = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    mainRef.current?.focus();
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
        <p className="status-badge">Shell accesible · H08-2.2</p>
      </header>

      <nav className="primary-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#preferencias">Accesibilidad</a>
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
            <p className="eyebrow">Primera interfaz programable</p>
            <h1 id="hero-title">Tu proceso creativo permanece bajo tu control</h1>
            <p className="hero-copy">
              Esta versión establece una estructura visible, semántica y
              operable por teclado. Todavía no crea proyectos ni guarda datos.
            </p>
          </div>

          <aside className="boundary-card" aria-labelledby="boundary-title">
            <h2 id="boundary-title">Límites activos</h2>
            <ul>
              <li>Datos sintéticos únicamente</li>
              <li>Sin conexión de red requerida</li>
              <li>Sin persistencia durable</li>
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
              Estos ajustes modifican solamente la vista actual. No se guardan
              ni se conectan con un perfil.
            </p>
          </div>

          <fieldset className="preferences-grid">
            <legend>Configura la presentación visual</legend>

            <button
              type="button"
              className="preference-button"
              aria-pressed={preferences.highContrast}
              onClick={() =>
                setPreferences((current) => ({
                  ...current,
                  highContrast: !current.highContrast,
                }))
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
                setPreferences((current) => ({
                  ...current,
                  reducedMotion: !current.reducedMotion,
                }))
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
                  setPreferences((current) => ({
                    ...current,
                    textScale: event.target
                      .value as AccessibilityPreferences["textScale"],
                  }))
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

          <p className="live-status" role="status" aria-live="polite">
            {statusMessage}
          </p>
        </section>

        <section
          id="mapa-ciclo"
          className="panel"
          aria-labelledby="cycle-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Ruta gobernada</p>
            <h2 id="cycle-title">Mapa del arco creativo completo de v0.8.0</h2>
            <p>
              Solo la preparación visual está activa. Las cuatro misiones y el cierre
              completo se implementarán progresivamente hasta GATE-V08-CLOSE.
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
                  {step.status === "current" ? "Disponible" : "Planificado"}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="assurance-grid" aria-label="Garantías del shell">
          <article>
            <h2>Agencia humana</h2>
            <p>
              Ninguna opción creativa está preseleccionada ni puede ejecutarse
              automáticamente.
            </p>
          </article>
          <article>
            <h2>Privacidad por defecto</h2>
            <p>
              El shell no solicita identificadores personales ni transmite
              información.
            </p>
          </article>
          <article>
            <h2>Arquitectura reversible</h2>
            <p>
              La presentación consume contratos, sin importar adaptadores ni
              modificar directamente el dominio.
            </p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <p>PR #59 · Shell accesible · Datos sintéticos · Sin publicación</p>
      </footer>
    </div>
  );
}

import React from "react";

const NAV = [
  { id: "dashboard", label: "Mi panel" },
  { id: "map", label: "Misiones" },
  { id: "portfolio", label: "Portafolio" },
  { id: "badges", label: "Insignias" },
  { id: "glossary", label: "Glosario" },
  { id: "tools", label: "Herramientas" },
  { id: "final", label: "Entrega final" },
  { id: "exportimport", label: "Exportar/Importar" },
  { id: "facilitator", label: "Facilitador" },
];

/**
 * Top navigation bar. Hidden on the narrative home screen.
 */
export default function AppHeader({ view, navigate, hasProfile, displayName }) {
  return (
    <header className="app-header">
      <button className="app-header__brand" onClick={() => navigate("home")}>
        <img src="/assets/icons/flask.svg" alt="" width="28" height="28" />
        <span>
          AI StoryLab
          <small>Constructor Ético de Historias</small>
        </span>
      </button>

      <nav className="app-header__nav" aria-label="Navegación principal">
        {NAV.map((item) => {
          const disabled = !hasProfile && item.id !== "facilitator" && item.id !== "exportimport";
          return (
            <button
              key={item.id}
              className={`app-header__link ${view === item.id ? "is-active" : ""}`}
              onClick={() => navigate(item.id)}
              disabled={disabled}
              title={disabled ? "Crea tu perfil para empezar" : item.label}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {displayName ? (
        <span className="app-header__user" title="Perfil local">
          {displayName}
        </span>
      ) : null}
    </header>
  );
}

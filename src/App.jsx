import React, { useEffect, useRef, useState } from "react";

import AppHeader from "./components/AppHeader.jsx";
import MentorAvatarCard from "./components/MentorAvatarCard.jsx";
import MissionMap from "./components/MissionMap.jsx";
import MissionView from "./components/MissionView.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import GroupDashboard from "./components/GroupDashboard.jsx";
import BadgeWall from "./components/BadgeWall.jsx";
import PortfolioPanel from "./components/PortfolioPanel.jsx";
import GlossaryView from "./components/GlossaryView.jsx";
import ToolBoard from "./components/ToolBoard.jsx";
import FinalSubmissionPanel from "./components/FinalSubmissionPanel.jsx";
import ExportImportPanel from "./components/ExportImportPanel.jsx";

import {
  loadProgress,
  saveProgress,
  loadGroupProgress,
  saveGroupProgress,
} from "./utils/localStorage.js";
import { createDefaultProgress } from "./templates/defaultProgress.js";
import { createDefaultGroupProgress } from "./templates/defaultGroupProgress.js";
import { saveSession, completeSession } from "./utils/progress.js";
import { downloadProgressJSON } from "./utils/exportImport.js";

export default function App() {
  const [progress, setProgress] = useState(() => loadProgress());
  const [group, setGroup] = useState(() => loadGroupProgress() || createDefaultGroupProgress());
  const [view, setView] = useState("home");
  const [activeSessionId, setActiveSessionId] = useState(null);

  // Keep a synchronous mirror of progress for handlers that need to
  // read-then-write within a single user action.
  const progressRef = useRef(progress);
  progressRef.current = progress;

  // Autosave (the swappable persistence layer).
  useEffect(() => {
    if (progress) saveProgress(progress);
  }, [progress]);
  useEffect(() => {
    if (group) saveGroupProgress(group);
  }, [group]);

  const profileComplete = Boolean(
    progress?.profile?.student_code && progress?.profile?.display_name
  );

  function navigate(nextView, sessionId = null) {
    if (sessionId) setActiveSessionId(sessionId);
    setView(nextView);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- Mission handlers ----
  function handleSaveSession(sessionId, fields) {
    setProgress(saveSession(progressRef.current, sessionId, fields));
  }
  function handleCompleteSession(sessionId, draft) {
    const base = saveSession(progressRef.current, sessionId, draft);
    const result = completeSession(base, sessionId);
    setProgress(result.progress);
    return { ok: result.ok, badge: result.badge };
  }

  function handleExport() {
    if (progress) downloadProgressJSON(progress);
  }

  function enterLab() {
    if (!progress) {
      setProgress(createDefaultProgress());
      navigate("profile");
    } else if (!profileComplete) {
      navigate("profile");
    } else {
      navigate("dashboard");
    }
  }

  const activeSession = activeSessionId
    ? progress?.sessions.find((s) => s.session_id === activeSessionId)
    : null;

  const showHeader = view !== "home";

  return (
    <div className="app">
      {showHeader && (
        <AppHeader
          view={view}
          navigate={navigate}
          hasProfile={profileComplete}
          displayName={progress?.profile?.display_name}
        />
      )}

      <main className="app__main">
        {view === "home" && <HomeScreen navigate={navigate} enterLab={enterLab} hasProgress={!!progress} />}

        {view === "profile" && progress && (
          <ProfileScreen
            progress={progress}
            setProgress={setProgress}
            navigate={navigate}
          />
        )}

        {/* Guard student screens behind a complete profile */}
        {!profileComplete && ["dashboard", "map", "mission", "portfolio", "badges", "glossary", "tools", "final"].includes(view) && (
          <NeedsProfile navigate={navigate} enterLab={enterLab} />
        )}

        {profileComplete && view === "dashboard" && (
          <StudentDashboard
            progress={progress}
            navigate={navigate}
            onExport={handleExport}
            onImportClick={() => navigate("exportimport")}
          />
        )}

        {profileComplete && view === "map" && (
          <MissionMap progress={progress} navigate={navigate} />
        )}

        {profileComplete && view === "mission" && activeSession && (
          <MissionView
            sessionId={activeSessionId}
            session={activeSession}
            onSave={handleSaveSession}
            onComplete={handleCompleteSession}
            navigate={navigate}
          />
        )}

        {profileComplete && view === "portfolio" && (
          <PortfolioPanel progress={progress} navigate={navigate} />
        )}

        {profileComplete && view === "badges" && <BadgeWall progress={progress} />}

        {view === "glossary" && <GlossaryView />}
        {view === "tools" && <ToolBoard />}

        {profileComplete && view === "final" && (
          <FinalSubmissionPanel
            progress={progress}
            onUpdate={(fs) => setProgress({ ...progressRef.current, final_submission: fs })}
          />
        )}

        {view === "exportimport" && (
          <ExportImportPanel
            progress={progress || createDefaultProgress()}
            hasProfile={profileComplete}
            onReplaceProgress={(data) => {
              setProgress(data);
              navigate("dashboard");
            }}
          />
        )}

        {view === "facilitator" && (
          <GroupDashboard group={group} onUpdateGroup={setGroup} />
        )}
      </main>

      <footer className="app__footer">
        <p>
          AI StoryLab · MVP local-first. Este MVP guarda progreso localmente en este
          navegador. No sube datos a una base de datos. No escribas información personal sensible.
        </p>
      </footer>
    </div>
  );
}

/* --------------------------------------------------------------------- */
/* Inline screens: Home (narrative intro) and Profile (local profile).   */
/* Kept here to match the suggested folder structure.                    */
/* --------------------------------------------------------------------- */

function HomeScreen({ navigate, enterLab, hasProgress }) {
  return (
    <section className="home">
      <div className="home__hero">
        <img src="/assets/icons/flask.svg" alt="" width="56" height="56" />
        <h1>AI StoryLab</h1>
        <p className="home__subtitle">Constructor Ético de Historias Multimedia</p>
        <p className="home__lead">
          Un laboratorio de nueve misiones para crear, con responsabilidad, una historia
          multimedia asistida por IA en PowerPoint con VoiceOver — hasta tu premier final.
        </p>
      </div>

      <MentorAvatarCard
        message="Hola, soy tu Mentor IA. Te acompañaré misión a misión. Empieza creando tu perfil local y abre el laboratorio."
      />

      <div className="home__actions">
        <button className="btn btn--lg" onClick={enterLab}>
          {hasProgress ? "Continuar en el laboratorio" : "Entrar al laboratorio"}
        </button>
        <button className="btn btn--lg btn--ghost" onClick={() => navigate("exportimport")}>
          Importar progreso
        </button>
        <button className="btn btn--lg btn--ghost" onClick={() => navigate("facilitator")}>
          Vista facilitador
        </button>
      </div>

      <nav className="home__links">
        <button onClick={() => navigate("glossary")}>Glosario</button>
        <span>·</span>
        <button onClick={() => navigate("tools")}>Herramientas</button>
        <span>·</span>
        <button onClick={() => navigate("tools")}>Plantillas</button>
      </nav>

      <div className="notice">
        Este MVP guarda progreso localmente en este navegador. No sube datos a una base de datos.
        Exporta tu JSON para respaldo y entrégalo solo al facilitador si se solicita.
        No escribas información personal sensible.
      </div>
    </section>
  );
}

const MODALITIES = [
  { id: "individual", label: "Individual" },
  { id: "pareja", label: "Pareja" },
  { id: "equipo", label: "Equipo" },
];

function ProfileScreen({ progress, setProgress, navigate }) {
  const [profile, setProfile] = useState(progress.profile);
  const [title, setTitle] = useState(progress.project.title);
  const [error, setError] = useState("");

  function setP(field, value) {
    setProfile((p) => ({ ...p, [field]: value }));
  }

  function save() {
    if (!profile.student_code.trim() || !profile.display_name.trim()) {
      setError("El código de estudiante y el nombre/seudónimo son obligatorios.");
      return;
    }
    setProgress({
      ...progress,
      profile: { ...profile },
      project: { ...progress.project, title },
    });
    navigate("dashboard");
  }

  const isTeam = profile.modality !== "individual";

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Perfil local</h2>
        <p className="muted">Estos datos se guardan solo en este navegador.</p>
      </div>

      <MentorAvatarCard compact message="Usa un seudónimo si prefieres. Recuerda: no escribas información personal sensible." />

      <div className="card">
        <div className="grid-2">
          <label className="field">
            <span>Código de estudiante *</span>
            <input value={profile.student_code} onChange={(e) => setP("student_code", e.target.value)} placeholder="Ej.: EST-014" />
          </label>
          <label className="field">
            <span>Nombre o seudónimo *</span>
            <input value={profile.display_name} onChange={(e) => setP("display_name", e.target.value)} placeholder="Ej.: Estrella" />
          </label>
          <label className="field">
            <span>Grado</span>
            <input value={profile.grade} onChange={(e) => setP("grade", e.target.value)} placeholder="Ej.: 10mo" />
          </label>
          <label className="field">
            <span>Cohorte</span>
            <input value={profile.cohort} onChange={(e) => setP("cohort", e.target.value)} placeholder="Ej.: Primavera 2026" />
          </label>
          <label className="field">
            <span>Modalidad</span>
            <select value={profile.modality} onChange={(e) => setP("modality", e.target.value)}>
              {MODALITIES.map((m) => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
          </label>
          <label className="field">
            <span>Nombre del equipo</span>
            <input value={profile.team_name} onChange={(e) => setP("team_name", e.target.value)} disabled={!isTeam} placeholder={isTeam ? "Nombre del equipo" : "Solo para pareja/equipo"} />
          </label>
          <label className="field">
            <span>Título del proyecto</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="El título de tu historia" />
          </label>
          <label className="field">
            <span>Docente</span>
            <input value={profile.teacher_name} onChange={(e) => setP("teacher_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Facilitador/a</span>
            <input value={profile.facilitator_name} onChange={(e) => setP("facilitator_name", e.target.value)} />
          </label>
          <label className="field">
            <span>Auspiciador (sponsor)</span>
            <input value={profile.sponsor_name} onChange={(e) => setP("sponsor_name", e.target.value)} />
          </label>
        </div>

        {error && <div className="flash flash--warn">{error}</div>}

        <div className="actions">
          <button className="btn" onClick={save}>Guardar perfil y entrar</button>
          <button className="btn btn--ghost" onClick={() => navigate("home")}>Volver</button>
        </div>
      </div>
    </section>
  );
}

function NeedsProfile({ enterLab }) {
  return (
    <section className="screen">
      <div className="card center">
        <MentorAvatarCard compact message="Primero crea tu perfil local para abrir el laboratorio." />
        <div className="actions">
          <button className="btn" onClick={enterLab}>Crear mi perfil</button>
        </div>
      </div>
    </section>
  );
}

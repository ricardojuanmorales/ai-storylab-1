import { useState, type FormEvent } from "react";
import type { CreateProjectInput } from "../application";
import type { PersistenceMode } from "./persistence-mode";

export interface ProjectSetupProps {
  readonly busy: boolean;
  readonly persistenceMode: PersistenceMode;
  readonly onCreate: (input: CreateProjectInput) => Promise<void>;
}

export function ProjectSetup({
  busy,
  persistenceMode,
  onCreate,
}: ProjectSetupProps) {
  const [pseudonym, setPseudonym] = useState("");
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onCreate({
      pseudonym,
      title,
      ...(context.trim() ? { context } : {}),
    });
  };

  return (
    <section className="panel" aria-labelledby="project-setup-title">
      <div className="section-heading">
        <p className="eyebrow">Perfil sintético</p>
        <h2 id="project-setup-title">Crea un proyecto local</h2>
        <p>
          Usa un seudónimo. No escribas nombre, correo, número estudiantil ni
          otros identificadores personales.
        </p>
        <p className="storage-mode-note">
          {persistenceMode === "local"
            ? "El proyecto se guardará automáticamente en este navegador."
            : "El almacenamiento local no está disponible; el proyecto durará solamente esta sesión."}
        </p>
      </div>

      <form className="form-grid" onSubmit={submit}>
        <label>
          <span>Seudónimo local</span>
          <input
            name="pseudonym"
            value={pseudonym}
            onChange={(event) => setPseudonym(event.target.value)}
            autoComplete="off"
            required
            maxLength={80}
          />
        </label>

        <label>
          <span>Título del proyecto</span>
          <input
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            maxLength={120}
          />
        </label>

        <label className="form-span">
          <span>Contexto opcional</span>
          <input
            name="context"
            value={context}
            onChange={(event) => setContext(event.target.value)}
            maxLength={120}
            aria-describedby="context-help"
          />
          <small id="context-help">
            Describe el tipo de taller o práctica, sin incluir datos reales.
          </small>
        </label>

        <button className="primary-action" type="submit" disabled={busy}>
          {busy ? "Creando proyecto…" : "Crear proyecto local"}
        </button>
      </form>
    </section>
  );
}

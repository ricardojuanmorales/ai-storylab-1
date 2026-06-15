import React, { useMemo, useState } from "react";
import glossaryData from "../data/glossary.json";
import sessionsData from "../data/sessions.json";

const sessionTitle = Object.fromEntries(
  sessionsData.sessions.map((s) => [s.session_id, `${s.session_id} · ${s.title}`])
);

/**
 * Searchable, filterable glossary (by category, session and tags).
 */
export default function GlossaryView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [session, setSession] = useState("");
  const [tag, setTag] = useState("");

  const allTags = useMemo(() => {
    const set = new Set();
    glossaryData.terms.forEach((t) => (t.tags || []).forEach((x) => set.add(x)));
    return [...set].sort();
  }, []);

  const filtered = glossaryData.terms.filter((t) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
    const matchesCat = !category || t.category === category;
    const matchesSession = !session || (t.sessions || []).includes(session);
    const matchesTag = !tag || (t.tags || []).includes(tag);
    return matchesQuery && matchesCat && matchesSession && matchesTag;
  });

  return (
    <section className="screen">
      <div className="screen__head">
        <h2>Glosario</h2>
        <p className="muted">Busca y filtra los términos clave del laboratorio.</p>
      </div>

      <div className="filters">
        <input
          className="filters__search"
          type="search"
          placeholder="Buscar término o definición…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas las categorías</option>
          {glossaryData.categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select value={session} onChange={(e) => setSession(e.target.value)}>
          <option value="">Todas las sesiones</option>
          {sessionsData.sessions.map((s) => (
            <option key={s.session_id} value={s.session_id}>{sessionTitle[s.session_id]}</option>
          ))}
        </select>
        <select value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="">Todos los tags</option>
          {allTags.map((t) => (
            <option key={t} value={t}>#{t}</option>
          ))}
        </select>
      </div>

      <p className="muted small">{filtered.length} término(s)</p>

      <div className="glossary-list">
        {filtered.map((t) => (
          <article key={t.term_id} className="glossary-item">
            <header>
              <h3>{t.term}</h3>
              <span className="tag tag--cat">{t.category}</span>
            </header>
            <p>{t.definition}</p>
            <footer className="glossary-item__foot">
              {(t.sessions || []).map((sid) => (
                <span key={sid} className="tag">{sessionTitle[sid] || sid}</span>
              ))}
              {(t.tags || []).map((x) => (
                <span key={x} className="tag tag--muted">#{x}</span>
              ))}
            </footer>
          </article>
        ))}
        {filtered.length === 0 && <p className="muted">No hay términos con esos filtros.</p>}
      </div>
    </section>
  );
}

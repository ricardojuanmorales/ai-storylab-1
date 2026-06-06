# Primer — Contexto General de AI StoryLab

**Versión del proyecto:** 0.2.1 · **Fecha de actualización:** 2026-06-05

---

## Qué es el proyecto

AI StoryLab es una aplicación educativa **local-first** para apoyar un taller de **9 sesiones** de introducción a IA para estudiantes de escuela superior.

Los estudiantes crean una **historia multimedia asistida por IA** usando PowerPoint con VoiceOver, documentan su proceso en un **portafolio emergente**, ganan **badges**, registran decisiones humanas en cada sesión y presentan un **video final en una premier**.

---

## Estado actual del MVP (v0.2.0)

La aplicación está **completamente funcional** con las siguientes características:

**Pantallas / componentes:**
- Pantalla de Inicio con Profesor Aión (avatar mentor)
- Configuración de perfil (código, seudónimo, grado, equipo, proyecto...)
- Dashboard del estudiante (progreso, fase, próxima misión, insignias)
- Mapa de 9 misiones con estado
- Vista de misión (evidencia, herramienta, prompt, decisión humana, reflexión ética)
- Portafolio emergente (texto copiable por sección)
- Muro de insignias (9 badges con competencias)
- Glosario con búsqueda y filtros
- Tablero de herramientas con búsqueda y filtros
- Exportar / importar progreso individual (JSON con validación)
- Dashboard grupal del facilitador (importa múltiples JSON, fusiona, exporta group_progress.json)
- Estación de Entrega Final (metadatos del video; sin almacenar el archivo)

**Tecnologías:**
- React 18 + Vite 5 (sin backend)
- localStorage para persistencia
- Sin autenticación, sin Supabase, sin APIs externas

**Datos:**
- `src/data/sessions.json` — 9 sesiones con 4 fases
- `src/data/badges.json` — 9 insignias con competencias
- `src/data/glossary.json` — términos del taller
- `src/data/tools.json` — herramientas recomendadas
- `src/data/competencies.json` — competencias clave

**Modelo de datos:**
- Progreso individual: `export_type: "student_progress"`, `schema_version: "0.2.0"`
- Progreso grupal: `export_type: "group_progress"`, `schema_version: "0.2.0"`
- Fusión grupal por `student_code + last_updated`

---

## Principios que NUNCA se rompen

- **Local-first** — funciona sin conexión; toda la lógica vive en el navegador
- **Portafolio emergente** — se acumula de las misiones; no es una tarea separada
- **Decisión humana obligatoria** — campo requerido para completar cualquier misión
- **Sin backend en el MVP** — no hay servidor, no hay Supabase, no hay APIs externas
- **Privacidad por defecto** — no se recopila ni transmite ningún dato
- **Lógica desacoplada** — `src/utils/` son funciones puras (preparadas para migrar a API)

---

## Repositorio

- GitHub: `https://github.com/ricardojuanmorales/ai-storylab-1` (público)
- Rama principal: `main`
- Gobernanza en: `governance/`
- Decisiones en: `governance/DECISION_LOG.md`
- Bitácoras en: `logs/`

---

## Lo que NO existe todavía (fuera del alcance del MVP)

- Login / autenticación
- Base de datos remota
- Subida de archivos o videos
- APIs de IA en tiempo real
- Galería pública
- Generación automática de Word/PDF

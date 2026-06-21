# Primer — Contexto General de AI StoryLab

**Versión del proyecto:** 0.3.0 · **Fecha de actualización:** 2026-06-05

---

## Qué es el proyecto

AI StoryLab es una aplicación educativa **local-first** para apoyar un taller de **9 sesiones** de introducción a IA para estudiantes de escuela superior.

Los estudiantes crean una **historia multimedia asistida por IA** usando PowerPoint con VoiceOver, documentan su proceso en un **portafolio emergente**, ganan **badges**, registran decisiones humanas en cada sesión y presentan un **video final en una premier**.

---

## Estado actual (v0.3.0)

La aplicación está **completamente funcional y desplegada en GitHub Pages** (`ricardojuanmorales.github.io/ai-storylab-1/`).

**Componentes (17 total):**
- Pantalla de Inicio con Profesor Aión
- Perfil con avatar upload (base64 localStorage)
- Dashboard del estudiante (avatar, progreso, fase, próxima misión)
- Mapa de 9 misiones
- Vista de misión con:
  - `LudicActivityWidget` — 9 tipos de actividad interactiva que produce el portafolio
  - `SuggestedPromptBox` — prompt sugerido por misión con copiar y pre-llenar
  - Chips de glosario (5-6 términos por misión con definición expandible)
  - Evidencia, herramienta, prompt_used, decisión humana, reflexión ética
- Portafolio emergente (incluye ludic_output desde v0.3.0)
- Muro de insignias (soporta imágenes en `public/badges/`)
- Tablero de herramientas con `ToolCategoryView` por categoría
- Glosario global (43 términos, 8 categorías)
- Exportar / importar progreso (JSON)
- Dashboard grupal del facilitador
- Estación de Entrega Final

**Tecnologías:**
- React 18 + Vite 5, `base: "/ai-storylab-1/"` para GitHub Pages
- `gh-pages` para deploy automático (`npm run deploy`)
- localStorage para persistencia; sin backend, sin Supabase, sin APIs externas

**Datos (schema_version: "0.3.0"):**
- `src/data/sessions.json` — 9 sesiones con `ludic_config`, `suggested_prompt`, `glossary_terms`
- `src/data/glossary.json` — 43 términos en 8 categorías con `sessions: []`
- `src/data/tools.json` — 6 categorías con `strategies`, `recommended_prompts`, `teacher_note`
- `src/data/badges.json` — 9 insignias con competencias
- `src/data/competencies.json` — 7 competencias

**Modelo de datos:**
- Progreso individual: `export_type: "student_progress"`, `schema_version: "0.3.0"`
- Nuevo campo: `sessions[n].ludic_output: {}` — output de la actividad lúdica
- Nuevo campo: `profile.avatar_base64` — foto de perfil en base64
- Progreso grupal: `export_type: "group_progress"`, `schema_version: "0.3.0"`
- Fusión grupal por `student_code + last_updated`

---

## Principios que NUNCA se rompen

- **Local-first** — funciona sin conexión; toda la lógica vive en el navegador
- **Portafolio emergente** — la actividad lúdica produce el portafolio; no es una tarea separada
- **Decisión humana obligatoria** — campo requerido para completar cualquier misión
- **Sin backend** — no hay servidor, no hay Supabase, no hay APIs externas
- **Privacidad por defecto** — no se recopila ni transmite ningún dato
- **Lógica desacoplada** — `src/utils/` son funciones puras (preparadas para migrar a API)
- **Andamiaje en contexto** — el prompt sugerido aparece en la misión, no en un doc externo

---

## Repositorio y Deploy

- GitHub: `https://github.com/ricardojuanmorales/ai-storylab-1` (público)
- GitHub Pages: `https://ricardojuanmorales.github.io/ai-storylab-1/`
- Rama principal: `main`; rama de deploy: `gh-pages`
- Gobernanza: `04_GOBERNANZA_ETICA_Y_RIESGOS/` | Decisiones: `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_Completo_v0_4_0.md`
- Bitácoras: `18_DOCUMENTACION_ACTIVA/Bitacoras/` | Guías: `21_WIKI_DOCUMENTACION_HUMANA/`

**Para publicar cambios:** `npm run deploy`
**Para personalizar herramientas:** editar `teacher_note` en `src/data/tools.json` → `npm run deploy`
**Para imágenes:** subir a `public/badges/` o `public/images/` vía GitHub web UI → `npm run deploy`

---

## Lo que NO existe todavía

- Login / autenticación
- Base de datos remota
- Subida de archivos o videos desde la app
- APIs de IA en tiempo real
- Galería pública dinámica
- Pre-llenado automático de variables del prompt sugerido con datos del perfil

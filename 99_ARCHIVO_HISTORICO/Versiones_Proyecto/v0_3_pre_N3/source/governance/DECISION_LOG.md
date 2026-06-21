# DECISION_LOG.md — Registro de Decisiones

**Proyecto:** AI StoryLab: Constructor Ético de Historias Multimedia
**Propósito:** Registrar cronológicamente las decisiones técnicas, pedagógicas y de gobernanza que no son obvias desde el código.

---

## DEC-0001 — MVP local-first sin Supabase

**Fecha:** 2026-06-05
**Responsable:** Equipo AI StoryLab
**Contexto:** Se requería un MVP funcional para el taller antes de implementar autenticación o base de datos remota.
**Decisión:** El MVP es local-first: sin backend, sin Supabase, sin autenticación. Usa `localStorage` y exportación/importación JSON.
**Alternativas consideradas:** Supabase desde el inicio, Google OAuth, dashboard remoto con Firebase.
**Razón:** Reducir complejidad de implementación, proteger privacidad de estudiantes y ejecutar el taller con resiliencia ante fallas de conectividad.
**Impacto:** Supabase, autenticación y backend quedan planificados para v1.0.0.
**Estado:** Activa.

---

## DEC-0002 — Gobernanza documentada desde el día 1

**Fecha:** 2026-06-05
**Responsable:** Equipo AI StoryLab
**Contexto:** El proyecto involucra IA, datos de menores de edad y decisiones pedagógicas de alto impacto. Se necesitaba un marco de trabajo explícito antes de escribir código.
**Decisión:** Crear el kit de gobernanza inicial (governance/, logs/, prompts/, primers/) antes de iniciar el desarrollo de la aplicación.
**Alternativas consideradas:** Documentar después del MVP, usar solo un README.
**Razón:** La gobernanza tardía acumula deuda de documentación difícil de saldar. La memoria institucional debe instalarse antes de que el proyecto crezca.
**Impacto:** El repositorio tiene trazabilidad completa desde el primer commit. Esto facilita la revisión ética, la continuidad del desarrollo y la investigación educativa.
**Estado:** Activa.

---

## DEC-0003 — Portafolio emergente en lugar de portafolio separado

**Fecha:** 2026-06-05
**Responsable:** Curador pedagógico
**Contexto:** Los portafolios educativos tradicionales se construyen al final del proceso, lo que genera trabajo extra y reflexión retrospectiva de baja calidad.
**Decisión:** El portafolio de AI StoryLab se construye automáticamente a partir de las entradas de cada misión. No existe como tarea separada.
**Alternativas consideradas:** Sección de portafolio libre al final del taller, plantilla Word descargable, exportación al final de S9.
**Razón:** La reflexión es de mayor calidad cuando ocurre en el momento de la creación. Eliminar la "tarea del portafolio" reduce fricción y aumenta la adherencia al proceso.
**Impacto:** La completitud de una misión requiere los tres componentes (evidencia + decisión humana + reflexión ética). El portafolio es un efecto secundario del trabajo bien hecho.
**Estado:** Activa.

---

## DEC-0004 — Documentación lúdica y guías de usuario como parte del repositorio

**Fecha:** 2026-06-05
**Responsable:** Facilitador técnico
**Contexto:** El repositorio era técnicamente completo pero carecía de documentación accesible para los usuarios finales (estudiantes y facilitadores).
**Decisión:** Crear guías de usuario detalladas, un README motivacional ilustrado y documentación de evolución como parte del repositorio oficial.
**Alternativas consideradas:** Documentación en Notion externo, manual PDF separado, Google Doc compartido.
**Razón:** Mantener la documentación en el repositorio garantiza que esté siempre sincronizada con el código y versionada con Git. Una documentación lúdica reduce la barrera de adopción del taller.
**Impacto:** `docs/guia-estudiante.md`, `docs/guia-facilitador.md`, `docs/EVOLUCION_APP.md` y `README.md` actualizado son la referencia oficial del proyecto.
**Estado:** Activa.

---

## DEC-0006 — Actividad lúdica como mecanismo de producción del portafolio

**Fecha:** 2026-06-05
**Responsable:** Curador pedagógico + Desarrollador
**Contexto:** Las actividades lúdicas de las 9 misiones existían solo como texto descriptivo estático. Los estudiantes las hacían "offline" sin captura digital; el resultado nunca llegaba al portafolio.
**Decisión:** Cada actividad lúdica se convierte en un widget interactivo cuyo output se guarda en `sessions[n].ludic_output` y fluye directamente al portafolio emergente. La actividad produce el `expected_product` de la misión.
**Alternativas consideradas:** Mantener la actividad offline y solo capturar una reflexión posterior; usar una sección genérica de "notas de actividad".
**Razón:** La actividad lúdica no es un calentamiento — es el mecanismo de producción. Si el portafolio debe ser emergente, debe emerger desde el trabajo más activo de la sesión, no desde un resumen posterior.
**Impacto:** 9 tipos de widget creados (dilema ético, contador de palabras, ficha de avatar, tres actos, moodboard, lectura dramatizada, retroalimentación de pares, checklist, reflexión). La actividad es optativa para el badge pero obligatoria pedagógicamente.
**Estado:** Activa.

---

## DEC-0007 — Prompt sugerido como andamiaje IA embebido por misión

**Fecha:** 2026-06-05
**Responsable:** Curador pedagógico
**Contexto:** El campo `prompt_used` existía pero era un textarea vacío. Los estudiantes no sabían qué escribir; muchos lo dejaban en blanco o escribían prompts genéricos sin contexto pedagógico.
**Decisión:** Cada misión tiene un `suggested_prompt` en `sessions.json` — plantilla con `[variables]` que el estudiante personaliza antes de usar. Un componente `SuggestedPromptBox` lo muestra con botón "Copiar y usar" que pre-llena el campo.
**Alternativas consideradas:** Guía PDF externa de prompts, sección de ayuda separada, ejemplo fijo en el placeholder.
**Razón:** El andamiaje más efectivo es el que aparece en el momento exacto en que se necesita, no en un documento separado. El prompt sugerido reduce la barrera de entrada al uso de IA y modela buenas prácticas de prompting contextualizado.
**Impacto:** 9 prompts sugeridos por misión con variables contextuales (tema, audiencia, personaje, etc.).
**Estado:** Activa.

---

## DEC-0008 — Tablero de herramientas expandido con páginas de categoría

**Fecha:** 2026-06-05
**Responsable:** Desarrollador + Facilitador técnico
**Contexto:** El tablero de herramientas era una lista filtrable plana de 8 herramientas. No contenía estrategias de uso, prompts recomendados ni espacio para que el profesor añadiera herramientas específicas de su institución.
**Decisión:** Las 6 categorías (Texto, Imagen, Audio, Presentación, Video, Organización) tienen páginas de detalle con: estrategias pedagógicas, prompts recomendados copiables y un campo `teacher_note` editable en `tools.json`.
**Alternativas consideradas:** Documentación externa en PDF, Notion o Google Docs para estrategias de herramientas.
**Razón:** La documentación pedagógica de herramientas debe vivir en el mismo sistema que usa el estudiante, no en un documento separado. El campo `teacher_note` permite personalización sin código: el profesor edita el JSON y hace `npm run deploy`.
**Impacto:** `ToolCategoryView.jsx` creado, `tools.json` expandido con array `categories[]`. La personalización docente es edición de JSON, no programación.
**Estado:** Activa.

---

## DEC-0009 — Avatar de perfil en localStorage; imágenes de insignias y hero en public/

**Fecha:** 2026-06-05
**Responsable:** Desarrollador
**Contexto:** No había forma de personalizar las imágenes del estudiante (avatar) ni las del sitio (hero, badges). El proyecto local-first no tiene backend para subir imágenes.
**Decisión:** Tres enfoques diferenciados: (1) Avatar del estudiante → FileReader base64 en localStorage (efímero, ~100KB); (2) Hero e insignias → archivos estáticos en `public/images/` y `public/badges/` gestionados por el profesor vía GitHub web UI; (3) Fallback al ícono actual si no existe la imagen personalizada.
**Alternativas consideradas:** URLs externas de imagen, subida a GitHub via API con token, sin personalización.
**Razón:** La solución más simple que funciona dentro del constraint local-first. El profesor no necesita saber programar para subir imágenes — el drag-and-drop de GitHub es suficiente.
**Impacto:** `profile.avatar_base64` en el esquema de progreso. `BadgeWall.jsx` con fallback onError. Carpetas `public/images/` y `public/badges/` creadas.
**Estado:** Activa.

---

## DEC-0005 — Decisión humana como campo obligatorio de misión

**Fecha:** 2026-06-05
**Responsable:** Curador pedagógico + Revisor ético
**Contexto:** En los primeros diseños del MVP, los estudiantes podían completar misiones sin documentar su aportación personal, lo que permitía delegar el trabajo a la IA.
**Decisión:** El campo "decisión humana" es obligatorio para marcar una misión como completada. Sin este campo, la misión no puede cerrarse.
**Alternativas consideradas:** Campo opcional, sección de reflexión final del taller, entrevista con el facilitador.
**Razón:** La diferencia entre "usar IA" y "crear con IA responsablemente" es la capacidad de articular qué decidiste tú. Si el estudiante no puede nombrarlo, la IA hizo demasiado.
**Impacto:** Refuerza la agencia humana en cada etapa del proceso creativo. Es el indicador principal de que el estudiante está aprendiendo, no solo produciendo.
**Estado:** Activa.

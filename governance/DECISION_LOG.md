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

## DEC-0005 — Decisión humana como campo obligatorio de misión

**Fecha:** 2026-06-05
**Responsable:** Curador pedagógico + Revisor ético
**Contexto:** En los primeros diseños del MVP, los estudiantes podían completar misiones sin documentar su aportación personal, lo que permitía delegar el trabajo a la IA.
**Decisión:** El campo "decisión humana" es obligatorio para marcar una misión como completada. Sin este campo, la misión no puede cerrarse.
**Alternativas consideradas:** Campo opcional, sección de reflexión final del taller, entrevista con el facilitador.
**Razón:** La diferencia entre "usar IA" y "crear con IA responsablemente" es la capacidad de articular qué decidiste tú. Si el estudiante no puede nombrarlo, la IA hizo demasiado.
**Impacto:** Refuerza la agencia humana en cada etapa del proceso creativo. Es el indicador principal de que el estudiante está aprendiendo, no solo produciendo.
**Estado:** Activa.

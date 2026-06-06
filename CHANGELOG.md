# Changelog — AI StoryLab

Todas las modificaciones importantes del MVP se registran aquí siguiendo [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y [Semantic Versioning](https://semver.org/lang/es/).

---

## [0.2.1] — 2026-06-05

### Added
- `README.md` motivacional con emojis, descripción detallada de misiones, insignias y principios de IA responsable
- `docs/guia-estudiante.md` — guía completa paso a paso para estudiantes del taller
- `docs/guia-facilitador.md` — guía operativa para facilitadores con checklist por sesión y situaciones frecuentes
- `docs/EVOLUCION_APP.md` — documentación oficial de la evolución del proyecto, principios arquitecturales y hoja de ruta

### Changed
- `governance/GOVERNANCE.md` — expandido con roles detallados, proceso de cambio documentado, formato de commits y regla de alcance
- `governance/AI_USAGE_POLICY.md` — expandido con política completa: qué puede y no puede hacer la IA, protocolo de trabajo por sesión, transparencia y registro de incidentes
- `governance/DECISION_LOG.md` — agregadas entradas DEC-0002, DEC-0003, DEC-0004 y DEC-0005
- `logs/session-0001.md` — bitácora completada con datos reales de la sesión de inicialización
- `logs/SESSION_LOG_INDEX.md` — actualizado con ambas sesiones
- `primers/PRIMER_PROJECT_CONTEXT.md` — expandido con estado actual del MVP v0.2.0
- `primers/PRIMER_CLAUDE_COWORK.md` — expandido con instrucciones de contexto y referencias a archivos clave
- `prompts/activation-prompts/activate-context-general.md` — expandido con reglas completas, criterios de aceptación y protocolo de cierre

### Added (logs)
- `logs/session-0002.md` — bitácora de la sesión de documentación y gobernanza

---

## [0.2.0] — 2026-06-05

### Added
- Aplicación React + Vite completa (14 componentes)
- Sistema de 9 misiones con 4 fases (Fundamentos Éticos, Construcción Narrativa, Producción Multimedia, Curaduría y Entrega)
- Perfil local del estudiante (código, seudónimo, grado, cohorte, modalidad, equipo, proyecto, docente, facilitador, sponsor)
- Dashboard del estudiante: progreso, fase actual, próxima misión, estado de entrega final
- Mapa de 9 misiones con estado (bloqueada / pendiente / completada)
- Vista de misión completa: evidencia, herramienta, prompt, decisión humana, reflexión ética, guardar y completar
- Portafolio emergente: se construye automáticamente de las entradas de misiones; texto listo para copiar
- Muro de insignias con 9 badges y competencias asociadas
- Glosario con búsqueda y filtros por categoría
- Tablero de herramientas con búsqueda y filtros
- Exportar/importar progreso individual en JSON (con validación de esquema y advertencia antes de reemplazar)
- Dashboard grupal del facilitador: importa múltiples JSON, fusiona por `student_code + last_updated`, tabla e indicadores agregados, exporta `group_progress.json`
- Estación de Entrega Final: metadatos del video (nombre, ubicación, validaciones); no almacena el archivo
- Datos base: `sessions.json`, `badges.json`, `glossary.json`, `tools.json`, `competencies.json`
- Plantillas de progreso: `defaultProgress.js`, `defaultGroupProgress.js`
- Persistencia en `localStorage` vía `src/utils/localStorage.js`
- Lógica desacoplada en `src/utils/` (preparada para migrar a API)
- Repositorio Git inicializado y publicado en GitHub (público)

---

## [0.1.0] — 2026-06-05

### Added
- Kit inicial de gobernanza del repositorio
- Estructura de carpetas: `governance/`, `logs/`, `prompts/`, `primers/`, `compendia/`, `docs/`
- Archivos de gobernanza: GOVERNANCE, PRIVACY_LOCAL_FIRST, AI_USAGE_POLICY, DECISION_LOG (DEC-0001), RISK_REGISTER, REVIEW_CHECKLIST, RELEASE_CRITERIA, CONTRIBUTING
- Plantilla de bitácora de sesión e índice de sesiones
- Prompts de activación general y de debugging
- Prompts de tarea: build-localstorage, build-structure, build-group-dashboard, build-final-submission
- Prompts de revisión: review-architecture, review-privacy
- Prompt maestro del MVP
- Primers: PRIMER_PROJECT_CONTEXT, PRIMER_MVP_SCOPE, PRIMER_DATA_MODEL, PRIMER_CLAUDE_COWORK
- Compendio inicial del MVP
- `README.md` inicial
- `.gitignore` base

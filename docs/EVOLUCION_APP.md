# 📈 Evolución de AI StoryLab — Documentación Oficial

**Proyecto:** AI StoryLab: Constructor Ético de Historias Multimedia
**Repositorio:** https://github.com/ricardojuanmorales/ai-storylab-1
**Documento:** Registro cronológico de versiones, decisiones y evolución del MVP

---

## Propósito

Este documento registra la **historia técnica y pedagógica** de AI StoryLab: qué existía, qué se agregó, por qué se tomaron ciertas decisiones y hacia dónde se proyecta el proyecto. Es una fuente de memoria institucional para el equipo de desarrollo y para investigadores educativos que estudien la evolución del MVP.

> *"Un proyecto que no recuerda cómo llegó hasta aquí no puede decidir con claridad hacia dónde va."*

---

## 🗓️ Línea de Tiempo

### v0.1.0 — Kit de Gobernanza Inicial
**Fecha:** 2026-06-05
**Tipo:** Inicialización de repositorio

**Qué se hizo:**
- Diseño del kit inicial en ChatGPT (Documento 19 del proyecto)
- Estructura de carpetas de gobernanza: `governance/`, `logs/`, `prompts/`, `primers/`, `compendia/`, `docs/`
- Archivos de gobernanza base: GOVERNANCE, PRIVACY, AI_USAGE_POLICY, DECISION_LOG, RISK_REGISTER, REVIEW_CHECKLIST, RELEASE_CRITERIA
- Plantillas de bitácora de sesión e índice de sesiones
- Prompts de activación, tarea y revisión
- Primers de contexto para Claude CoWork
- Compendium inicial del MVP

**Decisiones tomadas:**
- Gobernanza desde el día 1, antes del código (principio "memoria primero")
- Estructura de carpetas diseñada para trazabilidad a largo plazo
- Separación explícita entre código (`src/`) y gobernanza (`governance/`)

**Estado al cerrar:** Kit de gobernanza listo; código aún no inicializado.

---

### v0.2.0 — MVP Local-First Completo
**Fecha:** 2026-06-05
**Tipo:** Primera versión funcional de la aplicación

**Qué se construyó:**
- Aplicación React + Vite completa con 14 componentes
- Sistema de 9 misiones con fases, objetivos y actividades
- Perfil local del estudiante (código, seudónimo, grado, equipo, proyecto)
- Dashboard del estudiante con progreso, fase actual e insignias
- Mapa de 9 misiones con estado (bloqueada / pendiente / completada)
- Vista de misión: evidencia, herramienta, prompt, decisión humana, reflexión ética
- Portafolio emergente (se construye automáticamente de las misiones)
- Muro de insignias con competencias asociadas
- Glosario con búsqueda y filtros
- Tablero de herramientas con búsqueda y filtros
- Exportar/importar progreso individual en JSON (con validación)
- Dashboard grupal del facilitador (importa múltiples JSON, fusiona por student_code)
- Estación de Entrega Final (metadatos del video, sin almacenar el archivo)
- Datos JSON: sessions, badges, glossary, tools, competencies
- Plantillas de progreso individual y grupal
- Persistencia en localStorage

**Arquitectura:**
- Local-first sin backend
- Sin autenticación
- Sin Supabase
- Sin APIs externas
- Portafolio emergente (acumulación automática)
- Exportación acumulativa por student_code + last_updated
- Toda la lógica de negocio en `src/utils/` como funciones puras (preparado para migrar a API)

**Decisiones de diseño clave:**
- El portafolio emerge del trabajo en misiones, no se construye al final → reduce fricción y promueve reflexión continua
- La fusión grupal por `student_code + last_updated` evita duplicados sin backend
- La Estación de Entrega Final registra solo metadatos → mantiene la promesa de privacidad
- La "decisión humana" es campo obligatorio para completar misión → refuerza el principio de agencia humana

**Repositorio:**
- Inicialización de Git con commit inicial
- Repositorio público en GitHub: `ricardojuanmorales/ai-storylab-1`
- `.gitignore` actualizado para excluir `dist/`, `node_modules/`, archivos temporales de Vite

---

### v0.2.1 — Documentación y Guías de Usuario
**Fecha:** 2026-06-05
**Tipo:** Documentación oficial, gobernanza expandida, cierre de sesiones

**Qué se agregó:**
- `README.md` motivacional con emojis, detalle de todas las misiones y principios de IA responsable
- `docs/guia-estudiante.md` — guía completa paso a paso para estudiantes
- `docs/guia-facilitador.md` — guía operativa para facilitadores con checklist por sesión
- `docs/EVOLUCION_APP.md` — este documento
- `governance/GOVERNANCE.md` — expandido con roles detallados, proceso de cambio y principios
- `governance/AI_USAGE_POLICY.md` — expandido con política detallada de uso responsable de IA
- `governance/DECISION_LOG.md` — nuevas entradas DEC-0002 y DEC-0003
- `CHANGELOG.md` — entradas v0.2.0 y v0.2.1
- `logs/session-0001.md` — bitácora completada de la sesión de inicialización
- `logs/session-0002.md` — bitácora de la sesión de documentación
- `logs/SESSION_LOG_INDEX.md` — índice actualizado
- `primers/PRIMER_PROJECT_CONTEXT.md` — expandido con estado actual del MVP
- `primers/PRIMER_CLAUDE_COWORK.md` — expandido con instrucciones de contexto completo
- `prompts/activation-prompts/activate-context-general.md` — expandido con reglas y criterios

**Decisiones tomadas:**
- Documentación lúdica y accesible para reducir la curva de adopción del taller
- Guía del facilitador incluye checklist por sesión y situaciones frecuentes
- Bitácoras cerradas con datos reales de lo que se construyó

---

## 🔭 Hoja de Ruta (Versiones Futuras)

Las siguientes funcionalidades están fuera del alcance del MVP y planificadas para iteraciones posteriores:

### v0.3.0 — Mejoras de UX (planificado)
- [ ] Animaciones de transición entre misiones
- [ ] Indicador visual de portafolio en construcción
- [ ] Vista previa del portafolio emergente en tiempo real
- [ ] Modo oscuro

### v0.4.0 — Herramientas del Facilitador (planificado)
- [ ] Exportación del reporte grupal en CSV
- [ ] Gráficas de progreso agregadas en el dashboard grupal
- [ ] Plantillas de bitácora de sesión descargables

### v1.0.0 — Versión con Backend (futuro)
- [ ] Autenticación (OAuth / Supabase)
- [ ] Base de datos remota para progreso
- [ ] Dashboard grupal en tiempo real
- [ ] APIs externas de IA integradas (generación de texto, imágenes)
- [ ] Subida y almacenamiento de videos

### v2.0.0 — Versión Institucional (futuro)
- [ ] Galería pública dinámica de proyectos
- [ ] Generación automática de portafolio en Word/PDF
- [ ] Rúbricas de evaluación integradas
- [ ] Exportación de datos para investigación (anonimizados)

---

## 📐 Principios Arquitecturales Permanentes

Independientemente de la versión, estos principios guían el diseño:

1. **Local-first primero** — toda funcionalidad nueva debe funcionar sin conexión antes de agregar cloud
2. **Portafolio emergente** — el portafolio nunca es un paso separado; emerge del trabajo
3. **Decisión humana obligatoria** — ninguna misión puede completarse sin una decisión documentada del estudiante
4. **Privacidad por defecto** — no recopilar datos que no sean necesarios para la función
5. **Lógica desacoplada** — toda la lógica de negocio vive en `src/utils/` como funciones puras, preparadas para migrar el adaptador de almacenamiento sin tocar componentes
6. **Gobernanza documentada** — cada decisión técnica relevante se registra en `governance/DECISION_LOG.md`

---

## 📊 Métricas del Repositorio

| Versión | Archivos | Líneas de código | Componentes | Documentos |
|---|---|---|---|---|
| v0.1.0 | ~30 | ~1.000 | 0 | 15 |
| v0.2.0 | 70 | ~6.300 | 14 | 15 |
| v0.2.1 | 84 | ~8.500 | 14 | 22 |

---

## 🧑‍💻 Créditos y Autoría

| Rol | Descripción |
|---|---|
| Diseño pedagógico | Ricardo Morales (UPR) |
| Diseño instruccional | Documentos 16–19 del proyecto |
| Desarrollo MVP | Claude CoWork (Sonnet 4.6) + revisión humana |
| Gobernanza | Kit inicial: ChatGPT + revisión humana |
| Plataforma | Claude Code (Anthropic), Vite, React |

> Todo contenido generado con asistencia de IA fue revisado y aprobado por una persona responsable del proyecto antes de su publicación.

---

*Documento mantenido por el equipo de AI StoryLab · CC BY-NC-ND 4.0*

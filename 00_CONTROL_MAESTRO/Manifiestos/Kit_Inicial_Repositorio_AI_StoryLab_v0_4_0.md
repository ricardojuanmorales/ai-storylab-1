---
titulo: "Documento 19 — Kit Inicial del Repositorio AI StoryLab"
proyecto: "AI StoryLab: Constructor Ético de Historias Multimedia"
version: "0.1.0"
estado: "Borrador operativo inicial"
fecha: "2026-06-05"
licencia: "CC BY-NC-ND 4.0"
formato_recomendado: "KIT-INICIAL-REPOSITORIO-AI-STORYLAB.md"
documento_anterior: "Documento 18 — Integración Informática, Gobernanza Operativa y Bitácoras de Desarrollo"
audiencia: "Facilitador técnico, desarrolladores, Claude CoWork, curadores del repositorio, investigadores educativos y responsables de gobernanza"
alcance: "Archivos iniciales, estructura de carpetas, documentos de gobernanza, primers, prompts, bitácoras y datos base para iniciar el repositorio local y remoto del MVP"
---

# Documento 19 — Kit Inicial del Repositorio AI StoryLab  
## Constructor Ético de Historias Multimedia

> **“Antes de escribir mucho código, conviene preparar el lugar donde el código podrá recordar por qué existe.”**  
> — Profesor AIón, Mentor Transdisciplinario

---

## 0. Propósito del documento

Este documento presenta el **Kit Inicial del Repositorio AI StoryLab**, una estructura de archivos base para comenzar el desarrollo del MVP local-first con gobernanza, trazabilidad y continuidad operativa.

El kit está pensado para trabajar con:

- repositorio local;
- GitHub;
- Claude CoWork;
- agentes IA de código;
- bitácoras de desarrollo;
- prompts versionados;
- primers contextuales;
- documentos de privacidad;
- estructura futura de aplicación Vite + React.

---

## 1. Qué incluye el kit

El paquete inicial incluye:

1. `README.md`;
2. `.gitignore`;
3. `CHANGELOG.md`;
4. carpeta `governance`;
5. carpeta `logs`;
6. carpeta `prompts`;
7. carpeta `primers`;
8. carpeta `compendia`;
9. estructura inicial `src`;
10. estructura inicial `public`;
11. datos JSON iniciales;
12. plantillas de progreso;
13. prompts de activación;
14. prompts de revisión;
15. bitácora inicial.

---

## 2. Estructura recomendada del repositorio

```text
ai-storylab-mvp/
├── README.md
├── .gitignore
├── CHANGELOG.md
├── governance/
├── logs/
├── prompts/
├── primers/
├── compendia/
├── docs/
├── src/
│   ├── components/
│   ├── data/
│   ├── templates/
│   ├── utils/
│   └── styles/
└── public/
    └── assets/
        ├── avatar/
        ├── badges/
        └── icons/
```

---

## 3. Principio de uso

El kit no pretende ser todavía la aplicación completa. Es el punto de partida gobernado.

> Primero se instala la memoria del proyecto.  
> Luego se desarrolla la aplicación.

---

## 4. Archivos principales

### 4.1 `README.md`

Presenta el proyecto, alcance del MVP, exclusiones e instalación futura.

### 4.2 `.gitignore`

Evita subir:

- `node_modules`;
- `.env`;
- datos reales de estudiantes;
- videos finales;
- portafolios reales;
- exportaciones privadas.

### 4.3 `CHANGELOG.md`

Registra cambios por versión.

### 4.4 `governance/GOVERNANCE.md`

Define principios, roles y flujo de cambio.

### 4.5 `governance/PRIVACY_LOCAL_FIRST.md`

Explica privacidad local-first y manejo de JSON/videos.

### 4.6 `governance/AI_USAGE_POLICY.md`

Define reglas para trabajar con Claude CoWork y otros agentes IA.

### 4.7 `governance/DECISION_LOG.md`

Registra decisiones importantes.

### 4.8 `governance/RISK_REGISTER.md`

Registra riesgos técnicos, éticos y operativos.

### 4.9 `governance/REVIEW_CHECKLIST.md`

Permite revisar cambios antes de aceptarlos.

### 4.10 `governance/RELEASE_CRITERIA.md`

Define cuándo el MVP puede considerarse funcional.

---

## 5. Bitácoras y cierres

La carpeta `logs` incluye:

```text
SESSION_LOG_INDEX.md
session-0001.md
```

Cada sesión de trabajo debe cerrar con una bitácora.

La bitácora debe registrar:

- propósito;
- contexto;
- prompt usado;
- archivos modificados;
- decisiones;
- pruebas;
- problemas;
- pendientes;
- riesgos;
- próximo paso.

---

## 6. Prompts incluidos

La carpeta `prompts` incluye:

```text
PROMPT_MASTER_MVP.md
activation-prompts/
task-prompts/
review-prompts/
session-prompts/
```

### 6.1 Prompts de activación

Sirven para iniciar una sesión con Claude CoWork.

### 6.2 Prompts de tarea

Sirven para pedir componentes concretos.

### 6.3 Prompts de revisión

Sirven para auditar arquitectura, privacidad y coherencia.

---

## 7. Primers incluidos

La carpeta `primers` contiene documentos breves para reactivar contexto:

- `PRIMER_PROJECT_CONTEXT.md`;
- `PRIMER_MVP_SCOPE.md`;
- `PRIMER_DATA_MODEL.md`;
- `PRIMER_CLAUDE_COWORK.md`.

Estos primers ayudan a que Claude CoWork no pierda el sentido del proyecto.

---

## 8. Datos iniciales

El kit incluye archivos JSON mínimos:

```text
src/data/sessions.json
src/data/badges.json
src/data/glossary.json
src/data/tools.json
src/data/competencies.json
```

Estos datos no son finales. Son una base funcional para iniciar el MVP.

---

## 9. Plantillas iniciales de progreso

El kit incluye:

```text
src/templates/defaultProgress.js
src/templates/defaultGroupProgress.js
```

Estas plantillas ya reflejan las decisiones del Documento 16:

- `student_progress`;
- `group_progress`;
- `portfolio_emergent`;
- `final_submission`;
- `schema_version`;
- `export_type`.

---

## 10. Orden recomendado para usar el kit

1. Crear repositorio local.
2. Copiar el kit inicial.
3. Inicializar Git.
4. Revisar `.gitignore`.
5. Hacer primer commit.
6. Crear repositorio remoto en GitHub.
7. Conectar remoto.
8. Subir estructura inicial.
9. Activar Claude CoWork con el primer.
10. Comenzar desarrollo de estructura Vite + React.

---

## 11. Comandos sugeridos

```bash
git init
git add .
git commit -m "governance: add initial AI StoryLab repository kit"
git branch -M main
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

---

## 12. Primer prompt para Claude CoWork

```text
Este repositorio corresponde al MVP local-first de AI StoryLab.

Reglas críticas:
- No backend.
- No Supabase.
- No autenticación.
- No subida de archivos.
- No almacenamiento de videos.
- Usar localStorage.
- Exportar/importar JSON.
- Fusionar progreso grupal por student_code y last_updated.
- Portafolio emergente por acumulación de sesiones.
- Estación de entrega final solo registra metadatos.
- Mantener documentación, bitácora y changelog.

Antes de modificar archivos, resume plan, archivos a tocar y riesgos.
```

---

## 13. Siguiente paso técnico recomendado

Una vez copiado el kit:

1. crear proyecto Vite + React;
2. integrar la carpeta `src/data`;
3. integrar las plantillas;
4. construir `localStorage.js`;
5. construir `App.jsx`;
6. construir `StudentDashboard`;
7. construir `MissionMap`.

---

## 14. Criterio de éxito del kit

El kit cumple su propósito si permite:

- iniciar el repositorio sin improvisación;
- activar Claude CoWork con contexto;
- evitar subir datos privados;
- documentar cada sesión;
- mantener trazabilidad;
- sostener decisiones pedagógicas y técnicas;
- preparar el desarrollo del MVP sin sobreconstruir.

---

## 15. Relación con documentos anteriores

| Documento | Relación |
|---|---|
| Documento 16 | Define alcance del MVP. |
| Documento 17 | Define prompt maestro para construirlo. |
| Documento 18 | Define gobernanza y bitácoras. |
| Documento 19 | Entrega estructura inicial para el repositorio. |

---

## 16. Cierre simbólico

> El repositorio empieza como un archivo, pero se convierte en comunidad cuando cada decisión queda cuidada, documentada y abierta a revisión.

### Insignia simbólica

🏅 **Fundador/a del Repositorio Vivo**

Reconoce la preparación del espacio técnico y documental donde AI StoryLab comenzará a tomar forma como aplicación.

---

## 17. Control de versión

| Versión | Fecha | Cambio |
|---|---|---|
| 0.1.0 | 2026-06-05 | Documento inicial del Kit Inicial del Repositorio AI StoryLab. |

---

## 18. Declaración de uso responsable de IA

Este documento puede haber sido asistido por herramientas de inteligencia artificial para estructuración, redacción, revisión o ampliación. Toda decisión pedagógica, ética, técnica, investigativa y estratégica debe ser revisada por una persona responsable del proyecto antes de su publicación o implementación.

---

**Fin del Documento 19 — Kit Inicial del Repositorio AI StoryLab**

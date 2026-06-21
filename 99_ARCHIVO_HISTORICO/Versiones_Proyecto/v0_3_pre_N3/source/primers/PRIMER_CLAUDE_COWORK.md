# Primer — Claude CoWork en AI StoryLab

**Versión:** 0.2.1 · **Fecha:** 2026-06-05

---

## Tu Rol en Este Proyecto

Eres el agente de desarrollo principal de AI StoryLab MVP. Asistes en código, documentación, revisión de arquitectura y gobernanza. Operas bajo la supervisión de Ricardo Morales (facilitador técnico).

---

## Protocolo de Trabajo

### Antes de modificar cualquier archivo

1. **Lee los archivos relevantes** — nunca modifiques sin leer primero
2. **Presenta un plan** — describe qué archivos tocarás, qué cambios harás y qué riesgos ves
3. **Espera aprobación** — no ejecutes hasta que el responsable humano confirme

### Al ejecutar cambios

- Usa las herramientas apropiadas: `Edit` para modificar, `Write` para crear
- Mantén el alcance del MVP; no introduzcas funcionalidades no solicitadas
- Si detectas algo que debería cambiar pero no fue pedido, menciona lo que viste sin cambiarlo

### Al cerrar la sesión

- Actualiza la bitácora (`logs/session-XXXX.md`)
- Registra decisiones nuevas en `governance/DECISION_LOG.md` si las hubo
- Actualiza `CHANGELOG.md` si hubo cambios funcionales
- Asegura que el commit esté hecho antes de cerrar

---

## Reglas Críticas — No Negociables

1. **Sin backend** — no agregar Express, Fastify, ni ningún servidor
2. **Sin Supabase** — no conectar a base de datos remota
3. **Sin autenticación** — no agregar login ni OAuth
4. **Sin subida de archivos** — no incorporar almacenamiento de videos o imágenes
5. **Sin APIs externas de IA** — no conectar a OpenAI, Gemini, etc.
6. **Sin datos reales de estudiantes** — jamás usar datos reales en prompts o commits
7. **Sin cambios de alcance sin aprobación** — cualquier funcionalidad fuera del MVP requiere entrada en DECISION_LOG y aprobación explícita
8. **Sin rompimiento del modelo de datos** — respetar `schema_version: "0.2.0"` en todos los JSON

---

## Archivos Clave — Dónde Está Qué

| Archivo | Propósito |
|---|---|
| `src/App.jsx` | Router principal y estado global de la app |
| `src/utils/localStorage.js` | Único punto de lectura/escritura del progreso |
| `src/utils/progress.js` | Lógica de completitud de misiones |
| `src/utils/portfolio.js` | Construcción del portafolio emergente |
| `src/utils/exportImport.js` | Validación y lógica de export/import JSON |
| `src/utils/groupImport.js` | Fusión de JSON estudiantiles por student_code |
| `src/data/sessions.json` | Las 9 misiones con fases, objetivos y campos |
| `src/data/badges.json` | Las 9 insignias con competencias |
| `src/templates/defaultProgress.js` | Estructura base del progreso individual |
| `src/templates/defaultGroupProgress.js` | Estructura base del progreso grupal |
| `governance/DECISION_LOG.md` | Registro de decisiones — leer antes de proponer cambios estructurales |

---

## Qué Puedes Hacer Sin Preguntar

- Leer cualquier archivo del repositorio
- Proponer planes detallados
- Crear o modificar archivos de documentación en `docs/`, `logs/`, `primers/`, `prompts/`
- Refactorizar código en `src/utils/` sin cambiar la interfaz pública de las funciones
- Corregir bugs menores (typos, errores de renderizado obvios)

## Qué Siempre Requiere Aprobación Explícita

- Cambiar el modelo de datos (`schema_version`, campos de progreso)
- Modificar `src/data/*.json` (contenido pedagógico)
- Agregar o eliminar componentes en `src/components/`
- Cambiar la lógica en `src/utils/localStorage.js` o `src/utils/exportImport.js`
- Cualquier cambio en el flujo de completitud de misiones

---

## Cómo Detectar Problemas

Si algo no funciona como se espera, verifica en este orden:

1. ¿Está el servidor corriendo? (`npm run dev`)
2. ¿Hay errores en la consola del navegador?
3. ¿El progreso en localStorage está corrompido? (Herramientas del navegador → Application → Local Storage)
4. ¿El JSON de export/import es válido? (Validación de esquema en `src/utils/validation.js`)
5. ¿El error es en un componente o en un util? (Aislar con lectura del archivo)

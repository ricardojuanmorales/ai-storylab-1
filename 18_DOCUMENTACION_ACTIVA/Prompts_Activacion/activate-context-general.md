# Prompt de Activación General — AI StoryLab

**Versión:** 0.2.1 · **Uso:** Inicio de sesión de desarrollo con Claude CoWork

---

## Prompt de Activación

```
Eres el agente de desarrollo de AI StoryLab MVP, una aplicación educativa React+Vite
local-first para un taller de 9 sesiones sobre creación de historias multimedia con IA.

CONTEXTO DEL PROYECTO:
- Repositorio: https://github.com/ricardojuanmorales/ai-storylab-1
- Versión actual: 0.2.0 (aplicación) / 0.2.1 (documentación)
- Rama: main
- Stack: React 18 + Vite 5, sin backend, sin Supabase, sin APIs externas
- Persistencia: localStorage + export/import JSON
- Modelo de datos: schema_version 0.2.0

REGLAS CRÍTICAS — NO NEGOCIABLES:
1. Sin backend (no servidor, no Express, no Fastify)
2. Sin Supabase (no base de datos remota)
3. Sin autenticación (no login, no OAuth)
4. Sin subida de archivos (no almacenamiento de videos o imágenes)
5. Sin APIs externas de IA
6. Sin datos reales de estudiantes en prompts ni commits
7. Sin cambios de alcance sin entrada en DECISION_LOG y aprobación
8. Respetar schema_version: "0.2.0" en todos los JSON

PROTOCOLO DE TRABAJO:
- Primero: lee todos los archivos relevantes
- Segundo: presenta el plan (archivos que tocarás, cambios, riesgos)
- Tercero: espera aprobación antes de ejecutar
- Al cerrar: actualiza bitácora, CHANGELOG y DECISION_LOG si corresponde

TAREA DE ESTA SESIÓN:
[Describe aquí lo que se quiere lograr en esta sesión]

ARCHIVOS QUE PUEDES MODIFICAR:
[Lista los archivos específicos o carpetas relevantes]

ARCHIVOS QUE NO DEBES TOCAR:
[Lista restricciones de la sesión, si aplica]

CRITERIOS DE ACEPTACIÓN:
[Define qué debe pasar para considerar la tarea completada]

¿Entendido? Presenta tu plan antes de hacer cualquier cambio.
```

---

## Notas de Uso

- Completa siempre los campos entre corchetes antes de enviar el prompt
- Si la tarea es solo de documentación, puedes omitir "archivos que no debes tocar"
- Antes de enviar, verifica que el agente tiene acceso al directorio del repositorio
- Si el agente no tiene contexto del proyecto, comparte también el contenido de `PRIMER_PROJECT_CONTEXT.md`

---

## Prompts Relacionados

| Prompt | Cuándo usarlo |
|---|---|
| `activation-prompts/activate-debugging.md` | Cuando hay un bug o comportamiento inesperado |
| `task-prompts/build-localstorage.md` | Para trabajar en la capa de persistencia |
| `task-prompts/build-structure.md` | Para crear o refactorizar componentes |
| `task-prompts/build-group-dashboard.md` | Para el dashboard grupal del facilitador |
| `task-prompts/build-final-submission.md` | Para la estación de entrega final |
| `review-prompts/review-architecture.md` | Para auditar la arquitectura general |
| `review-prompts/review-privacy.md` | Para verificar cumplimiento de privacidad |

# AI_USAGE_POLICY.md — Política de Uso de Inteligencia Artificial

**Versión:** 0.2.1 · **Fecha:** 2026-06-05 · **Estado:** Activo

---

## Propósito

Este documento define cómo se usan los agentes de inteligencia artificial en el desarrollo de AI StoryLab, qué está permitido, qué está prohibido y cómo se mantiene la gobernanza humana sobre las decisiones del proyecto.

---

## Principio Fundamental

> **La IA asiste. La persona decide.**

En todo momento, una persona responsable del proyecto debe revisar, aprobar y asumir la responsabilidad por cualquier cambio generado con asistencia de IA. La IA no tiene autoridad sobre la dirección pedagógica, ética ni estratégica del proyecto.

---

## Agentes Autorizados

| Agente | Uso autorizado |
|---|---|
| **Claude CoWork (Sonnet/Opus)** | Código, documentación, revisión de arquitectura, prompts |
| **ChatGPT** | Diseño de kit, documentos pedagógicos, primers (revisados antes de usar) |
| **GitHub Copilot** | Autocompletado de código en IDE (bajo supervisión) |
| Otros agentes | Deben ser aprobados explícitamente por el facilitador técnico |

---

## Qué Puede Hacer la IA

✅ **Permitido con revisión humana obligatoria:**

- Generar código React/JavaScript siguiendo el alcance del MVP
- Redactar documentación técnica y guías de usuario
- Proponer refactorizaciones en `src/utils/` o `src/components/`
- Revisar arquitectura y detectar inconsistencias
- Generar pruebas unitarias o de integración
- Organizar y actualizar prompts, primers y bitácoras
- Proponer entradas para DECISION_LOG o RISK_REGISTER
- Sugerir mejoras de UX o accesibilidad
- Revisar el contenido pedagógico de `src/data/` sin modificarlo sin aprobación

---

## Qué No Puede Hacer la IA

❌ **Prohibido sin aprobación explícita del facilitador técnico:**

- Agregar dependencias no autorizadas (`package.json`)
- Cambiar el modelo de datos (`schema_version`) sin aprobación
- Conectar la app a servicios externos (APIs, CDN, bases de datos)
- Agregar autenticación o backend al MVP
- Modificar archivos de gobernanza sin solicitud explícita
- Eliminar o reemplazar datos pedagógicos en `src/data/` sin revisión del curador

❌ **Absolutamente prohibido en cualquier contexto:**

- Usar datos reales de estudiantes en prompts
- Exponer datos de progreso estudiantil en repositorios públicos
- Incorporar tracking, analytics o telemetría sin consentimiento
- Generar contenido que pueda identificar a estudiantes individuales

---

## Protocolo de Trabajo con Agentes IA

### Antes de una sesión de trabajo
1. Activar contexto con el primer apropiado (`18_DOCUMENTACION_ACTIVA/Primers_Continuidad/`)
2. Usar el prompt de activación correspondiente (`18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/` o `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/`)
3. Presentar al agente el estado actual del repositorio

### Durante la sesión
1. El agente **siempre presenta un plan** antes de modificar archivos
2. La persona revisa el plan y da aprobación explícita
3. El agente ejecuta los cambios bajo supervisión
4. No se aceptan cambios masivos sin revisión línea a línea cuando afectan lógica de negocio

### Al cierre de la sesión
1. Revisar todos los cambios con `git diff`
2. Documentar decisiones relevantes en DECISION_LOG
3. Actualizar la bitácora de sesión (`18_DOCUMENTACION_ACTIVA/Bitacoras/`)
4. Hacer commit con mensaje descriptivo
5. Guardar los prompts relevantes usados en `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/` o `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/`

---

## Transparencia en el Uso de IA

Todo documento, código o contenido generado con asistencia de IA debe:

- Incluir revisión humana antes de ser publicado o usado en el taller
- Ser declarado como asistido por IA en el mensaje de commit cuando sea relevante
- En documentos pedagógicos: incluir la declaración al pie del documento

Ejemplo de declaración:
```
Este documento fue asistido por herramientas de inteligencia artificial.
Toda decisión pedagógica, ética y técnica fue revisada por una persona responsable
antes de su publicación.
```

---

## Uso de IA en el Contexto del Taller (Estudiantes)

AI StoryLab enseña a los estudiantes a usar IA de manera responsable. Las reglas que aplican en el aula también aplican al desarrollo del proyecto:

1. **Transparencia** — declara qué usaste y cómo
2. **Atribución** — cita las herramientas que usaste
3. **Decisión humana** — la IA no puede tomar las decisiones importantes
4. **Reflexión** — piensa sobre el impacto de lo que creaste con IA

---

## Registro de Incidentes

Si se detecta un uso de IA que viola esta política:

1. Documentar el incidente en `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_Completo_v0_4_0.md`
2. Revertir los cambios no autorizados con `git revert`
3. Discutir con el equipo y actualizar esta política si corresponde

---

## Revisión de Esta Política

Esta política debe revisarse:
- Al inicio de cada ciclo de desarrollo significativo
- Cuando se incorporen nuevos agentes IA al flujo de trabajo
- Cuando cambien las capacidades de los agentes usados

---

*Política activa desde 2026-06-05 · Sujeta a revisión periódica*

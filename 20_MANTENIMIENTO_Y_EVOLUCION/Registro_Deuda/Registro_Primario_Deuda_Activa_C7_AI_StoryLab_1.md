# Registro Primario de Deuda Activa · C7

**Identificador:** `DOC-DOC-036`
**Fecha:** 2026-07-13
**Fase:** C7
**Estado:** preparado para integración
**Ruta primaria:** `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Primario_Deuda_Activa_C7_AI_StoryLab_1.md`
**Fuente de identidad e historia:** `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md`

## 1. Autoridad

Después del merge de C7, este documento y su CSV asociado constituyen la
fuente primaria para consultar el estado vigente de la deuda activa.

El registro maestro de C1 conserva:

- identidad y normalización de IDs;
- resoluciones y evidencia de cierre;
- contexto histórico;
- reglas de gobernanza.

Los registros distribuidos anteriores conservan valor histórico o de
continuidad, pero no compiten como fuente primaria de estado activo.

## 2. Regla de actualización

Toda deuda nueva o cambio de estado activo debe:

```text
conservar un debt_id único
+ registrar fuente y decisión relacionada
+ declarar prioridad y fase objetivo
+ aplicar criterios de cierre verificables
+ actualizar este registro primario
```

## 3. Criterios uniformes de cierre

### `open`

Requiere decisión, evidencia verificable, validación de no contradicción,
actualización del registro y aprobación humana cuando cambie alcance.

### `accepted`

Permanece activa y controlada. Solo pasa a `resolved` con evidencia completa;
puede mantenerse aceptada mediante revisión explícita.

### `blocked`

Requiere resolver primero el gate, dependencia o decisión bloqueante y luego
aplicar los criterios generales de cierre.

### `deferred`

Requiere alcanzar la fase declarada, revalidar vigencia y aplicar los
criterios generales de cierre.

## 4. Deuda activa consolidada

| Debt ID | Título | Prioridad | Estado | Fase objetivo | Origen |
|---|---|---:|---|---|---|
| `DEBT-C1-001` | Verificar todos los IDs documentales contra el árbol completo | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-002` | Verificar unicidad de IDs de decisiones | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-003` | Verificar unicidad de IDs de deuda | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-004` | Verificar unicidad de IDs de gates | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-005` | Confirmar que ninguna fuente activa duplicada quedó omitida | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-006` | Confirmar que el PR #30 contiene cero movimientos y eliminaciones | P1 | `open` | C1-D | 17. Deuda creada por C1 |
| `DEBT-C1-008` | Automatizar validación de registros | P2 | `deferred` | Posterior a C10 | 17. Deuda creada por C1 |
| `DEBT-DATA-EXPORT` | Exportación por propósito | P1 | `accepted` | C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-GALLERY` | Galería pública | P1 | `deferred` | Gate posterior | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-GOV-001` | Formalizar una sola fuente activa por alcance | P1 | `accepted` | C1 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-009` | Formalizar archivo histórico, manifiestos y no vigencia | P1 | `open` | C8 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-010` | Alinear Wiki y documentación humana con fuentes canónicas | P2 | `open` | C9 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-011` | Validar integridad estructural completa | P1 | `blocked` | C10 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-012` | Revisar individualmente specs de .specify | P1 | `blocked` | C4 o C9 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-013` | Crear índice interno de la Base de Conocimiento SDD | P2 | `open` | C9 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GOV-014` | Automatizar índices y comprobaciones documentales | P2 | `deferred` | Posterior a C10 | 6. Deuda estructural y de gobernanza derivada de PR #25 |
| `DEBT-GROUP-PROGRESS` | group_progress bajo auditoría | P1 | `accepted` | C3–C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-IMPORT` | Importación validada | P1 | `accepted` | C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-LANGUAGE` | Lenguaje no punitivo | P2 | `accepted` | C3 y C9 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-PORTFOLIO` | Transición a portafolio curado | P1 | `accepted` | C3–C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-PRIVATE-LINK` | Enlaces privados | P1 | `accepted` | C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-PROMPT` | Prompt como dato de alto cuidado | P1 | `accepted` | C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-RESEARCH` | Investigación con datos | P1 | `deferred` | Gate posterior | 16. Deudas activas preservadas al cierre de v0.7 |
| `DEBT-TOOLS` | Herramientas externas como frontera | P1 | `accepted` | C4 y v0.8 | 16. Deudas activas preservadas al cierre de v0.7 |
| `DFUX-ACC-001` | Guía de lenguaje claro para misiones | P1 | `accepted` | C3 y C9 | 12. Deuda de accesibilidad y claridad |
| `DFUX-ACC-002` | Mensajes local-first canónicos | P1 | `accepted` | C4 y C9 | 12. Deuda de accesibilidad y claridad |
| `DFUX-ACC-003` | Patrones de advertencia por riesgo | P1 | `accepted` | C4 | 12. Deuda de accesibilidad y claridad |
| `DFUX-ACC-004` | Glosario funcional breve | P2 | `accepted` | C4 o C9 | 12. Deuda de accesibilidad y claridad |
| `DFUX-ACC-005` | Carga cognitiva proporcional | P2 | `deferred` | v0.8 | 12. Deuda de accesibilidad y claridad |
| `DFUX-ACC-006` | Auditoría técnica de accesibilidad | P2 | `deferred` | v0.8–v0.9 | 12. Deuda de accesibilidad y claridad |
| `DFUX-DOC-001` | Asistencia docente por misión | P1 | `accepted` | C3 y v0.8 | 13. Deuda de asistencia docente |
| `DFUX-DOC-002` | Guías para acompañar sin sustituir | P1 | `deferred` | v0.8 | 13. Deuda de asistencia docente |
| `DFUX-DOC-003` | Señales de alerta docente | P2 | `deferred` | v0.8 | 13. Deuda de asistencia docente |
| `DFUX-DOC-004` | Acompañamiento diferenciado por nivel | P1 | `deferred` | v0.8 | 13. Deuda de asistencia docente |
| `DFUX-EVI-001` | Estructura de evidencia contextualizada | P1 | `accepted` | C3–C4 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-002` | Sensibilidad de evidencia | P1 | `accepted` | C4 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-003` | Portafolio vivo local | P1 | `accepted` | C3–C4 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-004` | Vincular evidencia, decisión y reflexión | P1 | `accepted` | C3–C4 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-005` | Estados de evidencia y curaduría | P1 | `accepted` | C3–C4 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-006` | Evitar portafolio como carpeta pasiva | P1 | `deferred` | v0.8 | 11. Deuda de evidencia y portafolio |
| `DFUX-EVI-007` | Narrativa de proceso transferible | P2 | `deferred` | v0.8 | 11. Deuda de evidencia y portafolio |
| `DFUX-FAC-v0.6-001` | Invisibilización parcial de la Vista del Facilitador | P1 | `accepted` | C3, C4, v0.8 | Deuda crítica de la Vista del Facilitador |
| `DFUX-HIA-001` | Banco canónico de prompts por misión | P1 | `accepted` | C4 y v0.8 | 10. Deuda humano-IA |
| `DFUX-HIA-002` | Campos mínimos de uso externo | P1 | `accepted` | C4 | 10. Deuda humano-IA |
| `DFUX-HIA-003` | Advertencias antes de copiar prompts | P1 | `accepted` | C4 y v0.8 | 10. Deuda humano-IA |
| `DFUX-HIA-004` | Rutas sin herramienta externa | P1 | `accepted` | C3 y v0.8 | 10. Deuda humano-IA |
| `DFUX-HIA-005` | Atribución por herramienta | P1 | `deferred` | v0.8 | 10. Deuda humano-IA |
| `DFUX-HIA-006` | Checklist docente de uso responsable | P1 | `deferred` | v0.8 | 10. Deuda humano-IA |
| `DFUX-HIA-007` | Registrar apoyo externo sin sobrecaptura | P1 | `accepted` | C4 | 10. Deuda humano-IA |
| `DFUX-HIA-008` | Auditar lenguaje sobre IA embebida | P1 | `accepted` | C4 y C9 | 10. Deuda humano-IA |
| `DFUX-LF-001` | Arquitectura local-first verificable | P1 | `accepted` | C4 y v0.8 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-002` | Almacenamiento local y recuperación segura | P1 | `accepted` | C4 y v0.8 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-003` | Exportación e importación por decisión humana | P1 | `accepted` | C4 y v0.8 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-004` | Manejo seguro de referencias externas | P1 | `accepted` | C4 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-005` | Sensibilidad de evidencias y enlaces | P1 | `accepted` | C4 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-006` | Evitar sincronización automática de enlaces | P1 | `accepted` | C4 y v0.8 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-LF-007` | Advertencias de privacidad, autoría y enlaces | P1 | `accepted` | C4 y v0.8 | 8. Deuda local-first y seguridad heredada de v0.6 |
| `DFUX-MIS-001` | Misiones configurables sin rigidez | P1 | `accepted` | C3 y v0.8 | 9. Deuda de misiones y producción |
| `DFUX-MIS-002` | Ruta mínima y libertad creativa | P1 | `accepted` | C3 | 9. Deuda de misiones y producción |
| `DFUX-MIS-003` | Variantes escuela superior y universidad | P1 | `deferred` | v0.8 | 9. Deuda de misiones y producción |
| `DFUX-MIS-004` | Matriz misión-evento-herramienta-evidencia-portafolio | P1 | `accepted` | C3–C4 | 9. Deuda de misiones y producción |
| `DFUX-MIS-005` | Estados funcionales de misión | P1 | `accepted` | C3 y v0.8 | 9. Deuda de misiones y producción |
| `DFUX-MIS-006` | Completitud, calidad, curaduría y transferencia | P2 | `deferred` | v0.8 | 9. Deuda de misiones y producción |
| `DFUX-MIS-007` | Reinterpretar S1–S9 sin fijar canon | P1 | `accepted` | C3–C4 | 9. Deuda de misiones y producción |
| `DFUX-TRZ-001` | Matriz requisito-documento-origen-deuda | P1 | `accepted` | C1, C3 y C4 | 14. Deuda de trazabilidad y gobernanza |
| `DFUX-TRZ-002` | Checklist de no regresión documental | P1 | `accepted` | C1-D y C10 | 14. Deuda de trazabilidad y gobernanza |
| `DFUX-TRZ-003` | Trazabilidad longitudinal | P1 | `accepted` | C3–C4 | 14. Deuda de trazabilidad y gobernanza |
| `DFUX-TRZ-004` | Gate humano antes de activar fases | P1 | `accepted` | Todas | 14. Deuda de trazabilidad y gobernanza |
| `DFUX-TRZ-005` | Definir alcance de MVP técnico | P1 | `blocked` | Gate de v0.8 | 14. Deuda de trazabilidad y gobernanza |

## 5. Resumen

```text
deudas activas únicas: 69
accepted: 42
open: 9
blocked: 3
deferred: 15
fuentes heredadas inventariadas: 33
DEBT-GOV-008: resolved
DEBT-C1-007: resolved
movimientos: 0
renombres: 0
eliminaciones: 0
GATE-CORR-G4: pending / contribution C7 complete
C8: not open
v0.8.0: not open
implementation: not authorized
```

# Acta de Decisión Humana · GATE-V08-OPEN-001

**Estado:** `APPROVED_WITH_RESERVATIONS`
**Fecha de decisión:** 2026-07-14
**Autoridad:** responsable humano de AI StoryLab 1
**Efectividad:** al fusionarse el PR #50
**MVP autorizado:** `MVP-SDD-08-01`
**Hito autorizado:** `H08-1`

## Pregunta

¿Se autoriza la apertura limitada de v0.8.0 para implementación incremental
bajo el alcance del `MVP-SDD-08-01`?

## Decisión

- [ ] `approved`
- [x] `approved_with_reservations`
- [ ] `changes_required`
- [ ] `rejected`

## Evidencia revisada

- [x] Marco Estratégico
- [x] Definición del MVP
- [x] Matriz de Criterios
- [x] Matriz de Trazabilidad
- [x] Matriz PH-IT-AT
- [x] Backlog
- [x] Riesgos y Reversibilidad
- [x] Datos Sintéticos y Pruebas
- [x] Protocolo de Sesión
- [x] Gate Constitucional SDD
- [x] Comentario de hito H08-0

## Determinación

```yaml
decision_id: DEC-V08-OPEN-001
gate_id: GATE-V08-OPEN-001
decision: approved_with_reservations
date: 2026-07-14
authority: responsable humano de AI StoryLab 1
effective_on:
  event: merge
  pull_request: 50
opening:
  phase: v0.8.0
  mode: open_limited
implementation_authorization:
  scope: H08-1_only
  later_hitos_by_inference: prohibited
mvp:
  id: MVP-SDD-08-01
  status: approved_with_reservations
reservations:
  - usar exclusivamente datos ficticios o sintéticos
  - no autorizar backend, cloud ni autenticación
  - no autorizar IA embebida
  - no autorizar Vista del Facilitador, dashboard, analíticas ni seguimiento grupal
  - no autorizar galería pública, marketplace ni publicación estable
  - no seleccionar un stack final irreversible
  - mantener capacidades sensibles detrás de feature flags desactivados por defecto
  - crear contratos, schemas versionados, fixtures y pruebas reproducibles en H08-1
  - incorporar controles mínimos de seguridad y accesibilidad desde H08-1
  - documentar la revisión PH-IT-AT durante H08-1
  - exigir checkpoint humano antes de iniciar H08-2
allowed_result:
  - cerrar H08-0 al fusionarse PR #50
  - abrir v0.8.0 de manera limitada
  - iniciar H08-1
  - crear esqueleto modular, contratos, schemas, fixtures sintéticos y runner de pruebas
  - preparar CI mínimo y feature flags desactivados por defecto
blocked_result:
  - iniciar H08-2 por inferencia
  - usar datos reales
  - activar servicios externos
  - introducir vigilancia o evaluación automática como juicio final
  - publicar o compartir evidencia automáticamente
  - abrir backend, cloud, autenticación, IA embebida o analíticas
  - realizar merge automático de hitos posteriores
debt_effect:
  DFUX-TRZ-005:
    transition: blocked_to_resolved
    effective_on: merge_PR_50
next_hito: H08-1
required_canonical_updates:
  - Registro Maestro de Gates
  - Registro Maestro de Decisiones
  - Registro Maestro de Deuda de Gobernanza
  - Registro Primario de Deuda Activa
  - bitácora de sesión
  - bitácora de transferencia simétrica
```

## Regla de efectividad

Antes del merge del PR #50, la decisión permanece `awaiting_integration`.
Después del merge:

```text
GATE-V08-OPEN-001: approved_with_reservations / fulfilled
v0.8.0: open_limited
implementation: authorized_for_H08-1_only
DFUX-TRZ-005: resolved
next_hito: H08-1
```

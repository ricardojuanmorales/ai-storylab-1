# Instrumento de Preparación · GATE-V08-OPEN-001

**Gate:** `GATE-V08-OPEN-001`
**Estado actual:** `approved_with_reservations / awaiting_integration`
**Baseline:** `a3a3aba6e6e26d005f78caa63bfef1f2bd378f17`
**Este documento:** prepara la decisión, no la ejecuta

## Pregunta del gate

¿Existen condiciones documentales, funcionales, técnicas, éticas y humanas
para abrir v0.8.0 como fase limitada de implementación incremental?

## Dependencias verificables

- cierre de v0.7.0;
- cierre de la corrección C0-C10;
- compendio post-C10;
- Constitución SDD;
- Gate Constitucional permanente;
- arquitectura y diseño trazables;
- ausencia de bloqueante estructural;
- alcance MVP candidato;
- backlog incremental;
- datos sintéticos;
- pruebas y reversibilidad;
- privacidad, seguridad y no vigilancia.

## Resultados posibles

### `approved`

Permite iniciar H08-1 y crear código limitado al alcance aprobado.

### `approved_with_reservations`

Permite iniciar solo los elementos expresamente autorizados y mantiene
reservas como condiciones bloqueantes.

### `changes_required`

No abre v0.8.0. Requiere corregir evidencia o alcance.

### `rejected`

No abre v0.8.0 y registra la causa.

## Límites aun si se aprueba

```text
release estable: no
marketplace readiness: no
datos reales: no
IA embebida: no
backend o cloud: no, salvo gate independiente
Vista Facilitador: fuera del primer MVP
funciones mayores: requieren gate específico
```

## Condición final

El gate solo cambia de estado mediante el acta de decisión humana y la
actualización posterior de los registros canónicos.


## Decisión humana H08-0

<!-- H08_0_INSTRUMENT_DECISION -->

```yaml
decision: approved_with_reservations
decision_id: DEC-V08-OPEN-001
date: 2026-07-14
effective_on: merge_PR_50
allowed_result:
  - abrir v0.8.0 de manera limitada
  - iniciar H08-1
blocked_result:
  - iniciar H08-2 por inferencia
  - datos reales
  - backend, cloud, autenticación, IA embebida o vigilancia
```

# Informe de Evaluación de Elegibilidad · Lotes C3-A y C3-B

**Identificador:** `DOC-DOC-017`
**Fecha:** 2026-07-12
**Fase:** C3 · Evaluación pre-gate
**Base:** merge del PR #34 `d58810ecfab76e1ac5936dfe93907d3271108fd9`
**Gate:** `GATE-CORR-G2 · pending`
**Deuda:** `DEBT-GOV-004 · blocked`
**Movimiento autorizado:** No

---

## 1. Propósito

Evaluar si las fuentes candidatas de arquitectura funcional y UX están preparadas para una futura operación independiente de movimiento.

Esta evaluación verifica existencia, identidad canónica, estado documental, destino, dependencias y referencias entrantes.

No mueve archivos ni aprueba el gate.

## 2. Evidencia estructural

```text
fuentes candidatas revisadas: 7
fuentes HOLD revisadas: 2
destinos ya ocupados: 0
hashes SHA-256 registrados: 9
movimientos: 0
renombres: 0
copias: 0
eliminaciones: 0
```

## 3. Resultado por candidato

| ID | Lote | Resultado | Fundamento |
|---|---|---|---|
| `DOC-ARQ-001` | C3-A | `elegible_pre_gate` | Fuente matriz funcional; no declara dependencia conjunta con un HOLD. |
| `DOC-ARQ-002` | C3-A | `condicionado_dependencias` | Depende de toda la familia v0.6, incluido DOC-GOB-007, y requiere estrategia de referencias antes del movimiento. |
| `DOC-UX-002` | C3-B | `elegible_pre_gate` | Deriva del mapa funcional y mantiene límites claros frente a arquitectura técnica e implementación. |
| `DOC-UX-003` | C3-B | `blocked_dependencia_conjunta` | Su estado declara integración canónica conjunta con DOC-GOB-007, que permanece en HOLD de clasificación. |
| `DOC-UX-004` | C3-B | `condicionado_dependencias` | Depende de DOC-GOB-007 y DOC-UX-003; requiere resolver el bloque conjunto antes del movimiento. |
| `DOC-UX-005` | C3-B | `condicionado_dependencias` | Depende de DOC-GOB-007, DOC-UX-003, DOC-UX-004 y DOC-UX-006; requiere mapa de referencias cerrado. |
| `DOC-UX-006` | C3-B | `condicionado_dependencias` | Depende de DOC-GOB-007, DOC-UX-003 y DOC-UX-004; sirve de puente hacia seguridad futura. |
| `DOC-GOB-007` | C3-H1 | `hold_clasificacion` | Documento puente funcional aprobado conjuntamente con flujos; requiere dictamen de autoridad y ruta objetivo. |
| `DOC-UX-007` | C3-H2 | `hold_compartido_C3_C4` | Fuente compartida UX, roles y seguridad; no entra en esta evaluación de movimiento. |

## 4. Lectura por lote

### C3-A · Arquitectura funcional

- `DOC-ARQ-001` puede avanzar a preparación detallada de movimiento.
- `DOC-ARQ-002` queda condicionado hasta cerrar su mapa de dependencias y referencias.

El lote C3-A no debe tratarse todavía como bloque indivisible.

### C3-B · Diseño funcional y UX

- `DOC-UX-002` puede avanzar a preparación detallada de movimiento.
- `DOC-UX-003` permanece bloqueado por su aprobación conjunta con `DOC-GOB-007`.
- `DOC-UX-004`, `DOC-UX-005` y `DOC-UX-006` permanecen condicionados por dependencias internas del conjunto.

El lote C3-B no está listo para aprobación completa.

## 5. Hallazgo crítico

`DOC-UX-003` declara integración canónica conjunta con `DOC-GOB-007`.

`DOC-GOB-007` permanece en HOLD de clasificación y carece de ruta objetivo aprobada.

Mover `DOC-UX-003` sin resolver esa relación fragmentaría una unidad documental aprobada conjuntamente.

## 6. Recomendación

```text
GATE-CORR-G2: no aprobar todavía
DEBT-GOV-004: mantener blocked
migración funcional: no iniciar
```

La próxima decisión debe resolver primero:

1. autoridad y destino de `DOC-GOB-007`;
2. tratamiento conjunto o separado de `DOC-UX-003`;
3. estrategia de actualización de referencias entrantes;
4. secuencia revisada de sublotes;
5. reversión por commit.

## 7. Estado posterior a esta evaluación

```text
elegibles_pre_gate: 2
condicionados_dependencias: 4
blocked_dependencia_conjunta: 1
hold_clasificacion: 1
hold_compartido_C3_C4: 1
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
movimientos: 0
```

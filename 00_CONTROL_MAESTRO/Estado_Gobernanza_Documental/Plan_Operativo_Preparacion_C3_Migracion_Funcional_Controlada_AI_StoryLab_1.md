# Plan Operativo de Preparación C3

## Migración Funcional Controlada de AI StoryLab 1

**Identificador:** `DOC-DOC-014`
**Fecha:** 2026-07-12
**Fase:** Preparación independiente de C3
**Estado:** Borrador para revisión humana
**Base:** merge del PR #33
**Gate aplicable:** `GATE-CORR-G2`
**Deuda aplicable:** `DEBT-GOV-004`

---

## 1. Propósito

Preparar la migración controlada de fuentes funcionales y UX desde rutas transitorias de continuidad hacia `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA`.

Este plan no ejecuta movimientos.

## 2. Estado de entrada

```text
C2: cerrado
GATE-CORR-G1: approved / fulfilled
DEBT-GOV-003: resolved
C3: habilitado, no iniciado
GATE-CORR-G2: pending / future
DEBT-GOV-004: blocked
C4: no iniciado
v0.8.0: no abierto
implementación: no autorizada
```

## 3. Autoridad documental

La preparación se apoya en:

- Registro Maestro de Fuentes Canónicas y Vigencia C1;
- Registro Maestro de Gates;
- Registro Maestro de Deuda de Gobernanza;
- Acta de Cierre C2;
- Bitácora de Transferencia Simétrica C2 → C3;
- README del contenedor `02`.

El árbol B6 se utiliza únicamente como hipótesis orientadora.

## 4. Universo inicial

```text
7 fuentes preliminarmente elegibles
1 fuente v0.6 en HOLD de clasificación
1 fuente v0.7 compartida C3–C4 en HOLD
```

## 5. Lotes propuestos

### Lote C3-A · Arquitectura funcional

```text
DOC-ARQ-001
DOC-ARQ-002
```

### Lote C3-B · Diseño funcional y UX

```text
DOC-UX-002
DOC-UX-003
DOC-UX-004
DOC-UX-005
DOC-UX-006
```

### HOLD C3-H1 · Marco funcional

```text
DOC-GOB-007
```

Requiere decisión sobre su autoridad y destino antes de cualquier movimiento.

### HOLD C3-H2 · Fuente compartida C3–C4

```text
DOC-UX-007
```

Requiere separar alcance UX, roles y seguridad.

## 6. Cambios permitidos en esta operación

- crear README de subfrontera;
- inventariar candidatos;
- proponer lotes;
- documentar criterios de elegibilidad;
- documentar reversión;
- registrar la apertura de preparación C3.

## 7. Cambios prohibidos

- mover, copiar o renombrar fuentes;
- modificar contenido sustantivo;
- aprobar `GATE-CORR-G2`;
- cambiar `DEBT-GOV-004`;
- iniciar C4;
- deprecar rutas;
- abrir v0.8.0;
- implementar.

## 8. Modelo de futura migración

La migración, si se aprueba, utilizará:

```text
un PR independiente
+ commits puros de movimiento por lote
+ commits separados para metadatos y enlaces
+ validación humana después de cada lote
+ gate final antes del merge
+ reversión localizada por commit
```

## 9. Criterios previos a G2

Cada fuente debe tener:

- identificador persistente;
- estado y canonicidad confirmados;
- ruta actual verificada;
- ruta objetivo aprobada;
- dependencia interdocumental revisada;
- enlaces entrantes identificados;
- plan de reversión;
- ausencia de conflicto con C4;
- decisión humana.

## 10. Estado esperado tras este PR de preparación

```text
C3: preparación documentada
migración funcional: no iniciada
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
movimientos: 0
renombres: 0
copias: 0
eliminaciones: 0
```

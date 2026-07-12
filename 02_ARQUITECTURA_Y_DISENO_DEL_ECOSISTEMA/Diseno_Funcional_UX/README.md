# Diseño Funcional y UX

## Frontera de migración controlada C3

### Propósito

Preparar una ruta estable para modelos de experiencia, flujos, recorridos, accesibilidad e interacción humano-IA.

### Fuentes candidatas iniciales

```text
DOC-UX-002 · Modelo de Experiencia de Usuario
DOC-UX-003 · Flujos Funcionales Conceptuales
DOC-UX-004 · Recorridos de Usuario Sintéticos
DOC-UX-005 · Criterios de Accesibilidad y Claridad
DOC-UX-006 · Criterios de Interacción Humano-IA
```

### Coordinación documental C3-C

`DOC-UX-003` conserva destino en esta frontera, pero su posible movimiento deberá ejecutarse conjuntamente con `DOC-GOB-007`.

El par documental se tratará como una unidad atómica de migración con dos destinos coordinados:

```text
DOC-GOB-007 → Arquitectura_Funcional/
DOC-UX-003  → Diseno_Funcional_UX/
```

La autorización humana posterior al PR #37 permite el movimiento atómico únicamente en la rama aislada. No aprueba `GATE-CORR-G2` ni autoriza merge.

### Estado

```text
C3: migración controlada en rama
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
movement_authorized_in_branch: true
merge_authorized: false
```

### Contenido permitido durante esta preparación

- este README;
- referencias a fuentes canónicas;
- criterios de elegibilidad;
- planes de lote y reversión;
- fuentes movidas en rama aislada con hashes y reversión.

### Contenido excluido

- copias de las fuentes;
- movimientos fuera de la rama controlada o sin trazabilidad;
- código o implementación;
- arquitectura técnica;
- seguridad o privacidad técnica;
- vistas y roles con dependencia C4;
- apertura de v0.8.0.

### HOLD compartido C3–C4

`DOC-UX-007 · Vista del Facilitador No Vigilante` permanece fuera del lote inicial.

Su posible elevación requiere separar y validar sus dimensiones UX, roles y seguridad antes de decidir una ruta.

### Identidad documental

La elevación futura deberá preservar los identificadores `DOC-UX-002` a `DOC-UX-006`.

La fuente actual seguirá siendo canónica hasta que el movimiento sea aprobado y fusionado.

### Gate

Los documentos pueden existir en una rama aislada para producir evidencia. No pueden fusionarse en `main` antes de la aprobación humana de `GATE-CORR-G2`.

<!-- C3_MIGRATION_STATUS_START -->
### Estado material en la rama de migración

Documentos presentes en esta frontera:

- `DOC-UX-003`
- `DOC-UX-002`
- `DOC-UX-004`
- `DOC-UX-006`
- `DOC-UX-005`

```text
canonical_en_main: no
GATE-CORR-G2: pending
merge_authorized: false
DEBT-GOV-004: blocked
```

La presencia en esta rama produce evidencia técnica. No cambia todavía la canonicidad de `main`.
<!-- C3_MIGRATION_STATUS_END -->

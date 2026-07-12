# Diseño Funcional y UX

## Frontera de preparación C3

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

Esta coordinación no autoriza movimiento ni aprueba `GATE-CORR-G2`.

### Estado

```text
C3: preparación documental
GATE-CORR-G2: pending
DEBT-GOV-004: blocked
movement_authorized: false
```

### Contenido permitido durante esta preparación

- este README;
- referencias a fuentes canónicas;
- criterios de elegibilidad;
- planes de lote y reversión.

### Contenido excluido

- copias de las fuentes;
- movimientos o renombres;
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

Ningún documento puede entrar en esta ruta antes de la aprobación humana de `GATE-CORR-G2`.

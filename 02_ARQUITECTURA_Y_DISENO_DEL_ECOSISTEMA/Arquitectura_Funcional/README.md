# Arquitectura Funcional

## Frontera de migración controlada C3

### Propósito

Preparar una ruta estable para documentos que describen la organización funcional, las capacidades y los requisitos del ecosistema AI StoryLab 1.

### Fuentes candidatas iniciales

```text
DOC-ARQ-001 · Mapa Funcional Preliminar del Ecosistema
DOC-ARQ-002 · Requisitos Funcionales Preliminares
DOC-GOB-007 · Marco Estandarizado de Misión
```

### Autoridad funcional acotada

`DOC-GOB-007` se clasifica como marco normativo funcional sobre la estructura de las misiones.

No gobierna el repositorio, la colocación documental, la arquitectura técnica ni la implementación.

Su elevación futura se coordinará con `DOC-UX-003` mediante el lote conjunto `C3-C`.

La autorización humana posterior al PR #37 permite movimiento únicamente en la rama aislada. No autoriza merge.

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
- arquitectura técnica;
- modelo de datos;
- seguridad y privacidad;
- decisiones de implementación;
- apertura de v0.8.0.

### Identidad documental

La elevación futura deberá preservar los identificadores `DOC-ARQ-001`, `DOC-ARQ-002` y `DOC-GOB-007`.

La fuente actual seguirá siendo canónica hasta que el movimiento sea aprobado y fusionado.

### Gate

Los documentos pueden existir en una rama aislada para producir evidencia. No pueden fusionarse en `main` antes de la aprobación humana de `GATE-CORR-G2`.

<!-- C3_MIGRATION_STATUS_START -->
### Estado material en la rama de migración

Documentos presentes en esta frontera:

- `DOC-ARQ-001`
- `DOC-GOB-007`
- `DOC-ARQ-002`

```text
canonical_en_main: no
GATE-CORR-G2: pending
merge_authorized: false
DEBT-GOV-004: blocked
```

La presencia en esta rama produce evidencia técnica. No cambia todavía la canonicidad de `main`.
<!-- C3_MIGRATION_STATUS_END -->

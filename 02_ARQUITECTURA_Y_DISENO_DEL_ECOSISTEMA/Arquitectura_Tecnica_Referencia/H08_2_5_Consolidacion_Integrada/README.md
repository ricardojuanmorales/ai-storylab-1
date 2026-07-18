# SPEC-H08-2.5-001 · Consolidación integrada

**Estado:** `IMPLEMENTATION_AUTHORIZED`
**Fecha:** 2026-07-16
**PR:** #59
**Head de entrada:** `d14fc2382073dd4c32b9ba2ea83cc350f785d327`

## Propósito

Demostrar la primera vertical slice como un sistema integrado, no solo como
capas verificadas por separado.

```text
React
→ StoryLabUseCases
→ dominio
→ LocalStorageProjectRepository
→ almacenamiento sintético
→ recuperación
→ export preview
→ borrado
```

## Evidencia requerida

- creación desde la interfaz;
- escritura mediante el adaptador local real;
- recuperación después de desmontar y remontar;
- finalización de M1;
- preview después de recuperar;
- reflexión privada ausente de la salida;
- corrupción bloqueada mediante el adaptador real;
- cuota presentada mediante error seguro;
- borrado de proyecto y puntero;
- capacidades diferidas ausentes;
- auditoría de readiness para H08-2A.

## No alcance

H08-2.5 no modifica lógica de producto, schemas, dependencias runtime ni
política de persistencia.

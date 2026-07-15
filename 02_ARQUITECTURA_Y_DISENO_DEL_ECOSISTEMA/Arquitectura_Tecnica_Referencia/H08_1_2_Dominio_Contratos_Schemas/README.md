# H08-1.2 · Dominio, Contratos y Schemas

**Proyecto:** AI StoryLab 1
**Fecha:** 2026-07-15
**Baseline:** `5a5c4f9231ef092b3496a0019de1940fb19c14e6`
**Schema de trabajo:** `0.8.0-alpha.1`
**Estado:** `INTEGRATED_ACCEPTED_PROVISIONAL`

## Propósito

Convertir la arquitectura provisional de H08-1.1 en contratos técnicos mínimos,
versionados y verificables, sin implementar todavía la primera vertical slice.

## Productos

1. modelo mínimo de dominio;
2. catálogo de invariantes;
3. errores y resultados tipados;
4. puertos de persistencia, reloj e identificadores;
5. schemas JSON 2020-12;
6. fixtures exclusivamente sintéticos;
7. vectores de pruebas de contratos;
8. política de versionado y migración;
9. matriz de paridad TypeScript–JSON Schema;
10. riesgos y evidencia PH-IT-AT.

## Decisión de fuente de verdad

```yaml
domain_semantics:
  source: TypeScript_contracts
serialized_boundaries:
  source: JSON_Schema_2020_12
runtime_validation_library:
  status: deferred
parity:
  status: required_in_H08_1_3
schema_version: 0.8.0-alpha.1
```

H08-1.2 no añade adaptadores, interfaz, persistencia concreta ni flujo H08-2.


# ADR-H08-1.3-001 · Runner, Validador y CI del Baseline

**Estado:** `PROPOSED`
**Fecha:** 2026-07-15
**Baseline:** `5b04c711127d9dc3197b016289f10c457fd56576`
**Revisión obligatoria:** H08-1A

## Contexto

H08-1.2 integró contratos TypeScript, schemas JSON 2020-12, fixtures sintéticos y
vectores de prueba. Faltaba demostrar que esos artefactos pueden compilarse,
validarse y mantenerse en paridad de forma reproducible.

## Decisión

```yaml
runtime_for_tooling:
  primary: Node_24_LTS
  compatibility: Node_22_LTS
typescript:
  version: 7.0.2
  mode: strict_no_emit
test_runner:
  tool: Vitest
  version: 4.1.10
schema_validator:
  tool: Ajv
  version: 8.20.0
  class: Ajv2020
formats:
  tool: ajv-formats
  version: 3.0.1
dependency_install:
  command: npm_ci_ignore_scripts
  lockfile: required
CI:
  provider: GitHub_Actions
  permissions: contents_read
```

Todas las dependencias son de desarrollo. No se incorporan al runtime del producto.

## Razones

- Vitest ejecuta TypeScript sin obligar a crear presentación o bundler de producto.
- Ajv ofrece una clase específica para Draft 2020-12.
- TypeScript estricto detecta deriva de contratos antes de la integración.
- Node 24 es la base LTS y Node 22 conserva una ventana adicional de compatibilidad.
- `npm ci` y el lockfile fijan el grafo instalado.
- una matriz pequeña evita CI ornamental.

## Reversibilidad

Las herramientas pueden sustituirse en H08-1A si se preservan:

1. los vectores de prueba;
2. los códigos de error;
3. los schemas;
4. la evidencia de paridad;
5. el comportamiento offline;
6. el historial de CI.

## No decisiones

Este ADR no selecciona:

- framework de presentación;
- persistencia;
- router;
- state manager;
- backend;
- autenticación;
- telemetría;
- IA embebida.

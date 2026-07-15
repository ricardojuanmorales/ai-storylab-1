# ADR-H08-1.2-001 · Fuentes de Verdad para Dominio y Fronteras Serializadas

**Estado:** `ACCEPTED_PROVISIONAL`
**Fecha:** 2026-07-15
**Baseline:** `5a5c4f9231ef092b3496a0019de1940fb19c14e6`
**Integración:** merge PR #54 · `5b04c711127d9dc3197b016289f10c457fd56576`
**Revisión obligatoria:** H08-1A · Implementation Readiness

## Contexto

H08-1.1 aprobó una arquitectura modular aislada con TypeScript provisional,
dominio independiente de framework y persistencia detrás de puertos. H08-1.2 debe
definir contratos y schemas sin convertir una biblioteca concreta en dependencia
irreversible.

TypeScript puede expresar semántica interna y resultados tipados, pero no valida
datos en tiempo de ejecución por sí solo. JSON Schema puede describir fronteras
serializadas y archivos importados, pero no sustituye invariantes relacionales o
reglas pedagógicas del dominio.

## Alternativas

### A · TypeScript como única fuente

Reduce duplicación, pero no valida entradas externas sin una herramienta adicional.

### B · JSON Schema como única fuente

Facilita interoperabilidad, pero no expresa adecuadamente todas las reglas internas
ni garantiza ergonomía del dominio.

### C · Biblioteca con generación automática inmediata

Podría reducir deriva, pero selecciona una dependencia antes de disponer del runner,
métricas de bundle, análisis de mantenimiento y evidencia de accesibilidad.

### D · Fuentes complementarias con prueba de paridad

TypeScript gobierna semántica interna. JSON Schema gobierna fronteras serializadas.
La paridad se convierte en una obligación técnica verificable.

## Decisión

Se adopta provisionalmente la alternativa D.

```yaml
typescript:
  governs:
    - domain_objects
    - invariants
    - typed_errors
    - result_types
    - ports
json_schema_2020_12:
  governs:
    - import_boundaries
    - export_boundaries
    - persisted_serialized_shape
    - unknown_field_rejection
runtime_library:
  selected: false
  selection_stage: H08_1_3_or_H08_1A
parity_test:
  required: true
  first_execution_stage: H08_1_3
```

## Consecuencias

- se evita lock-in prematuro;
- se acepta temporalmente el riesgo de deriva;
- toda diferencia deberá detectarse mediante pruebas de paridad;
- las invariantes relacionales permanecen en dominio;
- las entradas externas se consideran no confiables;
- la selección de librería deberá comparar seguridad, mantenimiento, tamaño,
  compatibilidad offline, Draft 2020-12 y estrategia de sustitución.

## Regla

Un schema válido no implica automáticamente un objeto de dominio válido. Ambas
capas deben aprobarse antes de aceptar una importación.

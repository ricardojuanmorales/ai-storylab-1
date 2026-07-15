# H08-1.1 · ADR y Frontera Técnica

**Proyecto:** AI StoryLab 1
**Fecha:** 2026-07-15
**Baseline:** `4327758c66b3dd36f49400c1fc8fad92777d90e4`
**Estado:** `INTEGRATED_ACCEPTED_PROVISIONAL`
**Unidad:** `H08-1.1`

## Propósito

Transformar la realineación aprobada en una decisión arquitectónica provisional,
reversible y verificable. Esta unidad no implementa funcionalidad de producto.

## Productos

1. ADR provisional y reversible.
2. Comparación ponderada de alternativas.
3. Modelo de capas y dirección de dependencias.
4. Política de dependencias.
5. Frontera formal con v0.3.0.
6. Matriz de resolución del legado.
7. Matriz de reversibilidad.
8. Registro de riesgos.
9. Matriz PH-IT-AT.
10. Checklist de cierre.

## Decisión recomendada

```yaml
strategy: isolated_modular_rebuild_in_same_repository
ui_shell: React_and_Vite_provisional
contracts_language: TypeScript_provisional
domain_framework_dependency: prohibited
legacy_import_default: prohibited
persistence_technology: deferred
schema_library: deferred
H08_2: blocked
```

La decisión quedó efectiva mediante el merge de PR #53 y permanece provisional hasta H08-1A.

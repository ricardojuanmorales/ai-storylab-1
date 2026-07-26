# Contrato de versión, schema y artefacto · V10-5

## Decisiones de versión

```yaml
project_release_line: v1.0.0
stable_target: 1.0.0
current_application_version: 0.9.0-unreleased
release_candidate_pattern: 1.0.0-rc.N
release_candidate_assigned: false
stable_version_assigned: false
```

V10-5 define la política, pero no crea una RC ni asigna la versión estable. La
primera identidad `1.0.0-rc.N` solo podrá asignarse en V10-6 después de congelar
un head exacto y recibir la decisión humana correspondiente.

## Política de schema

```yaml
current_schema_version: 0.8.0-alpha.2
schema_independent_from_application_version: true
schema_changed_in_V10_5: false
```

El schema no cambia por sincronía estética con la versión de la aplicación.
Cualquier cambio requiere evidencia material de contrato o migración.

## Identidad de candidata

Toda candidata deberá enlazar:

1. commit fuente completo;
2. Git tree de `apps/storylab`;
3. SHA-256 de `package.json`;
4. SHA-256 de `package-lock.json`;
5. versión de aplicación;
6. versión de schema;
7. manifiesto de distribución;
8. SHA-256 del ZIP;
9. atestación de construcción;
10. CI del commit documental o de ensamblaje correspondiente.

## Política de artefacto

```yaml
canonical_name_template: ai-storylab-1_<version>_<source-short-sha>.zip
format: DETERMINISTIC_ZIP_STORE
fixed_timestamp: 1980-01-01T00:00:00Z
path_order: lexicographic
permissions: fixed
checksums: SHA-256_REQUIRED
publication: HUMAN_DECISION_AFTER_GATE
```

El artefacto de V10-5 es una sonda local no publicada. No es la candidata final.

## Entorno canónico futuro

```yaml
V10_6_final_builder:
  runner: ubuntu-latest
  node: 22
  install: npm ci --ignore-scripts
V10_6_independent_verifier:
  node: 24
```

La sonda macOS solo demuestra reproducibilidad en el mismo entorno local. No
demuestra identidad binaria entre sistemas operativos.

## Firma y atestación

No existe una identidad criptográfica de firma configurada y no se afirmará
firma digital. La política exige una atestación JSON interna con materiales,
builder, hashes, límites y estado de publicación. Cualquier firma futura
requiere autorización y gestión de identidad separadas.

## Alineación pendiente para V10-6

La herramienta heredada todavía contiene metadata nominal de v0.9.0, incluyendo
identificadores y textos internos. V10-6 deberá alinear esa metadata dentro de
su autorización de ensamblaje antes de producir la candidata final.

V10-5 no modifica la herramienta, el schema, las dependencias ni el producto.

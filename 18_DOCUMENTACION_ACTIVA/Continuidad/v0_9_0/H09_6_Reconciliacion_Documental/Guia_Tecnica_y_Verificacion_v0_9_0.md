# Guía técnica y de verificación · AI StoryLab 1 v0.9.0

## Runtime canónico

`apps/storylab/` es el único runtime candidato. El paquete raíz histórico no
forma parte del artefacto.

## Versiones

```yaml
project_release_line: v0.9.0
canonical_application_version: 0.9.0-unreleased
schema_current: 0.8.0-alpha.2
schema_previous_supported: 0.8.0-alpha.1
root_legacy_package_version: 0.3.0
```

La versión de schema no sigue automáticamente la versión de aplicación. H09-6
no introduce campos ni migraciones.

## Entornos

- Node 22 y Node 24: soportados por CI.
- Node 25 y Node 26: no afirmados.
- Ubuntu CI: evidencia automatizada.
- macOS: evidencia puntual.
- Windows, navegadores y `file://`: no afirmados.

## Instalación

```bash
cd apps/storylab
npm ci --ignore-scripts
```

## Desarrollo

```bash
npm run dev
```

## Verificación candidata

```bash
AI_STORYLAB_SOURCE_COMMIT="$(git rev-parse HEAD)" npm run verify
```

Integra typecheck, build, auditorías, 49 archivos, 248 pruebas y dos
empaquetados deterministas.

## Empaquetado manual

```bash
node tools/package-candidate.mjs \
  --source dist \
  --output /ruta/candidate.zip \
  --commit "$(git rev-parse HEAD)" \
  --candidate-version "0.9.0-unreleased" \
  --report /ruta/candidate-report.json
```

Verificación:

```bash
node tools/package-candidate.mjs \
  --verify /ruta/candidate.zip \
  --report /ruta/candidate-verify.json
```

## Persistencia y schemas

Schema anterior: `0.8.0-alpha.1`. Schema actual: `0.8.0-alpha.2`.
La validación al cargar es obligatoria; corrupción y cuota generan errores
seguros; importación usa validación y staging; roundtrip exige equivalencia
semántica.

## CI y trazabilidad

El workflow existente verifica Node 22 y Node 24. Toda afirmación debe enlazar
head exacto, suite, CI, manifiesto, checksums, reservas y decisión humana.

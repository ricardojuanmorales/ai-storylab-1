# Decisión de apertura · H08-3.2 Envelope, índice y escritura recuperable

```yaml
decision_date: 2026-07-18
source_instruction: "Abre H08-3.2: envelope, índice y escritura recuperable"
authority: repository_owner_and_responsible_human

repository: ricardojuanmorales/ai-storylab-1
PR: 60
branch: feat/v0.8-h08-3-persistence-schema-hardening
opening_parent_commit: e42277138bab3d052c2b182de2394de5f2a18aee

H08_3_1:
  lifecycle: fulfilled
  implementation: published
  local_verification: PASS
  remote_CI: PASS

reservations:
  RES-H08-3-ENTRY-CI-001:
    status: resolved
  RES-H08-3.1-STORAGE-NAMESPACE-001:
    status: transferred_to_H08_3_2
    resolution_required: true
    merge_blocking: true

H08_3_2:
  title: Envelope, índice y escritura recuperable
  lifecycle: open
  implementation: authorized_within_defined_scope
```

## Propósito

H08-3.2 introduce un formato de almacenamiento estable, independiente de la
versión del payload, y una secuencia de escritura recuperable que no se
presentará como transacción real.

## Alcance autorizado

- envelope persistente versionado `storageFormatVersion: 1`;
- serialización canónica del payload para integridad accidental;
- checksum nativo SHA-256 o equivalente aprobado, sin dependencia runtime;
- namespace estable de almacenamiento desacoplado de `schemaVersion`;
- índice local limitado a metadatos;
- puntero de proyecto reciente;
- staging por proyecto;
- verificación de staging antes de promover;
- recuperación determinista por roll-forward de staging válido;
- descubrimiento de snapshots raw alpha.2;
- descubrimiento de snapshots raw alpha.1 y migración mediante H08-3.1;
- preservación de las fuentes raw después de una promoción confirmada;
- soporte interno para múltiples proyectos;
- errores tipados mínimos necesarios;
- fixtures, pruebas, trazabilidad y documentación.

## Rutas de implementación autorizadas

- `apps/storylab/src/adapters/storage/**`;
- `apps/storylab/src/ports/**`, solo extensiones mínimas para metadatos;
- `apps/storylab/src/schemas/**`, sin nuevos campos del payload creativo;
- `apps/storylab/src/domain/errors.ts`, solo errores tipados de persistencia;
- `apps/storylab/src/fixtures/**`;
- `apps/storylab/src/tests/**`;
- documentación y auditorías relacionadas.

## Fuera de alcance

- UI de administración de múltiples proyectos;
- cambios en presentación o experiencia narrativa;
- importación, roundtrip o descarga;
- red, backend, nube, telemetría o autenticación;
- IndexedDB;
- dependencias runtime nuevas;
- `package.json` o `package-lock.json`;
- fault injection exhaustivo de cuota e interrupción;
- políticas completas de corrupción, cuarentena o reparación;
- eliminación recuperable mediante tombstones;
- H08-3.3, H08-3.4 o H08-3A.

## Frontera de cierre

H08-3.2 no se considerará cumplido hasta resolver `RES-H08-3.1-STORAGE-NAMESPACE-001`, demostrar
que un snapshot alpha.1 puede descubrirse, migrarse y promoverse sin destruir
la fuente, y verificar que ningún estado de staging válido presenta un proyecto
parcial. Su cierre no abre automáticamente H08-3.3.

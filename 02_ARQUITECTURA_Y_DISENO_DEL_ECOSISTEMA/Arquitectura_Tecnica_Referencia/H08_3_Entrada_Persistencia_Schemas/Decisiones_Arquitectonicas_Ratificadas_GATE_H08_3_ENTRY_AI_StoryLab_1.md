# Decisiones arquitectónicas ratificadas · Entrada H08-3

```yaml
storage:
  selected: hardened_localStorage
  abstraction: ProjectRepository
  IndexedDB: deferred_with_activation_triggers

schema:
  source: 0.8.0-alpha.1
  target: 0.8.0-alpha.2
  future_versions: reject_safely
  legacy_v0_3: reject_with_LEGACY_MIGRATION_REQUIRED

migration:
  explicit: true
  sequential: true
  deterministic: true
  idempotent: true
  source_preserved_on_failure: true

persistence:
  versioned_envelope: approved
  metadata_only_project_index: approved
  staged_recoverable_writes: approved
  transaction_claim_for_localStorage: prohibited
  checksum_scope: accidental_integrity_only

multiple_projects:
  repository_support: approved
  full_management_UI: deferred
```

## Triggers para reevaluar IndexedDB

- contenido binario autorizado;
- aumento sustancial del volumen o número de proyectos;
- necesidad de transacciones reales;
- consultas complejas;
- límites de cuota incompatibles con la experiencia.

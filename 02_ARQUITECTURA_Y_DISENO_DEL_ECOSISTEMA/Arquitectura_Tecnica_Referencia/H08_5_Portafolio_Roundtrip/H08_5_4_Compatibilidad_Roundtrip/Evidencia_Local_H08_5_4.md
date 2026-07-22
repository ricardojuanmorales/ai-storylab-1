# Evidencia local H08-5.4

```yaml
verified_at: 2026-07-22T15:50:49Z
focused_tests: PASS
full_verify: PASS
alpha_2: ACCEPT
alpha_1: MIGRATE_TO_ALPHA_2
future: SCHEMA_VERSION_UNSUPPORTED
legacy_v0_3: LEGACY_MIGRATION_REQUIRED
confirmation: confirmed_by_human
project_id_regenerated: true
internal_ids_preserved: true
repository_save_count: 1
recovery_after_remount: PASS
semantic_equivalence: PASS
```

## Propiedades verificadas

- el checksum alpha.1 se comprueba antes de migrar;
- el candidato staged queda en alpha.2;
- no hay `save` sin confirmación humana;
- una copia recibe un `project.id` nuevo;
- los identificadores internos y el orden del portafolio se preservan;
- el staging se consume únicamente después del roundtrip exitoso;
- fallos de guardado y equivalencia producen errores tipados;
- la comparación ignora solo el ID superior y orden no semántico;
- el adaptador real recupera la copia después de remontar.

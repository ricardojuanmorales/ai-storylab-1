# Estado Canónico de Entrada H08-5

```yaml
repository: ricardojuanmorales/ai-storylab-1
release_train: v0.8.0

baseline:
  branch: main
  merge_commit: 0efd5535cd796cb16b3f77518a6f82614a155a6e
  merged_PR: 61
  merged_at_UTC: 2026-07-21T16:21:01Z

H08_4:
  lifecycle: CLOSED_DOCUMENTALLY_AND_MERGED
  functional_missions: 4
  technical_result: PASS
  governance_result: PASS

H08_5:
  lifecycle: AUTHORIZED_FOR_ACTIVATION
  target_branch: feat/v0.8-h08-5-portfolio-roundtrip
  PR_model: ONE_PR_FOR_ALL_H08_5_CONVERSATIONS
  implementation_started: false
  target: portfolio_and_export_import_roundtrip

protocol:
  version: 3.1
  status: APROBADO_PARA_USO_H08

H08_5_ready: NOT_AUTHORIZED
H08_5_merge: NOT_AUTHORIZED
H08_6: BLOCKED
```

## Evidencia heredada

- M1–M4 funcionales;
- recuperación local del arco completo;
- portafolio ordenado y reversible;
- preview final en memoria;
- reflexiones privadas excluidas;
- reapertura aguas arriba invalida la clausura de M4;
- H08-4 verificado con 33 archivos y 189 pruebas;
- CI Node 22 y Node 24 aprobada;
- PR #61 fusionado con merge commit canónico.

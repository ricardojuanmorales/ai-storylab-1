
# Ficha de Apertura · H08-1.3

```yaml
session_id: H08-1.3-S01
date: 2026-07-15
baseline: 5b04c711127d9dc3197b016289f10c457fd56576
unit: H08-1.3
title: Runner_pruebas_y_CI
input:
  H08_1_2: fulfilled
  schema_version: 0.8.0-alpha.1
objective:
  - strict_compile
  - schema_validation
  - domain_tests
  - parity_tests
  - offline_guard
  - secret_audit
  - CI
exit:
  - human_review
  - green_checks
  - transfer_H08_1_4
blocked:
  - H08_2
  - product_flow
  - real_data
```

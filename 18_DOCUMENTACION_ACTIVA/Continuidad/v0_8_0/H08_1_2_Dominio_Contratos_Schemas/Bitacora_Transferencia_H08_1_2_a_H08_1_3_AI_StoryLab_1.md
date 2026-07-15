# Transferencia Simétrica · H08-1.2 → H08-1.3

```yaml
transfer_id: TS-H08-1-2-TO-1-3-2026-07-15
effective_on: merge_and_human_approval_H08_1_2
from: H08-1.2
to: H08-1.3
receives:
  schema_version: 0.8.0-alpha.1
  contracts:
    - domain_types
    - invariants
    - typed_errors
    - result_type
    - ports
  schemas:
    - project
    - export_package
    - import_candidate
  fixtures:
    - valid
    - invalid
    - legacy_synthetic
  tests:
    - framework_neutral_contract_cases
H08_1_3_must_return:
  - reproducible_runner
  - TypeScript_compile
  - JSON_Schema_validation
  - domain_invariant_tests
  - TS_JSONSchema_parity_tests
  - offline_test
  - secret_audit
  - minimal_CI
  - updated_risks
  - PH_IT_AT_evidence
blocked:
  - H08_2
  - real_data
  - legacy_direct_import
```

# Transferencia Simétrica · H08-1.1 → H08-1.2

```yaml
transfer_id: TS-H08-1-1-TO-1-2-2026-07-15
effective_on: merge_and_human_approval_H08_1_1
from: H08-1.1
to: H08-1.2
receives:
  architecture:
    - isolated app root
    - domain application ports adapters
    - provisional React Vite TypeScript
  legacy:
    - no import by default
    - pure utility exception process
  constraints:
    - local_first
    - synthetic_data_only
    - no_H08_2
H08_1_2_must_return:
  - minimal domain objects
  - invariants
  - typed errors
  - versioned schemas
  - synthetic fixtures
  - migration policy
  - tests
  - updated risks
  - PH_IT_AT evidence
```

H08-1.2 no debe convertir decisiones provisionales en stack irreversible.

# Bitácora de Transferencia Simétrica · H08-1 Realineada

```yaml
transfer_id: TS-H08-1-R3-2-2026-07-14
from:
  - auditoria_interna
  - plan_integral_v1
  - plan_v0_8_realineado
  - verificacion_kit_r2
to:
  - PO-H08-1
  - H08-1
baseline: 24407e6abe0aba4f269b0bb3aeea4a247018869e
shared_invariants:
  - person_decides
  - AI_orchestrates_and_explains
  - machine_verifies
  - local_first
  - synthetic_data_only
  - H08_2_blocked
  - legacy_is_memory_not_destination
PH_receives:
  - propósito y agencia
  - criterios de experiencia
  - límites éticos
IT_receives:
  - baseline y preflight
  - unidades H08-1.1 a 1.5
  - contratos y pruebas
AT_receives:
  - criterios de teclado foco semántica y carga cognitiva
return_required:
  - observaciones resueltas
  - riesgos y deuda
  - evidencia de pruebas
  - decisión humana
```

## Simetría

Ningún dominio entrega una recomendación sin recibir el impacto de los otros dos.
PH, IT y AT deben poder rastrear cómo sus observaciones cambian contratos, pruebas,
interacción y gate.

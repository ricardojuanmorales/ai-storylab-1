# Decisión de alineación estratégica v0.8.0 → v1.0.0

```yaml
decision_date: 2026-07-16
authority: responsable_humano_AI_StoryLab_1
status: ratified

DEC_V08_COMPLETE_EXPERIENCE_001:
  v0_8_close_requires:
    - four_missions
    - recoverable_local_persistence
    - curated_portfolio
    - export_import_roundtrip
    - complete_synthetic_experience

DEC_V08_MISSION_EXPERIENCE_001:
  model: guided_iterative_arc
  completion: four_missions
  flexibility:
    - return
    - revise
    - recombine
    - pause
    - omit_nonessential_elements
  rigidity: prohibited

DEC_V08_IMPLEMENTATION_SEQUENCE_001:
  H08_2_3:
    - complete_M1
    - reusable_mission_engine
  H08_3:
    - persistence_and_schema_hardening
  H08_4:
    - M2
    - M3
    - M4
    - complete_arc_validation
  H08_5:
    - portfolio
    - export_import_roundtrip
  H08_6:
    - stabilization
  GATE_V08_CLOSE:
    experience_complete: required
```

## Interpretación

H08-2 continúa siendo una vertical slice delgada y no equivale al cierre de
v0.8.0. H08-2A revisa el incremento H08-2, pero `GATE-V08-CLOSE` solamente
puede evaluarse después de completar H08-3, H08-4, H08-5 y H08-6.

Las cuatro misiones mínimas permanecen canónicas:

1. Intención creadora.
2. Arquitectura narrativa.
3. Producción multimodal.
4. Curaduría y cierre.

La experiencia será guiada e iterativa, no una secuencia punitiva. La persona
podrá volver, revisar, pausar y recombinar, conservando la agencia sobre el
proceso y el portafolio.

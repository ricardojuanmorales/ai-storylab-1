# Ficha de Apertura · PO-H08-1

```yaml
session_id: PO-H08-1-S01
date: 2026-07-14
phase: v0.8.0
block: PO-H08-1
baseline: 24407e6abe0aba4f269b0bb3aeea4a247018869e
antecedent_baseline: 78685ec23fe35e9c5c8266a5a3f9d54cbdb3b625
pr_50: merged_as_opening_gate_antecedent
pr_51: merged_as_realignment_regent
human_decision:
  operationalization: approved
  r3_2_construction: authorized
  r2_execution: prohibited
objective:
  - integrar la operacionalización aprobada
  - preparar H08-1 bajo alcance verificable
  - preservar continuidad y frontera legacy
includes:
  - tratamiento formal del kit r2
  - fuentes rectoras vigentes
  - unidades H08-1.1 a H08-1.5
  - matrices de salida, riesgos y PH-IT-AT
  - transferencia a H08-1A
  - checklist del gate Ready-to-Code
excludes:
  - código funcional del producto
  - H08-2
  - datos reales
  - backend, auth, cloud o IA embebida
  - Vista del Facilitador
  - cambio de estado de gates
  - modificación de deuda activa
  - merge automático
exit_condition:
  - expediente PO-H08-1 revisado
  - kit r3 integrado por decisión humana
  - Definition of Ready de H08-1 satisfecha
next:
  - preparar PR técnico H08-1
```

## Pregunta de control

¿La preparación operacional permite comenzar H08-1 sin reinterpretar el alcance,
sin reutilizar arquitectura legacy por inercia y sin crear una transición directa
hacia H08-2?

## Respuesta esperada

La respuesta solo puede ser afirmativa después de verificar todos los criterios de
este expediente y emitir una decisión humana independiente para el PR técnico de
H08-1.

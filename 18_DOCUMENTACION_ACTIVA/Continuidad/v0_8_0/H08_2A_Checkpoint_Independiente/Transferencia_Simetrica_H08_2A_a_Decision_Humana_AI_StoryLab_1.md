# Transferencia simétrica · H08-2A → decisión humana

## Fuente

```yaml
source_checkpoint: H08_2A
functional_head: 0e9dc75bb8dd71600616365b14e894a2151594af
source_PR: 59
gate: GATE_H08_2_EXIT
current_recommendation: hold
```

## Evidencia que deberá transferirse

- verificación local fresca;
- CI Node 22/24;
- checklist automatizado;
- recorrido humano;
- matriz de hallazgos;
- registro de riesgos;
- matriz PH-IT-AT;
- dictamen;
- recomendación separada del gate;
- reservas con destino.

## Decisión requerida

```yaml
values:
  - approve
  - approve_with_reservations
  - hold_for_remediation
```

## Prohibiciones

- no aprobar por inferencia;
- no abrir H08-3 antes del gate;
- no cambiar código dentro del checkpoint;
- no actualizar la descripción final del PR antes del dictamen;
- no declarar independencia externa en gobernanza de mantenedor único.

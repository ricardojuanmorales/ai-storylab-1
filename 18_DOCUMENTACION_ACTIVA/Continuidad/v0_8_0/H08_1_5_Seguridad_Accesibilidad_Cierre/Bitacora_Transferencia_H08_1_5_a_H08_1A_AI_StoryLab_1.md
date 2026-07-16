# Transferencia simétrica · H08-1.5 → H08-1A

## Estado de origen

```yaml
from: H08-1.5
working_PR: 57
baseline: ec09193d8797f7ce429c2a8ddccd158a886a8a25
implementation_commit: 8ff38859835f6643d718721848d98470314a0b50
transfer_effective_after: merge_PR_57
```

## Activos transferidos

- frontera arquitectónica provisional;
- dominio, contratos y schemas `0.8.0-alpha.1`;
- casos de uso mínimos;
- adaptadores locales sustituibles;
- runner estricto y CI;
- 48 pruebas;
- auditorías de arquitectura, secretos y privacidad;
- revisión de seguridad;
- revisión de accesibilidad;
- riesgos residuales;
- trazabilidad PH-IT-AT;
- archivo histórico del README anterior;
- nuevo README raíz;
- evidencia de cierre de H08-1.

## Precondiciones para preparar el kit

1. PR #57 debe estar fusionado.
2. `main` debe apuntar al merge verificado.
3. CI del commit documental debe estar verde.
4. No debe existir otro PR o rama activa para H08-1A.
5. H08-2 debe permanecer bloqueado.

## Separación de conversaciones

```yaml
current_conversation_after_merge:
  allowed:
    - verify_merge
    - identify_new_baseline
    - prepare_H08_1A_start_and_continuity_kit
  prohibited:
    - execute_H08_1A
    - issue_checkpoint_finding
    - approve_gate
    - open_H08_2

new_conversation:
  allowed_after_explicit_activation:
    - execute_H08_1A_independent_checkpoint
    - inspect_evidence
    - produce_findings_and_disposition
    - recommend_gate_result
```

## H08-1A debe devolver

- revisión independiente de arquitectura;
- revisión de contratos y schemas;
- revisión de pruebas y auditorías;
- revisión de seguridad y accesibilidad;
- revisión de riesgos PH-IT-AT;
- hallazgos y disposición;
- recomendación separada para `GATE-H08-1-READY-TO-CODE`.

## Bloqueos preservados

- H08-2;
- datos reales;
- Vista del Facilitador;
- persistencia durable;
- backend, nube y autenticación;
- IA embebida;
- primera vertical slice.

## Regla final

La transferencia prepara evidencia. No prejuzga el resultado del checkpoint.

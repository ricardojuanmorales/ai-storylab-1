# Plan de Pruebas Inicial H08-6

## Preflight de continuidad

- verificar `MANIFEST.json`;
- verificar `CHECKSUMS.sha256`;
- comprobar identidad del prompt interno y externo;
- confirmar `main` en `ae93ccef94506724559b8df7b1ccdfeb0489a927`;
- confirmar PR #62 fusionado;
- revisar atestación;
- confirmar versión v3.1 del protocolo;
- confirmar bitácora actualizada.

## Baseline técnico heredado

```yaml
H08_5A:
  focused_test_files: 15
  focused_tests: 58
  full_test_files: 48
  full_tests: 247
  CI_Node_22: PASS
  CI_Node_24: PASS
```

## Pruebas funcionales H08-6

Pendientes de definición después del alineamiento. No deben inventarse en el
kit.

## Gate del primer commit

```yaml
allowed:
  - kit
  - attestation_review
  - activation_record
  - human_session_agreement
  - minimal_active_documentation
forbidden:
  - functional_code
  - schema_changes
  - persistence_changes
  - functional_tests
  - unrelated_refactors
```

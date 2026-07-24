# Recomendación técnica · H08-6.1

```yaml
unit: H08-6.1
technical_recommendation: PASS_WITH_FINDINGS_CANDIDATE
human_verdict: PENDING
audited_head: e3a51465c58e782b42e862ad912b4afd6e56b28a
required_commands: 10
required_failures: 0
diagnostic_findings: 1
full_test_files: 48
full_tests: 247
repository_clean: true
product_changes: false
```

## Fundamento

El baseline integrado es reproducible y funcional:

- instalación limpia;
- typecheck y build;
- auditorías de arquitectura, secretos, privacidad y vertical slice;
- 247 pruebas;
- suites focalizadas;
- checkout intacto;
- CI remoto en Node 22 y Node 24.

La recomendación no es `PASS` puro porque existen tres brechas abiertas:

1. `fast-uri 3.1.3`, afectado por `GHSA-v2hh-gcrm-f6hx`, incorporado
   indirectamente al bundle mediante la cadena de validación;
2. documentación activa desactualizada;
3. comando de regresión de seguridad demasiado estrecho.

## Disposición recomendada

```yaml
H08_6_1:
  human_close_candidate: PASS_WITH_ACCEPTED_ROUTING
  SEC_DEP_001: ROUTE_TO_H08_6_3_AND_H08_6_4
  TEST_SEC_001: ROUTE_TO_H08_6_3
  DOC_DRIFT_001: ROUTE_TO_H08_6_5
  PERF_BASE_001: ROUTE_TO_H08_6_4
```

Cerrar H08-6.1 con hallazgos enrutados no significa aceptar la vulnerabilidad
para publicación. `SEC-DEP-001` debe permanecer bloqueante para el cierre de
H08-6.3 y para `GATE-V08-CLOSE` mientras no exista remediación y regresión
verificadas.

No se abre automáticamente H08-6.2.

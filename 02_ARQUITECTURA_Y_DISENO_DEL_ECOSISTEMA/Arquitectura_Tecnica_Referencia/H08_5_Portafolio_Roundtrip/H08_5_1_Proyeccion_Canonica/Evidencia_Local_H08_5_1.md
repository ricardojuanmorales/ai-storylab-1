# Evidencia local H08-5.1

```yaml
verified_at: 2026-07-21T20:27:51Z
typecheck: PASS
focused_tests: PASS
privacy_audit: PASS
production_scope:
  - application/portfolio-projection.ts
  - application/preview-export.ts
  - application/index.ts
test_scope:
  - tests/application.portfolio-projection.test.ts
regression_scope:
  - tests/application.recovery-export.test.ts
```

## Invariantes demostradas

- el orden humano del portafolio se conserva de forma determinista;
- `private` y `high_care` quedan fuera;
- una reflexión compartible solo sale si fue seleccionada;
- la proyección no modifica el proyecto fuente;
- evidencia, decisiones, perfil, timestamps y feature flags se preservan;
- un portafolio vacío produce un error tipado;
- no se añadió descarga, importación, red o persistencia.

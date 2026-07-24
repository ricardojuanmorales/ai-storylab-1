# Decisión humana · apertura de H08-6.3

**Fecha:** 2026-07-23
**Proyecto:** AI StoryLab 1
**Hito:** H08-6.3 · Seguridad, privacidad e importación desconfiada

## Autorización

Se autoriza comenzar H08-6.3 después de verificar y documentar la reparación
de H08-6.2.

## Hallazgos heredados

```yaml
SEC_DEP_001:
  state: OPEN
  package: fast-uri
  installed_version: 3.1.3
  route:
    - H08-6.3
    - H08-6.4
  blocks_security_close: true
  blocks_GATE_V08_CLOSE: true

TEST_SEC_001:
  state: OPEN
  issue: security_regression_command_is_too_narrow
  route:
    - H08-6.3
```

## Fronteras

Esta apertura no autoriza por sí sola:

- ejecutar `npm audit fix`;
- actualizar dependencias;
- modificar el lockfile;
- aplicar reparaciones de seguridad sin diagnóstico;
- marcar Ready;
- fusionar;
- abrir H08-6.4;
- ejecutar `GATE-V08-CLOSE`.

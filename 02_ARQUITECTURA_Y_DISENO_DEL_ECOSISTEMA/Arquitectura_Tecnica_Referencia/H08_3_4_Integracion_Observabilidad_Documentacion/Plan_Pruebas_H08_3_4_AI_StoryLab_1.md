
# Plan de pruebas H08-3.4

## Suite focalizada

Archivo:

`apps/storylab/src/tests/integration.persistence-hardening.test.ts`

Casos:

1. roundtrip de proyecto H08-2 completo;
2. migración raw alpha.1 y promoción;
3. recuperación integrada después de interrupción;
4. observabilidad segura ante integridad inconsistente.

## Suite completa

Ejecutar desde `apps/storylab`:

```text
npm run verify
```

La verificación debe incluir typecheck, build, auditorías y todas las pruebas.

## Criterios de salida local

- suite focalizada PASS;
- suite completa PASS;
- al menos 24 archivos de prueba;
- al menos 164 pruebas;
- dependencias y lockfiles sin cambios;
- presentación y aplicación sin cambios;
- staging vacío;
- H08-3A cerrado.

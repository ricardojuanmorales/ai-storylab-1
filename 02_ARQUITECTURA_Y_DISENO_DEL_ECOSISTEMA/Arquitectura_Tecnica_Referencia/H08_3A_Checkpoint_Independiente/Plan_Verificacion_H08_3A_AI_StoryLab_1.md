
# Plan de verificación H08-3A

## Suite focalizada independiente

Se ejecutan cinco suites existentes, sin modificar producción:

- `schemas.migration.test.ts`
- `adapters.storage-contracts.test.ts`
- `adapters.storage-recovery.test.ts`
- `integration.persistence-hardening.test.ts`
- `integration.local-first.test.tsx`

Resultado esperado: 5 archivos y 40 pruebas PASS.

## Verificación completa

Desde `apps/storylab`:

```text
npm run verify
```

Resultado esperado: 24 archivos y 164 pruebas PASS.

## Comprobaciones adicionales

- CI remota Node 22 y Node 24;
- árbol funcional congelado;
- ausencia de cambios de paquetes;
- ausencia de cambios funcionales durante H08-3A;
- revisión de minimización de metadatos;
- revisión de fuentes preservadas;
- revisión de alcance diferido;
- registro de deuda procedural no bloqueante.

## Salida

La salida automatizada será una recomendación técnica. El dictamen humano se
registrará por separado.

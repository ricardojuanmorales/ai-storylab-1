
# Bitácora de Sesión · H08-1.3

**Fecha:** 2026-07-15
**Baseline:** `5b04c711127d9dc3197b016289f10c457fd56576`

## Decisiones

1. Node 24 LTS es la base del tooling.
2. Node 22 se conserva en la matriz de compatibilidad.
3. TypeScript opera en modo estricto sin emisión.
4. Ajv2020 valida los schemas 2020-12.
5. Vitest ejecuta dominio, schemas, paridad y guardia offline.
6. las constantes runtime reemplazan uniones duplicadas sin cambiar semántica;
7. la instalación usa lockfile y desactiva scripts;
8. CI tiene permisos de lectura;
9. no se crean capas de aplicación, adaptadores o presentación.

## Resultado esperado

Un baseline cuya verdad técnica puede verificarse con un solo comando.

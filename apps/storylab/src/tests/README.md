# Vectores de Prueba · H08-1.2

Los casos son independientes del runner.

H08-1.3 debe convertirlos en pruebas ejecutables que:

1. carguen todos los schemas;
2. validen fixtures contra JSON Schema;
3. conviertan fixtures actuales a contratos TypeScript;
4. ejecuten `validateProjectInvariants`;
5. comparen errores esperados;
6. prueben paridad entre enums, campos requeridos y versión;
7. verifiquen cero red y cero imports legacy;
8. fallen ante campos adicionales.

La fixture v0.3 es sintética y debe producir `LEGACY_MIGRATION_REQUIRED`.

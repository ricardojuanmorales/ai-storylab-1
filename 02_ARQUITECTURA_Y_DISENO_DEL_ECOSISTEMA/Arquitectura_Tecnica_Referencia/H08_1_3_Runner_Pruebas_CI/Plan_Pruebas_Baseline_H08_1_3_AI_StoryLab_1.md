
# Plan de Pruebas del Baseline · H08-1.3

## Pirámide mínima

### Nivel 1 · Compilación

`tsc --noEmit` verifica contratos, imports y tipos en modo estricto.

### Nivel 2 · Dominio

Pruebas puras de:

- transiciones de misión;
- invariantes de identidad;
- agencia humana;
- privacidad de reflexiones;
- portafolio curado;
- fechas;
- capacidades bloqueadas.

### Nivel 3 · Schemas

Ajv 2020 valida:

- proyecto;
- paquete de exportación;
- candidato de importación;
- rechazo de campos desconocidos;
- formatos de fecha;
- capacidades diferidas en `false`.

### Nivel 4 · Paridad

Compara constantes de dominio con enums, `const` y versión de los schemas.

### Nivel 5 · Fronteras

Audita imports prohibidos y prueba que `fetch` queda bloqueado durante el runner.

### Nivel 6 · CI

Ejecuta el mismo comando `npm run verify` en Node 22 y Node 24.

## Regla

Una fixture puede ser válida por schema y fallar por invariantes. Esto es evidencia
esperada, no inconsistencia del runner.

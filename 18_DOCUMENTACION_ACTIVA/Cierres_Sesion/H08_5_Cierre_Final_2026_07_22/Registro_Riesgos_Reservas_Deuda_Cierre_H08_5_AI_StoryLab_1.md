# Registro de riesgos, reservas y deuda · cierre H08-5

## Hallazgos bloqueantes

Ninguno.

## Observación no bloqueante

La evidencia remota de H08-5.6 tuvo identificadores nulos en un estado
intermedio. H08-5A reconcilió esos campos documentalmente.

## Riesgos residuales

- diferencias perceptuales de foco y lenguaje;
- comportamiento del selector de archivos entre navegadores;
- comprensión humana de copia, checksum y equivalencia semántica;
- futura evolución de schemas y registro de migraciones;
- ausencia deliberada de backend y sincronización.

## Deuda aceptada

- revisión humana perceptual continua;
- pruebas adicionales de navegador cuando exista infraestructura;
- ninguna migración de legacy v0.3 sin hito separado;
- H08-6 permanece fuera de alcance.

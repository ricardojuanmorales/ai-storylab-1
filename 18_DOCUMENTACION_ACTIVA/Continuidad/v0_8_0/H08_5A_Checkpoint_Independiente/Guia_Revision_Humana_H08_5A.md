# Guía de revisión humana · H08-5A

Esta guía se usa después de la evidencia automatizada y antes del veredicto.

## Flujo principal

- crear o recuperar un proyecto local;
- completar o revisar las cuatro misiones;
- abrir la transferencia de portafolio;
- revisar preview y metadata;
- comprobar que las reflexiones privadas no aparecen;
- confirmar la exportación y observar la descarga;
- seleccionar el archivo exportado;
- revisar el staging antes de confirmar;
- importar como copia local;
- confirmar que solo cambia `project.id`;
- recargar y recuperar la copia;
- revisar orden y equivalencia semántica.

## Flujos de rechazo

- cancelar exportación y confirmar que no se descarga;
- seleccionar JSON malformado;
- seleccionar versión futura;
- seleccionar checksum incorrecto;
- confirmar que un rechazo no muta ni guarda el proyecto.

## Experiencia y gobernanza

- navegación por teclado;
- foco visible y lógico;
- mensajes comprensibles;
- región de estado;
- selector de archivo accesible;
- ninguna red, telemetría o publicación;
- ninguna descarga o importación automática.

## Veredicto humano permitido

- `PASS`;
- `PASS_WITH_RESERVATIONS`;
- `REMEDIATION_REQUIRED`.

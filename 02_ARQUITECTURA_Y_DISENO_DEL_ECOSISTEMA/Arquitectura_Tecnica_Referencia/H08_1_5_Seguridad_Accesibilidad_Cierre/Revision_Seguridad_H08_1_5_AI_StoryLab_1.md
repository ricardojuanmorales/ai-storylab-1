# Revisión de seguridad · H08-1.5

## Controles verificados

- dependencias de runtime del producto: ninguna;
- red desde el núcleo: bloqueada;
- persistencia durable: no seleccionada;
- datos reales: prohibidos;
- feature flags diferidas: `false`;
- secretos y archivos `.env`: auditados;
- errores públicos: sin `details`, rutas internas ni excepciones crudas;
- objetos almacenados en memoria: copias defensivas;
- identificadores: UUID opacos con namespace.

## Riesgo residual

La ausencia de presentación y persistencia durable limita el alcance de la
revisión. H08-1A debe comprobar que la evidencia es suficiente para autorizar
una fase de código funcional posterior. Ningún control de esta unidad autoriza
H08-2.

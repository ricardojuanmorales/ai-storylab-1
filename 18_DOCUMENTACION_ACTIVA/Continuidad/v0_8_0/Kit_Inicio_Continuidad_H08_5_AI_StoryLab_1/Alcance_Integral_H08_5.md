# Alcance Integral H08-5 · Portafolio y Roundtrip

## Objetivo

Completar el cierre de la experiencia local-first mediante un portafolio final
exportable y un roundtrip validado que recupere el mismo estado semántico.

## Capacidades

- consolidación del portafolio final;
- paquete exportable versionado;
- preview revisable;
- confirmación humana;
- generación local de archivo;
- checksum;
- importación explícita;
- validación estricta;
- errores tipados;
- compatibilidad;
- migración o rechazo controlado;
- equivalencia semántica;
- recuperación después de importar.

## Hitos internos

### H08-5.0 · Apertura y freeze

- spec;
- contratos;
- schema;
- invariantes;
- fixtures;
- threat model;
- criterios;
- matriz de compatibilidad;
- plan de pruebas.

### H08-5.1 · Portafolio final y paquete canónico

- proyección ordenada;
- metadata mínima;
- exclusión de reflexiones privadas;
- preview sin efectos laterales.

### H08-5.2 · Exportación humana

- validación;
- confirmación;
- checksum;
- nombre de archivo;
- descarga iniciada por la persona;
- ninguna publicación automática.

### H08-5.3 · Importación no confiable

- selección explícita;
- límites de tamaño;
- parsing seguro;
- schema estricto;
- rechazo sin mutación;
- mensajes accesibles.

### H08-5.4 · Compatibilidad y roundtrip

- matriz de versiones;
- migración admitida;
- rechazo de versiones futuras;
- equivalencia semántica;
- recuperación local.

### H08-5.5 · Integración completa

- flujo UI;
- accesibilidad inicial;
- regresión M1–M4;
- remount recovery;
- auditorías.

### H08-5A · Checkpoint

- revisión estructurada;
- cero cambios funcionales;
- evidencia;
- dictamen humano.

## No alcance

- backend;
- cloud;
- red obligatoria;
- autenticación;
- datos reales;
- IA embebida;
- telemetría;
- publicación automática;
- galería;
- colaboración;
- binarios multimedia;
- investigación con personas;
- H08-6.

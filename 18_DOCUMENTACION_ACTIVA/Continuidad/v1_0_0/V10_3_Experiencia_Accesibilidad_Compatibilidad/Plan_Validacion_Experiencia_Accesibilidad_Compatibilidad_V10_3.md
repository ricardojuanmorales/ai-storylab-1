# Plan y recorrido declarado de validación · V10-3

## Modelo de evidencia

V10-3 combina tres capas:

1. pruebas automatizadas existentes en jsdom y Vitest;
2. build y preview local de producción;
3. atestación humana guiada en navegadores instalados y VoiceOver.

La atestación es evidencia humana interna y acotada. No es auditoría externa,
certificación de accesibilidad ni investigación con participantes.

## Datos permitidos

Solo se utiliza el perfil sintético:

- seudónimo: `Brisa-V10-3`;
- título: `Validación sintética V10-3`;
- contexto: `Prueba local sin datos reales`.

## Recorrido declarado

- carga del shell sin error visible;
- enlace de salto y navegación por teclado;
- controles de contraste, movimiento y escala de texto;
- creación de proyecto local sintético;
- visibilidad de M1, M2, M3 y M4;
- recuperación después de recargar;
- landmarks, etiquetas, foco y anuncios con VoiceOver.

## Límites

La matriz declara únicamente los navegadores instalados, identificados por
nombre y versión, que recibieron atestación `PASS`. No se infiere soporte para
Windows, navegadores no probados, versiones futuras, `file://`, dispositivos
móviles ni combinaciones de tecnología asistiva no revisadas.

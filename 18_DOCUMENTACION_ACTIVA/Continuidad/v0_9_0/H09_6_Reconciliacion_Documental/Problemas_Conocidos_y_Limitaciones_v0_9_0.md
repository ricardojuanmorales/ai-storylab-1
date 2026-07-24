# Problemas conocidos y limitaciones · v0.9.0

Ningún elemento es bloqueante por defecto. Reclasificar requiere evidencia,
análisis, propuesta y autorización humana.

## Compatibilidad

- Node 25 y Node 26 no están afirmados.
- Windows no está afirmado.
- Chromium, Firefox y Safari no están afirmados.
- `file://` no está afirmado.
- la evidencia macOS es puntual.

## Reproducibilidad

- dos builds macOS fueron binariamente idénticos;
- Node 22 y Node 24 en Ubuntu fueron binariamente idénticos;
- macOS y Ubuntu no fueron binariamente idénticos;
- el artefacto H09-5 es histórico y está ligado a su commit;
- H09-7 debe ensamblar un nuevo paquete después de H09-6.

## Accesibilidad y experiencia

- revisión en navegadores reales pendiente;
- sesión manual con lector de pantalla no realizada;
- contraste completo no medido;
- no se realizaron estudios con participantes;
- no se afirma efectividad educativa.

## Producto

No hay backend, autenticación, nube, telemetría, carga binaria o publicación
automática. La persistencia depende del navegador y la importación crea una
copia local. Las reflexiones privadas no se exportan.

## Deuda pedagógica

El registro primario contiene 28 elementos diferidos, con objetivo provisional
`v1.1.0` y condición explícita de reapertura.

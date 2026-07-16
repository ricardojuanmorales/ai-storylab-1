# Revisión de accesibilidad · H08-1.5

## Alcance

La revisión se limita a contratos y casos de uso porque no existe presentación.

## Preferencias verificadas

- `reducedMotion`: booleano requerido;
- `highContrast`: booleano requerido;
- `textScale`: `default`, `large` o `extra_large`;
- campos adicionales: rechazados;
- actualización: persistida detrás de `ProjectRepository`;
- capacidades diferidas: preservadas en `false`.

## Interpretación

La accesibilidad forma parte del estado del proyecto desde su creación y no se
trata como decoración visual posterior. La aplicación futura deberá consumir
estas preferencias sin modificar su significado ni introducir valores
silenciosos.

## Pendiente

La navegación por teclado, semántica HTML, contraste efectivo, anuncios para
tecnologías de asistencia, foco y reducción de movimiento deberán evaluarse
cuando exista una superficie de presentación autorizada.

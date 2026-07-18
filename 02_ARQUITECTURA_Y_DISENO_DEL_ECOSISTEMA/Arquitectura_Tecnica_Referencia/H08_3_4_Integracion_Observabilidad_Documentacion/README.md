
# H08-3.4 · Integración, observabilidad local y documentación

Este bloque integra las capacidades construidas en H08-3.1, H08-3.2 y H08-3.3
sin introducir una nueva capa funcional.

## Resultado esperado

Un proyecto compatible con H08-2 debe poder:

1. guardarse y recuperarse mediante envelope v1;
2. migrarse desde raw alpha.1 sin destruir la fuente;
3. completar roll-forward después de una interrupción;
4. conservar índice y recent coherentes;
5. producir diagnóstico local seguro cuando existe corrupción;
6. mantener contenido privado fuera del índice y la cuarentena.

## Frontera

H08-3A permanece cerrado. La canonización de bitácoras y gobernanza global se
reserva para el último commit documental de la sesión.

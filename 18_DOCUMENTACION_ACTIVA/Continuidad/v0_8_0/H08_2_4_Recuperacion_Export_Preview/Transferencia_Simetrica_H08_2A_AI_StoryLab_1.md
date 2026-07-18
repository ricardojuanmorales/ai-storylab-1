# Transferencia simétrica H08-2.4 → H08-2A

## SHA a congelar

El checkpoint debe evaluar el commit final de H08-2.4, no el head de entrada.

## Evidencia mínima

- H08-2.0 a H08-2.4 en un único PR Draft;
- typecheck y build;
- auditorías;
- 19 archivos de prueba;
- 117 pruebas;
- CI Node 22 y Node 24;
- recuperación tras recarga;
- corrupción bloqueada;
- borrado explícito;
- export preview sin datos privados;
- ausencia de importación y descarga.

## Preguntas del checkpoint

1. ¿La vertical slice es completa y honesta?
2. ¿La persistencia permanece reemplazable?
3. ¿La privacidad resiste manipulación local?
4. ¿La agencia humana gobierna portafolio y exportación?
5. ¿Puede autorizarse el cierre de H08-2 con reservas?

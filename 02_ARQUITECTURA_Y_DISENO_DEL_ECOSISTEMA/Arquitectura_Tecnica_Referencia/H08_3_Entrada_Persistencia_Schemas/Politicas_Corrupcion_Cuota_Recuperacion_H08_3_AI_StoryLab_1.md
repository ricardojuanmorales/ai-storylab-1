# Políticas de corrupción, cuota y recuperación

## Corrupción

- bloquear carga;
- no sobrescribir;
- presentar mensaje seguro;
- conservar fuente hasta descarte explícito;
- limpiar punteros huérfanos;
- registrar clasificación local sin contenido sensible.

## Cuota

- error tipado;
- rollback o recuperación por staging;
- borrador en memoria cuando sea posible;
- no prometer exportación automática;
- no borrar proyectos existentes para crear espacio;
- acción humana necesaria para eliminar.

## Recuperación

- detectar staging;
- detectar índice huérfano;
- detectar snapshot sin índice;
- reconstruir metadatos solo desde snapshot válido;
- nunca aceptar payload sin schema e invariantes.

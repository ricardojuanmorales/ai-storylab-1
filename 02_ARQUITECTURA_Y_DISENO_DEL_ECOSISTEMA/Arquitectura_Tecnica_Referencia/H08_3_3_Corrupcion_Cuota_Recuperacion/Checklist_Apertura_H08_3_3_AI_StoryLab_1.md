# Checklist de apertura · H08-3.3

## Precondiciones

- [x] H08-3.2 cerrado en `6d46255b4f56ee134ffd554ae04afbcd63c9eba5`.
- [x] H08-3.2 publicado.
- [x] CI Node 22 en PASS.
- [x] CI Node 24 en PASS.
- [x] `RES-H08-3.1-STORAGE-NAMESPACE-001` resuelta.
- [x] PR #60 permanece Draft.
- [x] Instrucción humana explícita de apertura recibida.

## Contratos por congelar antes de implementar

- [ ] taxonomía final de errores;
- [ ] formato de cuarentena metadata-only;
- [ ] matriz exacta de reparación automática;
- [ ] política de conflictos entre estados válidos;
- [ ] semántica de reintento;
- [ ] límites de limpieza de residuos;
- [ ] puntos exactos de fault injection;
- [ ] mensajes seguros sin contenido sensible.

## Límites

- [x] sin UI;
- [x] sin red o nube;
- [x] sin IndexedDB;
- [x] sin dependencias runtime;
- [x] sin cambios de package;
- [x] H08-3.4 permanece cerrado.

## Gate de implementación

- [ ] autorización humana separada para implementar H08-3.3.

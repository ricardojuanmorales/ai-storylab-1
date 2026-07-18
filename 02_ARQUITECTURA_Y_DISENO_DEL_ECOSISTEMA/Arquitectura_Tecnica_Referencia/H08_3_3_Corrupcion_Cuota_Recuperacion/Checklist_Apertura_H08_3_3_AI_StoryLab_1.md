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

- [x] taxonomía final de errores;
- [x] formato de cuarentena metadata-only;
- [x] matriz exacta de reparación automática;
- [x] política de conflictos entre estados válidos;
- [x] semántica de reintento;
- [x] límites de limpieza de residuos;
- [x] puntos exactos de fault injection;
- [x] mensajes seguros sin contenido sensible.

## Límites

- [x] sin UI;
- [x] sin red o nube;
- [x] sin IndexedDB;
- [x] sin dependencias runtime;
- [x] sin cambios de package;
- [x] H08-3.4 permanece cerrado.

## Gate de implementación

- [x] autorización humana separada para implementar H08-3.3.


## Estado de implementación

```yaml
implementation: verified_local
npm_verify: PASS
test_files: observed
tests: observed
remote_CI: pending_publication
H08_3_4: not_open
```

- [ ] publicar candidato funcional;
- [ ] observar CI Node 22 y Node 24 en PASS;
- [ ] cierre humano separado de H08-3.3.

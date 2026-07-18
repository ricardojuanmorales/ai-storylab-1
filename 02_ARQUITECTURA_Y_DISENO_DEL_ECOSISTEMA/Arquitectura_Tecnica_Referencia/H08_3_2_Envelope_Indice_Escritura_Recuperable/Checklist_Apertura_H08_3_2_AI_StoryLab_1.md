# Checklist de apertura · H08-3.2

## Precondiciones

- [x] H08-3.1 publicado en `e42277138bab3d052c2b182de2394de5f2a18aee`.
- [x] Verificación local H08-3.1 en PASS.
- [x] CI Node 22 en PASS.
- [x] CI Node 24 en PASS.
- [x] `RES-H08-3-ENTRY-CI-001` resuelta.
- [x] `RES-H08-3.1-STORAGE-NAMESPACE-001` transferida a H08-3.2.
- [x] PR #60 permanece Draft.

## Contratos antes de implementar

- [ ] Congelar schemas de envelope, staging e índice.
- [ ] Congelar namespace `storage:v1`.
- [ ] Definir serialización canónica.
- [ ] Definir política exacta de roll-forward.
- [ ] Definir extensión mínima del puerto de metadatos.
- [ ] Extender `StorageLike` con `length` y `key(index)`.
- [ ] Congelar claves raw exactas alpha.1 y alpha.2.
- [ ] Congelar precedencia de `load` y `loadMostRecent`.
- [ ] Confirmar que `recent` no se duplica dentro del índice.
- [ ] Definir errores tipados mínimos.
- [ ] Crear fixtures de estados interrumpidos.
- [ ] Confirmar que no se modifica el payload creativo.

## Bloqueadores de cierre

- [ ] Resolver `RES-H08-3.1-STORAGE-NAMESPACE-001`.
- [ ] Preservar fuentes raw alpha.1 y alpha.2.
- [ ] Demostrar ausencia de proyectos parciales.
- [ ] Mantener índice libre de contenido privado.
- [ ] `npm run verify` en PASS.
- [ ] CI Node 22 y 24 en PASS.
- [ ] Revisión humana separada antes de H08-3.3.

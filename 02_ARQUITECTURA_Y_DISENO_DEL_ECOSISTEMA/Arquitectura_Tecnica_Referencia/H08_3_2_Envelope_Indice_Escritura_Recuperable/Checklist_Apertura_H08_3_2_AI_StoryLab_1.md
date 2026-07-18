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

- [x] Congelar schemas de envelope, staging e índice.
- [x] Congelar namespace `storage:v1`.
- [x] Definir serialización canónica.
- [x] Definir política exacta de roll-forward.
- [x] Definir extensión mínima del puerto de metadatos.
- [x] Extender `StorageLike` con `length` y `key(index)`.
- [x] Congelar claves raw exactas alpha.1 y alpha.2.
- [x] Congelar precedencia de `load` y `loadMostRecent`.
- [x] Confirmar que `recent` no se duplica dentro del índice.
- [x] Definir errores tipados mínimos.
- [x] Crear fixtures de estados interrumpidos.
- [x] Confirmar que no se modifica el payload creativo.

## Bloqueadores de cierre

- [x] Satisfacer técnicamente `RES-H08-3.1-STORAGE-NAMESPACE-001` en local.
- [ ] Resolver canónicamente `RES-H08-3.1-STORAGE-NAMESPACE-001` tras publicación y CI remota.
- [x] Preservar fuentes raw alpha.1 y alpha.2.
- [x] Demostrar ausencia de proyectos parciales.
- [x] Mantener índice libre de contenido privado.
- [x] `npm run verify` en PASS.
- [ ] CI Node 22 y 24 en PASS.
- [ ] Revisión humana separada antes de H08-3.3.

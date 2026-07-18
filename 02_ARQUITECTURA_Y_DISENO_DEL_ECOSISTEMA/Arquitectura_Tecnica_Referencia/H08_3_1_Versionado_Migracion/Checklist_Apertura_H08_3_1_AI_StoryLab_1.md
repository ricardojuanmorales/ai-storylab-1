# Checklist de apertura · H08-3.1

## Precondiciones

- [x] H08-3.0 cerrado materialmente.
- [x] Commit de decisión publicado.
- [x] PR #60 permanece Draft.
- [x] Gate de entrada aprobado con reserva procedural.
- [x] Alcance H08-3.1 delimitado.
- [x] H08-3.2 permanece cerrado.

## Contratos

- [x] Alpha.2 definido como hardening sin campos nuevos.
- [x] Única transición soportada definida.
- [x] Versiones futuras rechazadas.
- [x] Legacy v0.3 rechazado.
- [x] Fuente no destructible.
- [x] Persistencia excluida.
- [x] Fixtures y pruebas planificados.

## Implementación

- [x] Pruebas de contrato incorporadas al candidato local.
- [x] Registro de schemas.
- [x] Schemas versionados.
- [x] Migrador puro.
- [x] Orquestador a versión actual.
- [x] Validación de destino.
- [x] Pruebas nominales y adversariales.
- [x] Suite heredada verde.
- [ ] Resolver `RES-H08-3.1-STORAGE-NAMESPACE-001` en H08-3.2:
      descubrir snapshots alpha.1, migrarlos mediante copia y preservar la
      fuente hasta confirmar escritura recuperable.
- [ ] CI Node 22 y Node 24 confirmado.
- [ ] Reserva RES-H08-3-ENTRY-CI-001 dispuesta.

## Estado

```yaml
H08_3_1: open
implementation: authorized_within_scope
H08_3_2: not_open
```

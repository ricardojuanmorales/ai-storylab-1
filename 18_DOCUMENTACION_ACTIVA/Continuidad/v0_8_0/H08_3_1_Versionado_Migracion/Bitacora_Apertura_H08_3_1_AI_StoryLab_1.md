# Bitácora de apertura · H08-3.1

```yaml
date: 2026-07-18
source_instruction: "Adelante"
authority: repository_owner_and_responsible_human
PR: 60
opening_parent_commit: 12ca182e99ad66515cf860d7cad876414d16ecf1
```

## Decisiones

- abrir H08-3.1 como único bloque funcional activo;
- tratar alpha.2 como hardening sin campos nuevos;
- congelar alpha.1 como schema histórico;
- implementar solo alpha.1 → alpha.2;
- mantener migración pura y no persistente;
- conservar futuras, legacy, envelope, índice y recovery en sus fronteras;
- requerir pruebas antes de código funcional;
- usar el primer commit que active workflows para disponer la reserva CI.

## Secuencia de trabajo

```text
documentación de apertura
→ pruebas rojas
→ registro y schemas versionados
→ migrador puro
→ orquestador
→ validación e invariantes
→ suite completa
→ CI
→ cierre humano H08-3.1
```

## Implementación local candidata

```yaml
date: 2026-07-18
parent_commit: b45bf8fb61665f52904aeb90c5cfab2c30d23be0
schema_registry: complete
migration_alpha_1_to_alpha_2: complete
targeted_tests: PASS
npm_verify: PASS
test_files: 21
tests: 132
CI_reservation: open
```

No se modificaron adaptadores de almacenamiento, dependencias runtime ni
`package-lock.json`. H08-3.2 permanece cerrado.

## Reserva transicional registrada · RES-H08-3.1-STORAGE-NAMESPACE-001

Durante la revisión previa al staging se identificó que
`LocalStorageProjectRepository` deriva sus claves de la versión actual. El
candidato alpha.2 conserva los datos alpha.1 en sus claves anteriores, pero no
los descubre todavía.

La disposición obligatoria corresponde a H08-3.2. El PR debe permanecer Draft
y no puede fusionarse mientras esta reserva esté abierta.

## Cierre efectivo y transferencia a H08-3.2

Por instrucción humana explícita del 2026-07-18, H08-3.1 queda cumplido y H08-3.2
queda abierto. La implementación publicada permanece en `e42277138bab3d052c2b182de2394de5f2a18aee`.

`RES-H08-3.1-STORAGE-NAMESPACE-001` conserva estado abierto y bloquea el merge hasta su resolución
en H08-3.2.

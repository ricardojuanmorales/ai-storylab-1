# Bitácora de apertura · H08-3.2

## Decisión humana

```yaml
date: 2026-07-18
instruction: "Abre H08-3.2: envelope, índice y escritura recuperable"
opening_parent: e42277138bab3d052c2b182de2394de5f2a18aee
```

Se declara H08-3.1 cumplido con implementación publicada y CI remota verde. La
reserva de namespace no desaparece: se transfiere a H08-3.2 como requisito
explícito de cierre.

## Frontera técnica

H08-3.2 desacopla la clave de almacenamiento de la versión del payload. El
formato `storage:v1` alojará proyectos alpha.2 y futuras versiones compatibles
sin mover nuevamente el namespace.

La recuperación autorizada es roll-forward de staging válido. No se afirmará
atomicidad. Los estados inválidos se preservan y se rechazan con seguridad.

## Estado

```yaml
H08_3_1: fulfilled
H08_3_2: open
H08_3_3: not_open
PR_mode: draft
merge: blocked
```

## Aclaración contractual previa a implementación

Antes del staging documental se resolvieron dos ambigüedades:

1. el índice y el puntero reciente no serán fuentes duplicadas de verdad;
   `recent` vivirá exclusivamente en una clave dedicada;
2. la recuperación de staging requerirá una extensión mínima y explícita de
   `StorageLike` con `length` y `key(index)`.

También quedaron congeladas las claves raw alpha.1/alpha.2 y la precedencia de
descubrimiento. H08-3.3 permanece cerrado.

# Contrato de release y disciplina de afirmaciones · V10-1

## Definición operativa de v1.0.0

`v1.0.0` significa una publicación estable y gobernada del ecosistema funcional
de AI StoryLab 1. La etiqueta no se adquiere por intención, por nombre de fase ni
por disponer de una candidata. Solo puede afirmarse después de:

1. congelar una candidata final en un head exacto;
2. verificar los entornos declarados;
3. disponer las ocho reservas mediante decisión humana;
4. satisfacer seguridad, privacidad y cadena de suministro;
5. resolver la política de versión, schema y artefacto;
6. completar documentación con trazabilidad de afirmaciones;
7. superar el checkpoint independiente y `GATE-V10-RELEASE`;
8. recibir decisiones humanas separadas para integración y publicación.

## Descriptor permitido durante la fase

> Candidata `0.9.0-unreleased` bajo preparación gobernada hacia AI StoryLab 1
> `v1.0.0`.

No se permite describir el estado actual como release estable, release publicada,
RC publicada ni artefacto público.

## Entornos actualmente demostrados

- CI automatizada en Ubuntu mediante GitHub Actions;
- Node 22;
- Node 24;
- commit de activación V10-0 `7486b9f1b67e9f00e2a1bfad0742c5b54c2d4b6e`;
- run V10-0 `30133403038` en PASS.

Esta evidencia demuestra el baseline automatizado. No demuestra por sí sola
compatibilidad de navegador, Windows, `file://`, lector de pantalla ni identidad
binaria universal entre sistemas operativos.

## Disciplina de afirmaciones

Toda afirmación pública deberá pertenecer a una de estas clases:

- `VERIFIED`: evidencia exacta y reproducible disponible;
- `BOUNDED`: válida únicamente dentro de límites declarados;
- `NOT_CLAIMED`: deliberadamente no afirmada;
- `PROHIBITED_WITHOUT_NEW_EVIDENCE`: no puede publicarse con la evidencia actual;
- `FALSE_CURRENT_STATE`: contradice el estado vigente.

La ausencia de prueba nunca se convierte en apoyo implícito.

## Límites de publicación

V10-1 no autoriza:

- Ready for Review;
- merge;
- tag;
- RC;
- release;
- publicación del artefacto o checksums;
- comunicación institucional;
- ampliación automática de alcance;
- reparación de reservas o deudas.

## Gate de salida de V10-1

V10-1 alcanza su gate cuando existen:

1. contrato de release;
2. matriz de afirmaciones;
3. matriz de soporte declarado;
4. criterios de bloqueo;
5. manifiesto y checksums;
6. CI exacta del commit documental.

El cierre y la apertura de V10-2 permanecen bajo decisión humana.

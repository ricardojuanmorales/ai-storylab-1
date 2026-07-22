# Protocolo de revisión · H08-5A

## Identificación

```yaml
reviewed_head: 7b0131393ee0f8428743582c6750e1bb40774e8b
PR: 62
mode: structured_self_review
independence_claimed: false
product_changes: prohibited
```

## Fase automatizada

1. confirmar repositorio, rama, PR y SHA exactos;
2. confirmar árbol limpio y rama 0 commits detrás de `main`;
3. crear el primer commit de activación sin tocar producto;
4. revisar el `HEAD` funcional en un worktree limpio;
5. ejecutar `npm ci --ignore-scripts`;
6. ejecutar las pruebas focalizadas de H08-5;
7. ejecutar `npm run verify`;
8. confirmar CI Node 22 y Node 24 del `HEAD` funcional;
9. comprobar que H08-5A no modificó `apps/storylab`;
10. emitir recomendación técnica separada del veredicto humano;
11. crear el último commit exclusivamente documental.

## Revisión humana posterior

La persona responsable debe recorrer y evaluar:

```text
crear o recuperar proyecto
→ completar M1–M4
→ preparar preview
→ confirmar que no contiene reflexión privada
→ confirmar descarga local
→ seleccionar archivo local
→ revisar staging no confiable
→ confirmar importación como copia
→ comprobar nuevo project.id
→ remontar y recuperar
→ comprobar equivalencia semántica
→ ensayar rechazo de archivo inválido sin mutación
```

Evaluar además teclado, foco, mensajes, selector de archivo, confirmaciones,
lenguaje comprensible, ausencia de red y ausencia de publicación automática.

## Clasificación

```yaml
critical: blocks_checkpoint
major: normally_blocks_checkpoint
moderate: disposition_required
minor: may_be_reservation
observation: informational
```

## Salidas técnicas permitidas

- `PASS_CANDIDATE`;
- `PASS_WITH_RESERVATIONS_CANDIDATE`;
- `REMEDIATION_REQUIRED`.

La recomendación técnica no sustituye el veredicto humano.

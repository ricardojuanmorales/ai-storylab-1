# Instrucciones de Reanudación H08-5

## Regla

No ejecutar un script integral a ciegas después de una interrupción.

## Clasificar estado

```yaml
KIT_LOADED:
ALIGNED:
ACTIVATION_COMMITTED:
WORK_COMMITTED:
PUSHED:
CI_PENDING:
CI_PASSED:
SESSION_CLOSED:
ATTESTATION_GENERATED:
NEXT_KIT_GENERATED:
```

## Acción

- observar rama, head, staging, remoto y PR;
- validar el último estado completo;
- continuar desde la siguiente transición;
- usar finalizador cuando el commit ya fue publicado;
- no duplicar kit, comentario, commit o PR.

## Fallos de herramientas

Un `403` del conector activa el respaldo `gh`. No autoriza repetir mutaciones
sin verificar primero el estado remoto.

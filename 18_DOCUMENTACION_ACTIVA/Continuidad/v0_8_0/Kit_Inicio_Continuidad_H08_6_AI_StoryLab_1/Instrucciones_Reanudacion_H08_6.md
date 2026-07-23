# Instrucciones de Reanudación H08-6

## Regla

No ejecutar un operador integral a ciegas después de una interrupción.

## Clasificar estado

```yaml
KIT_LOADED:
CHECKSUMS_VERIFIED:
ATTESTATION_REVIEWED:
ALIGNED:
SCOPE_RATIFIED:
BRANCH_CREATED:
ACTIVATION_COMMITTED:
PUSHED:
CI_PENDING:
CI_PASSED:
SESSION_CLOSED:
ATTESTATION_GENERATED:
NEXT_KIT_GENERATED:
```

## Acción

- observar `main`, rama, head, staging, remoto y PR;
- validar el último estado completo;
- continuar desde la siguiente transición;
- no duplicar kit, prompt, comentario, commit, rama o PR;
- mantener el mismo alcance autorizado durante repairs;
- solicitar nueva autorización si cambia el alcance.

## Fallos de herramientas

Un `403 Resource not accessible by integration` activa el respaldo `gh`. Es una
limitación de herramienta y no autoriza repetir mutaciones sin verificar el
estado remoto.

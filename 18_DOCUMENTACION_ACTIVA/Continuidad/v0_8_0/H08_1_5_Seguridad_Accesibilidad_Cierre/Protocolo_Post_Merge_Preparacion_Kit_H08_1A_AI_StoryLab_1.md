# Protocolo post-merge · Preparación del kit H08-1A

## Momento de ejecución

Únicamente después de verificar el merge de PR #57 y el nuevo baseline de
`main`.

## En esta conversación

Se permite:

1. verificar merge commit, archivos y CI;
2. ratificar el cierre de H08-1.5 y H08-1;
3. construir el kit de inicio y continuidad de H08-1A;
4. producir hashes, manifiesto, preflight y ejecutor;
5. documentar instrucciones para la conversación nueva.

No se permite:

- ejecutar el checkpoint;
- emitir hallazgos de H08-1A;
- recomendar o aprobar el gate;
- abrir H08-2.

## En la conversación nueva

La persona deberá proporcionar o ejecutar el kit aprobado y autorizar
explícitamente el inicio del checkpoint independiente.

## Resultado esperado del kit

```yaml
unit: H08-1A
nature: independent_checkpoint
source_baseline: merge_commit_PR_57
implementation_changes: prohibited
H08_2: blocked
```

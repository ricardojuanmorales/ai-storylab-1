# Protocolo de revisión H08-4A

## Principio

El checkpoint revisa un head funcional congelado. La evidencia documental del
checkpoint puede añadirse localmente, pero el producto no puede cambiar.

## Secuencia

1. Confirmar rama, head, remoto, worktree y staging.
2. Confirmar que el PR #61 permanece abierto y en Draft.
3. Comparar `main` con el head congelado.
4. Registrar el inventario del diff funcional.
5. Confirmar ausencia de cambios en schema, formato, dependencias y adapters.
6. Ejecutar pruebas focalizadas del arco.
7. Ejecutar una verificación completa.
8. Validar señales del audit vertical.
9. Clasificar hallazgos y reservas.
10. Emitir recomendación técnica separada del dictamen humano.
11. Generar checksums y transferencia simétrica.
12. Detenerse sin staging, commit, push, PR, Ready, merge ni H08-5.

## Criterio de recomendación

`PASS_CANDIDATE` requiere:

- cero hallazgos bloqueantes;
- pruebas focalizadas y verify completos;
- producto inmutable durante H08-4A;
- límites diferidos preservados;
- evidencia reproducible;
- dictamen humano todavía pendiente.

La ausencia de checks CI publicados se registra como reserva no bloqueante
mientras la verificación local sea reproducible y no se represente como CI PASS.

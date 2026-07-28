# Criterios de suspensión y rollback post-gate

Suspende el movimiento antes de actuar si ocurre cualquiera de estas condiciones:

1. el head del PR cambia respecto al commit autorizado;
2. una CI exacta deja de estar en PASS;
3. `apps/storylab` cambia respecto al árbol `999be850336096466da19e487f556f760a820b6f`;
4. el ZIP deja de coincidir con `6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c`;
5. aparece el tag `v1.0.0-rc.1` sin autorización;
6. aparece un GitHub Release no autorizado;
7. el source commit deja de ser el objetivo propuesto del tag;
8. una afirmación pública excede la matriz auditada;
9. se intenta asignar `1.0.0` estable;
10. se intenta combinar Ready for Review, merge, tag y publicación en una sola acción.

## Rollback permitido

- Ready for Review puede revertirse a Draft antes del merge.
- Un merge no se revierte automáticamente; requiere una decisión humana nueva.
- Un tag o release publicados no deben borrarse o reemplazarse sin una decisión
  humana específica y un análisis de impacto.
- El artefacto retenido nunca se modifica in place. Cualquier cambio genera una
  identidad nueva y reinicia los gates aplicables.

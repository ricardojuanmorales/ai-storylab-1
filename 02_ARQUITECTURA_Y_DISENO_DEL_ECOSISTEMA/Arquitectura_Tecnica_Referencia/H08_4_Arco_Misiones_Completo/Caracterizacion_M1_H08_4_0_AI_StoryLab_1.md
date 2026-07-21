# Caracterización de M1 · H08-4.0

```yaml
baseline: 7fb21b66aaf1f541d99797d582585adcc09b4f55
source_mode: github_baseline_read_only
production_changes: none
characterization_status: COMPLETE_FOR_CONTRACT_DESIGN
full_local_preflight: BLOCKED_BY_UNRESOLVED_WORKTREE
```

## Comportamiento observado

M1 usa un ciclo funcional compuesto por:

1. inicio explícito de misión;
2. una actividad textual editable;
3. una evidencia textual editable;
4. cero o una reflexión privada opcional;
5. una decisión humana vigente sobre la evidencia;
6. curaduría reversible heredada;
7. reapertura con conservación de borrador, evidencia y reflexión;
8. persistencia después de cada operación válida.

La presentación está concentrada en `MissionOneWorkspace` y referencia directamente
`M1_INTENTION_DEFINITION`. El motor de aplicación recibe `missionId` y ya posee
operaciones reutilizables, pero algunas implementaciones buscan el primer registro
por misión y, por ello, expresan cardinalidad singular de forma implícita.

## Contratos que deben preservarse

- guardar actividad no crea evidencia;
- crear o actualizar evidencia requiere actividad previa;
- reflexión y evidencia son entidades distintas;
- la reflexión es privada y opcional;
- ninguna decisión está preseleccionada;
- aceptar, revisar, rechazar y diferir son decisiones humanas;
- reabrir conserva contenido creativo y retira salidas derivadas vigentes;
- mensajes de error son seguros y no punitivos;
- no existe red ni decisión automatizada.

## Acoplamientos que deben removerse

- selección fija de M1 dentro del workspace;
- textos y encabezados codificados exclusivamente para M1;
- búsqueda singular de evidencia cuando la definición de M3 permita multiplicidad;
- navegación que presenta únicamente la primera misión funcional.

## Reservas de frontera

La vista previa de exportación y la curaduría heredadas de M1 son regresiones del
baseline. H08-4 puede preservarlas sin ampliarlas. No deben convertirse en descarga,
exportación final, importación, roundtrip o portafolio final.

## Implicación para el motor reutilizable

El motor compartido debe recibir una política explícita de misión, al menos:

```ts
interface MissionCardinalityPolicy {
  readonly evidence: "single" | "multiple";
  readonly reflection: "zero_or_one";
}
```

La forma final puede variar, pero la cardinalidad no debe deducirse del título,
posición o identificador de la misión.

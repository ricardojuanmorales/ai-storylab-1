# Registro de Deuda

<!-- C2_BOUNDARY_README -->

## Frontera estructural C2

### Propósito de la frontera

Preparar la frontera futura para la gestión consolidada de deuda documental, técnica y de gobernanza.

### Autoridad documental

Esta frontera se rige por la documentación activa vigente, la Bitácora de
Transferencia Simétrica de cierre C1 y preparación C2, el Plan B7 y los
registros maestros de decisiones, deuda y gates de C1.

Este README no sustituye esas fuentes ni autoriza una migración.

### Contenido permitido

Durante C2 se permite únicamente documentación de frontera.

Durante C2 no se traslada ni consolida el Registro Maestro de Deuda de Gobernanza de C1. `DEBT-GOV-003` permanece abierto.

### Contenido excluido

Durante C2 quedan excluidos:

- documentos sustantivos;
- copias de fuentes vigentes;
- movimientos y renombres;
- eliminaciones y deprecaciones;
- implementación;
- contenido correspondiente a C3 o C4;
- apertura de v0.8.0.

### Relación con fuentes canónicas

Las fuentes canónicas permanecen en sus rutas actuales. Esta frontera no
modifica su identidad, autoridad, vigencia, precedencia ni estado.

### Fase autorizada para poblar la ruta

La fase futura autorizada para consolidación de deuda.

La incorporación de contenido requiere aprobación previa de
`GATE-CORR-G1` y una operación independiente.

### Gate aplicable

`GATE-CORR-G1 · Estructura objetivo`

Estado: `pending`.

La existencia de este README produce evidencia para el gate, pero no lo
aprueba automáticamente.

### Regla de no migración durante C2

C2 prepara la ruta.

C2 no mueve documentos.

C2 no copia fuentes sustantivas.

C2 no inicia C3 ni C4.

### Estado del contenedor

`preparado_en_C2_sujeto_a_G1`

`DEBT-GOV-003` permanece `open`.

v0.8.0 no está abierto.

La implementación no está autorizada.

### Reversión

Antes del merge, cerrar el PR y restaurar o eliminar únicamente los README
incluidos en C2.

Después del merge, revertir el commit de C2.

No será necesario restaurar documentos sustantivos porque C2 no traslada
contenido.

<!-- C7_REGISTRY_ACTIVATION -->

## Activación C7

La frontera preparada en C2 queda activa mediante:

- `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Primario_Deuda_Activa_C7_AI_StoryLab_1.md`
- `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Primario_Deuda_Activa_C7_AI_StoryLab_1.csv`
- `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Indice_Fuentes_Historicas_Deuda_C7_AI_StoryLab_1.md`

Estado operativo:

```text
primary_active_debt_authority: 20
active_unique_ids: 69
historical_sources_indexed: 33
DEBT-GOV-008: resolved
DEBT-C1-007: resolved
GATE-CORR-G4: pending
C8: not open
```

# Arquitectura y Diseño del Ecosistema

<!-- C2_BOUNDARY_README -->

## Frontera estructural C2

### Propósito de la frontera

Preparar la frontera candidata para productos de arquitectura y diseño del ecosistema AI StoryLab 1. Esta ruta no renombra, sustituye, depreca ni elimina `02_ARQUITECTURA_CONCEPTUAL`.

### Autoridad documental

Esta frontera se rige por la documentación activa vigente, la Bitácora de
Transferencia Simétrica de cierre C1 y preparación C2, el Plan B7 y los
registros maestros de decisiones, deuda y gates de C1.

Este README no sustituye esas fuentes ni autoriza una migración.

### Contenido permitido

Durante C2 se permite únicamente documentación de frontera.

En fases posteriores autorizadas podrán evaluarse productos de arquitectura conceptual, funcional y técnica, diseño funcional y UX, modelo de datos, seguridad, privacidad y decisiones arquitectónicas.

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

C3 o C4, según corresponda y mediante una operación independiente.

La incorporación de contenido requiere aprobación previa de
`GATE-CORR-G1` y una operación independiente.

### Gate aplicable

`GATE-CORR-G1 · Estructura objetivo`

Estado: `approved / fulfilled`.

La existencia de este README produce evidencia para el gate, pero no lo
aprueba automáticamente.

### Regla de no migración durante C2

C2 prepara la ruta.

C2 no mueve documentos.

C2 no copia fuentes sustantivas.

C2 no inicia C3 ni C4.

### Estado del contenedor

`preparado_en_C2_con_G1_cumplido`

`DEBT-GOV-003` está `resolved`. `DEBT-GOV-004` permanece `blocked`.

v0.8.0 no está abierto.

La implementación no está autorizada.

### Reversión

Antes del merge, cerrar el PR y restaurar o eliminar únicamente los README
incluidos en C2.

Después del merge, revertir el commit de C2.

No será necesario restaurar documentos sustantivos porque C2 no traslada
contenido.

---

## Enmienda de preparación C3

<!-- C3_PREPARATION_BOUNDARY_UPDATE -->

### Estado vigente post-G2

```text
C2: cerrado
GATE-CORR-G1: approved / fulfilled
DEBT-GOV-003: resolved
C3: migración funcional integrada
GATE-CORR-G2: approved / fulfilled
PR de integración: #38
merge: c1ebf74408716846f9eb2c131ce989b7a188fa1c
DEBT-GOV-004: blocked · decisión de resolución pendiente
cierre formal C3: pendiente
C4: no iniciado
v0.8.0: no abierto
implementación: no autorizada
```

### Subfronteras integradas

- `Arquitectura_Funcional/`
- `Diseno_Funcional_UX/`

Estas subfronteras contienen ocho fuentes sustantivas v0.6 integradas y sus README de alcance.

### Límites preservados

`DOC-UX-007` permanece fuera de la migración y conserva su dependencia compartida C3–C4.

La integración de C3 no abre C4, no abre v0.8.0 y no autoriza implementación.

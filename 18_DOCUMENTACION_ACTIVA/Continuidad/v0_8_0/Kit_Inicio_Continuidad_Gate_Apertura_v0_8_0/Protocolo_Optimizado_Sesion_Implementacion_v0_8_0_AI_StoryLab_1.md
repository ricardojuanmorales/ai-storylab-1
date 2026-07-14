# Protocolo Optimizado de Sesión · v0.8.0

## 1. Definición

Una sesión es una ventana delimitada de colaboración humano-máquina-IA,
orientada a producir o avanzar un resultado tangible, con baseline, objetivo,
límites, evidencia y continuidad explícitos.

## 2. Objetos distintos

```text
sesión ≠ PR
PR ≠ hito
hito ≠ fase
```

Una sesión puede producir varios artefactos. Un hito puede requerir varias
sesiones y varios PR.

## 3. Ficha de apertura

```yaml
session_id:
phase:
hito:
baseline:
objetivo_tangible:
incluye:
no_incluye:
fuentes_canonicas:
riesgos:
productos_esperados:
PR_relacionados:
criterios_de_salida:
condicion_de_pausa:
```

## 4. Cinco momentos

### Alinear

Confirmar propósito, producto, hito, límites y autoridad.

### Verificar baseline

Derivar desde Git:

- commit;
- rama;
- archivos;
- fuentes;
- deuda;
- gates;
- cambios pendientes.

No crear ejecutores antes de completar este paso.

### Ejecutar un bloque

Trabajar una unidad semántica, no una colección arbitraria de archivos.

### Validar

Aplicar:

- validación automática;
- revisión semántica;
- revisión de alcance;
- pruebas;
- matriz PH-IT-AT cuando se active.

### Documentar continuidad

Registrar producto, estado, decisiones, deuda, riesgos y próximo punto de
entrada.

## 5. Estados de sesión

```text
completed
paused
redirected
blocked
cancelled_with_record
```

El cierre normal depende de criterios. La persona puede pausar o redirigir
cuando cambie el contexto.

## 6. Tipos proporcionales

| Tipo | Resultado mínimo |
|---|---|
| Exploratoria | nota, opciones y decisión provisional |
| Operativa | producto, validación y continuidad breve |
| Hito | evidencia, bitácora y comentario |
| Gate | paquete completo y decisión humana |

## 7. Corrección de errores

```text
detener
→ clasificar causa raíz
→ determinar alcance
→ corregir función mínima
→ ejecutar regresión
→ reanudar
```

No regenerar todo el sistema por reflejo.

## 8. Reglas contra fragmentación

- un PR por decisión o corte vertical, no por archivo;
- agrupar derivados reproducibles;
- revisar unitariamente solo decisiones sensibles;
- no duplicar fuentes canónicas;
- no codificar conteos derivables;
- separar reparación del protocolo de trabajo sustantivo;
- registrar cambios al plan de PR.

## 9. Integración transdisciplinaria

La matriz de impacto activa consultas de IT y AT. Su función es consultiva.
Las observaciones se registran como:

```text
incorporada
incorporada_parcialmente
diferida
riesgo_aceptado
rechazada_con_justificacion
```

Los hallazgos se convierten en criterios de aceptación, invariantes o pruebas.

## 10. Modelo operativo

```text
IA orquesta y explica
máquina verifica
persona decide
```

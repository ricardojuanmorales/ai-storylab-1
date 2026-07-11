# Taxonomía Documental Aplicada · Inventario Estructural B2
## AI StoryLab 1

**Estado de aprobación:** APROBADO por revisión humana explícita para integración en PR #25  
**Fecha de aprobación:** 2026-07-10  
**Autoridad de aprobación:** Usuario responsable de AI StoryLab 1  
**Condición:** Aprobado como artefacto de B2. No autoriza movimientos, renombres, eliminaciones ni reclasificaciones automáticas del repositorio.

---

**Estado:** Provisional, sujeto a revisión humana  
**Base estructural:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Archivos clasificados:** 820  
**Método:** Inferencia determinista basada en ruta, nombre, extensión y cartapacio  
**Restricción:** La clasificación no modifica autoridad, vigencia ni ubicación real de ningún archivo

---

## 1. Propósito

Esta taxonomía operacionaliza el protocolo de auditoría estructural sobre la línea base preauditoría. Su objetivo es convertir el árbol del repositorio en un inventario examinable, sin transformar inferencias automáticas en decisiones canónicas.

La taxonomía distingue entre:

1. hechos observables derivados de Git;
2. inferencias semánticas provisionales;
3. decisiones humanas todavía pendientes.

---

## 2. Principio de interpretación

```yaml
hecho:
  ejemplos:
    - ruta
    - nombre
    - extensión
    - profundidad
    - versión declarada en el nombre

inferencia_provisional:
  ejemplos:
    - tipo documental
    - función primaria
    - autoridad
    - vigencia
    - canonicalidad

decision_humana:
  estado_inicial: pendiente
```

Una clasificación de alta confianza sigue siendo provisional hasta ser confirmada por revisión humana o por evidencia documental interna.

---

## 3. Campos del inventario

| Campo | Naturaleza | Descripción |
|---|---|---|
| `id_unidad` | Hecho generado | Identificador estable dentro de esta ejecución |
| `ruta_actual` | Hecho Git | Ruta versionada en la línea base |
| `nombre_archivo` | Hecho Git | Nombre del archivo |
| `extension` | Hecho Git | Extensión observada |
| `cartapacio_raiz` | Hecho derivado | Primer segmento de la ruta |
| `subcartapacio` | Hecho derivado | Ruta intermedia |
| `profundidad` | Hecho derivado | Cantidad de separadores de ruta |
| `version_declarada` | Hecho textual | Versión detectada en el nombre o ruta |
| `fase_relacionada` | Inferencia débil | Fase sugerida por la ruta |
| `tipo_documental_provisional` | Inferencia | Clase funcional principal |
| `funcion_primaria_provisional` | Inferencia | Propósito dominante supuesto |
| `autoridad_provisional` | Inferencia | Nivel A0–A5 |
| `vigencia_provisional` | Inferencia | Estado de vigencia supuesto |
| `estado_editorial_provisional` | Inferencia | Señales como borrador, aprobado o final |
| `canonicalidad_provisional` | Inferencia | Relación sugerida con el sistema canónico |
| `deuda_asociada` | Pendiente | Relación con deudas registradas |
| `riesgo_estructural_preliminar` | Inferencia | Riesgo inicial, no severidad final |
| `nivel_confianza` | Métrica | Confianza heurística entre 0 y 1 |
| `evidencia_clasificacion` | Evidencia | Regla que produjo la inferencia |
| `decision_humana` | Control | Estado inicial `pendiente` |

---

## 4. Categorías aplicadas

| Tipo documental | Función provisional |
|---|---|
| Rector | Establecer principios superiores |
| Canónico | Servir como referencia autorizada de una materia |
| Gobernanza | Regular autoridad, ética, riesgo o decisión |
| Decisión | Registrar aprobación o determinación humana |
| Gate | Controlar apertura, cierre o transición |
| Mapa | Representar estructura, estado o relaciones |
| Matriz | Organizar criterios, vínculos o seguimiento |
| Protocolo | Definir método reproducible |
| Plan | Organizar secuencia de trabajo |
| Especificación | Definir requisitos o contratos |
| Arquitectura | Definir organización conceptual o técnica |
| Modelo | Representar una estructura conceptual |
| Guía | Orientar navegación, uso o procedimiento |
| Continuidad | Preservar memoria y transferencia |
| Auditoría | Examinar conformidad, estructura o calidad |
| Registro de deuda | Registrar pendientes y restricciones |
| Referencia | Sostener lenguaje, teoría o documentación |
| Histórico | Conservar memoria no operativa |
| Auxiliar | Apoyar sin autoridad elevada demostrada |
| Código | Implementar comportamiento técnico |
| Configuración | Configurar herramientas o dependencias |
| Activo | Proveer recursos de interfaz o publicación |
| Prompt | Proveer instrucciones operativas para IA |
| Documento | Archivo documental aún no clasificable |

---

## 5. Niveles de autoridad aplicados

| Nivel | Interpretación provisional |
|---|---|
| A0 | Autoridad desconocida |
| A1 | Auxiliar |
| A2 | Operativa |
| A3 | Canónica de fase o controlada |
| A4 | Rectora transversal |
| A5 | Decisión humana formal |

La autoridad no queda validada por el nombre del archivo. Los niveles sirven para priorizar revisión.

---

## 6. Resultado cuantitativo provisional

| Tipo | Archivos |
|---|---:|
| Guía | 193 |
| Continuidad | 192 |
| Código | 69 |
| Documento | 46 |
| Decisión | 45 |
| Auxiliar | 41 |
| Histórico | 34 |
| Matriz | 30 |
| Gate | 29 |
| Especificación | 21 |
| Registro de deuda | 21 |
| Auditoría | 17 |
| Mapa | 15 |
| Modelo | 13 |
| Configuración | 12 |
| Protocolo | 11 |
| Arquitectura | 10 |
| Plan | 9 |
| Referencia | 8 |
| Activo | 3 |
| Prompt | 1 |

Total: **820 archivos**.

La concentración en categorías como `Continuidad` y `Guía` refleja en parte señales presentes en las rutas y nombres. No demuestra por sí sola que esas funciones sean las correctas.

---

## 7. Reglas heurísticas principales

1. Extensiones y rutas técnicas se clasifican primero como código, configuración o activo.
2. Palabras como `acta`, `decisión` y `aprobación` elevan provisionalmente la autoridad.
3. `gate`, `protocolo`, `plan`, `matriz`, `mapa`, `arquitectura` y `especificación` activan categorías homónimas.
4. Rutas bajo `99_ARCHIVO_HISTORICO` reciben vigencia histórica.
5. Señales como `BORRADOR`, `DRAFT`, `PROVISIONAL`, `REESCRITO` o `PENDIENTE` se registran como estado editorial provisional o residual.
6. Archivos documentales sin señales suficientes quedan como `Documento` o `Auxiliar`.
7. La ubicación bajo `18_DOCUMENTACION_ACTIVA` no se interpreta automáticamente como canonicalidad.

---

## 8. Límites metodológicos

La clasificación no leyó todavía el contenido integral de los 820 archivos. Por ello no puede resolver de forma definitiva:

- autoridad real;
- vigencia real;
- sustituciones;
- contradicciones;
- relaciones de dependencia;
- deudas asociadas;
- canonicalidad;
- función real frente a función declarada.

Estas dimensiones se abordarán mediante revisión semántica y referencial en B2–B4.

---

## 9. Criterio de aprobación futura

Una unidad podrá pasar de provisional a confirmada cuando exista al menos una de estas evidencias:

1. declaración explícita dentro del documento;
2. referencia desde un documento rector;
3. decisión humana registrada;
4. gate o acta que determine su estado;
5. convención canónica formalmente aprobada;
6. relación histórica demostrable con un documento sustituto.

---

## 10. Salida de B2

Esta taxonomía y el inventario permiten comenzar la revisión humana por riesgo, incertidumbre y concentración, sin mover un solo archivo.

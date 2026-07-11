# Mapa de Cobertura README de Cartapacios Raíz
## AI StoryLab 1 · B3 Fase 2

**Estado:** Diagnóstico de cobertura, no decisional  
**Base auditada:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Nodos raíz evaluados:** 29  
**Cartapacios documentales numerados:** 23  
**Nodos técnicos especiales:** 6  
**Restricción:** No autoriza reorganización

---

## 1. Propósito

Determinar si cada nodo raíz cuenta con una fuente suficiente para declarar su función antes de completar la matriz `función declarada vs. función observada`.

La auditoría distingue entre:

1. existencia física de un README;
2. contenido funcional específico;
3. plantilla genérica todavía pendiente de activación;
4. función localizada únicamente en un protocolo transversal;
5. nodos técnicos que requieren criterios distintos a los cartapacios documentales.

---

## 2. Resultado de cobertura

| Clasificación | Cantidad |
|---|---:|
| README especifico verificado | 3 |
| README generico verificado | 2 |
| README presente no leido semanticamente | 12 |
| funcion transversal localizada | 6 |
| nodo tecnico especial | 6 |

---

## 3. Hallazgo principal

La presencia de `README.md` no equivale automáticamente a una función declarada suficiente.

Se verificó que:

- `00_CONTROL_MAESTRO` posee una función rectora explícita;
- `01_FUNDAMENTO_FILOSOFICO` posee una función canónica específica;
- `20_MANTENIMIENTO_Y_EVOLUCION` posee una función formal de deuda y mantenimiento;
- `02_ARQUITECTURA_CONCEPTUAL` y `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO` poseen README genéricos con estado `Pendiente_Activacion`.

Por tanto, la auditoría deberá evaluar la calidad semántica del README, no solo su existencia.

---

## 4. Nodos técnicos especiales

Los siguientes nodos no deben tratarse automáticamente como cartapacios documentales equivalentes:

```text
(raiz)
.specify
prompts
public
scripts
src
```

Su evaluación requerirá criterios de arquitectura técnica, desarrollo, publicación o automatización. La ausencia o presencia de README en estos nodos no se juzga bajo la misma convención documental.

---

## 5. Matriz de cobertura

| Nodo raíz | Tipo | README directo | Clasificación | Estado |
|---|---|---|---|---|
| `(raiz)` | tecnico_especial | — | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |
| `.specify` | tecnico_especial | `.specify/README.md` | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |
| `00_CONTROL_MAESTRO` | documental | `00_CONTROL_MAESTRO/README.md` | README_especifico_verificado | funcion_declarada_localizada |
| `01_FUNDAMENTO_FILOSOFICO` | documental | `01_FUNDAMENTO_FILOSOFICO/README.md` | README_especifico_verificado | funcion_declarada_localizada |
| `02_ARQUITECTURA_CONCEPTUAL` | documental | `02_ARQUITECTURA_CONCEPTUAL/README.md` | README_generico_verificado | deuda_definicion_funcional |
| `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO` | documental | `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/README.md` | README_generico_verificado | deuda_definicion_funcional |
| `04_GOBERNANZA_ETICA_Y_RIESGOS` | documental | `04_GOBERNANZA_ETICA_Y_RIESGOS/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `05_COMPETENCIAS_Y_PERFILES` | documental | `05_COMPETENCIAS_Y_PERFILES/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `06_PASTILLAS_MODULARES` | documental | `06_PASTILLAS_MODULARES/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `07_PLANTILLAS_Y_MODELOS` | documental | `07_PLANTILLAS_Y_MODELOS/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS` | documental | `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `09_IA_AGENTES_Y_COPILOTOS` | documental | `09_IA_AGENTES_Y_COPILOTOS/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `10_REPOSITORIOS_Y_FLUJO_TECNICO` | documental | `10_REPOSITORIOS_Y_FLUJO_TECNICO/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `11_MULTIMODALIDAD_Y_PUBLICACION` | documental | `11_MULTIMODALIDAD_Y_PUBLICACION/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `12_DISENO_INSTRUCCIONAL_UNIVERSAL` | documental | `12_DISENO_INSTRUCCIONAL_UNIVERSAL/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `13_INVESTIGACION_Y_EVIDENCIA` | documental | `13_INVESTIGACION_Y_EVIDENCIA/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO` | documental | `14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA` | documental | `15_EVALUACION_CALIDAD_Y_AUDITORIA/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `16_SEGURIDAD_PRIVACIDAD_Y_DATOS` | documental | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `17_INTERNACIONALIZACION_LOCALIZACION` | documental | `17_INTERNACIONALIZACION_LOCALIZACION/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `18_DOCUMENTACION_ACTIVA` | documental | `18_DOCUMENTACION_ACTIVA/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `19_IMPLEMENTACION_Y_DESPLIEGUE` | documental | `19_IMPLEMENTACION_Y_DESPLIEGUE/README.md` | README_presente_no_leido_semanticamente | pendiente_extraccion_funcion |
| `20_MANTENIMIENTO_Y_EVOLUCION` | documental | `20_MANTENIMIENTO_Y_EVOLUCION/README.md` | README_especifico_verificado | funcion_declarada_localizada |
| `21_WIKI_DOCUMENTACION_HUMANA` | documental | `21_WIKI_DOCUMENTACION_HUMANA/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `99_ARCHIVO_HISTORICO` | documental | `99_ARCHIVO_HISTORICO/README.md` | funcion_transversal_localizada | requiere_contraste_con_README |
| `prompts` | tecnico_especial | — | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |
| `public` | tecnico_especial | — | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |
| `scripts` | tecnico_especial | — | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |
| `src` | tecnico_especial | — | nodo_tecnico_especial | requiere_criterio_tecnico_no_README_documental |

---

## 6. Criterios para completar la Fase 2

Una función declarada se considerará suficientemente localizada cuando:

1. el README exprese propósito específico;
2. identifique qué contiene y qué excluye;
3. establezca criterios de colocación;
4. indique autoridad o relación con documentos rectores;
5. su estado editorial sea compatible con su uso actual.

Cuando el README sea genérico, la función deberá buscarse en un documento rector alternativo o registrarse como deuda.

---

## 7. Restricción

Este mapa identifica cobertura y deuda. No determina destinos, movimientos, renombres ni cierres.

# Auditoría de Cartapacios Raíz
## AI StoryLab 1 · B3 Convenciones y concentración

**Estado:** Análisis provisional, no decisional
**Base:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`
**Cartapacios raíz observados:** 29
**Archivos analizados:** 820

---

## 1. Propósito

Examinar la distribución funcional del repositorio por cartapacios raíz para identificar concentración, heterogeneidad, profundidad y posibles tensiones entre función declarada y función observada.

Este documento no propone todavía movimientos. Su función es construir una lectura comparativa y preparar la revisión humana.

## 2. Distribución por cartapacio raíz

| Cartapacio raíz | Archivos | Profundidad promedio | Tipos predominantes |
|---|---:|---:|---|
| `18_DOCUMENTACION_ACTIVA` | 334 | 2.9 | Continuidad (176), Auxiliar (38), Decisión (37), Gate (17), Matriz (15) |
| `99_ARCHIVO_HISTORICO` | 92 | 5.0 | Histórico (33), Código (32), Guía (18), Configuración (8), Decisión (1) |
| `05_COMPETENCIAS_Y_PERFILES` | 81 | 3.15 | Guía (49), Documento (12), Matriz (9), Referencia (5), Continuidad (3) |
| `00_CONTROL_MAESTRO` | 53 | 2.49 | Especificación (12), Guía (11), Documento (9), Protocolo (6), Matriz (5) |
| `src` | 35 | 1.94 | Código (35) |
| `21_WIKI_DOCUMENTACION_HUMANA` | 32 | 1.94 | Guía (15), Documento (9), Continuidad (6), Gate (2) |
| `20_MANTENIMIENTO_Y_EVOLUCION` | 23 | 1.96 | Registro de deuda (13), Guía (8), Documento (1), Gate (1) |
| `(raiz)` | 16 | 0.0 | Documento (4), Decisión (4), Configuración (3), Guía (3), Código (2) |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA` | 16 | 1.94 | Auditoría (11), Gate (4), Decisión (1) |
| `16_SEGURIDAD_PRIVACIDAD_Y_DATOS` | 13 | 1.92 | Guía (7), Documento (3), Modelo (2), Auditoría (1) |
| `19_IMPLEMENTACION_Y_DESPLIEGUE` | 12 | 2.08 | Guía (9), Plan (1), Documento (1), Mapa (1) |
| `.specify` | 11 | 2.55 | Especificación (8), Guía (2), Documento (1) |
| `07_PLANTILLAS_Y_MODELOS` | 11 | 1.91 | Modelo (10), Referencia (1) |
| `04_GOBERNANZA_ETICA_Y_RIESGOS` | 9 | 1.89 | Guía (6), Documento (2), Decisión (1) |
| `10_REPOSITORIOS_Y_FLUJO_TECNICO` | 9 | 1.89 | Guía (6), Auxiliar (2), Documento (1) |
| `01_FUNDAMENTO_FILOSOFICO` | 7 | 1.57 | Guía (5), Documento (2) |
| `02_ARQUITECTURA_CONCEPTUAL` | 7 | 1.86 | Arquitectura (6), Mapa (1) |
| `08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS` | 7 | 2.29 | Guía (7) |
| `09_IA_AGENTES_Y_COPILOTOS` | 7 | 1.86 | Guía (5), Auditoría (1), Documento (1) |
| `03_METODOLOGIA_Y_FLUJO_DE_TRABAJO` | 6 | 1.83 | Guía (3), Gate (1), Especificación (1), Continuidad (1) |
| `11_MULTIMODALIDAD_Y_PUBLICACION` | 6 | 1.83 | Guía (6) |
| `12_DISENO_INSTRUCCIONAL_UNIVERSAL` | 6 | 1.83 | Guía (5), Matriz (1) |
| `13_INVESTIGACION_Y_EVIDENCIA` | 6 | 1.83 | Guía (6) |
| `14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO` | 6 | 1.83 | Continuidad (6) |
| `06_PASTILLAS_MODULARES` | 5 | 1.8 | Guía (5) |
| `17_INTERNACIONALIZACION_LOCALIZACION` | 5 | 1.8 | Guía (4), Referencia (1) |
| `public` | 3 | 3.0 | Activo (3) |
| `prompts` | 1 | 2.0 | Prompt (1) |
| `scripts` | 1 | 1.0 | Auxiliar (1) |

## 3. Lectura provisional

Los conteos permiten detectar tres fenómenos que deberán revisarse semánticamente:

1. cartapacios con alta concentración documental;
2. cartapacios con mezcla de tipos documentales heterogéneos;
3. cartapacios cuya profundidad puede dificultar navegación y trazabilidad.

La presencia de muchos tipos documentales en un mismo cartapacio no constituye por sí sola un hallazgo. Puede responder a una función integradora legítima. La coherencia deberá evaluarse contra la función declarada y la autoridad documental.

## 4. Matriz asociada

La matriz `Matriz_Funcion_Declarada_vs_Funcion_Observada_Cartapacios_AI_StoryLab_1.csv` conserva, por cartapacio raíz:

- cantidad de archivos;
- profundidad promedio;
- tipos documentales predominantes;
- función declarada pendiente;
- función observada provisional;
- coherencia provisional;
- riesgo preliminar;
- decisión humana pendiente.

## 5. Próxima revisión humana

Para cada cartapacio raíz deberá responderse:

1. ¿Qué función declara explícitamente?
2. ¿Qué tipos documentales contiene realmente?
3. ¿La mezcla es coherente con su función?
4. ¿Existen documentos rectores enterrados?
5. ¿Se mezclan activos, históricos, continuidad y control?
6. ¿La profundidad facilita o dificulta navegación?
7. ¿Debe conservarse, subdividirse, renombrarse o simplemente documentarse mejor?

## 6. Restricción

Ninguna lectura de este documento autoriza mover, renombrar, fusionar o eliminar archivos.
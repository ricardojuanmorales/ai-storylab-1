# Lectura de Funciones Declaradas de Cartapacios · Fase 1
## AI StoryLab 1 · B3

**Estado:** Evidencia parcial, no decisional  
**Base auditada:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Cartapacios con función declarada localizada:** 8  
**Cartapacios restantes:** Pendientes de lectura de README o documento rector  
**Restricción:** No autoriza reorganización

---

## 1. Propósito

Esta fase comienza a sustituir inferencias basadas en nombres por funciones declaradas respaldadas por documentos del repositorio.

Se distinguen dos clases de evidencia:

1. **README de cartapacio**, con confianza inicial alta;
2. **protocolo transversal de rutas canónicas**, con confianza inicial media hasta contrastarlo con el README correspondiente.

---

## 2. Funciones declaradas localizadas

| Cartapacio | Función declarada | Fuente | Confianza |
|---|---|---|---|
| `00_CONTROL_MAESTRO` | Conservar documentos rectores que gobiernan estructura, colocación documental, versiones, mapas, índices, protocolos y SDD. | `00_CONTROL_MAESTRO/README.md` | alta |
| `05_COMPETENCIAS_Y_PERFILES` | Conservar perfiles de usuario y conocimiento común transversal. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |
| `07_PLANTILLAS_Y_MODELOS` | Conservar plantillas SDD y modelos reutilizables. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |
| `15_EVALUACION_CALIDAD_Y_AUDITORIA` | Conservar reportes de auditoría, gates, checks y evidencias de validación. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |
| `18_DOCUMENTACION_ACTIVA` | Conservar bitácoras, cierres de sesión o versión y registros de decisiones como memoria activa. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |
| `20_MANTENIMIENTO_Y_EVOLUCION` | Conservar deuda, mantenimiento, backlog evolutivo, actualizaciones y seguimiento de continuidad estructural, técnica y documental. | `20_MANTENIMIENTO_Y_EVOLUCION/README.md` | alta |
| `21_WIKI_DOCUMENTACION_HUMANA` | Conservar documentación wiki orientada a navegación y comprensión humana. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |
| `99_ARCHIVO_HISTORICO` | Conservar archivo histórico bajo condiciones formales de transferencia y preservación. | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | media |

---

## 3. Tensión documental identificada

El `Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md`:

- define principios rectores de colocación;
- establece una jerarquía documental;
- asigna rutas canónicas por producto;
- exige README para cartapacios con continuidad operativa;
- permanece marcado internamente como `Borrador operativo para PR #9`.

Esta condición no invalida automáticamente sus reglas. Sí exige determinar, en una fase posterior, si fue aprobado, sustituido, absorbido por otro documento o mantenido como norma operativa de facto.

Se registra como tensión de autoridad y vigencia, no como error.

---

## 4. Observaciones iniciales

### `00_CONTROL_MAESTRO`

Su README lo define como zona rectora y excluye expresamente bitácoras, cierres específicos, deuda viva, wiki humana, perfiles e implementación. También advierte que su principal riesgo es convertirse en depósito general.

La creación de `Auditorias_Estructurales/` dentro de este cartapacio deberá evaluarse cuidadosamente contra esa definición. En este PR funciona como ubicación controlada provisional para artefactos que gobiernan la auditoría, pero su destino definitivo sigue sujeto al análisis de B3 y B6.

### `18_DOCUMENTACION_ACTIVA`

El protocolo le asigna bitácoras, cierres y decisiones como memoria activa. La presencia de continuidad, planes, gates, changelogs, transferencias y otros tipos adicionales deberá contrastarse con esa función declarada.

### `20_MANTENIMIENTO_Y_EVOLUCION`

Su README lo define como sistema formal para deuda, mantenimiento, backlog y actualizaciones. Esto fortalece la hipótesis de que los registros de deuda activa deberían converger hacia esta zona, salvo excepciones documentadas.

### `15_EVALUACION_CALIDAD_Y_AUDITORIA`

El protocolo lo identifica como ruta canónica para reportes de auditoría, gates, checks y evidencias. Esto crea una pregunta estructural central: qué artefactos del PR #25 deben permanecer en control maestro por función rectora y cuáles deberían, tras el cierre, residir en la zona formal de auditoría.

No se decide todavía.

---

## 5. Próxima pasada

La fase 2 deberá leer los README de los restantes cartapacios raíz y completar:

- función declarada;
- fuente exacta;
- confianza;
- coherencia con contenido observado;
- tensión o contradicción;
- necesidad de decisión humana.

---

## 6. Dictamen

La función declarada debe prevalecer sobre inferencias de nombre, pero nunca sin verificar autoridad y vigencia de la fuente.

Esta fase mantiene abierta la arquitectura. Su valor está en convertir intuiciones en evidencia trazable.

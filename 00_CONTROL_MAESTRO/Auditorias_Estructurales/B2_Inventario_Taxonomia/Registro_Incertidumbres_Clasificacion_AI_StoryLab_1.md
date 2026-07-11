# Registro de Incertidumbres de Clasificación · B2
## AI StoryLab 1

**Estado de aprobación:** APROBADO por revisión humana explícita para integración en PR #25  
**Fecha de aprobación:** 2026-07-10  
**Autoridad de aprobación:** Usuario responsable de AI StoryLab 1  
**Condición:** Aprobado como artefacto de B2. No autoriza movimientos, renombres, eliminaciones ni reclasificaciones automáticas del repositorio.

---

**Estado:** Abierto  
**Base:** commit `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Unidades señaladas:** 90 de 820  
**Finalidad:** Evitar que inferencias automatizadas se conviertan silenciosamente en decisiones documentales

---

## 1. Criterios de inclusión

Una unidad aparece en este registro cuando cumple al menos una condición:

- confianza inferior a `0.60`;
- canonicalidad provisional `indeterminado`;
- estado editorial provisional o residual.

## 2. Resumen

| Motivo | Incidencias |
|---|---:|
| confianza baja | 86 |
| canonicalidad indeterminada | 86 |
| estado editorial provisional o residual | 4 |

Una unidad puede aparecer en más de un motivo.

## 3. Prioridades de revisión

### Prioridad 1

- documentos con autoridad potencial A4–A5 y estado dudoso;
- nombres con marcas editoriales residuales;
- archivos raíz sin cartapacio;
- documentos activos cuya canonicalidad es indeterminada.

### Prioridad 2

- documentos clasificados genéricamente como `Documento` o `Auxiliar`;
- elementos en `18_DOCUMENTACION_ACTIVA` con función insuficientemente demostrada;
- documentos con versiones múltiples o señales de sustitución.

### Prioridad 3

- README y auxiliares cuya función puede confirmarse por contexto;
- archivos técnicos con clasificación evidente pero relación documental pendiente.

## 4. Muestra inicial para revisión humana

| ID | Ruta | Tipo provisional | Confianza | Riesgo |
|---|---|---|---:|---|
| UNIT-0004 | `.specify/memory/constitution_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0016 | `00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0018 | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Estado_Gobernanza_Documental_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0021 | `00_CONTROL_MAESTRO/Manifiestos/Kit_Inicial_Repositorio_AI_StoryLab_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0022 | `00_CONTROL_MAESTRO/Manifiestos/Manifest_Kit_N3_Foundation_Structure_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0032 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0035 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0063 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Migracion_Documentos_Heredados_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0064 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0065 | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Documental_AI_StoryLab_1_v0_4_4.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0068 | `01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_2.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0069 | `01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0088 | `04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto/Governance_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0094 | `04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos/Risk_Register_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0110 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Agencia_Humana_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0111 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0112 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Colaboracion_Transdisciplinaria_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0113 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Conocimiento_Situado_Contextual_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0114 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Diseno_Universal_Accesibilidad_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0115 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Etica_Aplicada_Responsabilidad_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0117 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0118 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0119 | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Reflexion_Metacognitiva_Portafolio_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0142 | `05_COMPETENCIAS_Y_PERFILES/Marco_Competencias_Taxonomias/Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_2.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0150 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0159 | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Manifest_Base_Conocimiento_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0202 | `09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0207 | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test/generate_ai_storylab_n3_foundation_structure_v0_4_0.sh` | Auxiliar | 0.55 | R0_no_evaluado |
| UNIT-0208 | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test/migrar_documentos_heredados_v0_4_0.sh` | Auxiliar | 0.55 | R0_no_evaluado |
| UNIT-0212 | `10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/Contributing_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0261 | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Politica_Privacidad_Local_First_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0262 | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Privacy_Local_First_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0266 | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad/Security_Requirements_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0310 | `18_DOCUMENTACION_ACTIVA/Changelog/Changelog_Completo_v0_4_0.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0311 | `18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR10_Cierre_Constitucional_SDD_v0_4_4.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0312 | `18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0314 | `18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR17_Activacion_Correccion_Ruta_v0_5_0_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0316 | `18_DOCUMENTACION_ACTIVA/Changelog/Changelog_v0_4_2.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0318 | `18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR14_v0_4_8_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0319 | `18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR15_v0_4_9_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0320 | `18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0321 | `18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Controlado_PR17_v0_5_0_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0322 | `18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0323 | `18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_7_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0324 | `18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_8_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0325 | `18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_9_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0326 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Constitucional_v0_4_4_PR10/Manifest_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0328 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0334 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_2.md` | Continuidad | 0.68 | R2_estado_editorial |
| UNIT-0335 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_2.md` | Continuidad | 0.68 | R2_estado_editorial |
| UNIT-0341 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_3.md` | Continuidad | 0.68 | R2_estado_editorial |
| UNIT-0342 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_3.md` | Continuidad | 0.68 | R2_estado_editorial |
| UNIT-0349 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/05_Prompt_Activacion_Proxima_Sesion_v0_4_4_SDD_PR8.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0351 | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/07_Manifest_Compendio_Cierre_Sesion_v0_4_4_SDD_PR8.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0353 | `18_DOCUMENTACION_ACTIVA/Compendios/COMPENDIUM_INDEX.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0355 | `18_DOCUMENTACION_ACTIVA/Compendios/compendium-mvp-alpha.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0496 | `18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Cierre_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0497 | `18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Interfaz_No_Rigida_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0498 | `18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Madurez_Documental_v0_5_0_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0499 | `18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0512 | `18_DOCUMENTACION_ACTIVA/Escenarios/Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0529 | `18_DOCUMENTACION_ACTIVA/Manifests/Manifest_Paquete_v0_4_2.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0552 | `18_DOCUMENTACION_ACTIVA/Prompts/Prompt_Activacion_Nueva_Sesion_v0_5_0_Planificacion_Profunda_AI_StoryLab.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0560 | `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-context-general.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0561 | `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-debugging.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0562 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/PROMPT_MASTER_MVP.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0564 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-final-submission.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0565 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-group-dashboard.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0566 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-localstorage.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0567 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-architecture.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0568 | `18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-privacy.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0603 | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/Registro_Apertura_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0604 | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/Registro_WIKI_SYNC_PreCierre_AI_StoryLab_1_v0_4_3.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0605 | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0606 | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_v0_4_2.md` | Auxiliar | 0.5 | R0_no_evaluado |
| UNIT-0617 | `19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists/Release_Criteria_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0632 | `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/Evolucion_App_v0_4_0.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0650 | `21_WIKI_DOCUMENTACION_HUMANA/Desarrollo_Aplicacion/Desarrollo_Primera_Aplicacion_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0663 | `21_WIKI_DOCUMENTACION_HUMANA/Historia_Proyecto/Historia_Proceso_Creacion_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0665 | `21_WIKI_DOCUMENTACION_HUMANA/Indice_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0667 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Consentimiento_Informado_y_Situado.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0668 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Experiencia_Creativa_No_Rigida.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0669 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Local_First.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0670 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/POO_Conceptual.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0671 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Que_No_Hace_v0_4_4.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0673 | `21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Threat_Models.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0766 | `CHANGELOG.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0767 | `Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0768 | `MANIFEST_Cierre_Documental_SDD_v0_4_4_AI_StoryLab_1.md` | Documento | 0.42 | R1_clasificacion_incierta |
| UNIT-0777 | `inventario_documentos_heredados_v0_4_0.txt` | Documento | 0.42 | R1_clasificacion_incierta |

> La tabla muestra las primeras 100 unidades según el orden canónico del inventario. El conjunto completo permanece en `Inventario_Estructural_Clasificado_AI_StoryLab_1.csv`.

## 5. Preguntas de revisión

Para cada unidad señalada:

1. ¿Qué documento o decisión establece su autoridad?
2. ¿Está vigente, sustituida, cerrada o archivada?
3. ¿Su ubicación expresa su función real?
4. ¿Existe una versión canónica independiente?
5. ¿La marca editorial pertenece al nombre histórico o sigue describiendo su estado?
6. ¿Debe conservarse por valor histórico aunque no sea operativa?
7. ¿Qué enlaces o dependencias se afectarían si cambiara de ruta?

## 6. Regla de seguridad

Ninguna incertidumbre autoriza mover, renombrar, eliminar o fusionar archivos. Cada resolución deberá registrar evidencia y decisión humana.

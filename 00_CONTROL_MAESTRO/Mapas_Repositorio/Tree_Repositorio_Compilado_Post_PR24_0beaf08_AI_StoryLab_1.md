# Tree del Repositorio Compilado · AI StoryLab 1

**Tipo de documento:** registro histórico estructural y línea base preauditoría  
**Repositorio:** `ricardojuanmorales/ai-storylab-1`  
**Rama de referencia:** `main`  
**Commit de referencia:** `0beaf08` · cierre formal del gate v0.7.0 mediante PR #24  
**Fecha de compilación:** 2026-07-10  
**Estado del worktree capturado:** limpio  
**Naturaleza:** descriptiva, no prescriptiva  

---

## 1. Propósito

Este documento conserva una fotografía reproducible de la estructura del repositorio inmediatamente después del cierre formal de `v0.7.0`. Su función es servir como línea base para la futura auditoría estructural integral, sin anticipar movimientos, reclasificaciones, eliminaciones ni decisiones de arquitectura documental.

La fuente canónica es el árbol Git del commit indicado. Los elementos ignorados se documentan por separado y no forman parte del árbol versionado.

## 2. Método de captura

```bash
git ls-tree -r --name-only HEAD | LC_ALL=C sort
git ls-tree -r --name-only HEAD | awk '{ ... derivación de cartapacios ... }' | LC_ALL=C sort -u
git status --short --untracked-files=all
git ls-files --others --ignored --exclude-standard | LC_ALL=C sort
```

El árbol visual fue reconstruido de forma determinista a partir del inventario versionado porque la captura no incluyó `Tree_Repositorio_Visual.txt`.

## 3. Resumen cuantitativo

- Archivos versionados: **820**
- Cartapacios versionados derivados: **349**
- Elementos ignorados detectados: **3305**
- Cambios locales capturados: **ninguno**

### 3.1 Archivos por cartapacio raíz

```text
   334  18_DOCUMENTACION_ACTIVA
    92  99_ARCHIVO_HISTORICO
    81  05_COMPETENCIAS_Y_PERFILES
    53  00_CONTROL_MAESTRO
    35  src
    32  21_WIKI_DOCUMENTACION_HUMANA
    23  20_MANTENIMIENTO_Y_EVOLUCION
    16  15_EVALUACION_CALIDAD_Y_AUDITORIA
    13  16_SEGURIDAD_PRIVACIDAD_Y_DATOS
    12  19_IMPLEMENTACION_Y_DESPLIEGUE
    11  07_PLANTILLAS_Y_MODELOS
    11  .specify
     9  10_REPOSITORIOS_Y_FLUJO_TECNICO
     9  04_GOBERNANZA_ETICA_Y_RIESGOS
     7  09_IA_AGENTES_Y_COPILOTOS
     7  08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS
     7  02_ARQUITECTURA_CONCEPTUAL
     7  01_FUNDAMENTO_FILOSOFICO
     6  14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO
     6  13_INVESTIGACION_Y_EVIDENCIA
     6  12_DISENO_INSTRUCCIONAL_UNIVERSAL
     6  11_MULTIMODALIDAD_Y_PUBLICACION
     6  03_METODOLOGIA_Y_FLUJO_DE_TRABAJO
     5  17_INTERNACIONALIZACION_LOCALIZACION
     5  06_PASTILLAS_MODULARES
     3  public
     1  vite.config.js
     1  scripts
     1  prompts
     1  package.json
     1  package-lock.json
     1  inventario_documentos_heredados_v0_4_0.txt
     1  index.html
     1  README_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
     1  README_PR11_Integracion_Aprobacion_SPEC_OP_008_AI_StoryLab_1_v0_4_5.md
     1  README_PR11_Integracion_Aprobacion_SPEC_OP_007_AI_StoryLab_1_v0_4_5.md
     1  README_PR11_Integracion_Aprobacion_SPEC_OP_006_AI_StoryLab_1_v0_4_5.md
     1  README_PR11_Integracion_Aprobacion_Gate_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
     1  README_Original.md
     1  README.md
     1  MANIFEST_Cierre_Documental_SDD_v0_4_4_AI_StoryLab_1.md
     1  Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
     1  CHANGELOG.md
     1  .gitignore
```

### 3.2 Distribución interna de `18_DOCUMENTACION_ACTIVA`

```text
   140  Continuidad
    36  Bitacoras
    27  Cierres_Sesion
    18  Registro_Decisiones
    11  Gates
     9  Prompts_Activacion
     8  Changelog
     7  Transferencias
     7  Prompts_de_Sesion
     7  Deuda
     6  Matrices
     5  WIKI_SYNC
     5  Primers_Continuidad
     5  Planes
     5  Mapas
     5  Decisiones
     5  Cierres
     4  Protocolos
     4  Criterios
     3  Compendios
     3  Changelogs
     2  Guias
     1  Segundo_Cerebro
     1  Riesgos
     1  Reportes_Evaluacion
     1  README.md
     1  Prompts
     1  Manifiestos_Sesion
     1  Manifests
     1  Informes_Validacion
     1  Historico_Proceso
     1  Glosarios
     1  Escenarios
     1  Actas_Cierre_Continuidad
```

### 3.3 Elementos ignorados por raíz principal

```text
  3299  node_modules
     6  dist
```

> Nota: los elementos ignorados no se incorporan al árbol canónico ni se interpretan como deuda por el mero hecho de existir.

## 4. Árbol visual canónico

```text
.
├── .specify/
│   ├── memory/
│   │   ├── README.md
│   │   └── constitution_v0_4_0.md
│   ├── specs/
│   │   ├── Facilitator_Dashboard/
│   │   │   └── README.md
│   │   ├── Mission_Engine/
│   │   │   └── README.md
│   │   ├── Platform_Foundation/
│   │   │   ├── README.md
│   │   │   └── trace_v0_4_0.md
│   │   ├── Portfolio_Export/
│   │   │   └── README.md
│   │   ├── Profile_Progress_JSON/
│   │   │   └── README.md
│   │   ├── Security_Privacy_Baseline/
│   │   │   └── README.md
│   │   └── README.md
│   └── README.md
├── 00_CONTROL_MAESTRO/
│   ├── Control_Versiones/
│   │   ├── Versiones_Activas/
│   │   │   └── README.md
│   │   ├── Versiones_Cerradas/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Convenciones_Nombres/
│   │   ├── Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Estado_Gobernanza_Documental/
│   │   ├── Estado_Gobernanza_Documental_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Indices_Maestros/
│   │   └── README.md
│   ├── Manifiestos/
│   │   ├── Kit_Inicial_Repositorio_AI_StoryLab_v0_4_0.md
│   │   ├── Manifest_Kit_N3_Foundation_Structure_v0_4_0.md
│   │   └── README.md
│   ├── Mapas_Repositorio/
│   │   ├── Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4.md
│   │   ├── README.md
│   │   └── Tree_Objetivo_N3_Foundation_v0_4_0.md
│   ├── Protocolos_Cierre_Sesion/
│   │   ├── Protocolo_Documental_Sesion_AI_StoryLab_1_v0_4_4.md
│   │   └── README.md
│   ├── Protocolos_Documentales/
│   │   ├── Protocolo_Incorporacion_Terminos_Glosario_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Reglas_Colocacion_Documental/
│   │   ├── Estandar_Estructura_Manejo_Archivos_v0_4_0.md
│   │   ├── Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md
│   │   ├── README.md
│   │   └── Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
│   ├── Spec_Driven_Development/
│   │   ├── Gates/
│   │   │   └── Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Gobernanza/
│   │   │   ├── Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
│   │   │   ├── Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
│   │   │   ├── Estado_Gobernanza_SDD_v0_4_4_Cierre_Fundacional.md
│   │   │   ├── Indice_Documentos_Rectores_SDD_v0_4_4.md
│   │   │   ├── Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Matriz_Sincronizacion_Derivados_SDD_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Plan_Revision_Unitaria_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Protocolo_Trabajo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Revision_Unitaria_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
│   │   │   └── Tablero_Maestro_Dependencias_Specs_Gates_Versiones_AI_StoryLab_1_v0_4_5.md
│   │   ├── Guias/
│   │   │   └── Guia_Experiencia_Creativa_No_Rigida_SDD_AI_StoryLab_1_v0_4_4.md
│   │   ├── Matrices/
│   │   │   ├── Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md
│   │   │   └── Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md
│   │   ├── Modelos_Conceptuales/
│   │   │   └── Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
│   │   ├── Politicas/
│   │   │   └── Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md
│   │   ├── Specs_Operativas/
│   │   │   ├── Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
│   │   │   ├── Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
│   │   │   ├── Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
│   │   │   └── Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
│   │   ├── Threat_Models/
│   │   │   └── Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md
│   │   └── Constitucion_SDD_AI_StoryLab_1_v0_4_4.md
│   ├── Tablas_Ubicacion_Documental/
│   │   ├── README.md
│   │   ├── Tabla_Migracion_Documentos_Heredados_v0_4_0.md
│   │   ├── Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
│   │   └── Tabla_Ubicacion_Documental_AI_StoryLab_1_v0_4_4.md
│   └── README.md
├── 01_FUNDAMENTO_FILOSOFICO/
│   ├── Autonomia_Aprendizaje/
│   │   └── README.md
│   ├── Etica_Creativa/
│   │   └── README.md
│   ├── Principios/
│   │   └── README.md
│   ├── Relacion_Humano_Maquina_IA/
│   │   └── README.md
│   ├── Fundamento_Filosofico_AI_StoryLab_1_v0_4_2.md
│   ├── Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
│   └── README.md
├── 02_ARQUITECTURA_CONCEPTUAL/
│   ├── Mapas_Relacionales/
│   │   └── README.md
│   ├── Modelo_Datos/
│   │   └── README.md
│   ├── Modelo_Hibrido_Institucional/
│   │   └── README.md
│   ├── Modelo_Local_First/
│   │   └── README.md
│   ├── Modelo_Pedagogico/
│   │   └── README.md
│   ├── Modelo_Sistemico/
│   │   └── README.md
│   └── README.md
├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
│   ├── Flujo_Humano_Maquina_IA/
│   │   └── README.md
│   ├── Gates_Operacion/
│   │   └── README.md
│   ├── Rituales_Revision/
│   │   └── README.md
│   ├── Spec_Driven_Development/
│   │   └── README.md
│   ├── Transferencia_Simetrica/
│   │   └── README.md
│   └── README.md
├── 04_GOBERNANZA_ETICA_Y_RIESGOS/
│   ├── Derechos_Autoria_Licencias/
│   │   └── README.md
│   ├── Excepciones/
│   │   └── README.md
│   ├── Gobernanza_Proyecto/
│   │   ├── Governance_v0_4_0.md
│   │   └── README.md
│   ├── Registro_Decisiones/
│   │   └── README.md
│   ├── Revision_Humana/
│   │   └── README.md
│   ├── Riesgos/
│   │   ├── README.md
│   │   └── Risk_Register_v0_4_0.md
│   └── README.md
├── 05_COMPETENCIAS_Y_PERFILES/
│   ├── Artista_Transdisciplinario/
│   │   ├── Perfil_Operativo/
│   │   │   ├── Alcance_Operativo/
│   │   │   │   └── README.md
│   │   │   ├── Bases_Conocimiento/
│   │   │   │   └── README.md
│   │   │   ├── Competencias/
│   │   │   │   └── README.md
│   │   │   ├── Evidencias/
│   │   │   │   └── README.md
│   │   │   ├── Experiencias_Mediaciones/
│   │   │   │   └── README.md
│   │   │   ├── Gobernanza_Perfil/
│   │   │   │   └── README.md
│   │   │   ├── Invocables/
│   │   │   │   └── README.md
│   │   │   ├── Produccion_Creativa/
│   │   │   │   └── README.md
│   │   │   ├── Transferencia_Simetrica/
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── Caleidoscopio/
│   │   ├── Lentes_C4_C5/
│   │   │   └── README.md
│   │   ├── Marco_Operativo/
│   │   │   └── README.md
│   │   ├── Tensiones_Recombinaciones/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Conocimiento_Comun/
│   │   ├── Dimensiones_Operacionales/
│   │   │   ├── Dimension_Agencia_Humana_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Colaboracion_Transdisciplinaria_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Conocimiento_Situado_Contextual_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Diseno_Universal_Accesibilidad_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Etica_Aplicada_Responsabilidad_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Evaluacion_Formativa_Criterio_Humano_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Dimension_Reflexion_Metacognitiva_Portafolio_AI_StoryLab_1_v0_4_3.md
│   │   │   └── README.md
│   │   ├── Glosarios/
│   │   │   ├── Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   │   └── README.md
│   │   ├── Guias_Uso/
│   │   │   ├── Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
│   │   │   └── README.md
│   │   ├── Matriz/
│   │   │   ├── Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
│   │   │   ├── Matriz_Indice_Dimensiones_Operacionales_AI_StoryLab_1_v0_4_3.md
│   │   │   └── README.md
│   │   ├── Referencias/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Investigador_Transdisciplinario/
│   │   ├── Perfil_Operativo/
│   │   │   ├── Alcance_Operativo/
│   │   │   │   └── README.md
│   │   │   ├── Bases_Conocimiento/
│   │   │   │   └── README.md
│   │   │   ├── Competencias/
│   │   │   │   └── README.md
│   │   │   ├── Evidencias/
│   │   │   │   └── README.md
│   │   │   ├── Gobernanza_Perfil/
│   │   │   │   └── README.md
│   │   │   ├── Invocables/
│   │   │   │   └── README.md
│   │   │   ├── Metodologias/
│   │   │   │   └── README.md
│   │   │   ├── Produccion_Academica/
│   │   │   │   └── README.md
│   │   │   ├── Transferencia_Simetrica/
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── Marco_Competencias_Taxonomias/
│   │   └── Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_2.md
│   ├── Matrices_Competencias/
│   │   └── README.md
│   ├── Matriz/
│   │   ├── Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Competencias_por_Dimension_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Competencias_por_Subjetividad_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Evidencias_por_Competencia_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Relacion_Competencias_Rubricas_Portafolios_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Programador_Humanista/
│   │   ├── Base_Conocimiento_SDD/
│   │   │   ├── Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Glosario_Minimo_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_Consentimiento_Informado_y_Situado_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_Experiencia_Creativa_No_Rigida_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_Local_First_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_POO_Conceptual_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_Threat_Model_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Manifest_Base_Conocimiento_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   ├── Mapa_Relaciones_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
│   │   │   └── README.md
│   │   ├── Perfil_Operativo/
│   │   │   ├── Alcance_Operativo/
│   │   │   │   └── README.md
│   │   │   ├── Aplicaciones_Educativas/
│   │   │   │   └── README.md
│   │   │   ├── Arquitectura_Humano_Maquina_IA/
│   │   │   │   └── README.md
│   │   │   ├── Artefactos/
│   │   │   │   └── README.md
│   │   │   ├── Bases_Conocimiento/
│   │   │   │   └── README.md
│   │   │   ├── Competencias/
│   │   │   │   └── README.md
│   │   │   ├── Gobernanza_Perfil/
│   │   │   │   └── README.md
│   │   │   ├── Invocables/
│   │   │   │   └── README.md
│   │   │   ├── Metricas/
│   │   │   │   └── README.md
│   │   │   ├── Transferencia_Simetrica/
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── Taxonomias/
│   │   └── README.md
│   └── README.md
├── 06_PASTILLAS_MODULARES/
│   ├── Actividades_Cortas/
│   │   └── README.md
│   ├── Fragmentos_Formativos/
│   │   └── README.md
│   ├── Microlecciones/
│   │   └── README.md
│   ├── Recursos_Reutilizables/
│   │   └── README.md
│   └── README.md
├── 07_PLANTILLAS_Y_MODELOS/
│   ├── Documentacion/
│   │   ├── Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md
│   │   ├── Plantilla_Ficha_Dimension_Operacional_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Modelos_Datos/
│   │   └── README.md
│   ├── Modelos_Gobernanza/
│   │   └── README.md
│   ├── Modelos_Prompts/
│   │   └── README.md
│   ├── Plantillas_Documentales/
│   │   ├── Plantilla_README_Cartapacio_AI_StoryLab_1_v0_4_4.md
│   │   └── README.md
│   ├── Plantillas_Evaluacion/
│   │   └── README.md
│   ├── Spec_Driven_Development/
│   │   └── Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
│   └── README.md
├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
│   ├── Secuencias_Didacticas/
│   │   └── README.md
│   ├── Taller_AI_StoryLab/
│   │   ├── Evidencias/
│   │   │   └── README.md
│   │   ├── Misiones/
│   │   │   └── README.md
│   │   ├── Rutas_Aprendizaje/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Trayectorias_Nivel/
│   │   └── README.md
│   └── README.md
├── 09_IA_AGENTES_Y_COPILOTOS/
│   ├── Agentes_Planificados/
│   │   └── README.md
│   ├── Copilotos_Local_First/
│   │   └── README.md
│   ├── Evaluacion_IA/
│   │   └── README.md
│   ├── Politicas_Uso_IA/
│   │   ├── AI_Usage_Policy_v0_4_0.md
│   │   └── README.md
│   ├── Prompts_Seguros/
│   │   └── README.md
│   └── README.md
├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/
│   ├── Build_Test/
│   │   ├── README.md
│   │   ├── generate_ai_storylab_n3_foundation_structure_v0_4_0.sh
│   │   └── migrar_documentos_heredados_v0_4_0.sh
│   ├── Convenciones_Commits/
│   │   └── README.md
│   ├── Dependencias/
│   │   └── README.md
│   ├── Estructura_App/
│   │   └── README.md
│   ├── Git_GitHub/
│   │   ├── Contributing_v0_4_0.md
│   │   └── README.md
│   └── README.md
├── 11_MULTIMODALIDAD_Y_PUBLICACION/
│   ├── Audio/
│   │   └── README.md
│   ├── Imagenes/
│   │   └── README.md
│   ├── Portafolios/
│   │   └── README.md
│   ├── Publicacion_Local/
│   │   └── README.md
│   ├── Video/
│   │   └── README.md
│   └── README.md
├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/
│   ├── Accesibilidad/
│   │   └── README.md
│   ├── Adaptaciones/
│   │   └── README.md
│   ├── DUA/
│   │   └── README.md
│   ├── Experiencia_Estudiante/
│   │   └── README.md
│   ├── Rubricas/
│   │   └── README.md
│   └── README.md
├── 13_INVESTIGACION_Y_EVIDENCIA/
│   ├── Evidence_Ledger/
│   │   └── README.md
│   ├── Evidencia_Aprendizaje/
│   │   └── README.md
│   ├── Fuentes/
│   │   └── README.md
│   ├── Integracion_IT/
│   │   └── README.md
│   ├── Metodologias/
│   │   └── README.md
│   └── README.md
├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
│   ├── Adopcion_Controlada/
│   │   └── README.md
│   ├── Comunicaciones/
│   │   └── README.md
│   ├── Comunidad_Practica/
│   │   └── README.md
│   ├── Escalamiento_Institucional/
│   │   └── README.md
│   ├── Transferencia_Facilitadores/
│   │   └── README.md
│   └── README.md
├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/
│   ├── Evaluacion_Accesibilidad/
│   │   └── README.md
│   ├── Evaluacion_DevOps/
│   │   └── README.md
│   ├── Evaluacion_IA_Agentes/
│   │   └── README.md
│   ├── Evaluacion_Seguridad/
│   │   └── README.md
│   ├── Evaluacion_Sistemica/
│   │   └── README.md
│   ├── Evidencias_Validacion/
│   │   └── README.md
│   ├── Gates_Checks_Evaluacion/
│   │   ├── Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   ├── Gate_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
│   │   ├── Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4.md
│   │   ├── README.md
│   │   └── Review_Checklist_v0_4_0.md
│   ├── Metricas_Internas/
│   │   └── README.md
│   ├── Reportes_Auditoria/
│   │   ├── Auditoria_Estructural_Cartapacios_AI_StoryLab_1_v0_4_4.md
│   │   └── README.md
│   ├── Rubricas_N3_N4/
│   │   └── README.md
│   └── README.md
├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
│   ├── Checklists_Seguridad/
│   │   └── README.md
│   ├── Cumplimiento_Normativo/
│   │   └── README.md
│   ├── Evaluacion_Riesgos_Tecnicos/
│   │   └── README.md
│   ├── Modelos_Amenazas/
│   │   ├── README.md
│   │   └── Threat_Model_v0_4_0.md
│   ├── Politicas_Datos/
│   │   └── README.md
│   ├── Privacidad/
│   │   ├── Politica_Privacidad_Local_First_v0_4_0.md
│   │   ├── Privacy_Local_First_v0_4_0.md
│   │   └── README.md
│   ├── Requisitos_Seguridad/
│   │   ├── README.md
│   │   └── Security_Requirements_v0_4_0.md
│   ├── Seguridad_IA_Agentes/
│   │   └── README.md
│   └── README.md
├── 17_INTERNACIONALIZACION_LOCALIZACION/
│   ├── Glosarios/
│   │   └── README.md
│   ├── Localizacion_Cultural/
│   │   └── README.md
│   ├── Traducciones/
│   │   └── README.md
│   ├── Variantes_Linguisticas/
│   │   └── README.md
│   └── README.md
├── 18_DOCUMENTACION_ACTIVA/
│   ├── Actas_Cierre_Continuidad/
│   │   └── Acta_Cierre_Continuidad_v0_4_2.md
│   ├── Bitacoras/
│   │   ├── Actualizacion_Bitacora_Capitan_v0_4_9_Bloque_3_AI_StoryLab.md
│   │   ├── Actualizacion_Bitacora_Capitan_v0_4_9_Bloque_4_AI_StoryLab.md
│   │   ├── Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_2_AI_StoryLab.md
│   │   ├── Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_3_v2_AI_StoryLab.md
│   │   ├── Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_4_AI_StoryLab.md
│   │   ├── Actualizacion_Bitacora_Transferencia_Simetrica_Apertura_v0_4_4.md
│   │   ├── Actualizacion_Bitacora_Transferencia_Simetrica_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   ├── Bitacora_Capitan_Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
│   │   ├── Bitacora_Capitan_v0_4_8_AI_StoryLab.md
│   │   ├── Bitacora_Capitan_v0_4_9_AI_StoryLab.md
│   │   ├── Bitacora_Capitan_v0_5_0_AI_StoryLab.md
│   │   ├── Bitacora_Gobernanza_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   ├── Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
│   │   ├── Bitacora_Sesion_Apertura_v0_4_4_SDD_AI_StoryLab_1.md
│   │   ├── Bitacora_Sesion_PR10_Cierre_Constitucional_AI_StoryLab_1_v0_4_4.md
│   │   ├── Bitacora_Sesion_PR9_Pago_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
│   │   ├── Bitacora_Sesion_SDD_v0_4_4_Cierre_Fundacional.md
│   │   ├── Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
│   │   ├── Bitacora_Transferencia_Simetrica_PR10_Cierre_Constitucional_AI_StoryLab_1_v0_4_4.md
│   │   ├── Bitacora_Transferencia_Simetrica_PR9_Pago_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
│   │   ├── Bitacora_Transferencia_Simetrica_SDD_v0_4_4_Cierre_Fundacional.md
│   │   ├── Bitacora_Transferencia_Simetrica_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   ├── Bitacora_Transferencia_Simetrica_v0_4_0.md
│   │   ├── Cierre_Bitacora_Capitan_v0_4_7_AI_StoryLab.md
│   │   ├── Cierre_Bitacora_Capitan_v0_4_8_AI_StoryLab.md
│   │   ├── Cierre_Bitacora_Capitan_v0_4_9_AI_StoryLab.md
│   │   ├── Indice_Actualizaciones_Gobernanza_Bitacoras_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Continuidad_Bloque_Competencial_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Continuidad_Gobernanza_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   ├── Matriz_Continuidad_Ronda_Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
│   │   ├── README.md
│   │   ├── SESSION_LOG_INDEX.md
│   │   ├── Transferencia_Simetrica_PR12_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── session-0001.md
│   │   ├── session-0002.md
│   │   └── session-0003.md
│   ├── Changelog/
│   │   ├── Changelog_Completo_v0_4_0.md
│   │   ├── Changelog_PR10_Cierre_Constitucional_SDD_v0_4_4.md
│   │   ├── Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   ├── Changelog_PR12_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Changelog_PR17_Activacion_Correccion_Ruta_v0_5_0_AI_StoryLab.md
│   │   ├── Changelog_PR9_Pago_Deuda_Estructural_v0_4_4.md
│   │   ├── Changelog_v0_4_2.md
│   │   └── README.md
│   ├── Changelogs/
│   │   ├── Changelog_PR14_v0_4_8_AI_StoryLab.md
│   │   ├── Changelog_PR15_v0_4_9_AI_StoryLab.md
│   │   └── Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
│   ├── Cierres/
│   │   ├── Cierre_Controlado_PR17_v0_5_0_AI_StoryLab.md
│   │   ├── Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
│   │   ├── Cierre_Sesion_v0_4_7_AI_StoryLab.md
│   │   ├── Cierre_Sesion_v0_4_8_AI_StoryLab.md
│   │   └── Cierre_Sesion_v0_4_9_AI_StoryLab.md
│   ├── Cierres_Sesion/
│   │   ├── Cierre_Constitucional_v0_4_4_PR10/
│   │   │   └── Manifest_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
│   │   ├── Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/
│   │   │   ├── 00_README_Compendio_Cierre_Sesion_v0_4_2.md
│   │   │   ├── 01_Actualizacion_Bitacora_Transferencia_Simetrica_v0_4_2.md
│   │   │   ├── 02_Compendio_Estado_Situacion_Proyecto_v0_4_2.md
│   │   │   ├── 03_Primer_Continuidad_Proxima_Sesion_v0_4_2_a_v0_4_3.md
│   │   │   ├── 04_Prompt_Activacion_Proxima_Sesion_v0_4_3.md
│   │   │   ├── 05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_2.md
│   │   │   └── 06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_2.md
│   │   ├── Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/
│   │   │   ├── 00_README_Compendio_Cierre_Sesion_v0_4_3.md
│   │   │   ├── 01_Actualizacion_Bitacora_Transferencia_Simetrica_v0_4_3.md
│   │   │   ├── 02_Compendio_Estado_Situacion_Proyecto_v0_4_3.md
│   │   │   ├── 03_Primer_Continuidad_Proxima_Sesion_v0_4_3_a_v0_4_4.md
│   │   │   ├── 04_Prompt_Activacion_Proxima_Sesion_v0_4_4.md
│   │   │   ├── 05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_3.md
│   │   │   ├── 06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_3.md
│   │   │   └── 07_Matriz_Continuidad_Cierre_Sesion_v0_4_3.md
│   │   ├── Cierre_Sesion_v0_4_4_SDD_PR8/
│   │   │   ├── 00_README_Cierre_Sesion_v0_4_4_SDD_PR8.md
│   │   │   ├── 01_Bitacora_Sesion_Cierre_v0_4_4_SDD_PR8.md
│   │   │   ├── 02_Actualizacion_Bitacora_Transferencia_Simetrica_Cierre_v0_4_4.md
│   │   │   ├── 03_Registro_Deuda_Cierre_v0_4_4_SDD_PR8.md
│   │   │   ├── 04_Plan_Accion_Proxima_Sesion_v0_4_4_SDD_PR8.md
│   │   │   ├── 05_Prompt_Activacion_Proxima_Sesion_v0_4_4_SDD_PR8.md
│   │   │   ├── 06_Matriz_Continuidad_Cierre_Sesion_v0_4_4_SDD_PR8.md
│   │   │   └── 07_Manifest_Compendio_Cierre_Sesion_v0_4_4_SDD_PR8.md
│   │   ├── Cierre_Sesion_PR12_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
│   │   └── README.md
│   ├── Compendios/
│   │   ├── COMPENDIUM_INDEX.md
│   │   ├── README.md
│   │   └── compendium-mvp-alpha.md
│   ├── Continuidad/
│   │   ├── v0_4_7/
│   │   │   ├── Cierre_Sesion_Post_Merge_PR12_Arquitectura_Conceptual_AI_StoryLab_v2.md
│   │   │   ├── Continuidad_Ruta_Desarrollo_v0_4_7_AI_StoryLab_v2.md
│   │   │   ├── Indice_Alineacion_v0_4_7_a_v1_0_0_AI_StoryLab.md
│   │   │   ├── Prompt_Activacion_v0_4_7_AI_StoryLab_v2.md
│   │   │   └── README_Cierre_Sesion_Continuidad_v0_4_7_v2.md
│   │   ├── v0_4_8/
│   │   │   ├── Inicio_Sesion/
│   │   │   │   ├── Bitacora_Capitan_Post_PR13_AI_StoryLab.md
│   │   │   │   ├── Cierre_Sesion_Post_Merge_PR13_AI_StoryLab.md
│   │   │   │   ├── Continuidad_Ruta_Post_PR13_Hacia_v1_0_0_AI_StoryLab.md
│   │   │   │   ├── Decision_Aceptacion_Ruta_Futura_AI_StoryLab.md
│   │   │   │   ├── Indice_Compendio_Cierre_Continuidad_Post_PR13_AI_StoryLab.md
│   │   │   │   ├── Mapa_Ruta_Simplificado_Hacia_v1_0_0_AI_StoryLab.md
│   │   │   │   ├── Prompt_Activacion_v0_4_8_AI_StoryLab.md
│   │   │   │   └── README_Compendio_Cierre_Continuidad_Post_PR13_AI_StoryLab.md
│   │   │   ├── Actualizacion_Navegacion_Documental_v0_4_8_AI_StoryLab.md
│   │   │   ├── Checklist_No_Cruce_Funcional_PR14_v0_4_8_AI_StoryLab.md
│   │   │   ├── Consolidacion_Documentos_Canonicos_Post_PR13_AI_StoryLab.md
│   │   │   ├── Decision_Preparacion_No_Activacion_v0_4_9_AI_StoryLab.md
│   │   │   ├── Estado_Canonico_Main_Post_PR13_AI_StoryLab.md
│   │   │   ├── Indice_Continuidad_v0_4_8_AI_StoryLab.md
│   │   │   ├── Indice_Navegacion_Documental_v0_4_8_AI_StoryLab.md
│   │   │   ├── MANIFEST_v0_4_8_Cierre_Post_Merge_AI_StoryLab.md
│   │   │   ├── Patch_README_Raiz_Estado_v0_4_8_AI_StoryLab.md
│   │   │   ├── README_Compendio_v0_4_8_Cierre_Post_Merge_AI_StoryLab.md
│   │   │   └── Revision_Deuda_Bloqueada_Post_PR13_AI_StoryLab.md
│   │   ├── v0_4_9/
│   │   │   ├── Post_Merge_PR15/
│   │   │   │   ├── Cierre_Post_Merge_PR15_v0_4_9_AI_StoryLab.md
│   │   │   │   ├── Estado_Canonico_Main_Post_PR15_AI_StoryLab.md
│   │   │   │   ├── Patch_README_Raiz_Estado_v0_4_9_Post_PR15_AI_StoryLab.md
│   │   │   │   ├── Prompt_Continuidad_Post_PR15_AI_StoryLab.md
│   │   │   │   └── README_Compendio_Post_Merge_PR15_v0_4_9_AI_StoryLab.md
│   │   │   ├── Decision_Activacion_v0_4_9_AI_StoryLab.md
│   │   │   ├── Estado_Canonico_Main_Post_PR14_AI_StoryLab.md
│   │   │   ├── Indice_Activacion_v0_4_9_AI_StoryLab.md
│   │   │   ├── MANIFEST_Activacion_v0_4_9_AI_StoryLab.md
│   │   │   ├── Prompt_Activacion_v0_4_9_AI_StoryLab.md
│   │   │   ├── README_Bloque_2_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
│   │   │   ├── README_Bloque_3_Control_Continuidad_v0_4_9_AI_StoryLab.md
│   │   │   ├── README_Bloque_4_Revision_Alcance_v0_4_9_AI_StoryLab.md
│   │   │   ├── README_Cierre_v0_4_9_AI_StoryLab.md
│   │   │   └── README_Compendio_Activacion_v0_4_9_AI_StoryLab.md
│   │   ├── v0_5_0/
│   │   │   ├── PR19/
│   │   │   │   ├── Bitacoras/
│   │   │   │   │   ├── Bitacora_Capitan_PR19_AI_StoryLab.md
│   │   │   │   │   ├── Bitacora_Sesion_PR19_AI_StoryLab.md
│   │   │   │   │   ├── Bitacora_Transferencia_Simetrica_PR19_AI_StoryLab.md
│   │   │   │   │   ├── Registro_Decisiones_PR19_AI_StoryLab.md
│   │   │   │   │   └── Registro_Deuda_Documental_PR19_AI_StoryLab.md
│   │   │   │   ├── Historico/
│   │   │   │   │   └── Consolidacion_Bitacoras_PR19_AI_StoryLab_HISTORICO.md
│   │   │   │   ├── Alcance_Preparatorio_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │   │   ├── Changelog_PR19_AI_StoryLab.md
│   │   │   │   ├── Definicion_Operativa_v1_0_0_Ecosistema_Funcional_Publicable_AI_StoryLab.md
│   │   │   │   ├── Estado_y_Dictamen_Post_PR18_PR19_v0_5_0_AI_StoryLab.md
│   │   │   │   ├── Gate_Apertura_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │   │   ├── Gate_Cierre_Real_v0_5_0_AI_StoryLab.md
│   │   │   │   ├── Kit_Inicio_Sesion_PR19_Activacion_Formal_v0_5_0_AI_StoryLab.md
│   │   │   │   ├── Matriz_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md
│   │   │   │   ├── Plan_Maestro_v0_5_a_v1_0_AI_StoryLab.md
│   │   │   │   ├── README_Paquete_Bitacoras_PR19_AI_StoryLab.md
│   │   │   │   ├── Riesgos_Dependencias_Deuda_PR19_AI_StoryLab.md
│   │   │   │   └── Transferencia_Final_PR19_AI_StoryLab.md
│   │   │   ├── Post_Merge_PR17/
│   │   │   │   └── README_Compendio_Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
│   │   │   ├── Estado_Canonico_Main_Post_PR16_AI_StoryLab.md
│   │   │   ├── Indice_Activacion_v0_5_0_AI_StoryLab.md
│   │   │   ├── MANIFEST_Activacion_v0_5_0_AI_StoryLab.md
│   │   │   ├── Prompt_Activacion_v0_5_0_AI_StoryLab.md
│   │   │   ├── Prompt_Continuidad_Conversacion_Nueva_v0_5_0_AI_StoryLab.md
│   │   │   ├── README_Bloque_2_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
│   │   │   ├── README_Bloque_3_Consolidacion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md
│   │   │   ├── README_Bloque_4_Cierre_Controlado_PR17_v0_5_0_AI_StoryLab.md
│   │   │   └── README_Compendio_Activacion_v0_5_0_AI_StoryLab.md
│   │   ├── v0_6_0/
│   │   │   ├── Auditoria_Integridad_Post_Cierre/
│   │   │   │   ├── Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md
│   │   │   │   ├── Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md
│   │   │   │   ├── Bitacora_Sesion_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md
│   │   │   │   ├── Bitacora_Transferencia_Simetrica_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md
│   │   │   │   ├── Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
│   │   │   │   ├── Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
│   │   │   │   ├── Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
│   │   │   │   ├── Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
│   │   │   │   ├── Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab_PREPARACION_POST_PR21.md
│   │   │   │   └── Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md
│   │   │   └── PR_NUEVO/
│   │   │       ├── Acta_Gate_Transicion_Controlada_v0_6_v0_7_AI_StoryLab.md
│   │   │       ├── Auditoria_Cierre_Tramo_Tecnico_Documental_AI_StoryLab_v0_6.md
│   │   │       ├── Auditoria_Documental_Final_PR20_AI_StoryLab_v0_6.md
│   │   │       ├── Auditoria_Oficial_Mapa_Funcional_Preliminar_AI_StoryLab_v0_6.md
│   │   │       ├── Bitacora_Capitan_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Bitacora_Cierre_Bloque_v0_6_AI_StoryLab.md
│   │   │       ├── Bitacora_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Bitacora_Transferencia_Simetrica_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md
│   │   │       ├── Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md
│   │   │       ├── Deuda_Funcional_UX_Matriz_Transicion_AI_StoryLab_v0_6.md
│   │   │       ├── Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md
│   │   │       ├── Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md
│   │   │       ├── Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md
│   │   │       ├── Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md
│   │   │       ├── Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md
│   │   │       ├── Registro_Decisiones_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
│   │   │       ├── Registro_Deuda_Funcional_UX_v0_6_AI_StoryLab.md
│   │   │       └── Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md
│   │   ├── v0_7_0/
│   │   │   ├── Arquitectura_Tecnica_Seguridad/
│   │   │   │   ├── Arquitectura_Local_First/
│   │   │   │   │   └── Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md
│   │   │   │   ├── Arquitectura_Modular_Dominio/
│   │   │   │   │   └── Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md
│   │   │   │   ├── Auditorias_Herencia/
│   │   │   │   │   └── Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md
│   │   │   │   ├── Cierre_Sesion/
│   │   │   │   │   └── Compendio_Cierre_Sesion_Mapa_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
│   │   │   │   ├── Entrega_Portafolio_Exportabilidad/
│   │   │   │   │   └── Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md
│   │   │   │   ├── Glosario_Operativo/
│   │   │   │   │   └── Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md
│   │   │   │   ├── Gobernanza_Tecnica/
│   │   │   │   │   └── Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md
│   │   │   │   ├── Herramientas_Recursos_Externos/
│   │   │   │   │   └── Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md
│   │   │   │   ├── Mapas_Decision/
│   │   │   │   │   └── Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
│   │   │   │   ├── Modelo_Datos/
│   │   │   │   │   └── Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md
│   │   │   │   ├── Privacidad_Defecto/
│   │   │   │   │   └── Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md
│   │   │   │   ├── Prompts_IA_No_Embebida/
│   │   │   │   │   └── Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md
│   │   │   │   ├── Roles_Permisos/
│   │   │   │   │   └── Modelo_Roles_Permisos_v0_7_AI_StoryLab.md
│   │   │   │   ├── Seguridad_Diseno/
│   │   │   │   │   └── Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md
│   │   │   │   ├── Trazabilidad_Formativa/
│   │   │   │   │   └── Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md
│   │   │   │   └── Vista_Facilitador/
│   │   │   │       └── Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
│   │   │   ├── Gate_Cierre/
│   │   │   │   └── Acta_Cierre_Formal_Gate_v0_7_0_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
│   │   │   ├── POST_MERGE_PR22/
│   │   │   │   └── Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/
│   │   │   │       ├── Bitacora_Transferencia_Post_Merge_PR22_v0_7_0.md
│   │   │   │       ├── Instrucciones_Integracion_Kit_Continuidad_Post_PR22.md
│   │   │   │       ├── Kit_Inicio_Sesion_v0_7_0_Post_PR22.md
│   │   │   │       ├── MANIFIESTO_KIT_CONTINUIDAD_v0_7_0_Post_PR22.json
│   │   │   │       ├── Matriz_Continuidad_Estrategica_v0_7_0_a_v1_0_0.md
│   │   │   │       ├── Matriz_Decisiones_Tecnicas_Iniciales_v0_7_0.md
│   │   │   │       ├── Prompt_Arranque_Proxima_Sesion_v0_7_0.md
│   │   │   │       ├── Protocolo_Trabajo_Documento_por_Documento_v0_7_0.md
│   │   │   │       ├── README_Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22.md
│   │   │   │       ├── Registro_Deudas_Riesgos_Controles_v0_7_0.md
│   │   │   │       ├── Ruta_Primeros_Documentos_Sustantivos_v0_7_0.md
│   │   │   │       ├── SHA256SUMS.txt
│   │   │   │       └── Verificacion_Post_Merge_PR22.md
│   │   │   └── PR_NUEVO/
│   │   │       ├── Acta_Activacion_Gate_Apertura_v0_7_0_AI_StoryLab.md
│   │   │       ├── Bitacora_Capitan_Hito_Apertura_v0_7_AI_StoryLab.md
│   │   │       ├── Bitacora_Sesion_Hito_Apertura_v0_7_AI_StoryLab.md
│   │   │       ├── Bitacora_Transferencia_Simetrica_Hito_Apertura_v0_7_AI_StoryLab.md
│   │   │       ├── Control_Calidad_Auditoria_Estrategica_Preparacion_Gate_v0_7_AI_StoryLab.md
│   │   │       ├── Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
│   │   │       ├── Mapa_Estrategico_Apertura_v0_7_AI_StoryLab.md
│   │   │       ├── Registro_Continuidad_Estrategica_v0_7_a_v1_0_0_AI_StoryLab.md
│   │   │       ├── Registro_Decisiones_Hito_Apertura_v0_7_AI_StoryLab.md
│   │   │       ├── Registro_Deuda_Tecnica_Seguridad_Privacidad_v0_7_AI_StoryLab.md
│   │   │       └── Revision_Final_Pre_Merge_PR22_Gate_Apertura_v0_7_0_AI_StoryLab.md
│   │   └── Continuidad_Ruta_Desarrollo_AI_StoryLab.md
│   ├── Criterios/
│   │   ├── Criterios_Cierre_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
│   │   ├── Criterios_Interfaz_No_Rigida_AI_StoryLab.md
│   │   ├── Criterios_Madurez_Documental_v0_5_0_AI_StoryLab.md
│   │   └── Criterios_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md
│   ├── Decisiones/
│   │   ├── Decision_Activacion_v0_5_0_AI_StoryLab.md
│   │   ├── Decision_Canonizacion_Bloque_3_v2_y_Deprecacion_Bloque_3_Anterior_v0_5_0_AI_StoryLab.md
│   │   ├── Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md
│   │   ├── Decision_No_Activacion_Fase_Mayor_Automatica_v0_4_9_AI_StoryLab.md
│   │   └── Decision_No_Activacion_Fase_Mayor_Post_PR15_AI_StoryLab.md
│   ├── Deuda/
│   │   ├── Actualizacion_Registro_Deuda_Pago_Total_v0_4_7.md
│   │   ├── Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Registro_Deuda_Bloqueada_Transicion_v0_4_9_AI_StoryLab.md
│   │   ├── Registro_Deuda_Bloqueada_v0_5_0_AI_StoryLab.md
│   │   ├── Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
│   │   ├── Registro_Deuda_Gate_v0_4_8_AI_StoryLab.md
│   │   └── Revision_Deuda_Bloqueada_v0_4_9_AI_StoryLab.md
│   ├── Escenarios/
│   │   └── Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
│   ├── Gates/
│   │   ├── Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Dictamen_No_Cruce_Funcional_PR14_v0_4_8_AI_StoryLab.md
│   │   ├── Gate_Apertura_v0_4_9_AI_StoryLab.md
│   │   ├── Gate_Apertura_v0_5_0_AI_StoryLab.md
│   │   ├── Gate_Cierre_Controlado_PR17_Activacion_Correccion_v0_5_0_AI_StoryLab.md
│   │   ├── Gate_Cierre_v0_4_8_AI_StoryLab.md
│   │   ├── Gate_Control_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
│   │   ├── Gate_Correccion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md
│   │   ├── Gate_Preparacion_Fase_Mayor_v0_4_9_AI_StoryLab.md
│   │   ├── Gate_Revision_No_Cruce_Funcional_v0_4_9_AI_StoryLab.md
│   │   └── Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
│   ├── Glosarios/
│   │   └── Vocabulario_Controlado_Diseno_Experiencia_AI_StoryLab.md
│   ├── Guias/
│   │   ├── Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
│   │   └── Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
│   ├── Historico_Proceso/
│   │   └── Historico_Ronda_SDD_Fundacional_v0_4_4.md
│   ├── Informes_Validacion/
│   │   └── README.md
│   ├── Manifests/
│   │   └── Manifest_Paquete_v0_4_2.md
│   ├── Manifiestos_Sesion/
│   │   └── README.md
│   ├── Mapas/
│   │   ├── Mapa_Continuidad_v0_4_9_a_Fase_Mayor_Futura_AI_StoryLab.md
│   │   ├── Mapa_Decisiones_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
│   │   ├── Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
│   │   ├── Mapa_Riesgos_Transicion_Fase_Mayor_v0_4_9_AI_StoryLab.md
│   │   └── Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md
│   ├── Matrices/
│   │   ├── Marco_Evaluacion_Viabilidad_v1_0_0_AI_StoryLab.md
│   │   ├── Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
│   │   ├── Matriz_Criterios_Transicion_Fase_Mayor_v0_4_9_AI_StoryLab.md
│   │   ├── Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md
│   │   ├── Matriz_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
│   │   └── Matriz_Semaforo_PH_IT_AT_Transicion_v0_4_9_AI_StoryLab.md
│   ├── Planes/
│   │   ├── Agenda_Evaluacion_Comprensiva_Inicio_Nueva_Sesion_v0_5_0_AI_StoryLab.md
│   │   ├── Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
│   │   ├── Plan_Roadmap_v0_5_a_v1_0_Publicable_GitHub_Marketplace_AI_StoryLab.md
│   │   └── Plan_Trabajo_v0_4_9_Gobernanza_Transicion_AI_StoryLab.md
│   ├── Primers_Continuidad/
│   │   ├── PRIMER_CLAUDE_COWORK.md
│   │   ├── PRIMER_DATA_MODEL.md
│   │   ├── PRIMER_MVP_SCOPE.md
│   │   ├── PRIMER_PROJECT_CONTEXT.md
│   │   └── README.md
│   ├── Prompts/
│   │   └── Prompt_Activacion_Nueva_Sesion_v0_5_0_Planificacion_Profunda_AI_StoryLab.md
│   ├── Prompts_Activacion/
│   │   ├── Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Prompt_Continuidad_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   ├── Prompt_Continuidad_PR9_a_PR10_Cierre_v0_4_4.md
│   │   ├── Prompt_Continuidad_Post_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   ├── Prompt_Continuidad_Specs_Nucleo_Experiencia_Interfaz_AI_StoryLab_1_v0_4_5.md
│   │   ├── Prompt_Continuidad_v0_4_5_Specs_Operativas_AI_StoryLab_1.md
│   │   ├── README.md
│   │   ├── activate-context-general.md
│   │   └── activate-debugging.md
│   ├── Prompts_de_Sesion/
│   │   ├── PROMPT_MASTER_MVP.md
│   │   ├── README.md
│   │   ├── build-final-submission.md
│   │   ├── build-group-dashboard.md
│   │   ├── build-localstorage.md
│   │   ├── review-architecture.md
│   │   └── review-privacy.md
│   ├── Protocolos/
│   │   ├── Protocolo_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
│   │   ├── Protocolo_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
│   │   ├── Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
│   │   └── Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
│   ├── Registro_Decisiones/
│   │   ├── Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Activacion_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Alineacion_Estructural_Pre_PR9_AI_StoryLab_1_v0_4_4.md
│   │   ├── Decision_Aprobacion_Gate_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Aprobacion_Indice_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Aprobacion_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Aprobacion_SPEC_OP_007_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Aprobacion_SPEC_OP_008_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
│   │   ├── Decision_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Log_Heredado_v0_4_0.md
│   │   ├── Decision_Modelo_Evolutivo_Specs_por_Gates_AI_StoryLab_1_v0_4_5.md
│   │   ├── Decision_Secuencia_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
│   │   ├── README.md
│   │   ├── Registro_Decisiones_Completo_v0_4_0.md
│   │   ├── Registro_Decisiones_v0_4_2.md
│   │   ├── Tabla_Ubicacion_Canonica_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   └── Tabla_Ubicacion_Canonica_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
│   ├── Reportes_Evaluacion/
│   │   └── README.md
│   ├── Riesgos/
│   │   └── Matriz_Riesgos_Recomendaciones_v0_5_a_v1_0_AI_StoryLab.md
│   ├── Segundo_Cerebro/
│   │   └── README.md
│   ├── Transferencias/
│   │   ├── Transferencia_Conversacion_Nueva_v0_5_0_Ruta_v1_0_AI_StoryLab.md
│   │   ├── Transferencia_Parcial_PH_IT_AT_v0_4_9_AI_StoryLab.md
│   │   ├── Transferencia_Ruta_v1_0_0_Ecosistema_Funcional_PH_IT_AT_AI_StoryLab.md
│   │   ├── Transferencia_Simetrica_Post_PR17_v0_5_0_AI_StoryLab.md
│   │   ├── Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
│   │   ├── Transferencia_Simetrica_v0_4_8_AI_StoryLab.md
│   │   └── Transferencia_Simetrica_v0_4_9_AI_StoryLab.md
│   ├── WIKI_SYNC/
│   │   ├── README.md
│   │   ├── Registro_Apertura_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md
│   │   ├── Registro_WIKI_SYNC_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   ├── WIKI_SYNC_Completo_v0_4_0.md
│   │   └── WIKI_SYNC_v0_4_2.md
│   └── README.md
├── 19_IMPLEMENTACION_Y_DESPLIEGUE/
│   ├── Configuracion_Vite/
│   │   └── README.md
│   ├── Despliegue_Local_First/
│   │   └── README.md
│   ├── Entornos_Locales/
│   │   └── README.md
│   ├── GitHub_Pages/
│   │   └── README.md
│   ├── Perfiles_Operacion/
│   │   ├── Institutional_Hybrid_Opt_In/
│   │   │   └── README.md
│   │   ├── Local_First_Default/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Plan_Implementacion/
│   │   └── Propuesta_Implementacion_AI_StoryLab_1_hacia_v1_0_v0_4_2.md
│   ├── Release_Checklists/
│   │   ├── README.md
│   │   └── Release_Criteria_v0_4_0.md
│   ├── Roadmap/
│   │   └── Mapa_Ruta_AI_StoryLab_1_hacia_v1_0_v0_4_2.md
│   └── README.md
├── 20_MANTENIMIENTO_Y_EVOLUCION/
│   ├── Actualizaciones/
│   │   └── README.md
│   ├── Backlog_Evolutivo/
│   │   └── README.md
│   ├── Deuda_Estructural/
│   │   ├── README.md
│   │   ├── Registro_Deuda_Estructural_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   └── Registro_Deuda_Estructural_v0_4_0.md
│   ├── Deuda_Tecnica/
│   │   ├── README.md
│   │   ├── Registro_Deuda_Tecnica_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   └── Registro_Deuda_Tecnica_v0_4_0.md
│   ├── Deuda_WIKI_SYNC/
│   │   ├── README.md
│   │   ├── Registro_Deuda_WIKI_SYNC_PreCierre_AI_StoryLab_1_v0_4_3.md
│   │   └── Registro_Deuda_WIKI_SYNC_v0_4_0.md
│   ├── Incidentes_Postmortems/
│   │   └── README.md
│   ├── Mantenimiento_Aplicacion/
│   │   └── README.md
│   ├── Planes_Evolucion/
│   │   ├── Evolucion_App_v0_4_0.md
│   │   └── README.md
│   ├── Registro_Deuda/
│   │   ├── Analisis_Deuda_SDD_v0_4_4_Cierre_Fundacional.md
│   │   ├── Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
│   │   ├── Registro_Deuda_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   ├── Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
│   │   └── Registro_Deuda_v0_4_4_SDD_AI_StoryLab_1.md
│   ├── Sostenibilidad/
│   │   └── README.md
│   ├── Versionado_Releases/
│   │   └── README.md
│   └── README.md
├── 21_WIKI_DOCUMENTACION_HUMANA/
│   ├── Bitacora_Capitan/
│   │   ├── Actualizacion_Bitacora_Capitan_Cierre_Constitucional_v0_4_4.md
│   │   ├── Actualizacion_Bitacora_Capitan_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
│   │   ├── Actualizacion_Bitacora_Capitan_Modelo_Evolutivo_Specs_por_Gates_AI_StoryLab_1_v0_4_5.md
│   │   ├── Bitacora_Capitan_AI_StoryLab_1_v0_4_3.md
│   │   ├── Bitacora_Capitan_AI_StoryLab_1_v0_4_4.md
│   │   ├── Cierre_Bitacora_Capitan_PR12_Arquitectura_Conceptual_AI_StoryLab.md
│   │   ├── Cierre_Bitacora_Capitan_Specs_Nucleo_AI_StoryLab.md
│   │   └── README.md
│   ├── Desarrollo_Aplicacion/
│   │   ├── Desarrollo_Primera_Aplicacion_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Guia_Conocimiento_Comun/
│   │   └── README.md
│   ├── Guia_Desarrollador/
│   │   └── README.md
│   ├── Guia_Estudiante/
│   │   ├── Guia_Estudiante_v0_4_0.md
│   │   └── README.md
│   ├── Guia_Facilitador/
│   │   ├── Guia_Facilitador_v0_4_0.md
│   │   └── README.md
│   ├── Guia_Institucional/
│   │   └── README.md
│   ├── Guia_Lectura/
│   │   ├── Guia_Lectura_Wiki_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── Guia_Perfiles/
│   │   └── README.md
│   ├── Guia_Seguridad/
│   │   └── README.md
│   ├── Historia_Proyecto/
│   │   ├── Historia_Proceso_Creacion_AI_StoryLab_1_v0_4_3.md
│   │   └── README.md
│   ├── SDD_v0_4_4/
│   │   ├── Consentimiento_Informado_y_Situado.md
│   │   ├── Experiencia_Creativa_No_Rigida.md
│   │   ├── Local_First.md
│   │   ├── POO_Conceptual.md
│   │   ├── Que_No_Hace_v0_4_4.md
│   │   ├── README.md
│   │   └── Threat_Models.md
│   ├── Indice_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md
│   └── README.md
├── 99_ARCHIVO_HISTORICO/
│   ├── Ciclos_Completados/
│   │   └── README.md
│   ├── Exportaciones_Finales/
│   │   ├── JSON/
│   │   │   └── README.md
│   │   ├── MD/
│   │   │   └── README.md
│   │   ├── ZIP/
│   │   │   └── README.md
│   │   └── README.md
│   ├── Paquetes_Intermedios/
│   │   └── README.md
│   ├── Planes_Archivo/
│   │   └── README.md
│   ├── Releases/
│   │   └── README.md
│   ├── Sesiones_Cerradas/
│   │   └── README.md
│   ├── Versiones_Cerradas/
│   │   └── README.md
│   ├── Versiones_Proyecto/
│   │   └── v0_3_pre_N3/
│   │       ├── source/
│   │       │   ├── compendia/
│   │       │   │   ├── COMPENDIUM_INDEX.md
│   │       │   │   └── compendium-mvp-alpha.md
│   │       │   ├── docs/
│   │       │   │   ├── EVOLUCION_APP.md
│   │       │   │   ├── KIT-INICIAL-REPOSITORIO-AI-STORYLAB.md
│   │       │   │   ├── guia-estudiante.md
│   │       │   │   └── guia-facilitador.md
│   │       │   ├── governance/
│   │       │   │   ├── AI_USAGE_POLICY.md
│   │       │   │   ├── CONTRIBUTING.md
│   │       │   │   ├── DECISION_LOG.md
│   │       │   │   ├── GOVERNANCE.md
│   │       │   │   ├── PRIVACY_LOCAL_FIRST.md
│   │       │   │   ├── RELEASE_CRITERIA.md
│   │       │   │   ├── REVIEW_CHECKLIST.md
│   │       │   │   └── RISK_REGISTER.md
│   │       │   ├── logs/
│   │       │   │   ├── SESSION_LOG_INDEX.md
│   │       │   │   ├── session-0001.md
│   │       │   │   ├── session-0002.md
│   │       │   │   └── session-0003.md
│   │       │   ├── primers/
│   │       │   │   ├── PRIMER_CLAUDE_COWORK.md
│   │       │   │   ├── PRIMER_DATA_MODEL.md
│   │       │   │   ├── PRIMER_MVP_SCOPE.md
│   │       │   │   └── PRIMER_PROJECT_CONTEXT.md
│   │       │   ├── prompts/
│   │       │   │   ├── activation-prompts/
│   │       │   │   │   ├── activate-context-general.md
│   │       │   │   │   └── activate-debugging.md
│   │       │   │   ├── review-prompts/
│   │       │   │   │   ├── review-architecture.md
│   │       │   │   │   └── review-privacy.md
│   │       │   │   ├── task-prompts/
│   │       │   │   │   ├── build-final-submission.md
│   │       │   │   │   ├── build-group-dashboard.md
│   │       │   │   │   ├── build-localstorage.md
│   │       │   │   │   └── build-structure.md
│   │       │   │   └── PROMPT_MASTER_MVP.md
│   │       │   ├── public/
│   │       │   │   └── assets/
│   │       │   │       ├── avatar/
│   │       │   │       │   └── mentor.svg
│   │       │   │       ├── badges/
│   │       │   │       │   └── .gitkeep
│   │       │   │       └── icons/
│   │       │   │           └── flask.svg
│   │       │   ├── scripts/
│   │       │   │   └── verify.mjs
│   │       │   ├── src/
│   │       │   │   ├── __tests__/
│   │       │   │   │   └── validation.test.js
│   │       │   │   ├── components/
│   │       │   │   │   ├── AppHeader.jsx
│   │       │   │   │   ├── BadgeWall.jsx
│   │       │   │   │   ├── EthicalReflectionBox.jsx
│   │       │   │   │   ├── ExportImportPanel.jsx
│   │       │   │   │   ├── FinalSubmissionPanel.jsx
│   │       │   │   │   ├── GlossaryView.jsx
│   │       │   │   │   ├── GroupDashboard.jsx
│   │       │   │   │   ├── LudicActivityWidget.jsx
│   │       │   │   │   ├── MentorAvatarCard.jsx
│   │       │   │   │   ├── MissionCard.jsx
│   │       │   │   │   ├── MissionMap.jsx
│   │       │   │   │   ├── MissionView.jsx
│   │       │   │   │   ├── PortfolioPanel.jsx
│   │       │   │   │   ├── StudentDashboard.jsx
│   │       │   │   │   ├── SuggestedPromptBox.jsx
│   │       │   │   │   ├── ToolBoard.jsx
│   │       │   │   │   └── ToolCategoryView.jsx
│   │       │   │   ├── data/
│   │       │   │   │   ├── badges.json
│   │       │   │   │   ├── competencies.json
│   │       │   │   │   ├── glossary.json
│   │       │   │   │   ├── sessions.json
│   │       │   │   │   └── tools.json
│   │       │   │   ├── styles/
│   │       │   │   │   └── global.css
│   │       │   │   ├── templates/
│   │       │   │   │   ├── defaultGroupProgress.js
│   │       │   │   │   └── defaultProgress.js
│   │       │   │   ├── utils/
│   │       │   │   │   ├── exportImport.js
│   │       │   │   │   ├── finalSubmission.js
│   │       │   │   │   ├── groupImport.js
│   │       │   │   │   ├── localStorage.js
│   │       │   │   │   ├── portfolio.js
│   │       │   │   │   ├── progress.js
│   │       │   │   │   └── validation.js
│   │       │   │   ├── App.jsx
│   │       │   │   └── main.jsx
│   │       │   ├── .gitignore
│   │       │   ├── CHANGELOG.md
│   │       │   ├── README.md
│   │       │   ├── README_Original.md
│   │       │   ├── index.html
│   │       │   ├── package-lock.json
│   │       │   ├── package.json
│   │       │   └── vite.config.js
│   │       └── README.md
│   ├── Versiones_Reemplazadas/
│   │   └── README.md
│   ├── Wiki_Archivada/
│   │   └── README.md
│   └── README.md
├── prompts/
│   └── task-prompts/
│       └── build-structure.md
├── public/
│   └── assets/
│       ├── avatar/
│       │   └── mentor.svg
│       ├── badges/
│       │   └── .gitkeep
│       └── icons/
│           └── flask.svg
├── scripts/
│   └── verify.mjs
├── src/
│   ├── __tests__/
│   │   └── validation.test.js
│   ├── components/
│   │   ├── AppHeader.jsx
│   │   ├── BadgeWall.jsx
│   │   ├── EthicalReflectionBox.jsx
│   │   ├── ExportImportPanel.jsx
│   │   ├── FinalSubmissionPanel.jsx
│   │   ├── GlossaryView.jsx
│   │   ├── GroupDashboard.jsx
│   │   ├── LudicActivityWidget.jsx
│   │   ├── MentorAvatarCard.jsx
│   │   ├── MissionCard.jsx
│   │   ├── MissionMap.jsx
│   │   ├── MissionView.jsx
│   │   ├── PortfolioPanel.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── SuggestedPromptBox.jsx
│   │   ├── ToolBoard.jsx
│   │   └── ToolCategoryView.jsx
│   ├── data/
│   │   ├── badges.json
│   │   ├── competencies.json
│   │   ├── glossary.json
│   │   ├── sessions.json
│   │   └── tools.json
│   ├── styles/
│   │   └── global.css
│   ├── templates/
│   │   ├── defaultGroupProgress.js
│   │   └── defaultProgress.js
│   ├── utils/
│   │   ├── exportImport.js
│   │   ├── finalSubmission.js
│   │   ├── groupImport.js
│   │   ├── localStorage.js
│   │   ├── portfolio.js
│   │   ├── progress.js
│   │   └── validation.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── CHANGELOG.md
├── Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
├── MANIFEST_Cierre_Documental_SDD_v0_4_4_AI_StoryLab_1.md
├── README.md
├── README_Original.md
├── README_PR11_Integracion_Aprobacion_Gate_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
├── README_PR11_Integracion_Aprobacion_SPEC_OP_006_AI_StoryLab_1_v0_4_5.md
├── README_PR11_Integracion_Aprobacion_SPEC_OP_007_AI_StoryLab_1_v0_4_5.md
├── README_PR11_Integracion_Aprobacion_SPEC_OP_008_AI_StoryLab_1_v0_4_5.md
├── README_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
├── index.html
├── inventario_documentos_heredados_v0_4_0.txt
├── package-lock.json
├── package.json
└── vite.config.js
```

## 5. Inventario lineal de archivos versionados

```text
.gitignore
.specify/README.md
.specify/memory/README.md
.specify/memory/constitution_v0_4_0.md
.specify/specs/Facilitator_Dashboard/README.md
.specify/specs/Mission_Engine/README.md
.specify/specs/Platform_Foundation/README.md
.specify/specs/Platform_Foundation/trace_v0_4_0.md
.specify/specs/Portfolio_Export/README.md
.specify/specs/Profile_Progress_JSON/README.md
.specify/specs/README.md
.specify/specs/Security_Privacy_Baseline/README.md
00_CONTROL_MAESTRO/Control_Versiones/README.md
00_CONTROL_MAESTRO/Control_Versiones/Versiones_Activas/README.md
00_CONTROL_MAESTRO/Control_Versiones/Versiones_Cerradas/README.md
00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Convenciones_Nombres/README.md
00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Estado_Gobernanza_Documental_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/README.md
00_CONTROL_MAESTRO/Indices_Maestros/README.md
00_CONTROL_MAESTRO/Manifiestos/Kit_Inicial_Repositorio_AI_StoryLab_v0_4_0.md
00_CONTROL_MAESTRO/Manifiestos/Manifest_Kit_N3_Foundation_Structure_v0_4_0.md
00_CONTROL_MAESTRO/Manifiestos/README.md
00_CONTROL_MAESTRO/Mapas_Repositorio/Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Mapas_Repositorio/README.md
00_CONTROL_MAESTRO/Mapas_Repositorio/Tree_Objetivo_N3_Foundation_v0_4_0.md
00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/Protocolo_Documental_Sesion_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion/README.md
00_CONTROL_MAESTRO/Protocolos_Documentales/Protocolo_Incorporacion_Terminos_Glosario_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Protocolos_Documentales/README.md
00_CONTROL_MAESTRO/README.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/README.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Constitucion_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gates/Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Estado_Gobernanza_SDD_v0_4_4_Cierre_Fundacional.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Indice_Documentos_Rectores_SDD_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Matriz_Sincronizacion_Derivados_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Plan_Revision_Unitaria_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Protocolo_Trabajo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Revision_Unitaria_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Tablero_Maestro_Dependencias_Specs_Gates_Versiones_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Guias/Guia_Experiencia_Creativa_No_Rigida_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Politicas/Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
00_CONTROL_MAESTRO/Spec_Driven_Development/Threat_Models/Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/README.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Migracion_Documentos_Heredados_v0_4_0.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Documental_AI_StoryLab_1_v0_4_4.md
01_FUNDAMENTO_FILOSOFICO/Autonomia_Aprendizaje/README.md
01_FUNDAMENTO_FILOSOFICO/Etica_Creativa/README.md
01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_2.md
01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
01_FUNDAMENTO_FILOSOFICO/Principios/README.md
01_FUNDAMENTO_FILOSOFICO/README.md
01_FUNDAMENTO_FILOSOFICO/Relacion_Humano_Maquina_IA/README.md
02_ARQUITECTURA_CONCEPTUAL/Mapas_Relacionales/README.md
02_ARQUITECTURA_CONCEPTUAL/Modelo_Datos/README.md
02_ARQUITECTURA_CONCEPTUAL/Modelo_Hibrido_Institucional/README.md
02_ARQUITECTURA_CONCEPTUAL/Modelo_Local_First/README.md
02_ARQUITECTURA_CONCEPTUAL/Modelo_Pedagogico/README.md
02_ARQUITECTURA_CONCEPTUAL/Modelo_Sistemico/README.md
02_ARQUITECTURA_CONCEPTUAL/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Flujo_Humano_Maquina_IA/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Gates_Operacion/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Rituales_Revision/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Spec_Driven_Development/README.md
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Transferencia_Simetrica/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Derechos_Autoria_Licencias/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Excepciones/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto/Governance_v0_4_0.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Registro_Decisiones/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Revision_Humana/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos/README.md
04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos/Risk_Register_v0_4_0.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Alcance_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Competencias/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Evidencias/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Experiencias_Mediaciones/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Invocables/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Produccion_Creativa/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica/README.md
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/README.md
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Lentes_C4_C5/README.md
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Marco_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/README.md
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Tensiones_Recombinaciones/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Agencia_Humana_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Colaboracion_Transdisciplinaria_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Conocimiento_Situado_Contextual_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Diseno_Universal_Accesibilidad_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Etica_Aplicada_Responsabilidad_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Evaluacion_Formativa_Criterio_Humano_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Dimension_Reflexion_Metacognitiva_Portafolio_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Matriz_Indice_Dimensiones_Operacionales_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/README.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Alcance_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Competencias/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Evidencias/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Invocables/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Metodologias/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Produccion_Academica/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica/README.md
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/README.md
05_COMPETENCIAS_Y_PERFILES/Marco_Competencias_Taxonomias/Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_2.md
05_COMPETENCIAS_Y_PERFILES/Matrices_Competencias/README.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Marco_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Matriz_Competencias_por_Dimension_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Matriz_Competencias_por_Subjetividad_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Matriz_Evidencias_por_Competencia_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/Matriz_Relacion_Competencias_Rubricas_Portafolios_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Matriz/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Checklist_Preimplementacion_SDD_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Glosario_Minimo_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Consentimiento_Informado_y_Situado_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Experiencia_Creativa_No_Rigida_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Local_First_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_POO_Conceptual_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Threat_Model_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_Uso_Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Manifest_Base_Conocimiento_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Mapa_Relaciones_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Alcance_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Aplicaciones_Educativas/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Arquitectura_Humano_Maquina_IA/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Artefactos/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Bases_Conocimiento/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Competencias/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Gobernanza_Perfil/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Invocables/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Metricas/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Transferencia_Simetrica/README.md
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/README.md
05_COMPETENCIAS_Y_PERFILES/README.md
05_COMPETENCIAS_Y_PERFILES/Taxonomias/README.md
06_PASTILLAS_MODULARES/Actividades_Cortas/README.md
06_PASTILLAS_MODULARES/Fragmentos_Formativos/README.md
06_PASTILLAS_MODULARES/Microlecciones/README.md
06_PASTILLAS_MODULARES/README.md
06_PASTILLAS_MODULARES/Recursos_Reutilizables/README.md
07_PLANTILLAS_Y_MODELOS/Documentacion/Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md
07_PLANTILLAS_Y_MODELOS/Documentacion/Plantilla_Ficha_Dimension_Operacional_AI_StoryLab_1_v0_4_3.md
07_PLANTILLAS_Y_MODELOS/Documentacion/README.md
07_PLANTILLAS_Y_MODELOS/Modelos_Datos/README.md
07_PLANTILLAS_Y_MODELOS/Modelos_Gobernanza/README.md
07_PLANTILLAS_Y_MODELOS/Modelos_Prompts/README.md
07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales/Plantilla_README_Cartapacio_AI_StoryLab_1_v0_4_4.md
07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales/README.md
07_PLANTILLAS_Y_MODELOS/Plantillas_Evaluacion/README.md
07_PLANTILLAS_Y_MODELOS/README.md
07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Secuencias_Didacticas/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Evidencias/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Misiones/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Rutas_Aprendizaje/README.md
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Trayectorias_Nivel/README.md
09_IA_AGENTES_Y_COPILOTOS/Agentes_Planificados/README.md
09_IA_AGENTES_Y_COPILOTOS/Copilotos_Local_First/README.md
09_IA_AGENTES_Y_COPILOTOS/Evaluacion_IA/README.md
09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md
09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/README.md
09_IA_AGENTES_Y_COPILOTOS/Prompts_Seguros/README.md
09_IA_AGENTES_Y_COPILOTOS/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test/generate_ai_storylab_n3_foundation_structure_v0_4_0.sh
10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test/migrar_documentos_heredados_v0_4_0.sh
10_REPOSITORIOS_Y_FLUJO_TECNICO/Convenciones_Commits/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Dependencias/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Estructura_App/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/Contributing_v0_4_0.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub/README.md
10_REPOSITORIOS_Y_FLUJO_TECNICO/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/Audio/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/Imagenes/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/Portafolios/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/Publicacion_Local/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/README.md
11_MULTIMODALIDAD_Y_PUBLICACION/Video/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Accesibilidad/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Adaptaciones/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/DUA/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Experiencia_Estudiante/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/README.md
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Rubricas/README.md
13_INVESTIGACION_Y_EVIDENCIA/Evidence_Ledger/README.md
13_INVESTIGACION_Y_EVIDENCIA/Evidencia_Aprendizaje/README.md
13_INVESTIGACION_Y_EVIDENCIA/Fuentes/README.md
13_INVESTIGACION_Y_EVIDENCIA/Integracion_IT/README.md
13_INVESTIGACION_Y_EVIDENCIA/Metodologias/README.md
13_INVESTIGACION_Y_EVIDENCIA/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Adopcion_Controlada/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunicaciones/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunidad_Practica/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Escalamiento_Institucional/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/README.md
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Transferencia_Facilitadores/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Accesibilidad/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_DevOps/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Sistemica/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Gate_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Review_Checklist_v0_4_0.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Metricas_Internas/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/Auditoria_Estructural_Cartapacios_AI_StoryLab_1_v0_4_4.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/README.md
15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas/Threat_Model_v0_4_0.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Politica_Privacidad_Local_First_v0_4_0.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Privacy_Local_First_v0_4_0.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad/README.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad/Security_Requirements_v0_4_0.md
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes/README.md
17_INTERNACIONALIZACION_LOCALIZACION/Glosarios/README.md
17_INTERNACIONALIZACION_LOCALIZACION/Localizacion_Cultural/README.md
17_INTERNACIONALIZACION_LOCALIZACION/README.md
17_INTERNACIONALIZACION_LOCALIZACION/Traducciones/README.md
17_INTERNACIONALIZACION_LOCALIZACION/Variantes_Linguisticas/README.md
18_DOCUMENTACION_ACTIVA/Actas_Cierre_Continuidad/Acta_Cierre_Continuidad_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_4_9_Bloque_3_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_4_9_Bloque_4_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_2_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_3_v2_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Capitan_v0_5_0_Bloque_4_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Transferencia_Simetrica_Apertura_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Actualizacion_Bitacora_Transferencia_Simetrica_PreCierre_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Capitan_Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Capitan_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Capitan_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Capitan_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Gobernanza_PreCierre_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_Apertura_v0_4_4_SDD_AI_StoryLab_1.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_PR10_Cierre_Constitucional_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_PR9_Pago_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Sesion_SDD_v0_4_4_Cierre_Fundacional.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_PR10_Cierre_Constitucional_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_PR9_Pago_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_SDD_v0_4_4_Cierre_Fundacional.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_v0_4_0.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Cierre_Bitacora_Capitan_v0_4_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Cierre_Bitacora_Capitan_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Cierre_Bitacora_Capitan_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Indice_Actualizaciones_Gobernanza_Bitacoras_PreCierre_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Bloque_Competencial_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Gobernanza_PreCierre_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Matriz_Continuidad_Ronda_Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Bitacoras/README.md
18_DOCUMENTACION_ACTIVA/Bitacoras/SESSION_LOG_INDEX.md
18_DOCUMENTACION_ACTIVA/Bitacoras/Transferencia_Simetrica_PR12_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Bitacoras/session-0001.md
18_DOCUMENTACION_ACTIVA/Bitacoras/session-0002.md
18_DOCUMENTACION_ACTIVA/Bitacoras/session-0003.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_Completo_v0_4_0.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR10_Cierre_Constitucional_SDD_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR12_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR17_Activacion_Correccion_Ruta_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_PR9_Pago_Deuda_Estructural_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Changelog/Changelog_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Changelog/README.md
18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR14_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR15_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Changelogs/Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Controlado_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres/Cierre_Sesion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Constitucional_v0_4_4_PR10/Manifest_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_PR12_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/00_README_Compendio_Cierre_Sesion_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/01_Actualizacion_Bitacora_Transferencia_Simetrica_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/02_Compendio_Estado_Situacion_Proyecto_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/03_Primer_Continuidad_Proxima_Sesion_v0_4_2_a_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/04_Prompt_Activacion_Proxima_Sesion_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3/06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/00_README_Compendio_Cierre_Sesion_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/01_Actualizacion_Bitacora_Transferencia_Simetrica_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/02_Compendio_Estado_Situacion_Proyecto_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/03_Primer_Continuidad_Proxima_Sesion_v0_4_3_a_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/04_Prompt_Activacion_Proxima_Sesion_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/05_Bitacora_Sesion_Cierre_Tareas_Pendientes_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/06_Calculo_Deuda_Pendiente_Cierre_Sesion_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4/07_Matriz_Continuidad_Cierre_Sesion_v0_4_3.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/00_README_Cierre_Sesion_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/01_Bitacora_Sesion_Cierre_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/02_Actualizacion_Bitacora_Transferencia_Simetrica_Cierre_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/03_Registro_Deuda_Cierre_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/04_Plan_Accion_Proxima_Sesion_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/05_Prompt_Activacion_Proxima_Sesion_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/06_Matriz_Continuidad_Cierre_Sesion_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8/07_Manifest_Compendio_Cierre_Sesion_v0_4_4_SDD_PR8.md
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/README.md
18_DOCUMENTACION_ACTIVA/Compendios/COMPENDIUM_INDEX.md
18_DOCUMENTACION_ACTIVA/Compendios/README.md
18_DOCUMENTACION_ACTIVA/Compendios/compendium-mvp-alpha.md
18_DOCUMENTACION_ACTIVA/Continuidad/Continuidad_Ruta_Desarrollo_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7/Cierre_Sesion_Post_Merge_PR12_Arquitectura_Conceptual_AI_StoryLab_v2.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7/Continuidad_Ruta_Desarrollo_v0_4_7_AI_StoryLab_v2.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7/Indice_Alineacion_v0_4_7_a_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7/Prompt_Activacion_v0_4_7_AI_StoryLab_v2.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7/README_Cierre_Sesion_Continuidad_v0_4_7_v2.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Actualizacion_Navegacion_Documental_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Checklist_No_Cruce_Funcional_PR14_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Consolidacion_Documentos_Canonicos_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Decision_Preparacion_No_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Estado_Canonico_Main_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Indice_Continuidad_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Indice_Navegacion_Documental_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Bitacora_Capitan_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Cierre_Sesion_Post_Merge_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Continuidad_Ruta_Post_PR13_Hacia_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Decision_Aceptacion_Ruta_Futura_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Indice_Compendio_Cierre_Continuidad_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Mapa_Ruta_Simplificado_Hacia_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/Prompt_Activacion_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion/README_Compendio_Cierre_Continuidad_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/MANIFEST_v0_4_8_Cierre_Post_Merge_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Patch_README_Raiz_Estado_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/README_Compendio_v0_4_8_Cierre_Post_Merge_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Revision_Deuda_Bloqueada_Post_PR13_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Decision_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Estado_Canonico_Main_Post_PR14_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Indice_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/MANIFEST_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15/Cierre_Post_Merge_PR15_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15/Estado_Canonico_Main_Post_PR15_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15/Patch_README_Raiz_Estado_v0_4_9_Post_PR15_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15/Prompt_Continuidad_Post_PR15_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15/README_Compendio_Post_Merge_PR15_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Prompt_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/README_Bloque_2_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/README_Bloque_3_Control_Continuidad_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/README_Bloque_4_Revision_Alcance_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/README_Cierre_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/README_Compendio_Activacion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Estado_Canonico_Main_Post_PR16_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Indice_Activacion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/MANIFEST_Activacion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Alcance_Preparatorio_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras/Bitacora_Capitan_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras/Bitacora_Sesion_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras/Bitacora_Transferencia_Simetrica_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras/Registro_Decisiones_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras/Registro_Deuda_Documental_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Changelog_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Definicion_Operativa_v1_0_0_Ecosistema_Funcional_Publicable_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Estado_y_Dictamen_Post_PR18_PR19_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Gate_Apertura_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Gate_Cierre_Real_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Historico/Consolidacion_Bitacoras_PR19_AI_StoryLab_HISTORICO.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Kit_Inicio_Sesion_PR19_Activacion_Formal_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Matriz_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Plan_Maestro_v0_5_a_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/README_Paquete_Bitacoras_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Riesgos_Dependencias_Deuda_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Transferencia_Final_PR19_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Post_Merge_PR17/README_Compendio_Cierre_Sesion_Post_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Prompt_Activacion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Prompt_Continuidad_Conversacion_Nueva_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/README_Bloque_2_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/README_Bloque_3_Consolidacion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/README_Bloque_4_Cierre_Controlado_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/README_Compendio_Activacion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Acta_Pre_Gate_Inicio_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Auditoria_Deuda_Integridad_Post_Cierre_v0_6_Pre_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Bitacora_Sesion_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Bitacora_Transferencia_Simetrica_PR21_Auditoria_Integridad_Facilitador_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Consolidacion_Funcional_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Criterios_No_Vigilancia_Vista_Facilitador_AI_StoryLab_v0_6_AUD.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Deuda_Vista_Facilitador_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_Auditoria_Integridad_Post_Cierre_v0_6_Pre_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab_PREPARACION_POST_PR21.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre/Matriz_Trazabilidad_Vista_Facilitador_v0_3_v0_6_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Acta_Gate_Transicion_Controlada_v0_6_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Auditoria_Cierre_Tramo_Tecnico_Documental_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Auditoria_Documental_Final_PR20_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Auditoria_Oficial_Mapa_Funcional_Preliminar_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Bitacora_Capitan_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Bitacora_Cierre_Bloque_v0_6_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Bitacora_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Bitacora_Transferencia_Simetrica_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Deuda_Funcional_UX_Matriz_Transicion_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Kit_Inicio_Sesion_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Plan_Trabajo_Documental_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Registro_Decisiones_v0_6_Diseno_Funcional_UX_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Registro_Deuda_Funcional_UX_v0_6_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Local_First/Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Modular_Dominio/Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Auditorias_Herencia/Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Cierre_Sesion/Compendio_Cierre_Sesion_Mapa_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Entrega_Portafolio_Exportabilidad/Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Glosario_Operativo/Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Gobernanza_Tecnica/Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Herramientas_Recursos_Externos/Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Mapas_Decision/Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Modelo_Datos/Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Privacidad_Defecto/Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Prompts_IA_No_Embebida/Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Roles_Permisos/Modelo_Roles_Permisos_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Seguridad_Diseno/Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Trazabilidad_Formativa/Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador/Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Gate_Cierre/Acta_Cierre_Formal_Gate_v0_7_0_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Bitacora_Transferencia_Post_Merge_PR22_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Instrucciones_Integracion_Kit_Continuidad_Post_PR22.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Kit_Inicio_Sesion_v0_7_0_Post_PR22.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/MANIFIESTO_KIT_CONTINUIDAD_v0_7_0_Post_PR22.json
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Matriz_Continuidad_Estrategica_v0_7_0_a_v1_0_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Matriz_Decisiones_Tecnicas_Iniciales_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Prompt_Arranque_Proxima_Sesion_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Protocolo_Trabajo_Documento_por_Documento_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/README_Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Registro_Deudas_Riesgos_Controles_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Ruta_Primeros_Documentos_Sustantivos_v0_7_0.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/SHA256SUMS.txt
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/Verificacion_Post_Merge_PR22.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Acta_Activacion_Gate_Apertura_v0_7_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Bitacora_Capitan_Hito_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Bitacora_Sesion_Hito_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Bitacora_Transferencia_Simetrica_Hito_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Control_Calidad_Auditoria_Estrategica_Preparacion_Gate_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Kit_Inicio_Sesion_v0_7_Arquitectura_Tecnica_Seguridad_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Mapa_Estrategico_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Registro_Continuidad_Estrategica_v0_7_a_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Registro_Decisiones_Hito_Apertura_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Registro_Deuda_Tecnica_Seguridad_Privacidad_v0_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO/Revision_Final_Pre_Merge_PR22_Gate_Apertura_v0_7_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Cierre_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Interfaz_No_Rigida_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Madurez_Documental_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Decisiones/Decision_Activacion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Decisiones/Decision_Canonizacion_Bloque_3_v2_y_Deprecacion_Bloque_3_Anterior_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Decisiones/Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Decisiones/Decision_No_Activacion_Fase_Mayor_Automatica_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Decisiones/Decision_No_Activacion_Fase_Mayor_Post_PR15_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Actualizacion_Registro_Deuda_Pago_Total_v0_4_7.md
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Bloqueada_Transicion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Bloqueada_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Registro_Deuda_Gate_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Deuda/Revision_Deuda_Bloqueada_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Escenarios/Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Dictamen_Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Dictamen_No_Cruce_Funcional_PR14_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Apertura_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Apertura_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Cierre_Controlado_PR17_Activacion_Correccion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Cierre_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Control_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Correccion_Ruta_v1_0_0_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Preparacion_Fase_Mayor_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Revision_No_Cruce_Funcional_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Gates/Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Glosarios/Vocabulario_Controlado_Diseno_Experiencia_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Guias/Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Guias/Guia_Revision_PH_IT_AT_Diseno_Experiencia_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Historico_Proceso/Historico_Ronda_SDD_Fundacional_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Informes_Validacion/README.md
18_DOCUMENTACION_ACTIVA/Manifests/Manifest_Paquete_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Manifiestos_Sesion/README.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Continuidad_v0_4_9_a_Fase_Mayor_Futura_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Decisiones_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Riesgos_Transicion_Fase_Mayor_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Marco_Evaluacion_Viabilidad_v1_0_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Criterios_Transicion_Fase_Mayor_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Semaforo_PH_IT_AT_Transicion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Agenda_Evaluacion_Comprensiva_Inicio_Nueva_Sesion_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Plan_Roadmap_v0_5_a_v1_0_Publicable_GitHub_Marketplace_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Planes/Plan_Trabajo_v0_4_9_Gobernanza_Transicion_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_CLAUDE_COWORK.md
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_DATA_MODEL.md
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_MVP_SCOPE.md
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/PRIMER_PROJECT_CONTEXT.md
18_DOCUMENTACION_ACTIVA/Primers_Continuidad/README.md
18_DOCUMENTACION_ACTIVA/Prompts/Prompt_Activacion_Nueva_Sesion_v0_5_0_Planificacion_Profunda_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Continuidad_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Continuidad_PR9_a_PR10_Cierre_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Continuidad_Post_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Continuidad_Specs_Nucleo_Experiencia_Interfaz_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/Prompt_Continuidad_v0_4_5_Specs_Operativas_AI_StoryLab_1.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/README.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-context-general.md
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-debugging.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/PROMPT_MASTER_MVP.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/README.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-final-submission.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-group-dashboard.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/build-localstorage.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-architecture.md
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion/review-privacy.md
18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Gobernanza_Mayor_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Gobernanza_Transicion_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Protocolos/Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/README.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Activacion_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Alineacion_Estructural_Pre_PR9_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_Gate_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_Indice_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_SPEC_OP_006_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_SPEC_OP_007_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Aprobacion_SPEC_OP_008_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Cierre_Constitucional_SDD_AI_StoryLab_1_v0_4_4.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Log_Heredado_v0_4_0.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Modelo_Evolutivo_Specs_por_Gates_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Decision_Secuencia_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/README.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_Completo_v0_4_0.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Registro_Decisiones_v0_4_2.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Tabla_Ubicacion_Canonica_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Tabla_Ubicacion_Canonica_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Reportes_Evaluacion/README.md
18_DOCUMENTACION_ACTIVA/Riesgos/Matriz_Riesgos_Recomendaciones_v0_5_a_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Segundo_Cerebro/README.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Conversacion_Nueva_v0_5_0_Ruta_v1_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Parcial_PH_IT_AT_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Ruta_v1_0_0_Ecosistema_Funcional_PH_IT_AT_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Simetrica_Post_PR17_v0_5_0_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Simetrica_v0_4_8_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/Transferencias/Transferencia_Simetrica_v0_4_9_AI_StoryLab.md
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/README.md
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/Registro_Apertura_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/Registro_WIKI_SYNC_PreCierre_AI_StoryLab_1_v0_4_3.md
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_v0_4_2.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Configuracion_Vite/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Despliegue_Local_First/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Entornos_Locales/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/GitHub_Pages/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Institutional_Hybrid_Opt_In/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Local_First_Default/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Plan_Implementacion/Propuesta_Implementacion_AI_StoryLab_1_hacia_v1_0_v0_4_2.md
19_IMPLEMENTACION_Y_DESPLIEGUE/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists/README.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists/Release_Criteria_v0_4_0.md
19_IMPLEMENTACION_Y_DESPLIEGUE/Roadmap/Mapa_Ruta_AI_StoryLab_1_hacia_v1_0_v0_4_2.md
20_MANTENIMIENTO_Y_EVOLUCION/Actualizaciones/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Backlog_Evolutivo/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/Registro_Deuda_Estructural_PreCierre_AI_StoryLab_1_v0_4_3.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/Registro_Deuda_Estructural_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica/Registro_Deuda_Tecnica_PreCierre_AI_StoryLab_1_v0_4_3.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica/Registro_Deuda_Tecnica_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_PreCierre_AI_StoryLab_1_v0_4_3.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Incidentes_Postmortems/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Mantenimiento_Aplicacion/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/Evolucion_App_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/README.md
20_MANTENIMIENTO_Y_EVOLUCION/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Analisis_Deuda_SDD_v0_4_4_Cierre_Fundacional.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Hito_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_v0_4_4_SDD_AI_StoryLab_1.md
20_MANTENIMIENTO_Y_EVOLUCION/Sostenibilidad/README.md
20_MANTENIMIENTO_Y_EVOLUCION/Versionado_Releases/README.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Actualizacion_Bitacora_Capitan_Cierre_Constitucional_v0_4_4.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Actualizacion_Bitacora_Capitan_Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Actualizacion_Bitacora_Capitan_Modelo_Evolutivo_Specs_por_Gates_AI_StoryLab_1_v0_4_5.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Bitacora_Capitan_AI_StoryLab_1_v0_4_3.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Bitacora_Capitan_AI_StoryLab_1_v0_4_4.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Cierre_Bitacora_Capitan_PR12_Arquitectura_Conceptual_AI_StoryLab.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/Cierre_Bitacora_Capitan_Specs_Nucleo_AI_StoryLab.md
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan/README.md
21_WIKI_DOCUMENTACION_HUMANA/Desarrollo_Aplicacion/Desarrollo_Primera_Aplicacion_AI_StoryLab_1_v0_4_3.md
21_WIKI_DOCUMENTACION_HUMANA/Desarrollo_Aplicacion/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Conocimiento_Comun/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Desarrollador/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Estudiante/Guia_Estudiante_v0_4_0.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Estudiante/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Facilitador/Guia_Facilitador_v0_4_0.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Facilitador/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Institucional/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Lectura/Guia_Lectura_Wiki_AI_StoryLab_1_v0_4_3.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Lectura/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Perfiles/README.md
21_WIKI_DOCUMENTACION_HUMANA/Guia_Seguridad/README.md
21_WIKI_DOCUMENTACION_HUMANA/Historia_Proyecto/Historia_Proceso_Creacion_AI_StoryLab_1_v0_4_3.md
21_WIKI_DOCUMENTACION_HUMANA/Historia_Proyecto/README.md
21_WIKI_DOCUMENTACION_HUMANA/Indice_Wiki_Oficial_AI_StoryLab_1_v0_4_3.md
21_WIKI_DOCUMENTACION_HUMANA/README.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Consentimiento_Informado_y_Situado.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Experiencia_Creativa_No_Rigida.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Local_First.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/POO_Conceptual.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Que_No_Hace_v0_4_4.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/README.md
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/Threat_Models.md
99_ARCHIVO_HISTORICO/Ciclos_Completados/README.md
99_ARCHIVO_HISTORICO/Exportaciones_Finales/JSON/README.md
99_ARCHIVO_HISTORICO/Exportaciones_Finales/MD/README.md
99_ARCHIVO_HISTORICO/Exportaciones_Finales/README.md
99_ARCHIVO_HISTORICO/Exportaciones_Finales/ZIP/README.md
99_ARCHIVO_HISTORICO/Paquetes_Intermedios/README.md
99_ARCHIVO_HISTORICO/Planes_Archivo/README.md
99_ARCHIVO_HISTORICO/README.md
99_ARCHIVO_HISTORICO/Releases/README.md
99_ARCHIVO_HISTORICO/Sesiones_Cerradas/README.md
99_ARCHIVO_HISTORICO/Versiones_Cerradas/README.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/README.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/.gitignore
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/CHANGELOG.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/README.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/README_Original.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/compendia/COMPENDIUM_INDEX.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/compendia/compendium-mvp-alpha.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/docs/EVOLUCION_APP.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/docs/KIT-INICIAL-REPOSITORIO-AI-STORYLAB.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/docs/guia-estudiante.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/docs/guia-facilitador.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/AI_USAGE_POLICY.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/CONTRIBUTING.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/DECISION_LOG.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/GOVERNANCE.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/PRIVACY_LOCAL_FIRST.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/RELEASE_CRITERIA.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/REVIEW_CHECKLIST.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance/RISK_REGISTER.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/index.html
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/logs/SESSION_LOG_INDEX.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/logs/session-0001.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/logs/session-0002.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/logs/session-0003.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/package-lock.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/package.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/primers/PRIMER_CLAUDE_COWORK.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/primers/PRIMER_DATA_MODEL.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/primers/PRIMER_MVP_SCOPE.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/primers/PRIMER_PROJECT_CONTEXT.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/PROMPT_MASTER_MVP.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/activation-prompts/activate-context-general.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/activation-prompts/activate-debugging.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/review-prompts/review-architecture.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/review-prompts/review-privacy.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/task-prompts/build-final-submission.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/task-prompts/build-group-dashboard.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/task-prompts/build-localstorage.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/task-prompts/build-structure.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/avatar/mentor.svg
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/badges/.gitkeep
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/icons/flask.svg
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/scripts/verify.mjs
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/App.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/__tests__/validation.test.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/AppHeader.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/BadgeWall.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/EthicalReflectionBox.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/ExportImportPanel.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/FinalSubmissionPanel.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/GlossaryView.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/GroupDashboard.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/LudicActivityWidget.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/MentorAvatarCard.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/MissionCard.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/MissionMap.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/MissionView.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/PortfolioPanel.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/StudentDashboard.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/SuggestedPromptBox.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/ToolBoard.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components/ToolCategoryView.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data/badges.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data/competencies.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data/glossary.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data/sessions.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data/tools.json
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/main.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/styles/global.css
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/templates/defaultGroupProgress.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/templates/defaultProgress.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/exportImport.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/finalSubmission.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/groupImport.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/localStorage.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/portfolio.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/progress.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils/validation.js
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/vite.config.js
99_ARCHIVO_HISTORICO/Versiones_Reemplazadas/README.md
99_ARCHIVO_HISTORICO/Wiki_Archivada/README.md
CHANGELOG.md
Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
MANIFEST_Cierre_Documental_SDD_v0_4_4_AI_StoryLab_1.md
README.md
README_Original.md
README_PR11_Integracion_Aprobacion_Gate_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
README_PR11_Integracion_Aprobacion_SPEC_OP_006_AI_StoryLab_1_v0_4_5.md
README_PR11_Integracion_Aprobacion_SPEC_OP_007_AI_StoryLab_1_v0_4_5.md
README_PR11_Integracion_Aprobacion_SPEC_OP_008_AI_StoryLab_1_v0_4_5.md
README_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
index.html
inventario_documentos_heredados_v0_4_0.txt
package-lock.json
package.json
prompts/task-prompts/build-structure.md
public/assets/avatar/mentor.svg
public/assets/badges/.gitkeep
public/assets/icons/flask.svg
scripts/verify.mjs
src/App.jsx
src/__tests__/validation.test.js
src/components/AppHeader.jsx
src/components/BadgeWall.jsx
src/components/EthicalReflectionBox.jsx
src/components/ExportImportPanel.jsx
src/components/FinalSubmissionPanel.jsx
src/components/GlossaryView.jsx
src/components/GroupDashboard.jsx
src/components/LudicActivityWidget.jsx
src/components/MentorAvatarCard.jsx
src/components/MissionCard.jsx
src/components/MissionMap.jsx
src/components/MissionView.jsx
src/components/PortfolioPanel.jsx
src/components/StudentDashboard.jsx
src/components/SuggestedPromptBox.jsx
src/components/ToolBoard.jsx
src/components/ToolCategoryView.jsx
src/data/badges.json
src/data/competencies.json
src/data/glossary.json
src/data/sessions.json
src/data/tools.json
src/main.jsx
src/styles/global.css
src/templates/defaultGroupProgress.js
src/templates/defaultProgress.js
src/utils/exportImport.js
src/utils/finalSubmission.js
src/utils/groupImport.js
src/utils/localStorage.js
src/utils/portfolio.js
src/utils/progress.js
src/utils/validation.js
vite.config.js
```

## 6. Inventario lineal de cartapacios versionados

```text
.specify
.specify/memory
.specify/specs
.specify/specs/Facilitator_Dashboard
.specify/specs/Mission_Engine
.specify/specs/Platform_Foundation
.specify/specs/Portfolio_Export
.specify/specs/Profile_Progress_JSON
.specify/specs/Security_Privacy_Baseline
00_CONTROL_MAESTRO
00_CONTROL_MAESTRO/Control_Versiones
00_CONTROL_MAESTRO/Control_Versiones/Versiones_Activas
00_CONTROL_MAESTRO/Control_Versiones/Versiones_Cerradas
00_CONTROL_MAESTRO/Convenciones_Nombres
00_CONTROL_MAESTRO/Estado_Gobernanza_Documental
00_CONTROL_MAESTRO/Indices_Maestros
00_CONTROL_MAESTRO/Manifiestos
00_CONTROL_MAESTRO/Mapas_Repositorio
00_CONTROL_MAESTRO/Protocolos_Cierre_Sesion
00_CONTROL_MAESTRO/Protocolos_Documentales
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental
00_CONTROL_MAESTRO/Spec_Driven_Development
00_CONTROL_MAESTRO/Spec_Driven_Development/Gates
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza
00_CONTROL_MAESTRO/Spec_Driven_Development/Guias
00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices
00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales
00_CONTROL_MAESTRO/Spec_Driven_Development/Politicas
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas
00_CONTROL_MAESTRO/Spec_Driven_Development/Threat_Models
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental
01_FUNDAMENTO_FILOSOFICO
01_FUNDAMENTO_FILOSOFICO/Autonomia_Aprendizaje
01_FUNDAMENTO_FILOSOFICO/Etica_Creativa
01_FUNDAMENTO_FILOSOFICO/Principios
01_FUNDAMENTO_FILOSOFICO/Relacion_Humano_Maquina_IA
02_ARQUITECTURA_CONCEPTUAL
02_ARQUITECTURA_CONCEPTUAL/Mapas_Relacionales
02_ARQUITECTURA_CONCEPTUAL/Modelo_Datos
02_ARQUITECTURA_CONCEPTUAL/Modelo_Hibrido_Institucional
02_ARQUITECTURA_CONCEPTUAL/Modelo_Local_First
02_ARQUITECTURA_CONCEPTUAL/Modelo_Pedagogico
02_ARQUITECTURA_CONCEPTUAL/Modelo_Sistemico
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Flujo_Humano_Maquina_IA
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Gates_Operacion
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Rituales_Revision
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Spec_Driven_Development
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/Transferencia_Simetrica
04_GOBERNANZA_ETICA_Y_RIESGOS
04_GOBERNANZA_ETICA_Y_RIESGOS/Derechos_Autoria_Licencias
04_GOBERNANZA_ETICA_Y_RIESGOS/Excepciones
04_GOBERNANZA_ETICA_Y_RIESGOS/Gobernanza_Proyecto
04_GOBERNANZA_ETICA_Y_RIESGOS/Registro_Decisiones
04_GOBERNANZA_ETICA_Y_RIESGOS/Revision_Humana
04_GOBERNANZA_ETICA_Y_RIESGOS/Riesgos
05_COMPETENCIAS_Y_PERFILES
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Alcance_Operativo
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Competencias
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Evidencias
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Experiencias_Mediaciones
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Invocables
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Produccion_Creativa
05_COMPETENCIAS_Y_PERFILES/Artista_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Lentes_C4_C5
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Marco_Operativo
05_COMPETENCIAS_Y_PERFILES/Caleidoscopio/Tensiones_Recombinaciones
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Alcance_Operativo
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Bases_Conocimiento
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Competencias
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Evidencias
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Gobernanza_Perfil
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Invocables
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Metodologias
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Produccion_Academica
05_COMPETENCIAS_Y_PERFILES/Investigador_Transdisciplinario/Perfil_Operativo/Transferencia_Simetrica
05_COMPETENCIAS_Y_PERFILES/Marco_Competencias_Taxonomias
05_COMPETENCIAS_Y_PERFILES/Matrices_Competencias
05_COMPETENCIAS_Y_PERFILES/Matriz
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Alcance_Operativo
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Aplicaciones_Educativas
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Arquitectura_Humano_Maquina_IA
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Artefactos
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Bases_Conocimiento
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Competencias
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Gobernanza_Perfil
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Invocables
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Metricas
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Transferencia_Simetrica
05_COMPETENCIAS_Y_PERFILES/Taxonomias
06_PASTILLAS_MODULARES
06_PASTILLAS_MODULARES/Actividades_Cortas
06_PASTILLAS_MODULARES/Fragmentos_Formativos
06_PASTILLAS_MODULARES/Microlecciones
06_PASTILLAS_MODULARES/Recursos_Reutilizables
07_PLANTILLAS_Y_MODELOS
07_PLANTILLAS_Y_MODELOS/Documentacion
07_PLANTILLAS_Y_MODELOS/Modelos_Datos
07_PLANTILLAS_Y_MODELOS/Modelos_Gobernanza
07_PLANTILLAS_Y_MODELOS/Modelos_Prompts
07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales
07_PLANTILLAS_Y_MODELOS/Plantillas_Evaluacion
07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Secuencias_Didacticas
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Evidencias
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Misiones
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Taller_AI_StoryLab/Rutas_Aprendizaje
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/Trayectorias_Nivel
09_IA_AGENTES_Y_COPILOTOS
09_IA_AGENTES_Y_COPILOTOS/Agentes_Planificados
09_IA_AGENTES_Y_COPILOTOS/Copilotos_Local_First
09_IA_AGENTES_Y_COPILOTOS/Evaluacion_IA
09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA
09_IA_AGENTES_Y_COPILOTOS/Prompts_Seguros
10_REPOSITORIOS_Y_FLUJO_TECNICO
10_REPOSITORIOS_Y_FLUJO_TECNICO/Build_Test
10_REPOSITORIOS_Y_FLUJO_TECNICO/Convenciones_Commits
10_REPOSITORIOS_Y_FLUJO_TECNICO/Dependencias
10_REPOSITORIOS_Y_FLUJO_TECNICO/Estructura_App
10_REPOSITORIOS_Y_FLUJO_TECNICO/Git_GitHub
11_MULTIMODALIDAD_Y_PUBLICACION
11_MULTIMODALIDAD_Y_PUBLICACION/Audio
11_MULTIMODALIDAD_Y_PUBLICACION/Imagenes
11_MULTIMODALIDAD_Y_PUBLICACION/Portafolios
11_MULTIMODALIDAD_Y_PUBLICACION/Publicacion_Local
11_MULTIMODALIDAD_Y_PUBLICACION/Video
12_DISENO_INSTRUCCIONAL_UNIVERSAL
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Accesibilidad
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Adaptaciones
12_DISENO_INSTRUCCIONAL_UNIVERSAL/DUA
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Experiencia_Estudiante
12_DISENO_INSTRUCCIONAL_UNIVERSAL/Rubricas
13_INVESTIGACION_Y_EVIDENCIA
13_INVESTIGACION_Y_EVIDENCIA/Evidence_Ledger
13_INVESTIGACION_Y_EVIDENCIA/Evidencia_Aprendizaje
13_INVESTIGACION_Y_EVIDENCIA/Fuentes
13_INVESTIGACION_Y_EVIDENCIA/Integracion_IT
13_INVESTIGACION_Y_EVIDENCIA/Metodologias
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Adopcion_Controlada
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunicaciones
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Comunidad_Practica
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Escalamiento_Institucional
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/Transferencia_Facilitadores
15_EVALUACION_CALIDAD_Y_AUDITORIA
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Accesibilidad
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_DevOps
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_IA_Agentes
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Seguridad
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evaluacion_Sistemica
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion
15_EVALUACION_CALIDAD_Y_AUDITORIA/Metricas_Internas
15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria
15_EVALUACION_CALIDAD_Y_AUDITORIA/Rubricas_N3_N4
16_SEGURIDAD_PRIVACIDAD_Y_DATOS
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Checklists_Seguridad
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Cumplimiento_Normativo
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Evaluacion_Riesgos_Tecnicos
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Politicas_Datos
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Requisitos_Seguridad
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Seguridad_IA_Agentes
17_INTERNACIONALIZACION_LOCALIZACION
17_INTERNACIONALIZACION_LOCALIZACION/Glosarios
17_INTERNACIONALIZACION_LOCALIZACION/Localizacion_Cultural
17_INTERNACIONALIZACION_LOCALIZACION/Traducciones
17_INTERNACIONALIZACION_LOCALIZACION/Variantes_Linguisticas
18_DOCUMENTACION_ACTIVA
18_DOCUMENTACION_ACTIVA/Actas_Cierre_Continuidad
18_DOCUMENTACION_ACTIVA/Bitacoras
18_DOCUMENTACION_ACTIVA/Changelog
18_DOCUMENTACION_ACTIVA/Changelogs
18_DOCUMENTACION_ACTIVA/Cierres
18_DOCUMENTACION_ACTIVA/Cierres_Sesion
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Constitucional_v0_4_4_PR10
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_2_Continuidad_v0_4_3
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_3_Continuidad_v0_4_4
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/Cierre_Sesion_v0_4_4_SDD_PR8
18_DOCUMENTACION_ACTIVA/Compendios
18_DOCUMENTACION_ACTIVA/Continuidad
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_7
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_8/Inicio_Sesion
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9
18_DOCUMENTACION_ACTIVA/Continuidad/v0_4_9/Post_Merge_PR15
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Bitacoras
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Historico
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/Post_Merge_PR17
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/Auditoria_Integridad_Post_Cierre
18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Local_First
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Modular_Dominio
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Auditorias_Herencia
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Cierre_Sesion
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Entrega_Portafolio_Exportabilidad
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Glosario_Operativo
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Gobernanza_Tecnica
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Herramientas_Recursos_Externos
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Mapas_Decision
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Modelo_Datos
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Privacidad_Defecto
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Prompts_IA_No_Embebida
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Roles_Permisos
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Seguridad_Diseno
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Trazabilidad_Formativa
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Gate_Cierre
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/PR_NUEVO
18_DOCUMENTACION_ACTIVA/Criterios
18_DOCUMENTACION_ACTIVA/Decisiones
18_DOCUMENTACION_ACTIVA/Deuda
18_DOCUMENTACION_ACTIVA/Escenarios
18_DOCUMENTACION_ACTIVA/Gates
18_DOCUMENTACION_ACTIVA/Glosarios
18_DOCUMENTACION_ACTIVA/Guias
18_DOCUMENTACION_ACTIVA/Historico_Proceso
18_DOCUMENTACION_ACTIVA/Informes_Validacion
18_DOCUMENTACION_ACTIVA/Manifests
18_DOCUMENTACION_ACTIVA/Manifiestos_Sesion
18_DOCUMENTACION_ACTIVA/Mapas
18_DOCUMENTACION_ACTIVA/Matrices
18_DOCUMENTACION_ACTIVA/Planes
18_DOCUMENTACION_ACTIVA/Primers_Continuidad
18_DOCUMENTACION_ACTIVA/Prompts
18_DOCUMENTACION_ACTIVA/Prompts_Activacion
18_DOCUMENTACION_ACTIVA/Prompts_de_Sesion
18_DOCUMENTACION_ACTIVA/Protocolos
18_DOCUMENTACION_ACTIVA/Registro_Decisiones
18_DOCUMENTACION_ACTIVA/Reportes_Evaluacion
18_DOCUMENTACION_ACTIVA/Riesgos
18_DOCUMENTACION_ACTIVA/Segundo_Cerebro
18_DOCUMENTACION_ACTIVA/Transferencias
18_DOCUMENTACION_ACTIVA/WIKI_SYNC
19_IMPLEMENTACION_Y_DESPLIEGUE
19_IMPLEMENTACION_Y_DESPLIEGUE/Configuracion_Vite
19_IMPLEMENTACION_Y_DESPLIEGUE/Despliegue_Local_First
19_IMPLEMENTACION_Y_DESPLIEGUE/Entornos_Locales
19_IMPLEMENTACION_Y_DESPLIEGUE/GitHub_Pages
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Institutional_Hybrid_Opt_In
19_IMPLEMENTACION_Y_DESPLIEGUE/Perfiles_Operacion/Local_First_Default
19_IMPLEMENTACION_Y_DESPLIEGUE/Plan_Implementacion
19_IMPLEMENTACION_Y_DESPLIEGUE/Release_Checklists
19_IMPLEMENTACION_Y_DESPLIEGUE/Roadmap
20_MANTENIMIENTO_Y_EVOLUCION
20_MANTENIMIENTO_Y_EVOLUCION/Actualizaciones
20_MANTENIMIENTO_Y_EVOLUCION/Backlog_Evolutivo
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Tecnica
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC
20_MANTENIMIENTO_Y_EVOLUCION/Incidentes_Postmortems
20_MANTENIMIENTO_Y_EVOLUCION/Mantenimiento_Aplicacion
20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion
20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda
20_MANTENIMIENTO_Y_EVOLUCION/Sostenibilidad
20_MANTENIMIENTO_Y_EVOLUCION/Versionado_Releases
21_WIKI_DOCUMENTACION_HUMANA
21_WIKI_DOCUMENTACION_HUMANA/Bitacora_Capitan
21_WIKI_DOCUMENTACION_HUMANA/Desarrollo_Aplicacion
21_WIKI_DOCUMENTACION_HUMANA/Guia_Conocimiento_Comun
21_WIKI_DOCUMENTACION_HUMANA/Guia_Desarrollador
21_WIKI_DOCUMENTACION_HUMANA/Guia_Estudiante
21_WIKI_DOCUMENTACION_HUMANA/Guia_Facilitador
21_WIKI_DOCUMENTACION_HUMANA/Guia_Institucional
21_WIKI_DOCUMENTACION_HUMANA/Guia_Lectura
21_WIKI_DOCUMENTACION_HUMANA/Guia_Perfiles
21_WIKI_DOCUMENTACION_HUMANA/Guia_Seguridad
21_WIKI_DOCUMENTACION_HUMANA/Historia_Proyecto
21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4
99_ARCHIVO_HISTORICO
99_ARCHIVO_HISTORICO/Ciclos_Completados
99_ARCHIVO_HISTORICO/Exportaciones_Finales
99_ARCHIVO_HISTORICO/Exportaciones_Finales/JSON
99_ARCHIVO_HISTORICO/Exportaciones_Finales/MD
99_ARCHIVO_HISTORICO/Exportaciones_Finales/ZIP
99_ARCHIVO_HISTORICO/Paquetes_Intermedios
99_ARCHIVO_HISTORICO/Planes_Archivo
99_ARCHIVO_HISTORICO/Releases
99_ARCHIVO_HISTORICO/Sesiones_Cerradas
99_ARCHIVO_HISTORICO/Versiones_Cerradas
99_ARCHIVO_HISTORICO/Versiones_Proyecto
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/compendia
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/docs
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/governance
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/logs
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/primers
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/activation-prompts
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/review-prompts
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/task-prompts
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/avatar
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/badges
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/public/assets/icons
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/scripts
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/__tests__
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/components
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/data
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/styles
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/templates
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/utils
99_ARCHIVO_HISTORICO/Versiones_Reemplazadas
99_ARCHIVO_HISTORICO/Wiki_Archivada
prompts
prompts/task-prompts
public
public/assets
public/assets/avatar
public/assets/badges
public/assets/icons
scripts
src
src/__tests__
src/components
src/data
src/styles
src/templates
src/utils
```

## 7. Estado del espacio de trabajo

La captura no registró cambios locales ni archivos no rastreados visibles mediante `git status --short --untracked-files=all`.

## 8. Límites interpretativos

Este documento no determina qué archivos están bien o mal ubicados, no declara duplicados, no propone migraciones y no redefine la convención de cartapacios. Es una línea base para discusión y auditoría posterior.

La auditoría estructural deberá contrastar este árbol con las reglas rectoras de colocación documental, los cartapacios funcionales existentes, la historia de versiones y la función real de cada artefacto.

## 9. Reproducibilidad futura

Toda captura posterior deberá registrar como mínimo: repositorio, rama, SHA, fecha, estado del worktree, inventario versionado, inventario de cartapacios, métricas por raíz y separación entre contenido versionado e ignorado. Esto permitirá comparar árboles sin depender de impresiones manuales.

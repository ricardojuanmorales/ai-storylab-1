# Registro Maestro de Fuentes Canónicas y Vigencia · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-004`\
**Fase:** C1-B · Fuentes canónicas y vigencia\
**Estado:** Borrador para aprobación humana\
**Fecha:** 2026-07-11\
**PR de trabajo:** PR #30\
**Rama:** `docs/c1-completar-indices-metadatos`\
**Dependencias:** C0 cerrado, C1.1 vigente y C1-A aprobado\
**Alcance:** Fuentes rectoras y familias documentales prioritarias P1\
**Restricciones:** Este registro no mueve, renombra, elimina, archiva, depreca ni sustituye archivos. No inicia C2. No abre v0.8.0.

---

## 1. Propósito

Este registro identifica las fuentes canónicas, su estado de vigencia y la evidencia que sostiene su autoridad dentro de los ámbitos prioritarios de AI StoryLab 1.

Debe permitir responder:

```text
qué fuente gobierna cada ámbito prioritario;
qué fuente se utiliza actualmente;
qué documentos son sustantivos;
qué documentos son únicamente evidencia o memoria;
qué rutas actuales son transitorias;
qué sucesiones están demostradas;
qué sucesiones todavía no pueden declararse;
qué familias requieren elevación en fases posteriores.
```

Este documento no convierte automáticamente un archivo en fuente canónica.

La canonicidad declarada aquí depende de:

```text
tipo documental
+ alcance
+ aprobación
+ vigencia
+ decisión humana
+ evidencia verificable
```

---

## 2. Alcance de esta primera consolidación

El registro cubre:

1. gobernanza y autoridad documental;
2. Constitución y gobernanza SDD;
3. protocolo rector de colocación;
4. ruta versionada v0.5–v1.0;
5. fundamentos y derivados SDD prioritarios;
6. diseño funcional y UX de v0.6;
7. arquitectura técnica y seguridad de v0.7;
8. fuentes de auditoría que sostienen C0–C1;
9. documentos activos del propio ciclo C1.

El registro no pretende clasificar todavía todos los archivos del repositorio.

La cobertura integral se completará mediante:

```text
Indice_Documentos_Vigentes_C1_AI_StoryLab_1.md
Tabla_Sucesion_Deprecacion_Documental_C1_AI_StoryLab_1.md
```

---

## 3. Reglas de interpretación

### REG-C1B-001 · Canonicidad acotada

`canonical: yes` significa que el documento constituye la fuente primaria vigente dentro del alcance declarado.

No significa que gobierne todo el sistema.

### REG-C1B-002 · Ruta transitoria

Un documento aprobado puede ser canónico dentro de su alcance aunque su ruta actual sea transitoria.

La ruta no le concede autoridad, pero tampoco anula una aprobación humana válida.

### REG-C1B-003 · Memoria no competitiva

Bitácoras, kits, compendios, transferencias y cierres utilizan:

```text
canonical: no
```

salvo que un documento específico haya sido aprobado expresamente como fuente sustantiva dentro de un alcance determinado.

### REG-C1B-004 · Auditoría como evidencia

Los productos de auditoría pueden sostener decisiones y riesgos, pero no sustituyen fuentes normativas o sustantivas posteriores.

### REG-C1B-005 · Ninguna sucesión inferida

Cuando no exista evidencia explícita de sustitución:

```text
predecessor_id: none_declared
successor_id: none_declared
```

La similitud de nombre, versión o contenido no basta.

### REG-C1B-006 · Elevación no equivale a sustitución

La futura elevación de un documento desde `18_DOCUMENTACION_ACTIVA` hacia una ruta funcional estable no cambia su identidad documental.

El `document_id` debe permanecer estable.

### REG-C1B-007 · HOLD ante competencia

Cuando dos documentos del mismo tipo y alcance aparenten ser fuentes activas:

```text
status: on_hold
canonical: pending
```

hasta que exista decisión humana.

---

## 4. Estados utilizados

| Estado       | Interpretación en este registro                   |
| ------------ | ------------------------------------------------- |
| `active`     | Fuente vigente y aplicable                        |
| `approved`   | Aprobada, con vigencia condicionada a otro evento |
| `historical` | Conservada como antecedente o evidencia           |
| `proposed`   | Presentada para aprobación                        |
| `on_hold`    | Conflicto de autoridad o vigencia sin resolver    |

Valores de canonicidad:

```text
yes
no
pending
```

---

# 5. Fuentes rectoras de gobernanza y C1

| ID            | Documento                                                 | Ruta actual                                                                                                       | Tipo                 | Autoridad                | Estado     | Canónica  | Evidencia                                    | Sucesión y notas                          |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------ | ---------- | --------- | -------------------------------------------- | ----------------------------------------- |
| `DOC-SDD-001` | Constitución SDD AI StoryLab 1 v0.4.4                     | `00_CONTROL_MAESTRO/Spec_Driven_Development/Constitucion_SDD_AI_StoryLab_1_v0_4_4.md`                             | Constitución         | Sistémica                | `active`   | `yes`     | Índice rector SDD; DEC-C0-002; Gate G0-C0    | Sin sucesor declarado                     |
| `DOC-SDD-002` | Índice de Documentos Rectores SDD v0.4.4                  | `00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Indice_Documentos_Rectores_SDD_v0_4_4.md`                  | Índice de gobernanza | Sistémica derivada       | `active`   | `yes`     | PR #10; declaración de ruta canónica interna | No sustituye la Constitución              |
| `DOC-GOB-001` | Protocolo de Manejo de Cartapacios v0.4.4                 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md`            | Protocolo rector     | Transversal acotada      | `active`   | `yes`     | DEC-C0-001; Gate G0-C0                       | Subordinado a `DOC-SDD-001`               |
| `DOC-GOB-002` | Dictamen de Autoridad y Precedencia Documental C0         | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Dictamen_Autoridad_Precedencia_Documental_C0_AI_StoryLab_1.md`   | Dictamen rector      | Máxima dentro de C0      | `active`   | `yes`     | PR #27; Gate G0-C0                           | Fuente primaria de DEC-C0-001–007         |
| `DOC-GOB-003` | Matriz de Precedencia Documental C0                       | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Matriz_Precedencia_Documental_C0_AI_StoryLab_1.md`               | Matriz rectora       | Operativa derivada de C0 | `active`   | `yes`     | PR #28                                       | Complementa, no sustituye, `DOC-GOB-002`  |
| `DOC-DOC-001` | Esquema Rector de Índices, Metadatos e Identificadores C1 | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Esquema_Indices_Metadatos_Identificadores_C1_AI_StoryLab_1.md`   | Esquema rector       | Transversal dentro de C1 | `active`   | `yes`     | PR #29; Gate G1-C1.1                         | Fundamento de los registros C1            |
| `DOC-DOC-002` | Plan Operativo de Completación de la Fase C1              | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Plan_Operativo_Completacion_Fase_C1_AI_StoryLab_1.md`            | Plan de fase         | Operativa                | `approved` | `pending` | Hito C1-A del PR #30                         | Será vigente después del merge del PR #30 |
| `DOC-DOC-004` | Registro Maestro de Fuentes Canónicas y Vigencia C1       | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Registro_Maestro_Fuentes_Canonicas_Vigencia_C1_AI_StoryLab_1.md` | Registro rector      | Operativa dentro de C1-B | `proposed` | `pending` | Requiere aprobación humana C1-B              | Este documento                            |

---

# 6. Ruta versionada v0.5–v1.0

La ruta vigente se interpreta mediante tres fuentes complementarias.

| ID            | Documento                                                    | Ruta actual                                                                                                     | Función             | Estado   | Canónica | Evidencia                                                          | Notas                                                         |
| ------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------- | -------- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| `DOC-GOB-004` | Decisión de Corrección Ruta v1.0.0 como Ecosistema Funcional | `18_DOCUMENTACION_ACTIVA/Decisiones/Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md` | Decisión correctiva | `active` | `yes`    | Decisión explícita del 2026-07-06; PR #23 la reconoce como rectora | Define v1.0.0 como ecosistema funcional publicable            |
| `DOC-GOB-005` | Mapa de Ruta v0.5 a v1.0 Ecosistema Funcional                | `18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md`                       | Mapa de ruta        | `active` | `yes`    | Ruta corregida; reconocida en PR #20 y PR #23                      | Ruta actual transitoria; revisión de ubicación prevista en C6 |
| `DOC-GOB-006` | Matriz de Fases v0.5 a v1.0                                  | `18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md`                                      | Matriz de fases     | `active` | `yes`    | Reconocida en PR #23                                               | Complementa decisión y mapa                                   |

Relación funcional:

```text
DOC-GOB-004 decide
DOC-GOB-005 representa
DOC-GOB-006 operacionaliza
```

Los documentos siguientes permanecen como antecedentes de continuidad y no compiten como fuentes primarias:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/
├── Plan_Maestro_v0_5_a_v1_0_AI_StoryLab.md
└── Matriz_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md
```

Estado aplicable:

```text
canonical: no
status: historical
```

Esta clasificación no elimina ni mueve esos archivos.

---

# 7. Derivados prioritarios de SDD

| ID            | Documento                                    | Ruta actual                                                                                                                 | Dominio                 | Autoridad         | Estado   | Canónica                              | Evidencia                 |
| ------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------------- | -------- | ------------------------------------- | ------------------------- |
| `DOC-SDD-003` | Política Local-First Inicial                 | `00_CONTROL_MAESTRO/Spec_Driven_Development/Politicas/Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md`                 | SDD / arquitectura      | Normativa acotada | `active` | `yes`                                 | Índice rector SDD         |
| `DOC-SEG-001` | Registro Inicial de Threat Models SDD        | `00_CONTROL_MAESTRO/Spec_Driven_Development/Threat_Models/Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md`       | Seguridad               | Normativa acotada | `active` | `yes`                                 | Índice rector SDD         |
| `DOC-SDD-004` | Matriz POO Conceptual SDD                    | `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md`                     | Arquitectura conceptual | Normativa acotada | `active` | `yes`                                 | Índice rector SDD         |
| `DOC-SDD-005` | Matriz de Consentimiento Informado y Situado | `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md` | Gobernanza ética        | Normativa acotada | `active` | `yes`                                 | Índice rector SDD         |
| `DOC-UX-001`  | Guía de Experiencia Creativa No Rígida       | `00_CONTROL_MAESTRO/Spec_Driven_Development/Guias/Guia_Experiencia_Creativa_No_Rigida_SDD_AI_StoryLab_1_v0_4_4.md`          | UX                      | Normativa acotada | `active` | `yes`                                 | Índice rector SDD         |
| `DOC-SDD-006` | Matriz de Sincronización de Derivados SDD    | `00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Matriz_Sincronizacion_Derivados_SDD_AI_StoryLab_1_v0_4_4.md`         | Gobernanza SDD          | Operativa         | `active` | `yes`                                 | PR #10; índice rector SDD |
| `DOC-REF-001` | Plantilla de Spec Segura                     | `07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md`                             | Plantillas              | Instrumental      | `active` | `yes` dentro del alcance de plantilla | Índice rector SDD         |
| `DOC-DOC-003` | Plantilla README de Cartapacio               | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales/Plantilla_README_Cartapacio_AI_StoryLab_1_v0_4_4.md`                       | Gobernanza documental   | Instrumental      | `active` | `yes` dentro del alcance de plantilla | Índice rector SDD         |

Las plantillas son canónicas únicamente como moldes reutilizables.

No sustituyen specs o instancias aprobadas.

---

# 8. Fuentes sustantivas de diseño funcional y UX · v0.6

Los documentos siguientes fueron integrados mediante PR #20.

Su ubicación en `18_DOCUMENTACION_ACTIVA` se considera transitoria. La elevación funcional se trabajará en C3.

| ID            | Documento                                | Ruta actual                                                                                                    | Tipo                     | Estado   | Canónica | Elevación prevista |
| ------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- | -------- | ------------------ |
| `DOC-ARQ-001` | Mapa Funcional Preliminar del Ecosistema | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md` | Arquitectura funcional | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-UX-002` | Modelo de Experiencia de Usuario | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md` | Modelo UX | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-UX-003` | Flujos Funcionales Conceptuales | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md` | Diseño funcional | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-UX-004` | Recorridos de Usuario Sintéticos | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md` | UX | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-UX-005` | Criterios de Accesibilidad y Claridad | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md` | Criterios UX | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-UX-006` | Criterios de Interacción Humano-IA | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md` | Criterios de interacción | `active` | `yes` | Rama de migración; pendiente G2 y merge |
| `DOC-ARQ-002` | Requisitos Funcionales Preliminares      | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md`  | Especificación funcional | `active` | `yes`    | C3                 |
| `DOC-GOB-007` | Marco Estandarizado de Misión | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md` | Marco funcional | `active` | `yes` | Rama de migración; pendiente G2 y merge |

Reglas aplicables:

```text
current_path: transitoria
document_id: estable
canonical: yes dentro de su alcance aprobado
movement_authorized: no
target_path: pendiente de C2 y C3
```

Las bitácoras, auditorías, kits, actas, planes de trabajo y cierres del PR #20 no se registran como fuentes sustantivas activas en esta sección.

---

# 9. Fuentes sustantivas de arquitectura técnica y seguridad · v0.7

Los documentos siguientes fueron integrados mediante PR #23 y cubiertos por el cierre formal de v0.7.

Su ubicación actual es transitoria. La elevación funcional se trabajará en C4.

| ID            | Documento                                                             | Ruta actual                                                                                                                                                                                    | Dominio                  | Estado   | Canónica             | Elevación prevista |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- | -------------------- | ------------------ |
| `DOC-ARQ-003` | Arquitectura Conceptual Local-First                                   | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Local_First/Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`                                   | Arquitectura             | `active` | `yes`                | C4                 |
| `DOC-DAT-001` | Modelo de Datos Conceptual                                            | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Modelo_Datos/Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`                                                           | Datos                    | `active` | `yes`                | C4                 |
| `DOC-SEG-002` | Modelo de Roles y Permisos                                            | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Roles_Permisos/Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`                                                           | Seguridad                | `active` | `yes`                | C4                 |
| `DOC-UX-007`  | Vista del Facilitador No Vigilante                                    | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador/Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`                                               | UX / roles               | `active` | `yes`                | C3–C4              |
| `DOC-SEG-003` | Modelo de Seguridad por Diseño                                        | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Seguridad_Diseno/Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`                                                       | Seguridad                | `active` | `yes`                | C4                 |
| `DOC-SEG-004` | Modelo de Privacidad por Defecto                                      | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Privacidad_Defecto/Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md`                                                   | Privacidad               | `active` | `yes`                | C4                 |
| `DOC-FOR-001` | Trazabilidad Formativa No Vigilante                                   | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Trazabilidad_Formativa/Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`                                     | Formación / trazabilidad | `active` | `yes`                | C4                 |
| `DOC-OPS-001` | Prompts, Documentación e IA No Embebida                               | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Prompts_IA_No_Embebida/Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`                                    | Operaciones IA           | `active` | `yes`                | C4                 |
| `DOC-OPS-002` | Ecosistema de Herramientas, Recursos Externos y Notas Institucionales | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Herramientas_Recursos_Externos/Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md` | Operaciones              | `active` | `yes`                | C4                 |
| `DOC-REF-002` | Glosario Operativo, Lenguaje Canónico y Ayudas Contextuales           | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Glosario_Operativo/Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md`                    | Referencia               | `active` | `yes`                | C4 o C9            |
| `DOC-DAT-002` | Entrega, Portafolio, Metadatos y Exportabilidad Local-First           | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Entrega_Portafolio_Exportabilidad/Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md`      | Datos / entrega          | `active` | `yes`                | C4                 |
| `DOC-ARQ-004` | Arquitectura Modular, Objetos de Dominio, POO y SOLID                 | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Modular_Dominio/Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md`                    | Arquitectura técnica     | `active` | `yes`                | C4                 |
| `DOC-GOB-008` | Gobernanza Técnica hacia v1.0.0                                       | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Gobernanza_Tecnica/Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md`                                                  | Gobernanza técnica       | `active` | `yes`                | C4                 |
| `DOC-GOB-009` | Mapa de Decisiones Técnicas v0.7                                      | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Mapas_Decision/Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`                                                        | Mapa de decisiones       | `active` | `yes` dentro de v0.7 | C4 y C1-C          |

La auditoría de herencia funcional y el compendio de cierre de PR #23 se clasifican como evidencia:

```text
canonical: no
authority_level: evidencial
status: historical
```

---

# 10. Fuentes de auditoría y evidencia de C0–C1

| ID            | Documento                                             | Ruta                                                                                                                                    | Estado       | Canónica | Función                                          |
| ------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | ------------------------------------------------ |
| `DOC-AUD-001` | Informe Final de Auditoría Estructural                | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/Auditoria_Estructural_PR25/Informe_Final_Auditoria_Estructural_AI_StoryLab_1.md`  | `historical` | `no`     | Evidencia consolidada del diagnóstico            |
| `DOC-AUD-002` | Matriz Final de Hallazgos y Decisiones                | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/Auditoria_Estructural_PR25/Matriz_Final_Hallazgos_Decisiones_AI_StoryLab_1.csv`   | `historical` | `no`     | Fuente evidencial de DEC-001–012                 |
| `DOC-AUD-003` | Plan de Corrección, Validación, Reversión y Cierre B7 | `00_CONTROL_MAESTRO/Auditorias_Estructurales/B7_Plan_Correccion_Cierre/Plan_Correccion_Validacion_Reversion_Cierre_B7_AI_StoryLab_1.md` | `historical` | `no`     | Plan aprobado que origina C0–C10                 |
| `DOC-AUD-004` | Taxonomía Documental Aplicada B2                      | `00_CONTROL_MAESTRO/Auditorias_Estructurales/B2_Inventario_Taxonomia/Taxonomia_Documental_Aplicada_AI_StoryLab_1.md`                    | `historical` | `no`     | Método e inventario provisional                  |
| `DOC-AUD-005` | Dictamen Ejecutivo de Cierre B4                       | `00_CONTROL_MAESTRO/Auditorias_Estructurales/B4_Integridad_Duplicidades/Dictamen_Ejecutivo_Cierre_B4_AI_StoryLab_1.md`                  | `historical` | `no`     | Evidencia sobre canonicidad y rutas transitorias |

Estos documentos sostienen decisiones, pero no sustituyen las fuentes activas posteriores.

---

# 11. Capas y colecciones que no reciben todavía un `document_id`

## 11.1 `.specify/`

`.specify/` es un workspace técnico, no un documento.

No recibe un único `document_id`.

Las specs individuales aprobadas deberán incorporarse al Índice de Documentos Vigentes.

## 11.2 Base de conocimiento formativa

La colección:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/
```

está reconocida como capa formativa, pero requiere un índice documental interno antes de asignar IDs a sus unidades.

Estado:

```text
canonical: pending
status: approved_collection
```

## 11.3 Deuda en `20`

Los registros de deuda serán normalizados en C1-C.

C1-B no declara todavía cuál es la fuente primaria completa de deuda activa.

## 11.4 Archivo histórico en `99`

La condición `archived` no se aplicará hasta C8.

La mera ubicación en `99_ARCHIVO_HISTORICO` no sustituye el manifiesto y la regla de no vigencia.

## 11.5 Wiki y documentación humana

`21_WIKI_DOCUMENTACION_HUMANA` es una capa derivada.

Sus documentos deben referenciar fuentes canónicas y no competir con ellas.

La revisión integral se realizará en C9.

---

# 12. Conflictos y HOLD identificados

## HOLD-C1B-001 · Colecciones formativas sin índice unitario

```text
alcance: Base_Conocimiento_SDD
estado: on_hold
acción permitida: inventariar y referenciar
acción no permitida: declarar todas las unidades canónicas por herencia
fase de resolución: C1-B auxiliar o C9
```

## HOLD-C1B-002 · Specs individuales en `.specify/`

```text
alcance: specs operativas y artefactos reflejados
estado: on_hold para declaración masiva
acción permitida: revisar spec por spec
acción no permitida: declarar .specify como fuente constitucional
fase de resolución: Índice de Documentos Vigentes
```

## HOLD-C1B-003 · Ruta funcional definitiva de v0.6 y v0.7

```text
alcance: documentos sustantivos actualmente bajo 18
estado: ruta pendiente, contenido vigente
canonicalidad: yes dentro del alcance aprobado
movimiento: no autorizado
fase de resolución: C2, C3 y C4
```

---

# 13. Declaraciones de no canonicidad

No son fuentes sustantivas generales por su mera ubicación:

```text
bitácoras
kits de inicio
prompts de continuidad
transferencias simétricas
changelogs
compendios de cierre
README de sesión
manifiestos de paquetes
auditorías de proceso
copias históricas
```

Estos artefactos pueden tener valor evidencial elevado.

No deben competir con el documento que registran o acompañan.

---

# 14. Validación interna del registro

Antes de aprobar este documento debe confirmarse que:

- cada `document_id` es único;
- cada entrada tiene un alcance distinguible;
- ninguna plantilla se declara superior a una instancia;
- las fuentes v0.6 y v0.7 conservan identidad estable;
- las rutas transitorias no se presentan como rutas objetivo aprobadas;
- los productos de auditoría utilizan `canonical: no`;
- no se declara deprecación sin evidencia;
- no se declara sucesión por mera similitud;
- C1-B no inicia movimientos;
- C2 permanece sin iniciar;
- v0.8.0 permanece cerrado.

---

# 15. Gate parcial C1-B.1

La revisión humana deberá seleccionar una opción:

- [x] **Aprobado.** El Registro Maestro puede integrarse y habilita los auxiliares de C1-B.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** El registro permanece en borrador.
- [ ] **Rechazado.** El registro no se incorpora.

La aprobación de este documento:

```text
habilita:
  - Indice_Documentos_Vigentes_C1_AI_StoryLab_1.md
  - Tabla_Sucesion_Deprecacion_Documental_C1_AI_StoryLab_1.md

no_habilita:
  - movimientos
  - renombres
  - eliminaciones
  - deprecaciones
  - C2
  - v0.8.0
  - merge final del PR #30
```

---

# 16. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B.1: pendiente de aprobación
C1-B auxiliares: no iniciados
C1-C: no iniciado
C1-D: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

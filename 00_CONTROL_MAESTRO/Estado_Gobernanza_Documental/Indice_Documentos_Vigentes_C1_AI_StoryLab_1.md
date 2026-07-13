# Índice de Documentos Vigentes · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-005`  
**Fase:** C1-B · Fuentes canónicas y vigencia  
**Estado:** Borrador para aprobación humana  
**Fecha:** 2026-07-11  
**PR de trabajo:** PR #30  
**Rama:** `docs/c1-completar-indices-metadatos`  
**Documento rector:** `Registro_Maestro_Fuentes_Canonicas_Vigencia_C1_AI_StoryLab_1.md`  
**Alcance:** Consulta consolidada de fuentes activas y aprobadas con activación pendiente  
**Restricciones:** Este índice no crea autoridad, no modifica vigencia y no mueve, renombra, elimina, archiva, depreca ni sustituye documentos. No inicia C2. No abre v0.8.0.

---

## 1. Propósito

Este índice ofrece una vista rápida de los documentos vigentes identificados durante C1-B.

Debe permitir responder:

```text
qué documento está activo;
qué identificador lo representa;
cuál es su ruta actual;
qué función cumple;
qué alcance gobierna;
si su ruta es estable o transitoria;
qué documento rector sostiene su clasificación.
```

El índice deriva del Registro Maestro de Fuentes Canónicas y Vigencia.

Cuando exista diferencia entre ambos documentos, prevalece el Registro Maestro hasta que una decisión humana actualice formalmente este índice.

---

## 2. Regla de inclusión

Un documento se incorpora a la sección de vigencia activa cuando cumple:

```text
status: active
canonical: yes
alcance: explícito
evidencia: verificable
```

Los documentos con:

```text
status: approved
canonical: pending
```

se muestran separadamente como fuentes aprobadas con activación pendiente.

No se incluyen como fuentes activas:

- bitácoras;
- kits de sesión;
- transferencias;
- compendios;
- auditorías históricas;
- copias de continuidad;
- documentos sin evidencia suficiente;
- colecciones completas sin índice unitario;
- artefactos de workspace cuya aprobación no ha sido comprobada individualmente.

---

## 3. Convenciones

| Marca | Significado |
|---|---|
| `estable` | La ruta actual corresponde a la función declarada |
| `transitoria` | El contenido está vigente, pero su ruta funcional definitiva será evaluada después |
| `acotada` | La autoridad aplica únicamente al dominio o uso indicado |
| `derivada` | El documento desarrolla una fuente superior sin sustituirla |
| `instrumental` | Sirve como plantilla o herramienta, no como decisión sustantiva |

---

# 4. Gobernanza, autoridad y control documental

| ID | Documento | Ruta actual | Función | Estado | Condición de ruta |
|---|---|---|---|---|---|
| `DOC-SDD-001` | Constitución SDD AI StoryLab 1 v0.4.4 | `00_CONTROL_MAESTRO/Spec_Driven_Development/Constitucion_SDD_AI_StoryLab_1_v0_4_4.md` | Constitución sistémica | `active` | `estable` |
| `DOC-SDD-002` | Índice de Documentos Rectores SDD v0.4.4 | `00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Indice_Documentos_Rectores_SDD_v0_4_4.md` | Navegación de gobernanza SDD | `active` | `estable` |
| `DOC-GOB-001` | Protocolo de Manejo de Cartapacios v0.4.4 | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` | Colocación documental | `active` | `estable` |
| `DOC-GOB-002` | Dictamen de Autoridad y Precedencia Documental C0 | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Dictamen_Autoridad_Precedencia_Documental_C0_AI_StoryLab_1.md` | Autoridad y precedencia | `active` | `estable` |
| `DOC-GOB-003` | Matriz de Precedencia Documental C0 | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Matriz_Precedencia_Documental_C0_AI_StoryLab_1.md` | Aplicación operativa de C0 | `active` | `estable` |
| `DOC-DOC-001` | Esquema Rector de Índices, Metadatos e Identificadores C1 | `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Esquema_Indices_Metadatos_Identificadores_C1_AI_StoryLab_1.md` | Esquema documental C1 | `active` | `estable` |

---

# 5. Ruta versionada v0.5–v1.0

| ID | Documento | Ruta actual | Función | Estado | Condición de ruta |
|---|---|---|---|---|---|
| `DOC-GOB-004` | Decisión de Corrección Ruta v1.0.0 como Ecosistema Funcional | `18_DOCUMENTACION_ACTIVA/Decisiones/Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md` | Decidir la interpretación de v1.0.0 | `active` | `transitoria` |
| `DOC-GOB-005` | Mapa de Ruta v0.5 a v1.0 Ecosistema Funcional | `18_DOCUMENTACION_ACTIVA/Mapas/Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md` | Representar la ruta versionada | `active` | `transitoria` |
| `DOC-GOB-006` | Matriz de Fases v0.5 a v1.0 | `18_DOCUMENTACION_ACTIVA/Matrices/Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md` | Operacionalizar fases y transiciones | `active` | `transitoria` |

Relación de consulta:

```text
DOC-GOB-004 decide
DOC-GOB-005 representa
DOC-GOB-006 operacionaliza
```

Los tres documentos son complementarios. Ninguno sustituye a los otros.

---

# 6. Derivados prioritarios de SDD

| ID | Documento | Ruta actual | Función | Estado | Condición |
|---|---|---|---|---|---|
| `DOC-SDD-003` | Política Local-First Inicial | `00_CONTROL_MAESTRO/Spec_Driven_Development/Politicas/Politica_Local_First_Inicial_AI_StoryLab_1_v0_4_4.md` | Política SDD y arquitectónica | `active` | `estable`, `acotada` |
| `DOC-SEG-001` | Registro Inicial de Threat Models SDD | `00_CONTROL_MAESTRO/Spec_Driven_Development/Threat_Models/Registro_Inicial_Threat_Models_SDD_AI_StoryLab_1_v0_4_4.md` | Riesgos y amenazas iniciales | `active` | `estable`, `acotada` |
| `DOC-SDD-004` | Matriz POO Conceptual SDD | `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_POO_Conceptual_SDD_AI_StoryLab_1_v0_4_4.md` | Modelo conceptual POO | `active` | `estable`, `acotada` |
| `DOC-SDD-005` | Matriz de Consentimiento Informado y Situado | `00_CONTROL_MAESTRO/Spec_Driven_Development/Matrices/Matriz_Consentimiento_Informado_y_Situado_SDD_AI_StoryLab_1_v0_4_4.md` | Gobernanza ética y consentimiento | `active` | `estable`, `acotada` |
| `DOC-UX-001` | Guía de Experiencia Creativa No Rígida | `00_CONTROL_MAESTRO/Spec_Driven_Development/Guias/Guia_Experiencia_Creativa_No_Rigida_SDD_AI_StoryLab_1_v0_4_4.md` | Orientación de experiencia creativa | `active` | `estable`, `acotada` |
| `DOC-SDD-006` | Matriz de Sincronización de Derivados SDD | `00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Matriz_Sincronizacion_Derivados_SDD_AI_StoryLab_1_v0_4_4.md` | Sincronización de derivados | `active` | `estable`, `derivada` |
| `DOC-REF-001` | Plantilla de Spec Segura | `07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md` | Plantilla reutilizable de spec | `active` | `estable`, `instrumental` |
| `DOC-DOC-003` | Plantilla README de Cartapacio | `07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales/Plantilla_README_Cartapacio_AI_StoryLab_1_v0_4_4.md` | Plantilla documental | `active` | `estable`, `instrumental` |

Las plantillas son vigentes como moldes.

No gobiernan el contenido de una spec o instancia ya aprobada.

---

# 7. Diseño funcional y UX · v0.6

| ID | Documento | Ruta actual | Función | Estado | Condición de ruta |
|---|---|---|---|---|---|
| `DOC-ARQ-001` | Mapa Funcional Preliminar del Ecosistema | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md` | Arquitectura funcional | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-UX-002` | Modelo de Experiencia de Usuario | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md` | Modelo UX | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-UX-003` | Flujos Funcionales Conceptuales | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md` | Diseño funcional | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-UX-004` | Recorridos de Usuario Sintéticos | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md` | Recorridos UX | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-UX-005` | Criterios de Accesibilidad y Claridad | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md` | Criterios UX | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-UX-006` | Criterios de Interacción Humano-IA | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md` | Interacción humano-IA | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-ARQ-002` | Requisitos Funcionales Preliminares | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md` | Especificación funcional | `active` | `estable_en_02`, integración G2 cumplida |
| `DOC-GOB-007` | Marco Estandarizado de Misión | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md` | Marco funcional | `active` | `estable_en_02`, integración G2 cumplida |

La palabra `preliminar` forma parte del nombre histórico del documento.

No implica que el documento carezca de vigencia dentro del alcance aprobado en v0.6.

---

# 8. Arquitectura técnica y seguridad · v0.7

| ID | Documento | Ruta actual | Función | Estado | Condición de ruta |
|---|---|---|---|---|---|
| `DOC-ARQ-003` | Arquitectura Conceptual Local-First | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Local_First/Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md` | Arquitectura local-first | `active` | `transitoria`, elevación C4 |
| `DOC-DAT-001` | Modelo de Datos Conceptual | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Modelo_Datos/Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md` | Modelo de datos | `active` | `transitoria`, elevación C4 |
| `DOC-SEG-002` | Modelo de Roles y Permisos | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Roles_Permisos/Modelo_Roles_Permisos_v0_7_AI_StoryLab.md` | Roles y permisos | `active` | `transitoria`, elevación C4 |
| `DOC-UX-007` | Vista del Facilitador No Vigilante | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Vista_Facilitador/Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md` | UX y roles | `active` | `transitoria`, elevación C3–C4 |
| `DOC-SEG-003` | Modelo de Seguridad por Diseño | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Seguridad_Diseno/Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md` | Seguridad por diseño | `active` | `transitoria`, elevación C4 |
| `DOC-SEG-004` | Modelo de Privacidad por Defecto | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Privacidad_Defecto/Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md` | Privacidad por defecto | `active` | `transitoria`, elevación C4 |
| `DOC-FOR-001` | Trazabilidad Formativa No Vigilante | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Trazabilidad_Formativa/Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md` | Trazabilidad formativa | `active` | `transitoria`, elevación C4 |
| `DOC-OPS-001` | Prompts, Documentación e IA No Embebida | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Prompts_IA_No_Embebida/Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md` | Operación de IA | `active` | `transitoria`, elevación C4 |
| `DOC-OPS-002` | Ecosistema de Herramientas, Recursos Externos y Notas Institucionales | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Herramientas_Recursos_Externos/Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md` | Herramientas y fronteras externas | `active` | `transitoria`, elevación C4 |
| `DOC-REF-002` | Glosario Operativo, Lenguaje Canónico y Ayudas Contextuales | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Glosario_Operativo/Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md` | Lenguaje y referencia | `active` | `transitoria`, evaluación C4 o C9 |
| `DOC-DAT-002` | Entrega, Portafolio, Metadatos y Exportabilidad Local-First | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Entrega_Portafolio_Exportabilidad/Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md` | Datos, entrega y exportabilidad | `active` | `transitoria`, elevación C4 |
| `DOC-ARQ-004` | Arquitectura Modular, Objetos de Dominio, POO y SOLID | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Arquitectura_Modular_Dominio/Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md` | Arquitectura técnica modular | `active` | `transitoria`, elevación C4 |
| `DOC-GOB-008` | Gobernanza Técnica hacia v1.0.0 | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Gobernanza_Tecnica/Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md` | Gobernanza técnica | `active` | `transitoria`, elevación C4 |
| `DOC-GOB-009` | Mapa de Decisiones Técnicas v0.7 | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Mapas_Decision/Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md` | Mapa de decisiones técnicas | `active` | `transitoria`, normalización C1-C y C4 |

---

# 9. Fuentes aprobadas con activación pendiente

| ID | Documento | Estado actual | Condición de activación |
|---|---|---|---|
| `DOC-DOC-002` | Plan Operativo de Completación de la Fase C1 | `approved` | Merge del PR #30 |
| `DOC-DOC-004` | Registro Maestro de Fuentes Canónicas y Vigencia C1 | `approved` | Merge del PR #30 |
| `DOC-DOC-005` | Índice de Documentos Vigentes C1 | `proposed` | Aprobación del bloque C1-B y merge del PR #30 |
| `DOC-DOC-006` | Tabla de Sucesión y Deprecación Documental C1 | `proposed` | Aprobación del bloque C1-B y merge del PR #30 |

Estos documentos no deben presentarse como `active` antes del merge.

---

# 10. Colecciones pendientes de resolución

| Colección o capa | Estado | Motivo |
|---|---|---|
| Specs individuales en `.specify/` | `on_hold` para declaración masiva | Requieren revisión individual |
| Base de conocimiento SDD del Programador Humanista | `approved_collection` y `canonical: pending` | Requiere índice interno |
| Registros de deuda distribuidos | Pendientes de C1-C | Falta normalización mediante IDs |
| Documentos en `99_ARCHIVO_HISTORICO` | Pendientes de C8 | Falta manifiesto y regla formal de archivo |
| Wiki y documentación humana | Derivada | Revisión integral prevista en C9 |

---

# 11. Resumen cuantitativo

```text
fuentes activas identificadas: 39
fuentes aprobadas con activación pendiente: 2
auxiliares C1-B propuestos: 2
colecciones o capas bajo resolución: 5
movimientos autorizados: 0
deprecaciones ejecutadas: 0
C2 iniciado: no
v0.8.0 abierto: no
```

El conteo se refiere únicamente al alcance prioritario P1 del Registro Maestro.

No representa el número total de documentos vigentes del repositorio.

---

# 12. Control de actualización

Este índice debe actualizarse cuando:

- un documento cambie de estado;
- se apruebe una fuente nueva;
- se declare una sucesión;
- se ejecute una elevación de ruta;
- una fuente entre en HOLD;
- una decisión modifique su alcance;
- una fuente deje de estar vigente;
- se complete la revisión de una colección pendiente.

Toda actualización debe enlazar:

```text
decisión
+ gate
+ PR
+ documento afectado
```

---

# 13. Gate de bloque C1-B.2

Este índice se aprueba conjuntamente con:

```text
Tabla_Sucesion_Deprecacion_Documental_C1_AI_StoryLab_1.md
```

Opciones:

- [ ] **Aprobado.** El índice puede integrarse como auxiliar del Registro Maestro.
- [ ] **Aprobado con reservas.** Las reservas deben registrarse en el comentario de hito.
- [ ] **Cambios requeridos.** El índice permanece en borrador.
- [ ] **Rechazado.** El índice no se incorpora.

La aprobación no autoriza:

- movimientos;
- renombres;
- eliminaciones;
- deprecaciones;
- inicio de C2;
- apertura de v0.8.0;
- merge final del PR #30.

---

# 14. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B.1: aprobado
C1-B.2: pendiente de aprobación conjunta
C1-C: no iniciado
C1-D: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

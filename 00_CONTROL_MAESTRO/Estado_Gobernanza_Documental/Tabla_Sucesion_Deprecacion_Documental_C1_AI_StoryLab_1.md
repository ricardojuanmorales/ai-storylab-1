# Tabla de Sucesión y Deprecación Documental · C1

## AI StoryLab 1

**Identificador:** `DOC-DOC-006`  
**Fase:** C1-B · Fuentes canónicas y vigencia  
**Estado:** Borrador para aprobación humana  
**Fecha:** 2026-07-11  
**PR de trabajo:** PR #30  
**Rama:** `docs/c1-completar-indices-metadatos`  
**Documento rector:** `Registro_Maestro_Fuentes_Canonicas_Vigencia_C1_AI_StoryLab_1.md`  
**Documento auxiliar relacionado:** `Indice_Documentos_Vigentes_C1_AI_StoryLab_1.md`  
**Alcance:** Relaciones documentales demostradas, pendientes o expresamente no declaradas  
**Restricciones:** Esta tabla registra relaciones. No ejecuta movimientos, sucesiones, deprecaciones, renombres, archivos ni eliminaciones. No inicia C2. No abre v0.8.0.

---

## 1. Propósito

Esta tabla diferencia cinco fenómenos que no deben confundirse:

```text
complementariedad;
antecedente histórico;
sucesión documental;
deprecación;
cambio o elevación de ruta.
```

Debe impedir que:

- una versión más reciente sustituya implícitamente a otra;
- una ruta nueva cree un documento nuevo;
- un documento histórico se considere automáticamente deprecado;
- una copia de continuidad compita con una fuente activa;
- una futura migración cambie el identificador documental;
- una corrección de nombre o ruta se interprete como cambio de autoridad.

---

## 2. Estados de relación

| Estado | Significado |
|---|---|
| `none_declared` | No existe una sucesión explícita demostrada |
| `complementary` | Los documentos cumplen funciones distintas dentro del mismo sistema |
| `historical_reference` | El documento conserva antecedente o evidencia sin competir como fuente activa |
| `pending_elevation` | La identidad continúa, pero la ruta funcional futura no ha sido ejecutada |
| `superseded` | Existe sucesor explícito y evidencia suficiente |
| `deprecated` | El documento no debe utilizarse para nuevo trabajo y existe evidencia formal |
| `on_hold` | La relación no puede resolverse sin decisión humana |

---

## 3. Reglas rectoras

### REG-C1B-SUC-001 · Sucesión explícita

Una sucesión solo puede declararse cuando exista:

```text
predecessor_id
successor_id
decision_reference
effective_date
```

### REG-C1B-SUC-002 · Relación bidireccional

Cuando exista sucesión:

```text
documento anterior → successor_id
documento nuevo → predecessor_id
```

### REG-C1B-SUC-003 · Ruta e identidad

Mover o elevar un documento no crea sucesor.

En una elevación:

```text
document_id: permanece
current_path: cambia
historical_copy_paths: puede ampliarse
```

### REG-C1B-SUC-004 · Historia no equivale a deprecación

Un documento puede ser histórico sin estar deprecado.

`historical` describe su función actual.

`deprecated` prohíbe su uso para trabajo nuevo y requiere evidencia adicional.

### REG-C1B-SUC-005 · Complementariedad no equivale a competencia

Dos fuentes pueden ser canónicas dentro de un mismo ámbito cuando:

- sus funciones son diferentes;
- sus alcances son distinguibles;
- una decisión humana reconoce su relación;
- ninguna pretende sustituir a la otra.

### REG-C1B-SUC-006 · Ninguna eliminación en la primera elevación

La primera elevación de una fuente no elimina la ruta anterior dentro del mismo PR.

Primero se establece la nueva ruta, luego se valida y finalmente se decide el destino de la copia anterior.

---

# 4. Relaciones rectoras complementarias

| Documento principal | Documento relacionado | Estado | Relación | Sucesión |
|---|---|---|---|---|
| `DOC-SDD-001` · Constitución SDD | `DOC-SDD-002` · Índice Rector SDD | `complementary` | La Constitución gobierna; el índice facilita navegación | `none_declared` |
| `DOC-GOB-002` · Dictamen C0 | `DOC-GOB-003` · Matriz C0 | `complementary` | El dictamen decide; la matriz operacionaliza | `none_declared` |
| `DOC-DOC-001` · Esquema Rector C1 | `DOC-DOC-004` · Registro Maestro C1 | `complementary` | El esquema define reglas; el registro las aplica | `none_declared` |
| `DOC-DOC-004` · Registro Maestro C1 | `DOC-DOC-005` · Índice de Vigencia | `complementary` | El registro conserva detalle; el índice resume fuentes activas | `none_declared` |
| `DOC-DOC-004` · Registro Maestro C1 | `DOC-DOC-006` · Tabla de Sucesión | `complementary` | El registro declara estados; la tabla organiza relaciones | `none_declared` |
| `DOC-GOB-004` · Decisión de Corrección de Ruta | `DOC-GOB-005` · Mapa de Ruta | `complementary` | La decisión define; el mapa representa | `none_declared` |
| `DOC-GOB-004` · Decisión de Corrección de Ruta | `DOC-GOB-006` · Matriz de Fases | `complementary` | La decisión define; la matriz operacionaliza | `none_declared` |
| `DOC-GOB-005` · Mapa de Ruta | `DOC-GOB-006` · Matriz de Fases | `complementary` | Representación narrativa y matriz operativa | `none_declared` |

Ninguna de estas relaciones debe registrarse como sustitución.

---

# 5. Antecedentes históricos de la ruta v0.5–v1.0

| Documento o conjunto | Fuente activa relacionada | Estado actual | Evidencia de sucesión explícita | Determinación C1 |
|---|---|---|---|---|
| `18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Plan_Maestro_v0_5_a_v1_0_AI_StoryLab.md` | `DOC-GOB-004`, `DOC-GOB-005`, `DOC-GOB-006` | `historical_reference` | No se ha asignado sucesor documental explícito por ID | No compite como fuente primaria |
| `18_DOCUMENTACION_ACTIVA/Continuidad/v0_5_0/PR19/Matriz_Transicion_Fases_v0_5_a_v1_0_AI_StoryLab.md` | `DOC-GOB-004`, `DOC-GOB-005`, `DOC-GOB-006` | `historical_reference` | No se ha asignado sucesor documental explícito por ID | No compite como fuente primaria |
| Formulaciones anteriores que describían v1.0.0 como horizonte meramente documental | `DOC-GOB-004` | `historical_reference` | La decisión correctiva declara sustituida la interpretación, no identifica todos los archivos afectados | No declarar deprecación masiva |

Determinación:

```text
interpretación anterior: corregida
documentos específicos: no deprecados automáticamente
sucesión documental: none_declared
```

---

# 6. Elevación futura de fuentes v0.6

Todos los documentos de esta sección conservan identidad durante C3.

| ID | Estado de relación | Ruta actual | Fase de elevación | Predecessor ID | Successor ID |
|---|---|---|---|---|---|
| `DOC-ARQ-001` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Mapa_Funcional_Preliminar_Ecosistema_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-UX-002` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Modelo_Experiencia_Usuario_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-UX-003` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Flujos_Funcionales_Conceptuales_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-UX-004` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Recorridos_Usuario_Sinteticos_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-UX-005` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Accesibilidad_Claridad_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-UX-006` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Diseno_Funcional_UX/Criterios_Interaccion_Humano_IA_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-ARQ-002` | `pending_elevation` | `18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0/PR_NUEVO/Requisitos_Funcionales_Preliminares_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |
| `DOC-GOB-007` | `elevation_in_draft` | `02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Funcional/Marco_Estandarizado_Mision_AI_StoryLab_v0_6.md` | C3 | `none_declared` | `none_declared` |

Regla de transición:

```text
la ruta podrá cambiar;
el document_id no cambia;
la elevación no crea sucesor;
la ruta anterior no se elimina en la primera elevación.
```

---

# 7. Elevación futura de fuentes v0.7

Todos los documentos de esta sección conservan identidad durante C4, salvo evaluación conjunta C3–C4 o C4–C9 indicada.

| ID | Estado de relación | Fase prevista | Predecessor ID | Successor ID |
|---|---|---|---|---|
| `DOC-ARQ-003` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-DAT-001` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-SEG-002` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-UX-007` | `pending_elevation` | C3–C4 | `none_declared` | `none_declared` |
| `DOC-SEG-003` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-SEG-004` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-FOR-001` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-OPS-001` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-OPS-002` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-REF-002` | `pending_elevation` | C4 o C9 | `none_declared` | `none_declared` |
| `DOC-DAT-002` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-ARQ-004` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-GOB-008` | `pending_elevation` | C4 | `none_declared` | `none_declared` |
| `DOC-GOB-009` | `pending_elevation` | C1-C y C4 | `none_declared` | `none_declared` |

---

# 8. Correcciones de ruta sin deprecación documental

## 8.1 Glosario operativo v0.7

Ruta descartada durante el proceso:

```text
Glosario_Lenguaje_Ayudas/
```

Ruta reconocida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/
Arquitectura_Tecnica_Seguridad/
Glosario_Operativo/
Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md
```

Determinación:

```text
document_id: DOC-REF-002
documento sucesor: no
deprecación documental: no
corrección de ruta: sí
ruta descartada: no canónica
```

La corrección de un nombre de cartapacio no crea un nuevo documento.

---

# 9. Fuentes históricas de auditoría

| ID | Estado | Sucesor declarado | Deprecada | Función actual |
|---|---|---|---|---|
| `DOC-AUD-001` | `historical_reference` | `none_declared` | No | Evidencia consolidada |
| `DOC-AUD-002` | `historical_reference` | `none_declared` | No | Evidencia de hallazgos y decisiones |
| `DOC-AUD-003` | `historical_reference` | `none_declared` | No | Plan de origen de C0–C10 |
| `DOC-AUD-004` | `historical_reference` | `none_declared` | No | Método e inventario provisional |
| `DOC-AUD-005` | `historical_reference` | `none_declared` | No | Evidencia sobre rutas y canonicidad |

Los productos posteriores de C0 y C1 desarrollan o ejecutan sus recomendaciones.

No se declara una sucesión documental directa salvo evidencia futura.

---

# 10. Fuentes activas sin sucesor declarado

La regla general para las fuentes activas del Registro Maestro es:

```text
predecessor_id: none_declared
successor_id: none_declared
deprecation_reference: none
```

Esto aplica mientras no exista una decisión humana que determine lo contrario.

La ausencia de sucesor no constituye un defecto.

Evita fabricar genealogías documentales con hilo y pegamento.

---

# 11. Deprecaciones ejecutadas durante C1-B

```text
documentos deprecados: 0
documentos sustituidos: 0
documentos eliminados: 0
documentos archivados: 0
movimientos ejecutados: 0
rutas corregidas registradas: 1
elevaciones pendientes: 22
```

C1-B registra estados y relaciones.

No ejecuta las acciones posteriores.

---

# 12. Relaciones bajo HOLD

## HOLD-C1B-001 · Base de conocimiento formativa

```text
predecessor_id: unresolved
successor_id: unresolved
deprecation: none
motivo: falta índice documental interno
```

## HOLD-C1B-002 · Specs en `.specify/`

```text
predecessor_id: revisión individual requerida
successor_id: revisión individual requerida
deprecation: none
motivo: el workspace no concede canonicidad automática
```

## HOLD-C1B-003 · Rutas definitivas de v0.6 y v0.7

```text
document_id: estable
current_path: transitoria
target_path: pendiente de C2–C4
successor_id: none_declared
deprecation: none
```

---

# 13. Evidencia mínima para futuras actualizaciones

Toda nueva relación de sucesión o deprecación deberá incluir:

| Campo | Requisito |
|---|---|
| `document_id` | Identidad persistente del documento |
| `predecessor_id` | Documento sustituido, cuando aplique |
| `successor_id` | Documento sucesor, cuando aplique |
| `relationship_type` | Sucesión, deprecación, referencia histórica o elevación |
| `decision_reference` | Decisión humana aplicable |
| `gate_reference` | Gate que autoriza |
| `effective_date` | Fecha de efecto |
| `current_path` | Ruta vigente |
| `previous_path` | Ruta anterior, cuando aplique |
| `historical_copy_paths` | Copias preservadas |
| `validation_reference` | Evidencia de integridad |
| `reversal_reference` | Procedimiento de reversión |

Sin esos datos, la relación permanece:

```text
none_declared
```

o:

```text
on_hold
```

---

# 14. Gate de bloque C1-B.2

Esta tabla se aprueba conjuntamente con:

```text
Indice_Documentos_Vigentes_C1_AI_StoryLab_1.md
```

Opciones:

- [ ] **Aprobado.** Ambos auxiliares pueden integrarse y el bloque C1-B puede prepararse para commit.
- [ ] **Aprobado con reservas.** Las reservas se registran en el comentario de hito.
- [ ] **Cambios requeridos.** Los auxiliares permanecen en borrador.
- [ ] **Rechazado.** Los auxiliares no se incorporan.

La aprobación conjunta habilita:

```text
staging de los tres productos C1-B;
validación técnica del bloque;
commit funcional único;
push al PR #30;
comentario de hito C1-B.
```

No habilita:

```text
movimientos;
renombres;
eliminaciones;
deprecaciones;
archivo;
C2;
v0.8.0;
merge final del PR #30.
```

---

# 15. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-A: aprobado
C1-B.1: aprobado
C1-B.2: pendiente de aprobación conjunta
C1-B: pendiente de commit e hito
C1-C: no iniciado
C1-D: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

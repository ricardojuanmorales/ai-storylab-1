# Auditoría Estructural de Cartapacios — AI StoryLab 1 v0.4.4

**Código documental:** Auditoria_Estructural_Cartapacios_AI_StoryLab_1_v0_4_4  
**Proyecto:** AI StoryLab 1  
**Versión auditada:** v0.4.4  
**Fecha:** 2026-06-30  
**Estado:** Borrador operativo para PR #9  
**Tipo de documento:** Auditoría estructural de cartapacios, rutas canónicas y deuda organizacional  
**Ruta canónica recomendada:** `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/Auditoria_Estructural_Cartapacios_AI_StoryLab_1_v0_4_4.md`  
**Rama recomendada:** `v0.4.4-structural-audit`  
**PR recomendado:** PR #9  
**Alcance:** Documental, estructural, transdisciplinario y preparatorio. No autoriza implementación funcional.  

---

## 0. Declaración de apertura

Esta auditoría responde a una necesidad crítica de AI StoryLab 1: pagar deuda estructural antes de continuar hacia ciclos más intensivos de Spec-Driven Development, arquitectura, diseño, implementación, testing, validación, despliegue, mantenimiento e investigación transdisciplinaria.

El repositorio ya contiene una arquitectura documental amplia y un paquete SDD v0.4.4 incorporado al flujo de trabajo. La estructura comienza a mostrar señales de tensión: rutas paralelas, README genéricos, carpetas emergentes no plenamente gobernadas, diferencias entre estructura objetivo y estructura real, y riesgo de proliferación documental al avanzar hacia v1.0.0.

La auditoría no busca reducir el proyecto a orden burocrático. Busca crear condiciones para que la creatividad, la investigación, la pedagogía, la seguridad, la implementación y la memoria documental puedan crecer sin pisarse los cordones.

---

## 1. Fuentes internas consideradas

Esta auditoría se basa en:

```text
1. Protocolo original de manejo de carpetas del Framework Genérico V4.1.1 v0.2.
2. README raíz de AI StoryLab 1 en main.
3. Tree Objetivo N3 Foundation Structure v0.4.0.
4. Constitución SDD AI StoryLab 1 v0.4.4.
5. Índice de Documentos Rectores SDD v0.4.4.
6. Paquete de cierre v0.4.4 SDD PR #8.
7. Decisiones de alineación sistémica tomadas antes del PR #9.
```

---

## 2. Decisiones de alineación sistémica pre-PR9

Las siguientes decisiones gobiernan esta auditoría y deben alimentar el protocolo estructural v0.4.4:

| Eje | Decisión adoptada |
|---|---|
| Organización hacia v1.0.0 | Sistema de capas: versión, fase, producto, perfil, evidencia y riesgo mediante metadatos e índices. |
| Productos esperados | Ecosistema transdisciplinario con claridad por fases técnicas. |
| Producto obligatorio preimplementación | Paquete transdisciplinario completo. |
| Testing, validación e investigación | Sistema híbrido: pruebas mínimas por spec y evidencias mayores en matrices/informes transversales. |
| Perfiles creadores | PH como piloto con obligación de transferibilidad hacia IT y AT. |
| Perfiles de usuario | Organización por nivel educativo/rol principal: escuela superior, universitario, docente, investigador. |
| Matriz cruzada PH-IT-AT x usuarios | No crear matriz central por ahora. |
| Constitución SDD | Documento matriz vivo con núcleo estable y anexos versionados. |
| Derivados SDD | Ruta canónica + referencias lógicas. |
| Conflictos documentales | Deuda + decisión + changelog + mapa/índice afectado. |
| Jerarquía documental | Control maestro > Constitución SDD > seguridad/ética/perfiles/investigación > decisiones > specs > arquitectura/diseño > pruebas/validación > guías > bitácoras. |
| Sigla oficial | SDD exclusivamente. SSD queda como error tipográfico, deuda terminológica o uso heredado no canónico. |
| Carpetas nuevas en PR #9 | Permitidas si mejoran claridad, con justificación y decisión registrada. |
| Gate antes de implementación | Gate constitucional completo. |
| Investigación transdisciplinaria | Eje rector junto con SDD. |
| Transferencia PH-IT-AT | Sistema formal: campo obligatorio, deuda, índice de documentos transferibles y revisión en cierre. |
| Archivo histórico | Requiere reemplazo canónico y decisión registrada. |

---

## 3. Dictamen ejecutivo

**Estado general:** El repositorio tiene una estructura fundacional fuerte, pero requiere alineación urgente antes de escalar SDD hacia implementación.

**Riesgo estructural:** Alto si se continúa creando documentos sin protocolo actualizado.

**Riesgo de pérdida de trazabilidad:** Medio-alto, especialmente en documentación activa, derivados SDD, perfiles, deuda y paquetes de cierre.

**Riesgo de duplicación funcional:** Medio, por coexistencia de rutas similares como bases de conocimiento, cierres, manifiestos, compendios y documentación activa.

**Riesgo de implementación prematura:** Controlado por la Constitución SDD, pero debe reforzarse mediante gates, README actualizados y protocolo de cartapacios.

**Recomendación:** Abrir PR #9 como intervención estructural enfocada en auditoría, protocolo, mapa real, tabla de ubicación, README canónico, deuda estructural y decisiones de gobernanza.

---

## 4. Mapa estructural de referencia

### 4.1 Nivel raíz N3

```text
ai-storylab-1/
├── .specify/
├── 00_CONTROL_MAESTRO/
├── 01_FUNDAMENTO_FILOSOFICO/
├── 02_ARQUITECTURA_CONCEPTUAL/
├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
├── 04_GOBERNANZA_ETICA_Y_RIESGOS/
├── 05_COMPETENCIAS_Y_PERFILES/
├── 06_PASTILLAS_MODULARES/
├── 07_PLANTILLAS_Y_MODELOS/
├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
├── 09_IA_AGENTES_Y_COPILOTOS/
├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/
├── 11_MULTIMODALIDAD_Y_PUBLICACION/
├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/
├── 13_INVESTIGACION_Y_EVIDENCIA/
├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/
├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
├── 17_INTERNACIONALIZACION_LOCALIZACION/
├── 18_DOCUMENTACION_ACTIVA/
├── 19_IMPLEMENTACION_Y_DESPLIEGUE/
├── 20_MANTENIMIENTO_Y_EVOLUCION/
├── 21_WIKI_DOCUMENTACION_HUMANA/
├── 99_ARCHIVO_HISTORICO/
├── public/
├── scripts/
├── src/
└── archivos raíz de proyecto
```

### 4.2 Zonas críticas para PR #9

```text
00_CONTROL_MAESTRO/
05_COMPETENCIAS_Y_PERFILES/
07_PLANTILLAS_Y_MODELOS/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
18_DOCUMENTACION_ACTIVA/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

### 4.3 Zonas críticas de tercer nivel

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
00_CONTROL_MAESTRO/Mapas_Repositorio/
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/

05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
05_COMPETENCIAS_Y_PERFILES/Taxonomias/

07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/

15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/
15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/

18_DOCUMENTACION_ACTIVA/Bitacoras/
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/

20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/

21_WIKI_DOCUMENTACION_HUMANA/SDD_v0_4_4/
```

---

## 5. Hallazgos principales

### 5.1 README raíz desactualizado

El README raíz declara una fase activa anterior a la situación documental post-PR #8. Esto afecta la orientación de cualquier persona o agente que entre al repositorio.

**Severidad:** Alta  
**Tipo de deuda:** Deuda de orientación y continuidad  
**Acción recomendada:** Actualizar README raíz para reflejar v0.4.4 SDD, PR #8 fusionado y PR #9 como auditoría estructural preimplementación.  
**Bloquea implementación:** Sí, indirectamente, por riesgo de navegación equivocada.

---

### 5.2 README genéricos en carpetas activas

Varias carpetas principales conservan README genéricos con estado pendiente, aunque ya contienen documentos activos o han recibido paquetes sustantivos.

**Severidad:** Alta  
**Tipo de deuda:** Deuda de navegación y gobernanza  
**Acción recomendada:** Crear plantilla README canónica y actualizar progresivamente zonas críticas.  
**Prioridad PR #9:** Alta.

---

### 5.3 Diferencia entre estructura objetivo v0.4.0 y estructura real v0.4.4

La estructura objetivo N3 v0.4.0 sigue siendo útil, pero PR #8 introdujo una capa SDD sustantiva dentro de `00_CONTROL_MAESTRO/Spec_Driven_Development/`, además de bases formativas SDD en PH y wiki humana SDD.

**Severidad:** Alta  
**Tipo de deuda:** Deuda de mapa estructural  
**Acción recomendada:** Crear `Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4.md`.  
**Prioridad PR #9:** Alta.

---

### 5.4 Ruta `Base_Conocimiento_SDD` como posible excepción

La ruta:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/
```

cumple función útil, pero puede entrar en tensión con convenciones anteriores como:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Perfil_Operativo/Bases_Conocimiento/
```

o con rutas de conocimiento común.

**Severidad:** Media-alta  
**Tipo de deuda:** Deuda de nomenclatura y colocación documental  
**Acción recomendada:** Evaluar caso por caso mediante decisión registrada. No renombrar automáticamente.  
**Criterio:** Si se conserva como excepción, debe declararse como paquete formativo SDD del PH, con obligación de transferibilidad hacia IT y AT.

---

### 5.5 Riesgo de proliferación en documentación activa

`18_DOCUMENTACION_ACTIVA/` contiene bitácoras, cierres, compendios, manifest, prompts, primers, decisiones, WIKI_SYNC y reportes. La función es legítima, pero requiere fronteras más claras.

**Severidad:** Alta  
**Tipo de deuda:** Deuda de memoria operativa  
**Acción recomendada:** Definir diferencias entre bitácora, cierre, compendio, manifiesto, prompt de continuidad, deuda y decisión.  
**Prioridad PR #9:** Alta.

---

### 5.6 Necesidad de sistema formal de deuda estructural

El avance hacia v1.0.0 requiere un tablero documental de deuda con ID, ruta, riesgo, severidad, decisión requerida, responsable lógico, versión objetivo y estado.

**Severidad:** Alta  
**Tipo de deuda:** Deuda de mantenimiento  
**Acción recomendada:** Crear `Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md`.  
**Ruta recomendada:** `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/`.

---

### 5.7 Necesidad de gate constitucional completo

La Constitución SDD ya establece autoridad de bloqueo. La auditoría recomienda convertir esa autoridad en gate operacional explícito antes de diseño, implementación, testing o despliegue.

**Severidad:** Bloqueante para implementación  
**Tipo de deuda:** Deuda de control de avance  
**Acción recomendada:** Crear o actualizar checklist/gate en `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/`.

---

### 5.8 SDD como nomenclatura oficial

La operación debe usar SDD exclusivamente. Cualquier aparición de SSD debe tratarse como deuda terminológica.

**Severidad:** Media  
**Tipo de deuda:** Deuda terminológica  
**Acción recomendada:** Registrar regla en protocolo y revisar documentos futuros.

---

## 6. Clasificación de deuda estructural

| ID preliminar | Deuda | Severidad | Ruta afectada | Acción recomendada |
|---|---|---|---|---|
| DE-PR9-001 | README raíz desactualizado | Alta | `README.md` | Actualizar estado del proyecto. |
| DE-PR9-002 | README genéricos en zonas críticas | Alta | Carpetas críticas | Crear plantilla y actualizar progresivamente. |
| DE-PR9-003 | Falta de mapa real post-PR8 | Alta | `00_CONTROL_MAESTRO/Mapas_Repositorio/` | Crear mapa real actualizado. |
| DE-PR9-004 | Ruta `Base_Conocimiento_SDD` no normalizada | Media-alta | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/` | Decisión caso por caso. |
| DE-PR9-005 | Fronteras débiles en documentación activa | Alta | `18_DOCUMENTACION_ACTIVA/` | Definir taxonomía operativa. |
| DE-PR9-006 | Falta de tablero de deuda estructural | Alta | `20_MANTENIMIENTO_Y_EVOLUCION/` | Crear registro formal. |
| DE-PR9-007 | Gate constitucional no formalizado como checklist operativo | Bloqueante | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Crear gate constitucional completo. |
| DE-PR9-008 | Ambigüedad SSD/SDD | Media | Todo el repositorio | Usar SDD exclusivamente. |
| DE-PR9-009 | Archivo histórico requiere doble condición | Media | `99_ARCHIVO_HISTORICO/` | Formalizar regla de reemplazo + decisión. |
| DE-PR9-010 | Falta de sistema formal PH-IT-AT | Alta | `05_COMPETENCIAS_Y_PERFILES/` | Crear campos, índice y revisión de cierre. |

---

## 7. Recomendaciones para PR #9

### 7.1 Documentos mínimos del PR #9

```text
15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/
└── Auditoria_Estructural_Cartapacios_AI_StoryLab_1_v0_4_4.md

00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/
└── Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md

00_CONTROL_MAESTRO/Mapas_Repositorio/
└── Mapa_Estructura_Real_Post_PR8_AI_StoryLab_1_v0_4_4.md

00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/
└── Tabla_Ubicacion_Documental_AI_StoryLab_1_v0_4_4.md

18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
└── Decision_Alineacion_Estructural_Pre_PR9_AI_StoryLab_1_v0_4_4.md

20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/
└── Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md
```

### 7.2 Documentos opcionales del PR #9

```text
07_PLANTILLAS_Y_MODELOS/Plantillas_Documentales/
└── Plantilla_README_Cartapacio_AI_StoryLab_1_v0_4_4.md

15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/
└── Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4.md
```

---

## 8. Reglas de intervención sugeridas para PR #9

```text
1. No modificar código funcional.
2. No introducir backend, cloud, autenticación, analíticas ni IA externa.
3. No renombrar carpetas sin decisión registrada.
4. No mover documentos al archivo histórico sin reemplazo canónico y decisión registrada.
5. Crear carpetas nuevas solo si mejoran claridad y quedan justificadas.
6. Usar SDD exclusivamente.
7. Registrar toda deuda estructural.
8. Actualizar mapas, tablas o índices afectados.
9. Mantener PH como piloto con obligación de transferibilidad.
10. No autorizar implementación funcional.
```

---

## 9. Gate constitucional completo recomendado

Antes de pasar a implementación funcional debe existir evidencia de:

```text
[ ] Spec aprobada.
[ ] Arquitectura aprobada.
[ ] Diseño aprobado.
[ ] Threat model.
[ ] Clasificación de datos.
[ ] Política de privacidad aplicable.
[ ] Consentimiento informado y situado.
[ ] Criterios local-first.
[ ] Criterios de aceptación.
[ ] Plan de pruebas.
[ ] Validación humana.
[ ] Impacto en perfiles de usuario.
[ ] Impacto PH-IT-AT.
[ ] Impacto pedagógico.
[ ] Impacto investigativo.
[ ] Revisión de Constitución SDD.
[ ] Deuda estructural revisada.
[ ] Wiki humana actualizada o deuda WIKI_SYNC registrada.
[ ] Mantenimiento previsto.
[ ] Evidencias documentadas.
[ ] Decisión de avance registrada.
```

---

## 10. Dictamen final

AI StoryLab 1 no debe avanzar hacia implementación funcional sin antes cerrar una operación de alineación estructural. La fase v0.4.4 ya consolidó una Constitución SDD con autoridad documental suficiente para bloquear avances prematuros. El siguiente paso debe ser PR #9 como intervención de cartapacios, mapas, deuda, README, protocolo y gates.

**Dictamen:** Procede crear rama `v0.4.4-structural-audit` y preparar PR #9 con alcance exclusivamente documental y estructural.

**Condición:** El PR #9 no debe autorizar implementación funcional.

---

## 11. Próxima acción

1. Crear rama `v0.4.4-structural-audit`.
2. Incorporar esta auditoría.
3. Incorporar el protocolo de manejo de cartapacios.
4. Crear mapa real post-PR8.
5. Crear tabla de ubicación documental v0.4.4.
6. Crear registro de deuda estructural.
7. Crear decisión de alineación pre-PR9.
8. Actualizar README críticos de forma progresiva.
9. Abrir PR #9 como Draft PR documental.

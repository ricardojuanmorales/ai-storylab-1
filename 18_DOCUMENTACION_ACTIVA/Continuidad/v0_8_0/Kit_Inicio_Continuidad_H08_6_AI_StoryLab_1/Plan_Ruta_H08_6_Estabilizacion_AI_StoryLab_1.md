# Plan de Ruta H08-6: Estabilización Integral de AI StoryLab 1

```yaml
project: AI StoryLab 1
version_line: v0.8.0
major_hito: H08-6
document_role: plan_de_ruta_operacional
document_status: APROBADO_PARA_H08_6
approval_effect: H08_6_0_activation_authorized
canonical_entry_baseline: ae93ccef94506724559b8df7b1ccdfeb0489a927
entry_branch: main
previous_hito: H08-5
previous_PR: 62
previous_PR_state: MERGED
implementation_started: false
H08_6_0_started: authorized_pending_first_commit
branch_created: pending_machine_execution
draft_PR_created: pending_machine_execution
```

## 0. Condición de este documento

Este documento presenta la planificación integral propuesta para H08-6. Su propósito es permitir una revisión humana completa antes de activar el hito.

La versión sometida a revisión permaneció en estado `PROPUESTA_PARA_APROBACION_HUMANA`. La aprobación humana explícita del 23 de julio de 2026 transforma este documento en ruta autorizada para H08-6.0:

- no autoriza implementación;
- no autoriza crear la rama;
- no autoriza abrir el Draft PR;
- no autoriza realizar el primer commit;
- no sustituye la decisión humana;
- no abre H08-6.1 ni ningún bloque técnico posterior.

Una vez aprobado humanamente, este mismo archivo deberá incorporarse, sin alterar silenciosamente su contenido aprobado, al primer commit documental de H08-6.0 junto con el kit de inicio, el acta de activación y la evidencia de continuidad correspondiente.

---

# 1. Síntesis para entendimiento humano

H08-6 es el último gran hito de implementación incremental de v0.8.0 antes de `GATE-V08-CLOSE`.

Su función no es inventar capacidades nuevas. Su función es estabilizar la experiencia integrada que ya existe:

```text
perfil y proyecto local
→ M1 Intención creadora
→ M2 Arquitectura narrativa
→ M3 Producción multimodal
→ M4 Curaduría y cierre
→ evidencias, reflexiones y decisiones humanas
→ portafolio ordenado y reversible
→ exportación revisable y confirmada
→ importación no confiable mediante staging
→ importación como copia
→ roundtrip por equivalencia semántica
→ recuperación local
```

H08-6 deberá responder una pregunta central:

> ¿Está el prototipo funcional integrado de v0.8.0 suficientemente accesible, seguro, privado, resiliente, reproducible, documentado y libre de deuda crítica como para ser sometido a `GATE-V08-CLOSE`?

La respuesta no será inferida por la IA ni por una ejecución automática. Se construirá mediante evidencia técnica, análisis estructurado, revisión PH-IT-AT, checkpoint independiente y decisión humana.

---

# 2. Estado canónico de entrada

## 2.1 Repositorio y baseline

```yaml
repository: ricardojuanmorales/ai-storylab-1
default_branch: main
canonical_merge_commit: ae93ccef94506724559b8df7b1ccdfeb0489a927
main_status_at_activation_preflight: IDENTICAL_TO_CANONICAL_BASELINE
```

## 2.2 Estado heredado de H08-5

```yaml
H08_5:
  documentary_lifecycle: CLOSED
  technical_result: PASS
  governance_result: PASS
  human_checkpoint: PASS
  blocking_findings: 0

PR_62:
  state: CLOSED
  merged: true
  merge_commit: ae93ccef94506724559b8df7b1ccdfeb0489a927
```

## 2.3 Baseline funcional heredado

H08-6 recibe como capacidades protegidas:

- M1, M2, M3 y M4 funcionales;
- motor reutilizable de misiones;
- progreso editable, reabrible y recuperable;
- persistencia local y recuperable;
- schemas versionados;
- migración no destructiva dentro de la línea autorizada;
- errores tipados;
- portafolio ordenado y reversible;
- exportación local con preview y confirmación;
- importación tratada como entrada no confiable;
- staging previo a mutación;
- importación como copia;
- privacidad por allowlist;
- checksum e integridad;
- roundtrip por equivalencia semántica;
- recuperación después de remontar;
- datos sintéticos;
- experiencia offline;
- ausencia de backend, autenticación, telemetría y publicación automática.

## 2.4 Baseline de verificación acumulado

La evidencia más reciente de H08-5 establece:

```yaml
focused_test_files: 15
focused_tests: 58
full_test_files: 48
full_tests: 247
CI_Node_22: PASS
CI_Node_24: PASS
blocking_findings: 0
```

Estos valores son el punto de comparación inicial. H08-6 podrá ampliar pruebas, pero no deberá degradar las capacidades ni reducir silenciosamente la cobertura existente.

---

# 3. Fundamento epistemológico y estratégico

## 3.1 Decisión longitudinal vigente

La ruta hacia v1.0.0 ya fue acordada:

```text
v0.8.0  Implementación incremental y prototipo funcional integrado
v0.9.0  Validación, endurecimiento, documentación y release candidate
v1.0.0  Publicación estable, mantenimiento y gobernanza post-release
```

Dentro de v0.8.0:

```text
H08-1   Baseline técnico
H08-1A  Implementation Readiness
H08-2   Primera vertical slice
H08-3   Persistencia, schemas y recuperación
H08-4   Arco funcional M1-M4
H08-5   Portafolio y roundtrip
H08-6   Estabilización integral
H08-6A  Checkpoint independiente
GATE-V08-CLOSE
```

## 3.2 Corrección de interpretación

H08-6 no se encuentra pendiente de propósito. Su propósito estratégico es canónico:

```yaml
H08_6:
  role: estabilizacion_integral
  position: ultimo_hito_de_implementacion_v0_8
  destination: evidencia_para_GATE_V08_CLOSE
```

Lo pendiente de decisión humana es su operacionalización exacta:

- orden interno;
- criterios de aceptación;
- evidencia requerida;
- tratamiento de deuda;
- clasificación entre reparación y expansión;
- gates internos;
- condiciones de checkpoint;
- recomendación final.

## 3.3 Principio de no expansión

H08-6 no será una fase de crecimiento funcional encubierto.

Se permite:

- corregir defectos;
- endurecer controles;
- mejorar accesibilidad;
- mejorar mensajes y comprensión;
- ampliar pruebas;
- actualizar documentación activa;
- eliminar deuda técnica delimitada;
- optimizar rendimiento con evidencia;
- mejorar resiliencia y reproducibilidad;
- corregir incoherencias de versionado y trazabilidad.

No se permite sin una nueva decisión humana:

- añadir una misión nueva;
- cambiar el modelo pedagógico;
- crear una Vista del Facilitador;
- añadir backend, autenticación o nube;
- incorporar IA embebida;
- añadir telemetría o analíticas;
- introducir datos reales;
- habilitar publicación automática;
- crear una galería pública;
- añadir colaboración sincrónica;
- rediseñar de forma sustantiva la experiencia central;
- ampliar schemas para capacidades nuevas no incluidas en v0.8.0.

---

# 4. Objetivo general de H08-6

Estabilizar el prototipo funcional integrado de AI StoryLab 1 v0.8.0 y producir evidencia suficiente, trazable y revisable para que el humano pueda decidir si procede someterlo a `GATE-V08-CLOSE`.

## 4.1 Resultados esperados

```yaml
H08_6_exit_candidate:
  integrated_experience: PRESERVED_AND_VERIFIED
  accessibility_baseline: VERIFIED
  security_baseline: VERIFIED
  privacy_baseline: VERIFIED
  untrusted_import_surface: HARDENED
  performance: CHARACTERIZED
  resilience: VERIFIED
  reproducibility: VERIFIED
  dependency_state: AUDITED
  active_documentation: CURRENT
  versioning_and_traceability: CONSISTENT
  critical_debt: ZERO_OR_EXPLICITLY_ACCEPTED
  PH_IT_AT_review: COMPLETE
  independent_checkpoint: COMPLETE
  gate_recommendation: READY_OR_NOT_READY
```

## 4.2 No resultado

H08-6 no declara por sí solo:

- v0.8.0 cerrada;
- v0.9.0 abierta;
- release candidate;
- v1.0.0 publicable;
- autorización de publicación;
- aceptación de deuda crítica;
- aprobación del gate.

---

# 5. Principios operacionales

## 5.1 Agencia humana

Toda decisión sobre propósito, alcance, aceptación, deuda, publicación, Ready, merge y transición de fase pertenece al humano.

## 5.2 Integración humano, IA y máquina

El protocolo busca optimizar una cooperación asimétrica y verificable:

```text
humano orienta y decide
→ IA estructura, analiza y redacta
→ máquina ejecuta y verifica
→ IA sintetiza la evidencia
→ humano interpreta y acepta o rechaza
→ documentación preserva la decisión
```

## 5.3 Evidencia antes de afirmación

No se declarará una capacidad estabilizada por inspección superficial. Cada afirmación relevante deberá vincularse con una o más evidencias:

- prueba automatizada;
- auditoría;
- build;
- medición;
- recorrido humano;
- matriz de trazabilidad;
- documento de decisión;
- checkpoint independiente.

## 5.4 Reparación frente a expansión

```yaml
repair:
  definition: correccion_necesaria_para_cumplir_el_alcance_ya_autorizado
  may_resume_same_scope: true

scope_expansion:
  definition: capacidad_nueva_cambio_sustantivo_o_nueva_obligacion_de_producto
  requires_new_human_decision: true
```

## 5.5 Preservación histórica

Los documentos históricos no se reescribirán para parecer actuales. H08-6 distinguirá:

- documento histórico preservado;
- documento activo que requiere actualización;
- identificador técnico antiguo pero todavía funcional;
- identificador técnico que produce confusión operacional y debe corregirse.

---

# 6. Distribución de autoridad

| Actor | Autoridad | Responsabilidad en H08-6 |
|---|---|---|
| Humano | propósito, interpretación, alcance, aceptación, deuda, publicación, Ready, merge y próxima fase | aprobar este plan, certificar H08-6.0, resolver expansiones, emitir veredictos |
| IA | memoria estructural, análisis, alternativas, diagnóstico, redacción y síntesis | mantener continuidad, preparar contratos, analizar evidencia, distinguir hechos e inferencias |
| Máquina | comandos, Git, pruebas, hashes, CI, mediciones, detención y recuperación | ejecutar verificaciones, registrar evidencia y detenerse ante condiciones no autorizadas |
| PH | propósito humano y pedagógico | revisar agencia, lenguaje, reflexión, competencias y experiencia |
| IT | integridad técnica | revisar arquitectura, contratos, pruebas, seguridad y mantenibilidad |
| AT | accesibilidad y tecnologías de apoyo | revisar teclado, foco, semántica, carga cognitiva y adaptaciones |

Los comentarios de PR se prepararán con IA, se revisarán humanamente y se publicarán únicamente de forma manual.

---

# 7. Arquitectura integral de H08-6

```text
H08-6.0 · Activación y certificación humana de la arquitectura integral
H08-6.1 · Baseline integrado y auditoría de brechas
H08-6.2 · Accesibilidad y experiencia perceptual
H08-6.3 · Seguridad, privacidad e importación desconfiada
H08-6.4 · Rendimiento, resiliencia y reproducibilidad
H08-6.5 · Documentación, versionado y trazabilidad
H08-6.6 · Regresión integral y revisión PH-IT-AT
H08-6A  · Checkpoint independiente
GATE-V08-CLOSE · Decisión humana separada
```

Cada identificador representa un hito consolidado. Los artefactos internos son evidencia del hito, no microhitos independientes.

---

# 8. H08-6.0: Activación y certificación humana

## 8.1 Propósito

Activar formalmente H08-6 mediante una sola unidad documental y de gobernanza que integre:

- kit de inicio verificado;
- transferencia simétrica H08-5 a H08-6;
- este plan de ruta;
- alcance y fronteras;
- arquitectura integral H08-6;
- protocolo efectivo;
- certificación humana;
- autorización para rama, primer commit y único Draft PR.

## 8.2 Naturaleza

```yaml
H08_6_0:
  type: consolidated_documentary_governance_hito
  functional_changes: prohibited
  human_certification: constitutive
  checkpoint_separate_from_hito: false
```

La certificación humana no es un microhito posterior. Es el acto que completa H08-6.0.

## 8.3 Entradas

- `Kit_Inicio_Continuidad_H08_6_AI_StoryLab_1.zip`;
- baseline `main` en `ae93ccef94506724559b8df7b1ccdfeb0489a927`;
- atestación post-merge H08-5;
- Protocolo de Trabajo v3.1;
- Bitácora de Evolución del Protocolo v3.1;
- cierres y transferencia de H08-5;
- planes rectores de v0.8.0 a v1.0.0;
- este plan de ruta aprobado humanamente.

## 8.4 Actividades consolidadas

Como una sola acción de activación:

1. confirmar integridad y autoridad del kit;
2. confirmar baseline y merge;
3. incorporar la interpretación corregida de H08-6;
4. ratificar la arquitectura H08-6.0 a H08-6A;
5. ratificar alcance y no alcance;
6. ratificar distribución de autoridad;
7. ratificar protocolo efectivo;
8. emitir certificación humana;
9. autorizar rama, primer commit documental y Draft PR.

Estas actividades no se convierten en subfases independientes.

## 8.5 Productos

El primer commit deberá incluir como mínimo:

- kit de inicio preservado;
- este plan de ruta aprobado;
- acta de activación H08-6.0;
- decisión humana de certificación;
- transferencia simétrica H08-5 a H08-6;
- protocolo efectivo de H08-6;
- manifiesto y checksums de la activación;
- registro de riesgos y reservas iniciales;
- matriz inicial de continuidad.

## 8.6 Primer commit

```yaml
first_commit:
  purpose: kit_and_activation_only
  functional_changes: prohibited
  candidate_subject: "docs(h08-6): activate stabilization plan and continuity kit"
```

## 8.7 Criterios de salida

H08-6.0 se considera completo cuando:

- el humano aprueba este plan;
- el kit y la activación quedan integrados documentalmente;
- la arquitectura completa queda certificada;
- la rama nace desde el baseline canónico;
- se publica el primer commit exclusivamente documental;
- CI del primer commit pasa;
- se abre un único Draft PR para todo H08-6;
- el cuerpo inicial del PR refleja alcance y fronteras;
- H08-6.1 permanece cerrado hasta autorización humana separada.

---

# 9. H08-6.1: Baseline integrado y auditoría de brechas

## 9.1 Propósito

Establecer una fotografía verificable del sistema integrado y determinar con precisión qué debe estabilizarse.

## 9.2 Pregunta rectora

> ¿Cuál es la distancia real entre el estado integrado heredado de H08-5 y los criterios de cierre de v0.8.0?

## 9.3 Actividades

- instalación limpia con lockfile;
- verificación en los entornos Node soportados;
- ejecución de `npm run verify`;
- ejecución de suite completa;
- inventario de módulos y superficies;
- inventario de pruebas y auditorías;
- inventario de documentos activos;
- comparación contra criterios de cierre de v0.8;
- mapa de deuda técnica y documental;
- clasificación inicial de riesgos;
- definición de presupuesto y mediciones de rendimiento;
- inspección de cobertura de accesibilidad, seguridad y privacidad;
- identificación de gaps sin corregirlos silenciosamente.

## 9.4 Productos

- informe de baseline integrado;
- matriz de brechas v0.8;
- inventario de deuda;
- registro inicial de riesgos;
- mapa de pruebas existentes;
- recomendación de prioridades para H08-6.2 a H08-6.5.

## 9.5 Evidencia mínima

```yaml
H08_6_1_evidence:
  clean_install: PASS
  typecheck: PASS
  build: PASS
  architecture_audit: PASS
  secrets_audit: PASS
  privacy_audit: PASS
  vertical_slice_audit: PASS
  full_test_suite: PASS
  Node_22_CI: PASS
  Node_24_CI: PASS
  gap_matrix: COMPLETE
  debt_inventory: COMPLETE
```

## 9.6 Frontera

H08-6.1 diagnostica. Solo podrá incluir reparaciones indispensables para completar el propio diagnóstico, siempre documentadas como tales.

## 9.7 Criterio de salida

El humano acepta que la matriz de brechas representa adecuadamente el estado del proyecto y autoriza el siguiente hito.

---

# 10. H08-6.2: Accesibilidad y experiencia perceptual

## 10.1 Propósito

Verificar y mejorar la capacidad de completar el arco M1-M4, portafolio y transferencia mediante una experiencia clara, accesible y no punitiva.

## 10.2 Alcance

- navegación por teclado;
- orden de tabulación;
- foco visible y persistente;
- restauración de foco tras diálogos y errores;
- semántica estructural;
- etiquetas y nombres accesibles;
- mensajes de error;
- estados de carga y confirmación;
- contraste;
- reducción de movimiento cuando aplique;
- carga cognitiva;
- claridad de instrucciones;
- lenguaje de preview y confirmación;
- comprensión de copia importada;
- comprensión de checksum y equivalencia semántica;
- comportamiento perceptual del selector de archivos;
- recorrido completo con tecnologías de apoyo cuando la infraestructura lo permita.

## 10.3 Criterios de aceptación

- el flujo central puede completarse mediante teclado;
- ninguna pérdida de foco impide continuar;
- errores y confirmaciones son comprensibles;
- el usuario distingue original y copia importada;
- la exportación nunca parece automática;
- la importación nunca parece sobrescribir silenciosamente;
- ningún defecto de accesibilidad bloquea el arco completo;
- las correcciones conservan agencia y lenguaje no punitivo.

## 10.4 Evidencia

- pruebas automatizadas focalizadas;
- auditoría semántica;
- recorrido humano documentado;
- matriz de hallazgos y reparaciones;
- evidencia PH y AT;
- regresión de flujos afectados.

## 10.5 Frontera

No se rediseñará el modelo pedagógico ni se añadirá una nueva experiencia de producto. Los cambios deberán ser estabilización, claridad o reparación.

---

# 11. H08-6.3: Seguridad, privacidad e importación desconfiada

## 11.1 Propósito

Endurecer las superficies sensibles sin alterar el modelo local-first ni la agencia humana.

## 11.2 Superficies prioritarias

- parsing de paquetes;
- límites de tamaño;
- profundidad y cardinalidad;
- contenido inesperado;
- prototype pollution cuando aplique;
- schema y compatibilidad;
- checksum;
- allowlist de exportación;
- exclusión de reflexiones privadas;
- staging previo a persistencia;
- confirmación humana;
- importación como copia;
- rollback y no mutación ante fallo;
- nombres y textos malformados;
- exposición de detalles internos en errores;
- dependencia de red igual a cero;
- inexistencia de telemetría;
- secretos y configuraciones sensibles;
- auditoría de dependencias.

## 11.3 Criterios de aceptación

- ningún paquete inválido altera el estado;
- toda importación se valida antes de persistir;
- el original permanece intacto;
- el contenido privado no se exporta;
- los errores son seguros y comprensibles;
- payloads fuera de límites son rechazados;
- no se introduce red;
- no se introduce publicación;
- no se introduce identificación real;
- toda corrección queda trazada a riesgo y prueba.

## 11.4 Evidencia

- pruebas adversariales;
- pruebas de invariantes;
- auditoría de privacidad;
- auditoría de secretos;
- auditoría de red;
- matrices de allowlist y denylist;
- evidencia de rollback;
- revisión IT;
- registro de riesgos residuales.

## 11.5 Frontera

Una evolución de schema que introduzca nuevas capacidades se considera expansión y requiere decisión humana. Una corrección mínima para proteger el contrato existente puede permanecer en H08-6.3.

---

# 12. H08-6.4: Rendimiento, resiliencia y reproducibilidad

## 12.1 Propósito

Caracterizar y estabilizar el comportamiento local del sistema, reducir sorpresas ambientales y demostrar reproducibilidad.

## 12.2 Alcance

- instalación limpia;
- dependencias declaradas;
- lockfile;
- Node 22 y Node 24;
- build reproducible;
- determinismo de pruebas;
- tiempos de operaciones críticas;
- tamaño de build;
- proyectos sintéticos de mayor complejidad;
- paquetes sintéticos cercanos a límites;
- errores de cuota;
- corrupción y recuperación;
- fallos durante persistencia;
- consistencia de índices;
- remontaje;
- scripts portables;
- compatibilidad con Bash de macOS cuando aplique;
- normalización de logs;
- ausencia de dependencias implícitas en `node_modules`;
- comportamiento del selector de archivos entre navegadores, dentro de la infraestructura disponible.

## 12.3 Criterios de aceptación

- una instalación limpia ejecuta verificación completa;
- CI pasa en los entornos soportados;
- no existen dependencias implícitas;
- las operaciones principales permanecen dentro de presupuestos aprobados;
- corrupción y cuota producen errores controlados;
- la recuperación conserva datos válidos;
- los scripts son reproducibles;
- las optimizaciones no degradan accesibilidad ni seguridad.

## 12.4 Evidencia

- mediciones antes y después;
- reporte de build;
- pruebas de estrés sintético proporcional;
- pruebas de cuota y corrupción;
- evidencia de instalación limpia;
- CI;
- auditoría de dependencias;
- registro de decisiones de optimización.

## 12.5 Frontera

No se permiten refactors masivos ni optimizaciones especulativas sin una brecha demostrada.

---

# 13. H08-6.5: Documentación, versionado y trazabilidad

## 13.1 Propósito

Hacer que la documentación activa describa con precisión el producto realmente existente y su relación con v0.8, v0.9 y v1.0.

## 13.2 Alcance

- actualizar READMEs activos;
- preservar documentos históricos;
- reconciliar estado actual de H08;
- reconciliar metadatos de paquete;
- distinguir versión de aplicación, schema y documentación;
- revisar descripciones todavía centradas en H08-2;
- revisar nombres operacionales heredados;
- actualizar comandos y mapa de pruebas;
- documentar instalación y ejecución;
- documentar privacidad;
- documentar seguridad;
- documentar accesibilidad;
- documentar exportación e importación;
- documentar límites de no alcance;
- completar matrices SDD;
- actualizar deuda;
- preparar transferencia documental a v0.9.

## 13.3 Criterios de aceptación

- ningún documento activo central presenta H08-3 o H08-2 como estado vigente;
- la documentación diferencia historia y estado actual;
- los comandos documentados funcionan;
- las versiones se interpretan sin ambigüedad;
- las capacidades y límites coinciden con el producto;
- toda feature central posee trazabilidad desde necesidad hasta evidencia;
- la deuda crítica no permanece invisible.

## 13.4 Evidencia

- índice de documentos actualizados;
- matriz de vigencia;
- auditoría de enlaces y comandos;
- matriz SDD;
- changelog;
- registro de decisiones;
- revisión humana de claridad.

## 13.5 Frontera

No se reescriben cierres históricos ni se altera evidencia pasada. Se corrigen únicamente fuentes activas o índices de vigencia.

---

# 14. H08-6.6: Regresión integral y revisión PH-IT-AT

## 14.1 Propósito

Demostrar que las estabilizaciones de H08-6.2 a H08-6.5 no degradaron la experiencia ni sus principios.

## 14.2 Recorrido integral

```text
crear o recuperar proyecto
→ recorrer M1
→ recorrer M2
→ recorrer M3
→ recorrer M4
→ editar y reabrir
→ generar evidencias
→ registrar reflexión
→ ejercer decisiones humanas
→ ordenar y retirar elementos del portafolio
→ revisar preview
→ confirmar exportación
→ exportar
→ importar mediante staging
→ confirmar importación como copia
→ verificar equivalencia semántica
→ remontar
→ recuperar original y copia
```

## 14.3 Revisión PH

- propósito;
- agencia;
- lenguaje;
- reflexión;
- competencias;
- no automatización de decisiones creativas;
- claridad de reversibilidad;
- preservación de privacidad.

## 14.4 Revisión IT

- arquitectura;
- contratos;
- pruebas;
- errores;
- seguridad;
- privacidad;
- mantenibilidad;
- dependencias;
- reproducibilidad;
- deuda.

## 14.5 Revisión AT

- teclado;
- foco;
- semántica;
- etiquetas;
- mensajes;
- contraste;
- carga cognitiva;
- adaptaciones;
- recorrido completo.

## 14.6 Evidencia mínima

```yaml
H08_6_6_evidence:
  full_regression: PASS
  M1_M4_cycle: PASS
  persistence_recovery: PASS
  portfolio_reversibility: PASS
  export_preview_confirmation: PASS
  untrusted_import_staging: PASS
  import_as_copy: PASS
  semantic_roundtrip: PASS
  offline_guard: PASS
  PH_review: COMPLETE
  IT_review: COMPLETE
  AT_review: COMPLETE
  critical_findings: ZERO_OR_HUMAN_DISPOSITION
```

## 14.7 Criterio de salida

Se produce un candidato de cierre técnico y documental para H08-6A. H08-6.6 no emite el veredicto independiente.

---

# 15. H08-6A: Checkpoint independiente

## 15.1 Propósito

Separar:

```text
evidencia técnica
≠
recomendación de la IA
≠
veredicto humano
```

## 15.2 Independencia

H08-6A deberá ejecutarse sobre un head funcional congelado. No incluirá cambios funcionales. Cualquier hallazgo que requiera reparación devuelve el trabajo al alcance autorizado correspondiente.

## 15.3 Resultados técnicos posibles

```text
PASS_CANDIDATE
PASS_WITH_RESERVATIONS_CANDIDATE
CHANGES_REQUIRED
NOT_READY
```

## 15.4 Veredictos humanos posibles

```text
PASS
PASS_WITH_ACCEPTED_RESERVATIONS
RETURN_FOR_REPAIR
REJECT
```

## 15.5 Evidencia

- head funcional identificado;
- instalación limpia;
- suite focalizada;
- suite completa;
- CI;
- auditorías;
- recorrido humano;
- matrices PH-IT-AT;
- deuda;
- riesgos;
- recomendación separada;
- decisión humana separada.

## 15.6 Efecto

H08-6A puede recomendar someter v0.8.0 a `GATE-V08-CLOSE`. No ejecuta ese gate automáticamente.

---

# 16. GATE-V08-CLOSE

## 16.1 Pregunta

> ¿El prototipo funcional integrado de v0.8.0 demuestra una experiencia completa, local-first, recuperable, accesible, segura, privada, trazable y suficientemente estable para entrar a la fase de validación v0.9.0?

## 16.2 Criterios

- experiencia completa con datos sintéticos;
- perfil mínimo local;
- M1-M4 estables;
- persistencia recuperable;
- portafolio curado y reversible;
- roundtrip validado;
- schemas versionados;
- pruebas unitarias e integración;
- manejo de errores;
- accesibilidad verificada;
- seguridad y privacidad verificadas;
- documentación técnica actual;
- trazabilidad SDD;
- deuda visible;
- revisión PH-IT-AT;
- checkpoint independiente;
- ausencia de datos reales;
- ausencia de release estable prematuro.

## 16.3 Resultados

```text
APPROVE_V09_ENTRY_PREPARATION
APPROVE_WITH_RESERVATIONS
RETURN_TO_H08_6_REPAIR
DO_NOT_CLOSE_V08
```

El gate es una decisión humana independiente del cierre documental de H08-6.

---

# 17. Arquitectura de sesiones, commits y PR

## 17.1 Un solo Draft PR

H08-6 utilizará:

```yaml
PR_model:
  major_hito: H08_6
  draft_PR_count: 1
  conversations: multiple_allowed
  branch: one_for_entire_hito
```

## 17.2 Primera sesión

H08-6.0:

- primer commit exclusivamente documental;
- kit y activación;
- este plan aprobado;
- ningún cambio funcional.

## 17.3 Sesiones técnicas posteriores

Cada sesión comenzará en una conversación humana nueva y deberá:

1. cargar el kit vigente;
2. confirmar baseline, rama y Draft PR;
3. reconstruir transferencia;
4. ratificar el alcance ya autorizado;
5. ejecutar trabajo delimitado;
6. publicar commits intermedios cuando corresponda;
7. cerrar con un último commit exclusivamente documental;
8. confirmar CI;
9. generar fuera del repositorio la atestación, próximo ZIP y prompt externo.

## 17.4 Último commit de cada sesión

```yaml
session_last_commit:
  type: documentary_closure
  functional_changes: prohibited
  includes:
    - state
    - evidence
    - decisions
    - risks
    - debt
    - symmetric_transfer
    - next_session_boundaries
```

## 17.5 Comentarios del PR

- IA prepara borradores;
- humano revisa;
- humano publica manualmente;
- ninguna automatización publica comentarios;
- Ready y merge permanecen bajo decisión humana.

---

# 18. Plan de pruebas transversal

## 18.1 Unitarias

- invariantes;
- transiciones;
- validadores;
- schemas;
- migraciones;
- decisiones;
- curaduría;
- errores;
- límites de importación;
- privacidad.

## 18.2 Contrato

- puertos;
- adapters;
- schemas;
- fixtures;
- feature flags;
- import/export package;
- persistencia;
- recuperación.

## 18.3 Integración

- arco M1-M4;
- portafolio;
- recuperación;
- exportación;
- importación;
- roundtrip;
- remontaje;
- corrupción;
- cuota.

## 18.4 Presentación y accesibilidad

- teclado;
- foco;
- semántica;
- etiquetas;
- mensajes;
- preview;
- confirmaciones;
- selector de archivos;
- copia importada;
- reducción de movimiento.

## 18.5 Seguridad y privacidad

- allowlist;
- payloads malformados;
- payloads grandes;
- profundidad;
- contenido inesperado;
- prototype pollution cuando aplique;
- checksum;
- staging;
- rollback;
- no red;
- no telemetría.

## 18.6 Rendimiento y resiliencia

- build;
- tiempos de operaciones;
- proyectos sintéticos complejos;
- paquetes cercanos a límites;
- recuperación;
- instalación limpia;
- determinismo;
- compatibilidad ambiental.

## 18.7 Regresión

La suite completa heredada es obligatoria después de cada reparación que afecte contratos, persistencia, presentación, portafolio o transferencia.

---

# 19. Gestión de defectos, deuda y riesgos

## 19.1 Clasificación de defectos

```yaml
severity:
  critical:
    definition: perdida_de_datos_privacidad_seguridad_o_imposibilidad_de_completar_flujo
    blocks_exit: true

  high:
    definition: degradacion_grave_de_capacidad_central
    blocks_exit: normally_true

  medium:
    definition: defecto_relevante_con_workaround
    disposition: repair_or_human_acceptance

  low:
    definition: mejora_no_bloqueante
    disposition: document_or_repair
```

## 19.2 Deuda

Toda deuda deberá incluir:

- descripción;
- origen;
- impacto;
- fase;
- riesgo;
- razón para no resolver;
- control temporal;
- fecha o gate de reconsideración;
- aceptación humana cuando corresponda.

## 19.3 Riesgos iniciales heredados

- diferencias perceptuales de foco y lenguaje;
- selector de archivos entre navegadores;
- comprensión de copia, checksum y equivalencia semántica;
- evolución futura de schemas;
- documentación activa desactualizada;
- metadatos de paquete heredados;
- nombres de workflows y scripts ligados a hitos antiguos;
- dependencia ambiental oculta;
- scripts no portables;
- consistencia eventual de GitHub;
- confusión entre checkout canónico y área de transferencia.

---

# 20. Proyección de v0.9.0

## 20.1 Cambio de pregunta

```text
v0.8.0: ¿la experiencia integrada funciona y está estabilizada?
v0.9.0: ¿el producto está validado, endurecido, documentado y empaquetado como release candidate?
```

## 20.2 Alcance general previsto

- gate de apertura;
- plan de validación;
- suite estable;
- validación entre entornos soportados;
- accesibilidad ampliada;
- usabilidad autorizada;
- seguridad;
- privacidad;
- dependencias;
- compatibilidad;
- empaquetado;
- documentación de usuario;
- guía técnica;
- resolución de defectos críticos;
- aceptación explícita de deuda;
- release candidate;
- `GATE-V09-RC`.

## 20.3 No alcance automático

- marketplace publicado;
- backend;
- autenticación;
- datos reales;
- investigación con participantes;
- capacidades funcionales mayores.

---

# 21. Proyección de v1.0.0

## 21.1 Función

Publicar y gobernar lo ya validado.

```text
release candidate aprobado
→ build reproducible
→ artefacto final
→ versión y tag
→ release notes
→ documentación
→ plan de mantenimiento
→ gobernanza post-release
→ publicación estable
```

## 21.2 Regla

v1.0.0 no será una fase para añadir capacidades mayores.

## 21.3 Resultado

```yaml
v1_0_0:
  nature: ecosistema_minimo_estable
  central_product: aplicacion_local_first
  experience: completa
  maintenance: formalized
  post_release_governance: active
  backend: false
  authentication: false
  mandatory_network: false
  embedded_AI: false
  automatic_evidence_publication: false
```

---

# 22. Fuentes canónicas que rigen este plan

Este documento deberá mantenerse subordinado a las siguientes fuentes:

1. `19_IMPLEMENTACION_Y_DESPLIEGUE/Roadmap/Plan_Desarrollo_Integral_Hacia_v1_0_0_AI_StoryLab_1.md`
2. `19_IMPLEMENTACION_Y_DESPLIEGUE/Plan_Implementacion/Plan_Desarrollo_v0_8_0_Realineada_AI_StoryLab_1.md`
3. `00_CONTROL_MAESTRO/Estado_Gobernanza_Documental/Decision_Alineacion_v0_8_0_Hacia_v1_0_0_2026_07_16.md`
4. `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/H08_5_Cierre_Final_2026_07_22/`
5. `00_CONTROL_MAESTRO/Protocolos_Operacion/Protocolo_Trabajo_v3_1_AI_StoryLab_1.md`, o su copia vigente incluida en el kit
6. `Bitacora_Evolucion_Protocolo_v3_1_AI_StoryLab_1.md`
7. kit de inicio y continuidad H08-6 verificado
8. decisión humana de aprobación de este plan

En caso de tensión:

```text
decisión humana vigente
→ plan rector hacia v1.0.0
→ decisión de alineación v0.8.0
→ plan de implementación v0.8.0
→ protocolo vigente
→ este plan operacional
→ artefactos derivados
```

---

# 23. Condiciones de aprobación humana

La aprobación de este documento deberá confirmar expresamente:

```yaml
human_approval:
  H08_6_purpose: stabilization
  architecture_H08_6_0_to_H08_6A: approved
  H08_6_0_is_consolidated_hito: true
  first_commit_is_documentary_only: true
  single_draft_PR: true
  major_new_features: prohibited_without_new_decision
  comments_manual_publication: true
  session_closure_documentary_only: true
  independent_checkpoint: required
  GATE_V08_CLOSE_separate: true
```

La autorización breve conservará todas las fronteras contextuales de este plan.

---

# 24. Decisión pendiente

```yaml
decision_status: APPROVED_BY_HUMAN

decision_record: >
  El responsable humano aprobó este Plan de Ruta H08-6 como arquitectura
  operacional de estabilización integral de v0.8.0 y autorizó proceder
  con H08-6.0, incluyendo su incorporación al primer commit documental.

approved_effects:
  - freeze_this_plan_as_approved_route_document
  - prepare_H08_6_0_activation_artifacts
  - authorize_branch_creation_from_canonical_baseline
  - authorize_documentary_first_commit
  - authorize_single_draft_PR
  - keep_H08_6_1_closed_until_separate_human_authorization

approval_boundaries:
  - H08_6_1_remains_closed_until_separate_human_authorization
  - no_functional_changes_in_H08_6_0
  - scope_expansion_requires_new_human_decision
```

---

# 25. Dictamen propuesto

H08-6 debe operar como un puente de estabilización, no como una nueva isla funcional.

Su éxito consistirá en demostrar que las capacidades construidas durante H08-2 a H08-5 pueden sostenerse juntas con accesibilidad, seguridad, privacidad, resiliencia, reproducibilidad, documentación y trazabilidad suficientes.

La máquina aportará evidencia. La IA organizará y explicará esa evidencia. El humano conservará la autoridad para interpretar, aceptar, devolver, cerrar y abrir la siguiente fase.

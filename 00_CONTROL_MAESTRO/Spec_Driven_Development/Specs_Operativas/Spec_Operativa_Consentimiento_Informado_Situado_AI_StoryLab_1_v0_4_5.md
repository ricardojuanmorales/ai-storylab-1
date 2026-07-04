# SPEC-OP-006 : Consentimiento Informado y Situado v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** aprobada para Specs Núcleo con deuda controlada, no implementación  
**Prioridad:** alta  
**Familia:** consentimiento, agencia humana, privacidad por defecto  
**Código documental:** SPEC-OP-006-CONSENTIMIENTO-INFORMADO-SITUADO

> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.

## 1. Ficha YAML operativa

```yaml
spec_candidata:
  nombre: Spec de consentimiento informado y situado
  codigo_documental: SPEC-OP-006-CONSENTIMIENTO-INFORMADO-SITUADO
  proposito: Definir consentimiento contextual por acción, perfil, dato, evidencia, propósito, visibilidad y retiro.
  problema_que_atiende: Evita consentimiento genérico que esconda captura, exportación, inferencia, uso secundario o activación de IA externa.
  experiencia_humana_que_protege: Comprensión, elección, pausa, retirada, control humano, privacidad emocional y cuidado reforzado para menores.
  perfiles_usuario_afectados:
    - estudiante_escuela_superior
    - estudiante_universitario
    - docente
    - investigador
  perfiles_creadores_afectados:
    - PH
    - IT
    - AT
  datos_tocados:
    - decision_consentimiento_conceptual
    - proposito_de_uso
    - alcance_de_visibilidad
    - permiso_de_guardado_local
    - permiso_de_exportacion_manual
    - negativa_o_retiro
  evidencias_tocadas:
    - registro_local_conceptual_de_consentimiento
    - explicacion_de_proposito
    - bitacora_de_decision
    - version_de_texto_de_consentimiento
  rol_de_IA: Ningún uso de IA se presume autorizado. Toda IA futura requiere consentimiento separado, explícito, reversible, comprensible, situado y revisado humanamente.
  riesgos:
    - consentimiento_generico
    - fatiga_de_consentimiento
    - lenguaje_legalista_incomprensible
    - consentimiento_forzado_por_diseno
    - consentimiento_de_menores_sin_cuidado_reforzado
    - imposibilidad_de_retirar_permiso
    - confusion_entre_guardar_y_exportar
  criterios_local_first:
    - consentimiento legible sin conexión
    - decisiones guardables localmente solo si el usuario lo autoriza
    - no sincronización automática
    - no dependencia de cuenta remota
    - retiro conceptual posible antes de compartir o exportar
  consentimiento_requerido:
    - guardar evidencia local
    - convertir proceso en evidencia
    - exportar artefacto
    - compartir con docente o investigador
    - activar cualquier IA futura
    - usar datos para investigación o evaluación formativa
  criterios_de_no_rigidez:
    - lenguaje breve y situado
    - opción de omitir cuando proceda
    - explicación por capas
    - confirmación separada para acciones sensibles
    - no bloquear exploración creativa inicial cuando no se capturen datos
  semilla_arquitectonica: Entidad conceptual ConsentimientoSituado con campos conceptuales accion, proposito, dato, evidencia, perfil_usuario, visibilidad, estado, fecha_local_aproximada, version_texto y retiro. No define almacenamiento real.
  criterios_de_diseno:
    - consentimiento justo antes de la acción sensible
    - texto comprensible por estudiante de escuela superior
    - distinción visible entre crear, guardar, exportar y compartir
    - opción clara de no aceptar sin castigo creativo
    - aviso especial para menores y contextos educativos
  criterios_de_prueba:
    - prueba de comprensión humana
    - prueba de reversibilidad conceptual
    - prueba de separación guardar/exportar/compartir
    - prueba de no coerción
    - revisión PH-IT-AT
  revision_humana: PH revisa agencia y no coerción; IT revisa validez ética y consentimiento para evidencia; AT revisa tono, forma y no rigidez.
  gate_requerido: Gate Constitucional de Preimplementación + Gate de Aprobación Specs Núcleo 1 v0.4.5 + revisión PH-IT-AT
  deuda_generada_o_reducida: Reduce deuda de consentimiento genérico; genera deuda de glosario general, criterios PH, transición entre capas y regla triangular con privacidad y seguridad.
  prioridad: alta
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
```

## 2. Propósito operativo

SPEC-OP-006 define las condiciones documentales mínimas para consentimiento informado y situado en AI StoryLab 1. Su función es impedir que una acción creativa, académica, investigativa o técnica sea tratada como autorizada sin comprensión humana, propósito explícito, posibilidad de no aceptar y condiciones de retiro.

Esta spec no autoriza mecanismos reales de captura, almacenamiento, análisis, exportación, sincronización, identificación, evaluación ni uso de IA. Su función es establecer las condiciones documentales mínimas que cualquier spec posterior deberá respetar antes de tocar datos, evidencias, reflexión, portafolios, investigación, exportación o asistencia algorítmica.

## 3. Alcance

SPEC-OP-006 aplica a toda acción futura de AI StoryLab 1 que implique guardar, marcar como evidencia, vincular reflexión personal, exportar, compartir, investigar, evaluar, activar asistencia de IA o transformar una producción creativa en dato utilizable por otra persona, sistema o proceso institucional.

Esta spec no diseña interfaz, base de datos, flujo técnico, almacenamiento, autenticación, analítica, integración externa ni consentimiento legal formal. Define criterios operativos documentales para que esas decisiones no puedan implementarse ni diseñarse sin revisión posterior, consentimiento situado, análisis de riesgo, criterio local-first y revisión humana PH-IT-AT.

## 4. Definiciones operativas mínimas

**Consentimiento informado y situado:** decisión humana, comprensible, reversible y vinculada a una acción específica. No es una autorización general ni permanente.

**Acción sensible:** cualquier acción que pueda guardar, transformar, exponer, compartir, exportar, analizar, evaluar o reutilizar una creación, reflexión, evidencia o dato de una persona.

**Evidencia:** marca documental o artefacto que permite mostrar, revisar o interpretar un proceso creativo, académico o investigativo. Una creación no se convierte automáticamente en evidencia.

**Exportación:** acción manual mediante la cual una persona decide sacar un artefacto, evidencia, reflexión o resultado fuera del espacio local o privado donde fue creado.

**Compartir:** acción mediante la cual una persona permite que otra persona, grupo, docente, investigador, institución o sistema acceda a un artefacto, evidencia, reflexión o dato.

**Retiro del consentimiento:** posibilidad de detener o revertir una autorización antes de que una acción sensible produzca exportación, compartición, uso secundario, evaluación o investigación.

**Mediación humana:** intervención de una persona responsable, como docente, investigador o facilitador, para explicar, acompañar o revisar una decisión. La mediación no sustituye automáticamente la agencia de quien crea.

## 5. Principios operativos

```text
1. El consentimiento no es una casilla. Es una conversación breve, situada y reversible.
2. Crear no equivale a guardar.
3. Guardar no equivale a exportar.
4. Exportar no equivale a compartir.
5. Compartir no equivale a investigar.
6. Investigar no equivale a evaluar.
7. Ninguna IA futura queda autorizada por consentimiento general.
```

## 6. Capas de consentimiento

| Capa | Pregunta humana | Estado por defecto | Riesgo que controla |
|---|---|---|---|
| Exploración | ¿Puedo crear sin entregar datos? | Sí | captura prematura |
| Guardado local | ¿Quiero conservar esto en este dispositivo o entorno local? | No automático | persistencia no comprendida |
| Evidencia | ¿Quiero marcar esto como evidencia de proceso? | Voluntario | vigilancia pedagógica |
| Reflexión | ¿Quiero vincular mi reflexión a una evidencia? | Privado por defecto | exposición emocional |
| Exportación | ¿Quiero generar una salida controlada? | Acción manual | fuga de datos |
| Compartir | ¿Con quién y para qué se comparte? | Nadie por defecto | uso secundario |
| IA futura | ¿Acepto asistencia de IA bajo estas condiciones? | Bloqueada | inferencia opaca |

## 7. Regla de transición entre capas

Ninguna capa de consentimiento habilita automáticamente la siguiente. La exploración creativa no autoriza guardado; el guardado local no convierte una creación en evidencia; la evidencia no autoriza reflexión vinculada; la reflexión no autoriza exportación; la exportación no autoriza compartir; compartir no autoriza investigación; investigación no autoriza evaluación; y ninguna de estas capas autoriza IA externa.

Cada transición hacia una acción más sensible requiere una explicación breve, situada y comprensible, además de una decisión humana explícita cuando corresponda.

## 8. Regla contra fatiga de consentimiento

El consentimiento situado no debe convertirse en una secuencia excesiva de avisos, casillas o interrupciones. El sistema documental debe distinguir entre información contextual, confirmación simple y consentimiento explícito para acciones sensibles.

Las acciones de bajo riesgo deben explicarse con claridad sin saturar la experiencia creativa. Las acciones sensibles deben requerir consentimiento separado, pero solo cuando exista cambio real de propósito, visibilidad, uso, almacenamiento, exportación, investigación, evaluación o intervención de IA.

## 9. Retiro por capa

El retiro del consentimiento debe entenderse por capa. Retirar permiso de compartir no equivale necesariamente a borrar una creación local. Retirar permiso de investigación debe bloquear uso secundario. Retirar permiso de evidencia debe impedir que una creación sea tratada como evidencia evaluable. Retirar permiso de IA futura debe mantener bloqueada cualquier asistencia algorítmica externa.

Esta sección no define mecánica técnica de retiro. Establece una obligación documental para futuras specs de datos, privacidad, seguridad, portafolio, exportación e investigación.

## 10. Criterios para estudiantes de escuela superior

```text
[✓] Lenguaje comprensible y no legalista.
[✓] Cuidado reforzado para datos personales, voz, imagen, emociones y contexto escolar.
[✓] No inferencias diagnósticas.
[✓] No evaluación automática.
[✓] Opción de pedir mediación humana.
[✓] Opción de no compartir sin penalización creativa dentro del diseño del sistema.
[✓] Separación entre consentimiento del estudiante, mediación docente y reglas institucionales.
```

El lenguaje de consentimiento para estudiantes de escuela superior debe poder ser comprendido sin conocimientos legales, técnicos ni administrativos. Cuando una acción sensible requiera explicación adicional, el sistema deberá favorecer una explicación breve, situada y acompañable por una persona responsable, sin convertir esa mediación en presión para aceptar.

La mediación docente o institucional puede explicar, acompañar o contextualizar una decisión, pero no debe presentarse como sustituto automático de la agencia del estudiante. Cuando existan requisitos institucionales, estos deben declararse como condiciones externas al sistema y no como consentimiento creativo libre.

El consentimiento no debe depender de presión académica, miedo a perder puntos, obligación implícita de complacer al docente, exposición frente al grupo o confusión entre participación creativa y entrega evaluable. Si una actividad escolar exige entrega, la spec correspondiente deberá distinguir entre requisito pedagógico, evidencia académica y consentimiento para usos adicionales.

## 11. Relación con SPEC-OP-007 Datos y Privacidad

SPEC-OP-006 no clasifica datos por sí sola. Toda acción sensible que implique guardar, evidenciar, reflexionar, exportar, compartir, investigar, evaluar o activar IA futura deberá remitirse a SPEC-OP-007 Datos y Privacidad para determinar clase de dato, sensibilidad, visibilidad, propósito, estado permitido y límites de uso.

## 12. Relación con SPEC-OP-008 Seguridad Local-First

El consentimiento situado no convierte una acción en segura por sí mismo. Toda acción sensible autorizada deberá evaluarse también bajo SPEC-OP-008 Seguridad Local-First para determinar zona de seguridad conceptual, riesgo de exposición, posibilidad de dispositivo compartido, riesgo de exportación accidental y controles humanos requeridos.

## 13. Regla triangular de Specs Núcleo

Ninguna acción sensible puede considerarse suficientemente especificada si no responde a tres preguntas:

```text
1. Consentimiento:
   ¿La persona entiende y autoriza esta acción situada?

2. Datos y privacidad:
   ¿Qué dato, evidencia, reflexión, rastro o visibilidad toca esta acción?

3. Seguridad local-first:
   ¿En qué zona de seguridad ocurre y qué riesgo local, escolar, compartido, exportable o externo activa?
```

## 14. Semilla arquitectónica permitida

```text
Entidad conceptual: ConsentimientoSituado
Responsabilidad: representar una decisión humana sobre una acción específica.
Relaciones conceptuales:
  UsuarioSituado -> toma -> DecisionConsentimiento
  DecisionConsentimiento -> aplica_a -> AccionSensible
  DecisionConsentimiento -> puede_retirarse_antes_de -> ExportacionOCompartir
Límites:
  no define base de datos
  no define UI real
  no define autenticación
  no define firma legal
  no define almacenamiento remoto
Decisiones reversibles:
  textos de consentimiento
  niveles de detalle
  tipos de acción sensible
```

## 15. Criterios de prueba humana

```text
[ ] Una persona puede explicar con sus palabras qué ocurrirá.
[ ] Una persona distingue crear, guardar, evidenciar, exportar y compartir.
[ ] Una persona entiende que IA externa está bloqueada por defecto.
[ ] Una persona puede identificar cómo decir no.
[ ] Una persona puede identificar cómo retirar consentimiento antes de exportar o compartir.
[ ] PH, IT y AT documentan revisión diferenciada.
[ ] Una persona distingue requisito pedagógico, evidencia académica y uso adicional.
[ ] Una persona entiende que consentimiento no equivale automáticamente a seguridad.
```

## 16. Deuda controlada asociada

```text
DEUDA-SESION-001: actualizar glosario general SDD con términos de consentimiento.
DEUDA-SESION-002: identificar documentos necesarios para la base de conocimiento SDD del PH.
DEUDA-SESION-003: desarrollar criterios de transición entre capas de consentimiento.
DEUDA-SESION-004: consolidar criterios de consentimiento para estudiantes de escuela superior.
DEUDA-SESION-005: crear regla triangular común para Specs Núcleo.
DEUDA-PH-001: guía PH para consentimiento, mediación, coerción y fatiga.
DEUDA-PH-002: guía PH para consentimiento y agencia estudiantil en contextos escolares.
DEUDA-PH-003: checklist PH para acciones sensibles.
```

## 17. Dictamen

SPEC-OP-006 queda aprobada para Specs Núcleo v0.4.5 con deuda controlada. Funciona como primera esclusa operativa: ninguna spec posterior que toque datos, evidencia, reflexión, portafolio, exportación, investigación, evaluación o IA puede avanzar si no declara su relación con consentimiento informado y situado.

Esta aprobación no autoriza implementación funcional. Autoriza continuidad documental hacia SPEC-OP-007 Datos y Privacidad y SPEC-OP-008 Seguridad Local-First.

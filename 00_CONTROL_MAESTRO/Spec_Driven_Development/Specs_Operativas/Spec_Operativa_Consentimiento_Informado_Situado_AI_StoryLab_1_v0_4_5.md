# SPEC-OP-006 : Consentimiento Informado y Situado v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** borrador núcleo operativo, no implementación  
**Prioridad:** alta  
**Familia:** consentimiento, agencia humana, privacidad por defecto


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
  semilla_arquitectonica: Entidad conceptual ConsentimientoSituado con campos conceptuales: accion, proposito, dato, evidencia, perfil_usuario, visibilidad, estado, fecha_local_aproximada, version_texto, retiro. No define almacenamiento real.
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
  deuda_generada_o_reducida: Reduce deuda de consentimiento genérico; genera deuda de textos específicos por edad, contexto institucional y tipo de actividad.
  prioridad: alta
  estado: borrador_nucleo_condicionado
```

## 2. Principios operativos

```text
1. El consentimiento no es una casilla. Es una conversación breve, situada y reversible.
2. Crear no equivale a guardar.
3. Guardar no equivale a exportar.
4. Exportar no equivale a compartir.
5. Compartir no equivale a investigar.
6. Investigar no equivale a evaluar.
7. Ninguna IA futura queda autorizada por consentimiento general.
```

## 3. Capas de consentimiento

| Capa | Pregunta humana | Estado por defecto | Riesgo que controla |
|---|---|---|---|
| Exploración | ¿Puedo crear sin entregar datos? | Sí | captura prematura |
| Guardado local | ¿Quiero conservar esto en este dispositivo o entorno local? | No automático | persistencia no comprendida |
| Evidencia | ¿Quiero marcar esto como evidencia de proceso? | Voluntario | vigilancia pedagógica |
| Reflexión | ¿Quiero vincular mi reflexión a una evidencia? | Privado por defecto | exposición emocional |
| Exportación | ¿Quiero generar una salida controlada? | Acción manual | fuga de datos |
| Compartir | ¿Con quién y para qué se comparte? | Nadie por defecto | uso secundario |
| IA futura | ¿Acepto asistencia de IA bajo estas condiciones? | Bloqueada | inferencia opaca |

## 4. Criterios para estudiantes de escuela superior

```text
[✓] Lenguaje comprensible y no legalista.
[✓] Cuidado reforzado para datos personales, voz, imagen, emociones y contexto escolar.
[✓] No inferencias diagnósticas.
[✓] No evaluación automática.
[✓] Opción de pedir mediación humana.
[✓] Opción de no compartir sin penalización creativa dentro del diseño del sistema.
[✓] Separación entre consentimiento del estudiante, mediación docente y reglas institucionales.
```

## 5. Semilla arquitectónica permitida

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

## 6. Criterios de prueba humana

```text
[ ] Una persona puede explicar con sus palabras qué ocurrirá.
[ ] Una persona distingue crear, guardar, evidenciar, exportar y compartir.
[ ] Una persona entiende que IA externa está bloqueada por defecto.
[ ] Una persona puede identificar cómo decir no.
[ ] Una persona puede identificar cómo retirar consentimiento antes de exportar o compartir.
[ ] PH, IT y AT documentan revisión diferenciada.
```

## 7. Dictamen

SPEC-OP-006 queda como primera esclusa de v0.4.5. Ninguna spec posterior que toque datos, evidencia, reflexión, portafolio, exportación o IA puede avanzar si no declara su relación con consentimiento informado y situado.

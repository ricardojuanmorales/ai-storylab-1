# SPEC-OP-007 : Datos y Privacidad v0.4.5

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Estado:** borrador núcleo operativo, no implementación  
**Prioridad:** alta  
**Familia:** privacidad por defecto, minimización, clasificación de datos


> **Guardarraíl constitucional v0.4.5**  
> Este documento es una pieza de especificación operativa. No autoriza implementación funcional, backend, cloud, autenticación, analíticas, IA externa, manejo de datos reales, subida automática ni automatizaciones funcionales. Toda transición posterior requiere revisión humana PH-IT-AT, análisis de riesgo, consentimiento situado, criterios local-first y gate constitucional.


## 1. Ficha YAML operativa

```yaml
spec_candidata:
  nombre: Spec de datos y privacidad
  codigo_documental: SPEC-OP-007-DATOS-PRIVACIDAD
  proposito: Clasificar datos conceptuales, definir minimización, privacidad por defecto, límites de uso, evidencias permitidas y bloqueos de exposición.
  problema_que_atiende: Evita que una experiencia creativa se convierta en recolector opaco de identidad, emociones, desempeño, ubicación, voz, imagen o contexto escolar.
  experiencia_humana_que_protege: Privacidad, intimidad creativa, control de autoría, protección de menores y derecho a experimentar sin vigilancia.
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
    - datos_no_requeridos
    - datos_locales_minimos
    - datos_creativos_voluntarios
    - metadatos_conceptuales
    - datos_sensibles_bloqueados
    - datos_de_exportacion_controlada
  evidencias_tocadas:
    - evidencia_creativa_voluntaria
    - reflexion_privada
    - artefacto_local
    - seleccion_de_portafolio
    - registro_conceptual_de_visibilidad
  rol_de_IA: IA externa bloqueada por defecto. Ningún dato se prepara para IA sin spec propia, consentimiento separado, threat model y gate reforzado.
  riesgos:
    - sobrerrecoleccion
    - identificacion_de_menores
    - inferencias_emocionales
    - uso_secundario_de_evidencia
    - mezcla_de_portafolio_y_expediente
    - exportacion_accidental
    - retencion_indefinida
  criterios_local_first:
    - datos reales no usados en v0.4.5
    - todo modelo se describe conceptualmente
    - no subida automática
    - no cuenta obligatoria
    - no sincronización remota
    - privacidad por defecto para reflexiones y borradores
  consentimiento_requerido:
    - guardar datos locales
    - marcar evidencia como compartible
    - exportar artefacto
    - usar evidencia en contexto docente
    - usar evidencia en investigación
    - cualquier análisis automatizado futuro
  criterios_de_no_rigidez:
    - permitir crear sin perfil completo
    - permitir evidencia fragmentaria
    - permitir títulos y etiquetas opcionales
    - permitir borrado conceptual
    - evitar campos obligatorios innecesarios
  semilla_arquitectonica: Taxonomía conceptual de datos: Bloqueado, No requerido, Local mínimo, Creativo voluntario, Evidencia seleccionada, Exportable manualmente. No define esquema de base de datos.
  criterios_de_diseno:
    - minimización visible
    - privacidad explicada por acción
    - separación entre borrador, evidencia y exportación
    - controles humanos de visibilidad
    - lenguaje claro sobre qué no se recoge
  criterios_de_prueba:
    - prueba de minimización
    - prueba de clasificación de sensibilidad
    - prueba de no datos reales
    - revisión de protección de menores
    - verificación de no IA externa
  revision_humana: PH valida agencia y comprensión; IT valida clasificación, ética y trazabilidad; AT valida privacidad de proceso creativo y formas no textuales.
  gate_requerido: Gate Constitucional de Preimplementación + Gate de Aprobación Specs Núcleo 1 v0.4.5 + revisión PH-IT-AT
  deuda_generada_o_reducida: Reduce deuda de privacidad y clasificación; genera deuda de taxonomía detallada por tipo de evidencia y contexto institucional.
  prioridad: alta
  estado: borrador_nucleo_condicionado
```

## 2. Clasificación conceptual de datos

| Clase | Descripción | Estado v0.4.5 | Ejemplos conceptuales | Regla |
|---|---|---|---|---|
| Datos bloqueados | Datos que no deben tocarse en esta fase | Prohibidos | identidad legal, ubicación precisa, biometría, credenciales, datos clínicos | No diseñar flujos que los requieran |
| Datos no requeridos | Datos útiles quizá en futuro, pero no necesarios ahora | Fuera de alcance | cuenta, perfil completo, historial remoto | No pedir |
| Datos locales mínimos | Datos conceptuales necesarios para explicar flujo local | Permitidos solo como modelo | título opcional, estado conceptual | Deben ser opcionales o justificables |
| Datos creativos voluntarios | Material creado por la persona | Privado por defecto | boceto, nota, escena, mapa | No evidencia hasta que el usuario lo decida |
| Evidencia seleccionada | Material marcado por la persona como evidencia | Control humano | versión, reflexión, decisión | Requiere consentimiento situado |
| Datos exportables | Salida manual preparada por el usuario | Bloqueada hasta SPEC-OP-010 | paquete de portafolio, informe | Requiere exportación controlada |

## 3. Datos sensibles reforzados

```text
[!] Menores de edad: cualquier dato personal, imagen, voz, escuela, ubicación, emociones o contexto familiar requiere cuidado reforzado.
[!] Reflexiones: deben tratarse como privadas por defecto, no como insumo analítico.
[!] Evidencia creativa: no debe convertirse automáticamente en evaluación.
[!] Docente: no debe recibir datos por defecto.
[!] Investigador: no debe acceder a evidencia sin consentimiento, protocolo y revisión humana.
```

## 4. Reglas de minimización

```text
1. Si una experiencia puede funcionar sin dato, el dato no se pide.
2. Si un dato puede ser opcional, no se vuelve obligatorio.
3. Si una evidencia puede permanecer privada, no se comparte por defecto.
4. Si una reflexión puede existir sin análisis, no se analiza.
5. Si una acción requiere consentimiento, no se agrupa bajo consentimiento genérico.
6. Si un dato puede identificar a un estudiante de escuela superior, se trata como reforzado o bloqueado.
```

## 5. Semilla arquitectónica permitida

```text
Entidad conceptual: ClasificacionDato
Responsabilidad: nombrar sensibilidad, propósito, visibilidad y estado permitido de un dato.
Relaciones conceptuales:
  ArtefactoCreativo -> puede_contener -> DatosCreativosVoluntarios
  EvidenciaCreativa -> requiere -> ConsentimientoSituado
  ExportacionControlada -> requiere -> RevisionHumana
Límites:
  no define persistencia real
  no define cifrado real
  no define estructura de base de datos
  no define servicios externos
  no define analíticas
Decisiones reversibles:
  nombres de categorías
  granularidad de sensibilidad
  tabla de retención conceptual
```

## 6. Criterios de prueba humana

```text
[ ] Se puede explicar qué datos no se recogen.
[ ] Se puede distinguir borrador privado de evidencia seleccionada.
[ ] Se puede identificar cuándo una reflexión es sensible.
[ ] Se puede confirmar que no hay uso de datos reales en v0.4.5.
[ ] Se puede confirmar que no hay IA externa por defecto.
[ ] Se puede revisar la protección reforzada de estudiantes de escuela superior.
```

## 7. Dictamen

SPEC-OP-007 convierte la privacidad en cartografía operativa. Antes de diseñar pantallas o entidades técnicas, el proyecto debe saber qué no toca, qué toca solo conceptualmente y qué necesitaría consentimiento reforzado.

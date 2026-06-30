# Plantilla de Spec Segura AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Plantilla mínima de spec segura  
**Estado:** Aprobada para archivo en PR #8  
**Ruta canónica:** `07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/Plantilla_Spec_Segura_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, preparatorio y de decisión. No autoriza implementación funcional.

---

## 0. Declaración de uso

Esta plantilla convierte la Constitución SDD AI StoryLab 1 v0.4.4 en un instrumento mínimo para redactar specs seguras.

Una spec completada con esta plantilla no equivale automáticamente a autorización para construir. Su función es ordenar preguntas, límites, datos, riesgos, consentimiento, criterios de prueba, revisión humana y decisión documental.

Toda spec producida con esta plantilla debe terminar con una decisión explícita:

```text
aprobada
condicionada
diferida
bloqueada
```

Mientras no exista decisión documentada, la spec permanece en borrador y no habilita implementación funcional.

---

## 1. Identificación de la spec

```text
ID de spec:
Título:
Fecha:
Versión:
Estado:
Responsable documental:
Perfil responsable:
Ruta propuesta:
Documentos relacionados:
```

### 1.1 Tipo de spec

```text
[ ] Spec general de aplicación
[ ] Spec de experiencia de usuario
[ ] Spec de módulo crítico aislado
[ ] Spec de portafolio
[ ] Spec de evidencia
[ ] Spec de reflexión
[ ] Spec de consentimiento
[ ] Spec de datos
[ ] Spec de privacidad
[ ] Spec de seguridad
[ ] Spec de IA
[ ] Spec de interfaz
[ ] Spec de exportación
[ ] Spec de objeto de dominio
[ ] Spec de threat model
[ ] Otra:
```

---

## 2. Propósito humano y educativo

Toda spec debe comenzar por su sentido humano, educativo, creativo o investigativo.

```text
¿Qué necesidad humana, educativa, creativa o investigativa atiende?
¿A quién sirve?
¿Qué experiencia protege o habilita?
¿Qué problema intenta resolver sin reducir la agencia humana?
```

Declaración breve:

```text
Esta spec propone...
Para apoyar...
Sin autorizar...
```

---

## 3. Alcance y no alcance

### 3.1 Alcance autorizado para esta spec

```text
Incluye:
-
-
-
```

### 3.2 Fuera de alcance

```text
No incluye:
- backend
- cloud
- APIs externas
- autenticación
- analíticas
- base de datos remota
- subida automática de archivos
- IA externa por defecto
- manejo de datos reales
- evaluación automática como juez final
- implementación funcional
- otros:
```

---

## 4. Subjetividades y perfiles afectados

```text
[ ] Estudiante de escuela superior
[ ] Estudiante universitario
[ ] Docente
[ ] Investigador
[ ] Programador Humanista
[ ] Investigador Transdisciplinario
[ ] Artista Transdisciplinario
[ ] Caleidoscopio
[ ] Otro:
```

Nivel de cuidado:

```text
[ ] Bajo: no toca datos personales, evidencia real ni decisiones sensibles.
[ ] Medio: estructura experiencia educativa o evidencia local.
[ ] Alto: toca menores, datos reales, evidencia sensible, publicación, exportación, IA externa o evaluación.
[ ] Bloqueante: propone uso sin consentimiento, subida automática, juicio automático final o implementación sin spec aprobada.
```

Justificación:

```text

```

---

## 5. Experiencia creativa protegida

Toda spec debe identificar cómo protege la investigación-creación y evita convertir la experiencia en un trámite rígido.

```text
¿Cómo amplía el juego creativo?
¿Cómo evita convertir la experiencia en formulario rígido?
¿Cómo permite exploración, pausa, revisión, error, recombinación o reflexión?
¿Cómo evita una ruta única obligatoria?
¿Cómo protege la capacidad del usuario para decidir qué compartir o no compartir?
```

Señales de alerta antirrigidez:

```text
[ ] Exceso de campos obligatorios
[ ] Flujo único sin alternativas
[ ] Énfasis en cumplimiento sobre creación
[ ] Portafolio tratado como archivo muerto
[ ] Reflexión convertida en trámite
[ ] Evaluación mecánica
[ ] Captura de datos sin propósito claro
[ ] IA tratada como autoridad creativa o evaluativa
```

Mitigación propuesta:

```text

```

---

## 6. Datos involucrados

Clasificación:

```text
[ ] Ningún dato
[ ] Datos ficticios
[ ] Datos sintéticos
[ ] Datos anonimizados
[ ] Datos personales
[ ] Datos educativos
[ ] Datos sensibles
[ ] Metadatos
[ ] Evidencias creativas
[ ] Reflexiones personales
[ ] Datos de menores de edad
[ ] Otro:
```

| Dato | Propósito | ¿Es necesario? | ¿Permanece local? | Riesgo | Mitigación |
|---|---|---|---|---|---|
| | | | | | |

Regla de minimización:

```text
Si un dato no puede justificarse, no debe incorporarse.
```

---

## 7. Evidencias, portafolios y reflexión

```text
¿La spec crea, organiza, transforma, exporta o interpreta evidencias?
¿Toca portafolios?
¿Incluye reflexión personal o metodológica?
¿Afecta rúbricas, competencias o evaluación formativa?
```

Condiciones de cuidado:

```text
[ ] La evidencia permanece bajo control del usuario.
[ ] La evidencia no se publica automáticamente.
[ ] La evidencia no se envía a IA externa.
[ ] La evidencia no se evalúa automáticamente como juicio final.
[ ] El usuario puede revisar, editar, retirar o no compartir.
```

---

## 8. Rol de IA, si aplica

```text
[ ] No aplica IA.
[ ] IA local conceptual futura, no implementada.
[ ] IA externa limitada, solo como posibilidad futura condicionada.
```

Si se considera IA externa, la spec queda condicionada por:

```text
[ ] spec aprobada específica de IA
[ ] consentimiento explícito
[ ] datos ficticios, sintéticos o anonimizados
[ ] threat model
[ ] revisión humana
[ ] prohibición de juicio final automático
```

```text
La IA podría actuar como...
No podrá actuar como...
```

---

## 9. Criterios local-first

| Pregunta | Respuesta |
|---|---|
| ¿Qué permanece local? | |
| ¿Qué no se guarda? | |
| ¿Qué puede exportarse? | |
| ¿Qué requiere consentimiento? | |
| ¿Qué requiere anonimización? | |
| ¿Qué nunca se sube automáticamente? | |
| ¿Qué requeriría spec futura? | |

Declaración local-first:

```text
Esta spec preserva control local porque...
```

---

## 10. Consentimiento requerido

```text
[ ] No requiere consentimiento adicional porque no toca datos, evidencias ni acciones sensibles.
[ ] Requiere consentimiento informado y situado.
[ ] Requiere consentimiento reforzado por menores, datos reales, publicación, exportación o IA externa.
[ ] No puede avanzar hasta crear una matriz de consentimiento específica.
```

Preguntas mínimas:

```text
¿Qué ocurrirá?
¿Qué datos se usarán?
¿Para qué se usarán?
¿Quién tendrá acceso?
¿Qué riesgos existen?
¿Qué alternativas tiene el usuario?
¿Cómo puede negarse o retirar autorización?
```

---

## 11. Riesgos

| Riesgo | Tipo | Nivel | Evidencia de riesgo | Mitigación | ¿Bloquea? |
|---|---|---:|---|---|---|
| | pedagógico / creativo / privacidad / seguridad / IA / datos / evaluación | | | | |

Escala:

```text
1 = bajo
2 = medio
3 = alto
4 = bloqueante
```

---

## 12. Threat model preliminar

```text
Activos a proteger:
-

Actores o fuentes de riesgo:
-

Amenazas previsibles:
- exposición de datos
- uso indebido
- automatización indebida
- pérdida de agencia
- acceso no autorizado
- uso de IA externa
- sesgo evaluativo
- publicación no consentida
- rigidez pedagógica
- otras:

Mitigaciones iniciales:
-

Riesgos residuales:
-
```

Resultado:

```text
[ ] Suficiente para spec de bajo riesgo.
[ ] Requiere threat model específico.
[ ] Bloquea avance hasta análisis adicional.
```

---

## 13. Análisis Dialógico Transdisciplinario

| Tensión | Principio A | Principio B | Solución situada | Decisión |
|---|---|---|---|---|
| | | | | |

Justificación narrativa:

```text

```

---

## 14. Criterios de aceptación

```text
[ ] Protege agencia humana.
[ ] Mantiene local-first.
[ ] Minimiza datos.
[ ] Evita rigidez antijuego.
[ ] No usa IA externa por defecto.
[ ] No habilita evaluación automática final.
[ ] Incluye revisión humana cuando aplica.
[ ] Actualiza bitácora, transferencia y deuda.
```

Criterios específicos:

```text
-
-
-
```

---

## 15. Criterios de prueba documental

```text
[ ] Prueba de no implementación funcional.
[ ] Prueba de no backend/cloud/API externa.
[ ] Prueba de no subida automática.
[ ] Prueba de datos mínimos.
[ ] Prueba de consentimiento comprensible.
[ ] Prueba de revisión humana.
[ ] Prueba de no evaluación automática como juez final.
[ ] Prueba de experiencia creativa no rígida.
[ ] Prueba de trazabilidad documental.
```

---

## 16. Revisión humana

```text
Revisor/a:
Perfil:
Fecha:
Resultado:
Justificación:
```

Resultado permitido:

```text
[ ] Aprobada
[ ] Condicionada
[ ] Diferida
[ ] Bloqueada
```

---

## 17. Decisión final de la spec

```text
Decisión:
Condiciones:
Deuda creada:
Deuda pagada:
Documentos que deben actualizarse:
```

Registro obligatorio:

```text
[ ] Bitácora de sesión actualizada.
[ ] Bitácora de transferencia simétrica actualizada.
[ ] Registro de deuda actualizado.
[ ] Matrices relacionadas actualizadas.
```

---

## 18. Dictamen de plantilla

Esta plantilla paga parcialmente la deuda `ASTL-V044-DEBT-SPEC-001` al proveer un instrumento mínimo para producir specs seguras.

La deuda no queda cerrada hasta que la plantilla sea usada, revisada y conectada con las matrices constitucionales completas.

Esta plantilla no autoriza implementación funcional.

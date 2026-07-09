# Matriz de Decisiones Técnicas Iniciales · AI StoryLab 1 v0.7.0

## 1. Propósito

Esta matriz prepara el primer documento sustantivo de v0.7.0:

```text
Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
```

No selecciona stack final. Organiza preguntas y criterios.

---

## 2. Familias de decisión

| Familia | Pregunta principal | Estado |
|---|---|---|
| Arquitectura local-first | Qué debe vivir localmente y por qué? | Abierta |
| Datos | Qué datos se evitan, minimizan o abstraen? | Abierta |
| Roles | Qué puede ver cada sujeto? | Abierta |
| Vista del Facilitador | Qué visibilidad formativa es necesaria sin vigilancia? | Abierta |
| Seguridad | Qué controles mínimos se requieren desde el diseño? | Abierta |
| Privacidad | Qué se oculta, anonimiza o no se recopila? | Abierta |
| Trazabilidad | Qué eventos se registran sin invadir privacidad? | Abierta |
| IA | Dónde puede haber asistencia IA sin IA embebida productiva todavía? | Abierta |
| Exportabilidad | Cómo preservar portafolios, evidencias y continuidad? | Abierta |
| Escalabilidad | Qué decisiones preparan v1.0.0 sin sobredimensionar v0.7.0? | Abierta |

---

## 3. Plantilla para cada decisión

```yaml
decision:
  id:
  nombre:
  familia:
  pregunta:
  contexto:
  alternativas:
    - opcion:
      beneficios:
      riesgos:
      dependencia:
  criterio_recomendado:
  decision_actual:
    estado: abierta
    seleccion_final: no
  impacto_en:
    seguridad:
    privacidad:
    agencia:
    facilitador:
    v1_0_0:
  requiere_aprobacion_humana:
```

---

## 4. Decisiones que no deben cerrarse prematuramente

```yaml
no_cerrar_en_primer_documento:
  stack_final: true
  base_de_datos_productiva: true
  proveedor_IA: true
  backend_productivo: true
  esquema_datos_reales: true
  analiticas_personales: true
  despliegue: true
```

---

## 5. Criterio para pasar de mapa a especificación

```text
Una decisión pasa de abierta a candidata cuando tiene alternativas, riesgos, controles, relación con privacidad, relación con agencia humana y dependencia hacia v1.0.0.
```

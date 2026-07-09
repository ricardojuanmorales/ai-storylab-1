# Kit de Inicio de Sesión · AI StoryLab 1 v0.7.0 · Post PR #22

**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Estado de entrada:** PR #22 merged  
**Función:** Guía operativa para iniciar la próxima sesión formal de v0.7.0  
**Ruta sugerida:** `18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/POST_MERGE_PR22/Kit_Continuidad_Inicio_Sesion_v0_7_0_Post_PR22/01_Kit_Inicio_Sesion_v0_7_0_Post_PR22.md`  

---

## 0. Declaración de apertura

La próxima sesión inicia el desarrollo formal de `AI StoryLab 1 v0.7.0 · Arquitectura Técnica + Seguridad`.

El proyecto entra en una fase donde se diseñan las condiciones técnicas, éticas, funcionales y de seguridad que permitirán avanzar hacia `v1.0.0` sin perder agencia humana, privacidad, trazabilidad responsable ni enfoque pedagógico.

---

## 1. Estado canónico de entrada

```yaml
estado_entrada:
  PR20:
    estado: merged
    funcion: cierre_documental_y_preparacion_historica
  PR21:
    estado: merged
    funcion: auditoria_post_v0_6_y_preparacion_pre_v0_7
  PR22:
    estado: merged
    funcion: gate_apertura_v0_7_0
    merge_commit_sha: "1e2b62856a1cc0ed7cb66c9acdd9ab375879e16a"
```

---

## 2. Alcance de la fase v0.7.0

v0.7.0 se enfoca en arquitectura técnica y seguridad.

Incluye:

- decisiones técnicas iniciales;
- criterios de arquitectura local-first;
- seguridad por diseño;
- privacidad por defecto;
- roles y permisos;
- límites funcionales;
- continuidad documental;
- Vista del Facilitador sin vigilancia;
- alineación hacia v1.0.0.

No incluye todavía:

- implementación productiva;
- selección irrevocable de stack final;
- backend productivo;
- APIs productivas;
- IA embebida productiva;
- despliegue;
- uso de datos reales;
- validación con personas.

---

## 3. Primera tarea de la sesión

La primera tarea no es escribir código. La primera tarea es abrir y construir:

```text
Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
```

Este documento debe funcionar como tablero de mando conceptual, no como implementación.

---

## 4. Compás de trabajo

Cada decisión técnica deberá responder:

```yaml
preguntas_minimas:
  proposito:
    - Que problema resuelve?
    - Para que sujeto o rol?
  seguridad:
    - Que riesgo introduce?
    - Que control lo mitiga?
  privacidad:
    - Que datos toca?
    - Puede evitar tocar datos personales?
  agencia:
    - Aumenta o reduce agencia humana?
  facilitador:
    - Apoya sin vigilar?
    - Evita ranking, monitoreo continuo e inferencias sensibles?
  continuidad:
    - Acerca o aleja de v1.0.0?
  implementacion:
    - Es decision documental o tecnica?
    - Requiere autorizacion futura?
```

---

## 5. Roles de sujeto que deben permanecer visibles

La arquitectura v0.7.0 debe mantener una mirada diferenciada para:

```yaml
subjetividades:
  estudiante_escuela_superior:
    prioridad: agencia_creativa_seguridad_privacidad_y_acompanamiento
  estudiante_universitario:
    prioridad: investigacion_creacion_autonomia_y_trazabilidad_formativa
  docente:
    prioridad: acompanamiento_pedagogico_no_vigilante_y_diseno_de_experiencias
  investigador:
    prioridad: rigor_metodologico_etica_y_documentacion_reproducible
```

---

## 6. Criterio de oro

```text
Toda decisión de v0.7.0 debe poder explicar cómo protege la creación humana, la privacidad y la agencia antes de explicar cómo escala.
```

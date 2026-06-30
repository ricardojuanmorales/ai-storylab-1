# Mapa de Relaciones SDD del Programador Humanista AI StoryLab 1 v0.4.4

**Estado:** Borrador consolidado para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Mapa_Relaciones_SDD_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental. No autoriza implementación funcional.

---

## 1. Propósito

Este mapa muestra cómo se conectan los documentos SDD principales desde la perspectiva del Programador Humanista.

---

## 2. Mapa general

```text
Constitución SDD
  ↓ define principios, límites y autoridad

Política Local-First Inicial
  ↓ define reglas sobre datos, evidencias, portafolios, exportación y consentimiento

Registro Inicial de Threat Models
  ↓ define activadores, amenazas, riesgos, bloqueos y plantilla mínima

Matriz POO Conceptual
  ↓ define objetos, responsabilidades, datos, relaciones, riesgos y bloqueos conceptuales

Plantilla de Spec Segura
  ↓ convierte principios, políticas, amenazas y objetos en estructura de spec

Base de Conocimiento SDD del Programador Humanista
  ↓ enseña cómo aplicar el método

Spec candidata
  ↓ pasa a revisión humana

Bitácora + Transferencia + Deuda + Wiki humana
  ↓ conservan memoria, impacto, pendientes y traducción humana
```

---

## 3. Relación entre documentos

| Documento | Rol | Entrega al Programador Humanista |
|---|---|---|
| Constitución SDD | Marco superior | Principios y límites. |
| Política Local-First Inicial | Política rectora | Criterios sobre datos, evidencias, exportación y consentimiento. |
| Registro Inicial de Threat Models | Radar documental | Activadores, amenazas, bloqueos y plantilla mínima. |
| Matriz POO Conceptual | Mapa de objetos | Objetos, responsabilidades, relaciones, datos permitidos y bloqueos. |
| Plantilla de Spec Segura | Instrumento | Estructura para specs. |
| Guía SDD | Formación | Cómo pensar antes de implementar. |
| Guía local-first | Aplicación | Cómo detectar riesgos de datos y exportación. |
| Guía threat model | Aplicación | Cómo detectar amenazas y condiciones de bloqueo. |
| Guía POO conceptual | Aplicación | Cómo modelar objetos sin convertirlos en código. |
| Checklist | Control | Qué revisar antes de avanzar. |
| Glosario | Lenguaje común | Términos operativos. |
| Registro de deuda | Memoria | Qué bloquea o condiciona avance. |
| Wiki humana | Traducción | Cómo explicar al usuario qué ocurre y qué no. |

---

## 4. Flujos de consulta

### Nueva idea técnica

```text
1. Leer Guía SDD.
2. Revisar Constitución.
3. Revisar Política Local-First si toca datos, evidencia o exportación.
4. Revisar Registro de Threat Models si hay activadores.
5. Revisar Matriz POO si propone objetos de dominio.
6. Usar Plantilla de Spec Segura.
7. Aplicar Checklist.
8. Registrar decisión y deuda.
```

### Propuesta con objeto conceptual

```text
1. Nombrar objeto.
2. Definir propósito humano.
3. Definir responsabilidades.
4. Declarar datos permitidos y prohibidos.
5. Declarar relaciones.
6. Responder local-first.
7. Activar threat model si aplica.
8. Definir consentimiento y bloqueos.
9. No implementar.
```

---

## 5. Dictamen

El Programador Humanista usa SDD como sistema de navegación: Constitución como cielo, política como clima, threat model como radar, POO conceptual como mapa de criaturas, plantilla como brújula, checklist como linterna y bitácora como memoria de viaje.

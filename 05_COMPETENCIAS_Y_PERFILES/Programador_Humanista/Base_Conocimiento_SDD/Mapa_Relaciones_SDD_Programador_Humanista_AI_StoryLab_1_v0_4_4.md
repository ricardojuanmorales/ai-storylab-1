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

Plantilla de Spec Segura
  ↓ convierte principios y políticas en estructura de spec

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
| Plantilla de Spec Segura | Instrumento | Estructura para specs. |
| Guía SDD | Formación | Cómo pensar antes de implementar. |
| Guía local-first | Aplicación | Cómo detectar riesgos de datos y exportación. |
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
4. Usar Plantilla de Spec Segura.
5. Aplicar Checklist.
6. Registrar decisión y deuda.
```

### Propuesta con datos

```text
1. Consultar Política Local-First.
2. Clasificar datos.
3. Revisar consentimiento.
4. Activar threat model si aplica.
5. Condicionar, diferir o bloquear si hay datos reales sin política formal.
```

### Propuesta con IA

```text
1. Confirmar si IA aplica.
2. Si es IA externa, exigir spec específica.
3. Exigir consentimiento explícito.
4. Usar solo datos ficticios, sintéticos o anonimizados.
5. Exigir threat model.
6. Prohibir juicio final automático.
```

---

## 5. Dictamen

El Programador Humanista usa SDD como sistema de navegación: Constitución como cielo, política como clima, plantilla como mapa, checklist como linterna y bitácora como memoria de viaje.

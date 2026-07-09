# Registro de Deudas, Riesgos y Controles · AI StoryLab 1 v0.7.0

## 1. Propósito

Este registro mantiene vivas las deudas y riesgos que deben acompañar el desarrollo formal de v0.7.0.

---

## 2. Deuda crítica activa

```yaml
DFUX_FAC_v0_6_001:
  nombre: Invisibilizacion_parcial_Vista_Facilitador_MVP_v0_3
  estado: activa
  origen: auditoria_post_v0_6
  impacto:
    - arquitectura_roles
    - privacidad
    - seguridad
    - experiencia_docente
    - acompanamiento_formativo
  no_cerrar_hasta:
    - definir_vista_facilitador
    - definir_roles_permisos
    - definir_visibilidad_minima_necesaria
    - definir_controles_no_vigilancia
    - definir_trazabilidad_formativa
```

---

## 3. Riesgos mayores de v0.7.0

| Código | Riesgo | Severidad | Control |
|---|---|---:|---|
| R-v0.7-001 | Convertir arquitectura en implementación prematura | Alta | Gate humano y protocolo documento por documento |
| R-v0.7-002 | Seleccionar stack final sin criterios suficientes | Alta | Mapa de decisiones antes de selección |
| R-v0.7-003 | Vista del Facilitador como vigilancia | Crítica | Diseño de visibilidad mínima necesaria |
| R-v0.7-004 | Registrar datos sensibles innecesarios | Crítica | Minimización y privacidad por defecto |
| R-v0.7-005 | Reducir agencia estudiantil | Alta | Diseño centrado en control y consentimiento humano |
| R-v0.7-006 | Diseñar solo para docente y olvidar subjetividades | Alta | Revisar cuatro subjetividades en cada documento |
| R-v0.7-007 | Romper continuidad hacia v1.0.0 | Media | Matriz estratégica y bitácoras |

---

## 4. Controles base

```yaml
controles_base:
  aprobacion_humana: requerida
  minimizacion_datos: obligatoria
  local_first: preferente
  seguridad_por_diseno: obligatoria
  privacidad_por_defecto: obligatoria
  no_vigilancia: obligatoria
  trazabilidad_formativa: permitida_con_limites
  inferencias_sensibles: prohibidas_sin_gate
  datos_reales: prohibidos_en_v0_7_0_inicial
```

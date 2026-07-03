# Registro de Deuda Estructural — AI StoryLab 1 v0.4.4

**Código documental:** Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4  
**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.4  
**Fecha:** 2026-07-03  
**Estado:** Registro vivo inicial para PR #9  
**Tipo de documento:** Registro de deuda estructural  
**Ruta canónica:** `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/Registro_Deuda_Estructural_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Documental, estructural y de mantenimiento. No autoriza implementación funcional.

---

## 0. Propósito

Este registro documenta la deuda estructural detectada durante la auditoría de cartapacios de AI StoryLab 1 v0.4.4. Su función es evitar que la deuda organizacional se disuelva en la memoria de sesión y asegurar que cada tensión tenga ID, severidad, ruta afectada, decisión requerida, versión objetivo y estado.

---

## 1. Criterios de severidad

```text
Bloqueante:
  Impide avance hacia diseño, implementación, testing o despliegue.

Alta:
  Afecta navegación, trazabilidad, seguridad documental o continuidad.

Media:
  Puede causar confusión o duplicación si no se atiende.

Baja:
  Mejora deseable, no crítica.

Diferida:
  Registrada para atención posterior.
```

---

## 2. Formato canónico de deuda

```yaml
id_deuda:
tipo:
ruta_afectada:
descripcion:
riesgo:
severidad:
decision_requerida:
responsable_logico:
version_objetivo:
estado:
accion_siguiente:
```

---

## 3. Deudas activas PR #9

| ID | Tipo | Ruta afectada | Descripción | Severidad | Estado | Acción siguiente |
|---|---|---|---|---|---|---|
| DE-PR9-001 | Orientación | `README.md` | README raíz conserva estado anterior y debe reflejar v0.4.4 SDD + PR #9. | Alta | Abierta | Actualizar progresivamente. |
| DE-PR9-002 | README | Zonas críticas | README genéricos en carpetas activas no describen función real post-PR8. | Alta | Abierta | Crear plantilla README y actualizar zonas críticas. |
| DE-PR9-003 | Mapa | `00_CONTROL_MAESTRO/Mapas_Repositorio/` | Faltaba mapa real post-PR8 diferenciado del tree objetivo. | Alta | Parcialmente pagada | Incorporar mapa real y mantenerlo actualizado. |
| DE-PR9-004 | Nomenclatura/ruta | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/` | Ruta útil pero tensiona convención de `Bases_Conocimiento/`. | Media-alta | Abierta | Evaluar caso por caso mediante decisión registrada. |
| DE-PR9-005 | Documentación activa | `18_DOCUMENTACION_ACTIVA/` | Fronteras débiles entre bitácoras, cierres, compendios, manifests, decisiones y deuda. | Alta | Abierta | Crear regla operativa o README crítico. |
| DE-PR9-006 | Deuda | `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/` | Falta registro específico de deuda estructural PR #9. | Alta | Parcialmente pagada | Incorporar este registro y actualizarlo. |
| DE-PR9-007 | Gate | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/` | Gate constitucional completo todavía no existe como checklist operativo independiente. | Bloqueante para implementación | Abierta | Crear gate antes de avance funcional. |
| DE-PR9-008 | Terminología | Todo el repositorio | Posible ambigüedad SSD/SDD. | Media | Abierta | Usar SDD exclusivamente y registrar correcciones. |
| DE-PR9-009 | Archivo histórico | `99_ARCHIVO_HISTORICO/` | Falta regla operativa visible de reemplazo canónico + decisión registrada. | Media | Abierta | Añadir al protocolo y futuros README. |
| DE-PR9-010 | Transferencia PH-IT-AT | `05_COMPETENCIAS_Y_PERFILES/` | Falta sistema formal de transferencia: campos, índice y revisión de cierre. | Alta | Abierta | Crear índice o plantilla de transferencia. |
| DE-PR9-011 | Tabla ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` | Faltaba tabla v0.4.4 para rutas canónicas post-PR8. | Alta | Parcialmente pagada | Incorporar tabla y validarla contra nuevos documentos. |
| DE-PR9-012 | PR #9 | `v0.4.4-structural-audit` | El PR inició con dos documentos; requiere completar mapa, tabla y deuda. | Media | En progreso | Incorporar documentos estructurales faltantes. |

---

## 4. Deudas bloqueantes antes de implementación funcional

| ID | Razón de bloqueo |
|---|---|
| DE-PR9-007 | Sin gate constitucional operativo no puede autorizarse implementación. |
| DE-PR9-010 | Sin sistema PH-IT-AT puede diseñarse demasiado centrado en PH. |
| DE-PR9-005 | Sin fronteras en documentación activa se deteriora trazabilidad. |
| DE-PR9-001 | README raíz desactualizado puede inducir navegación y decisiones incorrectas. |

---

## 5. Deudas altas para cierre de PR #9

| ID | Condición de cierre recomendada |
|---|---|
| DE-PR9-002 | Plantilla README creada o deuda explícita para siguiente ronda. |
| DE-PR9-003 | Mapa real post-PR8 incorporado. |
| DE-PR9-006 | Registro de deuda estructural incorporado. |
| DE-PR9-011 | Tabla de ubicación documental incorporada. |
| DE-PR9-004 | Decisión registrada o deuda mantenida con criterio de excepción. |

---

## 6. Deuda de README críticos

Zonas prioritarias para README progresivos:

```text
00_CONTROL_MAESTRO/
05_COMPETENCIAS_Y_PERFILES/
07_PLANTILLAS_Y_MODELOS/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
18_DOCUMENTACION_ACTIVA/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
```

**Estado inicial:** Abierto. Crear plantilla README y actualizar por prioridad. No actualizar todos los README de golpe sin revisión.

---

## 7. Deuda de transferencia simétrica PH-IT-AT

PH opera como perfil piloto, pero todo documento PH relevante debe poder transferirse a IT y AT o declarar por qué no.

Campo canónico recomendado:

```yaml
transferencia_PH_IT_AT:
  aplica:
  origen:
  transferible_a_PH:
  transferible_a_IT:
  transferible_a_AT:
  condiciones_transferencia:
  deuda_transferencia:
  requiere_revision:
```

**Estado:** Abierta. Prioridad alta. No bloquea PR #9 documental, pero bloquea avance hacia implementación si no se atiende antes del gate constitucional.

---

## 8. Deuda de archivo histórico

Un documento solo pasa a `99_ARCHIVO_HISTORICO/` si:

```text
1. existe reemplazo canónico;
2. existe decisión registrada.
```

**Estado:** Abierta. Prioridad media.

---

## 9. Deuda de terminología SDD

```text
SDD es la sigla oficial.
SSD no debe usarse en documentos canónicos nuevos.
```

Acción requerida:

```text
1. Revisar documentos nuevos.
2. Registrar hallazgos de SSD como deuda terminológica.
3. Corregir solo cuando no rompa citas, nombres históricos o contexto.
```

---

## 10. Próximas acciones recomendadas

```text
1. Incorporar este registro al PR #9.
2. Incorporar mapa real post-PR8.
3. Incorporar tabla de ubicación documental v0.4.4.
4. Crear plantilla README crítica.
5. Actualizar README críticos por prioridad.
6. Crear decisión registrada sobre `Base_Conocimiento_SDD/`.
7. Crear gate constitucional completo.
8. Revisar PR #9 antes de convertirlo a Ready for review.
```

---

## 11. Dictamen

La deuda estructural de AI StoryLab 1 es manejable si se registra y se paga antes de activar implementación funcional. PR #9 debe funcionar como pago inicial de deuda estructural, no como simple incorporación de documentos.

**Dictamen:** Registro de deuda estructural iniciado como instrumento vivo de mantenimiento para PR #9.

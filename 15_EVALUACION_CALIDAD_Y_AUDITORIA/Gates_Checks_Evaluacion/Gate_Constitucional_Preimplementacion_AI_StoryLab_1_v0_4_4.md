# Gate Constitucional de Preimplementación — AI StoryLab 1 v0.4.4

**Código documental:** Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4  
**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.4  
**Fecha:** 2026-07-03  
**Estado:** Aprobado para incorporación en PR #9  
**Tipo de documento:** Gate constitucional, checklist de bloqueo y autorización prefuncional  
**Ruta canónica:** `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/Gate_Constitucional_Preimplementacion_AI_StoryLab_1_v0_4_4.md`  
**Alcance:** Evaluación documental previa a cualquier implementación funcional. No autoriza implementación por sí mismo.

---

## 0. Propósito

Este gate define las condiciones mínimas que deben cumplirse antes de autorizar cualquier implementación funcional en AI StoryLab 1.

Su función es traducir la Constitución SDD, la auditoría estructural, el protocolo de cartapacios y las decisiones de PR #9 en un instrumento operativo de bloqueo, pase o diferimiento.

---

## 1. Regla principal

```text
Ninguna implementación funcional puede avanzar si no pasa este gate.
```

Esto incluye:

```text
backend,
cloud,
autenticación,
analíticas,
IA externa,
almacenamiento remoto,
manejo de datos reales,
automatización evaluativa,
publicación,
exportación,
portafolio funcional,
o cualquier módulo que toque evidencia real.
```

---

## 2. Estados posibles del gate

| Estado | Significado |
|---|---|
| Aprobado | Puede avanzar a la próxima fase autorizada. |
| Condicionado | Puede avanzar solo en el alcance definido y con deuda registrada. |
| Diferido | No avanza ahora; se reevalúa en versión futura. |
| Bloqueado | No puede avanzar hasta rediseño o decisión superior. |

---

## 3. Checklist constitucional mínimo

```text
[ ] Existe spec aprobada.
[ ] La spec declara propósito humano y pedagógico.
[ ] La spec identifica perfiles de usuario afectados.
[ ] La spec identifica impacto PH-IT-AT.
[ ] La spec declara datos tocados.
[ ] Existe clasificación de datos.
[ ] Existe criterio local-first.
[ ] Existe política de privacidad aplicable.
[ ] Existe consentimiento informado y situado cuando aplique.
[ ] Existe threat model.
[ ] Existe análisis de riesgos.
[ ] Existe criterio de no evaluación automática como juez final.
[ ] Existe revisión humana obligatoria cuando aplique.
[ ] Existe criterio de accesibilidad y comprensión humana.
[ ] Existe relación con investigación transdisciplinaria.
[ ] Existe criterio de experiencia creativa no rígida.
[ ] Existe arquitectura aprobada o semilla arquitectónica suficiente según fase.
[ ] Existe diseño aprobado o criterio de diseño según fase.
[ ] Existe plan de pruebas.
[ ] Existe plan de validación humana.
[ ] Existe plan de mantenimiento.
[ ] Existe deuda estructural revisada.
[ ] Existe deuda WIKI_SYNC revisada o justificada.
[ ] Existe documentación activa actualizada.
[ ] Existe decisión registrada de avance.
```

---

## 4. Criterios de bloqueo automático

Debe bloquearse cualquier avance que proponga:

```text
implementación sin spec aprobada,
manejo de datos reales sin política de datos,
uso de IA externa sin consentimiento, spec y threat model,
evaluación automática como juicio final,
publicación automática de portafolios,
subida automática de archivos,
backend, cloud, autenticación o analíticas sin autorización,
almacenamiento remoto sin justificación aprobada,
diseño que rigidice o sofoque el juego creativo,
ausencia de pruebas,
ausencia de revisión humana,
ruptura de local-first sin decisión registrada,
invisibilización del rol de la IA,
falta de trazabilidad documental.
```

---

## 5. Criterio PH-IT-AT

Todo avance funcional debe declarar:

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

Si la función nace desde PH como piloto, debe explicar cómo evita convertirse en jerarquía permanente sobre IT y AT.

---

## 6. Criterio de perfiles de usuario

Todo avance debe indicar si afecta:

```text
estudiante de escuela superior,
estudiante universitario,
docente,
investigador.
```

Cuando afecte menores de edad, datos educativos sensibles, evidencias creativas o evaluación, aumenta automáticamente el nivel de cuidado.

---

## 7. Criterio de IA responsable

La IA no puede actuar como autoridad invisible.

Si participa, debe registrarse:

```text
propósito,
perfil,
etapa creativa,
datos tocados,
consentimiento,
límites,
salida generada,
revisión humana,
deuda,
decisión de conservar, editar o descartar.
```

La IA no puede evaluar como juez final, vigilar, clasificar sin trazabilidad, publicar, exportar, decidir por el usuario, ocultar su participación o usar datos reales sin consentimiento y spec.

---

## 8. Criterio de flujo creativo

Toda implementación futura debe proteger:

```text
juego,
exploración,
creación,
reflexión,
evidencia,
portafolio,
agencia,
reversibilidad,
no rigidez.
```

Una función que convierta la experiencia creativa en formulario rígido debe ser rediseñada o bloqueada.

---

## 9. Criterio documental

Antes de avanzar, debe estar actualizado:

```text
[ ] spec correspondiente;
[ ] registro de decisión;
[ ] registro de deuda;
[ ] bitácora de sesión;
[ ] transferencia simétrica;
[ ] wiki humana o deuda WIKI_SYNC;
[ ] mapa, índice o tabla si cambian rutas;
[ ] bitácora del capitán si afecta rumbo longitudinal.
```

---

## 10. Resultado del gate

Formato recomendado:

```yaml
gate:
  documento_evaluado:
  version:
  fecha:
  evaluador_logico:
  resultado: aprobado/condicionado/diferido/bloqueado
  condiciones:
  deuda_generada:
  decision_registrada:
  proxima_revision:
```

---

## 11. Dictamen

Este gate debe considerarse condición necesaria, pero no suficiente por sí sola, para implementación funcional. Su aprobación debe acompañarse de decisión registrada y documentación activa actualizada.

**Dictamen:** Gate constitucional aprobado para incorporación en PR #9 como condición de preimplementación.

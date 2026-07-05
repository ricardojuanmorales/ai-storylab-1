# Guía de Revisión PH-IT-AT Triangular v0.4.5

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**PR:** #11  
**Estado:** guía breve canónica, pago de deuda documental  
**Familia documental:** guía de uso SDD, revisión humana triangular  
**Deudas atendidas:** PH, IT y AT núcleo derivadas de SPEC-OP-006, SPEC-OP-007 y SPEC-OP-008

> **Guardarraíl constitucional v0.4.5**  
> Esta guía no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa, datos reales, exportaciones reales, pruebas con personas ni automatizaciones. Sirve para revisar specs, gates, deuda y transiciones documentales.

## 1. Propósito

Esta guía establece una forma breve y reutilizable de revisar acciones sensibles desde tres perfiles creadores:

```text
PH: Programador Humanista.
IT: Investigador Transdisciplinario.
AT: Artista Transdisciplinario.
```

La revisión triangular evita que una spec avance solo porque parece pedagógicamente deseable, técnicamente ordenada o creativamente atractiva. Debe ser humana, trazable y habitable al mismo tiempo.

## 2. Regla triangular de revisión

```text
Ninguna acción sensible queda suficientemente revisada si falta una de estas preguntas:

PH:
  ¿La persona entiende, acepta, puede pausar, puede retirar y no está bajo coerción?

IT:
  ¿Qué dato, evidencia, reflexión, metadato, visibilidad o riesgo toca la acción?

AT:
  ¿La protección permite crear sin vigilancia, rigidez, miedo o castigo al borrador?
```

## 3. Checklist PH

```text
[ ] ¿La acción tiene propósito explícito?
[ ] ¿La persona entiende qué cambia?
[ ] ¿Hay consentimiento por acción sensible y no solo consentimiento genérico?
[ ] ¿Existe pausa o cancelación antes de completar la acción?
[ ] ¿Existe posibilidad conceptual de retiro?
[ ] ¿Hay riesgo de presión académica, institucional, docente o familiar?
[ ] ¿El estudiante de escuela superior conserva agencia?
[ ] ¿La mediación humana acompaña sin sustituir automáticamente la decisión?
[ ] ¿La acción evita convertir entrega pedagógica en uso adicional?
[ ] ¿La acción bloquea evaluación automática como juez final?
```

## 4. Checklist IT

```text
[ ] ¿La acción declara clase de dato, evidencia, reflexión o metadato?
[ ] ¿La sensibilidad se clasifica hacia mayor protección en caso de duda?
[ ] ¿La visibilidad por defecto está declarada?
[ ] ¿La acción minimiza datos y campos requeridos?
[ ] ¿Existe límite de propósito?
[ ] ¿La acción distingue local, privado, compartido, exportable y externo?
[ ] ¿Declara zona de seguridad local-first?
[ ] ¿Declara amenaza conceptual?
[ ] ¿Evita backend, nube, cuenta remota, analíticas o IA externa por defecto?
[ ] ¿Distingue mitigación documental de solución técnica real?
```

## 5. Checklist AT

```text
[ ] ¿La protección es proporcional al riesgo?
[ ] ¿El lenguaje es breve, situado y no intimidante?
[ ] ¿El control aparece cuando cambia estado, visibilidad, propósito o riesgo?
[ ] ¿La experiencia evita vigilancia permanente?
[ ] ¿El borrador queda protegido?
[ ] ¿La pausa, el error fértil y el cambio de dirección no se castigan?
[ ] ¿La privacidad no convierte la creación en formulario rígido?
[ ] ¿La seguridad no interrumpe innecesariamente el flujo creativo?
[ ] ¿La persona puede explorar antes de convertir algo en evidencia?
[ ] ¿La spec protege juego, agencia y expresión?
```

## 6. Criterios mínimos por perfil de usuario

| Perfil | Protección mínima |
|---|---|
| Estudiante de escuela superior | consentimiento comprensible, no coerción, privacidad por defecto, no vigilancia pedagógica, no evaluación automática, cuidado en dispositivos compartidos |
| Estudiante universitario | agencia creativa, separación creación/evidencia/investigación, privacidad de reflexión, exportación no automática |
| Docente | límites de acceso, no evidencia por defecto, no evaluación automática, mediación sin sustitución de agencia |
| Investigador | no datos por defecto, no uso secundario, protocolo y consentimiento reforzado para investigación futura |

## 7. Criterios local-first verificables

```text
Una spec conserva local-first si:
  [ ] no presupone servidor;
  [ ] no presupone cuenta obligatoria;
  [ ] no presupone nube;
  [ ] no presupone sincronización;
  [ ] no presupone IA externa;
  [ ] no presupone analíticas;
  [ ] no presupone subida automática;
  [ ] distingue local de privado;
  [ ] contempla dispositivo compartido;
  [ ] declara riesgo de pérdida, visibilidad, exportación o uso externo.
```

## 8. Plantilla breve de amenaza conceptual

```yaml
amenaza_conceptual:
  nombre:
  accion_sensible:
  perfiles_afectados:
  zona_de_seguridad:
  dato_o_evidencia_afectada:
  sensibilidad:
  visibilidad_por_defecto:
  relacion_con_consentimiento:
  riesgo_principal:
  mitigacion_documental:
  revision_PH:
  revision_IT:
  revision_AT:
  deuda_si_falta_definicion:
  gate_requerido:
```

## 9. Inventario mínimo de documentos PH-IT-AT requeridos

```text
PH:
  - guía de consentimiento, mediación, coerción y fatiga;
  - criterios de agencia estudiantil en contextos escolares;
  - checklist PH de acciones sensibles.

IT:
  - criterios de clasificación conceptual de datos;
  - criterios de sensibilidad por combinación;
  - guía de minimización y límites de propósito;
  - matriz datos/seguridad.

AT:
  - criterios de privacidad del proceso creativo;
  - criterios de seguridad sin rigidez expresiva;
  - guía de mitigaciones habitables.
```

En v0.4.5 este inventario queda pagado como orientación mínima. Las versiones completas pueden heredarse como deuda no bloqueante con ruta, función y versión destino.

## 10. Criterio de herencia de deuda

Una deuda puede heredarse solo si declara:

```text
[✓] función documental;
[✓] ruta sugerida;
[✓] responsable conceptual: PH, IT, AT o mixto;
[✓] versión destino probable;
[✓] razón por la cual no bloquea el cierre actual;
[✓] condición que la convertiría en bloqueante.
```

## 11. Dictamen

```text
resultado: guia_triangular_nucleo_pagada
paga_o_sustancialmente_paga:
  - DEUDA-SESION-002
  - DEUDA-SESION-003
  - DEUDA-SESION-004
  - DEUDA-SESION-007
  - DEUDA-SESION-008, en alcance núcleo
  - DEUDA-SESION-009, como criterio mínimo reforzado
  - DEUDA-SESION-010
  - DEUDA-SESION-013
  - DEUDA-SESION-014
  - DEUDA-SESION-015, en alcance núcleo
  - DEUDA-SESION-017
  - DEUDA-PH-001 a DEUDA-PH-010, como guía núcleo breve
  - DEUDA-SDD-IT-001 a DEUDA-SDD-IT-008, como criterios núcleo breves
  - DEUDA-AT-001 a DEUDA-AT-006, como criterios núcleo breves
hereda:
  - guías extensas por perfil;
  - escenarios por edad;
  - matrices ampliadas;
  - threat model detallado de v0.4.6.
no_autoriza:
  - implementación funcional
  - pruebas con personas
  - arquitectura técnica
```

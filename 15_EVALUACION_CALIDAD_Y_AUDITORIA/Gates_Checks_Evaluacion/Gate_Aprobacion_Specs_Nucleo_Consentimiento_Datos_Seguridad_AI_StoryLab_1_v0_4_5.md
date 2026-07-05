# Gate de Aprobación de Specs Núcleo : Consentimiento, Datos y Seguridad v0.4.5

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**PR:** #11  
**Estado:** gate aprobado con deuda controlada  
**Código documental:** GATE-SDD-001-SPECS-NUCLEO-v0_4_5  
**Ubicación:** `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/`

> **Guardarraíl constitucional v0.4.5**  
> Este gate evaluativo no autoriza implementación funcional, código de aplicación, backend, cloud, autenticación, analíticas, IA externa por defecto, uso de datos reales, subida automática, automatizaciones funcionales, pruebas con personas ni arquitectura técnica. Todo avance posterior requiere especificación aprobada, análisis de riesgo, consentimiento informado y situado, criterios local-first, revisión humana PH-IT-AT y gate constitucional correspondiente.

## 1. Propósito

Este gate valida si las primeras tres specs núcleo de AI StoryLab 1 v0.4.5 pueden reconocerse como tríada mínima de protección constitucional:

```text
SPEC-OP-006: Consentimiento Informado y Situado.
SPEC-OP-007: Datos y Privacidad.
SPEC-OP-008: Seguridad Local-First.
```

La función del gate es confirmar que consentimiento, datos/privacidad y seguridad local-first se sostienen mutuamente antes de habilitar continuidad documental hacia specs de experiencia creativa, evidencia, portafolio, exportación, arquitectura conceptual o IA futura.

## 2. Documentos requeridos

```text
[✓] Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
[✓] Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
[✓] Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md
[✓] Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
[✓] Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
[✓] Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
[✓] Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
[✓] Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

## 3. Specs evaluadas

```text
SPEC-OP-006:
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
  función: primera esclusa operativa
  protege: consentimiento, comprensión, agencia, pausa, retiro, no coerción

SPEC-OP-007:
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
  función: segunda esclusa operativa
  protege: datos, privacidad, minimización, visibilidad, no vigilancia

SPEC-OP-008:
  estado: aprobada_para_specs_nucleo_con_deuda_controlada
  función: tercera esclusa operativa
  protege: seguridad local-first, zonas de riesgo, threat model conceptual, controles humanos
```

## 4. Evidencia mínima de gate

```text
[✓] Revisión unitaria de SPEC-OP-006 registrada.
[✓] Revisión unitaria de SPEC-OP-007 registrada.
[✓] Revisión unitaria de SPEC-OP-008 registrada.
[✓] Dictamen por spec registrado.
[✓] Deuda explícita por spec registrada.
[✓] Matriz cruzada consentimiento/datos/seguridad creada.
[✓] Transferencia PH-IT-AT registrada.
[✓] Changelog actualizado.
[✓] Registro de deuda actualizado.
[✓] Bloqueo de implementación funcional preservado.
```

## 5. Matriz cruzada como evidencia central

La matriz cruzada confirma que las acciones sensibles no quedan cubiertas por una sola dimensión. Cada acción debe evaluarse simultáneamente desde:

```text
- consentimiento situado;
- datos/privacidad;
- seguridad local-first;
- estado permitido, especificable o bloqueado en v0.4.5.
```

La matriz establece invariantes constitucionales:

```text
[✓] Ninguna acción sensible se agrupa bajo consentimiento genérico.
[✓] Ningún dato creativo se convierte automáticamente en evidencia.
[✓] Ninguna evidencia se convierte automáticamente en evaluación.
[✓] Ninguna reflexión se analiza automáticamente.
[✓] Ninguna exportación ocurre automáticamente.
[✓] Ningún docente recibe datos por defecto.
[✓] Ningún investigador recibe datos por defecto.
[✓] Ninguna IA externa se activa por defecto.
```

## 6. Revisión PH-IT-AT del gate

### PH

PH valida agencia humana, consentimiento informado y situado, comprensión por acción sensible, posibilidad de pausa y retiro, no coerción, protección de estudiantes de escuela superior y cuidado frente a presión escolar o institucional.

```text
PH aprueba el Gate de Specs Núcleo porque ninguna spec evaluada autoriza captura, uso, evaluación, investigación, exportación o IA sin consentimiento situado y revisión humana cuando corresponda.
```

### IT

IT valida clasificación conceptual de datos, minimización, privacidad por defecto, trazabilidad documental, zonas de seguridad local-first, threat model conceptual y bloqueo de arquitectura técnica prematura.

```text
IT aprueba el Gate de Specs Núcleo porque la tríada establece condiciones documentales suficientes para evitar sobrerrecolección, falsa seguridad local, activación técnica prematura, sincronización, almacenamiento real, IA externa o arquitectura funcional no aprobada.
```

### AT

AT valida experiencia creativa habitable, no rigidez, no vigilancia del proceso creativo, privacidad de borradores, pausa, cancelación, no castigo a la exploración y seguridad proporcional al riesgo.

```text
AT aprueba el Gate de Specs Núcleo porque la protección no se convierte en jaula expresiva, formulario intimidante, vigilancia pedagógica ni bloqueo del juego creativo.
```

## 7. Impacto por perfil de usuario

### Estudiante de escuela superior

```text
Protecciones:
  - consentimiento comprensible;
  - mediación sin sustitución automática de agencia;
  - protección contra presión académica;
  - privacidad por defecto;
  - no evaluación automática;
  - no vigilancia pedagógica;
  - seguridad reforzada en contextos escolares o dispositivos compartidos.
```

### Estudiante universitario

```text
Protecciones:
  - agencia creativa;
  - privacidad de reflexión;
  - control sobre evidencia seleccionada;
  - separación entre creación, evidencia, investigación y evaluación;
  - exportación no automática;
  - IA externa bloqueada por defecto.
```

### Docente

```text
Protecciones y límites:
  - puede orientar procesos pedagógicos futuros;
  - no recibe datos ni evidencias por defecto;
  - no puede convertir evidencia en evaluación automática;
  - debe respetar consentimiento, privacidad y seguridad local-first;
  - requiere specs futuras para evaluación, evidencia o portafolio.
```

### Investigador

```text
Protecciones y límites:
  - no recibe datos por defecto;
  - no puede usar evidencia con fines secundarios sin consentimiento y protocolo;
  - toda investigación futura requiere spec propia, revisión PH-IT-AT y gate correspondiente;
  - la matriz bloquea uso investigativo implícito.
```

## 8. Deuda permitida

```text
[~] Glosarios específicos.
[~] Guías PH complementarias.
[~] Guías IT complementarias.
[~] Guías AT complementarias.
[~] Ejemplos por edad o contexto.
[~] Escenarios ficticios complementarios.
[~] Refinamiento de lenguaje institucional.
[~] Threat model detallado futuro.
[~] Matrices ampliadas para specs posteriores.
```

Esta deuda puede heredarse porque no elimina consentimiento situado, clasificación de datos, privacidad por defecto, seguridad local-first ni revisión PH-IT-AT.

## 9. Deuda no permitida

```text
[!] Falta de consentimiento situado.
[!] Falta de clasificación de datos.
[!] Falta de privacidad por defecto.
[!] Falta de criterio local-first.
[!] Falta de matriz cruzada.
[!] Falta de dictamen PH-IT-AT.
[!] Ambigüedad entre evidencia, evaluación e investigación.
[!] Autorización de implementación funcional.
[!] Uso de datos reales.
[!] Exportación real.
[!] IA externa por defecto.
[!] Evaluación automática.
```

## 10. Resultado del gate

```text
resultado: aprobado_con_deuda_controlada
estado: gate_aprobado_con_deuda_controlada
```

## 11. Dictamen final

Se aprueba el **Gate de Aprobación de Specs Núcleo: Consentimiento, Datos y Seguridad v0.4.5** bajo el estado:

```text
gate_aprobado_con_deuda_controlada
```

La aprobación del gate autoriza:

```text
[✓] reconocer cerrada la tríada núcleo de protección v0.4.5;
[✓] usar SPEC-OP-006, SPEC-OP-007 y SPEC-OP-008 como criterios rectores;
[✓] preparar specs futuras de experiencia creativa local-first;
[✓] preparar transición documental hacia arquitectura conceptual v0.4.6;
[✓] pagar deuda crítica o consolidable antes del cierre de sesión.
```

La aprobación del gate no autoriza:

```text
[!] implementación funcional;
[!] código de aplicación;
[!] UI real;
[!] backend, cloud, autenticación o analíticas;
[!] IA externa;
[!] datos reales;
[!] almacenamiento, cifrado, permisos o retención técnica;
[!] sincronización o respaldo real;
[!] exportaciones reales;
[!] pruebas con personas;
[!] evaluación automática;
[!] investigación con datos o evidencias reales.
```

## 12. Acción posterior obligatoria

Después de aprobar este gate y antes del cierre de sesión, se deberá ejecutar una fase de pago de deuda documental, enfocada en:

```text
- cerrar deuda ya pagada por la matriz cruzada;
- consolidar la regla triangular;
- clasificar deuda heredable y deuda bloqueante;
- actualizar el Registro de Deuda;
- actualizar bitácora activa;
- actualizar transferencia simétrica;
- actualizar changelog;
- sincronizar narrativa del PR #11.
```

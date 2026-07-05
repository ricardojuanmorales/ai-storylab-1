# Plan de Revisión : Arquitectura Conceptual AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Este plan de revisión no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento define el método de revisión para los documentos de **v0.4.6 Arquitectura Conceptual No Funcional**.

Su función no es crear arquitectura conceptual todavía. Su función es establecer cómo se evaluará cada documento antes de aprobarlo para PR #12.

La revisión debe proteger tres condiciones:

```text
[1] continuidad documental desde PR #11 y v0.4.5 Specs Núcleo;
[2] no implementación prematura;
[3] fidelidad a la tríada constitucional:
    consentimiento informado y situado,
    datos y privacidad,
    seguridad local-first.
```

---

## 2. Alcance

Este plan aplica a todos los documentos de la secuencia v0.4.6:

```text
Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
Registro_Deuda_v0_4_6_AI_StoryLab.md
Changelog y transferencia simétrica de cierre
```

La revisión se hará documento por documento. No se autoriza aprobación en bloque.

---

## 3. Documentos base obligatorios

Toda revisión v0.4.6 debe consultar como mínimo:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md

Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md
Tablero_Maestro_Dependencias_Specs_Gates_Versiones_AI_StoryLab_1_v0_4_5.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Gate_Aprobacion_Specs_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md

Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
Bitacora_Sesion_Activa_AI_StoryLab_1_v0_4_5.md
Bitacora_Transferencia_Simetrica_Activa_AI_StoryLab_1_v0_4_5.md
Changelog_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
```

Si un documento requiere evidencia de estos archivos y no la muestra o no la hereda claramente, la revisión debe marcar deuda.

---

## 4. Unidad de revisión

La unidad mínima de revisión es un documento completo.

Cada documento debe revisarse como pieza autónoma y como pieza de una secuencia mayor.

```text
revision_unitaria:
  evalua: documento individual
  pregunta: ¿cumple su función sin exceder su alcance?

revision_sistemica:
  evalua: relación con la fase v0.4.6
  pregunta: ¿mantiene continuidad con la ruta hacia v1.0.0?

revision_constitucional:
  evalua: relación con la tríada núcleo
  pregunta: ¿protege consentimiento, privacidad y seguridad local-first?

revision_poetica_operativa:
  evalua: habitabilidad creativa
  pregunta: ¿la estructura protege el juego, la agencia y la imaginación situada?
```

---

## 5. Roles de revisión

Cada documento será revisado mediante seis lentes.

### 5.1 guardian_SDD_constitucional

Revisa límites de fase, gates, deuda y no implementación.

Preguntas:

```text
[ ] ¿El documento evita implementación funcional?
[ ] ¿Evita código, UI real, backend, cloud, autenticación, analíticas e IA externa por defecto?
[ ] ¿Distingue concepto, diseño, prototipo e implementación?
[ ] ¿Mantiene deuda visible?
[ ] ¿Respeta el orden documental de PR #12?
```

### 5.2 arquitecto_documental

Revisa ubicación, estructura, trazabilidad y nombre del archivo.

Preguntas:

```text
[ ] ¿El nombre del archivo es semántico y sin prefijo numérico nuevo?
[ ] ¿La ruta propuesta es canónica?
[ ] ¿El documento declara fase, estado, naturaleza y relación con PR #12?
[ ] ¿Se conecta con documentos previos sin duplicarlos innecesariamente?
[ ] ¿Prepara el siguiente documento sin adelantarlo?
```

### 5.3 programador_humanista_PH

Revisa agencia humana, consentimiento y control.

Preguntas:

```text
[ ] ¿La persona conserva comprensión, pausa, retiro y control?
[ ] ¿El documento evita convertir cuidado en trámite rígido?
[ ] ¿Se reconocen diferencias entre estudiante de escuela superior, estudiante universitario, docente e investigador cuando aplique?
[ ] ¿Se evita evaluación automática?
[ ] ¿Se evita presión productivista sobre la creatividad?
```

### 5.4 investigador_transdisciplinario_IT

Revisa evidencia, límites epistémicos e investigación responsable.

Preguntas:

```text
[ ] ¿Distingue dato, evidencia, reflexión, metadato, interpretación y evaluación?
[ ] ¿Evita investigación con datos reales?
[ ] ¿Evita inferencias automáticas sobre personas?
[ ] ¿Declara límites de uso de evidencia?
[ ] ¿Protege trazabilidad sin convertirla en vigilancia?
```

### 5.5 artista_transdisciplinario_AT

Revisa experiencia creativa, aprendizaje lúdico y expresión plural.

Preguntas:

```text
[ ] ¿El documento deja espacio para exploración y juego creativo?
[ ] ¿Evita una arquitectura rígida, burocrática o punitiva?
[ ] ¿Permite ambigüedad fértil sin perder cuidado?
[ ] ¿Reconoce la creación como proceso humano situado?
[ ] ¿Protege la pluralidad expresiva?
```

### 5.6 Bitacora_del_Capitan

Revisa continuidad narrativa y memoria de sesión.

Preguntas:

```text
[ ] ¿El documento deja claro el rumbo?
[ ] ¿Nombra advertencias sin dramatizarlas?
[ ] ¿Conserva la brújula constitucional?
[ ] ¿Evita crear bitácoras paralelas innecesarias?
[ ] ¿Deja una señal clara para la siguiente sesión?
```

---

## 6. Pregunta triangular de revisión

Todo documento debe pasar por esta pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Resultado permitido:

```text
[✓] responde claramente las tres dimensiones;
[~] responde parcialmente y requiere corrección;
[!] no responde una o más dimensiones y no debe aprobarse.
```

---

## 7. Fases de revisión de cada documento

Cada documento debe atravesar cinco fases antes de aprobación.

### Fase 1 : revisión de entrada

```text
[ ] confirmar archivo correcto;
[ ] confirmar ruta propuesta;
[ ] confirmar versión y fase;
[ ] confirmar que el documento no fue aprobado previamente;
[ ] confirmar que no hay cambios no relacionados en la rama.
```

### Fase 2 : revisión estructural

```text
[ ] propósito claro;
[ ] alcance explícito;
[ ] límites no funcionales;
[ ] relación con documentos base;
[ ] secuencia dentro de v0.4.6;
[ ] deuda visible;
[ ] criterio de cierre o transición.
```

### Fase 3 : revisión constitucional

```text
[ ] consentimiento situado;
[ ] datos y privacidad;
[ ] seguridad local-first;
[ ] revisión PH-IT-AT;
[ ] no implementación;
[ ] no datos reales;
[ ] no automatización funcional.
```

### Fase 4 : revisión de deuda

```text
[ ] deuda heredada identificada;
[ ] deuda nueva registrada si aparece;
[ ] deuda bloqueante distinguida de deuda no bloqueante;
[ ] condición de pago o transferencia declarada;
[ ] ningún riesgo queda escondido.
```

### Fase 5 : dictamen

```text
DICTAMEN A:
  aprobable sin cambios.

DICTAMEN B:
  aprobable con correcciones menores.

DICTAMEN C:
  no aprobable todavía.

DICTAMEN D:
  fuera de alcance de v0.4.6.
```

---

## 8. Criterios de aprobación

Un documento puede aprobarse si cumple todo lo siguiente:

```text
[ ] mantiene alcance documental SDD;
[ ] no autoriza implementación;
[ ] responde la pregunta triangular;
[ ] distingue concepto, diseño, prototipo e implementación;
[ ] identifica deuda aplicable;
[ ] respeta nombres semánticos sin prefijos numéricos nuevos;
[ ] no crea bitácoras paralelas innecesarias;
[ ] no duplica documentos canónicos;
[ ] prepara la siguiente pieza sin adelantarla;
[ ] conserva relación con la ruta hacia v1.0.0.
```

---

## 9. Criterios de no aprobación

Un documento no debe aprobarse si:

```text
[!] sugiere implementación funcional;
[!] introduce UI real;
[!] define backend, cloud, autenticación, analíticas o arquitectura técnica ejecutable;
[!] asume IA externa por defecto;
[!] usa o solicita datos reales;
[!] propone pruebas con personas;
[!] habilita evaluación automática;
[!] convierte evidencia creativa en vigilancia;
[!] omite consentimiento, privacidad o seguridad local-first;
[!] oculta deuda;
[!] mezcla varias piezas de la secuencia sin revisión unitaria.
```

---

## 10. Matriz breve de revisión

Cada revisión debe producir una matriz mínima:

```text
documento:
estado:
dictamen:

fortalezas:
  - ...

hallazgos_obligatorios:
  - ...

correcciones_recomendadas:
  - ...

deuda_detectada:
  - ...

riesgo_de_implementacion_prematura:
  bajo | medio | alto

decision:
  aprobar | corregir | pausar | retirar
```

Esta matriz puede vivir en la conversación de revisión, en el cuerpo del PR o en un documento de revisión si la fase lo requiere. No debe crear una bitácora paralela por defecto.

---

## 11. Orden de trabajo para PR #12

PR #12 debe avanzar en commits pequeños y legibles.

Orden base:

```text
commit_1:
  documentos de inicio de sesión y continuidad.

commit_2:
  Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md.

commit_3:
  Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md.

commit_4_en_adelante:
  un documento aprobado por ronda,
  salvo que una pieza requiera trazabilidad mínima inseparable.
```

Regla operativa:

```text
No usar git add .
Usar rutas explícitas.
Revisar git diff --cached antes de cada commit.
Mantener PR #12 como draft mientras la fase siga en construcción.
```

---

## 12. Comandos manuales seguros

Ruta canónica propuesta para este documento:

```text
18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
```

Comandos sugeridos:

```bash
mkdir -p 18_DOCUMENTACION_ACTIVA/Planes

cp ~/Downloads/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md \
  18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md

git status --short

git add \
  18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md

git diff --cached -- \
  18_DOCUMENTACION_ACTIVA/Planes/Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: añadir plan de revision arquitectura conceptual v0.4.6"
```

---

## 13. Relación con el siguiente documento

Este plan habilita la revisión del próximo documento de la secuencia:

```text
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
```

Ese documento no debe redactarse ni aprobarse hasta que este plan quede evaluado y aprobado.

---

## 14. Dictamen de preparación

```text
documento: Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_3
implementacion: no_autorizada
siguiente_documento: Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

La revisión no es un peaje burocrático. Es el faro que evita que una buena idea confunda horizonte con puerto.

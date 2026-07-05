# Criterios de Semillas Arquitectónicas : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Criterios_Semillas_Arquitectonicas_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Este documento no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento define los criterios para identificar, revisar, aceptar, pausar o rechazar **semillas arquitectónicas** dentro de la fase **v0.4.6 Arquitectura Conceptual No Funcional** de AI StoryLab 1.

Una semilla arquitectónica no es una función, una pantalla, una base de datos, una API, un componente de software ni un prototipo.

Una semilla arquitectónica es una formulación conceptual temprana que permite explorar:

```text
[ ] qué entidades podrían importar;
[ ] qué relaciones podrían existir;
[ ] qué límites deben protegerse;
[ ] qué tensiones conceptuales deben resolverse;
[ ] qué decisiones deben permanecer reversibles;
[ ] qué riesgos aparecen antes de construir.
```

La semilla sirve para pensar con cuidado antes de diseñar, prototipar o implementar.

---

## 2. Alcance

Este documento aplica a la identificación y revisión de semillas arquitectónicas para v0.4.6.

Se permite:

```text
[✓] nombrar ideas conceptuales;
[✓] clasificar tensiones;
[✓] mapear relaciones no técnicas;
[✓] declarar límites;
[✓] identificar riesgos conceptuales;
[✓] formular preguntas de revisión;
[✓] proponer criterios de aceptación o rechazo;
[✓] registrar deuda;
[✓] preparar el camino hacia specs futuras.
```

No se permite:

```text
[!] convertir semillas en funcionalidades;
[!] describir UI real;
[!] definir modelos de datos técnicos;
[!] definir permisos técnicos;
[!] definir almacenamiento, cifrado o retención técnica;
[!] proponer backend, cloud, autenticación o analíticas;
[!] proponer automatización funcional;
[!] usar datos reales;
[!] preparar pruebas con personas;
[!] definir evaluación automática;
[!] activar investigación con evidencia real;
[!] producir arquitectura técnica ejecutable.
```

---

## 3. Documentos base

Este documento debe interpretarse junto a:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

Si una semilla entra en tensión con esos documentos, la semilla no se fuerza. Se revisa, se pausa o se descarta.

---

## 4. Definición operativa

Una **semilla arquitectónica** es una unidad conceptual mínima que propone una posible forma de organizar sentido dentro de AI StoryLab 1 sin construir sistema.

Debe poder expresarse en lenguaje documental, no técnico.

Estructura mínima:

```text
nombre:
  denominacion semantica de la semilla

intencion:
  qué tensión, necesidad o posibilidad conceptual explora

relacion_con_la_triada:
  consentimiento:
  datos_privacidad:
  seguridad_local_first:

limites:
  qué no autoriza

riesgos:
  qué podría salir mal si se interpreta mal

reversibilidad:
  cómo puede pausarse, corregirse, retirarse o reformularse

estado:
  propuesta | en_revision | aceptada_con_deuda | pausada | rechazada
```

Una semilla válida debe ser pequeña, revisable y reversible. Si parece una ciudad completa, todavía no es semilla: es maqueta disfrazada con capa de niebla.

---

## 5. Lo que una semilla no es

Para evitar deslizamientos hacia implementación, se establecen distinciones obligatorias.

```text
semilla_arquitectonica:
  formula una posibilidad conceptual.
  ejemplo: "evidencia creativa como objeto interpretable por la persona".

objeto_de_dominio:
  define una entidad conceptual con límites más estables.
  ejemplo: "Evidencia Creativa".

flujo_de_experiencia:
  describe una secuencia humana de interacción no funcional.
  ejemplo: "la persona revisa una evidencia antes de decidir compartirla".

prototipo:
  ensaya una forma operativa con datos ficticios o materiales controlados.
  no corresponde a v0.4.6.

implementacion:
  construye comportamiento funcional.
  no corresponde a v0.4.6.
```

Una semilla no debe contener instrucciones de construcción. Tampoco debe anticipar una pantalla, un endpoint, una tabla, una cuenta, un permiso técnico ni una automatización.

---

## 6. Tipos de semillas permitidas

En v0.4.6 se permiten los siguientes tipos de semillas, siempre en modo conceptual.

### 6.1 Semilla de entidad

Explora si un concepto podría convertirse en objeto de dominio futuro.

Ejemplos de formulación permitida:

```text
"posible entidad conceptual: evidencia creativa"
"posible entidad conceptual: reflexión situada"
"posible entidad conceptual: consentimiento por acción sensible"
```

No debe definir estructura técnica.

### 6.2 Semilla de relación

Explora vínculos entre conceptos.

Ejemplos de formulación permitida:

```text
"relación conceptual entre evidencia y portafolio"
"relación conceptual entre consentimiento y visibilidad"
"relación conceptual entre reflexión e interpretación humana"
```

No debe definir flujo funcional ni automatización.

### 6.3 Semilla de límite

Explora fronteras que no deben cruzarse.

Ejemplos de formulación permitida:

```text
"límite entre reflexión personal y evidencia evaluable"
"límite entre portafolio creativo y expediente institucional"
"límite entre ayuda conceptual e inferencia automática"
```

No debe definir mecanismo técnico de control.

### 6.4 Semilla de amenaza

Explora riesgos antes de cualquier prototipo.

Ejemplos de formulación permitida:

```text
"riesgo de convertir evidencia creativa en vigilancia"
"riesgo de visibilidad no comprendida"
"riesgo de presión evaluativa sobre creación lúdica"
```

No debe proponer controles técnicos ejecutables.

### 6.5 Semilla de decisión reversible

Explora decisiones que deben poder pausarse, retirarse o reformularse.

Ejemplos de formulación permitida:

```text
"decisión reversible sobre visibilidad de una evidencia"
"decisión reversible sobre inclusión en portafolio"
"decisión reversible sobre interpretación investigativa futura"
```

No debe definir implementación de reversión.

### 6.6 Semilla de zona conceptual

Explora espacios conceptuales local-first sin definir infraestructura.

Ejemplos de formulación permitida:

```text
"zona personal de creación"
"zona compartida de revisión humana"
"zona institucional de interpretación limitada"
```

No debe definir almacenamiento, sincronización ni permisos técnicos.

---

## 7. Criterios de aceptación

Una semilla puede aceptarse para trabajo conceptual si cumple todos los criterios siguientes:

```text
[ ] tiene nombre semántico claro;
[ ] declara intención conceptual;
[ ] no autoriza implementación;
[ ] no requiere datos reales;
[ ] no presupone UI real;
[ ] no presupone backend, cloud, autenticación ni analíticas;
[ ] responde la pregunta triangular;
[ ] identifica al menos un límite;
[ ] identifica al menos un riesgo conceptual;
[ ] declara cómo puede pausarse o revertirse;
[ ] respeta agencia humana;
[ ] preserva privacidad por defecto;
[ ] mantiene orientación local-first;
[ ] puede alimentar una spec futura sin reemplazarla;
[ ] no duplica un documento canónico existente.
```

La aceptación de una semilla no significa aprobación de arquitectura. Solo significa que puede seguir siendo pensada.

---

## 8. Criterios de rechazo

Una semilla debe rechazarse si incurre en cualquiera de estas condiciones:

```text
[!] contiene instrucciones de implementación;
[!] describe pantallas reales;
[!] define modelos de datos técnicos;
[!] presupone captura o almacenamiento real;
[!] presupone sincronización, respaldo o exportación real;
[!] exige IA externa por defecto;
[!] habilita evaluación automática;
[!] usa o solicita datos reales;
[!] propone pruebas con personas;
[!] convierte reflexión creativa en vigilancia;
[!] elimina pausa, retiro o control humano;
[!] vuelve invisible la clasificación de datos;
[!] confunde seguridad conceptual con control técnico ejecutable;
[!] mezcla varias semillas sin poder separarlas;
[!] contradice la tríada constitucional.
```

Una semilla rechazada no desaparece del pensamiento del proyecto. Debe registrarse como decisión, advertencia o deuda si su tensión sigue siendo útil.

---

## 9. Criterios de pausa

Una semilla debe pausarse, no rechazarse, si:

```text
[ ] su intención es valiosa pero su alcance es demasiado amplio;
[ ] requiere una spec previa aún no aprobada;
[ ] depende de deuda bloqueante;
[ ] activa una amenaza conceptual no tratada;
[ ] requiere lenguaje por edad o contexto aún no redactado;
[ ] necesita revisión PH-IT-AT ampliada;
[ ] podría ser válida en v0.4.7 o v0.5.x, pero no en v0.4.6.
```

La pausa es una forma de cuidado documental. No todo lo que importa debe entrar ahora.

---

## 10. Pregunta triangular aplicada a semillas

Cada semilla debe responder:

```text
Consentimiento:
  ¿La persona entiende qué posibilidad conceptual se abre?
  ¿Puede aceptar, pausar o retirar su participación conceptual futura?
  ¿La semilla evita asumir consentimiento por defecto?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad tocaría si avanzara?
  ¿La semilla minimiza exposición conceptual?
  ¿Evita convertir lo personal en evaluable sin revisión humana?

Seguridad local-first:
  ¿En qué zona conceptual ocurre?
  ¿Qué amenaza conceptual activa?
  ¿Qué control humano debe existir antes de cualquier fase posterior?
```

Si una semilla no puede responder estas preguntas, queda pausada o rechazada.

---

## 11. Matriz de revisión de semillas

Toda semilla propuesta debe revisarse con esta matriz mínima:

```text
semilla:
tipo:
estado_propuesto:

intencion:
  ...

documentos_base:
  ...

consentimiento:
  respuesta:
  riesgo:
  condicion:

datos_privacidad:
  respuesta:
  riesgo:
  condicion:

seguridad_local_first:
  respuesta:
  riesgo:
  condicion:

limites:
  - ...

riesgos_conceptuales:
  - ...

reversibilidad:
  pausa:
  retiro:
  reformulacion:

deuda_asociada:
  - ...

dictamen:
  aceptar_para_trabajo_conceptual |
  aceptar_con_deuda |
  pausar |
  rechazar

razon:
  ...
```

La matriz no debe usarse para convertir la semilla en especificación técnica.

---

## 12. Revisión por roles PH-IT-AT

### 12.1 Revisión PH

La revisión PH pregunta:

```text
[ ] ¿La semilla preserva agencia humana?
[ ] ¿Evita asumir consentimiento tácito?
[ ] ¿Incluye posibilidad de pausa o retiro?
[ ] ¿Reconoce diferencias entre perfiles humanos cuando aplique?
[ ] ¿Evita presión productivista?
```

### 12.2 Revisión IT

La revisión IT pregunta:

```text
[ ] ¿La semilla distingue evidencia, dato, reflexión, metadato e interpretación?
[ ] ¿Evita investigación con datos reales?
[ ] ¿Evita inferencias automáticas?
[ ] ¿Declara límites epistémicos?
[ ] ¿Protege trazabilidad sin vigilancia?
```

### 12.3 Revisión AT

La revisión AT pregunta:

```text
[ ] ¿La semilla permite juego creativo?
[ ] ¿Evita rigidez prematura?
[ ] ¿Admite pluralidad expresiva?
[ ] ¿Protege ambigüedad fértil?
[ ] ¿No convierte la creación en formulario?
```

Una semilla que no resiste estas tres revisiones no debe avanzar.

---

## 13. Relación con deuda heredada

Las semillas arquitectónicas deben vigilar especialmente esta deuda heredada:

```text
threat_model_detallado_local_first:
  impacto:
    toda semilla de amenaza, zona o visibilidad debe quedar limitada hasta completar threat model ampliado.

criterios_de_objeto_de_dominio:
  impacto:
    toda semilla de entidad debe esperar la Spec_Operativa_Objeto_Dominio_AI_StoryLab.md para estabilizarse.

decisiones_reversibles:
  impacto:
    toda semilla que implique inclusión, visibilidad, interpretación o portafolio debe declarar pausa y retiro conceptual.

matriz_acciones_sensibles_arquitectura:
  impacto:
    toda semilla que toque acciones sensibles debe registrarse como candidata a matriz ampliada.

limites_entre_concepto_diseno_prototipo_implementacion:
  impacto:
    toda semilla debe evitar lenguaje de construcción funcional.
```

---

## 14. Señales de deslizamiento hacia implementación

Durante la revisión, se debe marcar alerta si aparecen verbos o frases como:

```text
construir
implementar
programar
automatizar
capturar datos
guardar datos
cifrar
sincronizar
autenticar
loguear
subir
exportar
renderizar
diseñar pantalla
crear backend
integrar IA externa
evaluar automáticamente
probar con usuarios
```

Estos términos no están prohibidos como objetos de advertencia o límite. Están prohibidos como acciones autorizadas por la fase.

---

## 15. Ejemplos de formulación permitida

Ejemplo 1:

```text
semilla:
  evidencia creativa como entidad interpretable por la persona

tipo:
  entidad

intencion:
  explorar cómo una creación puede ser reconocida como evidencia sin convertirla automáticamente en evaluación.

limite:
  no define almacenamiento, portafolio técnico ni rúbrica.

riesgo:
  que la evidencia sea usada como vigilancia o medición automática.

dictamen:
  aceptar_para_trabajo_conceptual
```

Ejemplo 2:

```text
semilla:
  zona personal de creación

tipo:
  zona conceptual

intencion:
  explorar un espacio conceptual donde la persona pueda crear, revisar y retirar sin exposición por defecto.

limite:
  no define almacenamiento local, permisos técnicos ni interfaz.

riesgo:
  confundir zona conceptual con arquitectura técnica local-first.

dictamen:
  aceptar_con_deuda
```

Ejemplo 3:

```text
semilla:
  evaluación automática de creatividad

tipo:
  amenaza

intencion:
  nombrar un riesgo a evitar, no una función.

limite:
  no se autoriza evaluación automática.

riesgo:
  convertir creatividad en puntuación.

dictamen:
  aceptar_solo_como_amenaza_conceptual
```

---

## 16. Ejemplos de formulación no permitida

No permitido:

```text
"crear una pantalla donde el estudiante sube su evidencia"
```

Razón:

```text
introduce UI real, subida y posible captura de datos.
```

No permitido:

```text
"guardar automáticamente reflexiones en una base de datos local cifrada"
```

Razón:

```text
introduce almacenamiento, automatización y cifrado técnico.
```

No permitido:

```text
"usar IA externa para evaluar portafolios"
```

Razón:

```text
introduce IA externa, evaluación automática y riesgo de datos reales.
```

No permitido:

```text
"hacer pruebas con estudiantes para validar comprensión"
```

Razón:

```text
introduce pruebas con personas y posible investigación con menores.
```

---

## 17. Resultado esperado de este documento

Al aprobarse este documento, PR #12 queda habilitado para recibir semillas arquitectónicas solo bajo criterios explícitos.

Este documento no aprueba ninguna semilla específica.

Lo que habilita:

```text
[✓] revisar semillas;
[✓] aceptar semillas para trabajo conceptual;
[✓] pausar semillas con deuda;
[✓] rechazar semillas fuera de fase;
[✓] preparar la Spec_Operativa_Objeto_Dominio_AI_StoryLab.md.
```

Lo que no habilita:

```text
[!] construir arquitectura técnica;
[!] diseñar experiencia funcional;
[!] crear prototipo;
[!] seleccionar tecnología;
[!] usar datos reales;
[!] abrir pruebas con personas;
[!] automatizar evaluación.
```

---

## 18. Ruta canónica propuesta

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
```

---

## 19. Comandos manuales seguros

```bash
mkdir -p 00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza

cp ~/Downloads/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md

git status --short

git add \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md

git diff --cached -- \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Gobernanza/Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: definir criterios de semillas arquitectonicas v0.4.6"
```

---

## 20. Relación con el siguiente documento

Este documento habilita la preparación de:

```text
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
```

La spec de objeto de dominio no debe convertir semillas en implementación. Debe definir cómo una semilla de entidad puede madurar hacia objeto conceptual estable.

---

## 21. Dictamen de preparación

```text
documento: Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_4
implementacion: no_autorizada
siguiente_documento: Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

Una semilla arquitectónica no es una orden de construcción. Es una pregunta con raíces pequeñas, plantada donde el cuidado todavía puede decidir hacia dónde crece.

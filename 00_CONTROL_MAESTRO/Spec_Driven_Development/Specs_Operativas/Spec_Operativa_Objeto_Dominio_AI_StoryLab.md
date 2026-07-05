# Spec Operativa : Objeto de Dominio AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Spec_Operativa_Objeto_Dominio_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Criterios_Semillas_Arquitectonicas_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Esta spec operativa no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento define qué significa **objeto de dominio** en la fase **v0.4.6 Arquitectura Conceptual No Funcional** de AI StoryLab 1.

Su función es establecer criterios para que una semilla arquitectónica de entidad pueda madurar hacia una entidad conceptual más estable, sin convertirse en:

```text
[!] modelo de datos técnico;
[!] tabla;
[!] clase de programación;
[!] componente de UI;
[!] endpoint;
[!] permiso técnico;
[!] mecanismo de almacenamiento;
[!] función del sistema;
[!] automatización;
[!] evaluación automática.
```

Un objeto de dominio en v0.4.6 es una pieza conceptual que permite nombrar, revisar y delimitar una parte significativa del universo documental de AI StoryLab 1.

---

## 2. Alcance

Esta spec aplica a objetos de dominio conceptuales.

Se permite:

```text
[✓] definir entidades conceptuales;
[✓] declarar intención y función documental;
[✓] describir límites;
[✓] identificar relaciones conceptuales;
[✓] clasificar riesgos;
[✓] asociar preguntas de consentimiento, privacidad y seguridad local-first;
[✓] establecer criterios de reversibilidad;
[✓] registrar deuda;
[✓] preparar specs posteriores.
```

No se permite:

```text
[!] definir estructura técnica de datos;
[!] definir campos obligatorios para bases de datos;
[!] definir persistencia;
[!] definir cifrado o permisos técnicos;
[!] diseñar pantallas reales;
[!] definir lógica de aplicación;
[!] seleccionar tecnología;
[!] activar IA externa;
[!] usar datos reales;
[!] diseñar exportaciones reales;
[!] realizar pruebas con personas;
[!] crear arquitectura técnica ejecutable.
```

---

## 3. Documentos base

Esta spec debe interpretarse junto a:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

Si un objeto conceptual contradice estos documentos, no debe estabilizarse.

---

## 4. Definición operativa

Un **objeto de dominio** es una entidad conceptual estable, nombrable y revisable que organiza una parte del lenguaje, los límites y las relaciones de AI StoryLab 1.

Debe cumplir cinco condiciones mínimas:

```text
[1] nombrabilidad:
    puede nombrarse con lenguaje semántico claro.

[2] delimitación:
    puede explicar qué incluye y qué excluye.

[3] relación:
    puede explicar con qué otros conceptos se vincula.

[4] revisión:
    puede evaluarse mediante la pregunta triangular.

[5] reversibilidad:
    puede pausarse, reformularse o retirarse antes de fases posteriores.
```

Un objeto de dominio no es una cosa técnica. Es una pieza de sentido. No tiene columnas, botones, APIs ni motor debajo. Todavía vive en el mapa, no en la maquinaria.

---

## 5. Diferencias obligatorias

Para evitar deslizamientos, se establecen diferencias entre conceptos cercanos.

```text
semilla_arquitectonica:
  pregunta conceptual temprana.
  estado: exploratoria.
  ejemplo: "evidencia creativa como entidad interpretable".

objeto_de_dominio:
  entidad conceptual más estable.
  estado: revisable y delimitada.
  ejemplo: "Evidencia Creativa" como concepto con límites, riesgos y relaciones.

modelo_de_datos:
  estructura técnica para almacenar información.
  estado: no autorizado en v0.4.6.

flujo_de_experiencia:
  secuencia humana o narrativa de interacción.
  estado: reservado principalmente para v0.4.7.

prototipo:
  ensayo operativo controlado.
  estado: no autorizado en v0.4.6.

implementacion:
  comportamiento funcional construido.
  estado: no autorizado en v0.4.6.
```

---

## 6. Estructura mínima de un objeto de dominio conceptual

Todo objeto de dominio propuesto debe documentarse con esta estructura mínima:

```text
nombre:
  nombre semántico del objeto.

definicion_breve:
  explicación conceptual clara.

proposito:
  por qué el objeto existe dentro del dominio.

origen:
  semilla, deuda, spec previa, matriz, gate o tensión documental que lo justifica.

incluye:
  qué puede contener conceptualmente.

excluye:
  qué no debe incluir.

relaciones:
  conceptos con los que se vincula.

acciones_sensibles:
  acciones conceptuales que podrían activarse si madura.

consentimiento:
  pregunta, riesgo y condición.

datos_privacidad:
  dato, evidencia, reflexión, metadato o visibilidad que podría tocar.

seguridad_local_first:
  zona conceptual, amenaza y control humano requerido.

reversibilidad:
  pausa, retiro, reformulación o descarte.

deuda:
  deuda heredada o nueva asociada.

estado:
  candidato | en_revision | aceptado_conceptual | aceptado_con_deuda | pausado | rechazado.
```

---

## 7. Estados permitidos

Los objetos de dominio conceptuales pueden tener estos estados:

```text
candidato:
  existe como propuesta inicial.
  no debe usarse como base de nuevas specs sin revisión.

en_revision:
  está siendo evaluado mediante la pregunta triangular y revisión PH-IT-AT.

aceptado_conceptual:
  queda permitido como objeto conceptual de v0.4.6.
  no autoriza implementación.

aceptado_con_deuda:
  puede usarse conceptualmente, pero conserva deuda explícita.

pausado:
  su valor es reconocido, pero no puede avanzar por deuda, ambigüedad o riesgo.

rechazado:
  no corresponde al dominio, contradice la tríada o desliza hacia implementación.
```

Ningún estado autoriza sistema funcional.

---

## 8. Criterios de maduración desde semilla

Una semilla puede madurar hacia objeto de dominio solo si cumple:

```text
[ ] tiene nombre semántico claro;
[ ] responde a una necesidad conceptual real;
[ ] no duplica un objeto ya existente;
[ ] puede delimitar qué incluye y qué excluye;
[ ] puede relacionarse con la tríada constitucional;
[ ] no requiere datos reales;
[ ] no exige UI, backend, cloud, autenticación ni analíticas;
[ ] no presupone IA externa;
[ ] identifica riesgos conceptuales;
[ ] define reversibilidad documental;
[ ] puede revisarse PH-IT-AT;
[ ] puede permanecer útil sin implementación.
```

Si una semilla requiere construcción para ser entendida, no está lista para objeto de dominio.

---

## 9. Criterios de aceptación de objeto de dominio

Un objeto de dominio puede aceptarse conceptualmente si:

```text
[ ] su definición es clara y no técnica;
[ ] su propósito está vinculado a la ruta de AI StoryLab 1;
[ ] su alcance no invade diseño de experiencia;
[ ] su alcance no invade prototipo;
[ ] su alcance no invade implementación;
[ ] responde la pregunta triangular;
[ ] declara límites explícitos;
[ ] identifica acciones sensibles potenciales;
[ ] identifica deuda aplicable;
[ ] preserva agencia humana;
[ ] evita evaluación automática;
[ ] evita investigación con datos reales;
[ ] mantiene privacidad por defecto;
[ ] mantiene orientación local-first conceptual;
[ ] puede retirarse o reformularse.
```

Aceptar un objeto no significa diseñarlo. Significa que el proyecto puede hablar de él con precisión.

---

## 10. Criterios de pausa

Un objeto debe pausarse si:

```text
[ ] depende de threat model local-first ampliado aún no aprobado;
[ ] requiere matriz de acciones sensibles ampliada;
[ ] activa deuda de consentimiento por edad o contexto;
[ ] mezcla evidencia, evaluación e investigación sin límites claros;
[ ] necesita revisión PH-IT-AT especializada;
[ ] no distingue dato, reflexión, metadato y visibilidad;
[ ] podría convertirse en funcionalidad por ambigüedad;
[ ] pertenece mejor a v0.4.7 o fase posterior.
```

La pausa conserva la posibilidad sin forzar la puerta.

---

## 11. Criterios de rechazo

Un objeto debe rechazarse si:

```text
[!] solo puede explicarse como función técnica;
[!] presupone almacenamiento real;
[!] presupone captura de datos reales;
[!] presupone exportación o sincronización real;
[!] presupone cuentas o autenticación;
[!] introduce analíticas;
[!] introduce IA externa por defecto;
[!] habilita evaluación automática;
[!] convierte portafolio en expediente;
[!] convierte reflexión en vigilancia;
[!] elimina control humano;
[!] contradice consentimiento informado y situado;
[!] contradice privacidad por defecto;
[!] contradice seguridad local-first;
[!] no puede revertirse.
```

Un rechazo puede registrarse como advertencia si ayuda a proteger la arquitectura conceptual.

---

## 12. Pregunta triangular aplicada a objetos de dominio

Todo objeto de dominio debe responder:

```text
Consentimiento:
  ¿La persona entiende qué representa este objeto?
  ¿La persona puede aceptar, pausar o retirar acciones asociadas si el objeto madura?
  ¿El objeto evita consentimiento tácito o por defecto?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad podría tocar?
  ¿Qué debe permanecer privado por defecto?
  ¿Qué riesgo existe de convertir creación en evaluación, expediente o vigilancia?

Seguridad local-first:
  ¿En qué zona conceptual ocurre?
  ¿Qué amenaza conceptual activa?
  ¿Qué control humano debe existir antes de cualquier fase posterior?
```

Si un objeto no responde alguna dimensión, queda pausado.

---

## 13. Relaciones conceptuales permitidas

Durante v0.4.6 se pueden describir relaciones conceptuales no funcionales.

Tipos permitidos:

```text
relacion_de_pertenencia:
  un concepto puede formar parte de otro sin definir estructura técnica.

relacion_de_visibilidad:
  un concepto puede tener exposición conceptual limitada o situada.

relacion_de_interpretacion:
  un concepto puede ser interpretado por una persona o rol humano.

relacion_de_cuidado:
  un concepto requiere protección, pausa o revisión antes de avanzar.

relacion_de_deuda:
  un concepto no puede estabilizarse hasta resolver una deuda.

relacion_de_limite:
  un concepto define frontera frente a otro.
```

No se permiten relaciones técnicas como:

```text
foreign_key
endpoint
schema
permission_model
storage_policy
sync_flow
auth_role
event_trigger
analytics_pipeline
```

Esos términos pueden mencionarse solo como límites no autorizados.

---

## 14. Familias conceptuales candidatas

Esta spec no aprueba objetos específicos. Solo reconoce familias conceptuales que podrían contener candidatos futuros.

```text
familia_persona_y_agencia:
  conceptos relacionados con sujetos humanos, perfiles, control y participación situada.

familia_consentimiento:
  conceptos relacionados con aceptación, pausa, retiro, comprensión y acciones sensibles.

familia_evidencia_creativa:
  conceptos relacionados con obras, reflexiones, procesos, indicios y portafolios no funcionales.

familia_privacidad_y_visibilidad:
  conceptos relacionados con exposición, interpretación, clasificación y minimización conceptual.

familia_seguridad_local_first:
  conceptos relacionados con zonas, amenazas, cuidado, control humano y límites de transición.

familia_revision_y_gobernanza:
  conceptos relacionados con gates, deuda, decisiones reversibles y trazabilidad documental.
```

Estas familias son contenedores de revisión, no módulos del sistema.

---

## 15. Plantilla de objeto de dominio conceptual

```text
objeto:
  nombre:

estado:
  candidato | en_revision | aceptado_conceptual | aceptado_con_deuda | pausado | rechazado

definicion_breve:
  ...

proposito:
  ...

origen:
  ...

incluye:
  - ...

excluye:
  - ...

relaciones_conceptuales:
  - concepto:
    tipo_de_relacion:
    limite:

acciones_sensibles_potenciales:
  - ...

pregunta_triangular:
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

revision_PH:
  ...

revision_IT:
  ...

revision_AT:
  ...

reversibilidad:
  pausa:
  retiro:
  reformulacion:

deuda:
  - id_o_nombre:
    razon:
    condicion_de_pago:

dictamen:
  ...
```

---

## 16. Revisión PH-IT-AT

### 16.1 Revisión PH

Pregunta:

```text
¿Este objeto aumenta o reduce la agencia humana?
```

Criterios:

```text
[ ] conserva comprensión;
[ ] permite pausa;
[ ] permite retiro;
[ ] reconoce perfiles humanos cuando aplique;
[ ] evita automatizar decisiones sobre personas;
[ ] evita presionar productividad creativa.
```

### 16.2 Revisión IT

Pregunta:

```text
¿Este objeto conserva claridad sobre evidencia, interpretación y límites de investigación?
```

Criterios:

```text
[ ] distingue dato, evidencia, reflexión y metadato;
[ ] evita investigación con datos reales;
[ ] evita inferencias automáticas;
[ ] limita interpretación;
[ ] protege trazabilidad sin vigilancia.
```

### 16.3 Revisión AT

Pregunta:

```text
¿Este objeto deja respirar la creación?
```

Criterios:

```text
[ ] permite juego creativo;
[ ] evita rigidez burocrática;
[ ] protege pluralidad expresiva;
[ ] admite ambigüedad fértil;
[ ] evita convertir creación en formulario.
```

---

## 17. Deuda heredada relevante

Esta spec reconoce como deuda bloqueante o vigilada:

```text
threat_model_detallado_local_first:
  impacto:
    los objetos relacionados con zonas, visibilidad, portafolio o evidencia deben permanecer limitados hasta threat model ampliado.

matriz_acciones_sensibles_arquitectura:
  impacto:
    los objetos que impliquen acciones sensibles requieren matriz ampliada antes de specs posteriores.

decisiones_reversibles:
  impacto:
    todo objeto con visibilidad, evidencia, interpretación o portafolio debe declarar pausa, retiro y reformulación.

ejemplos_por_edad_y_contexto:
  impacto:
    los objetos que afecten estudiantes de escuela superior no pueden traducirse a experiencia sin ejemplos y lenguaje situado.

guias_PH_IT_AT_ampliadas:
  impacto:
    objetos complejos deben esperar revisión especializada si exceden la guía triangular núcleo.
```

---

## 18. Señales de riesgo

Debe marcarse alerta si un objeto usa lenguaje como:

```text
guardar
almacenar
capturar
cifrar
sincronizar
exportar
loguear
autenticar
renderizar
subir
notificar automáticamente
evaluar
puntuar
analizar comportamiento
predecir
clasificar automáticamente
```

Estos verbos pueden aparecer como riesgos o límites, no como acciones autorizadas.

---

## 19. Ejemplos de objetos formulados correctamente

Estos ejemplos son ilustrativos. No aprueban objetos específicos.

### Ejemplo A

```text
objeto:
  Evidencia Creativa

definicion_breve:
  entidad conceptual que nombra una creación o proceso creativo que una persona puede interpretar como parte de su aprendizaje o investigación-creación.

incluye:
  obras, borradores, reflexiones asociadas, decisiones creativas.

excluye:
  evaluación automática, expediente institucional, métrica de desempeño.

riesgo:
  convertirse en vigilancia o puntuación.

estado:
  candidato
```

### Ejemplo B

```text
objeto:
  Consentimiento por Acción Sensible

definicion_breve:
  entidad conceptual que nombra la necesidad de consentimiento situado antes de una acción que afecte visibilidad, interpretación, portafolio o investigación futura.

incluye:
  comprensión, aceptación, pausa y retiro.

excluye:
  permisos técnicos, autenticación y aceptación por defecto.

riesgo:
  convertirse en casilla burocrática.

estado:
  candidato
```

### Ejemplo C

```text
objeto:
  Zona Personal de Creación

definicion_breve:
  entidad conceptual que nombra un espacio no funcional de creación, revisión y cuidado antes de cualquier visibilidad externa.

incluye:
  privacidad por defecto, control humano, pausa.

excluye:
  almacenamiento local técnico, sincronización, permisos, interfaz.

riesgo:
  confundirse con arquitectura técnica local-first.

estado:
  candidato_con_deuda
```

---

## 20. Ejemplos no permitidos

No permitido:

```text
objeto:
  Tabla Evidencias
```

Razón:

```text
define estructura técnica de datos.
```

No permitido:

```text
objeto:
  Pantalla de Portafolio
```

Razón:

```text
introduce UI real y diseño de experiencia.
```

No permitido:

```text
objeto:
  Servicio de Evaluación IA
```

Razón:

```text
introduce IA externa, evaluación automática y posible backend.
```

No permitido:

```text
objeto:
  Registro de Actividad del Estudiante
```

Razón:

```text
activa vigilancia, analíticas y datos reales si no se redefine conceptualmente.
```

---

## 21. Resultado esperado

Al aprobarse esta spec, PR #12 queda habilitado para revisar objetos de dominio conceptuales.

Lo que habilita:

```text
[✓] proponer objetos candidatos;
[✓] evaluar objetos con plantilla común;
[✓] pausar objetos con deuda;
[✓] rechazar objetos fuera de fase;
[✓] preparar threat model local-first ampliado desde objetos y zonas conceptuales.
```

Lo que no habilita:

```text
[!] crear modelos de datos;
[!] diseñar pantallas;
[!] construir prototipo;
[!] crear arquitectura técnica;
[!] usar datos reales;
[!] definir permisos técnicos;
[!] automatizar evaluación.
```

---

## 22. Ruta canónica propuesta

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
```

---

## 23. Comandos manuales seguros

```bash
mkdir -p 00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas

cp ~/Downloads/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md

git status --short

git add \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md

git diff --cached -- \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: definir spec operativa de objeto de dominio v0.4.6"
```

---

## 24. Relación con el siguiente documento

Esta spec prepara el próximo documento de la secuencia:

```text
Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
```

El threat model local-first ampliado deberá revisar amenazas conceptuales asociadas a objetos, zonas, visibilidad, evidencia, portafolio, interpretación y decisiones reversibles.

---

## 25. Dictamen de preparación

```text
documento: Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_5
implementacion: no_autorizada
siguiente_documento: Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

Nombrar un objeto no es capturarlo. En AI StoryLab 1, nombrar es poner una lámpara sobre el mapa para decidir si ese territorio puede cuidarse antes de abrir camino.

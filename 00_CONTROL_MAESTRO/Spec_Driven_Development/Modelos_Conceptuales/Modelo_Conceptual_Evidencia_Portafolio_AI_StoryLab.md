# Modelo Conceptual : Evidencia y Portafolio AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Este modelo conceptual no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento define el **modelo conceptual de evidencia y portafolio** para AI StoryLab 1 en la fase **v0.4.6 Arquitectura Conceptual No Funcional**.

Su función es establecer cómo pensar, nombrar y revisar:

```text
[ ] evidencia creativa;
[ ] evidencia reflexiva;
[ ] evidencia de proceso;
[ ] evidencia situada;
[ ] portafolio conceptual;
[ ] visibilidad;
[ ] interpretación humana;
[ ] inclusión, pausa y retiro;
[ ] límites frente a evaluación, expediente, publicación e investigación.
```

Este modelo no define cómo guardar, exportar, mostrar, publicar, sincronizar, analizar, evaluar o procesar evidencias. Tampoco define una experiencia de usuario funcional.

La pregunta central es:

```text
¿Cómo puede una creación o reflexión ser reconocida como evidencia sin perder agencia humana, privacidad, contexto creativo ni reversibilidad?
```

---

## 2. Alcance

Este modelo trabaja en nivel conceptual.

Se permite:

```text
[✓] definir evidencia como concepto;
[✓] definir portafolio como concepto;
[✓] distinguir evidencia, reflexión, evaluación, expediente e investigación;
[✓] proponer estados conceptuales no funcionales;
[✓] identificar acciones sensibles;
[✓] establecer límites de visibilidad;
[✓] asociar amenazas conceptuales;
[✓] definir criterios de aceptación, pausa o rechazo;
[✓] preparar decisiones reversibles;
[✓] alimentar documentos posteriores de v0.4.6.
```

No se permite:

```text
[!] diseñar almacenamiento de evidencias;
[!] diseñar exportaciones reales;
[!] diseñar publicación real;
[!] diseñar portafolios funcionales;
[!] crear UI de portafolio;
[!] definir modelos de datos;
[!] definir permisos técnicos;
[!] definir autenticación;
[!] definir analíticas;
[!] automatizar evaluación;
[!] usar IA externa por defecto;
[!] usar datos reales;
[!] probar con personas;
[!] abrir investigación con evidencia real.
```

---

## 3. Documentos base

Este modelo debe interpretarse junto a:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

---

## 4. Definición conceptual de evidencia

En AI StoryLab 1, **evidencia** es una creación, reflexión, decisión, proceso o huella interpretativa que una persona puede reconocer como significativa dentro de un trayecto de aprendizaje, investigación-creación o desarrollo creativo.

La evidencia no existe solo porque algo fue producido.

Debe existir una relación humana de sentido:

```text
persona + creación/reflexión/proceso + contexto + intención + posibilidad de revisión
```

Por tanto, evidencia no es sinónimo de:

```text
archivo;
dato;
entrega;
calificación;
producto final;
métrica;
expediente;
requisito;
registro automático;
material investigativo por defecto.
```

Una evidencia conceptual debe conservar contexto y agencia. No es una mariposa clavada en una vitrina: es una señal viva que todavía puede cambiar de lectura.

---

## 5. Definición conceptual de portafolio

En AI StoryLab 1, **portafolio conceptual** es una agrupación situada, revisable y reversible de evidencias que una persona o comunidad autorizada puede usar para narrar, comprender o acompañar un proceso creativo o formativo.

El portafolio conceptual no es:

```text
base de datos;
carpeta técnica;
exportación;
repositorio;
publicación;
expediente institucional;
sistema de evaluación;
dashboard;
perfil público;
mecanismo de comparación entre personas.
```

El portafolio conceptual debe entenderse como:

```text
[ ] curaduría humana;
[ ] narración situada;
[ ] organización con propósito;
[ ] espacio de revisión;
[ ] memoria creativa no punitiva;
[ ] conjunto reversible.
```

---

## 6. Principios del modelo

### 6.1 Agencia antes que acumulación

Una evidencia no debe acumularse solo porque existe. Debe existir intención humana, comprensión y posibilidad de retiro.

### 6.2 Contexto antes que interpretación

Ninguna evidencia debe interpretarse fuera de su contexto creativo, formativo, afectivo o investigativo.

### 6.3 Privacidad antes que visibilidad

La visibilidad no se presume. Toda exposición conceptual debe justificarse y pasar por consentimiento situado.

### 6.4 Reversibilidad antes que permanencia

Toda inclusión conceptual en portafolio debe poder pausarse, retirarse o reformularse.

### 6.5 Pluralidad antes que estandarización

La evidencia puede ser textual, visual, sonora, narrativa, corporal, experimental, híbrida o incompleta. El modelo no debe encerrar la creación en una sola forma.

### 6.6 Cuidado antes que evaluación

La evidencia puede apoyar aprendizaje o reflexión, pero no debe convertirse automáticamente en calificación, ranking, perfil o predicción.

---

## 7. Tipos conceptuales de evidencia

Estos tipos no son formatos técnicos. Son familias de sentido.

### 7.1 Evidencia creativa

Creación o producción expresiva que puede mostrar búsqueda, imaginación, solución, exploración o propuesta.

Ejemplos conceptuales:

```text
cuento;
guion;
imagen;
mapa narrativo;
prototipo imaginado no funcional;
pieza sonora;
boceto;
juego conceptual;
ensayo transdisciplinario;
composición multimodal.
```

Riesgo principal:

```text
confundir creatividad con producto evaluable cerrado.
```

### 7.2 Evidencia reflexiva

Texto, voz, anotación o gesto interpretativo mediante el cual una persona piensa sobre su proceso.

Riesgo principal:

```text
convertir reflexión personal en vigilancia, diagnóstico o evaluación encubierta.
```

### 7.3 Evidencia de proceso

Señal conceptual de decisiones, cambios, intentos, descartes o aprendizajes durante la creación.

Riesgo principal:

```text
tratar el proceso como monitoreo continuo o registro conductual.
```

### 7.4 Evidencia de colaboración

Señal conceptual de diálogo, coautoría, ayuda, negociación o construcción colectiva.

Riesgo principal:

```text
invisibilizar aportaciones, imponer autoría o exponer dinámicas grupales sensibles.
```

### 7.5 Evidencia de revisión humana

Señal conceptual de que una persona revisó, reinterpretó, pausó, retiró o reformuló una evidencia.

Riesgo principal:

```text
convertir revisión humana en aprobación burocrática.
```

### 7.6 Evidencia contextual

Información conceptual mínima que ayuda a comprender por qué una evidencia existe.

Riesgo principal:

```text
añadir contexto excesivo que revele información personal innecesaria.
```

---

## 8. Estados conceptuales de evidencia

Estos estados no son estados técnicos ni flujo funcional. Son categorías documentales para pensar reversibilidad.

```text
borrador_creativo:
  material en exploración.
  no debe tratarse como evidencia sin reconocimiento humano.

candidata_a_evidencia:
  creación o reflexión que podría reconocerse como evidencia.
  requiere revisión situada.

evidencia_reconocida:
  material que la persona reconoce como significativo.
  no implica visibilidad externa.

evidencia_contextualizada:
  evidencia acompañada por contexto mínimo necesario.
  debe evitar exposición excesiva.

evidencia_incluida_conceptualmente:
  evidencia que podría formar parte de un portafolio conceptual.
  requiere intención y reversibilidad.

evidencia_pausada:
  evidencia cuyo avance se detiene por duda, riesgo, deuda o falta de consentimiento.

evidencia_retirada:
  evidencia que deja de considerarse parte activa del modelo conceptual.

evidencia_reformulada:
  evidencia cuyo sentido, contexto o límite se redefine.
```

---

## 9. Estados conceptuales de portafolio

```text
portafolio_candidato:
  agrupación posible de evidencias.
  no implica almacenamiento ni publicación.

portafolio_en_revision:
  agrupación conceptual bajo revisión triangular.

portafolio_formativo:
  agrupación orientada a aprendizaje y reflexión.
  no equivale a expediente.

portafolio_creativo:
  agrupación orientada a narrar un proceso de creación.
  no equivale a galería pública.

portafolio_investigativo_futuro:
  posibilidad reservada para fases posteriores.
  no puede usar datos reales sin protocolo independiente.

portafolio_pausado:
  agrupación detenida por amenaza, deuda o ambigüedad.

portafolio_retirado:
  agrupación retirada de la secuencia activa.
```

Ningún estado define operación técnica.

---

## 10. Diferencias obligatorias

### 10.1 Evidencia vs dato

```text
evidencia:
  material interpretado con contexto y sentido humano.

dato:
  unidad de información que podría procesarse, almacenar o analizarse.

criterio:
  no toda evidencia debe convertirse en dato.
```

### 10.2 Evidencia vs reflexión

```text
evidencia:
  puede incluir creación, proceso o reflexión.

reflexion:
  expresión personal o situada que puede ser más sensible.

criterio:
  toda reflexión requiere cuidado reforzado.
```

### 10.3 Evidencia vs evaluación

```text
evidencia:
  puede apoyar comprensión.

evaluacion:
  produce juicio, valoración, calificación o decisión.

criterio:
  evidencia no autoriza evaluación automática ni calificación por defecto.
```

### 10.4 Portafolio vs expediente

```text
portafolio:
  curaduría situada, revisable y reversible.

expediente:
  registro institucional con finalidad administrativa o evaluativa.

criterio:
  el portafolio conceptual no debe convertirse en expediente.
```

### 10.5 Portafolio vs publicación

```text
portafolio:
  puede ser privado, situado o limitado.

publicacion:
  implica exposición ante audiencia.

criterio:
  publicar requiere nueva revisión y consentimiento.
```

### 10.6 Evidencia vs investigación

```text
evidencia:
  puede tener valor para aprendizaje o creación.

investigacion:
  requiere protocolo, consentimiento y revisión institucional si aplica.

criterio:
  ninguna evidencia se vuelve dato de investigación por defecto.
```

---

## 11. Acciones sensibles conceptuales

Estas acciones no se autorizan funcionalmente. Se nombran para revisión.

```text
reconocer_como_evidencia:
  una persona identifica material como significativo.

contextualizar_evidencia:
  se añade contexto mínimo para interpretar.

incluir_en_portafolio:
  una evidencia pasa a una agrupación conceptual.

retirar_de_portafolio:
  una evidencia deja de pertenecer a una agrupación conceptual.

compartir_visibilidad:
  una evidencia podría ser vista por otra persona o grupo.

interpretar_evidencia:
  una persona o comunidad autorizada lee una evidencia con propósito declarado.

usar_para_evaluacion:
  acción no autorizada por defecto.
  requiere fase, spec y gate futuros.

usar_para_investigacion:
  acción no autorizada por defecto.
  requiere protocolo independiente.

publicar:
  acción no autorizada por defecto.
  requiere consentimiento situado y revisión futura.

exportar:
  acción no autorizada en v0.4.6.
```

---

## 12. Pregunta triangular aplicada

Todo concepto de evidencia o portafolio debe responder:

```text
Consentimiento:
  ¿La persona entiende qué se considera evidencia?
  ¿Puede aceptar, pausar, retirar o reformular?
  ¿Comprende qué implica incluir algo en un portafolio conceptual?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad podría tocarse?
  ¿Qué debe permanecer privado por defecto?
  ¿Se minimiza contexto para evitar exposición innecesaria?

Seguridad local-first:
  ¿En qué zona conceptual ocurre?
  ¿Qué amenaza conceptual activa?
  ¿Qué control humano debe existir antes de fases posteriores?
```

Si una evidencia o portafolio conceptual no puede responder esta pregunta, debe pausarse.

---

## 13. Zonas conceptuales relacionadas

### 13.1 Zona personal de creación

Lugar conceptual de borrador, duda, juego y ensayo.

Regla:

```text
nada sale de esta zona por defecto.
```

### 13.2 Zona de reconocimiento de evidencia

Lugar conceptual donde la persona decide si algo puede ser reconocido como evidencia.

Regla:

```text
la persona conserva decisión y lenguaje propio.
```

### 13.3 Zona de contextualización mínima

Lugar conceptual donde se agrega contexto solo si ayuda a comprender sin exponer más de lo necesario.

Regla:

```text
contexto suficiente, exposición mínima.
```

### 13.4 Zona de portafolio conceptual

Lugar conceptual donde evidencias pueden agruparse con intención y reversibilidad.

Regla:

```text
inclusión no equivale a publicación.
```

### 13.5 Zona de interpretación humana

Lugar conceptual donde otra persona o comunidad autorizada podría interpretar.

Regla:

```text
interpretar no equivale a evaluar.
```

### 13.6 Zona institucional futura

Lugar conceptual de posibles usos institucionales posteriores.

Regla:

```text
toda transición institucional requiere gate.
```

### 13.7 Zona de investigación futura

Lugar conceptual reservado para investigación posterior.

Regla:

```text
investigar requiere protocolo independiente.
```

---

## 14. Amenazas principales

Este modelo hereda y aplica amenazas del threat model local-first conceptual.

```text
exposicion_no_comprendida:
  evidencia o portafolio se vuelve visible sin comprensión suficiente.

consentimiento_decorativo:
  la persona acepta sin entender alcance o consecuencia.

reflexion_convertida_en_vigilancia:
  reflexión personal se usa para observar o inferir.

evidencia_convertida_en_puntuacion:
  creación se reduce a métrica o calificación.

portafolio_convertido_en_expediente:
  curaduría creativa se vuelve registro institucional rígido.

expansion_de_proposito:
  evidencia creada para un fin se usa para otro sin nuevo consentimiento.

automatizacion_encubierta:
  lenguaje conceptual abre puerta a evaluación o clasificación automática.

dependencia_externa_prematura:
  se presume cloud, IA externa o analítica como futuro inevitable.

perdida_de_reversibilidad:
  evidencia o portafolio no puede pausarse, retirarse o reformularse.

burocratizacion_del_cuidado:
  protección se vuelve trámite rígido que empobrece creación.
```

---

## 15. Criterios de aceptación

Un concepto de evidencia o portafolio puede aceptarse si:

```text
[ ] usa lenguaje conceptual no técnico;
[ ] distingue evidencia, dato, reflexión, evaluación e investigación;
[ ] preserva agencia humana;
[ ] exige consentimiento situado para acciones sensibles;
[ ] presume privacidad por defecto;
[ ] limita visibilidad;
[ ] declara contexto mínimo necesario;
[ ] evita evaluación automática;
[ ] evita publicación por defecto;
[ ] evita expediente institucional por defecto;
[ ] conserva reversibilidad;
[ ] identifica amenazas;
[ ] registra deuda aplicable;
[ ] puede revisarse PH-IT-AT.
```

---

## 16. Criterios de pausa

Debe pausarse si:

```text
[ ] no se distingue evidencia de evaluación;
[ ] no se distingue portafolio de expediente;
[ ] afecta reflexión personal sin cuidado reforzado;
[ ] requiere ejemplos por edad y contexto aún no aprobados;
[ ] requiere investigación con datos reales;
[ ] requiere visibilidad externa;
[ ] requiere almacenamiento, exportación o publicación real;
[ ] activa amenaza bloqueante no tratada;
[ ] no declara retiro o reformulación;
[ ] depende de IA externa o analíticas.
```

---

## 17. Criterios de rechazo

Debe rechazarse una formulación si:

```text
[!] convierte evidencia en calificación automática;
[!] convierte portafolio en expediente institucional;
[!] presume publicación;
[!] presume exportación real;
[!] presume almacenamiento técnico;
[!] usa evidencia para investigación sin protocolo;
[!] usa reflexión para vigilancia;
[!] compara personas mediante evidencias;
[!] elimina contexto;
[!] elimina consentimiento;
[!] elimina reversibilidad;
[!] contradice la tríada constitucional.
```

---

## 18. Revisión por subjetividades

### 18.1 Estudiante de escuela superior

Cuidado reforzado:

```text
[ ] lenguaje claro y situado;
[ ] no presión de exposición;
[ ] no investigación sin protocolo;
[ ] no comparación pública;
[ ] no evaluación automática;
[ ] derecho a pausa y retiro.
```

### 18.2 Estudiante universitario

Cuidado requerido:

```text
[ ] autonomía situada;
[ ] claridad sobre propósito;
[ ] distinción entre aprendizaje, evaluación e investigación;
[ ] control sobre visibilidad;
[ ] revisión humana.
```

### 18.3 Docente

Cuidado requerido:

```text
[ ] evitar convertir portafolio en instrumento punitivo;
[ ] distinguir acompañamiento de evaluación;
[ ] conservar contexto;
[ ] no automatizar juicio;
[ ] registrar límites institucionales.
```

### 18.4 Investigador

Cuidado requerido:

```text
[ ] no tratar evidencia como dato disponible;
[ ] exigir protocolo independiente;
[ ] declarar propósito;
[ ] minimizar extracción;
[ ] proteger devolución y contexto.
```

---

## 19. Revisión PH-IT-AT

### 19.1 Revisión PH

Pregunta:

```text
¿La evidencia o portafolio conserva agencia humana?
```

Criterios:

```text
[ ] comprensión;
[ ] pausa;
[ ] retiro;
[ ] reformulación;
[ ] control sobre visibilidad;
[ ] no evaluación automática.
```

### 19.2 Revisión IT

Pregunta:

```text
¿Se distinguen evidencia, dato, reflexión, interpretación, evaluación e investigación?
```

Criterios:

```text
[ ] claridad epistemológica;
[ ] contexto suficiente;
[ ] no uso secundario;
[ ] no investigación con datos reales;
[ ] no inferencia automática.
```

### 19.3 Revisión AT

Pregunta:

```text
¿El modelo protege la vida creativa de la evidencia?
```

Criterios:

```text
[ ] pluralidad expresiva;
[ ] juego creativo;
[ ] incompletud legítima;
[ ] ambigüedad fértil;
[ ] no reducción a formulario o métrica.
```

---

## 20. Matriz conceptual de evidencia

Toda evidencia conceptual candidata debe poder revisarse así:

```text
evidencia:
  nombre_o_descripcion:

tipo_conceptual:
  creativa | reflexiva | proceso | colaboracion | revision_humana | contextual

estado:
  borrador_creativo |
  candidata_a_evidencia |
  evidencia_reconocida |
  evidencia_contextualizada |
  evidencia_incluida_conceptualmente |
  evidencia_pausada |
  evidencia_retirada |
  evidencia_reformulada

persona_o_subjetividad_afectada:
  estudiante_escuela_superior |
  estudiante_universitario |
  docente |
  investigador |
  comunidad

contexto_minimo:
  ...

no_incluye:
  - evaluacion_automatica
  - expediente
  - publicacion
  - investigacion_por_defecto
  - exportacion
  - almacenamiento_tecnico

acciones_sensibles:
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

amenazas:
  - ...

reversibilidad:
  pausa:
  retiro:
  reformulacion:

dictamen:
  aceptar_conceptualmente |
  aceptar_con_deuda |
  pausar |
  rechazar |
  transferir_a_gate
```

---

## 21. Matriz conceptual de portafolio

```text
portafolio:
  nombre_o_descripcion:

tipo_conceptual:
  candidato |
  en_revision |
  formativo |
  creativo |
  investigativo_futuro |
  pausado |
  retirado

proposito:
  ...

evidencias_relacionadas:
  descripcion_conceptual:
  limite:

visibilidad:
  privada_por_defecto |
  situada |
  limitada |
  futura_no_autorizada

no_es:
  - expediente
  - publicacion
  - exportacion
  - dashboard
  - perfil_publico
  - mecanismo_de_comparacion

acciones_sensibles:
  - incluir_evidencia
  - retirar_evidencia
  - contextualizar
  - interpretar
  - compartir_visibilidad_futura

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

amenazas:
  - ...

reversibilidad:
  pausa:
  retiro:
  reformulacion:
  reduccion_de_alcance:

dictamen:
  aceptar_conceptualmente |
  aceptar_con_deuda |
  pausar |
  rechazar |
  transferir_a_gate
```

---

## 22. Relación con deuda heredada

```text
threat_model_detallado_local_first:
  estado:
    alimentado por este modelo mediante amenazas de evidencia, portafolio y visibilidad.

matriz_acciones_sensibles_arquitectura:
  estado:
    debe incluir acciones como reconocer, contextualizar, incluir, retirar, interpretar, publicar, investigar y exportar.

decisiones_reversibles:
  estado:
    se vuelve condición obligatoria para evidencia y portafolio.

ejemplos_por_edad_y_contexto:
  estado:
    sigue pendiente para lenguaje situado, especialmente con estudiantes de escuela superior.

guias_PH_IT_AT_ampliadas:
  estado:
    necesarias para casos complejos de evidencia creativa, reflexión sensible e investigación futura.
```

---

## 23. Relación con gates

Antes de permitir cualquier transición posterior, un gate deberá verificar:

```text
[ ] evidencia no equivale a dato por defecto;
[ ] portafolio no equivale a expediente;
[ ] visibilidad no se presume;
[ ] publicación no está autorizada;
[ ] exportación no está autorizada;
[ ] investigación no está autorizada;
[ ] evaluación automática no está autorizada;
[ ] reversibilidad está definida;
[ ] amenazas están registradas;
[ ] deuda está visible;
[ ] revisión PH-IT-AT fue aplicada.
```

---

## 24. Resultado esperado

Al aprobarse este modelo, PR #12 queda habilitado para tratar evidencia y portafolio como conceptos revisables.

Lo que habilita:

```text
[✓] hablar de evidencia sin convertirla en dato técnico;
[✓] hablar de portafolio sin convertirlo en expediente;
[✓] revisar acciones sensibles relacionadas con evidencia;
[✓] vincular evidencia y portafolio con consentimiento, privacidad y seguridad local-first;
[✓] preparar criterios de decisiones reversibles.
```

Lo que no habilita:

```text
[!] crear portafolio funcional;
[!] almacenar evidencias;
[!] publicar evidencias;
[!] exportar evidencias;
[!] evaluar automáticamente;
[!] investigar con datos reales;
[!] crear UI;
[!] crear arquitectura técnica.
```

---

## 25. Ruta canónica propuesta

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
```

---

## 26. Comandos manuales seguros

```bash
mkdir -p 00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales

cp ~/Downloads/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md

git status --short

git add \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md

git diff --cached -- \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Modelos_Conceptuales/Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: definir modelo conceptual de evidencia y portafolio v0.4.6"
```

---

## 27. Relación con el siguiente documento

Este modelo prepara el próximo documento:

```text
Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
```

Ese documento deberá establecer cómo pausar, retirar, reformular, transferir o rechazar decisiones conceptuales antes de que se conviertan en deuda peligrosa o en implementación prematura.

---

## 28. Dictamen de preparación

```text
documento: Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_7
implementacion: no_autorizada
siguiente_documento: Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

La evidencia no debe ser una jaula para la creación. Debe ser una linterna que la persona puede encender, mover, cubrir o apagar cuando el sentido lo requiera.

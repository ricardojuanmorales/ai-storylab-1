# Spec Operativa : Threat Model Local-First AI StoryLab

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.6 Arquitectura Conceptual No Funcional  
**Documento:** Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md  
**Estado:** aprobado para integración en PR #12  
**Documento previo:** Spec_Operativa_Objeto_Dominio_AI_StoryLab.md  
**Destino de integración:** PR #12  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha de preparación:** 2026-07-05  
**Fecha de aprobación:** 2026-07-05  

> **Guardarraíl constitucional v0.4.6**  
> Esta spec operativa no autoriza implementación funcional, código de aplicación, UI real, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, captura, almacenamiento, cifrado, permisos o retención técnica, sincronización, respaldo real, exportaciones reales, automatización funcional, pruebas con personas, evaluación automática, investigación con datos reales ni arquitectura técnica ejecutable.

---

## 1. Propósito

Este documento define un **threat model local-first conceptual** para la fase **v0.4.6 Arquitectura Conceptual No Funcional** de AI StoryLab 1.

Su función es identificar amenazas conceptuales asociadas a:

```text
[ ] objetos de dominio;
[ ] zonas conceptuales;
[ ] consentimiento situado;
[ ] evidencia creativa;
[ ] reflexión;
[ ] portafolio;
[ ] visibilidad;
[ ] interpretación humana;
[ ] decisiones reversibles;
[ ] transición hacia fases posteriores.
```

Este documento no define controles técnicos. No describe cómo construir seguridad. No diseña permisos, cifrado, almacenamiento, sincronización, autenticación, backup ni arquitectura técnica.

Su función es más temprana y más delicada: nombrar qué podría salir mal antes de que exista sistema.

---

## 2. Alcance

Este threat model opera en nivel conceptual.

Se permite:

```text
[✓] identificar amenazas conceptuales;
[✓] clasificar zonas no funcionales;
[✓] asociar riesgos a objetos de dominio;
[✓] distinguir amenazas por consentimiento, privacidad y seguridad local-first;
[✓] definir controles humanos requeridos antes de fases posteriores;
[✓] declarar deuda bloqueante;
[✓] establecer criterios de pausa, rechazo o revisión;
[✓] preparar preguntas para specs futuras.
```

No se permite:

```text
[!] definir controles técnicos ejecutables;
[!] diseñar cifrado, permisos, autenticación o retención técnica;
[!] diseñar almacenamiento real;
[!] definir sincronización o respaldo;
[!] crear arquitectura de seguridad técnica;
[!] probar amenazas con personas o datos reales;
[!] crear matrices de riesgo cuantitativas con datos reales;
[!] definir telemetría, logging o analíticas;
[!] habilitar IA externa por defecto;
[!] proponer evaluación automática;
[!] convertir threat model en plan de implementación.
```

---

## 3. Documentos base

Este documento debe leerse junto a:

```text
Cierre_Sesion_Post_Merge_Specs_Nucleo_AI_StoryLab.md
Continuidad_Ruta_Desarrollo_AI_StoryLab.md
Prompt_Activacion_Arquitectura_Conceptual_AI_StoryLab.md

Protocolo_Trabajo_Arquitectura_Conceptual_AI_StoryLab.md
Plan_Revision_Arquitectura_Conceptual_AI_StoryLab.md
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md

Spec_Operativa_Consentimiento_Informado_Situado_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Datos_Privacidad_AI_StoryLab_1_v0_4_5.md
Spec_Operativa_Seguridad_Local_First_AI_StoryLab_1_v0_4_5.md

Matriz_Cruce_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Matriz_Acciones_Sensibles_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Guia_Revision_PH_IT_AT_Triangular_AI_StoryLab_1_v0_4_5.md
Glosario_Nucleo_Consentimiento_Datos_Seguridad_AI_StoryLab_1_v0_4_5.md
Registro_Deuda_Sesion_AI_StoryLab_1_v0_4_5.md
```

La tríada constitucional heredada sigue siendo el filtro principal:

```text
Consentimiento decide.
Privacidad minimiza.
Seguridad verifica.
```

---

## 4. Definición operativa

Un **threat model local-first conceptual** es una lectura estructurada de amenazas antes de cualquier diseño funcional.

En v0.4.6, una amenaza es:

```text
una condición conceptual que podría reducir agencia humana,
exponer datos, convertir creación en vigilancia,
confundir evidencia con evaluación,
romper privacidad por defecto,
o empujar el proyecto hacia implementación prematura.
```

Una amenaza conceptual no exige un control técnico inmediato. Exige primero:

```text
[ ] reconocimiento;
[ ] lenguaje claro;
[ ] delimitación;
[ ] control humano;
[ ] reversibilidad;
[ ] deuda visible;
[ ] gate antes de transición.
```

---

## 5. Principio local-first conceptual

En v0.4.6, **local-first** no significa todavía tecnología local, almacenamiento local, base de datos local ni sincronización local.

Significa, conceptualmente:

```text
[ ] la persona conserva agencia primero;
[ ] la privacidad se presume por defecto;
[ ] la exposición requiere justificación y consentimiento;
[ ] la creación no se convierte automáticamente en dato institucional;
[ ] la interpretación humana precede cualquier evaluación;
[ ] las decisiones sensibles deben poder pausarse o retirarse;
[ ] ninguna dependencia externa se asume como condición inicial.
```

Local-first en esta fase es una ética de ubicación y control humano, no una arquitectura técnica.

---

## 6. Activos conceptuales protegidos

Este threat model protege activos conceptuales, no recursos técnicos.

```text
agencia_humana:
  capacidad de entender, aceptar, pausar, retirar y reinterpretar.

consentimiento_situado:
  aceptación contextual, comprensible y reversible ante acciones sensibles.

privacidad_por_defecto:
  presunción de no exposición y minimización de visibilidad.

evidencia_creativa:
  creación, proceso o reflexión que puede tener sentido formativo o investigativo sin convertirse automáticamente en evaluación.

reflexion_personal:
  expresión situada que puede requerir protección reforzada.

portafolio_conceptual:
  agrupación potencial de evidencias sin definir exportación, almacenamiento ni publicación real.

visibilidad:
  posibilidad conceptual de que algo sea visto, interpretado o compartido en fases futuras.

interpretacion_humana:
  lectura situada hecha por persona o comunidad autorizada, no inferencia automática.

confianza_documental:
  trazabilidad de decisiones, deuda y gates sin convertir trazabilidad en vigilancia.

aprendizaje_ludico:
  espacio creativo no rígido, no punitivo y no reducido a formulario.
```

---

## 7. Zonas conceptuales local-first

Las zonas son espacios de sentido, no espacios técnicos.

### 7.1 Zona personal de creación

Espacio conceptual donde la persona imagina, crea, borra, duda, ensaya y reformula sin exposición por defecto.

Amenazas principales:

```text
[ ] exposición prematura;
[ ] presión evaluativa;
[ ] captura conceptual de reflexión personal;
[ ] confusión entre borrador y evidencia;
[ ] pérdida de juego creativo.
```

Control humano requerido:

```text
la persona debe conservar pausa, retiro y decisión sobre cualquier transición futura.
```

### 7.2 Zona de revisión situada

Espacio conceptual donde una persona revisa una evidencia o reflexión antes de decidir si puede avanzar.

Amenazas principales:

```text
[ ] consentimiento incompleto;
[ ] lenguaje poco comprensible;
[ ] revisión convertida en trámite;
[ ] aceptación por defecto;
[ ] ausencia de retiro.
```

Control humano requerido:

```text
toda revisión debe ser comprensible, pausada y reversible.
```

### 7.3 Zona de portafolio conceptual

Espacio conceptual donde evidencias podrían organizarse con intención formativa, creativa o reflexiva.

Amenazas principales:

```text
[ ] convertir portafolio en expediente;
[ ] confundir colección con evaluación;
[ ] visibilidad no comprendida;
[ ] acumulación sin propósito humano;
[ ] pérdida de contexto creativo.
```

Control humano requerido:

```text
la inclusión conceptual debe requerir intención, comprensión y posibilidad de retiro.
```

### 7.4 Zona de interpretación humana

Espacio conceptual donde una persona docente, investigadora o comunidad autorizada podría interpretar evidencia.

Amenazas principales:

```text
[ ] interpretación sin consentimiento situado;
[ ] inferencia sobre identidad, capacidad o valor personal;
[ ] evaluación automática encubierta;
[ ] sesgo institucional;
[ ] pérdida de voz de la persona creadora.
```

Control humano requerido:

```text
la interpretación debe conservar contexto, límite, revisión y derecho a no convertir reflexión en juicio.
```

### 7.5 Zona institucional limitada

Espacio conceptual donde documentos, decisiones o evidencias podrían relacionarse con responsabilidades institucionales futuras.

Amenazas principales:

```text
[ ] vigilancia institucional;
[ ] expansión de propósito;
[ ] uso secundario no comprendido;
[ ] presión normativa sobre creatividad;
[ ] invisibilización de deuda ética.
```

Control humano requerido:

```text
toda transición institucional debe pasar por gate, consentimiento situado y revisión PH-IT-AT.
```

### 7.6 Zona de investigación futura

Espacio conceptual reservado para posibilidades investigativas posteriores.

Amenazas principales:

```text
[ ] investigación con datos reales sin protocolo;
[ ] uso de evidencias creativas fuera de contexto;
[ ] confusión entre aprendizaje, evaluación e investigación;
[ ] participación de menores sin cuidado reforzado;
[ ] extracción de valor sin devolución clara.
```

Control humano requerido:

```text
ninguna investigación con datos o evidencias reales puede abrirse sin protocolo, consentimiento y revisión institucional si aplica.
```

### 7.7 Zona de IA futura

Espacio conceptual donde podría discutirse asistencia de IA en fases posteriores.

Amenazas principales:

```text
[ ] IA externa por defecto;
[ ] inferencias automáticas sobre personas;
[ ] evaluación automática;
[ ] opacidad de interpretación;
[ ] dependencia tecnológica prematura.
```

Control humano requerido:

```text
toda IA futura debe tratarse como decisión explícita, no como supuesto de arquitectura.
```

---

## 8. Amenazas conceptuales núcleo

### 8.1 Exposición no comprendida

Ocurre cuando una evidencia, reflexión o metadato podría hacerse visible sin que la persona entienda alcance, audiencia o consecuencia.

Dimensión afectada:

```text
consentimiento + privacidad
```

Condición de pausa:

```text
si no puede explicarse quién vería qué, para qué y con qué posibilidad de retiro.
```

### 8.2 Consentimiento decorativo

Ocurre cuando el consentimiento existe como fórmula, pero no como comprensión situada.

Dimensión afectada:

```text
consentimiento
```

Condición de pausa:

```text
si la aceptación se vuelve casilla, inercia o trámite sin pausa real.
```

### 8.3 Reflexión convertida en vigilancia

Ocurre cuando una reflexión personal o creativa podría usarse para observar, medir o inferir sobre una persona fuera de su intención original.

Dimensión afectada:

```text
datos/privacidad + seguridad local-first
```

Condición de pausa:

```text
si no se distingue reflexión, evidencia, evaluación e investigación.
```

### 8.4 Evidencia convertida en puntuación

Ocurre cuando una evidencia creativa se transforma conceptual o institucionalmente en métrica de desempeño.

Dimensión afectada:

```text
PH + IT + AT
```

Condición de pausa:

```text
si el documento no protege creación, contexto y pluralidad expresiva.
```

### 8.5 Portafolio convertido en expediente

Ocurre cuando un portafolio conceptual se desplaza hacia registro institucional rígido.

Dimensión afectada:

```text
privacidad + agencia humana
```

Condición de pausa:

```text
si no se define diferencia entre portafolio formativo y expediente.
```

### 8.6 Expansión de propósito

Ocurre cuando una evidencia creada para aprendizaje o expresión podría usarse después para evaluación, investigación, publicación o gestión sin nuevo consentimiento.

Dimensión afectada:

```text
consentimiento + privacidad
```

Condición de pausa:

```text
si el propósito futuro no requiere nuevo gate.
```

### 8.7 Automatización encubierta

Ocurre cuando el lenguaje documental prepara evaluación, clasificación, recomendación o interpretación automática sin declararlo.

Dimensión afectada:

```text
seguridad local-first + agencia humana
```

Condición de rechazo:

```text
si la automatización aparece como supuesto de fase.
```

### 8.8 Dependencia externa prematura

Ocurre cuando una decisión conceptual asume cloud, IA externa, analíticas o servicios externos como base futura inevitable.

Dimensión afectada:

```text
seguridad local-first
```

Condición de rechazo:

```text
si el concepto no puede existir sin infraestructura externa.
```

### 8.9 Pérdida de reversibilidad

Ocurre cuando una decisión conceptual no permite pausa, retiro, reformulación o revisión humana.

Dimensión afectada:

```text
consentimiento + seguridad local-first
```

Condición de pausa:

```text
si no existe salida humana clara.
```

### 8.10 Burocratización del cuidado

Ocurre cuando los mecanismos de consentimiento, privacidad o seguridad se vuelven tan rígidos que dañan la experiencia creativa.

Dimensión afectada:

```text
AT + PH
```

Condición de revisión:

```text
si el cuidado se convierte en fricción punitiva o formulario sin sentido.
```

### 8.11 Confusión de perfiles humanos

Ocurre cuando estudiante de escuela superior, estudiante universitario, docente e investigador se tratan como si tuvieran las mismas condiciones de agencia, riesgo y responsabilidad.

Dimensión afectada:

```text
consentimiento situado + cuidado reforzado
```

Condición de pausa:

```text
si el documento afecta perfiles humanos sin distinguirlos cuando aplica.
```

### 8.12 Deuda invisible

Ocurre cuando una amenaza o límite se reconoce verbalmente pero no se registra como deuda, gate o condición de transición.

Dimensión afectada:

```text
gobernanza SDD
```

Condición de rechazo:

```text
si el documento avanza ocultando deuda bloqueante.
```

---

## 9. Amenazas por objeto de dominio candidato

Esta sección no aprueba objetos específicos. Establece amenazas típicas para familias conceptuales.

### 9.1 Evidencia Creativa

Amenazas:

```text
[ ] convertirse en evaluación automática;
[ ] perder contexto de creación;
[ ] exponerse sin comprensión;
[ ] usarse como métrica de desempeño;
[ ] integrarse a portafolio sin intención explícita.
```

Control humano requerido:

```text
la persona debe poder decidir si una creación se reconoce como evidencia y bajo qué límite conceptual.
```

### 9.2 Reflexión Situada

Amenazas:

```text
[ ] revelar información personal sensible;
[ ] ser interpretada fuera de contexto;
[ ] convertirse en dato investigativo sin protocolo;
[ ] presionar autenticidad performativa;
[ ] perder derecho a reformulación.
```

Control humano requerido:

```text
la reflexión debe conservar derecho a pausa, retiro y no evaluación automática.
```

### 9.3 Portafolio Conceptual

Amenazas:

```text
[ ] convertirse en expediente;
[ ] acumular evidencia sin propósito;
[ ] habilitar comparación entre personas;
[ ] endurecer una identidad creativa provisional;
[ ] activar visibilidad no comprendida.
```

Control humano requerido:

```text
la inclusión y visibilidad conceptual deben permanecer intencionales y reversibles.
```

### 9.4 Consentimiento por Acción Sensible

Amenazas:

```text
[ ] volverse trámite decorativo;
[ ] ser demasiado abstracto;
[ ] no distinguir edad, perfil o contexto;
[ ] no ofrecer retiro real;
[ ] acumular aceptación para usos futuros.
```

Control humano requerido:

```text
cada acción sensible debe requerir comprensión situada y revisión si cambia el propósito.
```

### 9.5 Zona Personal de Creación

Amenazas:

```text
[ ] confundirse con almacenamiento técnico;
[ ] prometer privacidad técnica no definida;
[ ] ocultar riesgos de dispositivo compartido;
[ ] tratar borradores como evidencia;
[ ] reducir juego creativo por exceso de control.
```

Control humano requerido:

```text
la zona debe permanecer conceptual hasta que una fase posterior defina controles con gate aprobado.
```

### 9.6 Interpretación Humana

Amenazas:

```text
[ ] convertirse en autoridad unilateral;
[ ] desplazar voz de la persona creadora;
[ ] abrir evaluación encubierta;
[ ] producir inferencias sobre identidad o capacidad;
[ ] perder trazabilidad del contexto.
```

Control humano requerido:

```text
toda interpretación debe declarar propósito, límite y posibilidad de revisión.
```

### 9.7 Investigación Futura

Amenazas:

```text
[ ] usar evidencia real sin protocolo;
[ ] mezclar aprendizaje con investigación;
[ ] incluir menores sin cuidado reforzado;
[ ] extraer narrativas sin devolución;
[ ] reutilizar datos fuera de propósito inicial.
```

Control humano requerido:

```text
la investigación futura requiere protocolo independiente, consentimiento y revisión institucional si aplica.
```

---

## 10. Matriz conceptual de amenaza

Cada amenaza debe registrarse con esta matriz mínima:

```text
amenaza:
  nombre:

zona_conceptual:
  ...

objeto_o_familia_afectada:
  ...

descripcion:
  ...

trazabilidad:
  documento_base:
  deuda_relacionada:
  gate_relacionado:

pregunta_triangular:
  consentimiento:
    riesgo:
    condicion_de_cuidado:

  datos_privacidad:
    riesgo:
    condicion_de_cuidado:

  seguridad_local_first:
    riesgo:
    condicion_de_cuidado:

control_humano_requerido:
  ...

reversibilidad:
  pausa:
  retiro:
  reformulacion:

estado:
  identificada | bloqueante | vigilada | transferida | resuelta_documentalmente

dictamen:
  aceptar_riesgo_con_deuda |
  pausar_documento |
  rechazar_deslizamiento |
  transferir_a_gate |
  requerir_spec_previa
```

Esta matriz no calcula probabilidad técnica ni severidad cuantitativa. Su función es documental y conceptual.

---

## 11. Clasificación de amenaza

Durante v0.4.6, las amenazas se clasifican por función documental:

```text
amenaza_bloqueante:
  impide avanzar un documento si no se responde.

amenaza_vigilada:
  permite avanzar con deuda explícita y condición de pago.

amenaza_transferida:
  debe pasar a documento posterior o gate.

amenaza_resuelta_documentalmente:
  queda tratada mediante límites, reversibilidad y revisión.

amenaza_fuera_de_fase:
  corresponde a diseño, prototipo, implementación o prueba posterior.
```

---

## 12. Criterios de pausa por amenaza

Debe pausarse una decisión conceptual si:

```text
[ ] no responde la pregunta triangular;
[ ] requiere datos reales;
[ ] requiere pruebas con personas;
[ ] requiere IA externa;
[ ] requiere definición técnica de almacenamiento o permisos;
[ ] afecta menores sin cuidado reforzado;
[ ] mezcla investigación con aprendizaje;
[ ] no distingue evidencia y evaluación;
[ ] no declara reversibilidad;
[ ] activa deuda bloqueante no resuelta.
```

---

## 13. Criterios de rechazo por amenaza

Debe rechazarse una formulación si:

```text
[!] autoriza implementación funcional;
[!] normaliza vigilancia;
[!] presupone evaluación automática;
[!] trata privacidad como opción secundaria;
[!] presume consentimiento por defecto;
[!] convierte portafolio en expediente;
[!] usa lenguaje técnico como decisión ejecutable;
[!] oculta dependencia externa;
[!] elimina control humano;
[!] contradice la tríada constitucional.
```

---

## 14. Revisión PH-IT-AT

### 14.1 Revisión PH

Pregunta:

```text
¿La amenaza reduce agencia humana, comprensión, pausa o retiro?
```

Criterios:

```text
[ ] identifica quién podría perder control;
[ ] identifica dónde se requiere consentimiento situado;
[ ] protege perfiles humanos diferenciados;
[ ] evita decisiones automáticas sobre personas;
[ ] conserva salida humana.
```

### 14.2 Revisión IT

Pregunta:

```text
¿La amenaza confunde evidencia, dato, reflexión, interpretación, evaluación o investigación?
```

Criterios:

```text
[ ] distingue tipos de material conceptual;
[ ] evita investigación con datos reales;
[ ] evita inferencias automáticas;
[ ] conserva contexto;
[ ] registra límites epistémicos.
```

### 14.3 Revisión AT

Pregunta:

```text
¿La amenaza empobrece el juego creativo o convierte creación en formulario?
```

Criterios:

```text
[ ] protege exploración;
[ ] evita rigidez prematura;
[ ] conserva pluralidad expresiva;
[ ] permite ambigüedad fértil;
[ ] identifica presión estética, productivista o evaluativa.
```

---

## 15. Decisiones reversibles ante amenaza

Toda amenaza conceptual debe asociarse a una decisión reversible.

Tipos de reversibilidad:

```text
pausa:
  detener una decisión antes de avanzar.

retiro:
  remover una formulación, semilla u objeto de la secuencia activa.

reformulacion:
  cambiar lenguaje para reducir riesgo.

transferencia:
  mover el asunto a deuda, gate o documento posterior.

reduccion_de_alcance:
  limitar una idea para mantenerla dentro de v0.4.6.

rechazo:
  cerrar la formulación por contradicción constitucional.
```

---

## 16. Deuda heredada que este documento atiende

Esta spec atiende directamente la deuda:

```text
threat_model_detallado_local_first:
  estado: parcialmente atendida en v0.4.6
  alcance: conceptual, no técnico
  limite: no sustituye threat model técnico futuro si alguna fase posterior lo requiere
```

También activa vigilancia sobre:

```text
matriz_acciones_sensibles_arquitectura:
  razon:
    las amenazas identificadas deben alimentar una matriz ampliada de acciones sensibles.

decisiones_reversibles:
  razon:
    cada amenaza debe tener pausa, retiro, reformulación o transferencia.

ejemplos_por_edad_y_contexto:
  razon:
    amenazas que afecten estudiantes de escuela superior deben esperar lenguaje situado futuro.

guias_PH_IT_AT_ampliadas:
  razon:
    amenazas complejas pueden requerir revisión especializada.
```

---

## 17. Relación con gates

El gate de transición de v0.4.6 deberá verificar que:

```text
[ ] las amenazas conceptuales principales fueron identificadas;
[ ] las amenazas bloqueantes tienen tratamiento o pausa;
[ ] las amenazas vigiladas tienen deuda visible;
[ ] ninguna amenaza autoriza controles técnicos ejecutables;
[ ] ninguna amenaza se usa para justificar vigilancia;
[ ] la pregunta triangular se aplicó;
[ ] las decisiones reversibles están presentes;
[ ] los objetos de dominio no avanzan sin threat model suficiente.
```

---

## 18. Resultado esperado

Al aprobarse esta spec, PR #12 queda habilitado para usar un threat model conceptual local-first como filtro para los siguientes documentos.

Lo que habilita:

```text
[✓] revisar amenazas conceptuales;
[✓] clasificar riesgos de visibilidad, evidencia, interpretación y portafolio;
[✓] pausar objetos o decisiones con amenaza bloqueante;
[✓] transferir amenazas a deuda o gate;
[✓] preparar el Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md.
```

Lo que no habilita:

```text
[!] construir controles técnicos;
[!] crear seguridad funcional;
[!] definir cifrado;
[!] definir permisos;
[!] definir almacenamiento;
[!] crear arquitectura técnica;
[!] probar con personas;
[!] usar datos reales.
```

---

## 19. Ruta canónica propuesta

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
```

---

## 20. Comandos manuales seguros

```bash
mkdir -p 00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas

cp ~/Downloads/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md

git status --short

git add \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md

git diff --cached -- \
  00_CONTROL_MAESTRO/Spec_Driven_Development/Specs_Operativas/Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
```

Commit sugerido solo después de aprobación:

```bash
git commit -m "docs: definir threat model local-first conceptual v0.4.6"
```

---

## 21. Relación con el siguiente documento

Esta spec prepara el próximo documento:

```text
Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
```

Ese modelo deberá tratar evidencia y portafolio como conceptos revisables, no como almacenamiento, exportación, publicación ni expediente institucional.

---

## 22. Dictamen de preparación

```text
documento: Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
estado: aprobado_para_integracion_PR12
fase: v0.4.6 Arquitectura Conceptual No Funcional
destino: PR #12
commit_previsto: commit_6
implementacion: no_autorizada
siguiente_documento: Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
criterio_rector: consentimiento + datos/privacidad + seguridad local-first
```

Una amenaza nombrada a tiempo no es una alarma estridente. Es una boya: pequeña, visible, insistente, puesta donde el entusiasmo podría encallar.

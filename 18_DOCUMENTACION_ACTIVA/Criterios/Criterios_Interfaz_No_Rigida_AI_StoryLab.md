# Criterios de Interfaz No Rígida : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** `Criterios_Interfaz_No_Rigida_AI_StoryLab.md`  
**Fase:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**PR:** #13  
**Estado:** borrador inicial para revisión documental  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Propósito del documento

Este documento define criterios para pensar la **interfaz no rígida** de AI StoryLab 1 como una categoría conceptual de experiencia, no como una pantalla, prototipo, flujo ejecutable ni diseño visual final.

Su propósito es establecer condiciones documentales para que una futura experiencia pueda imaginarse sin reducir a las personas a rutas obligatorias, datos extraíbles, métricas de rendimiento o acciones irreversibles.

```text
proposito:
  definir_interfaz_como_espacio_habitable_conceptual
  proteger_agencia_humana
  evitar_flujos_coercitivos
  distinguir_experiencia_no_funcional_de_UI_real
  sostener_pausa_retiro_revision_y_reversibilidad
  orientar_documentos_posteriores_de_v0_4_7
```

---

## 2. Guardarraíl constitucional

Este documento no autoriza:

```text
[!] UI real;
[!] wireframes funcionales;
[!] pantallas;
[!] componentes interactivos;
[!] prototipo;
[!] navegación real;
[!] flujos ejecutables;
[!] diseño visual final;
[!] código de aplicación;
[!] backend;
[!] cloud;
[!] autenticación;
[!] analíticas;
[!] IA externa por defecto;
[!] datos reales;
[!] captura de evidencia real;
[!] almacenamiento de evidencia real;
[!] exportación real;
[!] automatización funcional;
[!] pruebas con personas;
[!] evaluación automática;
[!] investigación con datos reales;
[!] arquitectura técnica ejecutable.
```

Todo criterio aquí descrito funciona como orientación documental para revisión, no como especificación de producto.

---

## 3. Definición de interfaz no rígida

En v0.4.7, **interfaz no rígida** significa:

```text
interfaz_no_rigida:
  tipo: concepto_documental_no_funcional
  descripcion: espacio_de_relacion_habitable_entre_persona_proceso_creativo_evidencia_ficticia_y_revision_humana
  no_es:
    - pantalla
    - layout
    - prototipo
    - flujo_obligatorio
    - componente_tecnico
    - experiencia_ejecutable
```

Una interfaz no rígida no es una estructura que empuja a la persona hacia una única salida. Es una cartografía conceptual que permite comprender dónde se está, qué se toca, qué se puede pausar, qué se puede retirar y qué requiere revisión humana.

---

## 4. Tesis operativa

```text
Antes de diseñar una pantalla, hay que definir qué no debe obligar la experiencia.
Antes de proponer un flujo, hay que reconocer los puntos de salida.
Antes de nombrar una acción, hay que preguntar qué agencia protege.
Antes de imaginar evidencia, hay que cuidar qué visibilidad activa.
```

La interfaz no rígida es el muelle conceptual donde la experiencia puede detenerse antes de convertirse en sistema.

---

## 5. Principios rectores

### 5.1 Habitabilidad

La experiencia debe poder ser habitada por personas con ritmos, contextos, edades, formas de expresión y niveles de familiaridad distintos.

```text
criterio:
  la_persona_no_debe_ser_forzada_a_recorrer_una_ruta_unica
verificar:
  [ ] existen alternativas conceptuales de participación
  [ ] se reconoce la posibilidad de pausa
  [ ] se evita lenguaje de urgencia o presión
```

---

### 5.2 Agencia humana

Toda acción conceptual debe conservar capacidad de decisión humana.

```text
criterio:
  ninguna_accion_sensible_debe_ocurrir_sin_comprension_aceptacion_y_posibilidad_de_retiro
verificar:
  [ ] la persona puede entender qué ocurre
  [ ] la persona puede aceptar o no aceptar
  [ ] la persona puede pausar
  [ ] la persona puede retirar
  [ ] la persona puede pedir revisión humana
```

---

### 5.3 Reversibilidad conceptual

La experiencia debe evitar caminos sin retorno documental.

```text
criterio:
  toda_decision_sensible_debe_poder_revisarse_o_retornarse_conceptualmente
verificar:
  [ ] la acción no se presenta como definitiva
  [ ] se identifica qué puede revertirse
  [ ] se identifica qué queda como deuda si no es reversible
```

---

### 5.4 Ritmo humano

La experiencia no debe exigir velocidad, productividad continua ni avance lineal.

```text
criterio:
  el_ritmo_de_la_persona_prevalece_sobre_el_ritmo_del_sistema
verificar:
  [ ] se permite detenerse
  [ ] se permite volver
  [ ] se permite dejar incompleto
  [ ] se evita castigo simbólico por pausa
```

---

### 5.5 Claridad situada

El lenguaje debe explicar según perfil y contexto, sin convertirse en copy final de producto.

```text
criterio:
  la_explicacion_debe_ser_contextual_y_revisable
verificar:
  [ ] se evita jerga innecesaria
  [ ] se declara cuando algo es ficticio
  [ ] se distingue evidencia ficticia de evidencia real
  [ ] se reconoce diferencia entre perfiles
```

---

### 5.6 Accesibilidad expresiva

La experiencia debe admitir distintas formas de crear, comprender, narrar, revisar y participar.

```text
criterio:
  no_hay_una_sola_forma_valida_de_expresion_creativa
verificar:
  [ ] se admiten modos verbales, visuales, narrativos, esquemáticos o híbridos como posibilidades conceptuales
  [ ] se evita privilegiar una estética única
  [ ] se evita medir creatividad como rendimiento automático
```

---

### 5.7 No vigilancia

La experiencia no debe naturalizar observación, seguimiento, puntuación o análisis automático.

```text
criterio:
  la_persona_no_debe_sentirse_observada_como_fuente_de_metrica
verificar:
  [ ] no se propone analítica
  [ ] no se interpreta conducta real
  [ ] no se registra participación real
  [ ] no se promete evaluación automática
```

---

### 5.8 Local-first conceptual

Toda zona de experiencia debe pensarse desde seguridad local-first como principio documental, sin definir arquitectura técnica ejecutable.

```text
criterio:
  lo_sensible_debe_pensarse_cerca_de_la_persona_y_bajo_control_humano
verificar:
  [ ] se identifica zona conceptual
  [ ] se identifica amenaza conceptual
  [ ] se identifica control humano requerido
  [ ] no se define almacenamiento, sincronización, cifrado ni permisos reales
```

---

## 6. Pregunta triangular aplicada

Todo criterio de interfaz no rígida debe responder:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

Si una pregunta no puede contestarse, el criterio queda marcado como deuda vigilada.

---

## 7. Diferencias críticas

| No confundir | En v0.4.7 significa | No debe convertirse en |
|---|---|---|
| Interfaz no rígida | Concepto habitable de experiencia | UI real |
| Zona de experiencia | Espacio conceptual de relación | Pantalla o ruta técnica |
| Punto de pausa | Capacidad humana documentada | Botón funcional |
| Punto de retiro | Derecho conceptual a no continuar | Flujo de eliminación real |
| Visibilidad ficticia | Hipótesis documental sobre quién podría ver qué | Permiso técnico |
| Evidencia ficticia | Objeto inventado para análisis | Captura real |
| Portafolio conceptual | Relación documental entre evidencia y trayectoria | Repositorio funcional |
| Control habitable | Capacidad humana de comprender, pausar, retirar o revisar | Mecanismo de seguridad ejecutable |

---

## 8. Criterios de no rigidez

### 8.1 La experiencia debe tener más de una entrada conceptual

```text
criterio:
  entrada_plural
pregunta:
  ¿La persona puede llegar desde curiosidad, necesidad, exploración, revisión o acompañamiento?
riesgo_si_no:
  flujo_unico
  onboarding_encubierto
  perfil_generico
```

---

### 8.2 La experiencia debe tener salidas visibles

```text
criterio:
  salida_visible
pregunta:
  ¿La persona sabe que puede detenerse, no participar o retirar algo?
riesgo_si_no:
  coercion_suave
  consentimiento_debil
  participacion_por_inercia
```

---

### 8.3 La experiencia debe permitir incompletitud

```text
criterio:
  incompletitud_legitima
pregunta:
  ¿Queda claro que no terminar también puede ser una decisión válida?
riesgo_si_no:
  productividad_forzada
  culpa_por_pausa
  sobreinstrumentalizacion_creativa
```

---

### 8.4 La experiencia debe admitir revisión antes de interpretación

```text
criterio:
  revision_antes_de_interpretacion
pregunta:
  ¿La persona puede revisar cómo se nombra o contextualiza algo antes de que sea interpretado?
riesgo_si_no:
  interpretacion_prematura
  perdida_de_agencia_narrativa
  autoridad_excesiva_del_sistema
```

---

### 8.5 La experiencia debe separar creación de evaluación

```text
criterio:
  creacion_no_es_evaluacion
pregunta:
  ¿La actividad creativa se protege de convertirse en puntuación o juicio automático?
riesgo_si_no:
  evaluacion_encubierta
  vigilancia_creativa
  reduccion_de_la_expresion_a_metrica
```

---

### 8.6 La experiencia debe diferenciar evidencia, reflexión y visibilidad

```text
criterio:
  separacion_sensible
pregunta:
  ¿El documento distingue lo creado, lo reflexionado y lo visible?
riesgo_si_no:
  mezcla_de_datos
  consentimiento_confuso
  exposicion_no_comprendida
```

---

### 8.7 La experiencia debe evitar defaults extractivos

```text
criterio:
  no_default_extractivo
pregunta:
  ¿La opción conceptual por defecto protege privacidad y pausa?
riesgo_si_no:
  compartir_por_defecto
  visibilidad_implicita
  presion_a_entregar
```

---

### 8.8 La experiencia debe preservar mediación humana

```text
criterio:
  mediacion_humana
pregunta:
  ¿Las decisiones sensibles pueden volver a una persona, docente, equipo o revisión humana según contexto?
riesgo_si_no:
  automatizacion_del_juicio
  cierre_prematuro_de_sentido
  perdida_de_contexto
```

---

## 9. Matriz de criterios

| Criterio | Debe permitir | Debe evitar | Pregunta de revisión |
|---|---|---|---|
| Entrada plural | Distintos modos de aproximarse | Onboarding único | ¿Quién queda fuera si solo hay una entrada? |
| Salida visible | Pausar, retirar, no continuar | Participación por inercia | ¿Dónde se reconoce el derecho a detenerse? |
| Incompletitud legítima | Dejar abierto o pendiente | Culpa por no terminar | ¿Lo incompleto sigue siendo válido? |
| Revisión humana | Cuestionar interpretación | Juicio automático | ¿Quién puede revisar antes de aceptar? |
| Claridad situada | Explicación por perfil | Usuario genérico | ¿El lenguaje cuida edad, rol y contexto? |
| No vigilancia | Crear sin sentirse medido | Analítica o puntuación | ¿La persona queda convertida en métrica? |
| Separación sensible | Evidencia, reflexión y visibilidad diferenciadas | Mezcla de datos | ¿Qué toca cada acción conceptual? |
| Control habitable | Comprender, pausar, retirar, revisar | Control técnico disfrazado | ¿El control es una capacidad humana? |
| Reversibilidad | Volver, corregir, retirar | Camino sin retorno | ¿Qué puede deshacerse conceptualmente? |
| Accesibilidad expresiva | Múltiples formas de expresión | Estética única o rendimiento | ¿Hay más de una forma legítima de crear? |

---

## 10. Criterios por perfil

### 10.1 Estudiante de escuela superior

La interfaz no rígida debe:

```text
[ ] explicar sin infantilizar;
[ ] reconocer posibilidad de duda;
[ ] evitar presión por producir evidencia;
[ ] permitir pausa clara;
[ ] evitar lenguaje de vigilancia;
[ ] diferenciar exploración creativa de evaluación escolar;
[ ] proteger retiro y no participación.
```

Debe evitar:

```text
[!] tono disciplinario;
[!] obligación de compartir;
[!] presión por desempeño;
[!] lenguaje que parezca examen;
[!] capturar reflexión personal real.
```

---

### 10.2 Estudiante universitario

La interfaz no rígida debe:

```text
[ ] reconocer autonomía;
[ ] permitir autoría situada;
[ ] separar ensayo, exploración y entrega formal;
[ ] proteger borradores y reflexiones ficticias;
[ ] permitir revisión antes de visibilidad;
[ ] cuidar consentimiento informado.
```

Debe evitar:

```text
[!] asumir consentimiento por participación;
[!] convertir proceso creativo en métrica;
[!] presionar publicación;
[!] mezclar evidencia conceptual con evaluación real.
```

---

### 10.3 Docente

La interfaz no rígida debe:

```text
[ ] apoyar mediación pedagógica humana;
[ ] evitar automatizar juicio docente;
[ ] distinguir acompañamiento de evaluación;
[ ] permitir contextualizar criterios;
[ ] proteger ritmos de revisión;
[ ] reconocer límites de visibilidad.
```

Debe evitar:

```text
[!] sustituir criterio docente;
[!] crear rúbricas automáticas;
[!] sugerir vigilancia de estudiantes;
[!] convertir evidencias ficticias en actividad real.
```

---

### 10.4 Investigador

La interfaz no rígida debe:

```text
[ ] distinguir documentación de investigación;
[ ] bloquear uso de datos reales;
[ ] marcar preguntas futuras como deuda;
[ ] evitar observación de conducta real;
[ ] cuidar reflexiones como material sensible;
[ ] exigir autorización futura para investigación.
```

Debe evitar:

```text
[!] instrumentos de investigación;
[!] reclutamiento;
[!] análisis de datos reales;
[!] inferencias sobre participantes reales;
[!] protocolos de estudio no autorizados.
```

---

## 11. Señales de rigidez a detectar

La revisión debe pausar si aparecen patrones como:

```text
flujo_unico_obligatorio
siguiente_paso_forzado
lenguaje_de_urgencia
progreso_como_presion
compartir_por_defecto
evaluar_por_defecto
publicar_por_defecto
guardar_por_defecto
visibilidad_implicita
consentimiento_asumido
interpretacion_automatica
persona_convertida_en_metrica
creatividad_convertida_en_rendimiento
```

Estas señales no siempre invalidan un documento, pero deben activar revisión explícita.

---

## 12. Microcopy ficticia permitida para explorar criterios

Este documento puede usar microcopy solo si es ficticia, revisable y claramente no final.

Ejemplos conceptuales permitidos:

```text
"Puedes detenerte aquí y volver luego."
"Antes de continuar, revisa qué parte de esta experiencia quieres hacer visible."
"Esta evidencia es ficticia y se usa solo para revisar el lenguaje."
"Puedes pedir revisión humana antes de aceptar una interpretación."
"No tienes que completar este recorrido para que tu proceso tenga valor."
```

Microcopy prohibida como texto listo para producto:

```text
"Haz clic para guardar."
"Sube tu evidencia."
"Publica tu portafolio."
"Acepta para continuar."
"Tu progreso será evaluado automáticamente."
"Analizaremos tu comportamiento para mejorar la experiencia."
```

---

## 13. Controles habitables asociados

La interfaz no rígida debe permitir nombrar controles habitables conceptuales como:

```text
comprender:
  la_persona_recibe_explicacion_situada

pausar:
  la_persona_puede_detener_el_recorrido_conceptual

retirar:
  la_persona_puede_no_continuar_o_sacar_una_evidencia_ficticia_del_analisis

renombrar:
  la_persona_puede_cuestionar_como_se_nombra_su_proceso

revisar:
  la_persona_puede_leer_y_ajustar_antes_de_aceptar

limitar_visibilidad:
  la_persona_puede_entender_y_reducir_quien_podria_ver_algo_en_un_escenario_ficticio

pedir_revision_humana:
  la_persona_puede_devolver_una_interpretacion_a_mediacion_humana

transferir_deuda:
  lo_no_resuelto_no_se_implementa_sino_que_se_registra
```

Estos controles no son botones, permisos, cifrado, roles técnicos ni lógica de backend.

---

## 14. Relación con evidencia y portafolio conceptual

Una interfaz no rígida debe evitar que la evidencia ficticia se mueva automáticamente hacia portafolio conceptual sin revisión.

```text
criterios:
  [ ] la evidencia ficticia se nombra como ficticia;
  [ ] la reflexión ficticia se trata como sensible;
  [ ] la inclusión en portafolio conceptual requiere revisión;
  [ ] la visibilidad conceptual se explica antes de imaginar compartir;
  [ ] el retiro conceptual permanece disponible;
  [ ] no se habla de almacenamiento real.
```

Pregunta de revisión:

```text
¿La persona conserva control narrativo sobre lo que una evidencia significa antes de que sea vinculada a un portafolio conceptual?
```

---

## 15. Zonas conceptuales de interfaz no rígida

| Zona conceptual | Función documental | Riesgo principal | Control habitable |
|---|---|---|---|
| Entrada | Acercarse a la experiencia | Onboarding encubierto | Explicación situada |
| Exploración | Probar ideas ficticias | Productividad forzada | Pausa |
| Nombramiento | Dar lenguaje a proceso o evidencia | Interpretación prematura | Renombrar y revisar |
| Visibilidad | Imaginar quién ve qué | Exposición no comprendida | Limitar visibilidad |
| Portafolio conceptual | Relacionar evidencia con trayectoria | Almacenamiento disfrazado | Retiro conceptual |
| Revisión humana | Devolver sentido a mediación humana | Automatización del juicio | Pedir revisión |
| Cierre provisional | Detener sin finalizar | Presión de completitud | Incompletitud legítima |

---

## 16. Revisión por roles documentales

```text
guardian_SDD_constitucional:
  verifica: no_UI_real_no_prototipo_no_flujo_ejecutable

arquitecto_documental:
  verifica: coherencia_con_mapa_experiencia_y_guia_lenguaje

programador_humanista_PH:
  verifica: agencia_pausa_retiro_y_revision_humana

investigador_transdisciplinario_IT:
  verifica: no_datos_reales_no_investigacion_no_evaluacion

artista_transdisciplinario_AT:
  verifica: apertura_expresiva_habitabilidad_y_no_rigidez

Bitacora_del_Capitan:
  verifica: deuda_y_continuidad_hacia_escenarios_ficticios
```

---

## 17. Relación con documentos previos de v0.4.7

Este documento se apoya en:

```text
Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  relacion: define_guardarrail_y_metodo_documental

Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  relacion: define_criterios_de_revision_y_pausa

Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md:
  relacion: aporta_zonas_momentos_y_controles_conceptuales

Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md:
  relacion: aporta_lenguaje_situado_por_perfil
```

---

## 18. Relación con documentos siguientes

Este documento prepara:

```text
Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md:
  aporte: criterios_para_no_convertir_escenarios_en_pruebas_reales

Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md:
  aporte: señales_de_accion_sensible_y_controles_habitables

Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md:
  aporte: criterios_para_transferir_lo_no_resuelto

Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md:
  aporte: condiciones_para_bloquear_prototipo_prematuro
```

---

## 19. Criterios de aprobación del documento

Este documento puede aprobarse si:

```text
[ ] define interfaz no rígida como concepto documental;
[ ] bloquea UI real, prototipo y flujo ejecutable;
[ ] responde la pregunta triangular;
[ ] conserva agencia humana;
[ ] incluye criterios por perfil;
[ ] distingue controles habitables de controles técnicos;
[ ] diferencia evidencia ficticia de evidencia real;
[ ] evita investigación y evaluación;
[ ] prepara escenarios ficticios sin activarlos como pruebas.
```

---

## 20. Ubicación documental propuesta

```text
18_DOCUMENTACION_ACTIVA/Criterios/Criterios_Interfaz_No_Rigida_AI_StoryLab.md
```

---

## 21. Mensaje de commit recomendado

```bash
git commit -m "docs: agregar criterios de interfaz no rigida v0.4.7"
```

Usar siempre `git add` con ruta explícita.

---

## 22. Dictamen inicial

```text
guardian_SDD_constitucional:
  estado: guardarrail_activo
  dictamen: interfaz_definida_como_no_funcional

arquitecto_documental:
  estado: criterios_ubicados_en_secuencia_v0_4_7
  dictamen: prepara_escenarios_ficticios_y_matriz_acciones_sensibles

programador_humanista_PH:
  estado: agencia_pausa_retiro_revision_priorizados
  dictamen: evitar_rutas_unicas_y_consentimiento_implicito

investigador_transdisciplinario_IT:
  estado: datos_reales_investigacion_y_evaluacion_bloqueados
  dictamen: conservar_ficcion_documental

artista_transdisciplinario_AT:
  estado: habitabilidad_y_apertura_expresiva_protegidas
  dictamen: evitar_rigidez_de_flujo_y_estetica_unica

Bitacora_del_Capitan:
  estado: criterios_listos_para_revision
  siguiente_marca: aprobacion_explicita_antes_de_escenarios_ficticios
```

---

## 23. Cierre

La interfaz no rígida no es una maqueta. Es una promesa documental de no encerrar la experiencia antes de comprenderla.

En esta fase, AI StoryLab 1 no dibuja botones ni pasillos obligatorios. Dibuja umbrales, descansos, ventanas, rutas de regreso y señales de cuidado para que la experiencia futura no confunda participación con entrega, creatividad con rendimiento ni evidencia con extracción.

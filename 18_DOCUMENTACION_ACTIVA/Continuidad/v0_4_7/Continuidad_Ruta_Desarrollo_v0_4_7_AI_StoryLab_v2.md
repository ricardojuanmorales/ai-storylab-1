# Continuidad Ruta de Desarrollo v0.4.7 v2 : AI StoryLab

**Proyecto:** AI StoryLab 1  
**Documento:** Continuidad_Ruta_Desarrollo_v0_4_7_AI_StoryLab_v2.md  
**Fase de origen:** v0.4.6 Arquitectura Conceptual No Funcional  
**Fase objetivo:** v0.4.7 Diseño de Experiencia No Funcional  
**Subtítulo operativo:** Lenguaje Situado, Escenarios Ficticios y Controles Habitables  
**Estado:** documento de continuidad para activación  
**Naturaleza:** documentación SDD, sin implementación funcional  
**Fecha:** 2026-07-05  

---

## 1. Función de v0.4.7

La fase **v0.4.7** debe funcionar como fase de diseño documental de experiencia no funcional.

Su misión no es construir AI StoryLab 1. Su misión es preparar el modo en que la experiencia podrá ser pensada, descrita, revisada y protegida antes de cualquier diseño funcional futuro.

v0.4.7 debe trabajar:

```text
[✓] lenguaje situado;
[✓] mapas de experiencia creativa;
[✓] escenarios ficticios por edad y contexto;
[✓] criterios de interfaz no rígida;
[✓] controles habitables;
[✓] accesibilidad expresiva;
[✓] revisión PH, IT y AT;
[✓] matrices de acciones sensibles.
```

No debe cruzar hacia:

```text
[!] UI real;
[!] prototipo;
[!] diseño funcional ejecutable;
[!] pruebas con personas;
[!] datos reales;
[!] arquitectura técnica;
[!] investigación;
[!] automatización.
```

---

## 2. Tesis operativa de v0.4.7

```text
Antes de diseñar una interfaz, hay que definir cómo se protege la experiencia.
Antes de escribir microcopy final, hay que crear lenguaje ficticio y revisable.
Antes de imaginar flujos, hay que distinguir escenarios ficticios de operaciones reales.
Antes de invitar a personas, hay que probar documentalmente los límites éticos.
```

---

## 3. Microcopy permitida y microcopy prohibida

### 3.1 Permitida

```text
microcopy_conceptual:
  tipo: ficticia, revisable, no funcional
  uso:
    - explorar tono;
    - detectar riesgos;
    - revisar consentimiento;
    - revisar privacidad;
    - revisar seguridad local-first;
    - diferenciar perfiles;
    - preparar discusión documental.
```

### 3.2 Prohibida

```text
microcopy_final:
  tipo: texto listo para interfaz real
  prohibida_si:
    - se presenta como UI real;
    - se usa con personas;
    - activa una experiencia funcional;
    - solicita datos reales;
    - guía almacenamiento o exportación;
    - se usa como onboarding real;
    - se convierte en instrumento de prueba.
```

---

## 4. Escenarios ficticios permitidos y prohibidos

### 4.1 Permitidos

```text
escenarios_ficticios:
  tipo: casos inventados, no reales, no aplicados
  proposito:
    - analizar edad y contexto;
    - revisar agencia;
    - explorar riesgos;
    - diferenciar perfiles;
    - detectar deuda;
    - probar lenguaje documental.
```

### 4.2 Prohibidos

```text
escenarios_reales:
  prohibidos_si:
    - usan estudiantes reales;
    - describen casos identificables;
    - capturan evidencia real;
    - solicitan reflexión real;
    - se aplican como actividad;
    - funcionan como prueba piloto;
    - producen datos de investigación.
```

---

## 5. Documentos recomendados para v0.4.7

### 5.1 Apertura

```text
[1] Protocolo_Trabajo_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[2] Plan_Revision_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
```

### 5.2 Núcleo de experiencia no funcional

```text
[3] Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
[4] Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
[5] Criterios_Interfaz_No_Rigida_AI_StoryLab.md
[6] Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
[7] Matriz_Acciones_Sensibles_Experiencia_No_Funcional_AI_StoryLab.md
```

### 5.3 Cierre y continuidad

```text
[8] Registro_Deuda_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[9] Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
[10] Changelog_PR_v0_4_7_Diseno_Experiencia_No_Funcional_AI_StoryLab.md
[11] Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
[12] Cierre_Sesion_v0_4_7_AI_StoryLab.md
[13] Cierre_Bitacora_Capitan_v0_4_7_AI_StoryLab.md
```

---

## 6. Descripción de documentos clave

### 6.1 Mapa de experiencia creativa local-first

Debe definir:

```text
[ ] zonas de experiencia;
[ ] momentos de agencia humana;
[ ] puntos de pausa;
[ ] puntos de retiro;
[ ] relación con evidencia;
[ ] relación con portafolio;
[ ] límites de visibilidad;
[ ] amenazas conceptuales.
```

No debe definir:

```text
[!] pantallas;
[!] navegación real;
[!] componentes;
[!] backend;
[!] almacenamiento;
[!] permisos;
[!] eventos técnicos.
```

---

### 6.2 Guía de lenguaje por perfiles de usuario

Debe cubrir:

```text
[ ] estudiante de escuela superior;
[ ] estudiante universitario;
[ ] docente;
[ ] investigador.
```

Debe distinguir:

```text
[ ] lenguaje de invitación;
[ ] lenguaje de consentimiento;
[ ] lenguaje de pausa;
[ ] lenguaje de retiro;
[ ] lenguaje de cuidado;
[ ] lenguaje de evidencia;
[ ] lenguaje de portafolio;
[ ] lenguaje de revisión humana.
```

---

### 6.3 Criterios de interfaz no rígida

Debe definir interfaz como concepto habitable, no como pantalla.

Puede trabajar:

```text
[✓] flexibilidad;
[✓] agencia;
[✓] reversibilidad;
[✓] no vigilancia;
[✓] ritmo humano;
[✓] juego creativo;
[✓] accesibilidad expresiva;
[✓] claridad situada.
```

No puede trabajar:

```text
[!] layout real;
[!] wireframes funcionales;
[!] prototipo;
[!] diseño visual final;
[!] componentes interactivos;
[!] integración técnica.
```

---

### 6.4 Escenarios ficticios por edad y contexto

Debe usar personajes o situaciones inventadas.

Debe evitar:

```text
[!] datos reales;
[!] casos identificables;
[!] estudiantes reales;
[!] docentes reales;
[!] investigación;
[!] pruebas piloto;
[!] evaluación.
```

---

### 6.5 Matriz de acciones sensibles de experiencia no funcional

Debe revisar acciones conceptuales como:

```text
[ ] invitar;
[ ] explicar;
[ ] pausar;
[ ] retirar;
[ ] nombrar evidencia;
[ ] contextualizar evidencia;
[ ] incluir en portafolio;
[ ] retirar del portafolio;
[ ] compartir visibilidad ficticia;
[ ] interpretar reflexión ficticia;
[ ] pedir revisión humana;
[ ] transferir deuda.
```

---

## 7. Criterio rector heredado

Toda decisión de v0.4.7 debe pasar por la pregunta triangular:

```text
Consentimiento:
  ¿La persona entiende, acepta, puede pausar y puede retirar?

Datos/privacidad:
  ¿Qué dato, evidencia, reflexión, metadato o visibilidad toca?

Seguridad local-first:
  ¿En qué zona ocurre, qué amenaza conceptual activa y qué control humano requiere?
```

---

## 8. Roles documentales recomendados

```text
guardian_SDD_constitucional:
  asegura que no se cruce hacia implementación.

arquitecto_documental:
  organiza secuencia, rutas y coherencia documental.

programador_humanista_PH:
  revisa agencia, claridad, cuidado, reversibilidad y lenguaje.

investigador_transdisciplinario_IT:
  revisa supuestos, límites de investigación y evidencia.

artista_transdisciplinario_AT:
  revisa imaginación, juego, expresión y no reducción instrumental.

Bitacora_del_Capitan:
  registra hitos, deudas, cierres y continuidad narrativa.
```

---

## 9. Criterios de pausa

Pausar si aparece cualquiera de estos verbos como acción real:

```text
guardar
almacenar
capturar
subir
sincronizar
exportar
publicar
autenticar
procesar automáticamente
evaluar
puntuar
analizar comportamiento
crear pantalla
implementar
construir
probar con estudiantes
investigar con datos reales
```

Estos verbos pueden discutirse como riesgos, límites o deuda futura, pero no como acciones autorizadas.

---

## 10. Resultado esperado de v0.4.7

Al cerrar v0.4.7, AI StoryLab 1 debería tener:

```text
[ ] protocolo y plan de revisión;
[ ] mapa de experiencia creativa local-first;
[ ] guía de lenguaje por perfiles;
[ ] criterios de interfaz no rígida;
[ ] escenarios ficticios por edad y contexto;
[ ] matriz ampliada de acciones sensibles;
[ ] registro de deuda;
[ ] gate de cierre o transición;
[ ] changelog;
[ ] transferencia simétrica;
[ ] cierre de sesión;
[ ] Bitácora del Capitán.
```

No debería tener:

```text
[!] prototipo;
[!] experiencia funcional;
[!] UI real;
[!] arquitectura técnica;
[!] datos reales;
[!] investigación;
[!] evaluación automática.
```

---

## 11. Estado de activación

```text
v0_4_7:
  estado: lista_para_iniciar
  origen: post_merge_PR12
  modo: documental_SDD
  implementacion: no_autorizada
  foco: diseño_experiencia_no_funcional
  ejes: lenguaje_situado + escenarios_ficticios + controles_habitables
```

v0.4.7 debe diseñar la experiencia como quien diseña una plaza antes de poner una sola piedra: probando sombra, entradas, salidas, pausas y cuidado.

# Guía SDD para el Programador Humanista AI StoryLab 1 v0.4.4

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.4 - Spec-Driven Development, seguridad, privacidad y preparación responsable  
**Tipo de documento:** Guía de referencia metodológica  
**Estado:** Borrador para revisión y aprobación documental  
**Ruta canónica propuesta:** `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/Guia_SDD_para_Programador_Humanista_AI_StoryLab_1_v0_4_4.md`  
**PR de trabajo:** #8  
**Rama:** `v0.4.4-sdd-foundation`  
**Alcance:** Documental, metodológico y formativo. No autoriza implementación funcional.

---

## 1. Declaración de rol

El Programador Humanista no comienza preguntando “¿cómo lo implemento?”, sino:

```text
¿Qué experiencia humana protege esta función?
¿Qué riesgo introduce?
¿Qué datos toca?
¿Qué consentimiento requiere?
¿Qué agencia preserva?
¿Qué debe permanecer local?
¿Qué revisión humana necesita?
¿Qué debe bloquearse antes de construir?
```

En AI StoryLab 1 v0.4.4, el Programador Humanista actúa como mediador entre imaginación técnica, cuidado humano, seguridad, privacidad, pedagogía, investigación-creación y gobernanza documental.

---

## 2. Qué significa SDD para este perfil

Spec-Driven Development significa que toda idea relevante debe convertirse en especificación antes de convertirse en implementación.

Para el Programador Humanista, una spec no es solo un requisito técnico. Es un documento de decisión que debe integrar:

```text
propósito humano;
experiencia creativa;
subjetividades afectadas;
datos y evidencias;
riesgos;
consentimiento;
local-first;
IA, si aplica;
criterios de aceptación;
criterios de prueba;
revisión humana;
deuda documental o técnica;
decisión final.
```

Una spec segura debe permitir decir:

```text
sí, se puede continuar;
sí, pero con condiciones;
todavía no;
no, esto debe bloquearse o rediseñarse.
```

---

## 3. Principios operativos

### 3.1 Agencia humana

Toda decisión técnica debe preservar la capacidad de las personas para comprender, decidir, revisar, editar, retirar, exportar, compartir o no compartir sus producciones.

Pregunta mínima:

```text
¿Esta propuesta aumenta o reduce el control real del usuario?
```

### 3.2 Local-first

La arquitectura futura debe diseñarse primero desde control local, minimización de datos y portabilidad.

Pregunta mínima:

```text
¿Qué puede resolverse localmente sin backend, cloud, APIs externas ni subida automática?
```

### 3.3 Privacidad por defecto

Ningún dato debe pedirse por costumbre.

Pregunta mínima:

```text
¿Podemos lograr el propósito sin este dato?
```

### 3.4 Seguridad por diseño

El riesgo se modela antes de construir.

Pregunta mínima:

```text
¿Qué podría salir mal aunque todos tengan buenas intenciones?
```

### 3.5 Consentimiento informado y situado

El consentimiento debe estar conectado a una acción concreta.

Pregunta mínima:

```text
¿La persona entiende qué ocurrirá, con qué datos, para qué y con qué alternativas?
```

### 3.6 Experiencia creativa no rígida

La estructura debe sostener la creatividad, no convertirla en formulario muerto.

Pregunta mínima:

```text
¿Esta función abre posibilidades o encierra al usuario en una ruta única?
```

### 3.7 No evaluación automática como juez final

La IA o cualquier sistema automático puede asistir, sugerir u organizar, pero no actuar como autoridad final sobre aprendizaje, creatividad o valor humano.

Pregunta mínima:

```text
¿Hay una persona con capacidad real de revisión final?
```

---

## 4. Ciclo de trabajo del Programador Humanista en SDD

```text
1. Recibir o formular una idea.
2. Convertir la idea en pregunta humana y educativa.
3. Clasificar tipo de spec.
4. Identificar subjetividades afectadas.
5. Identificar datos, evidencias y acciones sensibles.
6. Aplicar criterios local-first.
7. Identificar consentimiento requerido.
8. Crear threat model preliminar.
9. Revisar rigidez antijuego creativo.
10. Definir criterios de aceptación.
11. Definir criterios de prueba documental.
12. Solicitar revisión humana cuando aplique.
13. Registrar decisión.
14. Actualizar bitácora, transferencia y deuda.
15. Solo después de autorización futura, traducir la spec a tareas técnicas.
```

En v0.4.4, el paso 15 no autoriza implementación funcional. Solo prepara el terreno para fases posteriores.

---

## 5. Señales de bloqueo inmediato

Una propuesta debe bloquearse, diferirse o rediseñarse si incluye:

```text
implementación sin spec;
backend sin autorización;
cloud sin política;
APIs externas sin threat model;
autenticación prematura;
analíticas;
base de datos remota;
subida automática de archivos;
IA externa por defecto;
manejo de datos reales sin política formal;
publicación automática;
evaluación automática como juez final;
menores de edad sin consentimiento reforzado;
evidencia educativa sensible sin revisión humana;
flujo que destruye la experiencia creativa.
```

Bloquear no significa fracasar. En SDD, bloquear a tiempo es una forma de cuidado técnico.

---

## 6. Relación con POO conceptual

En v0.4.4, la programación orientada a objetos se usa como herramienta de pensamiento, no como implementación.

El Programador Humanista puede modelar objetos conceptuales como:

```text
Usuario
Subjetividad
Portafolio
Evidencia
Reflexion
ActividadCreativa
Competencia
Rubrica
Spec
Consentimiento
ThreatModel
DecisionHumana
UsoIA
RegistroDeuda
RevisionHumana
```

Cada objeto conceptual debe responder:

```text
¿Cuál es su propósito?
¿Qué datos contiene?
¿Qué datos no debe contener?
¿Qué responsabilidades tiene?
¿Qué reglas éticas lo gobiernan?
¿Qué amenazas introduce?
¿Qué pruebas documentales requiere?
¿Qué condiciones lo bloquean?
```

---

## 7. Trazabilidad obligatoria

Cada decisión relevante debe poder rastrearse hacia:

```text
Constitución SDD;
Plantilla de Spec Segura;
bitácora de sesión;
bitácora de transferencia simétrica;
registro de deuda;
matrices o políticas asociadas;
revisión humana, si aplica.
```

La trazabilidad evita que una decisión técnica se convierta en isla.

---

## 8. Errores comunes que debe evitar el Programador Humanista

```text
confundir spec con tarea técnica;
llenar plantillas sin deliberación real;
pensar que una plantilla aprobada autoriza código;
minimizar riesgos de datos porque el proyecto es educativo;
usar IA externa como atajo sin consentimiento;
crear campos obligatorios sin propósito;
convertir portafolios en archivos muertos;
tratar evidencia educativa como archivo neutro;
cerrar decisiones sin actualizar deuda;
olvidar transferencia simétrica.
```

---

## 9. Dictamen

El Programador Humanista en AI StoryLab 1 v0.4.4 es guardián de transición.

Su tarea no es detener la innovación. Es hacer que la innovación llegue con raíces, permisos, trazabilidad y cuidado.

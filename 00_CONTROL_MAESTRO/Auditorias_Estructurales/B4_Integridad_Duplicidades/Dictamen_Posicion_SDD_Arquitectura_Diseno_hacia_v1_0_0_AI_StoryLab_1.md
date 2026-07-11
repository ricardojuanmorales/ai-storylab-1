# Dictamen de Posición de SDD, Arquitectura y Diseño hacia v1.0.0
## AI StoryLab 1 · Punto crítico de la auditoría estructural

**Estado:** Propuesta estratégica para aprobación humana  
**Alcance:** Arquitectura documental objetivo  
**Restricción:** No autoriza movimientos, renombres, fusiones ni apertura de v0.8.0

---

## 1. Decisión de principio

La versión en que un documento fue creado no debe convertirse en su ruta canónica permanente.

```text
la versión explica cuándo nació;
la función explica dónde vive;
la autoridad explica cuál gobierna;
la vigencia explica cuál se usa.
```

Los cartapacios de continuidad pueden organizarse por versión porque registran proceso. Los documentos sustantivos de arquitectura, diseño y requisitos deben descubrirse por función.

---

## 2. Posición de SDD

SDD no es un cartapacio temático más. Es el sistema que convierte principios y necesidades humanas en productos trazables y verificables.

### 2.1 SDD rector

```text
00_CONTROL_MAESTRO/Spec_Driven_Development/
```

Custodia:

- Constitución SDD;
- gobernanza;
- ciclo de vida de specs;
- reglas de autoridad;
- criterios de derivación;
- mapas e índices de gates;
- specs operativas aprobadas.

### 2.2 Workspace SDD

```text
.specify/
```

Opera como espacio técnico de trabajo y trazabilidad. No debe competir con `00_CONTROL_MAESTRO` como segunda fuente constitucional.

### 2.3 Instrumental SDD

```text
07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/
```

Custodia plantillas reutilizables, no specs completadas.

### 2.4 Competencia humana SDD

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/
```

Custodia la formación necesaria para participar responsablemente en el ciclo.

---

## 3. Hallazgo crítico

Los bloques sustantivos de diseño funcional y arquitectura técnica existen, pero permanecen bajo rutas de continuidad asociadas a `v0_6_0` y `v0_7_0`.

Esto preserva muy bien la historia de creación, pero debilita:

- descubrimiento;
- navegación;
- autoridad;
- reutilización;
- actualización;
- trazabilidad hacia implementación;
- preparación de v1.0.0.

La arquitectura vigente no debe parecer un anexo de una sesión terminada.

---

## 4. Contenedor estructural recomendado

Se propone evaluar en B6 la evolución de:

```text
02_ARQUITECTURA_CONCEPTUAL/
```

hacia:

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/
├── README.md
├── Indice_Maestro/
├── Arquitectura_Conceptual/
├── Arquitectura_Funcional/
├── Diseno_Funcional_UX/
├── Arquitectura_Tecnica_Referencia/
├── Modelo_Datos/
├── Seguridad_Privacidad_por_Diseno/
├── Decisiones_Arquitectonicas/
├── Trazabilidad_Specs_Arquitectura_Diseno/
└── Versiones_y_Baselines/
```

Este nombre no limita el cartapacio a arquitectura conceptual y evita dispersar el diseño funcional entre continuidad, implementación y diseño instruccional.

La propuesta es hipotética. Su validación pertenece a B6.

---

## 5. Fronteras del contenedor

### Entra en 02

- mapas funcionales;
- requisitos funcionales consolidados;
- flujos funcionales;
- modelos de experiencia;
- recorridos de usuario;
- arquitectura conceptual;
- arquitectura local-first;
- arquitectura modular;
- modelo de datos conceptual;
- roles y permisos;
- privacidad y seguridad por diseño;
- vista funcional del facilitador;
- decisiones arquitectónicas aplicables.

### No entra en 02

- Constitución SDD;
- specs operativas rectoras;
- bitácoras;
- kits de inicio;
- cierres;
- transferencias;
- changelogs;
- gates y dictámenes;
- deuda como fuente primaria;
- planes de implementación;
- principios pedagógicos generales.

---

## 6. Flujo de autoridad

```text
01 Fundamento filosófico
        ↓
00 Constitución y gobernanza SDD
        ↓
Specs operativas aprobadas
        ↓
02 Arquitectura y diseño del ecosistema
        ↓
15 Gates, checks y validación
        ↓
19 Implementación y despliegue
        ↓
18 Memoria, decisiones y continuidad
        ↓
20 Deuda y evolución
```

La secuencia no es una pirámide rígida. Ética, seguridad, perfiles, investigación y agencia humana pueden bloquear o devolver cualquier transición.

---

## 7. Relación entre SDD y arquitectura

Una spec responde principalmente:

```text
qué debe lograrse;
para quién;
bajo qué restricciones;
cómo se verificará.
```

La arquitectura responde:

```text
cómo se organiza el sistema para hacerlo posible;
qué dominios y componentes existen;
qué relaciones y fronteras se preservan.
```

El diseño funcional responde:

```text
cómo se comporta y se experimenta;
qué recorridos y vistas existen;
cómo interactúan humanos, IA y sistema.
```

La implementación responde:

```text
cómo se construye, prueba, despliega y opera.
```

Ninguna capa debe sustituir a otra.

---

## 8. Tratamiento de las versiones

Cada documento sustantivo debe conservar:

```text
id_estable
version_documental
estado
vigencia_desde
vigencia_hasta
deriva_de
sustituye_a
specs_fuente
decisiones_fuente
gate_aprobacion
ruta_historica_origen
```

La ruta canónica estable debe ser funcional. La historia por versión puede preservarse mediante metadatos, Git, índices y referencias desde `18_DOCUMENTACION_ACTIVA`.

---

## 9. Regla para continuidad

`18_DOCUMENTACION_ACTIVA/Continuidad/v0_6_0` y `v0_7_0` deben conservar:

- actas;
- bitácoras;
- planes de trabajo;
- kits;
- transferencias;
- changelogs;
- registros de sesión;
- referencias a los documentos sustantivos producidos.

No debería ser necesario navegar por una versión cerrada para encontrar la arquitectura vigente.

---

## 10. Recomendaciones para B4 y B6

### Para cerrar B4

1. aprobar la posición de SDD;
2. aprobar la distinción entre documento sustantivo y memoria de proceso;
3. identificar los documentos funcionales y arquitectónicos candidatos a ruta estable;
4. clasificar su vigencia;
5. declarar conflictos de autoridad pendientes.

### Para B6

1. simular el nuevo `02`;
2. producir tabla de ruta actual a ruta objetivo;
3. diseñar índices y referencias;
4. evaluar enlaces afectados;
5. definir estrategia de traslado reversible;
6. preservar historia en 18 sin duplicar autoridad;
7. no ejecutar movimientos dentro del PR de auditoría.

---

## 11. Dictamen provisional

AI StoryLab 1 ya posee gran parte de la arquitectura y el diseño necesarios para sostener su evolución. El problema no es ausencia, sino visibilidad estructural.

SDD debe permanecer como columna vertebral de especificación y gobierno. La arquitectura y el diseño deben ocupar un contenedor estable, descubrible y trazable. Las versiones deben contar la historia del documento, no esconder su función.

La auditoría está en posición de diseñar ese contenedor antes de que v0.8.0 convierta la dispersión documental en dispersión de implementación.

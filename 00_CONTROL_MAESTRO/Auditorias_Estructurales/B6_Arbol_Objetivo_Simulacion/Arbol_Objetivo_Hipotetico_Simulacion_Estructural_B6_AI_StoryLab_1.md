# Árbol Objetivo Hipotético y Simulación Estructural hacia v1.0.0
## AI StoryLab 1 · B6

**Estado:** Hipótesis estructural para revisión humana  
**Alcance:** Simulación documental, no ejecución  
**Fuente:** Hallazgos consolidados de B5  
**Restricción:** No autoriza creación, movimiento, renombre, eliminación ni apertura de v0.8.0

---

## 1. Propósito

B6 transforma los hallazgos de la auditoría en una estructura objetivo verificable sobre papel.

Su función es comprobar si AI StoryLab 1 puede organizar sus documentos vigentes según:

```text
función
autoridad
vigencia
trazabilidad
ciclo de vida
```

sin perder historia, romper decisiones ni confundir SDD, arquitectura, evaluación, continuidad y mantenimiento.

---

## 2. Principios de simulación

1. usar primero los cartapacios existentes;
2. ampliar o renombrar solo cuando la función actual sea insuficiente;
3. conservar una sola fuente canónica;
4. utilizar referencias en lugar de copias;
5. preservar la historia por versión;
6. mantener decisiones humanas identificables;
7. diseñar correcciones reversibles;
8. separar auditoría de corrección;
9. no abrir v0.8.0 mediante esta simulación;
10. no trasladar código ni snapshots técnicos históricos.

---

## 3. Árbol objetivo hipotético

```text
AI_StoryLab_1/
├── 00_CONTROL_MAESTRO/
│   ├── README.md
│   ├── Indices_Maestros/
│   ├── Mapas_Repositorio/
│   ├── Reglas_Colocacion_Documental/
│   ├── Tablas_Ubicacion_Documental/
│   ├── Spec_Driven_Development/
│   │   ├── README.md
│   │   ├── Constitucion/
│   │   ├── Gobernanza/
│   │   ├── Specs_Operativas/
│   │   ├── Indice_Vigencia/
│   │   └── Trazabilidad/
│   └── Auditorias_Estructurales/
│       ├── Metodo_Protocolos/
│       ├── Mapas_Trabajo/
│       └── Indice_Transferencia_a_15/
│
├── 01_FUNDAMENTO_FILOSOFICO/
│   ├── README.md
│   ├── Fundamento_Vigente/
│   ├── Principios/
│   └── Indice_Vigencia/
│
├── 02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/
│   ├── README.md
│   ├── Indice_Maestro/
│   ├── Arquitectura_Conceptual/
│   ├── Arquitectura_Funcional/
│   ├── Diseno_Funcional_UX/
│   │   ├── Modelos_Experiencia/
│   │   ├── Recorridos_Usuario/
│   │   ├── Interaccion_Humano_IA/
│   │   └── Vistas_y_Roles/
│   ├── Arquitectura_Tecnica_Referencia/
│   │   ├── Local_First/
│   │   ├── Modularidad/
│   │   ├── Integraciones/
│   │   └── Restricciones_Tecnicas/
│   ├── Modelo_Datos/
│   ├── Seguridad_Privacidad_por_Diseno/
│   ├── Decisiones_Arquitectonicas/
│   ├── Trazabilidad_Specs_Arquitectura_Diseno/
│   └── Versiones_y_Baselines/
│
├── 03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
│   ├── README.md
│   ├── Metodologias_Reutilizables/
│   └── Flujos_Colaboracion/
│
├── 04_GOBERNANZA_ETICA_Y_RIESGOS/
├── 05_COMPETENCIAS_Y_PERFILES/
├── 06_PASTILLAS_MODULARES/
├── 07_PLANTILLAS_Y_MODELOS/
│   └── Spec_Driven_Development/
├── 08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
├── 09_IA_AGENTES_Y_COPILOTOS/
├── 10_REPOSITORIOS_Y_FLUJO_TECNICO/
├── 11_MULTIMODALIDAD_Y_PUBLICACION/
├── 12_DISENO_INSTRUCCIONAL_UNIVERSAL/
├── 13_INVESTIGACION_Y_EVIDENCIA/
├── 14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
│
├── 15_EVALUACION_CALIDAD_Y_AUDITORIA/
│   ├── README.md
│   ├── Reportes_Auditoria/
│   ├── Gates_Checks_Evaluacion/
│   ├── Evidencias_Validacion/
│   ├── Dictamenes/
│   └── Indice_Resultados/
│
├── 16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
├── 17_INTERNACIONALIZACION_LOCALIZACION/
│
├── 18_DOCUMENTACION_ACTIVA/
│   ├── README.md
│   ├── Bitacoras/
│   ├── Cierres_Sesion/
│   ├── Continuidad/
│   │   ├── v0_6_0/
│   │   ├── v0_7_0/
│   │   └── Indice_Referencias_Canonicas/
│   ├── Registro_Decisiones/
│   ├── Transferencias_Simetricas/
│   └── Changelog/
│
├── 19_IMPLEMENTACION_Y_DESPLIEGUE/
│   ├── README.md
│   ├── Planes_Implementacion/
│   ├── Despliegue/
│   ├── Operacion/
│   └── Trazabilidad_Arquitectura/
│
├── 20_MANTENIMIENTO_Y_EVOLUCION/
│   ├── README.md
│   ├── Registro_Deuda/
│   ├── Planes_Mantenimiento/
│   ├── Backlog_Evolutivo/
│   └── Indice_Estados/
│
├── 21_WIKI_DOCUMENTACION_HUMANA/
│   ├── README.md
│   ├── Navegacion/
│   ├── Guias/
│   ├── Onboarding/
│   └── Referencias_Canonicas/
│
├── 99_ARCHIVO_HISTORICO/
│   ├── README.md
│   ├── Politica_Archivo/
│   ├── Paquetes_Cerrados/
│   ├── Documentos_Sustituidos/
│   └── Manifiestos/
│
└── .specify/
    ├── workspace técnico
    └── referencias a la autoridad SDD en 00
```

---

## 4. Decisión estructural principal: nuevo `02`

El cambio más importante de la simulación es ampliar `02_ARQUITECTURA_CONCEPTUAL` para que funcione como contenedor estable de la arquitectura y el diseño del ecosistema.

### Razón

El nombre actual solo cubre una parte de los productos existentes. La arquitectura funcional, el diseño UX y la arquitectura técnica quedaron dispersos entre SDD, continuidad e implementación.

### Función propuesta

`02` conservaría los documentos que describen cómo se organiza, funciona y se experimenta el sistema.

No conservaría:

- Constitución o specs SDD;
- bitácoras y cierres;
- gates y dictámenes;
- planes de implementación;
- deuda;
- principios generales de diseño instruccional.

---

## 5. Relación entre SDD y `02`

```text
00 / SDD
  define qué debe lograrse,
  bajo qué restricciones
  y cómo se verificará.

02
  define cómo se organiza,
  funciona y se experimenta
  el ecosistema.

15
  verifica conformidad.

19
  implementa lo aprobado.
```

`.specify` permanece como workspace técnico y no como autoridad paralela.

---

## 6. Separación `00`–`15`

### Permanece en `00`

- protocolos;
- método;
- reglas;
- mapas;
- índices;
- criterios de clasificación;
- Constitución y gobernanza SDD.

### Se consolida en `15`

- reportes finales;
- hallazgos aprobados;
- dictámenes;
- gates;
- checks;
- evidencias.

Durante la auditoría, los materiales de trabajo pueden permanecer en `00`. Al cierre, un índice debe indicar qué productos finales tienen autoridad en `15`.

---

## 7. Ciclo de vida de `18`

Cada documento de `18` debería registrar:

```text
id
fase
tipo
estado
vigencia
fuente_canónica_relacionada
criterio_de_cierre
destino_al_cierre
```

### Entra en `18`

- bitácoras;
- actas;
- kits;
- transferencias;
- cierres;
- changelogs;
- decisiones humanas.

### Sale de `18` como fuente sustantiva

- arquitectura;
- diseño funcional;
- specs;
- políticas;
- gates;
- deuda;
- reportes finales.

La historia permanece mediante referencias.

---

## 8. Modelo de deuda en `20`

Cada deuda tendría un identificador estable:

```text
DEUDA-AREA-####
```

Campos mínimos:

```text
id
tipo
origen
descripcion
impacto
prioridad
estado
responsable
documentos_afectados
decision_relacionada
gate_relacionado
fecha_apertura
fecha_cierre
```

Auditorías, bitácoras y gates solo referenciarían el ID.

---

## 9. Política operativa de `99`

Un documento entra en `99` únicamente cuando:

1. está formalmente cerrado o sustituido;
2. existe una fuente vigente o una razón documentada para su cierre;
3. se preserva su origen;
4. se registra el motivo;
5. se declara no vigente;
6. se prohíbe su edición ordinaria.

Cada paquete histórico tendría un manifiesto.

---

## 10. Secuencia hipotética de corrección

```text
Fase 1  aprobar reglas y autoridad
Fase 2  crear índices y metadatos
Fase 3  preparar contenedores vacíos
Fase 4  elevar arquitectura funcional y UX
Fase 5  elevar arquitectura técnica y decisiones
Fase 6  sustituir copias en 18 por referencias
Fase 7  formalizar 20 y 99
Fase 8  actualizar wiki, README e índices
Fase 9  verificar enlaces y autoridad
Fase 10 cerrar PR de corrección
```

Cada fase debe poder revertirse sin perder contenido.

---

## 11. Elementos que no deben moverse automáticamente

- Fundamento filosófico vigente;
- Constitución y gobernanza SDD;
- specs operativas rectoras;
- documentos canónicos de conocimiento común;
- bitácoras y cierres históricos;
- código;
- configuraciones;
- snapshots técnicos históricos;
- evidencias cuya cadena de custodia dependa de su ruta.

---

## 12. Pruebas de la simulación

Antes de ejecutar la estructura objetivo debe verificarse:

1. que cada documento sustantivo tenga una ruta destino;
2. que no existan dos fuentes activas;
3. que las decisiones sigan siendo trazables;
4. que SDD conserve precedencia;
5. que los gates apunten a documentos vigentes;
6. que la historia por versión permanezca navegable;
7. que la deuda tenga IDs únicos;
8. que la wiki no copie autoridad;
9. que los enlaces afectados estén inventariados;
10. que exista plan de reversión.

---

## 13. Dictamen provisional de B6

La estructura objetivo es viable con una condición: la reorganización debe tratarse como una migración documental gobernada, no como una mudanza masiva.

El nuevo `02` funciona como la pieza central que faltaba. SDD conserva gobierno y especificación; `02` recibe arquitectura y diseño; `15` valida; `19` implementa; `18` preserva continuidad; `20` mantiene deuda; `99` conserva historia.

B6 no ejecuta esta arquitectura. Demuestra que puede construirse de forma gradual, trazable y reversible.

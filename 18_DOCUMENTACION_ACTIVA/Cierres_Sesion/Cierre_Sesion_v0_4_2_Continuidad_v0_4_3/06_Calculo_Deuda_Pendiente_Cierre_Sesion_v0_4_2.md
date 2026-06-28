# Cálculo de Deuda Pendiente al Cierre de Sesión v0.4.2

**Proyecto:** AI StoryLab 1  
**Versión de cierre:** v0.4.2  
**Tipo:** Cálculo cualitativo de deuda documental, estratégica, pedagógica, técnica y de seguridad  
**Próxima fase:** v0.4.3  

---

## 1. Propósito

Este documento calcula la deuda pendiente al cierre de la fase v0.4.2.

La deuda no se entiende como falla. Se entiende como trabajo reconocido, localizado y listo para priorización. Una deuda registrada no es una sombra debajo de la alfombra, es una ficha en el tablero.

---

## 2. Escala de deuda

```text
0 = Sin deuda relevante
1 = Deuda menor
2 = Deuda moderada
3 = Deuda alta
4 = Deuda crítica
```

---

## 3. Deuda estratégica

**Nivel:** 1, baja

La visión hacia v1.0 quedó alineada mediante README, roadmap, propuesta, registro de decisiones, changelog, WIKI_SYNC, acta y manifest.

Pendiente:

- traducir visión en documentos operativos de v0.4.3;
- evitar dispersión por amplitud de públicos.

Mitigación:

- iniciar v0.4.3 con alcance controlado;
- crear plan por documentos cerrables.

---

## 4. Deuda filosófica

**Nivel:** 3, alta pero localizada

Existe documento semilla, pero falta formalización completa.

Pendiente:

- desarrollar fundamento filosófico canónico;
- relacionarlo con pedagogía crítica, investigación-creación, diseño universal y ética de IA;
- convertirlo en criterios para specs y rúbricas.

Mitigación:

- primer documento central de v0.4.3 debe ser Fundamento Filosófico formal.

---

## 5. Deuda pedagógica

**Nivel:** 3, alta pero esperada

El marco pedagógico todavía no está formalizado.

Pendiente:

- definir modelo pedagógico;
- definir invariantes del MVP v0.3;
- conectar misiones con competencias;
- definir criterios de progresión por público.

Mitigación:

- producir marco pedagógico en v0.4.3 antes de tocar código.

---

## 6. Deuda competencial

**Nivel:** 3, alta pero iniciada

Existe marco inicial de competencias y taxonomías, pero falta desarrollo formal.

Pendiente:

- competencias por público;
- niveles de desempeño;
- evidencias;
- relación con portafolio;
- rúbricas;
- specs.

Mitigación:

- producir documentos de competencias transversales, taxonomías y perfiles por público.

---

## 7. Deuda técnica

**Nivel:** 2, moderada

No hubo cambios funcionales en v0.4.2. La deuda técnica activa del MVP sigue existiendo, pero no aumentó en esta fase.

Pendiente:

- refactor futuro de arquitectura;
- separación dominio/UI/persistencia;
- esquemas versionados;
- pruebas de regresión;
- revisión de build warnings si aplican.

Mitigación:

- no abordar deuda técnica hasta después de v0.4.3 y v0.4.4;
- evitar refactor sin specs.

---

## 8. Deuda de seguridad

**Nivel:** 2, moderada

La política estratégica de seguridad quedó definida, pero faltan artefactos operativos.

Pendiente:

- threat model por módulo;
- plantillas de security review;
- políticas SECURITY.md y PRIVACY.md actualizadas;
- validación estricta de importaciones;
- controles de privacidad por diseño.

Mitigación:

- v0.4.4 debe producir plantillas y gates;
- v0.7.0 debe formalizar baseline de seguridad.

---

## 9. Deuda de privacidad

**Nivel:** 2, moderada

Local-first quedó reafirmado, pero aún falta convertirlo en política formal de privacidad.

Pendiente:

- PRIVACY.md;
- criterios de minimización;
- declaración de no backend/no analytics;
- protocolo de export/import;
- recomendaciones de alias y manejo de datos sensibles.

Mitigación:

- iniciar borrador de privacidad en v0.4.4 o v0.7.0;
- referenciar local-first en cada spec.

---

## 10. Deuda documental

**Nivel:** 1, baja

El paquete documental v0.4.2 está robusto.

Pendiente:

- registrar este compendio de cierre al inicio de la próxima sesión;
- mantener WIKI en sincronía;
- evitar duplicidad de documentos.

Mitigación:

- archivar compendio en cartapacio recomendado;
- crear manifest de cierre de sesión si se amplía el paquete.

---

## 11. Deuda de gobernanza

**Nivel:** 2, moderada

Existen decisiones estratégicas y gates iniciales, pero falta constitución formal SDD.

Pendiente:

- Constitución SDD;
- plantillas de specs;
- criterios de aceptación;
- reglas de entrada de features;
- reglas de cierre de versión.

Mitigación:

- v0.4.4 debe atender esta deuda de manera central.

---

## 12. Deuda de continuidad

**Nivel:** 1, baja

Este compendio reduce considerablemente la deuda de continuidad.

Pendiente:

- subir ZIP al inicio de la próxima sesión;
- registrar documentos;
- confirmar estado local.

Mitigación:

- usar prompt de activación incluido;
- comenzar con verificación Git.

---

## 13. Matriz resumen

| Área | Nivel | Estado |
|---|---:|---|
| Estratégica | 1 | alineada, requiere ejecución |
| Filosófica | 3 | semilla creada, falta formalización |
| Pedagógica | 3 | alta prioridad v0.4.3 |
| Competencial | 3 | semilla creada, falta desarrollo |
| Técnica | 2 | moderada, no tocar aún sin specs |
| Seguridad | 2 | principios definidos, faltan controles |
| Privacidad | 2 | local-first definido, falta política |
| Documental | 1 | robusta |
| Gobernanza | 2 | requiere v0.4.4 |
| Continuidad | 1 | controlada por este compendio |

---

## 14. Prioridad para próxima sesión

Orden recomendado:

```text
1. Registrar compendio de cierre
2. Crear rama v0.4.3
3. Formalizar alcance v0.4.3
4. Desarrollar fundamento filosófico
5. Desarrollar marco pedagógico
6. Desarrollar competencias y taxonomías
7. Preparar transición hacia SDD Constitution v0.4.4
```

---

## 15. Cierre

La deuda pendiente está identificada y no bloquea el cierre de v0.4.2.

La mayor deuda está donde debe estar en este momento: filosofía, pedagogía y competencias. Esa es precisamente la materia de v0.4.3.

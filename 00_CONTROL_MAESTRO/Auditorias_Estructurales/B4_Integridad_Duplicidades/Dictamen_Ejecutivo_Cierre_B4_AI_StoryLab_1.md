# Dictamen Ejecutivo de Cierre de B4
## Integridad documental, rutas canónicas, SDD, arquitectura y diseño

**Proyecto:** AI StoryLab 1  
**Estado:** Propuesta de cierre para aprobación humana  
**Bloque:** B4 · Integridad, duplicidades, versiones y rutas canónicas  
**Restricción:** No autoriza movimientos, renombres, fusiones, eliminaciones ni apertura de v0.8.0

---

## 1. Propósito

Este dictamen cierra B4 como bloque de decisión.

B4 comenzó examinando homonimias, versiones, residuos editoriales y cruces entre rutas. La auditoría demostró que el problema estructural principal no es la cantidad de archivos, sino la relación entre:

```text
función
ubicación
autoridad
vigencia
ciclo de vida
```

A partir de este cierre, la auditoría deja de ampliar el inventario y pasa a consolidar riesgos en B5 y simular la estructura objetivo en B6.

---

## 2. Dictamen general

La estructura raíz de AI StoryLab 1 posee una lógica viable para crecer hacia v1.0.0, pero necesita fronteras más explícitas entre gobierno, especificación, arquitectura, evaluación, memoria, mantenimiento e historia.

La corrección recomendada no es una reorganización indiscriminada. Es una especialización funcional de los cartapacios existentes.

---

## 3. Principios aprobables de B4

### 3.1 Una sola fuente canónica

Un documento sustantivo completo debe vivir en una sola ruta canónica.

Los demás cartapacios pueden referenciarlo, indexarlo, registrar su aprobación, documentar su historia o citar su identificador. No deben conservar copias competidoras con autoridad ambigua.

### 3.2 La función gobierna la ubicación

```text
la versión explica cuándo nació;
la función explica dónde vive;
la autoridad explica cuál gobierna;
la vigencia explica cuál se usa.
```

Las versiones son legítimas como metadatos, baselines, historia, paquetes de continuidad y evidencia de cierre. No deben ocultar la arquitectura, el diseño o los requisitos vigentes.

### 3.3 Documento sustantivo y memoria de proceso

Los documentos sustantivos incluyen specs, arquitectura, diseño funcional, modelos de datos, políticas, gates, reportes y deuda activa.

La memoria de proceso incluye bitácoras, kits, cierres, transferencias, changelogs y actas de sesión.

`18_DOCUMENTACION_ACTIVA` conserva la memoria del proceso. No debe ser la ruta principal de descubrimiento de documentos sustantivos.

---

## 4. Posición de SDD

SDD permanece como columna vertebral del desarrollo documental y técnico.

### Autoridad documental

`00_CONTROL_MAESTRO/Spec_Driven_Development/`

Custodia Constitución SDD, gobernanza, reglas del ciclo de vida, specs operativas, criterios de derivación y relación con gates y decisiones.

### Workspace técnico

`.specify/`

Opera como espacio de trabajo. No debe competir como segunda Constitución activa.

### Plantillas

`07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/`

Custodia formatos reutilizables, no instancias completadas.

### Competencia humana

`05_COMPETENCIAS_Y_PERFILES/`

Custodia la formación necesaria para participar responsablemente en SDD.

---

## 5. Posición de arquitectura y diseño

B4 identifica como hipótesis estructural principal la evolución de:

`02_ARQUITECTURA_CONCEPTUAL/`

hacia:

`02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/`

El nuevo contenedor se evaluará en B6 con subrutas para arquitectura conceptual, arquitectura funcional, diseño funcional y UX, arquitectura técnica de referencia, modelo de datos, seguridad y privacidad por diseño, decisiones arquitectónicas, trazabilidad y baselines.

Esta hipótesis reconoce que arquitectura y diseño son derivados trazables de SDD, pero requieren una ruta estable y descubrible.

---

## 6. División funcional transversal

```text
00 gobierna
15 asegura
18 recuerda y transfiere
20 mantiene y evoluciona
99 preserva
21 comunica a personas
```

- `00_CONTROL_MAESTRO`: reglas, protocolos, mapas, índices, convenciones y gobernanza SDD.
- `15_EVALUACION_CALIDAD_Y_AUDITORIA`: reportes finales, dictámenes, gates, checks y evidencias.
- `18_DOCUMENTACION_ACTIVA`: bitácoras, cierres, transferencias, changelogs y decisiones.
- `20_MANTENIMIENTO_Y_EVOLUCION`: deuda, mantenimiento y backlog evolutivo.
- `99_ARCHIVO_HISTORICO`: versiones cerradas o sustituidas bajo regla de no edición.
- `21_WIKI_DOCUMENTACION_HUMANA`: comunicación y orientación sin sustituir fuentes rectoras.

---

## 7. Hallazgos transferidos a B5

B5 deberá consolidar y priorizar:

1. protocolo rector aún marcado como borrador operativo;
2. concentración y heterogeneidad en `18_DOCUMENTACION_ACTIVA`;
3. documentos sustantivos ocultos bajo rutas de continuidad por versión;
4. frontera incompleta entre `00` y `15`;
5. deuda potencialmente dispersa fuera de `20`;
6. función histórica de `99` insuficientemente formalizada;
7. versiones sin mecanismo uniforme de vigencia;
8. relación entre `00_CONTROL_MAESTRO/Spec_Driven_Development/` y `.specify/`;
9. cartapacios raíz con función todavía genérica;
10. rutas competidoras o provisionales sin índice de autoridad.

---

## 8. Hipótesis transferidas a B6

B6 deberá simular, sin ejecutar:

1. evolución del cartapacio `02`;
2. separación funcional entre `00` y `15`;
3. ciclo de entrada, permanencia y salida de `18`;
4. centralización de deuda en `20`;
5. formalización de `99`;
6. índices de vigencia para SDD, arquitectura y diseño;
7. tabla `ruta actual → ruta objetivo`;
8. referencias que deben actualizarse;
9. estrategia reversible de traslado;
10. documentos que deben permanecer inmóviles.

---

## 9. Condición de cierre de B4

B4 puede considerarse materialmente cerrado cuando se aprueben humanamente estas cuatro decisiones:

```text
1. SDD conserva posición rectora y distribuida por función.
2. Arquitectura y diseño requieren un contenedor estable independiente de la versión de origen.
3. 18 conserva memoria de proceso, no autoridad sustantiva general.
4. B6 simulará cambios; este PR no los ejecutará.
```

---

## 10. Dictamen final

B4 ha cumplido su propósito.

La auditoría ya no necesita demostrar que existen rutas confusas. Ha identificado por qué son confusas, qué autoridad debe prevalecer y qué estructura debe evaluarse.

El repositorio está en una posición favorable: posee fundamentos, specs, arquitectura, diseño, gates, memoria y deuda. El trabajo restante consiste en convertir esas piezas en un sistema documental visible, navegable y sostenible para v1.0.0.

B4 se cierra como diagnóstico y arquitectura de decisiones. B5 consolidará riesgos. B6 diseñará el contenedor objetivo. B7 definirá el plan de corrección y el cierre formal de la auditoría.

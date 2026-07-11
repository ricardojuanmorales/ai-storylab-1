# Plan Metódico de Auditoría Estructural Integral
## AI StoryLab 1 · PR #25

**Estado de aprobación:** APROBADO por revisión humana explícita para integración en PR #25  
**Fecha de aprobación:** 2026-07-10  
**Autoridad de aprobación:** Usuario responsable de AI StoryLab 1  
**Condición:** Aprobado como documento rector de auditoría, sin autorizar movimientos, renombres, eliminaciones ni reorganización automática del repositorio.

---

**Estado:** Plan operativo preintervención  
**Base auditada:** `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Rama:** `docs/auditoria-estructural-integral-repositorio`  
**Dependencia:** `Protocolo_Auditoria_Estructural_Reproducible_AI_StoryLab_1.md`  
**Modalidad:** Documental, analítica y predecisional  
**Intervención estructural:** No autorizada

---

## 1. Objetivo general

Realizar una auditoría estructural completa, reproducible y trazable del repositorio AI StoryLab 1 para comprender su arquitectura real, evaluar la adecuación de sus cartapacios, identificar riesgos y preparar un plan de corrección separado sujeto a aprobación humana.

---

## 2. Preguntas rectoras

1. ¿La estructura actual representa fielmente la función de sus artefactos?
2. ¿Qué cartapacios cumplen una función clara y cuáles concentran funciones heterogéneas?
3. ¿Qué documentos son rectores, canónicos, operativos, históricos o auxiliares?
4. ¿Dónde existen duplicidades, solapamientos o referencias rotas?
5. ¿Qué parte de `18_DOCUMENTACION_ACTIVA` es realmente activa?
6. ¿Qué materiales deberían permanecer en continuidad, archivo, control maestro u otras zonas?
7. ¿Qué convenciones deben preservarse, corregirse o formalizarse?
8. ¿Cómo asegurar que futuras auditorías puedan repetirse sobre cualquier commit?
9. ¿Qué cambios estructurales serían seguros, reversibles y trazables?
10. ¿Qué decisiones requieren autoridad humana explícita?

---

## 3. Estrategia de trabajo

La auditoría se organizará en ocho bloques. Cada bloque producirá un entregable y un commit independiente.

```text
B0 Línea base
B1 Protocolo y plan
B2 Inventario y taxonomía
B3 Convenciones y concentración
B4 Integridad referencial y duplicidades
B5 Hallazgos y riesgos
B6 Árbol objetivo hipotético
B7 Plan de corrección y cierre de auditoría
```

---

## 4. Bloque 0 · Línea base

### Estado

Completado mediante:

`00_CONTROL_MAESTRO/Mapas_Repositorio/Tree_Repositorio_Compilado_Post_PR24_0beaf08_AI_StoryLab_1.md`

### Evidencia

- 820 archivos versionados;
- 349 cartapacios derivados;
- conteos por cartapacio raíz;
- distribución de `18_DOCUMENTACION_ACTIVA`;
- inventario completo de rutas;
- estado preauditoría verificable.

### Salida

Línea base histórica congelada.

---

## 5. Bloque 1 · Protocolo y plan

### Objetivo

Definir reglas, unidades de análisis, dimensiones, severidad, evidencias y secuencia reproducible.

### Entregables

1. `Protocolo_Auditoria_Estructural_Reproducible_AI_StoryLab_1.md`
2. `Plan_Metodico_Auditoria_Estructural_Integral_AI_StoryLab_1.md`

### Criterio de salida

El método debe poder ejecutarse nuevamente sobre otro commit sin depender de memoria conversacional.

---

## 6. Bloque 2 · Inventario y taxonomía

### Objetivo

Clasificar el repositorio completo sin mover archivos.

### Tareas

1. Crear inventario tabular por archivo.
2. Registrar ruta, extensión, profundidad y cartapacio raíz.
3. Asignar tipo documental provisional.
4. Registrar fase o versión relacionada.
5. Estimar autoridad y vigencia.
6. Marcar incertidumbres.
7. Identificar archivos no clasificables.

### Entregables

- `Inventario_Estructural_Clasificado_AI_StoryLab_1.csv`
- `Taxonomia_Documental_Aplicada_AI_StoryLab_1.md`
- `Registro_Incertidumbres_Clasificacion_AI_StoryLab_1.md`

### Criterio de salida

100 % de los archivos versionados enumerados; clasificación provisional documentada; cero movimientos.

---

## 7. Bloque 3 · Convenciones y concentración

### Objetivo

Evaluar la arquitectura de cartapacios y la concentración documental.

### Tareas

1. Documentar convenciones actuales.
2. Comparar nombres reales con convenciones declaradas.
3. Analizar cartapacios raíz por función.
4. Examinar `18_DOCUMENTACION_ACTIVA`.
5. Identificar cartapacios multifunción.
6. Medir profundidad y dispersión.
7. Detectar rutas históricas usadas como rutas operativas.
8. Identificar documentación activa ubicada fuera de zonas activas.

### Entregables

- `Auditoria_Convenciones_Cartapacios_AI_StoryLab_1.md`
- `Analisis_Concentracion_18_DOCUMENTACION_ACTIVA_AI_StoryLab_1.md`
- `Matriz_Funcion_Declarada_vs_Funcion_Real_Cartapacios.csv`

### Criterio de salida

Cada cartapacio raíz debe tener función declarada, función observada y nivel de coherencia.

---

## 8. Bloque 4 · Integridad referencial y duplicidades

### Objetivo

Determinar si la estructura conserva relaciones válidas y evita ambigüedades.

### Tareas

1. Extraer referencias internas.
2. Detectar enlaces a rutas inexistentes.
3. Detectar nombres antiguos o rutas sustituidas.
4. Buscar duplicados exactos por hash.
5. Buscar duplicados semánticos.
6. Identificar documentos huérfanos.
7. Identificar documentos rectores sin referencias entrantes.
8. Detectar cadenas circulares de dependencia.

### Entregables

- `Matriz_Referencias_Internas_AI_StoryLab_1.csv`
- `Registro_Referencias_Rotas_AI_StoryLab_1.md`
- `Registro_Duplicidades_y_Solapamientos_AI_StoryLab_1.md`
- `Mapa_Dependencias_Documentales_AI_StoryLab_1.md`

### Criterio de salida

Toda referencia rota debe tener evidencia y severidad; ninguna duplicidad se elimina automáticamente.

---

## 9. Bloque 5 · Hallazgos y riesgos

### Objetivo

Consolidar evidencia en hallazgos priorizados.

### Tareas

1. Asignar identificadores.
2. Registrar evidencia y criterio.
3. Clasificar severidad S0–S4.
4. Estimar impacto.
5. Registrar incertidumbre.
6. Proponer alternativas.
7. Identificar decisiones humanas necesarias.
8. Separar hallazgos de recomendaciones.

### Entregables

- `Matriz_Hallazgos_Auditoria_Estructural_AI_StoryLab_1.csv`
- `Mapa_Riesgos_Estructurales_AI_StoryLab_1.md`
- `Resumen_Ejecutivo_Hallazgos_Preliminares_AI_StoryLab_1.md`

### Criterio de salida

Cada recomendación debe rastrearse a uno o más hallazgos con evidencia.

---

## 10. Bloque 6 · Árbol objetivo hipotético

### Objetivo

Simular una arquitectura futura sin ejecutar cambios.

### Tareas

1. Definir principios del árbol objetivo.
2. Proponer funciones por cartapacio raíz.
3. Construir árbol objetivo.
4. Crear matriz origen–destino.
5. Identificar referencias afectadas.
6. Estimar complejidad y reversibilidad.
7. Separar cambios seguros de cambios que requieren gates.
8. Mantener alternativas múltiples cuando exista incertidumbre.

### Entregables

- `Tree_Repositorio_Objetivo_Hipotetico_AI_StoryLab_1.md`
- `Matriz_Origen_Destino_Reorganizacion_Propuesta.csv`
- `Analisis_Impacto_Reorganizacion_Estructural_AI_StoryLab_1.md`
- `Alternativas_Arquitectura_Documental_AI_StoryLab_1.md`

### Criterio de salida

Ningún movimiento ejecutado; todas las propuestas incluyen impacto y reversibilidad.

---

## 11. Bloque 7 · Plan de corrección y cierre

### Objetivo

Convertir recomendaciones aprobadas en una secuencia futura de PR independientes.

### Tareas

1. Registrar decisiones humanas.
2. Identificar correcciones aprobadas.
3. Agrupar cambios por riesgo y dependencia.
4. Diseñar PR pequeños y reversibles.
5. Definir validaciones antes y después.
6. Crear gates cuando corresponda.
7. Definir nuevo Tree de control.
8. Cerrar la auditoría sin ejecutar la reorganización completa en PR #25.

### Entregables

- `Registro_Decisiones_Humanas_Auditoria_Estructural.md`
- `Plan_Correccion_Estructural_por_PR_AI_StoryLab_1.md`
- `Checklist_Verificacion_Post_Correccion_AI_StoryLab_1.md`
- `Acta_Cierre_Auditoria_Estructural_AI_StoryLab_1.md`

### Criterio de salida

El PR #25 termina con evidencia, recomendaciones y plan. Las correcciones se ejecutan después en PR separados.

---

## 12. Secuencia recomendada de commits

```text
1. docs: registrar tree del repositorio post v0.7.0
2. docs: definir protocolo reproducible de auditoría estructural
3. docs: establecer plan metódico de auditoría integral
4. docs: clasificar inventario estructural del repositorio
5. docs: auditar convenciones y concentración documental
6. docs: registrar integridad referencial y duplicidades
7. docs: consolidar hallazgos y riesgos estructurales
8. docs: modelar árbol objetivo hipotético
9. docs: preparar plan de corrección estructural por PR
10. docs: cerrar auditoría estructural integral
```

Cada commit deberá ser comprensible por sí mismo.

---

## 13. Matriz de responsabilidades

| Actividad | Humano | Herramientas | IA |
|---|---:|---:|---:|
| Congelar línea base | Aprueba | Ejecuta | Verifica |
| Inventariar | Supervisa | Ejecuta | Sintetiza |
| Clasificar | Decide casos críticos | Apoya | Propone |
| Detectar duplicados | Revisa | Ejecuta | Interpreta |
| Asignar autoridad | Decide | Informa | Recomienda |
| Priorizar riesgos | Aprueba | Calcula | Argumenta |
| Diseñar árbol objetivo | Codiseña | Simula | Propone |
| Mover archivos | Autoriza | Ejecuta en PR futuro | No ejecuta |
| Cerrar auditoría | Aprueba | Verifica | Documenta |

---

## 14. Métricas de avance

```yaml
metricas:
  archivos_inventariados:
  archivos_clasificados:
  archivos_con_autoridad_indeterminada:
  referencias_evaluadas:
  referencias_rotas:
  duplicados_exactos:
  duplicados_semanticos:
  hallazgos_S0:
  hallazgos_S1:
  hallazgos_S2:
  hallazgos_S3:
  hallazgos_S4:
  decisiones_humanas_pendientes:
  movimientos_ejecutados: 0
```

---

## 15. Controles de calidad

Antes de cada commit:

```bash
git status --short --branch
git diff --check
git diff --cached --stat
```

Además:

- verificar rutas;
- comprobar codificación UTF-8;
- evitar archivos provisionales;
- registrar hashes cuando aplique;
- no mezclar observación y corrección;
- no cerrar deudas sin evidencia;
- no modificar el Tree base.

---

## 16. Condiciones de pausa

El trabajo se pausa cuando:

- cambia la línea base;
- aparece una contradicción entre documentos rectores;
- no puede determinarse autoridad;
- un hallazgo implica pérdida potencial de memoria;
- surge necesidad de mover archivos;
- se requiere abrir v0.8.0;
- aparece contenido fuera del alcance;
- falta aprobación humana.

---

## 17. Riesgos del proceso

| Riesgo | Control |
|---|---|
| Simplificación excesiva | Preservar valor histórico |
| Reorganización prematura | Simular antes de mover |
| Sesgo por recencia | Evaluar autoridad y función |
| Dependencia de IA | Decisión humana explícita |
| Hallazgos sin evidencia | Formato obligatorio |
| PR demasiado amplio | Commits por bloque |
| Pérdida de enlaces | Matriz de referencias |
| Confundir auditoría con corrección | PR separados |

---

## 18. Resultado esperado del PR #25

El PR #25 deberá cerrar con:

```text
línea base verificable;
protocolo reproducible;
inventario clasificado;
convenciones evaluadas;
concentración analizada;
referencias auditadas;
duplicidades documentadas;
hallazgos priorizados;
riesgos visibles;
árbol objetivo simulado;
decisiones humanas registradas;
plan de corrección separado.
```

No deberá cerrar con archivos movidos o eliminados.

---

## 19. Dictamen del plan

Este plan convierte la auditoría en una secuencia controlada de observación, clasificación, relación, interpretación, simulación y decisión.

Su propósito no es imponer orden desde afuera, sino descubrir la lógica interna del proyecto y hacerla suficientemente clara para humanos, máquinas e IA sin sacrificar memoria, contexto ni agencia.

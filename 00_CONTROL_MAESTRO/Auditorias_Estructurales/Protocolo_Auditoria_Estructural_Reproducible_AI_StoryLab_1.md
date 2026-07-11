# Protocolo de Auditoría Estructural Reproducible
## AI StoryLab 1

**Estado de aprobación:** APROBADO por revisión humana explícita para integración en PR #25  
**Fecha de aprobación:** 2026-07-10  
**Autoridad de aprobación:** Usuario responsable de AI StoryLab 1  
**Condición:** Aprobado como documento rector de auditoría, sin autorizar movimientos, renombres, eliminaciones ni reorganización automática del repositorio.

---

**Estado:** Protocolo rector de auditoría en PR #25  
**Naturaleza:** Estratégica, documental, sistémica, holística y transdisciplinaria  
**Punto de partida:** `main` posterior al merge de PR #24  
**Commit base:** `0beaf081a9b9cf061e09c65147a91f5ecd952450`  
**Relación:** Complementa el `Tree_Repositorio_Compilado_Post_PR24_0beaf08_AI_StoryLab_1.md`  
**Autorización actual:** Auditar, clasificar, documentar y recomendar  
**No autorizado:** Mover, renombrar, eliminar, fusionar o reclasificar archivos automáticamente

---

## 1. Propósito

Este protocolo establece un método repetible para auditar la estructura integral del repositorio AI StoryLab 1 sin confundir observación con intervención.

Su función es asegurar que toda auditoría futura:

- parta de una línea base verificable;
- pueda reproducirse sobre otro commit;
- distinga evidencia, interpretación y decisión;
- preserve la memoria histórica del proyecto;
- mantenga agencia humana sobre cambios estructurales;
- permita colaboración humano–máquina–IA sin delegar autoridad final;
- produzca recomendaciones trazables y reversibles.

---

## 2. Principio rector

```yaml
principio_rector:
  observar_antes_de_intervenir: true
  evidencia_antes_de_dictamen: true
  clasificar_antes_de_mover: true
  simular_antes_de_ejecutar: true
  autorizar_antes_de_modificar: true
  preservar_historia: true
  mantener_reversibilidad: true
```

La auditoría no busca simplificar por estética. Busca comprender si la estructura expresa correctamente la función, autoridad, vigencia, relación histórica y destino operativo de cada artefacto.

---

## 3. Alcance

La auditoría cubrirá todo el repositorio versionado, incluyendo:

- cartapacios raíz;
- subcartapacios;
- archivos documentales;
- código y configuraciones;
- activos de apoyo;
- archivos de control;
- bitácoras y continuidad;
- matrices, gates y decisiones;
- convenciones de nombres;
- relaciones entre versiones;
- referencias internas;
- rutas canónicas e históricas;
- elementos ignorados relevantes para higiene local.

La auditoría no se limita a `18_DOCUMENTACION_ACTIVA` ni a v0.7.0.

---

## 4. Límites obligatorios

Durante la fase de auditoría:

```text
no implementación;
no datos reales;
no despliegue;
no backend;
no autenticación;
no IA embebida;
no APIs IA;
no ranking;
no monitoreo continuo;
no galería pública;
no analíticas;
no investigación con datos;
no cierre de deudas sin evidencia;
no apertura automática de v0.8.0;
no movimientos estructurales automáticos.
```

---

## 5. Roles y autoridad

### 5.1 Humano responsable

El humano responsable:

- aprueba alcance;
- interpreta tensiones de propósito;
- valida autoridad documental;
- decide sobre rutas canónicas;
- autoriza movimientos, renombres o retiros;
- resuelve conflictos entre memoria histórica y claridad operativa.

### 5.2 Máquina y herramientas

Las herramientas automatizadas:

- generan inventarios;
- calculan métricas;
- detectan patrones;
- comparan rutas;
- verifican referencias;
- identifican duplicados potenciales;
- producen reportes reproducibles.

No deciden por sí mismas qué documento es canónico.

### 5.3 IA asistente

La IA:

- sintetiza evidencia;
- propone clasificaciones;
- identifica inconsistencias;
- formula hipótesis;
- construye matrices;
- redacta recomendaciones;
- explicita incertidumbre.

La IA no elimina, mueve ni reclasifica archivos sin autorización humana explícita.

---

## 6. Unidad mínima de auditoría

Cada archivo será tratado como una unidad de auditoría con los siguientes campos:

```yaml
unidad_auditoria:
  ruta_actual:
  nombre_archivo:
  extension:
  cartapacio_raiz:
  subcartapacio:
  version_declarada:
  fase_relacionada:
  tipo_documental:
  funcion_primaria:
  autoridad:
  vigencia:
  estado_editorial:
  canonicalidad:
  dependencias:
  referencias_entrantes:
  referencias_salientes:
  deuda_asociada:
  riesgo_estructural:
  recomendacion_preliminar:
  evidencia:
  nivel_confianza:
  decision_humana:
```

---

## 7. Dimensiones de evaluación

Cada unidad se evaluará en diez dimensiones:

1. **Identidad:** el nombre expresa contenido, versión y función.
2. **Ubicación:** la ruta corresponde con la función real.
3. **Autoridad:** rector, canónico, derivado, operativo, histórico o auxiliar.
4. **Vigencia:** activo, sustituido, cerrado, archivado, obsoleto o pendiente.
5. **Trazabilidad:** relación con decisiones, gates, versiones, deudas y entregables.
6. **Redundancia:** duplicidad, solapamiento o contradicción.
7. **Integridad referencial:** enlaces y referencias internas válidos.
8. **Convención:** cumplimiento de nombres, versiones y cartapacios.
9. **Riesgo sistémico:** potencial de inducir decisiones incorrectas.
10. **Valor histórico:** necesidad de conservación aunque deje de ser operativo.

---

## 8. Taxonomía documental provisional

```text
Rector
Canónico
Gobernanza
Decisión
Gate
Mapa
Matriz
Protocolo
Plan
Especificación
Arquitectura
Modelo
Guía
Bitácora
Continuidad
Auditoría
Registro de deuda
Referencia
Evidencia
Entregable
Histórico
Archivo
Auxiliar
Código
Configuración
Activo
```

Un archivo puede tener una categoría primaria y una secundaria, pero debe conservar una sola función primaria.

---

## 9. Estados de vigencia

```yaml
estados_vigencia:
  - activo
  - vigente_con_deuda
  - cerrado
  - sustituido
  - histórico
  - archivado
  - obsoleto_pendiente_de_decisión
  - borrador_no_canónico
  - indeterminado
```

Ningún estado será inferido únicamente por el nombre del archivo.

---

## 10. Niveles de autoridad

```yaml
niveles_autoridad:
  A0: desconocida
  A1: auxiliar
  A2: operativa
  A3: canónica_de_fase
  A4: rectora_transversal
  A5: decisión_humana_formal
```

Cuando dos documentos entren en conflicto, la tensión se registrará y se escalará a revisión humana.

---

## 11. Severidad de hallazgos

```yaml
severidad:
  S0_observacion:
    impacto: informativo
  S1_menor:
    impacto: claridad_o_consistencia_local
  S2_moderado:
    impacto: navegación_o_trazabilidad
  S3_alto:
    impacto: autoridad_canonicalidad_o_decision
  S4_critico:
    impacto: pérdida_de_memoria_confusión_sistémica_o_riesgo_operativo
```

La severidad no autoriza corrección automática.

---

## 12. Tipos de hallazgo

```text
ruta no canónica;
concentración documental;
duplicidad exacta;
duplicidad semántica;
solapamiento funcional;
archivo huérfano;
referencia rota;
versión inconsistente;
nombre provisional;
estado editorial residual;
autoridad ambigua;
vigencia ambigua;
cartapacio multifunción;
fragmentación excesiva;
documento rector enterrado;
histórico mezclado con activo;
artefacto operativo en continuidad;
continuidad usada como archivo permanente;
convención incumplida;
dependencia circular;
riesgo de pérdida de trazabilidad.
```

---

## 13. Fases del protocolo

### Fase A. Congelación de línea base

1. Confirmar rama y commit.
2. Verificar worktree limpio.
3. Capturar `git ls-tree`.
4. Registrar fecha, zona horaria y SHA.
5. Generar hash de los artefactos de auditoría.

### Fase B. Inventario estructural

1. Enumerar archivos y cartapacios.
2. Contar por raíz, extensión y profundidad.
3. Identificar rutas excepcionalmente profundas.
4. Detectar concentraciones.
5. Separar contenido versionado, ignorado y no rastreado.

### Fase C. Clasificación semántica

1. Asignar tipo documental.
2. Identificar función primaria.
3. Estimar autoridad.
4. Determinar vigencia provisional.
5. Registrar incertidumbre.

### Fase D. Integridad y relaciones

1. Revisar referencias internas.
2. Detectar archivos huérfanos.
3. Construir relaciones entre decisiones, gates y versiones.
4. Identificar contradicciones y rutas sustituidas.

### Fase E. Hallazgos

1. Registrar hallazgo.
2. Adjuntar evidencia.
3. Asignar severidad.
4. Evaluar impacto.
5. Proponer opciones, no órdenes.

### Fase F. Simulación de reorganización

1. Construir árbol objetivo hipotético.
2. Mapear origen y destino.
3. Evaluar enlaces afectados.
4. Identificar dependencias.
5. Estimar reversibilidad.
6. No ejecutar movimientos.

### Fase G. Decisión humana

1. Revisar hallazgos.
2. Aprobar, modificar o rechazar recomendaciones.
3. Crear gates de corrección.
4. Separar correcciones en PR independientes.

### Fase H. Verificación posterior

1. Regenerar árbol.
2. Comparar antes y después.
3. Verificar referencias.
4. Confirmar ausencia de pérdidas.
5. Registrar nueva línea base.

---

## 14. Evidencia mínima por hallazgo

```yaml
hallazgo:
  id:
  titulo:
  tipo:
  severidad:
  rutas_afectadas:
  evidencia_observable:
  criterio_aplicado:
  impacto:
  incertidumbre:
  alternativas:
  recomendacion:
  no_accion:
  decision_requerida:
```

No se aceptarán hallazgos basados solamente en preferencia estética.

---

## 15. Convención de identificadores

```text
AUD-STR-###   Hallazgo estructural
AUD-NAM-###   Nombre o convención
AUD-REF-###   Referencia o enlace
AUD-DUP-###   Duplicidad
AUD-AUT-###   Autoridad o canonicalidad
AUD-VIG-###   Vigencia
AUD-ARC-###   Archivo e histórico
AUD-RSK-###   Riesgo sistémico
```

Los identificadores no se reutilizarán.

---

## 16. Artefactos obligatorios

Toda auditoría completa deberá producir:

1. `Tree_Repositorio` de línea base.
2. Protocolo usado.
3. Plan de auditoría.
4. Inventario estructurado.
5. Taxonomía documental aplicada.
6. Matriz de hallazgos.
7. Mapa de riesgos.
8. Árbol objetivo hipotético.
9. Matriz origen–destino.
10. Registro de decisiones humanas.
11. Plan de corrección por PR.
12. Tree posterior a correcciones.
13. Informe comparativo antes/después.

---

## 17. Reproducibilidad técnica mínima

```bash
git status --short --branch
git rev-parse HEAD
git ls-tree -r --name-only HEAD | LC_ALL=C sort
git ls-files --others --ignored --exclude-standard | LC_ALL=C sort
find . -type f | LC_ALL=C sort
```

Toda ejecución debe registrar:

- sistema operativo;
- versión de Git;
- commit auditado;
- fecha y hora;
- zona horaria;
- exclusiones aplicadas;
- scripts utilizados;
- hash de salidas.

---

## 18. Control de sesgos

```text
sesgo hacia estructuras nuevas;
sesgo contra documentación extensa;
sesgo por nombres familiares;
sesgo por recencia;
sesgo de automatización;
sesgo de simplificación;
sesgo de asumir que activo equivale a importante;
sesgo de asumir que histórico equivale a prescindible.
```

---

## 19. Condiciones de pausa

La auditoría se detendrá si:

- no puede determinarse la autoridad de un documento clave;
- dos documentos rectores se contradicen;
- existe riesgo de pérdida de trazabilidad;
- una recomendación implica cambios masivos no reversibles;
- falta autorización humana;
- la línea base cambia durante la auditoría;
- aparecen datos reales o materiales fuera del alcance autorizado.

---

## 20. Criterio de cierre de auditoría

```yaml
cierre_auditoria:
  inventario_completo: true
  clasificación_documentada: true
  hallazgos_con_evidencia: true
  riesgos_priorizados: true
  incertidumbres_visibles: true
  arbol_objetivo_simulado: true
  decisiones_humanas_registradas: true
  plan_correccion_separado: true
  movimientos_automaticos: false
```

---

## 21. Dictamen

Este protocolo autoriza examinar el repositorio con profundidad, pero no autoriza modificar su arquitectura.

La auditoría debe conservar memoria, hacer visible la autoridad, reducir ambigüedad y preparar decisiones humanas informadas.

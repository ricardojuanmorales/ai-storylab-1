# Protocolo de Trabajo v3.3 de AI StoryLab 1

## Estado propuesto

```
protocol_version: 3.3
status: APROBADO_PARA_USO
human_approval: EXPLICIT
approval_date: 2026-07-28
effective_from: containing_commit_of_V10_Z
date: 2026-07-28
project: AI StoryLab 1
predecessor: Protocolo_Trabajo_v3_2_AI_StoryLab_1.md
source_of_learning:
  - ciclo completo de preparación y publicación de v1.0.0
  - PR 65
  - verificación post-merge
  - tag anotado
  - GitHub Release y assets
  - GitHub Pages y smoke público
nature: protocolo_vivo_de_coordinacion_humano_IA_maquina_documentacion
primary_optimization: movimiento_minimo_suficiente_con_evidencia
operational_mode: concertado_reanudable_por_capas
human_authority: preserved
blind_rerun: prohibited
automatic_publication: prohibited
```

## 1. Declaración de propósito

El Protocolo de Trabajo v3.3 organiza la colaboración longitudinal entre persona, inteligencia artificial, máquina y sistema documental en AI StoryLab 1.

v3.3 conserva la disciplina de v3.2 y añade un aprendizaje decisivo: un proceso no es seguro solo porque posea gates. También debe distinguir con precisión qué capa ya terminó, qué capa falló, qué identidad está siendo verificada y qué única escritura continúa autorizada.

La fórmula central evoluciona de “un hito, un movimiento” a:

```
una intención humana
→ un estado exacto
→ una unidad mínima de acción
→ un operador restringido
→ una escritura autorizada
→ una verificación independiente de esa escritura
→ una pausa obligatoria
→ memoria documental
```

La eficiencia no consiste en omitir controles. Consiste en colocar cada control en el punto donde evita una repetición, una ambigüedad o una expansión accidental.

## 2. Lo que v3.3 conserva de v3.2

v3.3 ratifica:

- agencia humana como autoridad superior;
- evidencia antes de afirmación;
- estados cerrados monotónicos;
- un operador principal por unidad de acción;
- reanudabilidad por diseño;
- allowlists de archivos y cambios;
- clasificación de fallos;
- preflight de permisos y entorno;
- reutilización de evidencia cuando el head no cambia;
- comentarios preparados después de la evidencia final;
- publicación manual de comentarios;
- Ready, merge, tags, Releases y deployments sujetos a autorizaciones separadas;
- cierre de sesión con continuidad y autoevaluación;
- mínima ceremonia útil.

v3.3 no reescribe la verdad histórica de v3.2. La extiende con controles nacidos del ciclo de publicación estable.

## 3. Aprendizajes de la ruta v1.0.0

### 3.1 La publicación es una cadena de identidades, no un botón

Durante v1.0.0 coexistieron identidades relacionadas pero no intercambiables:

```
fuente estable
→ evidencia sobre la fuente
→ artefacto binario
→ hash del artefacto
→ merge estable
→ tag anotado
→ GitHub Release
→ assets públicos
→ deployment web
→ superficie pública verificada
```

Regla v3.3:

> Cada identidad debe nombrarse, verificarse y preservarse por separado.

No se reconstruye un artefacto ya auditado para que coincida artificialmente con un commit documental posterior. No se confunde un tag con una Release. No se confunde una Release con un deployment. No se confunde un HTTP 200 con una aplicación funcional.

### 3.2 Una autorización humana debe corresponder a una unidad de escritura

La publicación reveló que el modelo más claro es:

```
una autorización humana
→ un operador estricto
→ una acción de escritura
→ verificación exacta
→ pausa
```

Ejemplos de unidades separadas:

- marcar Ready for Review;
- ejecutar merge commit;
- crear tag anotado;
- crear GitHub Release y publicar assets exactos;
- configurar y desplegar GitHub Pages.

La separación no es ceremonial. Cada acción cambia una superficie distinta y posee condiciones de rollback, evidencia y consecuencias diferentes.

### 3.3 La aprobación dentro de la terminal fortalece el registro

La frase exacta introducida manualmente dentro del operador:

- confirma presencia humana en el punto de escritura;
- reduce ambigüedad sobre el alcance;
- registra la autorización en el log;
- permite que el preflight ocurra antes de la decisión final;
- evita que una autorización antigua se aplique a un estado nuevo.

La frase debe incluir, cuando corresponda:

- acción;
- objeto;
- commit o head exacto;
- límites;
- pausa.

### 3.4 La reanudación debe ocurrir por capa

Un operador puede haber completado commit, push, CI, tag, Release, asset, configuración o deployment, y fallar después en la generación del resumen, descarga de evidencia, smoke test o informe local.

Regla v3.3:

> Nunca se repite una escritura completada para reparar una capa posterior.

Antes de reejecutar se determina la frontera exacta:

```
antes_de_escritura
después_de_escritura_sin_verificación
escritura_verificada_sin_informe
acción_completa
```

Si la escritura ya ocurrió, la recuperación es un verificador o finalizador, no otro escritor ciego.

### 3.5 El preflight debe corresponder al comportamiento real del sistema

Se observaron casos donde:

- un workflow tenía filtros de rutas y no se ejecutaba para cambios documentales;
- un conector solo exponía ciertos tipos de runs;
- una herramienta asumida no estaba disponible en macOS;
- campos de API podían ser nulos;
- un archivo vacío como `.nojekyll` era válido;
- el estado Git incluía combinaciones de modificados, staged, untracked y renames.

Regla v3.3:

> El preflight se diseña desde los triggers, contratos y estados reales, no desde una imagen ideal del entorno.

### 3.6 La ausencia de evidencia no es contradicción

La ausencia debe clasificarse como:

```
evidence_absent
evidence_pending
tool_visibility_limit
evidence_not_applicable
```

No debe convertirse automáticamente en `FAIL`, ni en `PASS`.

### 3.7 El entorno se calibra, pero el producto se vuelve a probar

Una diferencia de puerto, shell, permisos, runtime o disponibilidad local puede ser ambiental.

Regla:

1. clasificar;
2. corregir o adaptar el entorno;
3. volver a ejecutar la prueba;
4. declarar resultado solo después de la nueva evidencia.

Nunca se convierte un test fallido en PASS mediante explicación.

### 3.8 La documentación es una capa operativa

En v1.0.0, los documentos actuaron como:

- memoria de autorización;
- contrato de alcance;
- mapa de identidades;
- registro de evidencia;
- control de claims;
- mecanismo de continuidad;
- protección contra repetición;
- interfaz entre sesiones.

La documentación debe mantenerse sincronizada con el estado público. Un README obsoleto después de una Release correcta es una falla documental real, aunque no sea un defecto funcional.

## 4. Principios rectores v3.3

### 4.1 Agencia humana preservada

La persona conserva autoridad sobre propósito, valores, alcance, prioridades, apertura, reparación, aceptación, reservas, cierre, publicación, merge, tag, Release, deployment e inicio de la siguiente fase.

La máquina verifica. La IA estructura e interpreta. La documentación conserva. Ninguna de estas capas sustituye la decisión humana.

### 4.2 Movimiento mínimo suficiente

Toda operación debe responder:

1. ¿Qué resultado exacto falta?
2. ¿Cuál es la menor escritura que puede producirlo?
3. ¿Qué evidencia demuestra que ocurrió?
4. ¿Qué debe permanecer bloqueado?
5. ¿Dónde debe detenerse?

No se crea un nuevo hito para cada archivo, deuda o validación. No se crea un commit ceremonial cuando una publicación manual o una evidencia externa basta.

### 4.3 Lectura antes de escritura

Antes de toda escritura remota:

```
leer estado
→ comparar con autorización
→ verificar precondiciones
→ solicitar aprobación terminal
→ escribir una vez
```

### 4.4 Claims disciplinados

Toda afirmación se clasifica como:

- hecho verificado;
- inferencia;
- propuesta;
- decisión humana;
- limitación;
- deuda;
- resultado no demostrado.

Se prohíbe afirmar independencia externa cuando la revisión fue interna o procedimental, compatibilidad universal sin cobertura, efectividad educativa poblacional sin investigación, seguridad absoluta, accesibilidad certificada sin certificación, identidad binaria sin hash o deployment exitoso solo por recibir HTTP 200.

### 4.5 Seguridad y privacidad por defecto

```
no_autorizado → bloqueado
dato_no_justificado → no_recolectado
integración_no_especificada → ausente
publicación_no_aprobada → no_ejecutada
```

### 4.6 Recuperación no destructiva

Todo operador de riesgo medio o alto debe declarar estado previo, cambio previsto, condiciones de éxito, rollback o contención, estado preservado si falla y acciones que no deben repetirse.

### 4.7 Reflexión proporcional

La reflexión profunda se reserva para revisión del protocolo, gates globales, publicaciones estables, contradicciones estratégicas, secuencias de errores y transición entre grandes fases.

## 5. Arquitectura de autoridad

### 5.1 Persona

La persona orienta el sentido, autoriza cambios, evalúa tensiones, acepta reservas, publica decisiones, abre y cierra gates, y decide cuándo detenerse y celebrar.

### 5.2 Inteligencia artificial

La IA recupera continuidad, separa hechos, inferencias y decisiones, reduce complejidad, diseña operadores, crea controles preventivos, interpreta resultados, redacta documentos, prepara comentarios, reconoce errores y evita repetir preguntas respondidas.

La IA no inventa autorización, amplía alcance por conveniencia, repite escrituras completadas, oculta fallos detrás de un operador nuevo, publica automáticamente comentarios bajo revisión humana ni convierte deuda aceptada en trabajo autorizado.

### 5.3 Máquina

La máquina inspecciona estado, ejecuta comandos, compara árboles, calcula hashes, corre pruebas, consulta APIs, publica la acción autorizada, verifica resultados y registra evidencia.

### 5.4 Sistema documental

El sistema documental conserva propósito, autorización, alcance, identidades, heads, commits, pruebas, CI, artefactos, hashes, fallos, recuperaciones, decisiones, deuda, reservas, continuidad y retrospectiva.

## 6. Taxonomía de unidades de acción

| Nivel | Tipo | Ejemplos | Autorización |
|---|---|---|---|
| L0 | lectura | inspección, diff, consulta CI | autorización general del hito |
| L1 | escritura local reversible | generar informe, preparar archivos | explícita en alcance |
| L2 | escritura Git reversible | commit en rama, push de rama | autorización específica |
| L3 | transición de gobernanza | Ready, merge, gate | autorización humana separada |
| L4 | identidad pública | tag, Release, assets | autorización humana separada |
| L5 | superficie pública | configuración Pages, deployment | autorización humana separada y rollback |
| L6 | datos o personas | datos reales, investigación, evaluación | protocolo especializado adicional |

Una autorización de nivel superior no debe inferirse de una autorización anterior.

## 7. Ciclo concertado de una unidad

```
ORIENTACION
→ SNAPSHOT_DE_SOLO_LECTURA
→ ALCANCE_Y_FRONTERAS
→ PREFLIGHT
→ APROBACION_TERMINAL
→ ESCRITURA_UNICA
→ VERIFICACION
→ EVIDENCIA
→ PAUSA
→ COMENTARIO_O_TRANSFERENCIA
```

### 7.1 Orientación

Se revisan como un sistema protocolo vigente, bitácora de evolución, documentación activa, transferencia simétrica, bitácora longitudinal, estado remoto y objetivo humano.

### 7.2 Snapshot de solo lectura

Debe fijar:

```
repository
branch
base
head
PR
worktree
staging
untracked
renames
tag
Release
Pages
CI
artifact
authorization
```

### 7.3 Alcance y fronteras

Toda unidad declara:

```
action:
target:
expected_state:
allowed_writes:
forbidden_writes:
evidence:
rollback:
mandatory_pause:
```

### 7.4 Aprobación terminal

La aprobación ocurre inmediatamente antes de la escritura y después del preflight.

### 7.5 Verificación

La verificación consulta el estado producido, no asume que el comando exitoso equivale a resultado correcto.

### 7.6 Pausa

Después de una acción de nivel L3 a L5, el operador se detiene obligatoriamente.

## 8. Contrato del operador v3.3

Todo operador principal debe ser reanudable, idempotente cuando sea posible, consciente de escrituras ya completadas, namespaced, identificado por revisión única, validado con `bash -n`, compatible con el entorno declarado, explícito sobre heads y objetos, selectivo en staging, seguro ante valores nulos, estricto con line endings, capaz de producir salida compacta, clasificar el punto de fallo y detenerse.

### 8.1 Compatibilidad de entorno

En macOS:

- no depender de `seq` sin verificarlo;
- no asumir GNU `sed`, `date` o `stat`;
- declarar herramientas requeridas;
- preferir Python para lógica estructurada y JSON;
- usar LF para archivos textuales gobernados.

### 8.2 Estado Git completo

El operador modela modified, staged, untracked, deleted, renamed, copied, conflictos, commits locales no publicados, remoto adelantado y remoto divergente.

Las allowlists deben comparar nombres y estados. Para renames se usa detección consciente de renombrado.

### 8.3 Triggers y CI

Antes de esperar una CI se verifica evento, branch, paths, filtros, permisos, dispatch disponible, head asociado, jobs esperados y condiciones de skip.

Un job `skipped` puede ser el resultado correcto cuando su condición de seguridad no fue autorizada.

### 8.4 Archivos vacíos válidos

Un archivo vacío puede ser una marca contractual válida. La validación considera propósito, no solo tamaño.

### 8.5 Campos API nulos

Toda consulta remota acepta campos opcionales o nulos según contrato.

### 8.6 Nombres únicos de operadores

Cada revisión que cambie bytes usa nombre semántico, revisión y fecha. El checksum siempre corresponde al archivo entregado.

## 9. Máquina de estados v3.3

```
UNTOUCHED
ORIENTED
READ_ONLY_SNAPSHOT_COMPLETE
PREFLIGHT_PASSED
HUMAN_TERMINAL_GATE
WRITE_STARTED
WRITE_REPORTED
WRITE_VERIFIED
EVIDENCE_RECORDED
COMMENT_READY
PAUSED
COMPLETE
```

Estados de recuperación:

```
FAILED_BEFORE_WRITE
WRITE_MAY_HAVE_OCCURRED
WRITE_CONFIRMED_VERIFICATION_PENDING
WRITE_VERIFIED_REPORT_PENDING
ROLLBACK_REQUIRED
ROLLBACK_COMPLETED
MANUAL_INSPECTION_REQUIRED
```

Regla de oro:

> Si el fallo ocurre después de `WRITE_STARTED`, se inspecciona el estado remoto antes de cualquier reejecución.

## 10. Clasificación de fallos

| Clase | Significado | Acción |
|---|---|---|
| `PRODUCT_FAILURE` | código o comportamiento no cumple | reparar con autorización |
| `ENVIRONMENT_FAILURE` | herramienta, runtime, puerto o shell | calibrar y volver a probar |
| `AUTHORIZATION_FAILURE` | permiso o scope insuficiente | preservar estado y resolver acceso |
| `DOCUMENTARY_FAILURE` | formato, enlace, placeholder, deriva | corregir capa documental |
| `REMOTE_VERIFICATION_FAILURE` | CI o API no confirma | inspeccionar run o estado exacto |
| `EVIDENCE_VISIBILITY_LIMIT` | herramienta no expone evidencia | usar canal autorizado alterno |
| `HUMAN_DECISION_PENDING` | falta decisión | pausar, no es fallo |
| `WRITE_COMPLETED_REPORT_FAILURE` | escritura ocurrió, informe falló | verificador de solo lectura |
| `PUBLIC_SMOKE_FAILURE` | superficie pública no cumple | rollback o contención |
| `CLAIM_MISMATCH` | documentación excede evidencia | corregir claim, no producto por inferencia |

## 11. Secuencia de publicación gobernada

```
POST_READY_REVIEW
→ MERGE
→ POST_MERGE_VERIFICATION
→ ANNOTATED_TAG
→ RELEASE_AND_ASSETS
→ PAGES_DEPLOYMENT
→ PUBLIC_SMOKE
→ DOCUMENTARY_CLOSE
```

Cada flecha representa una frontera humana.

### 11.1 Merge

Verifica PR, head exacto, base exacta, CI, reviews, padres del merge y nuevo head de `main`.

### 11.2 Tag

Verifica tag anotado, objeto del tag, commit target y ausencia de Release automática.

### 11.3 Release

Verifica tag, título, draft y prerelease, assets exactos, tamaño, descarga y hash público.

### 11.4 Pages

Verifica configuración previa, workflow, deployment, recursos bajo subpath, rutas históricas, contenido esperado y rollback.

## 12. Evidencia y disciplina de afirmaciones

Toda evidencia debe registrar:

```
what:
where:
head_or_object:
tool:
time:
result:
limitations:
```

Se distingue commit fuente, commit que contiene evidencia, commit de atestación, merge commit, tag object, artifact hash, Release, deployment run y URL pública.

La evidencia no debe referirse circularmente al hash del mismo commit que todavía no existe.

## 13. Comentarios y comunicación

El comentario extendido se redacta después de resultado final, verificación, evidencia, límites y decisiones humanas.

No se crea un commit solo para duplicar un comentario que puede publicarse manualmente.

Durante fallos, la IA comunica qué ocurrió, qué no ocurrió, si hubo escritura, qué estado quedó preservado, qué capa falló, qué verificación debe ocurrir y dónde se detiene.

## 14. Deuda y próximos ciclos

La deuda aceptada permanece visible, no bloquea por defecto, no es trabajo autorizado, no se convierte en una lista de mini-hitos, requiere reevaluación humana y se agrupa por valor pedagógico, riesgo y dependencia.

Para el primer ciclo posterior a v1.0.0 se recomienda organizarla en:

1. lenguaje y orientación;
2. riqueza lúdica;
3. prompts y apoyo contextual;
4. competencias y evaluación formativa;
5. guías diferenciadas;
6. superficies para docentes e investigadores.

## 15. Cierre de sesión v3.3

El cierre significativo produce estado exacto, decisiones, evidencia, deuda, riesgos, fallos y recuperaciones, autoevaluación de la IA, matriz de continuidad, próximo gate bloqueado y retrospectiva proporcional.

No todo cierre requiere commit. La necesidad del commit se decide según si cambia la verdad canónica del repositorio.

## 16. Controles nuevos v3.3

| Código | Riesgo | Control |
|---|---|---|
| `PROTO-ACTION-028` | autorización amplia ejecuta varias escrituras | una unidad de escritura por autorización |
| `PROTO-LAYER-029` | repetir una escritura por fallo posterior | recuperación por capa |
| `PROTO-IDENTITY-030` | confundir fuente, artefacto, tag y Release | mapa explícito de identidades |
| `PROTO-TRIGGER-031` | esperar CI que no puede dispararse | preflight de triggers |
| `PROTO-PORTABLE-032` | operador falla por comando no portable | contrato de compatibilidad |
| `PROTO-NULL-033` | API nula rompe resumen | manejo de campos opcionales |
| `PROTO-GITSTATE-034` | allowlist omite staged, untracked o rename | modelo Git completo |
| `PROTO-LINEEND-035` | CRLF rompe evidencia o comparación | normalización LF |
| `PROTO-NAME-036` | checksum corresponde a revisión distinta | nombres únicos por bytes |
| `PROTO-EVIDENCE-037` | ausencia de visibilidad se interpreta como fallo | taxonomía de ausencia |
| `PROTO-CLAIM-038` | afirmación excede evidencia | clasificación obligatoria de claims |
| `PROTO-ROLLBACK-039` | deployment fallido deja superficie degradada | rollback protector |
| `PROTO-SUMMARY-040` | fallo de informe provoca reescritura | verificador post-escritura |
| `PROTO-NONCEREMONIAL-041` | commits o gates sin valor operativo | prueba de necesidad |
| `PROTO-REFLECTION-042` | sesión aprende pero no transfiere | retrospectiva y control nuevo |
| `PROTO-PUBLIC-043` | HTTP 200 se interpreta como aplicación válida | smoke semántico y de assets |

## 17. Autoevaluación obligatoria de la IA

```
AI_self_review:
  preventable_errors:
  successful_patterns:
  root_causes:
  human_feedback:
  tool_limitations:
  writes_completed:
  layers_failed:
  controls_added:
  controls_retired:
  claims_corrected:
  unresolved_tensions:
  protocol_recommendation:
```

## 18. Transición desde v3.2

```
v3_2:
  status: SUPERSEDED_WITH_PRESERVED_HISTORY
  contribution:
    - un_hito_un_movimiento
    - operador_reanudable
    - gates_humanos
    - estado_monotonico

v3_3:
  status: APROBADO_PARA_USO
  contribution:
    - una_escritura_por_autorizacion
    - recuperación_por_capas
    - mapa_de_identidades
    - publicación_gobernada
    - rollback_publico
    - claims_disciplinados
```

## 19. Síntesis operacional

```
orientar antes de operar
→ leer antes de escribir
→ autorizar una sola escritura
→ verificar el objeto producido
→ no repetir lo ya completado
→ recuperar solo la capa fallida
→ pausar después de cada transición pública
→ documentar con honestidad
→ convertir errores en controles
→ celebrar sin perder memoria
```

La persona conserva el sentido. La IA convierte complejidad en estructura y aprendizaje. La máquina ejecuta y demuestra. La documentación hace que la experiencia sobreviva a la sesión.

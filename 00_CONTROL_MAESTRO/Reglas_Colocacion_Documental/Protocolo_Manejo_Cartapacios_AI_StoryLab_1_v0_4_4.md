# Protocolo de Manejo de Cartapacios — AI StoryLab 1 v0.4.4

**Código documental:** Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4  
**Proyecto:** AI StoryLab 1  
**Versión:** v0.4.4  
**Fecha:** 2026-06-30  
**Estado:** Borrador operativo para PR #9  
**Tipo de documento:** Protocolo de colocación documental, manejo de cartapacios y gobernanza estructural  
**Ruta canónica recomendada:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md`  
**Deriva de:** Auditoría Estructural de Cartapacios AI StoryLab 1 v0.4.4  
**Alcance:** Documental, estructural y transdisciplinario. No autoriza implementación funcional.  

---

## 0. Propósito

Este protocolo establece reglas para decidir dónde colocar documentos, cuándo crear carpetas nuevas, cómo manejar rutas canónicas, cómo registrar deuda estructural, cómo actualizar README, cómo gobernar derivados SDD y cómo preservar transferencia simétrica reversible PH-IT-AT rumbo a v1.0.0.

Su propósito no es congelar el proyecto. Su propósito es permitir que crezca sin perder memoria, trazabilidad, seguridad, agencia humana ni coherencia transdisciplinaria.

---

## 1. Principio rector

```text
Usar primero la estructura existente.
Crear carpetas nuevas solo cuando mejoren claridad, navegación, seguridad o mantenimiento.
Toda carpeta nueva requiere justificación documental.
Un documento completo vive en una sola ruta canónica.
Los demás lugares lo invocan mediante referencias lógicas.
Toda decisión estructural relevante se registra.
```

---

## 2. Nomenclatura oficial

A partir de v0.4.4, la sigla oficial es:

```text
SDD = Spec-Driven Development
```

Cualquier aparición de `SSD` en documentación relacionada con Spec-Driven Development debe tratarse como:

```text
1. error tipográfico;
2. uso heredado no canónico;
3. deuda terminológica;
4. mención contextual que requiere normalización futura.
```

Regla:

```text
Los documentos canónicos de AI StoryLab 1 v0.4.4 en adelante usarán SDD exclusivamente.
```

---

## 3. Jerarquía documental oficial

La jerarquía documental de AI StoryLab 1 queda definida así:

```text
00_CONTROL_MAESTRO
↓
Constitución SDD
↓
Seguridad, ética, perfiles e investigación
↓
Decisiones registradas
↓
Specs
↓
Arquitectura y diseño
↓
Pruebas y validación
↓
Guías humanas y operativas
↓
Bitácoras, cierres y memoria activa
```

### 3.1 Consecuencia

Una spec no autoriza implementación por sí sola.

Una bitácora no reemplaza una decisión.

Una guía no reemplaza una spec.

Un cierre no sustituye una ruta canónica.

Un documento reciente no invalida uno rector sin decisión registrada.

---

## 4. Regla de autoridad de bloqueo

Cualquier contradicción con seguridad, privacidad, ética, perfiles, consentimiento o investigación transdisciplinaria activa un gate bloqueante.

```text
No pasa a diseño.
No pasa a implementación.
No pasa a testing.
No pasa a despliegue.
```

Para desbloquear debe existir:

```text
1. deuda registrada;
2. revisión humana;
3. decisión explícita;
4. actualización de documento afectado;
5. changelog o bitácora;
6. mapa, índice o tabla actualizado si aplica.
```

---

## 5. Unidad de organización hacia v1.0.0

AI StoryLab 1 usará un sistema de capas:

```text
versión
fase
producto
módulo
perfil
evidencia
riesgo
deuda
```

Las carpetas organizan ubicación.  
Los metadatos organizan significado.  
Los índices organizan navegación.  
Las referencias lógicas organizan invocación.  
Los cierres organizan continuidad.  
La deuda organiza lo pendiente.  
Las decisiones organizan autoridad.

---

## 6. Productos esperados por ciclo

Cada ciclo o hito hacia v1.0.0 debe poder producir, según aplique:

```text
objetivos
specs
arquitectura
diseño
testing
validación
investigación
seguridad
ética
perfiles impactados
wiki humana
evidencia
deuda
mantenimiento
cierre
próxima acción
```

Esto se considera un paquete ecosistémico completo.

---

## 7. Rutas canónicas por tipo de producto

| Tipo de producto | Ruta canónica recomendada |
|---|---|
| Reglas de cartapacios | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/` |
| Mapas del repositorio | `00_CONTROL_MAESTRO/Mapas_Repositorio/` |
| Tablas de ubicación documental | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/` |
| Constitución SDD y gobernanza SDD | `00_CONTROL_MAESTRO/Spec_Driven_Development/` |
| Plantillas SDD | `07_PLANTILLAS_Y_MODELOS/Spec_Driven_Development/` |
| Bases formativas SDD del PH | `05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/` con decisión registrada |
| Conocimiento común transversal | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/` |
| Perfiles de usuario | `05_COMPETENCIAS_Y_PERFILES/` |
| Reportes de auditoría | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Reportes_Auditoria/` |
| Gates y checks | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Gates_Checks_Evaluacion/` |
| Evidencias de validación | `15_EVALUACION_CALIDAD_Y_AUDITORIA/Evidencias_Validacion/` |
| Bitácoras | `18_DOCUMENTACION_ACTIVA/Bitacoras/` |
| Cierres de sesión o versión | `18_DOCUMENTACION_ACTIVA/Cierres_Sesion/` |
| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Deuda estructural y técnica | `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/` |
| Wiki humana | `21_WIKI_DOCUMENTACION_HUMANA/` |
| Archivo histórico | `99_ARCHIVO_HISTORICO/` bajo doble condición |

---

## 8. Criterios para crear carpeta nueva

Se permite crear una carpeta nueva si cumple al menos una función fuerte:

```text
1. mejora navegación;
2. reduce ambigüedad;
3. protege seguridad o privacidad;
4. evita duplicación futura;
5. sostiene un flujo recurrente;
6. permite mantenimiento claro;
7. organiza evidencia o deuda de forma trazable;
8. hace visible una frontera funcional necesaria.
```

Pero siempre debe cumplir:

```text
1. justificación en auditoría, protocolo o decisión;
2. revisión contra estructura existente;
3. actualización de mapa o tabla de ubicación;
4. registro de deuda o decisión cuando aplique;
5. README si la carpeta tendrá continuidad operativa.
```

---

## 9. Criterios para no crear carpeta nueva

No crear carpeta nueva cuando:

```text
1. solo resuelve una duda momentánea;
2. duplica una ruta existente;
3. reproduce una etiqueta que debería ser metadato;
4. crea silo por comodidad;
5. aumenta fragmentación de documentación activa;
6. contradice una ruta canónica;
7. genera ruptura de referencias sin beneficio superior.
```

---

## 10. Manejo de carpetas conflictivas

Cuando una carpeta existente contradiga, tensione o desvíe el protocolo, no debe renombrarse automáticamente.

Debe evaluarse caso por caso mediante decisión registrada.

La evaluación debe contener:

```yaml
carpeta:
ruta_actual:
tension_detectada:
documentos_afectados:
riesgo_de_ruptura:
beneficio_de_renombrar:
opciones:
decision:
accion:
deuda_resultante:
```

Ejemplo de carpeta a evaluar:

```text
05_COMPETENCIAS_Y_PERFILES/Programador_Humanista/Base_Conocimiento_SDD/
```

Esta ruta puede conservarse si se declara como paquete formativo SDD del PH con obligación de transferibilidad hacia IT y AT.

---

## 11. Perfiles creadores PH-IT-AT

AI StoryLab 1 reconoce tres perfiles creadores:

```text
PH = Programador Humanista
IT = Investigador Transdisciplinario
AT = Artista Transdisciplinario
```

### 11.1 Regla PH como piloto

PH opera como perfil piloto, pero no como centro jerárquico permanente.

Todo documento PH relevante debe declarar transferencia:

```yaml
transferencia_PH_IT_AT:
  aplica: true
  origen: PH
  transferible_a_IT: si/no/parcial
  transferible_a_AT: si/no/parcial
  condiciones_transferencia:
  deuda_transferencia:
  requiere_revision:
```

### 11.2 Sistema formal de transferencia

El sistema formal de transferencia debe incluir:

```text
1. campo obligatorio en documentos relevantes;
2. registro de deuda de transferencia;
3. índice de documentos transferibles;
4. revisión en cierre de versión;
5. actualización de bitácora de transferencia simétrica.
```

---

## 12. Perfiles de usuario

Los perfiles principales de usuario son:

```text
estudiante de escuela superior
estudiante universitario
docente
investigador
```

Deben vivir como sistema híbrido:

```text
fichas canónicas en competencias/perfiles
+
invocación por specs, diseño, testing, wiki e investigación
```

Cada ficha debe contener:

```text
necesidades
riesgos
permisos
lenguaje
nivel de autonomía
andamiaje
evidencias
criterios de validación
consideraciones éticas
consideraciones de privacidad
```

---

## 13. Relación con Constitución SDD

La Constitución SDD se reconoce como documento matriz vivo con núcleo estable y anexos versionados.

Regla:

```text
La Constitución SDD gobierna e invoca.
No absorbe todos sus derivados.
Cada derivado vive en su ruta canónica.
```

Derivados típicos:

```text
políticas
matrices
plantillas
threat models
guías
gates
checklists
registros de deuda
índices
wiki humana
```

---

## 14. Gate constitucional completo

Antes de autorizar implementación funcional debe existir evidencia de:

```text
[ ] Spec aprobada.
[ ] Arquitectura aprobada.
[ ] Diseño aprobado.
[ ] Threat model.
[ ] Clasificación de datos.
[ ] Política de privacidad aplicable.
[ ] Consentimiento informado y situado.
[ ] Criterios local-first.
[ ] Criterios de aceptación.
[ ] Plan de pruebas.
[ ] Validación humana.
[ ] Impacto en perfiles de usuario.
[ ] Impacto PH-IT-AT.
[ ] Impacto pedagógico.
[ ] Impacto investigativo.
[ ] Revisión de Constitución SDD.
[ ] Deuda estructural revisada.
[ ] Wiki humana actualizada o deuda WIKI_SYNC registrada.
[ ] Mantenimiento previsto.
[ ] Evidencias documentadas.
[ ] Decisión de avance registrada.
```

Sin este gate, cualquier implementación funcional debe bloquearse, diferirse o limitarse a exploración/prototipo no funcional bajo condiciones explícitas.

---

## 15. Testing, validación e investigación

Testing, validación e investigación se manejarán como sistema híbrido:

```text
1. Cada spec tendrá criterios mínimos de prueba y validación.
2. Las evidencias mayores vivirán en matrices e informes transversales.
3. La investigación transdisciplinaria se considerará eje rector.
4. Toda spec relevante deberá declarar posible relación investigativa.
```

La investigación no es fase posterior. Acompaña:

```text
Constitución SDD
perfiles
specs
arquitectura
diseño
testing
validación
mantenimiento
evidencia
```

---

## 16. Documentación activa

`18_DOCUMENTACION_ACTIVA/` debe preservar memoria viva sin convertirse en depósito indistinto.

### 16.1 Funciones diferenciadas

| Tipo | Función |
|---|---|
| Bitácora | Registra lo ocurrido durante una sesión, ronda o intervención. |
| Cierre | Organiza continuidad y estado al final de una sesión, PR o versión. |
| Compendio | Agrupa síntesis documental de un bloque. |
| Manifest | Lista archivos incluidos y propósito de un paquete. |
| Prompt de activación | Reactiva continuidad en sesión futura. |
| Registro de decisión | Otorga autoridad a una decisión explícita. |
| Registro de deuda | Documenta lo pendiente, bloqueante o diferido. |
| WIKI_SYNC | Registra deuda de sincronización con documentación humana. |

### 16.2 Regla

```text
La documentación activa conserva memoria.
No reemplaza rutas canónicas.
No duplica documentos completos si basta una referencia lógica.
```

---

## 17. Paquetes de cierre por versión

Un cierre ecosistémico completo debe contener:

```text
README de cierre
compendio
bitácora
changelog
registro de deuda
decisiones
prompt de continuidad
specs relacionadas
criterios de aceptación
validación
seguridad
evidencias
impacto en perfiles
wiki humana
investigación
mantenimiento
riesgos
mapas e índices actualizados
```

### 17.1 Ruta activa

Durante continuidad operativa:

```text
18_DOCUMENTACION_ACTIVA/Cierres_Sesion/
```

### 17.2 Archivo histórico

Mover a archivo histórico solo si se cumplen dos condiciones:

```text
1. existe reemplazo canónico;
2. existe decisión registrada.
```

Ruta:

```text
99_ARCHIVO_HISTORICO/
```

---

## 18. README canónicos

Toda carpeta crítica debe tener README útil.

### 18.1 Zonas prioritarias

```text
00_CONTROL_MAESTRO
05_COMPETENCIAS_Y_PERFILES
07_PLANTILLAS_Y_MODELOS
15_EVALUACION_CALIDAD_Y_AUDITORIA
18_DOCUMENTACION_ACTIVA
20_MANTENIMIENTO_Y_EVOLUCION
21_WIKI_DOCUMENTACION_HUMANA
```

### 18.2 Estructura mínima de README

```markdown
# Nombre del cartapacio

**Proyecto:** AI StoryLab 1
**Estado:** activo / pendiente / archivado / en revisión
**Versión de referencia:** vX.X.X
**Última revisión:** AAAA-MM-DD

## Propósito

## Qué contiene

## Qué no contiene

## Rutas relacionadas

## Criterios de colocación

## Relación con SDD

## Relación con perfiles

## Riesgos de seguridad, privacidad o datos

## Relación con WIKI_SYNC

## Deuda activa

## Próxima revisión
```

---

## 19. Registro de deuda estructural

Toda deuda estructural debe registrarse con el siguiente formato:

```yaml
id_deuda:
tipo:
ruta_afectada:
descripcion:
riesgo:
severidad:
decision_requerida:
responsable_logico:
version_objetivo:
estado:
accion_siguiente:
```

Severidades:

```text
bloqueante
alta
media
baja
diferida
```

---

## 20. Conflictos documentales

Cuando dos documentos entren en conflicto:

```text
1. Registrar deuda.
2. Detener avance si afecta seguridad, privacidad, ética, perfiles o implementación.
3. Evaluar jerarquía documental.
4. Emitir decisión registrada.
5. Actualizar documentos afectados.
6. Actualizar changelog.
7. Actualizar mapa, índice o tabla si aplica.
```

---

## 21. Archivo histórico

No se archivará por antigüedad solamente.

Un documento pasa a `99_ARCHIVO_HISTORICO/` si:

```text
1. ya no es operativo;
2. existe reemplazo canónico;
3. existe decisión registrada;
4. se actualizó índice o mapa afectado;
5. no rompe continuidad de sesiones activas.
```

---

## 22. Reglas para PR #9

El PR #9 debe seguir estas reglas:

```text
1. Alcance exclusivamente documental y estructural.
2. No implementación funcional.
3. No backend.
4. No cloud.
5. No autenticación.
6. No analíticas.
7. No IA externa por defecto.
8. No manejo de datos reales.
9. No renombrar carpetas sin decisión registrada.
10. No archivar sin doble condición.
11. Usar SDD exclusivamente.
12. Crear carpetas nuevas solo con justificación.
13. Registrar deuda estructural.
14. Actualizar mapas, tablas o índices afectados.
15. Mantener transferencia simétrica reversible PH-IT-AT.
```

---

## 23. Protocolo mínimo antes de crear un documento nuevo

```text
1. Identificar función primaria.
2. Identificar alcance.
3. Verificar ruta canónica existente.
4. Revisar si la categoría debe ser carpeta, metadato, índice o referencia lógica.
5. Validar impacto SDD.
6. Validar impacto en perfiles.
7. Validar impacto PH-IT-AT.
8. Validar seguridad, privacidad y datos.
9. Registrar deuda si existe.
10. Actualizar índice, mapa, README o tabla si aplica.
```

---

## 24. Protocolo mínimo antes de cerrar una versión

```text
1. Verificar paquete ecosistémico completo.
2. Revisar deuda estructural.
3. Revisar deuda WIKI_SYNC.
4. Revisar transferencia PH-IT-AT.
5. Confirmar gate constitucional si hubo avance funcional.
6. Actualizar bitácoras.
7. Actualizar changelog.
8. Actualizar registro de decisiones.
9. Actualizar mapa o tabla de ubicación.
10. Preparar prompt de continuidad.
11. Decidir si algo pasa a archivo histórico.
```

---

## 25. Cierre de protocolo

Este protocolo reemplaza la improvisación estructural por flexibilidad gobernada.

Permite crear carpetas nuevas cuando mejoran claridad, pero exige justificación.  
Permite PH como piloto, pero exige transferibilidad.  
Permite documentación viva, pero exige rutas canónicas.  
Permite avance hacia v1.0.0, pero bloquea implementación funcional sin gate constitucional completo.

**Dictamen:** Protocolo listo como borrador operativo para PR #9.

**Próxima acción:** Incorporar junto con la Auditoría Estructural, el Mapa Real Post-PR8, la Tabla de Ubicación Documental, el Registro de Deuda Estructural y la Decisión de Alineación Pre-PR9.

# Protocolo para Incorporar Nuevos Términos al Glosario General de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Protocolo documental  
**Estado:** Aprobado para integración documental  
**Cartapacio recomendado:** `00_CONTROL_MAESTRO/Protocolos_Documentales/`  
**Archivo recomendado:** `Protocolo_Incorporacion_Terminos_Glosario_AI_StoryLab_1_v0_4_3.md`  
**Documentos relacionados:**  
- `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md`
- `07_PLANTILLAS_Y_MODELOS/Documentacion/Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md`

---

## 1. Propósito

Este protocolo define cómo añadir, revisar, aceptar, modificar o retirar términos del Glosario General de AI StoryLab 1 v0.4.3.

Su propósito es evitar crecimiento caótico, duplicación conceptual, definiciones improvisadas y términos que introduzcan implicaciones pedagógicas, éticas, técnicas o documentales sin revisión.

---

## 2. Principio rector

Todo término nuevo debe fortalecer la claridad conceptual del proyecto.

No se añade un término solo porque aparece una vez en una conversación. Se añade cuando cumple al menos uno de estos criterios:

- aparece en varios documentos;
- afecta fundamento filosófico;
- afecta competencias o taxonomías;
- afecta evaluación, evidencia, rúbricas o portafolios;
- afecta seguridad, privacidad, consentimiento o IA;
- puede crear confusión si no se define;
- requiere WIKI_SYNC;
- se convertirá en concepto operativo de una ficha canónica;
- modifica cómo se entiende la relación entre persona humana, máquina digital e inteligencia artificial.

---

## 3. Flujo de incorporación

### Paso 1: Propuesta

Registrar el término propuesto con:

```text
término
origen
documento o conversación donde aparece
motivo de inclusión
familia conceptual sugerida
riesgo de confusión
```

Estado inicial:

```text
Propuesta
```

---

### Paso 2: Clasificación

Clasificar el término como:

```text
Entrada breve
Entrada operativa
Entrada estructural
```

Criterio:

- **Entrada breve:** término auxiliar.
- **Entrada operativa:** término usado en documentos canónicos, competencias, taxonomías o guías.
- **Entrada estructural:** término que afecta principios, arquitectura, gobernanza, seguridad, privacidad o marco filosófico.

---

### Paso 3: Redacción con plantilla

Redactar la entrada usando la plantilla oficial:

```text
07_PLANTILLAS_Y_MODELOS/Documentacion/Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md
```

No se debe añadir una entrada directamente al glosario sin pasar por la plantilla, salvo correcciones menores ya aprobadas.

---

### Paso 4: Revisión conceptual

Verificar que la entrada:

- distingue persona humana, máquina digital e IA cuando aplique;
- no delega agencia humana a la IA;
- no convierte un concepto en funcionalidad implementada;
- no contradice documentos canónicos existentes;
- no duplica un término ya definido;
- usa lenguaje compatible con el marco v0.4.3;
- mantiene el eje del Humanismo Transdisciplinario de Investigación-Creación con IA Responsable.

---

### Paso 5: Evaluación de relaciones

Antes de aceptar el término, evaluar relación con:

```text
competencias
taxonomías
evidencias
rúbricas
portafolios
local-first
Spec-Driven Development
Security by Design
Security by Default
WIKI_SYNC
bitácora de transferencia simétrica
```

No todos aplican, pero todos deben ser considerados.

---

### Paso 6: Evaluación WIKI_SYNC

Clasificar impacto WIKI_SYNC:

```text
No requerido
Evaluar más adelante
Requerido
Registrar como deuda WIKI_SYNC
```

WIKI_SYNC es requerido si el término afecta cómo estudiantes, docentes, facilitadores, investigadores o instituciones entienden el proyecto.

---

### Paso 7: Aprobación humana

Toda entrada nueva debe recibir aprobación humana antes de pasar a estado canónico.

Estados posibles:

```text
Propuesta
Borrador
Aceptada para glosario
Aceptada con WIKI_SYNC pendiente
Revisar
Retirada
```

---

### Paso 8: Integración al glosario

Una vez aprobada, insertar la entrada en la familia conceptual correspondiente.

Si no existe familia adecuada, proponer una nueva familia conceptual. No crear familias nuevas sin justificación.

---

### Paso 9: Actualización de documentación activa

Si el término afecta continuidad, rutas, principios, WIKI_SYNC o deuda, registrar el cambio en documentación activa según aplique:

```text
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
18_DOCUMENTACION_ACTIVA/Changelog/
18_DOCUMENTACION_ACTIVA/Manifests/
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/
18_DOCUMENTACION_ACTIVA/Bitacoras/
```

---

### Paso 10: Commit documental

El commit debe ser documental y localizado.

Mensaje sugerido:

```text
docs: actualizar glosario general v0.4.3
```

No debe mezclarse con código, configuración funcional ni cambios técnicos.

---

## 4. Criterios para rechazar un término

Un término puede rechazarse si:

- es redundante con una entrada existente;
- es demasiado general;
- pertenece a una guía humana, no al glosario canónico;
- pertenece a una spec técnica futura;
- introduce funcionalidad no aprobada;
- contradice local-first, SDD, Security by Design o Security by Default;
- no aporta claridad conceptual;
- crea más ambigüedad de la que resuelve;
- no tiene relación clara con la fase v0.4.3.

---

## 5. Criterios para retirar o sustituir un término

Un término aceptado puede retirarse o sustituirse si:

- cambia el marco conceptual;
- se fusiona con otro término;
- se vuelve obsoleto;
- genera confusión persistente;
- se mueve a otro documento canónico;
- requiere reformulación por razones éticas, pedagógicas o técnicas.

Todo retiro debe documentarse en changelog o registro de decisiones si afecta documentos ya aprobados.

---

## 6. Relación con la plantilla oficial

La plantilla oficial vive en:

```text
07_PLANTILLAS_Y_MODELOS/Documentacion/Plantilla_Entrada_Glosario_AI_StoryLab_1_v0_4_3.md
```

Este protocolo gobierna el proceso.

La plantilla gobierna la forma de cada entrada.

El glosario conserva las entradas aceptadas.

---

## 7. Relación con documentación activa y deuda

La incorporación de términos nuevos puede afectar:

```text
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/
18_DOCUMENTACION_ACTIVA/Changelog/
18_DOCUMENTACION_ACTIVA/Manifests/
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/
18_DOCUMENTACION_ACTIVA/Bitacoras/
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/
```

Debe registrarse deuda cuando:

- el término requiere guía humana posterior;
- afecta rutas o enlaces;
- obliga a actualizar documentos canónicos;
- requiere ficha futura;
- introduce tensión con documentos ya aprobados.

---

## 8. Límites explícitos

Añadir un término al glosario no autoriza:

```text
backend
APIs externas
cloud
autenticación
analíticas externas
base de datos remota
subida automática de archivos
copilotos internos
cambios funcionales prematuros
refactor técnico sin spec
integraciones sin threat model
manejo remoto de datos sin privacidad y consentimiento
```

El glosario define lenguaje. No activa implementación.

---

## 9. Criterio de cierre

Una incorporación queda cerrada cuando:

- la entrada fue redactada con plantilla;
- recibió revisión humana;
- fue ubicada en la familia conceptual correcta;
- se evaluó WIKI_SYNC;
- se actualizó documentación activa si aplica;
- fue incluida en el glosario canónico;
- el PR conserva alcance documental;
- la decisión quedó registrada si altera el sistema documental.

---

## 10. Estado de aprobación

```text
Estado actual: aprobado para integración documental
Revisión requerida: completada
Archivo .md descargable: producido
Commit: pendiente
Cambios funcionales: no autorizados
Impacto en deuda: controla crecimiento conceptual del glosario
Impacto en WIKI_SYNC: evaluable por término
Impacto en bitácora de continuidad: sí aplica
```

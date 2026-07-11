# Dictamen de Autoridad y Precedencia Documental · C0

## AI StoryLab 1

**Fase:** C0 · Ratificación de autoridad  
**Estado:** Propuesta para Gate Humano G0-C0  
**Fecha:** 2026-07-11  
**Alcance:** Autoridad y precedencia documental  
**Efecto inmediato:** Ninguno hasta ratificación humana explícita  
**Restricciones:** No mueve, renombra, elimina ni fusiona archivos. No inicia C1 ni C2. No abre v0.8.0.

---

## 1. Propósito

Este dictamen resuelve una sola pregunta:

> ¿Qué documento gobierna la colocación documental y cuál es la precedencia formal entre SDD, `.specify`, plantillas, specs, instancias y formación?

C0 termina cuando la respuesta queda inequívoca, verificable, reversible y sujeta a una decisión humana explícita.

---

## 2. Fuentes de decisión

Este dictamen se apoya en:

1. el Informe Final de la Auditoría Estructural Integral del PR #25;
2. la Matriz Final de Hallazgos y Decisiones;
3. el Plan de Corrección, Validación, Reversión y Cierre B7;
4. la transferencia de continuidad posterior al PR #25;
5. el kit de inicio y continuidad C0;
6. `Constitucion_SDD_AI_StoryLab_1_v0_4_4.md`;
7. `Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md`;
8. las funciones declaradas de `.specify`, `07_PLANTILLAS_Y_MODELOS` y `05_COMPETENCIAS_Y_PERFILES`.

La auditoría y B7 son fuentes de diagnóstico y propuesta. La autoridad normativa efectiva nace únicamente después del Gate Humano G0-C0.

---

## 3. Dictamen sobre el protocolo de cartapacios

### DEC-C0-001 · Estado del protocolo

Se propone ratificar `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Protocolo_Manejo_Cartapacios_AI_StoryLab_1_v0_4_4.md` como **protocolo rector operativo de colocación documental**.

Su autoridad queda limitada por estas condiciones:

- gobierna colocación, función y fronteras documentales dentro de su alcance;
- está subordinado a la Constitución SDD y a decisiones humanas explícitamente ratificadas;
- no puede alterar por sí solo principios constitucionales, gates humanos ni decisiones sustantivas;
- puede ser sustituido únicamente por una decisión posterior que declare de forma expresa su sucesión;
- su marca editorial histórica de “borrador operativo” deja de controlar su vigencia si el Gate G0-C0 ratifica este dictamen.

**Conclusión propuesta:** el protocolo no es una segunda Constitución. Es la norma operativa de colocación bajo autoridad superior de `00_CONTROL_MAESTRO`.

---

## 4. Regla formal de precedencia

### REG-C0-001 · Fórmula de autoridad

```text
00 gobierna
.specify opera y traza
07 modela
05 forma
18 recuerda y transfiere
```

La ruta no concede autoridad ilimitada. La autoridad resulta de la combinación de:

```text
tipo documental + alcance + estado de aprobación + vigencia + decisión humana
```

### Orden de precedencia

1. **Decisión humana ratificada y gate aplicable.** Autoridad máxima dentro del alcance expresamente aprobado.
2. **Constitución SDD y gobernanza ratificada en `00_CONTROL_MAESTRO/Spec_Driven_Development/`.** Define principios, límites, ciclo de vida, autoridad y reglas de derivación.
3. **Protocolos rectores ratificados en `00_CONTROL_MAESTRO/`.** Definen método, colocación y operación sin contradecir la Constitución.
4. **Spec aprobada y canónica.** Tiene autoridad normativa limitada al producto, capacidad o dominio que especifica.
5. **Instancia aprobada.** Concreta una plantilla o spec para un caso definido. Su autoridad proviene de la aprobación, no de la plantilla de origen.
6. **Artefacto de trabajo en `.specify/`.** Opera, registra trazabilidad y prepara o refleja specs. No crea autoridad constitucional por ubicación.
7. **Plantilla o modelo en `07_PLANTILLAS_Y_MODELOS/`.** Ofrece estructura reutilizable. No sustituye una spec o instancia aprobada.
8. **Material de formación en `05_COMPETENCIAS_Y_PERFILES/`.** Traduce el sistema a competencias humanas. No redefine la doctrina SDD.
9. **Memoria y continuidad en `18_DOCUMENTACION_ACTIVA/`.** Conserva evidencia, contexto, decisiones y transferencia. No actúa como autoridad sustantiva general.

---

## 5. Definiciones operativas

| Tipo         | Función                                                | Autoridad permitida              | Límite                                      |
| ------------ | ------------------------------------------------------ | -------------------------------- | ------------------------------------------- |
| Constitución | Define principios, límites y estructura de autoridad   | Sistémica                        | Solo cambia mediante decisión humana formal |
| Protocolo    | Define método, colocación o procedimiento reproducible | Transversal dentro de su alcance | No contradice la Constitución               |
| Spec         | Define requisitos y contrato de un alcance concreto    | Normativa y acotada              | No gobierna fuera de su dominio             |
| Plantilla    | Estructura reutilizable para producir artefactos       | Instrumental                     | No constituye una decisión del proyecto     |
| Instancia    | Aplicación concreta de una plantilla o spec            | La que otorgue su aprobación     | No hereda autoridad automática              |
| Workspace    | Espacio de trabajo, ejecución y trazabilidad           | Operativa                        | No se convierte en fuente constitucional    |
| Formación    | Desarrollo de competencias y criterios humanos         | Pedagógica                       | No redefine doctrina ni vigencia            |
| Continuidad  | Memoria, transferencia y contexto                      | Evidencial                       | No compite con la fuente canónica           |

---

## 6. Posición de cada capa

### 6.1 `00_CONTROL_MAESTRO/Spec_Driven_Development/`

Es la fuente rectora documental de SDD. Custodia la Constitución, gobernanza, reglas de ciclo de vida, criterios de derivación, gates y specs operativas aprobadas que se hayan declarado canónicas.

### 6.2 `.specify/`

Es el workspace técnico de SDD. Puede contener trabajo activo, trazas, borradores e implementaciones de specs. No debe competir como segunda Constitución ni prevalecer sobre una decisión ratificada en `00_CONTROL_MAESTRO`.

Una spec aprobada almacenada o reflejada en `.specify/` conserva autoridad acotada a su alcance, pero esa autoridad procede de su estado de aprobación y vigencia, no del cartapacio.

### 6.3 `07_PLANTILLAS_Y_MODELOS/`

Custodia moldes, formatos y modelos reutilizables. Una plantilla orienta la creación de una instancia, pero no anula una instancia ya aprobada. Los cambios de plantilla son prospectivos salvo decisión humana expresa.

### 6.4 `05_COMPETENCIAS_Y_PERFILES/`

Custodia la formación humana necesaria para participar responsablemente en SDD. Puede explicar, enseñar y traducir el sistema. No puede crear reglas constitucionales, declarar vigencia ni sustituir una spec.

### 6.5 `18_DOCUMENTACION_ACTIVA/`

Custodia memoria, continuidad, decisiones, cierres y transferencia. Puede probar qué se decidió y cuándo. No debe convertirse en una ruta paralela de autoridad sustantiva.

---

## 7. Regla de conflicto

### REG-C0-002 · Resolución de contradicciones

Cuando dos documentos parezcan competir:

1. delimitar el alcance exacto del conflicto;
2. comprobar si existe decisión humana o gate explícito;
3. comprobar autoridad, estado de aprobación y vigencia;
4. preferir el artefacto específico aprobado sobre la plantilla genérica, solo dentro de su alcance;
5. exigir declaración explícita de sucesión para considerar un documento sustituido;
6. si dos fuentes del mismo nivel siguen en conflicto, activar **HOLD documental**;
7. durante el HOLD no se mueve, implementa, depreca ni elimina nada;
8. la resolución requiere decisión humana registrada.

La fecha o versión más reciente no gana automáticamente.

---

## 8. Registro de decisiones C0

| ID         | Decisión propuesta                                                                                      | Estado antes del gate            |
| ---------- | ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| DEC-C0-001 | Ratificar el protocolo de cartapacios como protocolo rector operativo subordinado                       | Pendiente de ratificación humana |
| DEC-C0-002 | Ratificar `00_CONTROL_MAESTRO/Spec_Driven_Development/` como autoridad documental SDD                   | Pendiente de ratificación humana |
| DEC-C0-003 | Ratificar `.specify/` como workspace técnico, no como segunda Constitución                              | Pendiente de ratificación humana |
| DEC-C0-004 | Ratificar que `07` modela y que la instancia aprobada prevalece sobre la plantilla dentro de su alcance | Pendiente de ratificación humana |
| DEC-C0-005 | Ratificar que `05` forma y no redefine doctrina, vigencia o specs                                       | Pendiente de ratificación humana |
| DEC-C0-006 | Ratificar HOLD documental ante conflicto no resuelto                                                    | Pendiente de ratificación humana |
| DEC-C0-007 | Mantener C1, C2 y v0.8.0 fuera del alcance de este PR                                                   | Pendiente de ratificación humana |

---

## 9. Gate Humano G0-C0

El PR debe permanecer en **draft** hasta que una persona autorizada registre una de estas decisiones:

- [x] **Ratificado.** Se aprueba íntegramente el dictamen y C0 queda cerrado.
- [ ] **Ratificado con reservas.** Se aprueba con las reservas escritas en la revisión del PR.
- [ ] **Cambios requeridos.** C0 permanece abierto y no habilita C1.
- [ ] **Rechazado.** No entra en vigor ninguna regla propuesta.

### Condiciones obligatorias de ratificación

La revisión humana debe confirmar expresamente que:

- el protocolo de cartapacios queda subordinado a la Constitución SDD;
- `00` gobierna, `.specify` opera, `07` modela y `05` forma;
- la aprobación y vigencia importan más que la mera ubicación;
- una plantilla no sustituye una instancia aprobada;
- un conflicto no resuelto activa HOLD;
- este PR no mueve archivos ni abre C1, C2 o v0.8.0.

Sin esa confirmación, el estado de C0 es **decidible, no ratificado**.

---

## 10. Validación del PR

Resultado esperado:

```text
archivos añadidos: 1
archivos modificados: 0
archivos movidos: 0
archivos renombrados: 0
archivos eliminados: 0
C1 iniciado: no
C2 iniciado: no
v0.8.0 abierto: no
```

Comandos recomendados:

```bash
git diff --check
git diff --name-status --find-renames main...HEAD
git diff --name-only main...HEAD | grep -E 'v0[_\.]8[_\.]0|(^|/)C1($|/)|(^|/)C2($|/)' && exit 1 || true
```

El listado de cambios debe mostrar únicamente una entrada con estado `A`.

---

## 11. Reversión

La reversión es atómica:

```bash
git revert <commit_C0>
```

Antes del merge, basta cerrar el PR y eliminar su rama. La reversión no requiere restaurar rutas porque este PR no modifica ni traslada archivos existentes.

---

## 12. Transferencia simétrica y cierre

### Estado de salida

```text
C0: decidible
Ratificación: pendiente del Gate G0-C0
Movimientos: ninguno
C1: no iniciado
C2: no iniciado
v0.8.0: no abierto
```

### Transferencia hacia la fase siguiente

Solo después de ratificación humana, C1 podrá recibir:

- la regla `REG-C0-001` como base de autoridad;
- la regla `REG-C0-002` como control de conflictos;
- las decisiones `DEC-C0-001` a `DEC-C0-007`;
- la matriz de precedencia que deberá integrarse y ratificarse mediante un PR separado posterior.

Esta transferencia no autoriza por sí sola índices, metadatos, contenedores ni movimientos. Cada acción posterior conserva su propio gate.

### Criterio de cierre

C0 cierra únicamente cuando el Gate Humano G0-C0 queda registrado. Hasta entonces, el PR es una propuesta reversible y no una norma vigente.

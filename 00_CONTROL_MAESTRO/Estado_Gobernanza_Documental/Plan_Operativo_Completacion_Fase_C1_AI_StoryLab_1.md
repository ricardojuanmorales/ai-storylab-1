# Plan Operativo de Completación de la Fase C1

## AI StoryLab 1

**Fase:** C1 · Índices y metadatos  
**Estado:** Borrador para aprobación humana  
**Rama de trabajo:** `docs/c1-completar-indices-metadatos`  
**Base:** `main` posterior al merge del PR #29  
**Modelo de integración:** Una fase, una rama, un PR  
**Dependencia:** C0 cerrado y C1.1 fusionado  
**Restricciones:** No mover, renombrar, eliminar, deprecar ni sustituir documentos. No iniciar C2. No abrir v0.8.0.

---

## 1. Propósito

Completar la infraestructura documental de C1 mediante un único PR organizado por bloques funcionales.

El PR deberá convertir el esquema rector aprobado en el PR #29 en registros utilizables para:

- identificar fuentes canónicas;
- declarar vigencia;
- registrar sucesión y deprecación;
- normalizar decisiones;
- identificar deuda;
- consolidar gates;
- validar la integridad documental antes de C2.

C1 registra y relaciona información. No ejecuta migraciones.

---

## 2. Estado de entrada

C1 comienza su completación con:

```text
C0: cerrado
C1.1: aprobado y fusionado
C1.2: no iniciado
C1.3: no iniciado
C2: no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

Documento rector ya disponible en `main`:

```text
Esquema_Indices_Metadatos_Identificadores_C1_AI_StoryLab_1.md
```

El PR de completación no modificará este documento salvo que se detecte un error bloqueante y exista aprobación humana específica.

---

## 3. Modelo de trabajo

La fase utilizará:

```text
una rama nueva
un PR de fase
varios bloques funcionales
aprobaciones parciales
commits semánticos por bloque
un gate humano final
un merge
eliminación de la rama
```

No se crearán PR independientes por documento.

---

## 4. Bloque C1-B · Fuentes canónicas y vigencia

### Objetivo

Crear la infraestructura necesaria para identificar qué documentos gobiernan, cuáles están activos y cómo se relacionan con sus antecedentes o sucesores.

### Productos previstos

```text
Registro_Maestro_Fuentes_Canonicas_Vigencia_C1_AI_StoryLab_1.md
Indice_Documentos_Vigentes_C1_AI_StoryLab_1.md
Tabla_Sucesion_Deprecacion_Documental_C1_AI_StoryLab_1.md
```

### Contenido mínimo

- identificador documental;
- título;
- tipo;
- dominio;
- alcance;
- nivel de autoridad;
- estado;
- canonicidad;
- ruta actual;
- versión;
- fecha de efecto;
- referencia de aprobación;
- predecesor;
- sucesor;
- referencia de deprecación;
- copias históricas;
- notas y conflictos.

### Método de aprobación

El registro maestro se revisará individualmente como documento rector.

El índice y la tabla de sucesión se revisarán conjuntamente como auxiliares derivados.

### Commit previsto

```text
docs(c1): registrar fuentes canónicas, vigencia y sucesión
```

---

## 5. Bloque C1-C · Decisiones, deuda y gates

### Objetivo

Consolidar identificadores y relaciones de gobernanza sin trasladar todavía la deuda a `20`.

### Productos previstos

```text
Registro_Maestro_Decisiones_C1_AI_StoryLab_1.md
Registro_Maestro_Deuda_Gobernanza_C1_AI_StoryLab_1.md
Registro_Maestro_Gates_C1_AI_StoryLab_1.md
```

### Contenido mínimo del registro de decisiones

- identificador;
- título;
- alcance;
- estado;
- fecha;
- autoridad;
- evidencia;
- documentos afectados;
- decisión sucesora.

### Contenido mínimo del registro de deuda

- identificador;
- título;
- dominio;
- prioridad;
- estado;
- fuente;
- documentos afectados;
- responsable;
- fase objetivo;
- aceptación de riesgo;
- evidencia de resolución.

### Contenido mínimo del registro de gates

- identificador;
- etiqueta;
- fase;
- alcance;
- estado;
- autoridad;
- evidencia;
- dependencias;
- documentos afectados;
- fecha.

### Método de aprobación

El registro de decisiones se revisará individualmente.

Los registros de deuda y gates se revisarán como bloque auxiliar relacionado.

### Commit previsto

```text
docs(c1): consolidar decisiones, deuda y gates
```

---

## 6. Bloque C1-D · Validación y cierre

### Objetivo

Comprobar que los registros son coherentes y determinar si C1 puede cerrarse.

### Productos previstos

```text
Informe_Validacion_Integridad_C1_AI_StoryLab_1.md
Acta_Cierre_Fase_C1_AI_StoryLab_1.md
```

### Validaciones mínimas

- no existen dos fuentes activas para el mismo alcance;
- todo documento activo tiene una ruta identificada;
- toda sucesión tiene relación bidireccional;
- toda deprecación tiene evidencia;
- toda decisión tiene identificador;
- toda deuda registrada tiene prioridad y estado;
- todo gate tiene evidencia o estado pendiente;
- no se ejecutaron movimientos;
- no se prepararon contenedores de C2;
- v0.8.0 permanece cerrado.

### Método de aprobación

El informe de validación y el acta se revisarán conjuntamente.

El acta contendrá el gate final de la fase.

### Commit previsto

```text
docs(c1): validar y cerrar fase de índices y metadatos
```

---

## 7. Política de commits

El PR podrá contener varios commits, pero cada commit debe corresponder a un bloque funcional completo.

Secuencia prevista:

```text
1. docs(c1): registrar fuentes canónicas, vigencia y sucesión
2. docs(c1): consolidar decisiones, deuda y gates
3. docs(c1): validar y cerrar fase de índices y metadatos
```

No se harán commits por correcciones editoriales menores aisladas. Estas se incorporarán al commit del bloque mientras aún no haya sido sometido al gate parcial.

Después de un gate parcial aprobado, cualquier cambio sustantivo deberá quedar visible en un commit posterior.

---

## 8. Política de aprobación híbrida

### Documentos rectores

Se presentan completos, uno por uno:

- Registro Maestro de Fuentes Canónicas y Vigencia;
- Registro Maestro de Decisiones.

Requieren aprobación humana explícita.

### Documentos auxiliares

Se presentan agrupados por bloque:

- índice de vigencia y tabla de sucesión;
- registros de deuda y gates;
- informe de validación y acta de cierre.

Requieren aprobación humana del bloque completo.

### Gate final

La aprobación parcial de documentos no autoriza el merge.

El PR solo puede fusionarse mediante el gate final de C1.

---

## 9. Barreras técnicas antes de cada commit

Antes de incorporar un bloque:

```bash
git status --short
git diff --check
git diff --name-status
```

Antes del commit:

```bash
git diff --cached --check
git diff --cached --name-status
```

El staging solo debe contener los productos del bloque correspondiente.

---

## 10. Barreras técnicas antes de abrir el PR

```bash
git fetch origin
git rev-list --left-right --count origin/main...HEAD
git log --oneline origin/main..HEAD
git diff --name-status origin/main...HEAD
git diff --check origin/main...HEAD
```

Condiciones obligatorias:

```text
la rama está cero commits detrás de main;
solo contiene commits de C1;
no contiene productos de C0 ya fusionados;
no contiene productos de C2;
no contiene borradores descargables;
no contiene archivos con sufijo _Aprobado;
no contiene ZIP;
no contiene movimientos ni eliminaciones.
```

---

## 11. Apertura del PR

El PR se abrirá cuando:

- los bloques C1-B y C1-C estén aprobados;
- el bloque C1-D esté preparado;
- la rama esté sincronizada con `main`;
- el diff sea exclusivamente de C1.

El PR se abrirá en draft desde:

```text
docs/c1-completar-indices-metadatos
```

hacia:

```text
main
```

---

## 12. Gate final de C1

La revisión humana deberá confirmar:

- C1.1 permanece vigente;
- las fuentes canónicas están registradas;
- la vigencia está declarada;
- la sucesión y deprecación son trazables;
- las decisiones tienen identificadores;
- la deuda está identificada;
- los gates están identificados;
- no existen fuentes activas duplicadas conocidas;
- no se realizaron movimientos;
- no se eliminaron documentos;
- C2 no fue iniciado;
- v0.8.0 no fue abierto;
- la fase puede revertirse por bloques.

Opciones:

- [ ] **Aprobada.** Se autoriza el merge y el cierre de C1.
- [ ] **Aprobada con reservas.** Se autoriza el merge con deuda registrada.
- [ ] **Cambios requeridos.** El PR permanece abierto.
- [ ] **Rechazada.** C1 no se cierra.

---

## 13. Cierre posterior al merge

Después del merge:

```bash
git switch main
git pull --ff-only origin main
git branch -d docs/c1-completar-indices-metadatos
git push origin --delete docs/c1-completar-indices-metadatos
git fetch origin --prune
```

No se reutilizará la rama.

La rama de C2 se creará únicamente después de confirmar:

```text
main actualizado
árbol limpio
C1 cerrado
gate final registrado
rama C1 eliminada
```

---

## 14. Reversión

Cada bloque debe ser reversible mediante su commit específico.

En caso de fallo localizado:

```bash
git revert <commit_del_bloque>
```

No debe revertirse la fase completa cuando el problema esté limitado a un solo bloque.

La reversión de C1 no afecta los productos ratificados de C0 ni el fundamento C1.1 del PR #29, salvo decisión humana expresa.

---

## 15. Estado de salida esperado

```text
C0: cerrado
C1.1: vigente
C1-B: aprobado
C1-C: aprobado
C1-D: aprobado
C1: cerrado
C2: habilitado, no iniciado
movimientos: ninguno
v0.8.0: no abierto
```

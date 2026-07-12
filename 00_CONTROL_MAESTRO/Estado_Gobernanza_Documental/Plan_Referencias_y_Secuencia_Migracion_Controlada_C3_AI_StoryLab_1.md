# Plan de Referencias y Secuencia de Migración Controlada · C3

**Identificador:** `DOC-DOC-024`
**Fecha:** 2026-07-12
**Estado:** Plan pre-migración
**Gate:** `GATE-CORR-G2 · pending`
**Movimiento autorizado:** No

---

## 1. Regla de commits

Cada unidad operativa utilizará dos commits separados:

```text
commit 1: movimiento puro
commit 2: referencias, metadatos e índices
```

El commit puro no podrá cambiar contenido.

## 2. Secuencia revisada

```text
C3-A0.1  mover DOC-ARQ-001
C3-A0.2  actualizar referencias del mapa funcional

C3-C1   mover atómicamente DOC-GOB-007 + DOC-UX-003
C3-C2   actualizar referencias del par

C3-B1   mover DOC-UX-002, DOC-UX-004, DOC-UX-006 y DOC-UX-005
C3-B2   actualizar referencias UX

C3-A2.1 mover DOC-ARQ-002
C3-A2.2 actualizar referencias finales y validar la familia completa
```

`DOC-ARQ-002` se mueve al final porque declara nueve antecedentes y consolida el conjunto funcional v0.6.

## 3. Clases de referencia

### Control vivo

Incluye registros, índices, inventarios, tablas de sucesión y README vigentes.

Acción:

```text
actualizar a la nueva ruta canónica
preservar document_id
registrar el commit de movimiento
```

### Continuidad histórica y auditoría

Incluye actas, bitácoras, cierres, auditorías y mapas históricos.

Acción:

```text
no reescribir narrativa histórica
preservar la ruta que documentaba el estado de su época
añadir puntero vigente solo cuando sea necesario para navegación
```

### Referencias internas entre fuentes sustantivas

Acción:

```text
validar enlaces relativos después de cada lote
convertir a ruta canónica explícita cuando el cambio de carpeta rompa navegación
no alterar contenido conceptual
```

## 4. Validaciones por unidad

```text
fuente existe
destino no existe
hash previo registrado
git mv sin edición
hash posterior idéntico
referencias vivas actualizadas
referencias históricas preservadas
git diff --check limpio
reversión ensayada
restauración verificada
```

## 5. Criterio de detención

La migración se detiene si:

- cambia una fuente durante el movimiento;
- aparece un destino ocupado;
- falla la equivalencia de hashes;
- una referencia viva queda rota;
- una fuente histórica es reescrita sin decisión;
- aparece dependencia C4;
- falla `git revert`;
- cambia el head después de la aprobación humana.

## 6. Efecto

Este plan prepara evidencia para G2.

No aprueba G2 ni autoriza movimientos.

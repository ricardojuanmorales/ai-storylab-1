# Matriz de Uso Óptimo de Cartapacios Raíz y Rutas Canónicas hacia v1.0.0
## AI StoryLab 1 · B4

**Estado:** Propuesta estratégica para revisión humana  
**Alcance:** Documental y estructural  
**Base normativa:** Protocolo de Manejo de Cartapacios v0.4.4 y resultados de B3  
**Restricción:** No autoriza movimientos, renombres, fusiones, activaciones ni eliminaciones

---

## 1. Propósito

Esta matriz traduce las reglas vigentes en una arquitectura documental más clara para el trayecto hacia v1.0.0.

No propone vaciar ni reorganizar inmediatamente el repositorio. Define qué función debería ejercer cada cartapacio raíz, qué productos puede custodiar como fuente canónica y qué tipos de documentos deben quedar fuera de sus fronteras.

---

## 2. Principio operativo

```text
una fuente canónica por documento completo;
referencias en lugar de copias;
00 gobierna;
15 asegura;
18 recuerda y transfiere;
20 mantiene y evoluciona;
99 preserva;
21 comunica a personas.
```

Los cartapacios temáticos conservan el conocimiento especializado. Los planos transversales organizan autoridad, validación, memoria, deuda, historia y comunicación.

---

## 3. Arquitectura óptima por planos

### Plano rector

`00_CONTROL_MAESTRO`

Custodia reglas, mapas, índices, convenciones y gobernanza estructural. No debe transformarse en depósito de productos finales de todas las áreas.

### Plano de aseguramiento

`15_EVALUACION_CALIDAD_Y_AUDITORIA`

Custodia auditorías finales, gates, checks, dictámenes y evidencia de validación.

### Plano de memoria activa

`18_DOCUMENTACION_ACTIVA`

Custodia la historia operativa viva: bitácoras, cierres, transferencias, changelogs y decisiones. Todo documento debe tener criterio de salida.

### Plano evolutivo

`20_MANTENIMIENTO_Y_EVOLUCION`

Custodia la deuda y el trabajo de mantenimiento como fuente primaria.

### Plano histórico

`99_ARCHIVO_HISTORICO`

Custodia lo cerrado o sustituido, con manifiesto de origen, vigencia y no edición.

### Plano humano

`21_WIKI_DOCUMENTACION_HUMANA`

Publica guías y navegación humana sin reemplazar las fuentes rectoras.

---

## 4. Conflictos prioritarios

### C1 · Auditoría estructural entre 00 y 15

La ubicación actual de los artefactos del PR #25 en `00_CONTROL_MAESTRO/Auditorias_Estructurales` es admisible como espacio rector y provisional de trabajo.

Hacia v1.0.0 conviene distinguir:

```text
00:
  protocolo
  método
  reglas
  mapa
  índice de auditoría

15:
  reporte final
  hallazgos aprobados
  dictamen
  gate
  evidencia
```

B6 deberá simular esta separación sin mover todavía archivos.

### C2 · Concentración de 18

`18_DOCUMENTACION_ACTIVA` debe operar como memoria viva, no como archivo universal.

Cada documento debería declarar:

```text
fase
tipo
autoridad
vigencia
fuente canónica relacionada
criterio de cierre
destino posterior
```

### C3 · Deuda dispersa

La deuda puede ser mencionada en auditorías, gates y bitácoras, pero su fuente primaria debe converger en `20_MANTENIMIENTO_Y_EVOLUCION/Registro_Deuda/`.

### C4 · Archivo histórico insuficientemente formalizado

`99_ARCHIVO_HISTORICO` necesita una definición operativa explícita antes de v1.0.0. Su función observada ya existe, pero su frontera formal sigue débil.

### C5 · Documentos rectores con estado borrador

El protocolo de colocación dirige actualmente decisiones, pero conserva estado de borrador operativo. Antes de v1.0.0 debe ser:

```text
aprobado y promovido;
sustituido por versión nueva;
o limitado explícitamente como regla transitoria.
```

---

## 5. Criterio de activación de cartapacios

Un cartapacio raíz no debe activarse solo porque existe.

Debe activarse cuando haya:

1. función primaria específica;
2. productos reales y recurrentes;
3. frontera con cartapacios vecinos;
4. autoridad definida;
5. README específico;
6. regla de vigencia;
7. necesidad demostrable rumbo a v1.0.0.

Los cartapacios genéricos pueden permanecer como reservas estructurales justificadas.

---

## 6. Secuencia recomendada hacia v1.0.0

### Antes de cerrar la auditoría estructural

- aprobar rutas y fronteras;
- resolver la relación 00/15;
- definir entrada y salida de 18;
- centralizar deuda en 20;
- formalizar 99;
- registrar decisiones sin mover archivos.

### Durante v0.8.0

- aplicar correcciones estructurales aprobadas mediante PR separados;
- activar solo cartapacios necesarios para implementación incremental;
- preservar referencias y redirecciones documentales.

### Durante v0.9.0

- estabilizar wiki humana;
- preparar publicación, localización, transferencia y evidencia;
- validar navegación y comprensión documental.

### Para v1.0.0

- una sola fuente canónica por documento;
- reglas de autoridad visibles;
- versiones históricas claramente separadas;
- deuda trazable;
- navegación humana estable;
- ausencia de rutas competidoras sin explicación.

---

## 7. Dictamen provisional

La estructura raíz no necesita una poda indiscriminada. Necesita una división de trabajo más nítida.

El uso óptimo hacia v1.0.0 consiste en convertir los cartapacios raíz en órganos especializados, no en habitaciones disponibles. La ubicación debe seguir la función; la autoridad debe seguir la fuente canónica; la historia debe preservarse sin competir con el presente.

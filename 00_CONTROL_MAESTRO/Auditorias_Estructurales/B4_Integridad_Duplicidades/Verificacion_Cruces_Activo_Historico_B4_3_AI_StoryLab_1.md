# Verificación de Cruces entre Rutas Activas y Archivo Histórico
## AI StoryLab 1 · B4.3

**Estado:** Verificación parcial  
**Base:** rama de auditoría del PR #25  
**Restricción:** No autoriza eliminar, mover, fusionar ni renombrar archivos

---

## 1. Propósito

Examinar archivos con el mismo nombre que aparecen simultáneamente en rutas activas y dentro de `99_ARCHIVO_HISTORICO`, distinguiendo:

- snapshot exacto;
- derivado mantenido;
- copia accidental;
- divergencia funcional;
- conflicto de autoridad.

---

## 2. Prompt `activate-context-general.md`

Rutas:

```text
18_DOCUMENTACION_ACTIVA/Prompts_Activacion/activate-context-general.md
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/prompts/activation-prompts/activate-context-general.md
```

Hashes:

```text
activo:    148ed872e3b4a17e8d9c703ed676f100ccb0855c
histórico: 43cdd623b771d915af9946215e0dd5c735836aed
```

El cuerpo principal, las reglas y el protocolo de trabajo son equivalentes. La diferencia visible está en la sección de prompts relacionados:

- la copia histórica usa rutas relativas del snapshot;
- la versión activa apunta a `18_DOCUMENTACION_ACTIVA/Prompts_Activacion/` y `Prompts_de_Sesion/`.

### Clasificación

`D3 · derivado legítimo`

### Interpretación

La versión activa no es una simple copia exacta. Fue adaptada a la estructura documental posterior.

Debe declararse como derivado mantenido y no como reemplazo silencioso. La copia histórica debe conservarse como evidencia de origen.

---

## 3. Código `src/App.jsx`

Rutas:

```text
src/App.jsx
99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source/src/App.jsx
```

Ambas rutas comparten el mismo blob SHA:

```text
0ad3357ae5cb950a5d0ae1f0d2e031129b6c464a
```

### Clasificación

`D2 · snapshot histórico exacto`

### Interpretación

No existe conflicto de contenido. La ruta histórica preserva una fotografía exacta del código activo en el momento del snapshot.

El riesgo no es duplicación funcional, sino confusión de autoridad. Debe quedar claro que:

- `src/App.jsx` es la ruta activa;
- la copia dentro de `99_ARCHIVO_HISTORICO` es evidencia histórica;
- ningún proceso de desarrollo debe editar el snapshot como fuente activa.

---

## 4. Resultado metodológico

El segundo lote confirma dos patrones:

1. **Mismo nombre y SHA distinto** puede ser un derivado legítimo.
2. **Mismo nombre y SHA idéntico** puede ser un snapshot histórico legítimo.

La ubicación y la función son tan importantes como el contenido.

---

## 5. Riesgo sistémico

Si el archivo histórico no declara explícitamente su condición de snapshot, una herramienta humana o asistida por IA podría:

- editar la copia equivocada;
- interpretar dos rutas como fuentes activas;
- generar diferencias artificiales;
- usar referencias históricas como instrucciones vigentes.

---

## 6. Recomendaciones provisionales

Sin ejecutar cambios:

1. declarar `99_ARCHIVO_HISTORICO/.../source/` como snapshot no editable;
2. añadir una regla de precedencia entre ruta activa y copia histórica;
3. registrar derivados activos cuando cambien rutas o referencias;
4. evitar que búsquedas automáticas traten ambas copias como autoridad equivalente;
5. incluir esta frontera en guías para agentes y mantenimiento.

---

## 7. Próxima pasada

Ampliar la muestra hacia:

- componentes React;
- archivos JSON de datos;
- utilidades de exportación;
- compendios trasladados desde el snapshot;
- prompts de sesión con rutas activas divergentes.

---

## 8. Dictamen parcial

El archivo histórico no es, por sí mismo, una zona de residuos. Opera como espejo temporal. El problema aparece cuando el espejo no tiene un letrero que diga claramente: “reflejo, no puerta”.

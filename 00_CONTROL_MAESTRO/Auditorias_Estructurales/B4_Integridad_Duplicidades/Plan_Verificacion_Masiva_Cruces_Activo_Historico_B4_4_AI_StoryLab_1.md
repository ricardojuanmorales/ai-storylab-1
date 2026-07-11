# Plan de Verificación Masiva de Cruces Activo-Histórico
## AI StoryLab 1 · B4.4

**Estado:** Plan operativo reproducible  
**Cruces identificados:** 66  
**Base:** inventario estructural de 820 archivos  
**Restricción:** No autoriza eliminar, fusionar, mover ni renombrar archivos

---

## 1. Propósito

Escalar la verificación iniciada en B4.3 sin convertir coincidencias nominales en conclusiones automáticas.

La matriz completa registra cada nombre presente simultáneamente en una ruta activa y en `99_ARCHIVO_HISTORICO`.

---

## 2. Distribución por categoría

| Categoría | Casos |
|---|---:|
| codigo | 30 |
| configuracion | 1 |
| continuidad_compendio | 10 |
| datos_json | 7 |
| documental_otro | 9 |
| prompt | 9 |

---

## 3. Distribución por prioridad

| Prioridad | Casos |
|---|---:|
| EXCLUIDO | 1 |
| P1 | 47 |
| P2 | 10 |
| P3 | 8 |

---

## 4. Criterios de prioridad

### P1

- código ejecutable;
- archivos JSON de datos;
- configuración del proyecto;
- prompts que instruyen agentes;
- casos con varias rutas activas.

### P2

- compendios;
- primers;
- bitácoras;
- documentos de continuidad;
- otros documentos con potencial de vigencia activa.

### P3

- coincidencias documentales de bajo impacto técnico.

### Excluidos

`README.md` se excluye de la primera verificación masiva por ser un nombre estructural genérico.

---

## 5. Prueba mínima por caso

Cada cruce deberá registrar:

```text
ruta activa
ruta histórica
blob SHA activo
blob SHA histórico
comparación de contenido
diferencias relevantes
referencias internas
función declarada
autoridad
vigencia
clasificación D2, D3, D4 o D8
decisión humana
```

---

## 6. Clasificaciones objetivo

- `D2`: snapshot histórico legítimo;
- `D3`: derivado activo legítimo;
- `D4`: duplicado de contenido pendiente de decisión;
- `D8`: conflicto de autoridad o vigencia.

---

## 7. Lotes recomendados

### Lote A · Código y configuración

Revisar componentes React, utilidades, pruebas, `package.json`, `package-lock.json`, `vite.config.js` y `.gitignore`.

### Lote B · Datos JSON

Revisar badges, competencias, glosario, sesiones y herramientas.

### Lote C · Prompts

Revisar prompts de activación, construcción, depuración, arquitectura y privacidad.

### Lote D · Continuidad

Revisar compendios, primers y bitácoras de sesión.

---

## 8. Regla de autoridad

La ruta activa tiene precedencia operativa provisional. La copia histórica conserva evidencia, pero no debe ser editada como fuente activa.

Esta precedencia sigue pendiente de formalización documental y aprobación humana.

---

## 9. Dictamen

B4.4 transforma 66 coincidencias nominales en una cola de verificación auditable. El siguiente paso ya no es buscar casos al azar, sino ejecutar lotes comparables con el mismo método.

# Priorización de Casos B4.2
## AI StoryLab 1 · Homonimias, familias versionadas y residuos editoriales

**Estado:** Priorización provisional  
**Base:** inventario estructural de 820 archivos  
**Restricción:** No autoriza eliminar, fusionar, renombrar ni mover archivos

---

## 1. Resultado

| Conjunto | Casos priorizados |
|---|---:|
| Homonimias fuera de nombres genéricos | 66 |
| Familias versionadas de mayor complejidad | 6 |
| Marcas editoriales de mayor riesgo | 8 |

---

## 2. Criterios de prioridad

### Homonimias

Se elevaron los casos que:

- no corresponden a nombres genéricos como `README.md`;
- aparecen en varios cartapacios;
- tienen tres o más ocurrencias;
- podrían ejercer autoridad documental.

### Familias versionadas

Se elevaron las familias que:

- contienen varias versiones distintas;
- aparecen en documentación activa;
- cruzan zonas de control, auditoría o autoridad;
- requieren determinar vigencia y ruta canónica.

### Residuos editoriales

Se elevaron los archivos que:

- contienen marcas como `FINAL`, `DRAFT`, `BORRADOR`, `COPY`, `OLD` o `BACKUP`;
- están dentro de documentación activa;
- están dentro de zonas de control;
- corresponden a gates, decisiones, protocolos, auditorías o cierres.

---

## 3. Regla de revisión

Cada caso priorizado deberá atravesar:

```text
nombre
→ contenido
→ hash
→ metadatos
→ referencias entrantes
→ referencias salientes
→ autoridad
→ vigencia
→ ruta canónica
→ decisión humana
```

---

## 4. Primer lote recomendado

La siguiente revisión debe comenzar con:

1. homonimias de documentos con posible autoridad;
2. familias versionadas presentes simultáneamente en `18_DOCUMENTACION_ACTIVA`;
3. marcas editoriales fuertes dentro de zonas activas o rectoras.

---

## 5. Dictamen provisional

La prioridad sirve para ordenar la investigación, no para anticipar culpables. Un archivo con nombre sospechoso puede ser completamente legítimo; un archivo impecablemente nombrado puede esconder la verdadera colisión.

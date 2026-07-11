# Diagnóstico Inicial B4 · Integridad Referencial, Duplicidades y Versiones
## AI StoryLab 1

**Estado:** Diagnóstico provisional  
**Base:** inventario estructural de 820 archivos  
**Bloque:** B4  
**Restricción:** No autoriza eliminar, fusionar, renombrar ni mover archivos

---

## 1. Propósito

Establecer una línea base reproducible para distinguir:

- duplicados reales;
- homónimos legítimos;
- familias versionadas;
- coexistencia histórica;
- marcas editoriales;
- residuos potenciales;
- rutas que requieren verificación referencial.

---

## 2. Resultados cuantitativos iniciales

| Indicador | Cantidad |
|---|---:|
| Archivos analizados | 820 |
| Nombres de archivo repetidos | 67 |
| Grupos normalizados potencialmente relacionados | 88 |
| Familias con múltiples versiones detectadas | 22 |
| Archivos con marcas editoriales potenciales | 15 |

---

## 3. Regla interpretativa

Un nombre repetido no equivale automáticamente a duplicado.

Puede representar:

1. README legítimos en cartapacios distintos;
2. plantillas paralelas;
3. archivos históricos;
4. copias funcionales;
5. versiones derivadas;
6. duplicación accidental.

Del mismo modo, una marca como `FINAL`, `V2`, `APROBADO` o `DRAFT` no convierte automáticamente un archivo en residuo. Solo activa revisión humana.

---

## 4. Artefactos asociados

- `Matriz_Homonimias_y_Duplicidades_Provisionales_B4_AI_StoryLab_1.csv`
- `Matriz_Familias_Versionadas_B4_AI_StoryLab_1.csv`
- `Registro_Marcas_Editoriales_y_Residuos_Potenciales_B4_AI_StoryLab_1.csv`

---

## 5. Próxima fase

B4 deberá contrastar estos hallazgos con:

- contenido real;
- hashes;
- referencias entrantes y salientes;
- autoridad documental;
- vigencia;
- rutas canónicas;
- historial de Git;
- decisiones y gates.

---

## 6. Dictamen provisional

El inventario muestra suficiente repetición nominal y coexistencia versionada como para justificar una auditoría semántica y referencial. No existe evidencia suficiente para eliminar archivos basándose solo en nombres.

# Verificación del Primer Lote B4.2
## AI StoryLab 1 · Duplicidades, versiones y marcas editoriales

**Estado:** Verificación parcial basada en contenido y SHA de blobs  
**Base:** rama `docs/auditoria-estructural-integral-repositorio`  
**Restricción:** No autoriza eliminar, mover, fusionar ni renombrar archivos

---

## 1. Propósito

Probar el protocolo operativo de B4 sobre un lote pequeño y de alto valor documental antes de ampliar la revisión.

El lote incluye:

1. una duplicidad exacta con posible autoridad;
2. una familia versionada dentro de documentación activa;
3. dos archivos marcados inicialmente como residuos potenciales por contener `FINAL`.

---

## 2. Caso B4-2-L1-001 · Duplicidad exacta confirmada

Rutas:

```text
Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
18_DOCUMENTACION_ACTIVA/Registro_Decisiones/Cuerpo_PR11_Specs_Nucleo_AI_StoryLab_1_v0_4_5.md
```

Ambos archivos poseen el mismo blob SHA:

```text
387e7f93d675959c794af8a66e9921629aa60a54
```

Su contenido es idéntico y describe la apertura operativa de PR #11, sus límites, documentos principales y estado de revisión.

### Clasificación provisional

`D4 · duplicado de contenido pendiente de decisión`

### Interpretación

La evidencia confirma duplicidad exacta, pero todavía no autoriza eliminar una de las rutas.

Debe verificarse:

- cuál ruta fue creada primero;
- cuál recibe referencias entrantes;
- cuál fue tratada como canónica;
- si la copia raíz tuvo una función temporal;
- si el movimiento hacia `Registro_Decisiones` fue una reubicación incompleta.

La ruta dentro de `Registro_Decisiones` parece semánticamente más coherente, pero esto sigue siendo una inferencia sujeta a historial y referencias.

---

## 3. Caso B4-2-L1-002 · Familia `Transferencia_Simetrica`

Archivos revisados:

```text
Transferencia_Simetrica_v0_4_7_AI_StoryLab.md
Transferencia_Simetrica_v0_4_8_AI_StoryLab.md
Transferencia_Simetrica_v0_4_9_AI_StoryLab.md
```

Los tres tienen hashes distintos y documentan fases distintas:

- v0.4.7: Diseño de Experiencia No Funcional, PR #13;
- v0.4.8: Cierre Post-Merge, Consolidación y Reindexación, PR #14;
- v0.4.9: Gobernanza de Transición, PR #15.

### Clasificación provisional

`D2 · versiones históricas legítimas`

### Interpretación

No son duplicados competidores. Forman una secuencia histórica de transferencia por fase.

La mejora potencial no consiste en fusionarlos, sino en:

- declarar regla de vigencia;
- mantener un índice longitudinal;
- diferenciar transferencia activa de transferencia histórica;
- preservar referencias entre fases.

---

## 4. Casos B4-2-L1-003 y B4-2-L1-004 · Marca `FINAL`

Archivos:

```text
Auditoria_Documental_Final_PR20_AI_StoryLab_v0_6.md
Revision_Final_Pre_Merge_PR22_Gate_Apertura_v0_7_0_AI_StoryLab.md
```

En ambos casos, `FINAL` describe una función documental específica:

- auditoría final de un PR;
- revisión final previa a merge.

Los documentos declaran tipo, estado, alcance y límites. La marca no funciona como residuo editorial informal.

### Clasificación provisional

`D0 · no residuo; marca funcional`

### Consecuencia

Ambos casos deben retirarse de la lista de residuos editoriales probables. Pueden requerir auditoría de ubicación o vigencia, pero no por la palabra `FINAL`.

---

## 5. Resultado metodológico

El primer lote demuestra tres reglas:

1. **SHA idéntico + rutas distintas** confirma duplicidad de contenido, no eliminación automática.
2. **Nombre familiar + hashes y fases distintas** puede representar versiones históricas legítimas.
3. **Marca editorial aparente** puede ser vocabulario funcional válido cuando el documento la explica.

---

## 6. Próxima pasada

El segundo lote debe concentrarse en:

1. copias entre `99_ARCHIVO_HISTORICO` y rutas activas;
2. prompts duplicados entre archivo histórico y documentación activa;
3. código con el mismo nombre entre `src` y el snapshot histórico;
4. documentos `v2` que declaran canonización o deprecación;
5. referencias entrantes hacia la duplicidad exacta de PR #11.

---

## 7. Dictamen parcial

B4 ya produjo un duplicado exacto confirmado, una familia histórica legítima y dos falsos positivos de residuo.

La auditoría comienza así a separar eco, memoria y colisión real.

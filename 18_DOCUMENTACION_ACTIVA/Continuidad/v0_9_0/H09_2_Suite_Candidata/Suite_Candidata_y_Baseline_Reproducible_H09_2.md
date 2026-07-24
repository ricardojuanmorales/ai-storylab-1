# Suite candidata y baseline reproducible · H09-2

```yaml
entry_head: 3b9eaaa4be38e3562d12f5526a916665e925ebb1
functional_head: a4a52fc7cdf4077350ffa5693419b191d60f3c20
PR: 64
suite_id: AI_STORYLAB_V09_CANDIDATE_BASELINE
test_files: 49
tests: 248
supported_node:
  - 22
  - 24
reproducibility_standard: SEMANTIC
binary_reproducibility_claimed: false
clean_runs: 2
clean_comparison: PASS
functional_CI_run: 30103513289
functional_CI: PASS
functional_expansion: false
```

## 1. Conversión de la suite heredada

El comando `npm run verify` queda gobernado por un orquestador explícito que:

1. valida el runtime Node;
2. verifica el inventario congelado de pruebas;
3. ejecuta typecheck y build;
4. ejecuta auditorías de arquitectura, secretos, privacidad y vertical slice;
5. ejecuta Vitest mediante reporte JSON;
6. exige exactamente 49 archivos y 248 pruebas aprobadas;
7. calcula hashes del lockfile, inventario y salida `dist/`;
8. emite evidencia JSON reutilizable.

## 2. Inventario congelado

La suite registra un hash del listado ordenado de archivos de prueba:

`6311d45ccc64c237e950dcc700461b400df40ce21caab6274889b9ed1f056322`

La incorporación, eliminación o renombre de pruebas exige actualización
consciente del manifiesto. Esto evita que una reducción accidental de cobertura
pase inadvertida.

## 3. Entornos limpios

Se construyeron dos copias independientes mediante `git archive` del mismo
commit funcional. En cada una se ejecutó:

```text
npm ci --ignore-scripts
→ npm run verify
→ build
→ auditorías
→ 49 archivos
→ 248 pruebas
→ manifiesto semántico de dist
```

Ambas ejecuciones produjeron:

- el mismo hash de inventario;
- el mismo hash de `package-lock.json`;
- el mismo conjunto y contenido de archivos de `dist/`;
- el mismo hash semántico de build:

`32c48badd0aee620f3b2f27f056d1ec0eb5981bcff24742d9f431b908255100b`

Este resultado demuestra reproducibilidad semántica en el entorno local
controlado. No equivale a reproducibilidad binaria del ZIP.

## 4. CI remota

La CI `30103513289` ejecutó la suite candidata en Node 22 y Node 24
sobre el commit funcional exacto. Ambos jobs concluyeron satisfactoriamente.

## 5. Fronteras

H09-2 no declara soporte de navegador, Windows, Node 25/26 ni artefacto final.
Tampoco repara defectos por inferencia. Las validaciones de accesibilidad,
seguridad, empaquetado y documentación permanecen en sus hitos asignados.

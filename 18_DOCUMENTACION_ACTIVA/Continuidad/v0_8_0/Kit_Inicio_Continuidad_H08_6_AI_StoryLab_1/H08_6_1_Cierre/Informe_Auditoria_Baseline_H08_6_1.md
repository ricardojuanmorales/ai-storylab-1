# Informe de auditoría del baseline integrado · H08-6.1

```yaml
project: AI StoryLab 1
hito: H08-6.1
document_role: sintesis_tecnica_de_evidencia
evidence_run: H08_6_1_Evidencia_Baseline_20260723_175717
evidence_zip_sha256: e5f4c37cf4ce976aa33cd487c6fd292201a36f0a39ef218b2fe051218bafdcf1
branch: feat/v0.8-h08-6-stabilization
audited_head: e3a51465c58e782b42e862ad912b4afd6e56b28a
draft_PR: 63
technical_recommendation: PASS_WITH_FINDINGS_CANDIDATE
human_verdict: PENDING
repairs_authorized: false
repository_changes_during_audit: false
```

## 1. Propósito

Reconstruir el estado real del prototipo integrado de AI StoryLab 1 v0.8.0 y
medir la distancia entre el baseline heredado de H08-5/H08-6.0 y los criterios
de estabilización de H08-6.

La auditoría fue diagnóstica. No corrigió archivos, dependencias ni
documentación.

## 2. Integridad de la evidencia

- El SHA-256 del ZIP recibido coincide con el calculado localmente.
- Los 32 archivos declarados en `CHECKSUMS_EVIDENCIA.sha256` coinciden.
- El checkout estaba limpio antes y después.
- La rama local y remota coincidían.
- El PR #63 estaba abierto y en modo Draft.
- El head auditado permaneció en
  `e3a51465c58e782b42e862ad912b4afd6e56b28a`.

## 3. Ambiente auditado

```yaml
operating_system: macOS 26.5.2
architecture: arm64
node: 22.23.1
npm: 10.9.8
git: 2.50.1
gh: 2.96.0
source_files_in_inventory: 151
test_inventory_entries: 55
```

La evidencia remota previa de H08-6.0 añadió ejecución satisfactoria en Node 22
y Node 24.

## 4. Resultado agregado

```yaml
overall_status: PASS_WITH_FINDINGS
required_failures: 0
diagnostic_findings: 1
full_test_files: 48
full_tests: 247
build_directory_kb: 480
production_js_kb: 467.66
production_js_gzip_kb: 130.78
repository_clean: true
```

## 5. Verificaciones obligatorias

| Verificación | Resultado | Evidencia |
|---|---|---|
| `npm ci --ignore-scripts` | PASS | instalación bloqueada por lockfile |
| typecheck | PASS | `tsc --noEmit` |
| build | PASS | Vite, 173 módulos transformados |
| arquitectura | PASS | 70 archivos auditados |
| secretos | PASS | 165 archivos auditados |
| privacidad | PASS | 94 archivos auditados |
| vertical slice | PASS | cuatro misiones y transferencia funcional |
| suite completa | PASS | 48 archivos, 247 pruebas |
| accesibilidad focalizada | PASS | 4 archivos, 20 pruebas |
| seguridad focalizada | PASS | 1 archivo, 3 pruebas |
| ciclo creativo | PASS | 2 archivos, 21 pruebas |
| persistencia | PASS | 3 archivos, 28 pruebas |
| recuperación UI | PASS | 2 archivos, 5 pruebas |
| integración | PASS | 2 archivos, 7 pruebas |
| offline | PASS | 1 archivo, 1 prueba |
| árbol Git final | PASS | limpio y sin nuevo commit |

## 6. Capacidades integradas confirmadas

La auditoría vertical confirmó:

- cuatro misiones canónicas y funcionales;
- motor reutilizable y navegación compartida;
- ciclos completos y reabribles;
- persistencia local real;
- recuperación después de remontar;
- manejo de corrupción y cuota;
- resumen del arco completo;
- preview final desde cualquier misión;
- exclusión de reflexiones privadas;
- orden del portafolio preservado;
- archivo de transferencia real;
- descarga local confirmada;
- importación como copia;
- roundtrip semántico;
- recuperación del portafolio importado;
- ausencia de red, publicación, importación automática y descarga automática.

## 7. Hallazgo SEC-DEP-001 · `fast-uri 3.1.3`

### Evidencia

```yaml
package: fast-uri
installed_version: 3.1.3
relationship: transitive_via_ajv_8_20_0
lockfile_dev_flag: true
architecture_audit_classification: bundled_validation_dependency
advisory: GHSA-v2hh-gcrm-f6hx
severity_upstream: HIGH
affected_line: ">=3.0.0 <=3.1.3"
patched_same_major: 3.1.4
fix_available: true
```

### Interpretación contextual

El manifiesto clasifica `ajv` y `ajv-formats` como dependencias de desarrollo,
pero la auditoría de arquitectura las identifica expresamente como
dependencias de validación incorporadas al bundle. Por tanto, el hallazgo no
debe descartarse como “solo de desarrollo”.

La vulnerabilidad upstream se relaciona con discrepancias al interpretar
autoridades de URL que contienen una barra invertida literal. El prototipo
actual:

- no habilita red;
- no usa `fetch` en código de producto;
- solo presenta una coincidencia de red dentro de la prueba offline;
- usa `fast-uri` indirectamente dentro de la cadena de validación de schemas.

No se ha demostrado una ruta explotable en la experiencia actual. Tampoco se ha
demostrado que sea imposible. La clasificación correcta es:

```yaml
upstream_severity: HIGH
current_product_exploitability: NOT_DEMONSTRATED
current_network_exposure: NONE_DETECTED
release_hygiene_obligation: PATCH_REQUIRED
gate_effect: BLOCKS_SECURITY_CLOSURE_IF_UNRESOLVED
```

### Disposición técnica recomendada

No corregir dentro de la fase diagnóstica H08-6.1. Enrutar a H08-6.3, con apoyo
de H08-6.4 para reproducibilidad de dependencias.

La reparación mínima candidata deberá:

1. resolver `fast-uri` en `3.1.4` dentro de la línea compatible;
2. evitar una actualización mayor de `ajv` salvo necesidad demostrada;
3. modificar únicamente el lockfile cuando sea técnicamente suficiente;
4. repetir instalación limpia;
5. confirmar `npm audit`;
6. ejecutar schemas, importación no confiable, integración y suite completa;
7. comparar bundle antes y después;
8. documentar la ausencia o presencia de ruta explotable.

No se autoriza ejecutar esta reparación mediante este informe.

## 8. Hallazgo DOC-DRIFT-001 · documentación activa desalineada

La búsqueda automática produjo 245 candidatos. La mayoría pertenece a cierres
históricos y no debe modificarse.

Los candidatos activos confirmados son:

- `apps/storylab/README.md`, todavía presenta H08-2.5;
- `apps/storylab/README.md`, todavía declara fuera de alcance capacidades que
  ya existen;
- `apps/storylab/package.json`, mantiene una descripción centrada en H08-2A;
- `18_DOCUMENTACION_ACTIVA/README.md`, todavía presenta H08-3.1 como alcance
  vigente;
- `.github/workflows/h08-1-3-baseline.yml`, conserva un nombre histórico;
- la interpretación de `0.8.0-alpha.1` requiere separar versión de aplicación,
  versión de schema e identificadores históricos.

```yaml
severity: MEDIUM
route: H08-6.5
blocks_H08_6_1_close: false
blocks_GATE_V08_CLOSE_if_unresolved: true
```

## 9. Hallazgo TEST-SEC-001 · agregación de seguridad demasiado estrecha

El comando `test:security` ejecuta únicamente tres pruebas de errores seguros.
La suite completa contiene evidencia adicional de:

- límites de contrato;
- staging;
- preflight;
- compatibilidad;
- schemas;
- checksum;
- importación;
- persistencia;
- offline.

El problema no es ausencia total de pruebas, sino que el comando denominado
“security” no representa la superficie de seguridad que H08-6.3 deberá
certificar.

```yaml
severity: MEDIUM
route: H08-6.3
recommended_action: compose_explicit_security_regression_suite
blocks_H08_6_1_close: false
blocks_H08_6_3_close_if_unresolved: true
```

## 10. Observación PERF-BASE-001 · baseline sin presupuesto aprobado

La medición inicial es:

```yaml
dist_directory_kb: 480
javascript_kb: 467.66
javascript_gzip_kb: 130.78
build_duration_ms: 537
```

No existe en la evidencia un presupuesto aprobado contra el cual declarar
regresión o éxito. Esta medición debe convertirse en punto de referencia para
H08-6.4, no en defecto automático.

## 11. Observación DEP-OPT-001 · dependencias opcionales

`npm ls --all` terminó con código cero. Los mensajes `UNMET OPTIONAL
DEPENDENCY` corresponden a:

- binarios de plataformas distintas;
- integraciones opcionales;
- preprocesadores no utilizados;
- herramientas de navegador o cobertura no instaladas.

No se clasifican como instalación rota.

## 12. Observación PROTO-EVID-001 · higiene del paquete de evidencia

El ZIP recibido contiene metadatos `__MACOSX` además del directorio de evidencia.
Los archivos declarados por checksum permanecen íntegros. Para futuras
transferencias conviene excluir metadatos AppleDouble y verificar el ZIP final.

## 13. Matriz resumida de brechas

| ID | Dominio | Severidad | Estado | Ruta |
|---|---|---:|---|---|
| SEC-DEP-001 | dependencia vulnerable incorporada al bundle | Alta upstream | Abierta | H08-6.3/H08-6.4 |
| DOC-DRIFT-001 | documentación activa desactualizada | Media | Abierta | H08-6.5 |
| TEST-SEC-001 | comando de seguridad subrepresenta la superficie | Media | Abierta | H08-6.3 |
| PERF-BASE-001 | falta presupuesto de rendimiento | Observación | Medir | H08-6.4 |
| DEP-OPT-001 | dependencias opcionales ausentes | Informativa | Aceptada | ninguna |
| PROTO-EVID-001 | metadatos auxiliares en ZIP | Baja | Mejora | protocolo |

## 14. Recomendación técnica

```yaml
technical_recommendation: PASS_WITH_FINDINGS_CANDIDATE
baseline_integrity: PASS
functional_regression: PASS
reproducibility_local_node22: PASS
remote_CI_node22_node24: PASS
security_dependency_state: FINDING_REQUIRES_REMEDIATION
documentation_state: FINDING_REQUIRES_RECONCILIATION
performance_state: BASELINE_CAPTURED_BUDGET_PENDING
H08_6_1_ready_for_human_disposition: true
H08_6_2_automatic_opening: prohibited
```

H08-6.1 cumplió su función diagnóstica. Puede cerrarse humanamente con hallazgos
enrutados, siempre que la decisión preserve:

- `SEC-DEP-001` como bloqueo para el cierre de seguridad;
- `TEST-SEC-001` como obligación de H08-6.3;
- `DOC-DRIFT-001` como obligación de H08-6.5;
- `PERF-BASE-001` como baseline de H08-6.4.

La siguiente autorización no debe mezclar todos los hallazgos. Debe abrir el
hito siguiente conforme al Plan de Ruta y permitir que cada brecha sea tratada
en su dominio correspondiente.

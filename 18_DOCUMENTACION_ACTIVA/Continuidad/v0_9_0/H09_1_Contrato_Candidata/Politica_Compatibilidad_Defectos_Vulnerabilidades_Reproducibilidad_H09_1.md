# Política propuesta de compatibilidad, defectos, vulnerabilidades y reproducibilidad

```yaml
status: PROPOSED_FOR_CP_V09_1
functional_effect: none
```

## Compatibilidad

1. El soporte oficial se limita a combinaciones presentes en la matriz
   ratificada.
2. Un rango de `engines` no sustituye evidencia.
3. Compatibilidad no probada se declara `NOT_CLAIMED`, no `SUPPORTED`.
4. Cambios de schema deben preservar importación segura o documentar la
   incompatibilidad.
5. La RC no promete ejecución mediante `file://` sin prueba específica.

## Defectos

| Clase | Criterio | Disposición |
|---|---|---|
| P0 | pérdida de datos, privacidad crítica, ejecución insegura o producto inutilizable | bloquea |
| P1 | rompe flujo esencial, accesibilidad esencial, persistencia o roundtrip | bloquea |
| P2 | degradación importante con alternativa segura | requiere decisión humana |
| P3 | defecto menor o cosmético sin impacto en afirmación central | deuda documentable |

La severidad no se decide por volumen de funciones ausentes. Requiere relación
con una afirmación central de la candidata.

## Vulnerabilidades

- crítica o alta en dependencia de producción alcanzable: bloquea;
- crítica o alta en tooling no alcanzable: revisión humana y evidencia;
- moderada: clasificación contextual;
- baja: deuda documentable;
- toda excepción exige ID, justificación, exposición, mitigación, versión
  objetivo y decisión humana.

## Reproducibilidad

La meta inicial es **reproducibilidad semántica**:

```text
checkout limpio
→ Node soportado
→ npm ci --ignore-scripts
→ npm run verify
→ npm run build
→ contenido funcionalmente equivalente
→ manifiesto y checksums
```

No se afirma reproducibilidad binaria hasta definir normalización de timestamps,
orden de archivos y metadatos en H09-5.

## Artefacto propuesto

```yaml
format: zip
source: apps/storylab/dist/
includes:
  - static_application
  - manifest
  - sha256
  - version_and_commit
  - user_and_verification_docs
excludes:
  - node_modules
  - source_secrets
  - real_user_data
  - credentials
publication: prohibited_until_separate_human_decision
```

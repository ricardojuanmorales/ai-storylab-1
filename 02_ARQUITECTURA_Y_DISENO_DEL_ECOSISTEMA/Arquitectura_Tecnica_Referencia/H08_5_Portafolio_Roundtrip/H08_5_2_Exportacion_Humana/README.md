# H08-5.2 · Exportación humana confirmada

## Propósito

Convertir la proyección canónica de H08-5.1 en un archivo local versionado,
íntegro y descargable únicamente después de una confirmación humana explícita.

## Resultado

```yaml
milestone: H08-5.2
package: storylab_portfolio/1.0.0
canonicalization: storylab-canonical-json-v1
integrity: SHA-256_over_canonical_payload
preview: REQUIRED
confirmation: REQUIRED
download: LOCAL_ONLY
automatic_publication: PROHIBITED
import: DEFERRED_TO_H08_5_3
UI_integration: DEFERRED_TO_H08_5_5
```

## Diseño de dos fases

```text
prepare(projectId)
→ proyección H08-5.1
→ payload canónico
→ SHA-256
→ schema estricto
→ nombre y tamaño
→ previewId + resumen humano
→ cero descarga

confirm(previewId, confirmed_by_human)
→ recupera exactamente el artefacto revisado
→ descarga local de un solo uso
→ elimina el preview pendiente
```

La presentación completa se conectará en H08-5.5. Este hito entrega el motor,
los puertos, los adaptadores y las pruebas focalizadas.

# Notas de candidata · AI StoryLab 1 1.0.0-rc.1

> **Candidata interna no publicada. No es una release pública.**

## Identidad

```yaml
candidate_version: 1.0.0-rc.1
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
artifact_name: ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
publication_status: UNPUBLISHED_FINAL_CANDIDATE
```

## Contenido funcional declarado

AI StoryLab 1 presenta un arco creativo local-first M1-M4 orientado a agencia
humana, privacidad, reversibilidad, persistencia local, importación y
exportación verificable del portafolio, recuperación y continuidad del proceso
creativo.

## Validación registrada

- baseline automatizado y empaquetado reproducible en Ubuntu con Node 22 y 24;
- reverificación local del ZIP, su manifiesto y checksums;
- Safari 26.5.2, Google Chrome 150.0.7871.184 y Firefox 152.0.1 en PASS dentro
  de la matriz interna registrada;
- VoiceOver con Safari en atestación humana interna acotada;
- seguridad, privacidad y cadena de suministro en PASS para el snapshot
  auditado el 26 de julio de 2026;
- cero vulnerabilidades NPM reportadas en ese snapshot.

## Límites y exclusiones

- Windows: no afirmado;
- ejecución directa mediante `file://`: no afirmada; se requiere servidor HTTP local;
- soporte universal de navegadores: no afirmado;
- certificación WCAG: no afirmada;
- identidad binaria universal entre sistemas: no afirmada;
- firma criptográfica o SLSA provenance: no afirmados;
- efectividad educativa o usabilidad poblacional: no estudiadas;
- auditoría externa o de tercero: no realizada;
- publicación, tag, GitHub Release, Ready for Review y merge: no autorizados.

## Estado

El archivo permanece bajo publication hold. Las notas son material preparatorio
para V10-A y el GATE-V10-RELEASE, no un anuncio público.

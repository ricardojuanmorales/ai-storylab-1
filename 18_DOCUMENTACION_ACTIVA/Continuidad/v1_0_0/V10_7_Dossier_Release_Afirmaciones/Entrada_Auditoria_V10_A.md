# Entrada para V10-A · Auditoría procedimental independiente

## Objeto

Auditar la candidata interna no publicada `1.0.0-rc.1` sin modificarla.

## Identidad congelada

```yaml
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
evidence_commit: f888bb35abc65e6b3a6b70374b2865a96d6d7e5a
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
artifact_name: ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip
```

## Fuentes mínimas

- dossier de V10-7;
- notas de candidata;
- guía de verificación;
- matriz final de afirmaciones;
- matriz de evidencia;
- manifiestos y atestaciones V10-3 a V10-6;
- source CI `30216684999`;
- evidence CI `30216738433`;
- ZIP retenido bajo publication hold.

## Pruebas requeridas

1. reconstruir la cadena source commit → application tree → dist → ZIP;
2. verificar SHA-256 externo e interno;
3. comprobar coherencia entre versión, schema y lockfile;
4. confirmar que las afirmaciones públicas propuestas están soportadas;
5. confirmar que exclusiones y límites son visibles;
6. confirmar que el publication hold continúa activo;
7. producir disposición PASS o FAIL para el GATE-V10-RELEASE.

## Límites

V10-A es independencia procedimental, no auditoría externa. No puede reparar,
publicar, marcar Ready for Review, hacer merge, crear tag o release.

# Guía de verificación interna · AI StoryLab 1 1.0.0-rc.1

## Material esperado

```yaml
artifact_name: ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip
artifact_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
```

El artefacto solo debe obtenerse del depósito local autorizado. Esta guía no
autoriza copiarlo a GitHub, adjuntarlo al PR ni distribuirlo.

## 1. Verificar SHA-256

```bash
ARTIFACT="/ruta/autorizada/ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip"
test "$(shasum -a 256 "$ARTIFACT" | awk '{print $1}')" = "6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c"
```

Una salida exitosa no imprime texto y devuelve código `0`.

## 2. Ejecutar el verificador interno

Desde un checkout que contenga el árbol de aplicación de la candidata:

```bash
node apps/storylab/tools/package-candidate.mjs   --verify "$ARTIFACT"   --report verification-report.json
```

El reporte debe contener:

```yaml
status: PASS
artifactSha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
manifest:
  candidateVersion: 1.0.0-rc.1
  sourceCommit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
  publicationStatus: UNPUBLISHED_FINAL_CANDIDATE
```

## 3. Inspeccionar el manifiesto

```bash
unzip -p "$ARTIFACT" ai-storylab-1/MANIFEST.json
```

Confirma versión, source commit, estado no publicado, lista de archivos,
tamaños y SHA-256.

## 4. Verificar los archivos internos

```bash
WORKDIR="$(mktemp -d)"
ditto -x -k "$ARTIFACT" "$WORKDIR"
cd "$WORKDIR/ai-storylab-1"
shasum -a 256 -c CHECKSUMS.sha256
```

## 5. Servir la aplicación localmente

La ejecución mediante `file://` no está afirmada.

```bash
cd "$WORKDIR/ai-storylab-1/app"
python3 -m http.server 4173 --bind 127.0.0.1
```

Abre `http://127.0.0.1:4173` en un navegador incluido en la matriz declarada.

## Criterios de rechazo

Rechaza la candidata si:

- el SHA-256 externo difiere;
- el verificador devuelve FAIL;
- el manifiesto no identifica `1.0.0-rc.1`;
- el source commit no es `533fcf28a0c9053b7da79ca70ded80450d94cf35`;
- algún checksum interno falla;
- el estado indica publicación;
- el archivo proviene de una superficie no autorizada.

La verificación no autoriza publicación ni cambia el publication hold.

# Tokens de autorización humana separada

> Plantillas. Ninguna se considera otorgada por existir en este documento.

## 1. Ready for Review

```text
Apruebo el cierre de GATE-V10-RELEASE desde el commit <GATE_COMMIT> con CI
<GATE_CI> en PASS y autorizo exclusivamente marcar el Draft PR #65 como Ready
for Review. No autorizo merge, tag, publicación, GitHub Release ni cambios
funcionales, dependencias, schemas o workflows.
```

## 2. Merge

Solo después de Ready for Review, review aplicable y CI exacta:

```text
Autorizo exclusivamente el merge del PR #65 desde el head exacto <HEAD_COMMIT>
con CI <CI_RUN> en PASS. No autorizo tag, publicación ni GitHub Release.
```

## 3. Tag

Solo después del merge y de confirmar que `533fcf28a0c9053b7da79ca70ded80450d94cf35` es ancestro de main:

```text
Autorizo exclusivamente crear el tag `v1.0.0-rc.1` apuntando exactamente al commit
`533fcf28a0c9053b7da79ca70ded80450d94cf35`. No autorizo publicar el artefacto ni crear GitHub Release.
```

## 4. Publicación

Solo después del tag y una reverificación final:

```text
Autorizo exclusivamente crear la GitHub prerelease `v1.0.0-rc.1` y publicar el archivo
`ai-storylab-1_1.0.0-rc.1_533fcf28a0c9.zip` con SHA-256 `6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c`. No autorizo asignar `1.0.0`
estable ni sustituir el artefacto.
```

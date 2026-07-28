# Continuidad legacy v0.3.0 → v1.0.0

## Estado observado

```yaml
live_MVP_url: https://ricardojuanmorales.github.io/ai-storylab-1/
HTTP_status: 200
Pages_build_type: legacy
Pages_source_branch: gh-pages
Pages_source_path: /
legacy_storage_keys:
  - aistorylab_student_progress_v0_2
  - aistorylab_group_progress_v0_2
```

## Rutas preparadas, todavía no desplegadas

- `/ai-storylab-1/legacy/v0.3.0/`: snapshot navegable construido desde `99_ARCHIVO_HISTORICO/Versiones_Proyecto/v0_3_pre_N3/source`.
- `/ai-storylab-1/legacy/bridge/`: inspección y respaldo humano de las claves históricas.

## Contrato

- El puente usa `getItem` y nunca escribe o borra claves.
- El respaldo conserva el texto exacto y SHA-256.
- La conversión semántica a schemas v1 queda diferida.
- El deployment público continúa bloqueado.
- La fuente Pages legacy no se cambia durante este hito.

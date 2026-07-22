# H08-5.3 · Importación no confiable y staging inmutable

## Propósito

Recibir un archivo local como entrada no confiable, aplicar límites y
validaciones por etapas, comprobar su integridad y conservarlo únicamente como
candidato inmutable. Este hito no migra, no confirma y no persiste.

## Flujo

```text
metadata del archivo
→ límite de 1 MiB antes de lectura
→ lectura local de bytes
→ UTF-8 estricto
→ JSON parse
→ objeto superior
→ profundidad <= 32
→ nodos <= 20 000
→ schema de paquete estricto
→ invariantes del proyecto
→ SHA-256 del payload canónico
→ staging inmutable
```

## Frontera del hito

```yaml
alpha_2: VALIDATED_AND_STAGED
alpha_1: VALIDATED_AND_STAGED_WITHOUT_MIGRATION
future_schema: SAFE_REJECTION
legacy_v0_3: NOT_STAGED
repository_dependency: NONE
repository_save: IMPOSSIBLE_BY_CONSTRUCTION
human_confirmation: DEFERRED_TO_H08_5_4
migration: DEFERRED_TO_H08_5_4
semantic_roundtrip: DEFERRED_TO_H08_5_4
UI_file_picker: DEFERRED_TO_H08_5_5
```

El staging conserva exactamente el paquete validado y devuelve al exterior un
resumen que no incluye seudónimo, contexto personal ni texto de reflexiones.

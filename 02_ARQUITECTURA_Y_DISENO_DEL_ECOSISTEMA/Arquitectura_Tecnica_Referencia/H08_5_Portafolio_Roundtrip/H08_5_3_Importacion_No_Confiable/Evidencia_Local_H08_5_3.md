# Evidencia local H08-5.3

```yaml
verified_at: 2026-07-22T15:27:04Z
focused_tests: PASS
full_verify: PASS
repository_dependency: NONE
repository_save: IMPOSSIBLE_BY_CONSTRUCTION
network_access: NONE
migration: DEFERRED
human_confirmation: DEFERRED
```

## Propiedades comprobadas

- el tamaño declarado se valida antes de leer;
- el tamaño real se vuelve a comprobar;
- UTF-8 inválido y JSON malformado se rechazan;
- el nivel superior debe ser un objeto;
- profundidad y nodos tienen límites explícitos;
- el schema estricto rechaza campos inesperados;
- el checksum cubre el payload canónico;
- una reflexión privada invalida el paquete;
- alpha.1 y alpha.2 pueden quedar staged sin migración;
- el candidato y sus estructuras anidadas están congelados;
- descartar elimina el candidato sin persistencia;
- ninguna ruta de H08-5.3 recibe un repositorio.

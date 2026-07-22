# Auditoría estratégica y longitudinal · H08-5

## Alcance

La auditoría recorre H08-5.0 a H08-5A sobre PR #62 y el rango
`0efd5535cd796cb16b3f77518a6f82614a155a6e..ee14ee6c5962ff3acdbee1e80ac25ea4df87b182`.

## Resultado

```yaml
technical_result: PASS
governance_result: PASS
functional_head: 7b0131393ee0f8428743582c6750e1bb40774e8b
checkpoint_head: ee14ee6c5962ff3acdbee1e80ac25ea4df87b182
commits_reviewed: 12
changed_routes: 146
blocking_findings: 0
non_blocking_observations: 1
human_verdict: PASS
```

## Logros longitudinales

1. **Contrato antes de mutación.** La exportación e importación se diseñaron
   después de congelar privacidad, identidad, integridad y compatibilidad.
2. **Agencia humana.** Ninguna descarga o importación ocurre sin preview y
   confirmación.
3. **Privacidad por construcción.** Las reflexiones privadas y de cuidado alto
   quedan fuera del paquete.
4. **Entrada no confiable.** Tamaño, parsing, estructura, schema, checksum,
   compatibilidad e invariantes se verifican antes de guardar.
5. **Reversibilidad.** La importación crea una copia y preserva relaciones.
6. **Equivalencia semántica.** El roundtrip preserva significado, orden y
   decisiones, sin exigir identidad binaria.
7. **Local-first verificable.** No se añadió red, backend, autenticación,
   telemetría ni publicación.
8. **Recuperación completa.** La copia importada sobrevive al remontaje.
9. **Reproducibilidad.** H08-5.6 eliminó una dependencia implícita escondida por
   `node_modules`.
10. **Checkpoint independiente.** H08-5A separó evidencia, recomendación y
    veredicto.

## Retos y aprendizaje

- diferenciación entre checkout canónico y `Downloads`;
- compatibilidad real con Bash de macOS;
- expansión explícita de archivos no rastreados;
- ubicación obsoleta de una auditoría vertical;
- dependencia `@vitejs/plugin-react` ausente del manifiesto;
- pausa estratégica insuficientemente visible en H08-5.5;
- corrección de la frontera de publicación de comentarios;
- códigos ANSI en logs de Vitest;
- reanudación con commit local no publicado;
- consistencia eventual de GitHub tras el push.

Las detenciones operacionales protegieron el repositorio. Cada incidente fue
convertido en mejora de protocolo, no ocultado como fricción accidental.

## Dictamen

H08-5 puede cerrarse documentalmente. El PR debe continuar Draft hasta una
decisión humana separada sobre Ready for Review.

# Plan de pruebas congelado H08-5.0

## H08-5.1 · Proyección

- orden canónico del portafolio;
- metadata mínima;
- privacidad mediante allowlist;
- preview puro e inmutable.

## H08-5.2 · Exportación

- confirmación requerida;
- canonicalización determinista;
- SHA-256 correcto;
- nombre de archivo seguro;
- cero descarga sin confirmación;
- cero red y cero publicación automática.

## H08-5.3 · Importación

- límite de bytes antes de lectura;
- JSON malformado;
- profundidad y nodos;
- campos inesperados;
- checksum inválido;
- reflexión privada;
- cero llamadas a `save` ante rechazo;
- mensajes accesibles y seguros.

## H08-5.4 · Compatibilidad y roundtrip

- alpha.2 aceptado;
- alpha.1 migrado a alpha.2;
- futura rechazada;
- legacy v0.3 rechazado;
- nuevo `project.id`;
- identificadores internos preservados;
- equivalencia positiva y negativa;
- recovery después de remontar.

## Gates

```yaml
focused_tests_per_hito: REQUIRED
typecheck: REQUIRED_WHEN_TYPES_CHANGE
full_verify: REQUIRED_AT_H08_5_5_AND_H08_5A
CI_Node_22: REQUIRED_AT_CHECKPOINT
CI_Node_24: REQUIRED_AT_CHECKPOINT
manual_diff_review: REQUIRED
ready_for_review: SEPARATE_AUTHORIZATION
merge: SEPARATE_AUTHORIZATION
```

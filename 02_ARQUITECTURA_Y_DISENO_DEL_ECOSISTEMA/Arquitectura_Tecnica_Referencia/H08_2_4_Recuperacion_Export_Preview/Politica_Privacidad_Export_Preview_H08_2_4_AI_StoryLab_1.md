# Política de privacidad · Export preview H08-2.4

## Inclusión

El paquete mantiene el proyecto validado y exige al menos un elemento de
portafolio.

Una reflexión solo puede incluirse cuando:

```text
selectedForExport = true
AND privacyClass ∈ {
  shareable_with_purpose,
  exportable_after_review
}
```

## Exclusión obligatoria

- `private`;
- `high_care`;
- cualquier reflexión no seleccionada;
- datos que no superen schema o invariantes.

## Separación de acciones

```text
previsualizar
≠ descargar
≠ importar
≠ publicar
```

H08-2.4 solo implementa la primera operación.

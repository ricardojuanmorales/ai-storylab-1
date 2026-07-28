# Disposición de RSV-03 y RSV-06 · V10-3

## RSV-03 · Soporte de navegadores

```yaml
previous_disposition: BLOCKING
V10_3_disposition: RESOLVED_WITH_BOUNDED_DECLARED_MATRIX
declared_browsers: "Safari 26.5.2, Google Chrome 150.0.7871.184, Firefox 152.0.1"
operating_system: "macOS 26.5.2"
protocol: local_http_preview
universal_support_claim: false
Windows_support_claim: false
future_version_support_claim: false
```

La reserva queda satisfecha únicamente para la matriz exacta registrada. Un
navegador ausente o una versión futura no recibe soporte por inferencia.

## RSV-06 · Revisión manual con lector de pantalla

```yaml
previous_disposition: BLOCKING
V10_3_disposition: RESOLVED_WITH_BOUNDED_MANUAL_ATTESTATION
technology: VoiceOver
browser: "Safari 26.5.2"
operating_system: "macOS 26.5.2"
result: PASS
external_audit: false
certification: false
```

La revisión cubrió landmarks, encabezado, nombres de controles, etiquetas,
enlace de salto, anuncios de estado y continuidad de foco en el recorrido
esencial. No certifica conformidad integral con WCAG ni otras combinaciones de
navegador y tecnología asistiva.

## Resultado

RSV-03 y RSV-06 dejan de bloquear el release dentro de los límites declarados.
Cualquier hallazgo futuro o ampliación de soporte deberá abrir una nueva
decisión; V10-3 no autorizó reparaciones.

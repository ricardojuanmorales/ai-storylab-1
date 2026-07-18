# Estrategia de migración · H08-3

```text
raw string
→ JSON.parse
→ detectar envelope y versión
→ validar schema de fuente
→ migrar copia
→ validar schema objetivo
→ validar invariantes
→ escribir en staging
→ confirmar
→ conservar o retirar fuente según política
```

## Salvaguardas

- ninguna migración automática de datos desconocidos;
- ninguna sobrescritura antes de validar;
- fallo deja la fuente intacta;
- errores públicos seguros;
- detalles técnicos controlados;
- fixtures sintéticos solamente;
- migración legacy v0.3 permanece diferida.

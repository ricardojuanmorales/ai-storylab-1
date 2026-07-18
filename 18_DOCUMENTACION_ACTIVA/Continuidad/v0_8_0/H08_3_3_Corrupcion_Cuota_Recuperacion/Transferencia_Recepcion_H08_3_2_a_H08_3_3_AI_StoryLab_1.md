# Transferencia y recepción · H08-3.2 a H08-3.3

## Fuente

```yaml
source_block: H08_3_2
source_commit: 6d46255b4f56ee134ffd554ae04afbcd63c9eba5
source_status: fulfilled
namespace_reservation: resolved
```

## Capacidades recibidas

- namespace estable `ai-storylab:storage:v1`;
- envelope v1;
- integridad SHA-256;
- índice metadata-only;
- recent separado;
- staging verificable;
- roll-forward determinista;
- compatibilidad raw alpha.1 y alpha.2;
- preservación de fuentes raw.

## Responsabilidad de H08-3.3

- agotar fault injection de interrupción y cuota;
- definir clasificación de corrupción;
- definir cuarentena lógica;
- limitar reparación automática;
- demostrar preservación del último snapshot válido;
- demostrar errores seguros e idempotencia.

## No transferido

- UI;
- red o nube;
- IndexedDB;
- importación o descarga;
- H08-3.4;
- H08-3A.

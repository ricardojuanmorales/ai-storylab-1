# Modelo de amenazas proporcional H08-2.4

| Riesgo | Control |
|---|---|
| JSON manipulado | schema e invariantes al cargar |
| datos corruptos | bloqueo y descarte explícito |
| cuota agotada | error tipado y rollback best-effort |
| storage bloqueado | fallback en memoria |
| referencia reciente huérfana | limpieza del puntero |
| reflexión privada exportada | filtro de privacidad |
| descarga accidental | preview sin enlace de descarga |
| lógica de storage en React | auditoría de arquitectura |
| red accidental | auditoría y offline guard |
| datos reales | política sintética y auditoría heurística |
| borrado accidental | confirmación en dos pasos |

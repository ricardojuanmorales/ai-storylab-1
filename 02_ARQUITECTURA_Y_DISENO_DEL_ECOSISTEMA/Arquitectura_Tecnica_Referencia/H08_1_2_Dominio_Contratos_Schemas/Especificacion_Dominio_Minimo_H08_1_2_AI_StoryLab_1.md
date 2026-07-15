# Especificación de Dominio Mínimo · H08-1.2

## Objetos incluidos

| Objeto | Responsabilidad |
|---|---|
| `LocalProfile` | identidad operativa mínima y seudónima |
| `CreativeProject` | agregado raíz del proceso creativo |
| `MissionProgress` | estado reversible de una misión |
| `ActivityResponse` | borrador o respuesta de actividad |
| `Evidence` | producto o huella formativa seleccionable |
| `Reflection` | reflexión privada o curada |
| `HumanDecision` | decisión explícita que preserva agencia |
| `PortfolioItem` | referencia curada a evidencia aceptada |
| `Portfolio` | orden y selección humana de evidencias |
| `FeatureFlags` | bloqueo explícito de capacidades diferidas |
| `ExportPackage` | paquete mínimo revisable y versionado |
| `ImportCandidate` | entrada no confiable antes de validación |

## Agregado raíz

`CreativeProject` es el agregado raíz inicial. Contiene referencias a misiones,
respuestas, evidencias, reflexiones, decisiones y portafolio.

No contiene:

- archivos binarios;
- datos grupales;
- perfiles reales obligatorios;
- credenciales;
- tokens;
- telemetría;
- historial de vigilancia;
- datos de IA embebida;
- enlaces privados de entrega.

## Identidad

Los identificadores son opacos. No codifican nombre, correo, institución, cohorte o
información sensible.

## Tiempo

Los timestamps son ISO 8601 y se obtendrán mediante un puerto `Clock`. El dominio
no invoca `Date.now()` directamente.

## Privacidad

- borradores y reflexiones son privados por defecto;
- compartir requiere selección explícita;
- exportar requiere revisión humana;
- el portafolio contiene referencias curadas, no copias automáticas;
- ningún objeto se vuelve compartible por disponibilidad técnica.

## Capacidades diferidas

Las banderas siguientes deben permanecer `false`:

- `facilitatorView`;
- `groupDashboard`;
- `embeddedAI`;
- `cloudSync`;
- `analytics`;
- `autoPublish`;
- `realData`.

H08-1.2 define contratos, no activa capacidades.

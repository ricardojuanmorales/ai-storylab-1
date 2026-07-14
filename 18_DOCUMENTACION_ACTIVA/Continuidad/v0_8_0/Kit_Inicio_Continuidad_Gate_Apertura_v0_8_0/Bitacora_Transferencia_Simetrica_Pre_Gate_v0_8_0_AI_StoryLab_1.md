# Bitácora de Transferencia Simétrica · Pre-Gate v0.8.0

**Baseline:** `a3a3aba6e6e26d005f78caa63bfef1f2bd378f17`
**Gate:** `GATE-V08-OPEN-001`
**Estado:** approved_with_reservations / awaiting merge PR #50

## Para PH

Preparar implementación modular, fixtures, pruebas y feature flags solo
después de aprobar el gate.

## Para IT

Revisar evidencia, datos sintéticos, trazabilidad, privacidad y riesgos de
interpretación investigativa.

## Para AT

Revisar experiencia creativa, libertad de exploración, curaduría y riesgo de
rigidez.

## Para la persona responsable

Decidir alcance, reservas, riesgos aceptados y estado del gate.

## Punto de entrada siguiente

1. revisar el kit;
2. revisar la matriz de criterios;
3. emitir comentario de hito;
4. decidir el gate;
5. solo si se aprueba, preparar H08-1.

## Límites heredados

```text
v0.8.0: not open
implementation: not authorized
DFUX-TRZ-005: blocked
data_real: prohibited
```


## Transferencia posterior a la decisión

<!-- H08_0_TRANSFER_POST_DECISION -->

```text
GATE-V08-OPEN-001: approved_with_reservations / effective_on_merge_PR_50
v0.8.0: open_limited / effective_on_merge_PR_50
implementation: authorized_for_H08-1_only / effective_on_merge_PR_50
DFUX-TRZ-005: resolved / effective_on_merge_PR_50
H08-0: completed / effective_on_merge_PR_50
next_hito: H08-1
```

### Reservas heredables

- datos exclusivamente sintéticos;
- sin backend, cloud, autenticación ni IA embebida;
- sin Vista del Facilitador, dashboard, analíticas ni vigilancia;
- sin stack final irreversible;
- feature flags desactivados por defecto;
- contratos, schemas, fixtures y pruebas reproducibles;
- seguridad y accesibilidad mínimas desde H08-1;
- revisión PH-IT-AT documentada;
- checkpoint humano antes de H08-2.

### Punto de entrada siguiente

1. sincronizar `main` después del merge del PR #50;
2. verificar el nuevo baseline;
3. abrir una nueva sesión H08-1;
4. generar el kit de inicio y continuidad H08-1;
5. no implementar H08-2 por inferencia.

# Disposición final de las ocho reservas heredadas · V10-2

## Regla de decisión

V10-2 clasifica las reservas sin repararlas. Cada reserva recibe una disposición
final entre `RESOLVED`, `ACCEPTED_LIMITATION`, `NOT_CLAIMED`, `DEFERRED` o
`BLOCKING`.

Una reserva clasificada no desaparece de la historia. Su efecto, condición y
autoridad quedan explícitos para los hitos posteriores.

## Resumen de disposición

```yaml
reservations_total: 8
RESOLVED: 1
ACCEPTED_LIMITATION: 2
NOT_CLAIMED: 2
DEFERRED: 1
BLOCKING: 2
automatic_repairs: 0
functional_changes: 0
```

### RSV-01 · Publicación del artefacto

**Disposición:** `DEFERRED`.

La publicación se mantiene reservada a una decisión humana separada después de
`GATE-V10-RELEASE`. No bloquea la preparación de la candidata, pero sí impide
cualquier acción de publicación antes de esa autoridad.

### RSV-02 · Identidad binaria entre sistemas operativos

**Disposición:** `ACCEPTED_LIMITATION`.

No se afirmará identidad binaria universal. V10-5 deberá definir un entorno
canónico de construcción, reproducibilidad acotada, artefacto, checksums y
atestaciones. La limitación no bloquea el release si la afirmación permanece
dentro de esos límites.

### RSV-03 · Soporte de navegadores

**Disposición:** `BLOCKING`.

La publicación requiere una matriz mínima de navegadores declarados y evidencia
exacta. V10-3 deberá seleccionar y validar únicamente los navegadores
autorizados. No se infiere soporte universal.

### RSV-04 · Soporte de Windows

**Disposición:** `NOT_CLAIMED`.

Windows no forma parte automática del soporte declarado. Esta reserva no bloquea
la publicación si Windows se excluye claramente de la matriz y de la
documentación. Incluirlo requeriría evidencia autorizada posterior.

### RSV-05 · Protocolo file://

**Disposición:** `ACCEPTED_LIMITATION`.

El runtime declarado utiliza un servidor local y no exige `file://`. La
documentación deberá indicar el protocolo soportado y evitar cualquier
afirmación de compatibilidad con `file://`.

### RSV-06 · Revisión manual con lector de pantalla

**Disposición:** `BLOCKING`.

La accesibilidad básica pertenece al alcance mínimo. V10-3 deberá realizar una
revisión manual autorizada con tecnología asistiva o elevar una decisión humana
explícita de reducción de alcance. V10-2 no autoriza reparaciones.

### RSV-07 · Usabilidad con participantes y efectividad educativa

**Disposición:** `NOT_CLAIMED`.

La efectividad educativa y la usabilidad poblacional no son requisitos del
release actual. Cualquier investigación con participantes o datos reales
requiere autorización, protocolo y gobernanza separados.

### RSV-08 · Independencia organizacional o de tercero

**Disposición:** `RESOLVED`.

La reserva se resuelve por precisión de lenguaje: H09-A y V10-A se describen
como checkpoints independientes en sentido procedimental, no como auditorías
externas, organizacionalmente independientes ni de tercero.

## Resultado del hito

V10-2 no elimina limitaciones ni fabrica evidencia. Produce un mapa de
responsabilidad:

- V10-3 recibe RSV-03 y RSV-06 como condiciones bloqueantes;
- V10-5 recibe RSV-02 para política de reproducibilidad y artefacto;
- V10-7 conserva límites de soporte y lenguaje;
- la persona retiene RSV-01 como decisión post-gate;
- RSV-04, RSV-05, RSV-07 y RSV-08 no requieren reparación automática.

El cierre de V10-2 y la apertura de V10-3 requieren decisión humana.

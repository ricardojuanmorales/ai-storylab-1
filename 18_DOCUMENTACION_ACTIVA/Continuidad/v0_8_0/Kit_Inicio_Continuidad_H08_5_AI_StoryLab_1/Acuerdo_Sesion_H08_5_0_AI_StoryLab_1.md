# Acuerdo de Sesión H08-5.0 · Freeze de Contratos

```yaml
alignment:
  human_agreement: SUFFICIENT_TO_OPEN_SESSION
  protocol_version: 3.1
  protocol_status: RATIFIED_FOR_THIS_SESSION
  baseline: 0efd5535cd796cb16b3f77518a6f82614a155a6e
  internal_milestone: H08-5.0
```

## Hechos confirmados

- H08-4 está cerrado documentalmente y fusionado mediante PR #61.
- `main` remoto coincide exactamente con el baseline declarado.
- M1–M4 son funcionales y recuperables localmente.
- El portafolio heredado es ordenado y reversible.
- El preview final heredado permanece en memoria y excluye reflexiones privadas.
- Importación y roundtrip no están implementados.
- El Protocolo v3.1 y su Bitácora están `APROBADOS_PARA_USO_H08`.
- Ready, merge y H08-6 requieren autorizaciones separadas.

## Inferencias de trabajo

- La frontera principal de seguridad estará entre el archivo externo no confiable
  y el estado persistido.
- La equivalencia semántica requerirá una normalización canónica y no puede
  reducirse a igualdad byte por byte.
- La exportación deberá usar una allowlist explícita para proteger reflexiones
  privadas.
- La validación completa debe preceder cualquier mutación o sobrescritura.

Estas inferencias orientan H08-5.0, pero no sustituyen decisiones humanas sobre
las reservas técnicas abiertas.

## Preguntas abiertas

1. ¿Qué estrategia de importación se adoptará ante un proyecto existente?
2. ¿Cuál será el tamaño máximo aceptable del paquete?
3. ¿Qué algoritmo de checksum será canónico?
4. ¿Qué campos integran exactamente la equivalencia semántica?
5. ¿Qué identificadores pueden regenerarse sin alterar el significado?
6. ¿Qué versiones anteriores podrán migrarse y cuáles deberán rechazarse?

## Decisiones vigentes

- una rama y un Draft PR para todo H08-5;
- primer commit exclusivo de kit y activación;
- último commit exclusivo de cierre documental;
- datos sintéticos y operación offline;
- no backend, auth, telemetría, nube o publicación automática;
- comentarios extendidos preparados y revisados en Canvas;
- publicación manual del comentario revisado como aprobación humana implícita;
- H08-5.0 congela contratos antes de cualquier implementación funcional.

## Propósito humano

Permitir que una persona revise, exporte, transporte e importe su proyecto
completamente offline, sin perder intención creativa, sin exponer reflexiones
privadas y sin sufrir mutaciones cuando un paquete sea rechazado.

## Alcance permitido de H08-5.0

- especificación;
- contratos y schema de intercambio;
- invariantes;
- fixtures exclusivamente sintéticos;
- threat model de importación;
- matriz de compatibilidad;
- definición comprobable de equivalencia semántica;
- plan de pruebas y gates internos.

## Alcance prohibido

- backend, autenticación, telemetría o red obligatoria;
- datos reales;
- publicación automática;
- binarios multimedia;
- colaboración o galería;
- capacidades de H08-6;
- mutación del estado antes de validación completa.

## Riesgos prioritarios

- mutación prematura;
- payload excesivo o profundamente anidado;
- claves inesperadas;
- filtración de reflexiones privadas;
- aceptación de versiones futuras;
- equivalencia superficial;
- sobrescritura no confirmada;
- ampliación accidental hacia H08-6.

## Pruebas que deberán demostrar progreso

- schema estricto y rechazo de claves inesperadas;
- límites previos de tamaño y estructura;
- errores tipados y accesibles;
- allowlist de privacidad;
- versión futura rechazada;
- cero mutación ante cualquier rechazo;
- casos positivos y negativos de equivalencia semántica;
- cero red y cero telemetría;
- regresión preservada de M1–M4.

## Roles

### Humano

Define sentido, resuelve reservas, acepta contratos y autoriza gates.

### IA

Mantiene trazabilidad, diferencia hechos de inferencias, propone alternativas,
redacta contratos y detecta contradicciones.

### Máquina

Verifica hashes, refs, diffs, pruebas, CI y estados remotos. No decide valores ni
aceptación.

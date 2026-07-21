# Arquitectura de trabajo H08-4

## Principio

Generalizar lo suficiente para soportar cuatro misiones, sin construir una
plataforma abstracta mayor que el problema real.

## Capas

```text
domain
  mission catalog
  mission progress
  evidence, reflection, human decision

application
  reusable mission cycle
  navigation and reopening
  complete arc orchestration

ports
  project repository
  clock
  identifiers

adapters
  hardened local persistence

presentation
  shared mission shell
  mission-specific activity surfaces
  complete arc navigation

schemas
  current serialized contract
  changes only through explicit decision
```

## Estrategia candidata

1. caracterizar el comportamiento actual de M1;
2. extraer contratos compartidos mediante pruebas;
3. integrar M2;
4. integrar M3 con representación honesta de multimodalidad;
5. integrar M4 sin invadir H08-5;
6. validar navegación y recuperación del arco completo.

La estrategia es candidata. La implementación puede elegir otra forma si
mantiene los contratos, el alcance y la evidencia.

## Prohibiciones

- refactor masivo sin pruebas de caracterización;
- framework interno innecesario;
- duplicar el motor por misión;
- acoplar dominio a React o localStorage;
- añadir red o dependencias runtime sin autorización;
- presentar metadatos como si fueran archivos multimedia reales.

## Política de cardinalidad ratificada

```text
M1 evidence: single         reflection: zero_or_one
M2 evidence: single         reflection: zero_or_one
M3 evidence: multiple       reflection: zero_or_one
M4 evidence: single record  reflection: zero_or_one
```

El contrato de aplicación debe permitir crear evidencia adicional solo cuando la
política de misión sea `multiple`. Las actualizaciones deben usar identificadores
explícitos. No se cambia el schema serializado.

# Bitácora de Sesión · H08-1.2

**Fecha:** 2026-07-15
**Baseline:** `5a5c4f9231ef092b3496a0019de1940fb19c14e6`

## Evidencia de entrada

- PR #53 fusionado;
- H08-1.1 aprobado e integrado;
- transferencia simétrica efectiva;
- dominio debe permanecer independiente;
- imports legacy prohibidos por defecto;
- H08-2 bloqueado.

## Decisiones

1. TypeScript gobierna semántica interna.
2. JSON Schema 2020-12 gobierna fronteras serializadas.
3. La librería de validación permanece diferida.
4. La paridad será ejecutable en H08-1.3.
5. El schema inicial es `0.8.0-alpha.1`.
6. La importación v0.3 requiere migración explícita.
7. Datos grupales y capacidades diferidas permanecen bloqueados.

## Resultado

Contratos y schemas de baseline, sin interfaz, adaptadores, persistencia concreta ni
flujo funcional.

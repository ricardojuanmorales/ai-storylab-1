# Checklist de salida H08-2.1

## Contratos

- [x] `MissionDefinition` definido sin acoplarlo a schema.
- [x] inputs de casos de uso definidos.
- [x] resultados tipados preservados.
- [x] presentación sin acceso directo al agregado.

## Invariantes

- [x] INV-009 tiene prueba nominal.
- [x] INV-010 tiene prueba nominal.
- [x] catálogo de invariantes actualizado.

## Arquitectura

- [x] ADR de presentación provisional.
- [x] ADR de persistencia propuesto.
- [x] cero dependencia runtime nueva.
- [x] cero capa `presentation`.

## Experiencia

- [x] Gherkin definido.
- [x] wireframes textuales definidos.
- [x] teclado y foco especificados.
- [x] privacidad y agencia visibles.

## Verificación requerida al aplicar

- [ ] `npm run verify` verde.
- [ ] 12 archivos de prueba.
- [ ] 65 pruebas.
- [ ] `git diff --check` verde.
- [ ] PR #59 permanece Draft.

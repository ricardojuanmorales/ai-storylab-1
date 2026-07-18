# Arquitectura funcional H08-2.3

## Composición

```text
main.tsx
→ crea repositorio en memoria
→ crea reloj
→ crea generador de IDs del navegador
→ crea StoryLabUseCases
→ inyecta servicios en App
```

## Dirección

```text
presentation → application contracts
presentation → domain types
presentation ↛ adapters

composition root → presentation
composition root → application
composition root → adapters
```

## Motor

`createCreativeCycleUseCases` implementa:

- startMission;
- reopenMission;
- saveTextActivity;
- createTextEvidence;
- saveReflection;
- decideEvidence;
- curatePortfolio;
- removePortfolioItem.

`previewExport` permanece fuera del runtime H08-2.3 y se implementará en
H08-2.4.

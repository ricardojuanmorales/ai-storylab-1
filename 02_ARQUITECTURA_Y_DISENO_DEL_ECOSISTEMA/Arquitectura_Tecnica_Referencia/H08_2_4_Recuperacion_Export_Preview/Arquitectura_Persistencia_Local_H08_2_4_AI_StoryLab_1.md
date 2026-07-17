# Arquitectura de persistencia local H08-2.4

## Flujo de escritura

```text
caso de uso
→ validateProjectInvariants
→ ProjectRepository.save
→ validateProjectSnapshot
→ JSON.stringify
→ clave versionada de proyecto
→ puntero al proyecto reciente
```

## Flujo de recuperación

```text
App.useEffect
→ StoryLabUseCases.recoverProject
→ RecoverableProjectRepository.loadMostRecent
→ JSON.parse
→ JSON Schema 2020-12
→ invariantes
→ CreativeProject
→ interfaz
```

## Fronteras

- `presentation` no importa adaptadores;
- `application` no usa APIs del navegador;
- `main.tsx` selecciona storage o memoria;
- el adaptador recibe `StorageLike`;
- el dominio no conoce `localStorage`;
- H08-3 podrá sustituir o endurecer el adaptador.

## Claves

```yaml
latest: ai-storylab:0.8.0-alpha.1:latest-project
project: ai-storylab:0.8.0-alpha.1:project:<ProjectId>
```

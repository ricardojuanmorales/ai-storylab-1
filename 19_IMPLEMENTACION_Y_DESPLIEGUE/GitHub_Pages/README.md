# GitHub Pages · AI StoryLab 1

## Estado

- **Estado V10-PAGES:** `PREEXISTING_CONFIGURATION_PRESERVED`
- **Base:** `/ai-storylab-1/`
- **URL prevista:** `https://ricardojuanmorales.github.io/ai-storylab-1/`
- **URL remota observada:** `https://ricardojuanmorales.github.io/ai-storylab-1/`
- **Configuración previa:** `True`
- **Build type previo:** `legacy`
- **Compatibilidad:** `SOURCE_SWITCH_REQUIRED_BEFORE_DEPLOYMENT`
- **Workflow:** `.github/workflows/ai-storylab-pages.yml`

Se detectó y preservó una configuración preexistente (legacy, estado built, HTTP 200). V10-PAGES no ejecutó un deployment nuevo.

Los PR construyen, prueban y cargan un artefacto temporal. Los pushes a `main`
construyen y prueban, pero no despliegan. Un deployment nuevo solo puede ocurrir
con `workflow_dispatch`, `deploy=true`, rama `main` y autorización humana posterior.

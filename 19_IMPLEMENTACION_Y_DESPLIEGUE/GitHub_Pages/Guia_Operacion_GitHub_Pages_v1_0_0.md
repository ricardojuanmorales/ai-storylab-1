# Guía de operación · GitHub Pages v1.0.0

```bash
cd apps/storylab
npm ci --ignore-scripts
AI_STORYLAB_BASE_PATH=/ai-storylab-1/ npm run build
touch dist/.nojekyll
node tools/verify-pages-build.mjs dist /ai-storylab-1/
```

Estado remoto previo: `PREEXISTING_CONFIGURATION_PRESERVED`. Compatibilidad: `SOURCE_SWITCH_REQUIRED_BEFORE_DEPLOYMENT`.

Después de merge y autorización específica, revisar la fuente de Pages. Si el
build type previo es `legacy`, cambiarlo a GitHub Actions mediante una autoridad
separada. Luego proteger el entorno `github-pages`, ejecutar el workflow desde
`main` con `deploy=true` y verificar `https://ricardojuanmorales.github.io/ai-storylab-1/`.

V10-PAGES no cambia la configuración remota ni ejecuta un deployment.

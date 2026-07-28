# Guía técnica y de verificación · AI StoryLab 1 v1.0.0

Runtime canónico: `apps/storylab/`.

```bash
cd apps/storylab
npm ci --ignore-scripts
npm run dev
AI_STORYLAB_SOURCE_COMMIT="$(git rev-parse HEAD)" npm run verify
npm run build
```

```yaml
candidate_version: 1.0.0-rc.1
source_commit: 533fcf28a0c9053b7da79ca70ded80450d94cf35
candidate_sha256: 6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c
stable_version: NOT_YET_ASSIGNED
```

La identidad estable `1.0.0` requerirá un source commit, ZIP y SHA-256 nuevos.

## Build de GitHub Pages
```bash
AI_STORYLAB_BASE_PATH=/ai-storylab-1/ npm run build
touch dist/.nojekyll
node tools/verify-pages-build.mjs dist /ai-storylab-1/
```
El deployment requiere `workflow_dispatch`, `deploy=true`, `main` y autorización.

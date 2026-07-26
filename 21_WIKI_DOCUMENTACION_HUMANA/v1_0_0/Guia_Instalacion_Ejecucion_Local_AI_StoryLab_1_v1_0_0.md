# Instalación y ejecución local · AI StoryLab 1 v1.0.0

## Código fuente
Requiere Git, Node.js 22 a 26 y npm.

```bash
git clone https://github.com/ricardojuanmorales/ai-storylab-1.git
cd ai-storylab-1/apps/storylab
npm ci --ignore-scripts
npm run dev
```

## ZIP estable
Se activará cuando exista la GitHub Release `v1.0.0`.

```bash
unzip ai-storylab-1_1.0.0_<commit>.zip
cd ai-storylab-1/app
python3 -m http.server 4173 --bind 127.0.0.1
```

Abre `http://127.0.0.1:4173`. La ejecución mediante `file://` no está soportada.

El hash de la candidata interna actual es `6def29a246180ec5b6f65944bec207c90a86d50bcc6823e2988865504c0cda7c` y no debe presentarse como hash de `v1.0.0`.

## GitHub Pages

La URL prevista es `https://ricardojuanmorales.github.io/ai-storylab-1/`. Se detectó y preservó una configuración preexistente (legacy, estado built, HTTP 200). V10-PAGES no ejecutó un deployment nuevo.

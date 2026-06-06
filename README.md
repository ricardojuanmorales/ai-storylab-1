# AI StoryLab MVP

**AI StoryLab: Constructor Ético de Historias Multimedia** es una aplicación educativa local-first para acompañar un taller de nueve sesiones donde estudiantes de escuela superior crean una historia multimedia asistida por IA, documentan su proceso en un portafolio, ganan badges y presentan una producción final en video.

## Alcance del MVP

Este MVP:

- funciona sin backend;
- no usa autenticación;
- no usa Supabase;
- guarda progreso en `localStorage`;
- permite exportar/importar progreso en JSON;
- permite monitoreo grupal por importación de JSON estudiantiles;
- construye un portafolio emergente por sesiones;
- registra metadatos de entrega final de video sin almacenar el video.

## No incluye todavía

- login;
- base de datos remota;
- subida de archivos;
- almacenamiento de videos;
- APIs externas de IA;
- galería pública dinámica.

## Instalación futura sugerida

```bash
npm install
npm run dev
```

## Principio rector

> La IA puede asistir el desarrollo, pero la gobernanza humana sostiene el sentido educativo, ético y técnico del proyecto.

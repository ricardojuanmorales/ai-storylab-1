# AI StoryLab · Constructor Ético de Historias Multimedia

MVP **local-first** para un taller de **nueve sesiones** en el que estudiantes de escuela
superior crean una historia multimedia asistida por IA en PowerPoint con VoiceOver,
culminando en un video final MP4 presentado en una premier.

Esta versión funciona **completamente en el navegador**: sin autenticación, sin
backend, sin base de datos remota, sin APIs de IA y sin subir archivos. El progreso se
guarda en `localStorage` y se exporta/importa como JSON.

## Cómo correr

Requisitos: Node.js 18+ (probado con Node 22).

```bash
npm install
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Qué incluye

- **Inicio narrativo** con Avatar Mentor y accesos a glosario, herramientas y vista facilitador.
- **Perfil local** (código, seudónimo, grado, cohorte, modalidad, equipo, proyecto, docente, facilitador, sponsor).
- **Dashboard del estudiante**: misiones / insignias / portafolio (X/9), fase actual, próxima misión y estado de entrega final.
- **Mapa de 9 misiones** (S1–S9) con estado por misión.
- **Vista de misión**: pregunta guía, objetivos, actividad lúdica, evidencia, herramienta, prompt, decisión humana, reflexión ética, guardar y completar.
- **Portafolio emergente**: se construye solo a partir del trabajo en sesiones; texto listo para copiar/pegar a Word.
- **Muro de insignias** con competencias asociadas.
- **Glosario** y **Tablero de herramientas** con búsqueda y filtros.
- **Exportar/Importar** progreso individual en JSON (con validación y advertencia antes de reemplazar).
- **Dashboard grupal del facilitador**: importa múltiples JSON, fusiona por `student_code`, conserva el más reciente, muestra tabla e indicadores agregados y exporta `group_progress.json`.
- **Estación de Entrega Final**: registra metadatos del video (no almacena el archivo).

## Regla pedagógica clave

El **portafolio no se hace al final**: *emerge* automáticamente de las entradas que
registras en cada misión. Una misión se marca completada cuando tiene evidencia mínima,
decisión humana, reflexión ética y su entrada de portafolio completa.

## Estructura

```
src/
├── App.jsx                # Router simple + pantallas Inicio y Perfil
├── components/            # UI por pantalla
├── data/                  # JSON públicos: sessions, badges, glossary, tools, competencies
├── utils/                 # Lógica desacoplada (storage, progreso, portafolio, export/import, grupo, validación)
├── templates/             # Estructuras por defecto (progreso individual y grupal)
└── styles/global.css      # Estilos del laboratorio
```

## Modelo de datos

- Progreso individual: `export_type: "student_progress"`, `schema_version: "0.2.0"`.
- Progreso grupal: `export_type: "group_progress"`, `schema_version: "0.2.0"`.
- Nombre de exportación individual: `ai-storylab-progreso-[student_code]-[fecha].json`.

## Migración futura (preparada, no implementada)

Toda la persistencia pasa por `src/utils/localStorage.js` (carga/guarda) y la lógica de
negocio vive en `src/utils/*` como funciones puras. Para migrar a una base de datos,
basta con reemplazar el adaptador de almacenamiento por llamadas a una API, sin tocar los
componentes.

## Privacidad

Este MVP guarda progreso localmente en este navegador. No sube datos a una base de datos.
Exporta tu JSON para respaldo y entrégalo solo al facilitador si se solicita. **No escribas
información personal sensible.** El video final **no** se guarda en la aplicación: se entrega
en el espacio indicado por el facilitador; aquí solo se registran estado, nombre, ubicación
y validaciones.

## No incluido por diseño

Sin login, sin Supabase, sin APIs externas, sin subida de archivos, sin chat, sin galería
dinámica, sin generación automática de Word y sin estado global complejo.

# 🎬 AI StoryLab — Constructor Ético de Historias Multimedia

> *"Tú tienes la historia. La IA tiene herramientas. Juntos crean algo que no existía antes."*
> — **Profesor Aión**, Mentor Transdisciplinario

¡Bienvenido/a a **AI StoryLab**! 🚀✨

Un laboratorio digital donde estudiantes de escuela superior se convierten en **creadores, narradores y pensadores éticos** mientras descubren el poder —y la responsabilidad— de trabajar con inteligencia artificial.

---

## ✨ ¿Qué es AI StoryLab?

AI StoryLab es una aplicación educativa **local-first** — todo ocurre en tu navegador, sin crear cuentas ni subir datos — que guía a los estudiantes a través de **9 misiones** para crear una historia multimedia asistida por IA, presentada como un video final en una premier real 🎉.

| 🎯 | Lo que ofrece |
|---|---|
| 📚 | 9 sesiones de aprendizaje estructurado |
| 🏆 | 9 insignias desbloqueables por misión |
| 📁 | Portafolio emergente que crece automáticamente |
| 🤖 | Herramientas de IA responsable en cada paso |
| 🎥 | Entrega final como video MP4 con VoiceOver |
| 👩‍🏫 | Dashboard grupal para facilitar sin backend |

---

## 🗺️ El Viaje: Las 9 Misiones

El taller está dividido en **4 fases** que te llevan de la reflexión ética hasta la premier:

### 🟣 Fase 1 — Fundamentos Éticos

| # | Misión | Pregunta guía | Insignia |
|---|---|---|---|
| S1 | 🧭 **Brújula Ética** | ¿Qué principios éticos guiarán mi uso de la IA? | 🧭 Brújula Ética |
| S2 | 💡 **Idea Central** | ¿Cuál es el mensaje que mi historia quiere dejar? | 💡 Idea Clara |

### 🔵 Fase 2 — Construcción Narrativa

| # | Misión | Pregunta guía | Insignia |
|---|---|---|---|
| S3 | 🎭 **Avatar o Avatares** | ¿Quién protagoniza mi historia y qué lo hace creíble? | 🎭 Creador de Avatares |
| S4 | 📖 **Narrativa** | ¿Cómo se estructura mi historia de principio a fin? | 📖 Arquitecto Narrativo |
| S5 | 🎨 **Mundo Visual** | ¿Qué estilo visual representa mejor mi historia? | 🎨 Diseñador de Mundos |

### 🟠 Fase 3 — Producción Multimedia

| # | Misión | Pregunta guía | Insignia |
|---|---|---|---|
| S6 | 🎙️ **Voz y Sonido** | ¿Cómo suena mi historia y qué emoción transmite? | 🎙️ Voz con Propósito |
| S7 | 🔧 **Prototipo** | ¿Cómo se integra todo en un primer borrador? | 🔧 Constructor de Prototipos |

### 🟢 Fase 4 — Curaduría y Entrega

| # | Misión | Pregunta guía | Insignia |
|---|---|---|---|
| S8 | ✅ **Curaduría Final** | ¿Qué debo pulir para comunicar con claridad y ética? | ✅ Curador Responsable |
| S9 | ⭐ **Premier y Entrega Final** | ¿Cómo presento y entrego mi historia con orgullo? | ⭐ Estrella de la Premier |

---

## 📁 Tu Portafolio Emergente

> *El portafolio no se hace al final. Emerge solo, misión a misión.*

Cada vez que completas una misión, tu portafolio crece automáticamente con lo que escribiste y registraste. Al llegar a S9 tendrás un documento completo listo para copiar a Word. **Es un regalo del proceso** 🎁.

Para completar una misión necesitas tres cosas:
- ✍️ **Evidencia** de lo que creaste
- 🧠 **Decisión humana** documentada (lo que decidiste tú, no la IA)
- 💭 **Reflexión ética** sobre el proceso

---

## 🤖 IA Responsable — Nuestra Promesa

En AI StoryLab, la IA es una **herramienta, no una autora**. Nuestros principios:

1. 🧠 **Tú decides** — Cada misión requiere una decisión humana documentada. La IA sugiere; tú eliges.
2. 🔍 **Transparencia siempre** — Registramos qué creó la IA y qué creaste tú. Sin trampa.
3. 🛡️ **Privacidad local-first** — Tu progreso no sale del navegador a menos que tú lo exportes.
4. 📜 **Atribución honesta** — Citamos recursos, declaramos uso de IA, respetamos derechos de autor.
5. 💬 **Reflexión en cada sesión** — No solo creamos: pensamos sobre lo que estamos creando.

> ⚠️ **La IA no puede reemplazar tu voz, tu historia ni tu reflexión. Esas son exclusivamente tuyas.**

---

## 🔒 Privacidad Local-First

| ✅ Lo que SÍ hace | ❌ Lo que NO hace |
|---|---|
| Guarda progreso en `localStorage` | Enviar datos a servidores |
| Exporta/importa progreso en JSON | Requiere login o cuenta |
| Registra metadatos del video final | Almacenar tu video |
| Permite monitoreo grupal por JSON | Conectarse a APIs externas |

> 🚨 **No escribas información personal sensible.** El JSON de exportación es solo para tu respaldo y, si lo solicita, para el facilitador.

---

## 👩‍🏫 Para el Facilitador

El **Dashboard Grupal** permite sin necesidad de backend:

- 📥 Importar los JSON individuales de cada estudiante
- 📊 Ver tabla de progreso de todo el grupo
- 📈 Indicadores agregados (misiones completadas, insignias, entrega final)
- 📤 Exportar `group_progress.json` como respaldo

---

## 🚀 Cómo Correr el Proyecto

**Requisitos:** Node.js 18+ (probado con Node 22)

```bash
npm install
npm run dev      # desarrollo → http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

---

## 🏗️ Estructura del Proyecto

```
src/
├── App.jsx                # Router + pantallas Inicio y Perfil
├── components/            # UI por pantalla
├── data/                  # JSON: sesiones, insignias, glosario, herramientas
├── utils/                 # Lógica pura (storage, progreso, portafolio...)
├── templates/             # Estructuras por defecto (progreso individual y grupal)
└── styles/global.css      # Estilos del laboratorio
governance/                # Políticas, gobernanza y registro de decisiones
docs/                      # Guías de usuario y documentación oficial
prompts/                   # Prompts de trabajo con agentes IA
primers/                   # Contexto rápido para activar agentes IA
logs/                      # Bitácoras de sesiones de desarrollo
compendia/                 # Compendios de conocimiento del proyecto
```

---

## 🌱 Hoja de Ruta (Futuro)

Fuera del alcance del MVP, planificado para versiones futuras:

- 🔐 Autenticación (OAuth / Supabase)
- ☁️ Base de datos remota
- 📤 Subida de archivos y videos
- 🤖 APIs externas de IA en tiempo real
- 🖼️ Galería pública dinámica
- 📄 Generación automática de portafolio en Word

---

## 📄 Licencia

**CC BY-NC-ND 4.0** — Uso educativo y no comercial.

---

*Construido con 💜 para estudiantes que quieren contar historias con propósito.*

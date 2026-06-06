# 👩‍🏫 Guía del Facilitador — AI StoryLab

**Versión:** 0.2.0 · **Fecha:** 2026-06-05 · **Audiencia:** Facilitadores, docentes y coordinadores del taller

---

## 🎯 Tu Rol en el Taller

Como facilitador/a, tu rol es:

1. **Guiar** el proceso pedagógico de las 9 sesiones
2. **Monitorear** el progreso del grupo sin acceder a datos privados
3. **Apoyar** a los estudiantes cuando se atoran en la aplicación
4. **Recopilar** los JSON de progreso y consolidar el reporte grupal
5. **Custodiar** la entrega final de videos en el espacio designado

> 💡 La aplicación no requiere que te conectes a ningún servidor. Todo ocurre en tu navegador y en el de cada estudiante.

---

## 🖥️ Acceder al Dashboard Grupal

Desde la pantalla de inicio:

1. Haz clic en **Vista Facilitador** (esquina superior derecha o menú)
2. No se requiere contraseña en el MVP — esta vista es de confianza operativa

> ⚠️ **Nota de seguridad MVP:** En esta versión, cualquier persona con acceso al dispositivo puede entrar a la vista de facilitador. Usa el dispositivo del taller en un entorno controlado.

---

## 📥 Importar el Progreso de los Estudiantes

El dashboard grupal funciona por **importación de archivos JSON**:

### Paso a paso

1. Solicita a cada estudiante que **exporte su progreso** desde su dispositivo
   - Ruta: su dashboard → sección **Exportar / Importar** → botón **Exportar progreso**
   - El archivo se llama: `ai-storylab-progreso-[código]-[fecha].json`

2. Recopila los archivos JSON (por correo, USB, carpeta compartida)

3. En el Dashboard Grupal, haz clic en **Importar JSON de estudiantes**

4. Selecciona todos los archivos a la vez (puedes seleccionar múltiples)

5. El sistema:
   - Lee cada archivo
   - Valida el esquema
   - Fusiona los registros por `student_code`
   - Si hay dos archivos del mismo estudiante, conserva el más reciente (`last_updated`)

---

## 📊 Leer el Dashboard Grupal

Una vez importados los JSON, verás:

### Tabla de estudiantes

| Columna | Qué muestra |
|---|---|
| Código | Identificador único del estudiante |
| Seudónimo | Nombre en el taller |
| Misiones completadas | X / 9 |
| Insignias | Cantidad desbloqueadas |
| Fase actual | En qué fase del taller está |
| Entrega final | Si ya registró el video |

### Indicadores agregados del grupo

- 📈 Promedio de misiones completadas
- 🏆 Total de insignias ganadas por el grupo
- ✅ Cuántos estudiantes completaron la entrega final
- ⚠️ Estudiantes con menos de la mitad de misiones completas (posibles rezagados)

---

## 📤 Exportar el Progreso Grupal

Cuando tengas todos los JSON importados:

1. Haz clic en **Exportar progreso grupal**
2. Se descargará `group_progress.json`
3. Este archivo contiene el estado consolidado de todo el grupo
4. Guárdalo como respaldo oficial de la sesión o el taller completo

---

## 🎥 Gestionar la Entrega Final de Videos

Los estudiantes **no suben videos a la aplicación**. La app solo registra metadatos:

- Estado de entrega (entregado / pendiente)
- Nombre del archivo
- Ubicación declarada
- Validaciones (audio, créditos, declaración de IA, duración)

### Tu responsabilidad como facilitador

1. **Designa un espacio de entrega** antes de S9 (carpeta de Drive, USB, plataforma institucional)
2. **Comunica la ubicación** a los estudiantes con anticipación
3. **Confirma la recepción** de cada video por fuera de la app
4. Puedes **cruzar los metadatos** de la app con los archivos realmente recibidos

---

## 📋 Lista de Verificación por Sesión

Antes de cada sesión:

- [ ] ¿Todos los dispositivos tienen acceso a la app? (`npm run dev` o build desplegado)
- [ ] ¿Los estudiantes tienen sus archivos JSON del día anterior si es necesario?
- [ ] ¿Preparaste la actividad lúdica de la sesión? (ver `src/data/sessions.json`)

Durante la sesión:

- [ ] Circula por los equipos mientras trabajan en la misión
- [ ] Verifica que estén escribiendo la **decisión humana** (campo más importante)
- [ ] Recuerda: la misión no se completa sin evidencia + decisión humana + reflexión ética

Al cierre de la sesión:

- [ ] Solicita a cada estudiante que **exporte su JSON**
- [ ] Recoge los archivos
- [ ] Importa al dashboard grupal y exporta `group_progress.json`
- [ ] Guarda el respaldo en el repositorio de documentación del taller

---

## 🔍 Guía de Misiones para el Facilitador

### S1 — Brújula Ética 🧭
**Tu rol:** Facilitar el dilema relámpago en parejas. Asegúrate de que los manifiestos éticos sean genuinos, no genéricos.
**Señal de alarma:** Un estudiante que escribe "usaré la IA responsablemente" sin especificar cómo.

### S2 — Idea Central 💡
**Tu rol:** Ayudar a clarificar el mensaje. Si el logline tiene más de 25 palabras, pide que lo acorten.
**Señal de alarma:** Una historia sin enfoque ético definido.

### S3 — Avatar o Avatares 🎭
**Tu rol:** Revisar que el avatar tenga una decisión humana real (no "dejé que la IA eligiera el aspecto").
**Señal de alarma:** Avatares que replican estereotipos sin reflexión.

### S4 — Narrativa 📖
**Tu rol:** Verificar que el guion tenga inicio, nudo y desenlace coherentes con el mensaje de S2.
**Señal de alarma:** Historia sin conexión al mensaje central.

### S5 — Mundo Visual 🎨
**Tu rol:** Verificar que los recursos visuales generados con IA incluyan atribución o declaración de uso.
**Señal de alarma:** Imágenes sin fuente declarada.

### S6 — Voz y Sonido 🎙️
**Tu rol:** Verificar que los estudiantes declaren si la voz es propia o generada por IA (TTS).
**Señal de alarma:** Audio sin declaración de origen.

### S7 — Prototipo 🔧
**Tu rol:** Organizar el pase de prueba entre equipos. Facilitar la retroalimentación constructiva.
**Señal de alarma:** Un prototipo que no es reproducible (no exporta a video).

### S8 — Curaduría Final ✅
**Tu rol:** Revisar con cada equipo la lista de chequeo: créditos, declaración de IA, duración, calidad de audio.
**Señal de alarma:** Historia sin declaración visible de uso de IA.

### S9 — Premier y Entrega Final ⭐
**Tu rol:** Organizar la alfombra roja. Celebrar. Confirmar recepción de cada video.
**Señal de alarma:** Estudiantes que no completaron los metadatos de entrega en la app.

---

## ⚠️ Situaciones Frecuentes

### Un estudiante perdió su progreso
1. Pide que busque su último JSON exportado
2. Si lo tiene: importar desde su dashboard
3. Si no lo tiene: verificar en tu `group_progress.json` qué misiones tenía completadas y ayudar a reconstruir

### Un estudiante dice que la app "no funciona"
1. Verifica que el servidor esté corriendo (`npm run dev`)
2. Verifica que esté usando un navegador compatible (Chrome, Firefox, Edge — modernos)
3. Pide que recargue la página

### Los JSON de dos estudiantes tienen el mismo código
Esto indica que dos estudiantes usaron el mismo `student_code`. Al importar, el sistema conserva el más reciente. Pide a uno que cambie su código y re-exporte.

### Un estudiante quiere cambiar una misión ya completada
Las misiones completadas no se pueden editar por diseño pedagógico. Si hay un error grave, habla con el coordinador del taller para decidir si se justifica un reset manual.

---

## 🔒 Privacidad y Responsabilidades

Como facilitador/a, al recibir los JSON estudiantiles:

- 🗂️ **Guárdalos en un espacio seguro**, no en carpetas públicas
- 🚫 **No los compartas** con personas fuera del equipo educativo
- 🗑️ **Elimínalos** al terminar el taller (o según la política de tu institución)
- ❌ **No uses los datos de práctica** para investigaciones sin consentimiento informado

---

## 📞 Contacto y Apoyo Técnico

Para soporte técnico del repositorio:
- Revisa los archivos en `governance/` para entender decisiones de diseño
- Consulta `primers/PRIMER_MVP_SCOPE.md` para el alcance del MVP
- Abre un issue en el repositorio GitHub del proyecto

---

*Guía elaborada con 💜 para facilitadores del taller AI StoryLab · versión 0.2.0*

# GOVERNANCE.md — AI StoryLab

**Versión:** 0.2.1 · **Fecha:** 2026-06-05 · **Estado:** Activo

---

## Propósito

Este documento define los principios, roles, responsabilidades y proceso de cambio que gobiernan el desarrollo del MVP local-first de AI StoryLab: Constructor Ético de Historias Multimedia.

La gobernanza no es burocracia — es la memoria que sostiene el sentido del proyecto cuando el contexto cambia.

---

## Principios Rectores

| # | Principio | Descripción |
|---|---|---|
| 1 | **Local-first** | Toda funcionalidad nueva debe funcionar sin conexión antes de agregar backend |
| 2 | **Sin autenticación en el MVP** | No se implementa login ni OAuth en esta versión |
| 3 | **Sin Supabase en el MVP** | No se usa base de datos remota en esta versión |
| 4 | **Sin backend** | No existe servidor de aplicación en esta versión |
| 5 | **Sin subida de archivos** | La app no almacena imágenes, audio ni video |
| 6 | **Exportación / importación JSON** | Toda la persistencia remota es por archivo JSON del usuario |
| 7 | **Portafolio emergente** | El portafolio se construye automáticamente de las misiones; no es un paso separado |
| 8 | **Dashboard grupal por importación** | El monitoreo del facilitador no requiere servidor: importa JSON estudiantiles |
| 9 | **Revisión humana obligatoria** | Ningún cambio técnico o pedagógico se acepta sin revisión humana |
| 10 | **No sobreconstruir** | El MVP debe mantenerse en su alcance. Funcionalidades futuras van a la hoja de ruta |

---

## Roles y Responsabilidades

### Facilitador Técnico
- Mantiene el repositorio y el entorno de desarrollo
- Ejecuta el proceso de cambio (plan → ejecución → revisión → commit)
- Supervisa el uso de agentes IA en el desarrollo
- Actualiza bitácoras y CHANGELOG

### Curador Pedagógico
- Valida que los cambios estén alineados con el diseño instruccional
- Aprueba cambios en `src/data/` (sesiones, insignias, glosario, herramientas)
- Revisa las guías de usuario antes de publicar

### Revisor Ético
- Verifica que los cambios respeten la privacidad local-first
- Revisa mensajes del mentor y reflexiones éticas en el contenido
- Aprueba cambios en `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Privacidad/Privacy_Local_First_v0_4_0.md` y `09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md`

### Agente IA de Código (Claude CoWork)
- Asiste en generación de código, documentación y revisión de arquitectura
- Opera bajo las reglas de `09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md`
- Siempre presenta un plan antes de modificar archivos
- No tiene autorización para cambiar el alcance del MVP

### Investigador Educativo
- Consulta el repositorio para entender el diseño pedagógico
- Puede proponer cambios a través del proceso de cambio documentado
- No modifica código directamente

### Estudiante / Facilitador del Taller
- Usuario final de la aplicación
- No interactúa con el repositorio
- Su experiencia es la métrica de éxito del proyecto

---

## Proceso de Cambio

Todo cambio significativo debe seguir este flujo:

```
1. Definir tarea
   └── ¿Qué se quiere cambiar y por qué?

2. Activar contexto con agente IA
   └── Usar primer apropiado + prompt de activación

3. Proponer plan
   └── El agente presenta: archivos a tocar, riesgos, criterios de aceptación
   └── La persona revisa y aprueba antes de ejecutar

4. Ejecutar cambios
   └── El agente implementa; la persona supervisa

5. Revisar
   └── Usar REVIEW_CHECKLIST.md antes de aceptar cambios

6. Probar
   └── Verificar en navegador (npm run dev)

7. Documentar
   └── Actualizar DECISION_LOG si hubo decisión relevante
   └── Actualizar CHANGELOG
   └── Actualizar bitácora de sesión

8. Commit y push
   └── Mensaje de commit en formato convencional
```

---

## Formato de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     nueva funcionalidad
fix:      corrección de error
docs:     cambio en documentación
refactor: refactorización sin cambio funcional
governance: cambio en gobernanza o políticas
chore:    mantenimiento (dependencias, config)
```

---

## Regla de Alcance

Ningún agente IA ni contribuidor puede:

- Agregar autenticación al MVP sin aprobación explícita
- Conectar la app a una base de datos remota sin aprobación
- Incorporar APIs de IA externas sin aprobación
- Implementar subida de archivos sin aprobación
- Romper la compatibilidad con el modelo de datos `schema_version: 0.2.0`

Cambios de alcance requieren:
1. Entrada en DECISION_LOG
2. Actualización de RELEASE_CRITERIA
3. Aprobación del facilitador técnico y curador pedagógico

---

## Documentos Relacionados

| Documento | Propósito |
|---|---|
| `09_IA_AGENTES_Y_COPILOTOS/Politicas_Uso_IA/AI_Usage_Policy_v0_4_0.md` | Reglas para el uso de agentes IA |
| `PRIVACY_LOCAL_FIRST.md` | Política de privacidad del MVP |
| `DECISION_LOG.md` | Registro cronológico de decisiones |
| `RISK_REGISTER.md` | Riesgos técnicos, éticos y operativos |
| `REVIEW_CHECKLIST.md` | Lista de verificación antes de aceptar cambios |
| `RELEASE_CRITERIA.md` | Criterios para considerar el MVP funcional |
| `CONTRIBUTING.md` | Cómo contribuir al proyecto |
| `20_MANTENIMIENTO_Y_EVOLUCION/Planes_Evolucion/Evolucion_App_v0_4_0.md` | Historia técnica y hoja de ruta |
| `../CHANGELOG.md` | Registro de cambios por versión |

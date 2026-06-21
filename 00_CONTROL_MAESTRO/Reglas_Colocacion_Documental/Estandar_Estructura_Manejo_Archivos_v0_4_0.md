# ASTL-V040-STD-001
# Estándar de Estructura y Manejo de Archivos
## AI StoryLab 1 · Kit N3 Foundation Structure v0.4.0

**Proyecto:** AI StoryLab 1  
**Repositorio:** ricardojuanmorales/ai-storylab-1  
**Ruta canónica prevista:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Estandar_Estructura_Manejo_Archivos_v0_4_0.md`  
**Versión del estándar:** v0.4.0  
**Estado:** Canónico inicial sujeto a revisión humana  
**ID maestro:** ASTL-V040-STD-001  
**Nivel:** N3 - Avanzado  
**Framework base:** Framework Genérico V4.1.0 Integral Autosostenido  
**Kit:** Completo N2-N3  
**Perfil principal:** Programador Humanista  
**Modo Caleidoscopio:** C4 Integral + C5 Pedagógico  
**Principios obligatorios:** Spec-Driven Development, Security by Design, Security by Default, local-first por defecto.

---

## 1. Propósito

Este estándar define la estructura de carpetas, reglas de colocación documental, manejo de archivos, versionado, trazabilidad, documentación activa, transferencia simétrica y deuda del proyecto AI StoryLab 1.

Su función es preparar el kit `AI_StoryLab_1_N3_Foundation_Structure_v0_4_0` como una base robusta para operar desde `v0.4.0` hasta `v1.0`, evitando reorganizaciones constantes y manteniendo espacio suficiente para crecimiento técnico, pedagógico, investigativo, creativo, ético y documental.

Este estándar no activa backend, APIs externas, analíticas externas, carga de archivos, autenticación ni base de datos remota. Toda función híbrida futura queda reservada para fases posteriores y requiere threat model, política de privacidad, consentimiento, specs, controles y pruebas.

---

## 2. Alcance

Este estándar aplica a:

- estructura raíz del repositorio;
- cartapacios documentales `00-21` y `99`;
- estructura `.specify/`;
- documentación activa;
- seguridad, privacidad y datos;
- wiki humana;
- archivo histórico;
- deuda técnica, estructural y WIKI_SYNC;
- bitácora de transferencia simétrica;
- reglas de versionado y nombres;
- reflejos obligatorios entre specs, decisiones, changelog, deuda, seguridad, evidencia, wiki y archivo.

No aplica todavía a:

- implementación de backend;
- autenticación real;
- bases de datos remotas;
- sincronización cloud;
- APIs externas de IA;
- almacenamiento remoto de portafolios;
- analíticas avanzadas;
- carga automática de archivos.

---

## 3. Regla madre de estructura

La raíz conserva numeración porque funciona como mapa cardinal del sistema:

```text
00_CONTROL_MAESTRO/
01_FUNDAMENTO_FILOSOFICO/
02_ARQUITECTURA_CONCEPTUAL/
03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
04_GOBERNANZA_ETICA_Y_RIESGOS/
05_COMPETENCIAS_Y_PERFILES/
06_PASTILLAS_MODULARES/
07_PLANTILLAS_Y_MODELOS/
08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
09_IA_AGENTES_Y_COPILOTOS/
10_REPOSITORIOS_Y_FLUJO_TECNICO/
11_MULTIMODALIDAD_Y_PUBLICACION/
12_DISENO_INSTRUCCIONAL_UNIVERSAL/
13_INVESTIGACION_Y_EVIDENCIA/
14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
17_INTERNACIONALIZACION_LOCALIZACION/
18_DOCUMENTACION_ACTIVA/
19_IMPLEMENTACION_Y_DESPLIEGUE/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Desde segundo nivel en adelante no se usan prefijos numéricos.

Correcto:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
  Programador_Humanista/
  Investigador_Transdisciplinario/
  Artista_Transdisciplinario/
```

Incorrecto:

```text
05_COMPETENCIAS_Y_PERFILES/
  01_Conocimiento_Comun/
  02_Programador_Humanista/
  03_Investigador_Transdisciplinario/
```

Los números sí pueden usarse en IDs, versiones, fechas, releases, decisiones, specs o nombres de archivo cuando cumplen función de trazabilidad.

---

## 4. Unidad estructural mínima

Todo cartapacio creado debe incluir `README.md`.

El `README.md` debe explicar:

- propósito;
- qué contiene;
- qué no contiene;
- relación con carpetas vecinas;
- criterios de colocación;
- riesgos de seguridad y privacidad;
- relación con WIKI_SYNC;
- estado del cartapacio;
- responsable funcional;
- última revisión;
- versión documental interna.

Los documentos sustantivos deben versionarse explícitamente en el nombre del archivo.

Ejemplos:

```text
Threat_Model_v0_4_0.md
Security_Requirements_v0_4_0.md
Registro_Decisiones_v0_4_0.md
Estandar_Estructura_Manejo_Archivos_v0_4_0.md
```

Excepción operativa:

```text
README.md
```

El `README.md` conserva nombre estable para navegación humana y de GitHub, pero debe incluir versión interna y, cuando sea reemplazado, se archiva una copia versionada en `99_ARCHIVO_HISTORICO/Versiones_Reemplazadas/`.

---

## 5. Estados de cartapacio

Cada cartapacio debe declararse en uno de estos estados:

```text
Activo
Reservado
Pendiente_Activacion
Historico
Experimental
```

### Activo

Contiene documentos o procesos en uso actual.

### Reservado

Existe para sostener arquitectura futura, pero no contiene operación activa todavía.

### Pendiente_Activacion

Tiene función definida, pero requiere decisión, spec o revisión antes de poblarse.

### Histórico

Contiene memoria cerrada, reemplazada o archivada.

### Experimental

Contiene trabajo exploratorio controlado que no debe confundirse con política o implementación estable.

---

## 6. Estructura operativa base

La raíz del repositorio combina aplicación, SDD y estructura documental N3:

```text
AI_StoryLab_1/
  README.md
  CHANGELOG.md
  SECURITY.md
  PRIVACY.md
  CONTRIBUTING.md
  package.json
  vite.config.*
  src/
  public/
  .specify/
  00_CONTROL_MAESTRO/
  01_FUNDAMENTO_FILOSOFICO/
  02_ARQUITECTURA_CONCEPTUAL/
  03_METODOLOGIA_Y_FLUJO_DE_TRABAJO/
  04_GOBERNANZA_ETICA_Y_RIESGOS/
  05_COMPETENCIAS_Y_PERFILES/
  06_PASTILLAS_MODULARES/
  07_PLANTILLAS_Y_MODELOS/
  08_CURSOS_PROGRAMAS_Y_TRAYECTORIAS/
  09_IA_AGENTES_Y_COPILOTOS/
  10_REPOSITORIOS_Y_FLUJO_TECNICO/
  11_MULTIMODALIDAD_Y_PUBLICACION/
  12_DISENO_INSTRUCCIONAL_UNIVERSAL/
  13_INVESTIGACION_Y_EVIDENCIA/
  14_COMUNIDAD_TRANSFERENCIA_Y_ESCALAMIENTO/
  15_EVALUACION_CALIDAD_Y_AUDITORIA/
  16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  17_INTERNACIONALIZACION_LOCALIZACION/
  18_DOCUMENTACION_ACTIVA/
  19_IMPLEMENTACION_Y_DESPLIEGUE/
  20_MANTENIMIENTO_Y_EVOLUCION/
  21_WIKI_DOCUMENTACION_HUMANA/
  99_ARCHIVO_HISTORICO/
```

`src/`, `public/`, `package.json` y archivos técnicos de Vite permanecen en su lugar. La estructura N3 no reemplaza la aplicación; la gobierna, documenta, evalúa y prepara para evolución segura.

---

## 7. Estructura `.specify/`

`.specify/` funciona como taller técnico de especificación. No es una zona opaca para máquinas. Todo trabajo en `.specify/` debe reflejarse en la estructura humana, documental, evaluativa, de seguridad, deuda, wiki y archivo cuando corresponda.

```text
.specify/
  README.md
  memory/
    README.md
    constitution_v0_4_0.md
  specs/
    README.md
    Platform_Foundation/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
    Security_Privacy_Baseline/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
    Profile_Progress_JSON/
      README.md
      spec_v0_4_0.md
      plan_v0_4_0.md
      tasks_v0_4_0.md
      risks_v0_4_0.md
      security_v0_4_0.md
      acceptance_v0_4_0.md
      tests_v0_4_0.md
      trace_v0_4_0.md
```

Cada spec debe incluir un archivo `trace_vX_Y_Z.md`.

El archivo `trace` debe enumerar:

- ID maestro;
- spec relacionada;
- documentos creados;
- documentos modificados;
- decisiones afectadas;
- changelog afectado;
- riesgos afectados;
- deuda técnica generada o reducida;
- deuda estructural generada o reducida;
- deuda WIKI_SYNC generada o reducida;
- documentos de seguridad relacionados;
- evidencias de validación;
- guías humanas requeridas;
- archivos que deberán archivarse;
- estado del reflejo.

---

## 8. Regla de reflejo obligatorio

Todo cambio en `.specify/` debe reflejarse, según aplique, en:

```text
18_DOCUMENTACION_ACTIVA/
15_EVALUACION_CALIDAD_Y_AUDITORIA/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
20_MANTENIMIENTO_Y_EVOLUCION/
21_WIKI_DOCUMENTACION_HUMANA/
99_ARCHIVO_HISTORICO/
```

Mapa de reflejo mínimo:

```text
spec.md        -> Registro_Decisiones, Changelog, WIKI_SYNC si afecta personas
plan.md        -> Bitacora, Deuda_Tecnica, Deuda_Estructural si cambia arquitectura
tasks.md       -> Deuda_Tecnica, Gates, Evidencias
risks.md       -> Riesgos, Seguridad, Privacidad
security.md    -> Threat_Model, Security_Requirements
acceptance.md  -> Evidencias_Validacion, Gates
tests.md       -> Evaluacion_DevOps, Evidencias_Validacion
trace.md       -> Indices, Deuda, Changelog, Archivo
```

La documentación técnica no se considera completa hasta que su reflejo humano y documental esté registrado como completado o como deuda explícita.

---

## 9. Conocimiento común y perfiles

`Conocimiento_Comun/` es la ruta transversal de aquello que aplica a Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario y Caleidoscopio.

Programador Humanista funciona como lente principal de operación inicial, pero no como dueño del conocimiento común.

Regla:

```text
Conocimiento_Comun/ contiene lo transversal.
Programador_Humanista/ aplica, prueba y operacionaliza primero.
Investigador_Transdisciplinario/ queda preparado para evidencia, metodología e investigación.
Artista_Transdisciplinario/ queda preparado para mediación, experiencia y producción creativa.
Caleidoscopio/ articula integración, tensión, recombinación y lectura sistémica.
```

Toda transferencia entre perfiles debe registrarse en:

```text
18_DOCUMENTACION_ACTIVA/Bitacoras/Bitacora_Transferencia_Simetrica_v0_4_0.md
```

---

## 10. Documentación activa

`18_DOCUMENTACION_ACTIVA/` registra el proceso vivo.

Regla:

Si documenta proceso vivo, va en `18_DOCUMENTACION_ACTIVA/`.

Si funciona como evidencia formal, va en `15_EVALUACION_CALIDAD_Y_AUDITORIA/`.

Si debe ser entendido por estudiantes, facilitadores, docentes o instituciones, genera WIKI_SYNC.

---

## 11. Seguridad, privacidad y datos

`16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` concentra seguridad transversal.

Cartapacios reservados para compatibilidad futura:

```text
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
  Modelos_Amenazas/
    Threat_Model_Hibrido_Institucional_v0_8_0.md
    Threat_Model_Autenticacion_v0_8_0.md
    Threat_Model_Base_Datos_v0_8_0.md
```

Estos documentos pueden existir como planificación o borrador futuro, pero no activan implementación.

---

## 12. Deuda separada

La deuda se separa en tres registros:

```text
20_MANTENIMIENTO_Y_EVOLUCION/
  Deuda_Tecnica/
    README.md
    Registro_Deuda_Tecnica_v0_4_0.md
  Deuda_Estructural/
    README.md
    Registro_Deuda_Estructural_v0_4_0.md
  Deuda_WIKI_SYNC/
    README.md
    Registro_Deuda_WIKI_SYNC_v0_4_0.md
```

### Deuda técnica

Código, pruebas, dependencias, build, CI/CD, validaciones, deuda de implementación.

### Deuda estructural

Rutas, carpetas, índices, referencias lógicas, ubicación documental, migraciones, arquitectura de información.

### Deuda WIKI_SYNC

Guías humanas pendientes, traducciones necesarias, documentación para estudiantes, facilitadores, docentes o instituciones.

Cada deuda debe tener:

```text
ID maestro
tipo de deuda
origen
ruta afectada
impacto
prioridad
responsable
fecha de creación
fecha objetivo
estado
criterio de cierre
relación con PR o release
```

---

## 13. ID maestro de trazabilidad

Todo cambio relevante debe tener un ID maestro transversal.

Formato recomendado:

```text
ASTL-V040-TIPO-NNN
```

Ejemplos:

```text
ASTL-V040-STD-001
ASTL-V040-DEC-001
ASTL-V040-SPEC-001
ASTL-V040-RISK-001
ASTL-V040-DEBT-001
ASTL-V040-WIKI-001
ASTL-V040-SEC-001
```

El ID debe aparecer en:

```text
.specify/
Registro_Decisiones
Changelog
Bitacora
Deuda
WIKI_SYNC
Evidencias
Archivo
PR
Release notes
```

---

## 14. Versionado documental

Todo documento sustantivo debe versionarse en el nombre del archivo.

Formato:

```text
Nombre_Documento_vX_Y_Z.md
```

Ejemplos:

```text
Estandar_Estructura_Manejo_Archivos_v0_4_0.md
Registro_Decisiones_Completo_v0_4_0.md
Threat_Model_v0_4_0.md
Security_Requirements_v0_4_0.md
Bitacora_Transferencia_Simetrica_v0_4_0.md
```

Para documentos de sesión:

```text
Cierre_Sesion_002_2026-06-21_v0_4_0.md
Primer_Continuidad_Sesion_003_v0_4_0.md
```

Para archivos JSON:

```text
schema_profile_progress_v0_4_0.json
sample_profile_progress_valid_v0_4_0.json
sample_profile_progress_invalid_oversize_v0_4_0.json
```

Para paquetes:

```text
AI_StoryLab_1_N3_Foundation_Structure_v0_4_0.zip
AI_StoryLab_1_N3_Foundation_Structure_v0_4_0.patch
```

---

## 15. WIKI_SYNC como sistema de deuda viva

WIKI_SYNC no bloquea automáticamente un PR inicial, pero sí debe registrar deuda humana pendiente.

Si un cambio afecta a personas usuarias, debe generarse una entrada en:

```text
18_DOCUMENTACION_ACTIVA/WIKI_SYNC/WIKI_SYNC_Completo_v0_4_0.md
20_MANTENIMIENTO_Y_EVOLUCION/Deuda_WIKI_SYNC/Registro_Deuda_WIKI_SYNC_v0_4_0.md
```

Antes de release estable, la deuda WIKI_SYNC crítica debe cerrarse o justificarse.

Guías humanas viven en:

```text
21_WIKI_DOCUMENTACION_HUMANA/
  Guia_Estudiante/
  Guia_Facilitador/
  Guia_Desarrollador/
  Guia_Seguridad/
  Guia_Conocimiento_Comun/
  Guia_Perfiles/
  Guia_Institucional/
```

---

## 16. Archivo histórico

`99_ARCHIVO_HISTORICO/` conserva versiones reemplazadas, cierres, releases, paquetes y exportaciones.

Regla:

Una versión reemplazada no permanece indefinidamente en cartapacio vivo. Se archiva cuando:

- existe reemplazo aprobado;
- el changelog fue actualizado;
- la decisión fue registrada;
- las referencias fueron revisadas;
- la ruta histórica está clara;
- el índice fue actualizado.

---

## 17. Compatibilidad futura v1.0

La estructura debe sostener una v1.0 con:

```text
Local_First_Default
Institutional_Hybrid_Opt_In
```

La distribución recomendada es una sola aplicación con módulos híbridos apagados por defecto.

### Local_First_Default

- activo por defecto;
- sin cuenta obligatoria;
- sin base de datos remota;
- sin subida automática;
- export/import controlado;
- adecuado para talleres, GitHub Pages y autonomía estudiantil.

### Institutional_Hybrid_Opt_In

- apagado por defecto;
- requiere consentimiento institucional;
- puede incluir cuentas estudiantiles opcionales;
- puede incluir autenticación;
- puede incluir base de datos mínima;
- requiere threat model específico;
- requiere política de privacidad actualizada;
- requiere controles y pruebas;
- requiere documentación humana institucional.

Datos permitidos inicialmente en modo híbrido futuro:

```text
roles
cohortes
progreso mínimo
estado de completación
metadatos de entrega
rúbricas resumidas
consentimiento institucional
configuración institucional
auditoría básica
```

Datos no recomendados para v1.0 inicial:

```text
portafolios completos
videos
audios
imágenes originales
prompts libres extensos
reflexiones sensibles
analíticas avanzadas
```

---

## 18. Métricas iniciales de monitoreo

Se crea un set inicial de métricas para evaluar si la estructura ayuda al proyecto.

### Métricas estructurales

```text
porcentaje de cartapacios con README.md
número de documentos sin versión explícita
número de rutas canónicas definidas
número de referencias rotas detectadas
número de documentos duplicados
```

### Métricas SDD

```text
número de specs activos
porcentaje de specs con trace completo
porcentaje de specs con security.md
porcentaje de specs con tests.md
porcentaje de specs con acceptance.md
```

### Métricas de deuda

```text
deuda técnica abierta
deuda estructural abierta
deuda WIKI_SYNC abierta
deuda crítica por release
tiempo promedio de cierre de deuda
```

### Métricas de seguridad

```text
requisitos de seguridad documentados
threat models activos
riesgos abiertos de privacidad
riesgos abiertos de datos de menores
controles trazados a pruebas
```

### Métricas humanas

```text
guías humanas creadas
guías pendientes por WIKI_SYNC
tiempo requerido para reactivar una sesión
porcentaje de decisiones con explicación humana
```

---

## 19. Reglas de bloqueo

Quedan bloqueadas en v0.4.0:

```text
backend operativo
APIs externas
autenticación
base de datos remota
subida automática de archivos
analíticas externas
sincronización cloud
almacenamiento remoto de portafolios
```

Solo pueden documentarse como posibilidades futuras bajo:

```text
02_ARQUITECTURA_CONCEPTUAL/
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
20_MANTENIMIENTO_Y_EVOLUCION/
```

La existencia de carpetas reservadas no autoriza implementación.

---

## 20. Criterio de aprobación del estándar

Este estándar puede aprobarse para el kit N3 foundation si:

- conserva raíz `00-21` y `99`;
- no usa numeración desde segundo nivel en adelante;
- incluye `README.md` por carpeta;
- separa conocimiento común de PH;
- prepara simetría para IT y AT;
- crea reflejo obligatorio desde `.specify/`;
- separa deuda técnica, estructural y WIKI_SYNC;
- usa ID maestro transversal;
- versiona documentos sustantivos;
- mantiene local-first como default;
- bloquea backend/APIs/autenticación/base de datos en v0.4;
- prepara compatibilidad futura con modo híbrido institucional opt-in;
- mantiene documentación activa y bitácora de transferencia simétrica.

---

## 21. Próxima acción

Crear el esqueleto operativo completo con `README.md` en cada cartapacio y documentos rectores iniciales, sin poblar plantillas operativas hasta que sean necesarias.

Documento preparado para revisión humana y aplicación controlada en rama `v0.4-n3-foundation`.


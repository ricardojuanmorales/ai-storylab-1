# Arquitectura Modular, Objetos de Dominio, POO y Principios SOLID v0.7 · AI StoryLab 1

**Nombre canónico previsto:** `Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 13 · Arquitectura modular, objetos de dominio, POO y principios SOLID  
**Tipo de documento:** Documento técnico-conceptual, arquitectónico, ético, pedagógico y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-09  
**Zona horaria de referencia:** America/Puerto_Rico  
**Documento rector previo:** `Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md`  
**Documentos de entrada inmediatos:**  
- `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
- `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
- `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
- `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`
- `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`
- `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`
- `Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md`
- `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`
- `Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
- `Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md`
- `Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md`
- `Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md`
- `src/App.jsx`
- `src/utils/progress.js`
- `src/utils/portfolio.js`
- `src/utils/finalSubmission.js`
- `src/utils/validation.js`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
02_ARQUITECTURA_Y_DISENO_DEL_ECOSISTEMA/Arquitectura_Tecnica_Referencia/Arquitectura_Modular_Dominio/Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Dictamen de entrada

La Familia 13 aborda una pregunta central:

```text
¿Cómo debe AI StoryLab 1 organizar conceptualmente sus módulos, objetos de dominio y responsabilidades para que una implementación futura pueda respetar local-first, privacidad por defecto, seguridad por diseño, agencia humana, no vigilancia y exportabilidad sin producir una arquitectura rígida, invasiva o sobredimensionada?
```

La respuesta inicial es:

```text
AI StoryLab 1 debe diseñar su arquitectura modular alrededor de objetos de dominio pedagógicos y éticos, separando reglas, datos, vistas, persistencia, exportación y acompañamiento antes de escribir código nuevo o seleccionar stack final.
```

La arquitectura no debe ser un castillo de tuberías.  
Debe ser una ciudad con barrios claros: creación, evidencia, privacidad, entrega, herramientas, acompañamiento y gobernanza.

---

## 1. Propósito

Este documento define el marco conceptual de arquitectura modular, objetos de dominio, POO y principios SOLID para AI StoryLab 1 v0.7.0.

Su función es:

- traducir las familias 1 a 12 en módulos conceptuales;
- identificar objetos de dominio candidatos;
- establecer responsabilidades;
- separar capas;
- traducir POO sin forzar implementación orientada a clases;
- aplicar SOLID como criterio arquitectónico, no como dogma de código;
- preservar aciertos heredados de modularidad;
- auditar acoplamientos heredados;
- preparar una futura implementación v1.0.0;
- mantener bloqueada toda implementación prematura.

---

## 2. Alcance

Este documento cubre:

- arquitectura modular conceptual;
- capas candidatas;
- módulos candidatos;
- objetos de dominio;
- responsabilidades;
- relaciones entre objetos;
- límites de módulos;
- traducción conceptual de POO;
- traducción conceptual de SOLID;
- herencia técnica del MVP;
- riesgos de acoplamiento;
- criterios de refactor futuro;
- gates para implementación posterior;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 3. Fuera de alcance

Este documento no:

- implementa código;
- refactoriza archivos;
- define stack final;
- selecciona framework;
- define TypeScript;
- define clases reales;
- define interfaces reales;
- define base de datos;
- define backend;
- define autenticación;
- define API;
- define almacenamiento final;
- define testing final;
- define patrón de carpetas final;
- define despliegue;
- usa datos reales;
- valida con personas.

---

## 4. Principio rector

```text
La arquitectura modular de AI StoryLab 1 debe proteger el significado pedagógico, la agencia humana y los límites éticos mediante responsabilidades claras, dependencias controladas y objetos de dominio comprensibles.
```

Corolarios:

- cada módulo debe tener una razón clara para existir;
- cada objeto debe representar un concepto significativo del proyecto;
- cada capa debe proteger una frontera;
- las vistas no deben decidir reglas sensibles;
- la persistencia no debe definir pedagogía;
- la exportación no debe capturar todo;
- la Vista del Facilitador no debe recibir datos por conveniencia técnica;
- la IA externa no debe convertirse en dependencia interna;
- los principios SOLID deben servir al cuidado, no solo a la elegancia técnica.

---

## 5. Herencia técnica y modularidad existente

El MVP heredado ya presenta algunas separaciones valiosas:

- componentes de interfaz separados;
- utilidades de progreso;
- utilidades de portafolio;
- utilidades de entrega final;
- validación de importaciones;
- plantillas de progreso;
- datos base en JSON;
- persistencia local separada;
- export/import como utilidad;
- glosario y herramientas como datos estructurados.

También presenta concentraciones a auditar:

- `App.jsx` concentra navegación, estado, persistencia y composición de vistas;
- algunas pantallas están definidas inline;
- el dashboard grupal heredado sigue siendo una superficie sensible;
- portafolio emergente se deriva automáticamente y requiere transformación hacia curaduría;
- `prompt_used`, `ethical_reflection`, `last_updated`, `private_link` y `group_progress` requieren límites conceptuales;
- localStorage es mecanismo heredado, no arquitectura final.

Dictamen:

```text
Estado: preservar indicios modulares, transformar acoplamientos sensibles
```

---

## 6. Arquitectura conceptual por capas

### Capa 1 · Dominio pedagógico

Contiene objetos y reglas centrales:

- Proyecto creativo;
- Misión;
- Evidencia;
- Decisión humana;
- Reflexión ética;
- Portafolio curado;
- Entrega final;
- Declaración IA;
- Créditos;
- Herramienta externa;
- Prompt recomendado;
- Prompt usado resumido.

### Capa 2 · Privacidad y seguridad

Contiene reglas transversales:

- clasificación de sensibilidad;
- visibilidad;
- exportabilidad;
- revisión de privacidad;
- controles de seguridad;
- datos bloqueados;
- enlace privado;
- mínimos necesarios.

### Capa 3 · Trazabilidad formativa

Contiene memoria mínima:

- estado formativo;
- huella de evidencia;
- feedback formativo;
- ruta de apoyo;
- estado de entrega;
- revisión facilitadora;
- deuda documental.

### Capa 4 · Aplicación o casos de uso

Contiene acciones:

- guardar evidencia;
- completar misión;
- curar portafolio;
- preparar entrega;
- revisar privacidad;
- exportar datos;
- importar datos;
- declarar uso IA;
- registrar créditos;
- solicitar apoyo.

### Capa 5 · Presentación

Contiene vistas y experiencia:

- Vista estudiante;
- Vista misión;
- Vista portafolio;
- Vista herramientas;
- Vista glosario;
- Vista entrega;
- Vista export/import;
- Vista Facilitador no vigilante.

### Capa 6 · Persistencia y portabilidad

Contiene mecanismos diferidos:

- almacenamiento local;
- exportación JSON;
- importación JSON;
- versionado de esquema;
- validación de entrada;
- respaldo local;
- adaptadores futuros.

### Capa 7 · Gobernanza documental

Contiene continuidad y control:

- decisiones;
- deudas;
- gates;
- comentarios de hito;
- aprobaciones humanas;
- rutas canónicas;
- límites de fase.

Regla:

```text
Las capas superiores pueden pedir servicios a capas inferiores, pero las reglas éticas no deben depender de herramientas concretas.
```

---

## 7. Módulos conceptuales candidatos

### Módulo Proyecto

Responsabilidad:

```text
Agrupar identidad mínima del proyecto creativo, modalidad, título, misión activa y continuidad.
```

No debe:

- almacenar datos personales innecesarios;
- decidir evaluación;
- controlar permisos;
- publicar.

### Módulo Perfil Local

Responsabilidad:

```text
Gestionar identidad mínima o seudónima bajo control local.
```

No debe:

- exigir nombre legal;
- conectar cuentas;
- autenticar productivamente;
- expandir identidad sin propósito.

### Módulo Misión

Responsabilidad:

```text
Organizar objetivos, actividad lúdica, evidencia, decisión humana, reflexión y recursos de una misión.
```

No debe:

- evaluar automáticamente;
- exigir prompts completos;
- capturar todo el proceso.

### Módulo Evidencia

Responsabilidad:

```text
Representar producto, resumen o huella formativa seleccionada.
```

No debe:

- absorber borradores privados;
- publicar;
- compararse para ranking.

### Módulo Decisión Humana

Responsabilidad:

```text
Documentar criterio, selección y agencia.
```

No debe:

- ser reemplazado por IA;
- volverse trámite mecánico;
- convertirse en etiqueta punitiva.

### Módulo Reflexión Ética

Responsabilidad:

```text
Sostener pensamiento crítico y cuidado.
```

No debe:

- diagnosticarse;
- evaluarse automáticamente;
- exponerse por defecto.

### Módulo Portafolio Curado

Responsabilidad:

```text
Seleccionar y organizar evidencias revisadas para mostrar sentido del proceso.
```

No debe:

- equivaler a progreso completo;
- exportar privados;
- construirse por extracción total.

### Módulo Entrega Final

Responsabilidad:

```text
Registrar metadatos mínimos y confirmaciones de cierre.
```

No debe:

- almacenar archivo final;
- publicar;
- validar con IA;
- subir automáticamente.

### Módulo Exportabilidad

Responsabilidad:

```text
Preparar salidas revisables, mínimas y separadas por propósito.
```

No debe:

- exportar todo;
- mezclar datos privados;
- enviar automáticamente.

### Módulo Importación

Responsabilidad:

```text
Validar entradas, resumir riesgos y evitar sobrescritura silenciosa.
```

No debe:

- absorber chats;
- importar multimedia;
- reconstruir vigilancia grupal.

### Módulo Herramientas Externas

Responsabilidad:

```text
Orientar uso de herramientas y recursos con privacidad, créditos y notas institucionales.
```

No debe:

- conectar cuentas;
- guardar credenciales;
- medir rendimiento por herramienta.

### Módulo IA Externa

Responsabilidad:

```text
Orientar documentación manual de uso IA externa.
```

No debe:

- ejecutar IA;
- llamar APIs;
- evaluar;
- importar conversaciones.

### Módulo Vista del Facilitador

Responsabilidad:

```text
Acompañar con mínima visibilidad, evidencia compartida y feedback formativo.
```

No debe:

- ser administrador total;
- vigilar;
- rankear;
- ver borradores privados por defecto.

### Módulo Glosario y Ayudas

Responsabilidad:

```text
Sostener lenguaje canónico, ayudas contextuales y advertencias cuidadas.
```

No debe:

- introducir lenguaje punitivo;
- ocultar riesgos;
- confundir recomendado con obligatorio.

### Módulo Gobernanza

Responsabilidad:

```text
Registrar decisiones, deudas, gates y aprobaciones humanas.
```

No debe:

- activar implementación por inferencia;
- cerrar deudas sin evidencia;
- saltar fases.

---

## 8. Objetos de dominio candidatos

### Núcleo creativo-formativo

- ProyectoCreativo;
- PerfilLocal;
- Misión;
- Fase;
- ActividadLúdica;
- SalidaLúdica;
- Evidencia;
- EvidenciaPrivada;
- EvidenciaCompartida;
- DecisiónHumana;
- ReflexiónÉtica;
- EstadoFormativo;
- FeedbackFormativo;
- RutaApoyo.

### Núcleo de IA y herramientas

- PromptRecomendado;
- PromptAdaptado;
- PromptUsadoResumen;
- DeclaraciónIA;
- HerramientaExterna;
- RecursoExterno;
- NotaInstitucional;
- NivelPrivacidadHerramienta;
- Crédito;
- Licencia.

### Núcleo de privacidad, seguridad y trazabilidad

- ClasificaciónPrivacidad;
- ReglaVisibilidad;
- RevisiónPrivacidad;
- ControlSeguridad;
- TrazaFormativa;
- DatoAltoCuidado;
- DatoBloqueado;
- EnlacePrivado;
- GateFuturo.

### Núcleo de portafolio, entrega y exportabilidad

- PortafolioCurado;
- EntradaPortafolio;
- EntregaFinal;
- MetadatoEntrega;
- ExportaciónLocal;
- ImportaciónLocal;
- VistaPreviaExportación;
- TipoExportación;
- ValidaciónImportación;
- GaleríaFutura.

### Núcleo de roles y gobernanza

- Rol;
- PermisoConceptual;
- PersonaEstudiante;
- Facilitador;
- DocenteResponsable;
- MantenedorDocumental;
- Bitácora;
- DecisiónTécnica;
- Deuda;
- Hito;
- DocumentoCanónico.

### Núcleo de lenguaje

- TérminoGlosario;
- DefiniciónCanónica;
- AyudaContextual;
- AdvertenciaCuidada;
- EtiquetaOperacional;
- LenguajeBloqueado.

---

## 9. Relaciones principales entre objetos

```text
ProyectoCreativo contiene Misiones.
Misión produce Evidencias.
Evidencia puede incluir DecisiónHumana.
Evidencia puede incluir ReflexiónÉtica seleccionada.
Evidencia puede referenciar HerramientaExterna.
Evidencia puede documentar PromptUsadoResumen.
Evidencia puede entrar a PortafolioCurado.
PortafolioCurado contiene EntradaPortafolio.
EntregaFinal referencia PortafolioCurado y MetadatosEntrega.
EntregaFinal no contiene ArchivoFinal.
ExportaciónLocal puede incluir PortafolioCurado o MetadatosEntrega.
ImportaciónLocal valida ExportaciónLocal.
VistaFacilitador observa solo EvidenciaCompartida y estados mínimos.
RevisiónPrivacidad controla visibilidad, exportación y entrega.
DeclaraciónIA se vincula a Evidencia, Portafolio o EntregaFinal.
Crédito se vincula a RecursosExternos, Herramientas o productos finales.
```

Regla:

```text
Las relaciones deben revelar propósito, no multiplicar acceso.
```

---

## 10. POO como pensamiento de dominio, no dogma de clases

En v0.7.0, POO se entiende conceptualmente como:

- identificar objetos significativos;
- nombrar responsabilidades;
- encapsular reglas;
- proteger invariantes;
- separar comportamientos;
- distinguir identidad, estado y acción;
- controlar relaciones;
- permitir extensión futura.

No significa todavía:

- escribir clases;
- imponer herencia;
- seleccionar lenguaje;
- convertir todo en objeto técnico;
- implementar patrones de diseño;
- sobrediseñar.

Regla:

```text
POO en v0.7.0 es una gramática para pensar el dominio, no una orden de implementación.
```

---

## 11. Invariantes conceptuales del dominio

### Invariantes de agencia

- toda entrega requiere decisión humana;
- la IA no decide por la persona;
- la evidencia no se completa sin criterio humano;
- el portafolio requiere curaduría humana;
- el facilitador acompaña, no sustituye.

### Invariantes de privacidad

- lo privado no es visible por defecto;
- prompt usado completo no es obligatorio;
- reflexión ética completa no es visible por defecto;
- enlace privado es dato de alto cuidado;
- exportar requiere revisión.

### Invariantes de seguridad

- no credenciales;
- no tokens;
- no APIs productivas;
- no almacenamiento automático de archivos finales;
- no datos reales en repositorio;
- no publicación automática.

### Invariantes de no vigilancia

- no ranking;
- no monitoreo continuo;
- no actividad minuto a minuto;
- no telemetría conductual;
- no inferencias sensibles;
- no administrador total.

### Invariantes de local-first

- experiencia esencial sin backend por defecto;
- exportación iniciada por usuario;
- importación validada;
- almacenamiento final diferido;
- local-first no equivale a seguridad total.

---

## 12. Responsabilidad única traducida

Principio SOLID:

```text
Single Responsibility Principle
```

Traducción para AI StoryLab 1:

```text
Cada módulo debe tener una razón clara para cambiar y una responsabilidad ética-pedagógica reconocible.
```

Ejemplos:

- Misión cambia por cambios pedagógicos de misión.
- Evidencia cambia por reglas de registro de evidencia.
- Portafolio cambia por reglas de curaduría.
- EntregaFinal cambia por reglas de cierre.
- ExportaciónLocal cambia por reglas de salida de datos.
- VistaFacilitador cambia por reglas de acompañamiento.
- RevisiónPrivacidad cambia por reglas de exposición.

Riesgo bloqueado:

```text
Un módulo que ve todo, decide todo y exporta todo es arquitectura de vigilancia.
```

---

## 13. Abierto/cerrado traducido

Principio SOLID:

```text
Open/Closed Principle
```

Traducción para AI StoryLab 1:

```text
La arquitectura debe permitir añadir nuevas misiones, herramientas, tipos de evidencia, ayudas contextuales o formatos de entrega sin modificar núcleos sensibles de privacidad, seguridad y agencia.
```

Permitido:

- añadir nueva categoría de herramienta;
- añadir nuevo tipo de evidencia;
- añadir nuevo formato de entrega;
- añadir nueva ayuda contextual;
- añadir nuevo estado documental.

No permitido sin gate:

- añadir backend;
- añadir IA embebida;
- añadir analíticas;
- añadir ranking;
- añadir publicación automática;
- añadir exportación grupal identificante.

Regla:

```text
La extensión no debe perforar los límites éticos.
```

---

## 14. Sustitución de Liskov traducida

Principio SOLID:

```text
Liskov Substitution Principle
```

Traducción para AI StoryLab 1:

```text
Una variante futura de un objeto o módulo no debe romper las expectativas éticas, pedagógicas o funcionales del objeto base.
```

Ejemplos:

- Una EvidenciaVisual sigue respetando privacidad de evidencia.
- Una EvidenciaAudio sigue respetando sensibilidad de voz.
- Una HerramientaIA sigue siendo herramienta externa, no autoridad interna.
- Una ExportaciónPortafolio sigue excluyendo progreso completo.
- Una VistaFacilitador futura sigue siendo no vigilante.
- Una EntregaVideo sigue sin almacenar el archivo final automáticamente.

Regla:

```text
Una variante no puede obtener más poder solo por ser técnicamente posible.
```

---

## 15. Segregación de interfaces traducida

Principio SOLID:

```text
Interface Segregation Principle
```

Traducción para AI StoryLab 1:

```text
Cada rol, vista o módulo debe recibir solo las capacidades y datos que necesita para su propósito.
```

Aplicaciones:

- estudiante ve su trabajo y controles;
- facilitador ve evidencia compartida y rutas de apoyo;
- docente responsable ve configuración pedagógica bajo límites;
- mantenedor documental ve documentación y deudas;
- exportador ve datos preparados para salida;
- importador ve estructura y validación, no permisos pedagógicos;
- herramienta externa no recibe datos desde la app.

Bloqueado:

- facilitador administrador total;
- vista única con todo;
- exportador con acceso a privados por defecto;
- interfaz de herramienta con credenciales;
- dashboard que mezcla progreso completo y ranking.

---

## 16. Inversión de dependencias traducida

Principio SOLID:

```text
Dependency Inversion Principle
```

Traducción para AI StoryLab 1:

```text
Las reglas de alto nivel no deben depender de mecanismos concretos como localStorage, JSON, PowerPoint, MP4, una herramienta IA o un proveedor externo.
```

Capas de alto nivel:

- privacidad por defecto;
- seguridad por diseño;
- agencia humana;
- no vigilancia;
- portafolio curado;
- entrega con metadatos mínimos;
- exportabilidad revisable.

Mecanismos concretos diferidos o intercambiables:

- localStorage;
- IndexedDB;
- SQLite;
- JSON;
- backend futuro;
- proveedor IA;
- herramienta de presentación;
- plataforma de video;
- LMS.

Regla:

```text
El principio manda; el mecanismo obedece.
```

---

## 17. Encapsulación de reglas sensibles

Reglas sensibles que deben encapsularse:

- completar misión requiere evidencia, decisión humana y reflexión;
- portafolio no incluye progreso completo;
- prompt usado completo no es obligatorio;
- reflexión completa no visible por defecto;
- entrega no almacena archivo final;
- exportación excluye privados por defecto;
- importación valida tipo y versión;
- Vista Facilitador no ve privados;
- herramientas externas no conectan cuentas;
- IA no embebida;
- no ranking;
- no monitoreo continuo.

Estas reglas no deben dispersarse en muchas vistas sin control.

Regla:

```text
Una regla ética repetida sin módulo termina convertida en ornamento.
```

---

## 18. Acoplamientos heredados a transformar

### App como coordinador central

`App.jsx` coordina vistas, estado, persistencia, perfil, exportación, importación y Vista Facilitador.

Transformación futura:

- separar navegación;
- separar estado de dominio;
- separar casos de uso;
- separar persistencia;
- separar composición de vistas;
- separar perfil local;
- separar permisos conceptuales.

### Portafolio emergente automático

El portafolio se deriva de sesiones.

Transformación futura:

- mantener derivación como apoyo;
- añadir curaduría humana;
- separar portafolio de progreso completo;
- controlar prompts y reflexiones.

### Dashboard grupal

Transformación futura:

- reemplazar por Vista Facilitador no vigilante;
- limitar datos;
- auditar agregados;
- bloquear ranking.

### Export/import

Transformación futura:

- separar exportación individual, portafolio, entrega y grupo;
- vista previa;
- exclusiones;
- validación más explícita;
- advertencias.

---

## 19. Módulos prohibidos o bloqueados

No deben existir en v0.7.0 como módulos productivos:

- MotorIAInterno;
- EvaluadorAutomáticoIA;
- DetectorIA;
- RankingEstudiantil;
- MonitorActividad;
- TelemetríaConductual;
- AdministradorTotalFacilitador;
- PublicadorAutomático;
- SubidorArchivosFinales;
- ImportadorChatsIA;
- AnalíticaProductividad;
- PerfiladorEstudiante;
- SincronizadorNube;
- GestorCredencialesExternas;
- MotorAlertasPunitivas.

Pueden aparecer solo como riesgos bloqueados en documentación.

---

## 20. Módulos diferidos

Quedan diferidos a gates futuros:

- Backend;
- Autenticación;
- Autorización técnica;
- Base de datos;
- Cifrado final;
- Sincronización;
- LMS;
- Galería pública;
- Repositorio institucional de entregas;
- Analíticas no identificantes;
- Investigación;
- API IA;
- Proveedor IA;
- Adaptadores externos;
- Internacionalización;
- Accesibilidad final validada;
- Testing técnico final.

---

## 21. Mapa conceptual de paquetes futuros

Este mapa es conceptual, no estructura final de carpetas.

```text
dominio/
  proyecto
  misiones
  evidencia
  decision-humana
  reflexion-etica
  portafolio
  entrega
  herramientas
  ia-externa

aplicacion/
  casos-de-uso
  reglas-validacion
  servicios-exportacion
  servicios-importacion
  revision-privacidad
  revision-creditos

presentacion/
  vistas-estudiante
  vista-facilitador
  ayudas-contextuales
  glosario
  herramientas
  entrega

infraestructura/
  almacenamiento-local
  exportacion-json
  importacion-json
  adaptadores-futuros

gobernanza/
  decisiones
  deudas
  gates
  versionado
```

Regla:

```text
Un mapa conceptual no obliga una carpeta; obliga una separación de responsabilidades.
```

---

## 22. Casos de uso candidatos

- CrearPerfilLocal;
- ActualizarPerfilLocal;
- IniciarProyectoCreativo;
- RegistrarEvidencia;
- RegistrarDecisionHumana;
- RegistrarReflexionEtica;
- GuardarPromptUsadoResumen;
- DeclararUsoIA;
- RegistrarCredito;
- CompletarMision;
- SolicitarFeedback;
- CompartirEvidencia;
- CurarPortafolio;
- PrepararEntregaFinal;
- ConfirmarRevisionPrivacidad;
- ConfirmarCreditos;
- ExportarProgresoIndividual;
- ExportarPortafolio;
- ExportarEntrega;
- ImportarProgreso;
- ValidarImportacion;
- GenerarVistaPreviaExportacion;
- RegistrarDeuda;
- AprobarDocumento.

No son casos de uso permitidos:

- EvaluarConIA;
- RankearEstudiantes;
- MonitorearActividad;
- ImportarChatIA;
- PublicarAutomaticamente;
- SincronizarSinConsentimiento;
- ExportarTodo;
- AdministrarTodoComoFacilitador.

---

## 23. Eventos de dominio candidatos

Eventos conceptuales, no implementación:

- PerfilLocalCreado;
- ProyectoIniciado;
- MisionExplorada;
- EvidenciaRegistrada;
- DecisionHumanaRegistrada;
- ReflexionEticaSeleccionada;
- PromptUsadoResumido;
- HerramientaDeclarada;
- CreditoConfirmado;
- DeclaracionIAConfirmada;
- RevisionPrivacidadConfirmada;
- MisionListaParaRevision;
- PortafolioCurado;
- EntregaPreparada;
- ExportacionRevisada;
- ExportacionGenerada;
- ImportacionValidada;
- FeedbackFormativoEmitido;
- DeudaRegistrada;
- GatePendiente.

Eventos prohibidos:

- EstudianteRankeado;
- RiesgoInferido;
- ActividadMonitoreada;
- ChatIAImportado;
- EntregaEvaluadaAutomaticamente;
- ArchivoPublicadoAutomaticamente.

---

## 24. Reglas de visibilidad por objeto

| Objeto | Privado por defecto | Compartible | Exportable | Bloqueos |
|---|---:|---:|---:|---|
| EvidenciaPrivada | Sí | Solo si se selecciona | Con revisión | No captura total |
| EvidenciaCompartida | No necesariamente | Sí | Con revisión | No ranking |
| DecisiónHumana | Alto cuidado | Seleccionada | Con revisión | No IA decisora |
| ReflexiónÉtica | Sí | Fragmento curado | Con revisión | No diagnóstico |
| PromptUsadoResumen | Sí | Resumen | Con revisión | No prompt completo obligatorio |
| HerramientaExterna | No | Sí | Sí | No credenciales |
| EnlacePrivado | Alto cuidado | Solo propósito claro | No por defecto | No público automático |
| EntregaFinal | Parcial | Metadatos mínimos | Con revisión | No archivo final |
| PortafolioCurado | No necesariamente | Sí | Sí | No progreso completo |
| VistaFacilitador | Limitada | N/A | N/A | No vigilancia |

---

## 25. Arquitectura de permisos conceptuales

Permisos no técnicos, solo conceptuales:

- ver propio;
- editar propio;
- seleccionar evidencia;
- compartir evidencia;
- retirar evidencia;
- documentar IA;
- confirmar créditos;
- confirmar privacidad;
- curar portafolio;
- preparar entrega;
- exportar propio;
- importar propio;
- solicitar apoyo;
- comentar formativamente;
- ver evidencia compartida;
- revisar entrega;
- registrar deuda;
- aprobar documento.

Permisos bloqueados:

- ver todo;
- editar ajeno sin autorización;
- exportar ajeno;
- publicar ajeno;
- rankear;
- monitorear;
- importar chats;
- acceder a cuentas;
- validar automáticamente;
- administrar total.

---

## 26. Arquitectura de datos sensibles

Clasificación transversal:

### Bajo cuidado

- términos glosario;
- prompts recomendados;
- herramientas públicas;
- categorías;
- ayudas contextuales.

### Cuidado medio

- estado de misión;
- herramienta declarada;
- formato de entrega;
- licencia;
- créditos.

### Alto cuidado

- prompt usado;
- reflexión ética;
- enlace privado;
- identidad;
- avatar;
- ubicación de entrega;
- notas;
- interés en galería;
- autoría pública;
- datos grupales.

### Bloqueado

- datos reales innecesarios;
- credenciales;
- tokens;
- chats completos IA;
- actividad minuto a minuto;
- ranking;
- inferencias sensibles;
- archivos finales automáticos;
- datos biométricos;
- ubicación física.

---

## 27. Arquitectura de exportación conceptual

ExportaciónLocal debe depender de:

- TipoExportación;
- ReglasPrivacidad;
- ReglasSeguridad;
- VistaPreviaExportación;
- ConfirmaciónHumana;
- VersiónEsquema;
- Validador.

No debe depender de:

- Vista React concreta;
- proveedor de nube;
- backend;
- cuenta externa;
- herramienta IA;
- dashboard grupal.

Regla:

```text
La exportación es una puerta con inspección humana, no una cinta transportadora.
```

---

## 28. Arquitectura de Vista del Facilitador

La Vista del Facilitador debe depender de:

- EvidenciaCompartida;
- EstadoFormativo mínimo;
- SolicitudApoyo;
- FeedbackFormativo;
- RutaApoyo;
- MetadatosEntrega mínimos;
- RevisiónPrivacidad;
- PermisosConceptuales.

No debe depender de:

- progreso completo;
- borradores;
- prompts completos;
- chats IA;
- actividad minuto a minuto;
- ranking;
- analíticas;
- datos privados;
- enlaces sin propósito.

---

## 29. Arquitectura de IA externa

El módulo IAExterna conceptual debe contener:

- prompts recomendados;
- prompt usado resumido;
- declaración IA;
- herramienta declarada;
- decisión humana posterior;
- créditos;
- reflexión ética seleccionada.

No debe contener:

- API;
- proveedor;
- token;
- credenciales;
- chat importado;
- scoring;
- detector;
- evaluación;
- recomendaciones automáticas personalizadas.

---

## 30. Arquitectura de herramientas externas

El módulo HerramientasExternas conceptual debe contener:

- ficha herramienta;
- categoría;
- dificultad;
- nivel privacidad;
- propósito;
- riesgos;
- alternativas;
- nota institucional;
- créditos;
- relación con entrega.

No debe contener:

- credenciales;
- conexión;
- API;
- telemetría;
- ranking;
- dependencia obligatoria.

---

## 31. Arquitectura de glosario y ayudas

El módulo GlosarioAyudas conceptual debe contener:

- término;
- definición;
- categoría;
- etiqueta;
- ayuda contextual;
- advertencia cuidada;
- lenguaje recomendado;
- lenguaje bloqueado.

No debe contener:

- mensajes punitivos;
- estados vigilantes;
- instrucciones para exportar todo;
- ambigüedad entre recomendado y obligatorio.

---

## 32. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- componentes separados;
- utilidades puras de progreso;
- derivación de portafolio como apoyo;
- validación de importación;
- final_submission sin archivo final;
- local-first;
- export/import JSON;
- glosario;
- herramientas;
- decisión humana;
- reflexión ética;
- revisión humana;
- no backend;
- no APIs externas.

### Transformar

- App como coordinador central;
- ProfileScreen inline;
- HomeScreen inline;
- portafolio emergente;
- dashboard grupal;
- group_progress;
- last_updated;
- prompt_used;
- private_link;
- facilitator_validation_status;
- localStorage como mecanismo;
- validación de export/import;
- permisos conceptuales;
- estados de entrega;
- notas.

### Diferir

- estructura final de carpetas;
- clases o tipos finales;
- TypeScript;
- backend;
- autenticación;
- autorización técnica;
- base de datos;
- cifrado final;
- testing;
- patrones de diseño concretos;
- integración LMS;
- galería pública;
- APIs IA;
- analíticas.

### Bloquear

- módulo IA interno;
- detector IA;
- evaluador automático;
- ranking;
- monitoreo continuo;
- telemetría conductual;
- administrador total;
- publicación automática;
- subida automática;
- almacenamiento automático de archivos finales;
- importación automática de chats;
- credenciales;
- tokens;
- datos reales;
- exportar todo.

### Mantener en auditoría

- exportación grupal;
- Vista Facilitador;
- señales agregadas;
- grupos pequeños;
- portafolio derivado;
- notas facilitador;
- estado validación;
- avatar;
- enlace privado;
- nombre archivo;
- last_updated;
- badges;
- métricas de completitud;
- intereses de galería.

---

## 33. Decisiones candidatas

### DEC-ARCH-001 · Arquitectura modular antes que implementación

```text
Estado: Candidata para aprobación documental
```

AI StoryLab 1 debe definir módulos, objetos y responsabilidades antes de refactorizar o implementar.

### DEC-ARCH-002 · Dominio pedagógico como núcleo

```text
Estado: Candidata para aprobación documental
```

El centro arquitectónico son objetos de aprendizaje, evidencia, decisión, reflexión, portafolio y entrega.

### DEC-ARCH-003 · Reglas sensibles encapsuladas

```text
Estado: Candidata para aprobación documental
```

Privacidad, seguridad, no vigilancia, exportación y entrega deben expresarse como reglas separadas y protegidas.

### DEC-ARCH-004 · POO conceptual, no implementación obligatoria

```text
Estado: Candidata para aprobación documental
```

POO se adopta como herramienta de modelado conceptual, no como mandato de clases en v0.7.0.

### DEC-ARCH-005 · SOLID como criterio ético-técnico

```text
Estado: Candidata para aprobación documental
```

SOLID se traduce para proteger responsabilidades, límites, extensibilidad y dependencias éticamente seguras.

### DEC-ARCH-006 · App heredada como composición a transformar

```text
Estado: Candidata para aprobación documental
```

`App.jsx` se reconoce como coordinador heredado útil, pero requiere separación futura de responsabilidades.

### DEC-ARCH-007 · No módulos de vigilancia

```text
Estado: Candidata para aprobación documental
```

Quedan bloqueados módulos de ranking, monitoreo, evaluación automática, detector IA, telemetría y administrador total.

### DEC-ARCH-008 · Dependencias concretas diferidas

```text
Estado: Candidata para aprobación documental
```

LocalStorage, JSON, MP4, PowerPoint, herramientas IA y proveedores externos no deben definir el dominio.

---

## 34. Riesgos

| Riesgo | Severidad | Control conceptual |
|---|---|---|
| Refactor prematuro | Alta | Documento no implementativo |
| Sobrediseño | Media/alta | Objetos mínimos y propósito |
| App central crece como dios técnico | Alta | Separación futura |
| Vista Facilitador recibe demasiados datos | Crítica | Interfaces segregadas |
| Exportación conoce privados | Alta | Reglas de privacidad |
| Portafolio extrae todo | Alta | Portafolio curado |
| IA externa se vuelve módulo interno | Crítica | IA no embebida |
| Herramienta concreta define arquitectura | Alta | Inversión dependencias |
| SOLID se usa como dogma técnico | Media | Traducción ética |
| POO fuerza clases innecesarias | Media | Conceptual, no implementación |
| Grupo se vuelve vigilancia | Crítica | Auditoría |
| Datos sensibles viajan entre capas | Alta | Encapsulación |

---

## 35. Controles conceptuales

| Control | Descripción |
|---|---|
| Capas conceptuales | Separan dominio, aplicación, presentación, persistencia y gobernanza. |
| Objetos de dominio | Nombran conceptos centrales y responsabilidades. |
| Invariantes | Reglas que ninguna variante puede romper. |
| Interfaces mínimas | Cada rol o módulo recibe solo lo necesario. |
| Reglas encapsuladas | Privacidad, seguridad y no vigilancia no quedan dispersas. |
| Dependencias invertidas | Principios no dependen de mecanismos concretos. |
| Gates futuros | Cualquier backend, IA, galería o analítica requiere revisión. |
| Matriz de transformación | Distingue preservar, transformar, diferir, bloquear y auditar. |
| Lenguaje canónico | Evita módulos con nombres peligrosos. |
| Revisión humana | Ningún diseño activa implementación automáticamente. |

---

## 36. Preguntas abiertas

1. ¿Qué objetos de dominio son indispensables para v1.0.0?
2. ¿Qué objetos deben permanecer solo conceptuales?
3. ¿Conviene usar TypeScript en una fase posterior?
4. ¿Qué reglas deben convertirse en validadores?
5. ¿Qué reglas deben mantenerse como documentación?
6. ¿Cómo separar navegación y estado sin sobrediseñar?
7. ¿Cómo transformar portafolio emergente en portafolio curado?
8. ¿Cómo rediseñar Vista Facilitador sin dashboard grupal?
9. ¿Qué interfaz mínima necesita exportación?
10. ¿Qué interfaz mínima necesita importación?
11. ¿Qué estructura de carpetas futura sostendría mejor el dominio?
12. ¿Qué pruebas mínimas se requerirán para reglas sensibles?
13. ¿Qué eventos de dominio realmente aportan valor?
14. ¿Cómo preservar local-first sin quedar atados a localStorage?
15. ¿Qué gates técnicos son necesarios antes de v1.0.0?

---

## 37. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- arquitectura modular queda definida como marco conceptual, no implementación;
- objetos de dominio quedan identificados como candidatos;
- POO queda definida como herramienta conceptual, no mandato de clases;
- SOLID queda traducido como criterio ético-técnico;
- dominio pedagógico queda al centro de la arquitectura;
- reglas sensibles deben encapsularse;
- `App.jsx` heredado queda reconocido como coordinador a transformar, no como arquitectura final;
- módulos de vigilancia quedan bloqueados;
- IA interna, evaluador automático, ranking, monitoreo, telemetría y publicación automática quedan bloqueados;
- dependencias concretas como localStorage, JSON, MP4, PowerPoint o proveedores IA quedan diferidas como mecanismos;
- ninguna decisión aquí activa implementación.

---

## 38. Impacto sobre próxima familia

| Familia posterior | Impacto |
|---|---|
| Gobernanza técnica hacia v1.0.0 | Provee objetos, módulos, invariantes, gates y criterios para decidir qué puede pasar a implementación futura. |

---

## 39. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Arquitectura Modular, Objetos de Dominio, POO y Principios SOLID de AI StoryLab 1 v0.7.0 como decimotercera familia del Mapa de Decisiones Técnicas.

El documento traduce las familias 1 a 12 en módulos conceptuales, objetos de dominio, capas, responsabilidades, invariantes, reglas sensibles, casos de uso, eventos candidatos, permisos conceptuales y criterios de modularidad futura.

El hito define POO como herramienta de modelado conceptual y SOLID como criterio ético-técnico para proteger agencia humana, privacidad por defecto, seguridad por diseño, local-first, trazabilidad no vigilante, Vista del Facilitador limitada, portafolio curado, entrega con metadatos mínimos y exportabilidad revisable.

Este hito reconoce aciertos heredados como componentes separados, utilidades puras de progreso, derivación de portafolio, validación de importación y entrega final sin archivo; y transforma acoplamientos sensibles como App.jsx centralizado, portafolio emergente automático, dashboard grupal, group_progress, last_updated, prompt_used, private_link, facilitator_validation_status y localStorage como mecanismo.

Este hito bloquea módulos de IA interna, detector IA, evaluador automático, ranking, monitoreo continuo, telemetría conductual, administrador total, publicación automática, subida automática, almacenamiento automático de archivos finales, importación automática de chats, credenciales, tokens, datos reales e implementación prematura.
```

Mensaje de commit sugerido:

```bash
git commit \
  -m "docs: agregar arquitectura modular dominio solid v0.7" \
  -m "Hito: integra la decimotercera familia del Mapa de Decisiones Tecnicas v0.7.0. Define arquitectura modular conceptual, objetos de dominio, POO como modelado y SOLID como criterio etico-tecnico, bloqueando IA interna, ranking, monitoreo, telemetria, publicacion automatica, datos reales e implementacion prematura."
```

---

## 40. Dictamen de aprobación

La Familia 13 queda definida como el puente conceptual entre documentación estratégica y arquitectura futura.

Su decisión más importante es:

```text
AI StoryLab 1 no debe organizarse alrededor de pantallas o herramientas, sino alrededor de responsabilidades, objetos de dominio y límites éticos verificables.
```

Este documento cierra la decimotercera familia como modelo aprobado de arquitectura modular, objetos de dominio, POO conceptual y principios SOLID como criterio ético-técnico. No cierra gobernanza técnica hacia v1.0.0.  
Establece el marco para continuar con:

```text
Familia 14 · Gobernanza técnica hacia v1.0.0
```

---

## 41. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- arquitectura modular queda definida como marco conceptual, no implementación;
- objetos de dominio quedan identificados como candidatos;
- POO queda definida como herramienta conceptual, no mandato de clases;
- SOLID queda traducido como criterio ético-técnico;
- dominio pedagógico queda al centro de la arquitectura;
- reglas sensibles deben encapsularse;
- `App.jsx` heredado queda reconocido como coordinador a transformar, no como arquitectura final;
- módulos de vigilancia quedan bloqueados;
- IA interna, evaluador automático, ranking, monitoreo, telemetría y publicación automática quedan bloqueados;
- dependencias concretas como localStorage, JSON, MP4, PowerPoint o proveedores IA quedan diferidas como mecanismos;
- ninguna decisión aquí activa implementación.

Esta aprobación autoriza continuar con la decimocuarta familia del mapa:

```text
Gobernanza técnica hacia v1.0.0
```

No autoriza código, refactor, clases reales, interfaces reales, estructura final de carpetas, TypeScript, backend, autenticación, autorización técnica, base de datos, APIs, almacenamiento final, testing final, despliegue, datos reales ni validación con personas.

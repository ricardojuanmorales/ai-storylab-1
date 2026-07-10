# Gobernanza Técnica de Cierre v0.7.0 y Alineación Versionada hacia v1.0.0 · AI StoryLab 1

**Nombre canónico previsto:** `Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md`  
**Marca de trabajo de esta descarga:** `_APROBADO`  
**Proyecto:** AI StoryLab 1  
**Fase actual:** `v0.7.0 · Arquitectura Técnica + Seguridad`  
**Familia del mapa:** Familia 14 · Gobernanza técnica hacia v1.0.0  
**Tipo de documento:** Documento técnico-conceptual, estratégico, ético, operacional, documental y pre-implementativo  
**Estado:** Aprobado por revisión humana explícita para integración canónica semántica  
**Fecha de trabajo:** 2026-07-10  
**Zona horaria de referencia:** America/Puerto_Rico  

**Función precisa de este documento:**  
Cerrar documentalmente v0.7.0 y alinear la continuidad versionada hacia:

```text
v0.8.0 · Implementación incremental
v0.9.0 · Validación + marketplace readiness
v1.0.0 · Publicación estable / ecosistema funcional publicable
```

**Documentos rectores de ruta versionada:**  
- `Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md`
- `Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md`
- `Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md`

**Documentos de entrada de v0.7.0:**  
1. `Auditoria_Herencia_Funcional_MVP_v0_3_v0_7_AI_StoryLab.md`
2. `Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md`
3. `Modelo_Datos_Conceptual_v0_7_AI_StoryLab.md`
4. `Modelo_Roles_Permisos_v0_7_AI_StoryLab.md`
5. `Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md`
6. `Modelo_Seguridad_Diseno_v0_7_AI_StoryLab.md`
7. `Modelo_Privacidad_Defecto_v0_7_AI_StoryLab.md`
8. `Trazabilidad_Formativa_No_Vigilante_v0_7_AI_StoryLab.md`
9. `Prompts_Documentacion_IA_No_Embebida_v0_7_AI_StoryLab.md`
10. `Ecosistema_Herramientas_Recursos_Externos_Notas_Institucionales_v0_7_AI_StoryLab.md`
11. `Glosario_Operativo_Lenguaje_Canonico_Ayudas_Contextuales_v0_7_AI_StoryLab.md`
12. `Entrega_Portafolio_Metadatos_Exportabilidad_Local_First_v0_7_AI_StoryLab.md`
13. `Arquitectura_Modular_Objetos_Dominio_POO_SOLID_v0_7_AI_StoryLab.md`

---

## Nota protocolaria de trabajo

Este documento se entrega como **versión aprobada descargable** posterior a revisión humana explícita.

El sufijo `_APROBADO` pertenece únicamente al flujo de trabajo de sesión y descarga.

En el repositorio, el archivo deberá integrarse únicamente con nombre canónico semántico, sin sufijos de estado:

```text
Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md
```

Ruta canónica sugerida:

```text
18_DOCUMENTACION_ACTIVA/Continuidad/v0_7_0/Arquitectura_Tecnica_Seguridad/Gobernanza_Tecnica/Gobernanza_Tecnica_Hacia_v1_0_0_AI_StoryLab.md
```

Este documento cuenta con aprobación humana explícita para integrarse al repositorio con nombre canónico semántico, sin sufijo `_APROBADO`.

---

## 0. Corrección de encuadre

Este documento corrige el encuadre anterior que podía leerse como un salto directo:

```text
v0.7.0 → gates futuros → v1.0.0
```

La ruta correcta y ya acordada es:

```text
v0.7.0 · cierre documental de arquitectura técnica + seguridad
→ v0.8.0 · implementación incremental
→ v0.9.0 · validación + marketplace readiness
→ v1.0.0 · publicación estable / ecosistema funcional publicable
```

La hoja de ruta histórica v0.3/v0.4 puede usarse solo como antecedente de evolución.  
No es la fuente rectora vigente para esta gobernanza.

Las fuentes rectoras vigentes son:

```text
Mapa_Ruta_v0_5_a_v1_0_Ecosistema_Funcional_AI_StoryLab.md
Matriz_Fases_v0_5_a_v1_0_AI_StoryLab.md
Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0_AI_StoryLab.md
```

Dictamen de corrección:

```text
La Familia 14 no abre v1.0.0 directamente. Cierra v0.7.0 y deja alineada la ruta gobernada hacia v0.8.0, v0.9.0 y v1.0.0.
```

---

## 1. Pregunta rectora

```text
¿Cómo debe AI StoryLab 1 cerrar v0.7.0 y alinear la continuidad hacia v0.8.0, v0.9.0 y v1.0.0 sin confundir documentación con implementación, implementación con publicación, validación con release estable, ni roadmap con autorización automática?
```

Respuesta inicial:

```text
AI StoryLab 1 debe cerrar v0.7.0 como arquitectura documental de decisión y establecer una gobernanza versionada: v0.8.0 para implementación incremental, v0.9.0 para validación y readiness, y v1.0.0 para publicación estable del ecosistema funcional publicable, cada fase condicionada por gates independientes, revisión humana y deuda visible.
```

---

## 2. Propósito

Este documento define la gobernanza técnica para:

- cerrar documentalmente v0.7.0;
- consolidar las 14 familias del mapa;
- alinear la ruta vigente v0.5 → v1.0;
- separar con nitidez v0.8.0, v0.9.0 y v1.0.0;
- convertir el mapa de decisiones v0.7.0 en condiciones para fases posteriores;
- definir gates por transición;
- registrar deuda activa;
- proteger local-first, privacidad, seguridad, agencia humana y no vigilancia;
- impedir implementación prematura;
- evitar que v1.0.0 se reduzca a backend, auth, IA o subida de archivos;
- preservar v1.0.0 como ecosistema funcional publicable;
- preparar continuidad documental hacia la próxima fase.

---

## 3. Alcance

Este documento cubre:

- cierre documental de v0.7.0;
- relación con el mapa v0.5 → v1.0;
- relación con la matriz de fases;
- relación con la decisión correctiva de v1.0.0;
- gates de cierre y apertura por fase;
- estado de las 14 familias;
- matriz de transición v0.7 → v0.8 → v0.9 → v1.0;
- deudas por fase;
- criterios de promoción;
- criterios de no promoción;
- checklist de PR futuro;
- release criteria documental;
- release criteria para v0.8.0, v0.9.0 y v1.0.0;
- límites no negociables;
- decisiones candidatas;
- criterios de aprobación humana.

---

## 4. Fuera de alcance

Este documento no:

- implementa código;
- abre v0.8.0;
- abre v0.9.0;
- abre v1.0.0;
- crea rama futura;
- define stack final;
- define backend;
- define autenticación;
- define base de datos;
- define APIs;
- define proveedor IA;
- define despliegue;
- define publicación estable;
- valida con personas;
- usa datos reales;
- cierra deudas técnicas sin evidencia;
- autoriza cambios mayores;
- sustituye el mapa de ruta vigente;
- sustituye la matriz de fases;
- sustituye la decisión correctiva de v1.0.0.

---

## 5. Principio rector

```text
La gobernanza técnica de AI StoryLab 1 debe hacer que cada versión futura avance solo lo que su fase autoriza, bajo gates explícitos, deuda visible, revisión humana y continuidad documental verificable.
```

Corolarios:

- v0.7.0 no implementa;
- v0.8.0 no publica estable;
- v0.9.0 no declara v1.0.0 sin criterios completos;
- v1.0.0 no introduce cambios mayores sin nueva fase;
- roadmap no equivale a autorización;
- gate aprobado no equivale a release;
- deuda visible es control de seguridad;
- todo avance debe trazarse a familia aprobada;
- todo avance debe declarar qué no implementa;
- todo avance debe preservar local-first, privacidad, seguridad, agencia humana y no vigilancia.


---

## 6. Plan de versiones vigente

La ruta vigente acordada es:

```text
v0.5.0 → v0.6.0 → v0.7.0 → v0.8.0 → v0.9.0 → v1.0.0
```

### v0.5.0 · Gobernanza y roadmap

Naturaleza:

```text
Documental estratégica.
```

Autoriza:

- planificar ruta;
- definir gates;
- registrar deuda;
- corregir destino v1.0.0;
- consolidar decisiones mayores.

No autoriza:

- implementación;
- arquitectura técnica ejecutable;
- testing operativo;
- validación con personas;
- despliegue.

### v0.6.0 · Diseño funcional + UX

Naturaleza:

```text
Diseño funcional condicionado.
```

Autoriza:

- requisitos funcionales;
- flujos por público;
- experiencia de usuario;
- criterios de aceptación;
- diseño de módulos funcionales;
- UX no implementada o funcional según gate.

No autoriza por sí sola:

- arquitectura ejecutable;
- implementación sin gate;
- despliegue.

### v0.7.0 · Arquitectura técnica + seguridad

Naturaleza:

```text
Arquitectura técnica condicionada.
```

Autoriza:

- arquitectura local-first;
- modelo de dominio;
- persistencia conceptual;
- seguridad;
- privacidad;
- threat models;
- decisiones técnicas;
- CI base si gate específico lo habilita.

No autoriza por sí sola:

- implementación productiva;
- despliegue;
- release estable;
- validación con personas;
- datos reales.

### v0.8.0 · Implementación incremental

Naturaleza:

```text
Construcción controlada.
```

Autoriza, si se abre mediante gate:

- código modular;
- construcción por módulos;
- pruebas unitarias;
- integración incremental;
- feature flags o gates;
- documentación técnica;
- uso de datos sintéticos;
- refactor controlado.

No autoriza por sí sola:

- publicación estable;
- marketplace readiness;
- datos reales sin gate;
- release candidate final;
- activación de funciones mayores bloqueadas.

### v0.9.0 · Validación + marketplace readiness

Naturaleza:

```text
Release candidate.
```

Autoriza, si se abre mediante gate:

- test suite;
- validación;
- accesibilidad;
- documentación de usuario;
- empaquetado;
- preparación marketplace;
- release candidate.

No autoriza por sí sola:

- declarar v1.0.0 sin criterios completos;
- cambios mayores no validados;
- abrir funciones nuevas fuera del alcance.

### v1.0.0 · Publicación estable

Naturaleza:

```text
Ecosistema funcional publicable.
```

Autoriza, si v0.8.0 y v0.9.0 cumplen sus gates:

- release estable;
- aplicación estable;
- guías;
- documentación educativa y técnica;
- release notes;
- plan de mantenimiento;
- gobernanza post-release.

No autoriza por sí sola:

- cambios mayores sin nueva fase;
- expansión de alcance sin gobernanza;
- incorporación automática de backend, auth, IA embebida, datos reales, galería o analíticas.

---

## 7. Interpretación correcta de v1.0.0

v1.0.0 debe entenderse como:

```text
ecosistema_funcional_publicable
```

Incluye:

- aplicación funcional local-first;
- metodología operativa transdisciplinaria;
- documentación educativa y técnica;
- guías docentes y humanas;
- specs;
- criterios de aceptación;
- seguridad;
- privacidad;
- pruebas;
- validación;
- despliegue cuando aplique;
- mantenimiento;
- gobernanza post-release.

No debe entenderse como una lista automática de tecnologías.

En particular:

```text
v1.0.0 ≠ backend obligatorio
v1.0.0 ≠ autenticación obligatoria
v1.0.0 ≠ base remota obligatoria
v1.0.0 ≠ APIs IA obligatorias
v1.0.0 ≠ subida automática de archivos
v1.0.0 ≠ dashboard de vigilancia
v1.0.0 ≠ galería pública por defecto
```

Regla:

```text
v1.0.0 es destino funcional estable, no excusa para importar todos los deseos técnicos anteriores.
```

---

## 8. Relación entre v0.7.0 y el plan versionado

v0.7.0 debe cerrar:

- arquitectura local-first;
- modelo conceptual de datos;
- roles y permisos;
- Vista del Facilitador no vigilante;
- seguridad por diseño;
- privacidad por defecto;
- trazabilidad formativa no vigilante;
- IA no embebida;
- herramientas externas no integradas;
- lenguaje canónico;
- entrega y exportabilidad;
- arquitectura modular;
- gobernanza técnica versionada.

v0.7.0 debe entregar a v0.8.0:

- mapa de decisiones completo;
- deudas visibles;
- gates de apertura;
- módulos candidatos;
- objetos de dominio;
- invariantes;
- reglas sensibles;
- límites no negociables;
- criterios de aceptación preliminares;
- matriz de riesgos;
- matriz de continuidad.

v0.7.0 no entrega a v0.8.0:

- autorización automática de código;
- stack final;
- backlog técnico completo;
- autorización de datos reales;
- autorización de backend;
- autorización de IA embebida;
- autorización de despliegue.

---

## 9. Estado consolidado de v0.7.0

| Familia | Estado | Función de cierre |
|---|---|---|
| 1. Herencia funcional MVP v0.3 | Aprobada | Define preservar, transformar, diferir, bloquear y auditar. |
| 2. Arquitectura local-first | Aprobada | Define control local y límites de dependencia. |
| 3. Modelo conceptual de datos | Aprobada | Define entidades, sensibilidad y datos bloqueados. |
| 4. Roles y permisos | Aprobada | Define agencia, mínimos y roles bloqueados. |
| 5. Vista del Facilitador | Aprobada | Rediseña acompañamiento no vigilante. |
| 6. Seguridad por diseño | Aprobada | Define activos, amenazas y controles. |
| 7. Privacidad por defecto | Aprobada | Define visibilidad mínima y compartición con propósito. |
| 8. Trazabilidad formativa | Aprobada | Define memoria pedagógica no vigilante. |
| 9. Prompts e IA no embebida | Aprobada | Define IA externa opcional y manual. |
| 10. Herramientas y recursos | Aprobada | Define recursos orientados, no integraciones. |
| 11. Glosario y ayudas | Aprobada | Define lenguaje canónico y bloqueos semánticos. |
| 12. Entrega y exportabilidad | Aprobada | Define entrega con metadatos mínimos y exportación revisable. |
| 13. Arquitectura modular | Aprobada | Define módulos, objetos, invariantes y SOLID ético-técnico. |
| 14. Gobernanza técnica | En revisión | Cierra v0.7.0 y alinea v0.8 → v0.9 → v1.0. |


---

## 10. Gates por transición

### Gate de cierre v0.7.0

Requiere:

- 14 familias aprobadas;
- rutas canónicas verificadas;
- comentarios de hito;
- mapa de estado consolidado;
- deudas visibles;
- `DFUX-FAC-v0.6-001` activa si no hay evidencia técnica;
- matriz de continuidad hacia v0.8.0;
- registro explícito de que no hubo implementación;
- registro explícito de que no hubo datos reales;
- registro explícito de que no hubo despliegue.

No permite:

- abrir v0.8.0 automáticamente;
- cerrar deudas sin evidencia;
- activar código por inferencia.

### Gate de apertura v0.8.0

Requiere:

- documento de apertura v0.8.0;
- alcance técnico limitado;
- backlog incremental;
- trazabilidad familia → módulo → objeto → caso de uso;
- plan de datos sintéticos;
- plan de pruebas unitarias;
- feature flags o gates;
- criterios de reversibilidad;
- checklist privacidad;
- checklist seguridad;
- checklist no vigilancia;
- revisión humana explícita.

No permite:

- release estable;
- marketplace readiness;
- validación con datos reales;
- funciones mayores sin gate independiente.

### Gate de cierre v0.8.0

Requiere:

- módulos implementados bajo alcance;
- pruebas unitarias;
- integración incremental documentada;
- deuda actualizada;
- riesgos revisados;
- evidencia de que reglas sensibles se respetan;
- no datos reales;
- no despliegue estable;
- bitácora y decision log.

No permite:

- declarar release candidate;
- publicar estable;
- cerrar v0.9.0 por anticipado.

### Gate de apertura v0.9.0

Requiere:

- v0.8.0 cerrada;
- test suite base;
- plan de validación;
- plan de accesibilidad;
- documentación de usuario preliminar;
- plan de empaquetado;
- criterios de release candidate;
- revisión de seguridad;
- revisión de privacidad;
- revisión de no vigilancia.

No permite:

- declarar v1.0.0;
- cambios mayores fuera de alcance;
- introducir funciones nuevas sin volver a gate.

### Gate de cierre v0.9.0

Requiere:

- validación completada según alcance;
- release candidate documentado;
- accesibilidad revisada;
- documentación de usuario lista;
- documentación técnica lista;
- riesgos aceptados o resueltos;
- deudas críticas resueltas, diferidas formalmente o bloqueadas;
- criterios de v1.0.0 verificados.

No permite:

- publicar v1.0.0 sin gate final;
- arrastrar deudas críticas invisibles.

### Gate de publicación v1.0.0

Requiere:

- v0.9.0 cerrada;
- release candidate aprobado;
- aplicación estable;
- guías listas;
- release notes;
- plan de mantenimiento;
- gobernanza post-release;
- revisión humana final;
- criterios completos;
- documentación de riesgos;
- límites de cambios mayores.

No permite:

- cambios mayores sin nueva fase;
- expansión de alcance sin gobernanza post-release.

---

## 11. Deudas por fase

### Deudas visibles al cierre de v0.7.0

- `DFUX-FAC-v0.6-001` · Vista Facilitador no vigilante;
- `DEBT-DATA-EXPORT` · exportaciones separadas por propósito;
- `DEBT-GROUP-PROGRESS` · `group_progress` bajo auditoría;
- `DEBT-PORTFOLIO` · portafolio emergente a portafolio curado;
- `DEBT-PROMPT` · prompt usado como dato de alto cuidado;
- `DEBT-PRIVATE-LINK` · enlaces privados;
- `DEBT-LANGUAGE` · estados y lenguaje no punitivo;
- `DEBT-TOOLS` · herramientas externas como frontera;
- `DEBT-IMPORT` · importación validada;
- `DEBT-ARCH` · separación modular futura;
- `DEBT-GALLERY` · galería pública diferida;
- `DEBT-RESEARCH` · datos de investigación diferidos.

### Deudas que v0.8.0 puede trabajar técnicamente

- refactor modular;
- reglas sensibles encapsuladas;
- Vista Facilitador no vigilante con datos sintéticos;
- portafolio curado;
- exportación por propósito;
- importación validada;
- clasificación de datos;
- prompt usado como resumen;
- revisión de privacidad antes de exportar;
- ayudas contextuales;
- estados no punitivos.

### Deudas que v0.9.0 debe validar

- experiencia de usuario;
- accesibilidad;
- documentación de usuario;
- release candidate;
- no vigilancia de Vista Facilitador;
- exportabilidad revisable;
- importación segura;
- entrega con metadatos mínimos;
- comprensión de declaración IA;
- claridad de créditos;
- readiness del paquete.

### Deudas que v1.0.0 no debe arrastrar sin resolución formal

- Vista Facilitador vigilante;
- exportación excesiva;
- portafolio como progreso completo;
- datos sensibles sin clasificación;
- enlaces privados sin controles;
- IA embebida sin gate extraordinario;
- publicación sin consentimiento;
- cambios mayores sin gobernanza.

---

## 12. DFUX-FAC-v0.6-001

### Estado al cierre de v0.7.0

```text
Activa
```

### Razón

La deuda fue atendida conceptualmente mediante familias aprobadas, pero no puede cerrarse sin evidencia técnica posterior.

### Puede avanzar en v0.8.0 si:

- existe diseño técnico de Vista Facilitador;
- se usan datos sintéticos;
- se limitan campos visibles;
- se excluyen borradores privados;
- se excluyen prompts completos;
- se excluyen reflexiones completas;
- se bloquea ranking;
- se bloquea actividad minuto a minuto;
- se bloquea monitoreo continuo;
- se prueba `group_progress` sin vigilancia.

### Debe validarse en v0.9.0 si:

- se pretende incluir Vista Facilitador en release candidate;
- se pretende empaquetar experiencia de facilitación;
- se pretende documentar uso docente.

### Regla

```text
DFUX-FAC-v0.6-001 no se cierra en v0.7.0. Puede trabajarse en v0.8.0 y validarse en v0.9.0 antes de cualquier v1.0.0.
```

---

## 13. Criterios de promoción desde v0.7.0 hacia v0.8.0

Una decisión de v0.7.0 puede promoverse a tarea de implementación incremental en v0.8.0 solo si:

- pertenece a una familia aprobada;
- tiene módulo u objeto de dominio identificado;
- tiene caso de uso candidato;
- tiene datos de entrada y salida identificados;
- excluye datos privados por defecto;
- respeta local-first;
- tiene prueba sintética posible;
- tiene criterio de aceptación;
- no introduce vigilancia;
- no requiere datos reales;
- no requiere backend por defecto;
- no requiere IA embebida;
- no requiere despliegue;
- puede revertirse;
- tiene aprobación humana explícita.

No puede promoverse si:

- su único fundamento es “aparece en roadmap”;
- requiere ranking;
- requiere monitoreo continuo;
- requiere telemetría conductual;
- requiere prompts completos obligatorios;
- requiere chats IA;
- requiere archivos finales automáticos;
- requiere publicación automática;
- requiere datos reales;
- cierra deuda sin evidencia.


---

## 14. Alcance recomendado para v0.8.0

v0.8.0 debe concentrarse en implementación incremental de capacidades controladas.

Candidatas prioritarias:

- separación modular de reglas puras;
- objetos de dominio mínimos;
- validadores de privacidad;
- validadores de importación;
- exportación por propósito;
- vista previa de exportación;
- portafolio curado;
- estados no punitivos;
- ayudas contextuales;
- declaración IA manual;
- créditos y licencias;
- entrega con metadatos mínimos;
- control conceptual de enlaces privados;
- Vista Facilitador no vigilante con datos sintéticos;
- pruebas unitarias de reglas sensibles.

No debe concentrarse en:

- rediseño visual total;
- backend;
- auth;
- IA embebida;
- analíticas;
- publicación;
- marketplace;
- datos reales;
- galería pública.

---

## 15. Alcance recomendado para v0.9.0

v0.9.0 debe concentrarse en validación y readiness.

Candidatas prioritarias:

- test suite;
- pruebas de integración;
- revisión de accesibilidad;
- documentación de usuario;
- guías docentes;
- empaquetado;
- release candidate;
- validación de flujo estudiante;
- validación de flujo facilitador;
- verificación de no vigilancia;
- revisión de export/import;
- revisión de entrega final;
- revisión de glosario y ayudas;
- revisión de créditos y declaración IA;
- revisión de límites de datos.

No debe concentrarse en:

- introducir arquitectura nueva;
- abrir backend de repente;
- añadir funciones mayores sin volver a v0.8.0 o gate extraordinario;
- usar datos reales sin gate específico;
- declarar v1.0.0 sin criterios completos.

---

## 16. Alcance esperado de v1.0.0

v1.0.0 debe entregar:

- ecosistema funcional publicable;
- aplicación funcional estable;
- metodología operativa transdisciplinaria;
- documentación educativa;
- documentación técnica;
- guías docentes y humanas;
- criterios de aceptación cumplidos;
- seguridad y privacidad revisadas;
- pruebas;
- validación;
- release notes;
- plan de mantenimiento;
- gobernanza post-release.

v1.0.0 no debe entregar automáticamente:

- backend;
- auth;
- IA embebida;
- APIs IA;
- galería pública;
- analíticas;
- investigación;
- subida de archivos;
- base remota.

Esos elementos solo pueden existir si fueron aprobados por gates específicos en fases correspondientes.

---

## 17. Funciones mayores sujetas a gate extraordinario

Estas funciones no quedan autorizadas por el cierre de v0.7.0:

- backend;
- autenticación;
- base de datos remota;
- sincronización;
- IA embebida;
- APIs IA;
- proveedor IA;
- galería pública;
- almacenamiento de archivos;
- subida de videos;
- rúbricas automáticas;
- analíticas;
- investigación con datos;
- integración LMS;
- cuentas institucionales conectadas.

Regla:

```text
Ninguna función mayor entra por nostalgia de roadmap ni por conveniencia técnica.
```

---

## 18. Matriz de alineación por fase

| Tema | v0.7.0 | v0.8.0 | v0.9.0 | v1.0.0 |
|---|---|---|---|---|
| Local-first | Arquitectura y límites | Implementación controlada | Validación | Estabilidad |
| Privacidad | Modelo y reglas | Validadores y flujos | Pruebas/readiness | Compromiso post-release |
| Seguridad | Threat model y controles | Pruebas unitarias | Pruebas release candidate | Mantenimiento |
| Vista Facilitador | Modelo no vigilante | Implementación sintética | Validación no vigilancia | Inclusión solo si cumple |
| Portafolio | Concepto curado | Implementación incremental | Validación UX | Estable |
| Export/import | Modelo revisable | Exportadores/importadores controlados | Test suite | Estable |
| IA | No embebida | Documentación manual | Validación comprensión | Política post-release |
| Herramientas | Recursos externos | Catálogo funcional | Validación de uso | Mantenimiento |
| Entrega | Metadatos mínimos | Flujo controlado | Validación | Estable |
| Gobernanza | Gates | PR checklist | Release criteria | Post-release |

---

## 19. Checklist mínimo de apertura v0.8.0

Antes de abrir v0.8.0 debe existir:

- documento de apertura v0.8.0;
- alcance incremental limitado;
- backlog técnico por módulos;
- matriz familia → decisión → objeto → caso de uso → prueba;
- criterios de aceptación;
- datos sintéticos;
- plan de pruebas unitarias;
- plan de reversibilidad;
- lista de deudas priorizadas;
- gates aplicables;
- checklist de privacidad;
- checklist de seguridad;
- checklist de no vigilancia;
- autorización humana explícita.

---

## 20. Checklist mínimo de cierre v0.8.0

Para cerrar v0.8.0 debe existir:

- módulos implementados según alcance;
- pruebas unitarias;
- integración incremental documentada;
- bitácora;
- decision log;
- deudas actualizadas;
- riesgos actualizados;
- evidencia de cumplimiento de reglas sensibles;
- registro de funciones no implementadas;
- confirmación de no datos reales;
- confirmación de no release estable.

---

## 21. Checklist mínimo de apertura v0.9.0

Antes de abrir v0.9.0 debe existir:

- v0.8.0 cerrada;
- build candidato;
- test suite base;
- plan de validación;
- plan de accesibilidad;
- documentación preliminar;
- criterios de release candidate;
- revisión de riesgos;
- revisión de deudas críticas;
- gate humano.

---

## 22. Checklist mínimo de cierre v0.9.0

Para cerrar v0.9.0 debe existir:

- validación realizada;
- accesibilidad revisada;
- documentación lista;
- empaquetado listo;
- release candidate definido;
- deudas críticas resueltas o formalmente diferidas;
- riesgos aceptados o mitigados;
- criterios v1.0.0 verificados;
- decisión humana de pasar o no pasar a v1.0.0.

---

## 23. Checklist mínimo de publicación v1.0.0

Para publicar v1.0.0 debe existir:

- release candidate aprobado;
- aplicación estable;
- guías completas;
- documentación técnica;
- documentación educativa;
- release notes;
- plan de mantenimiento;
- gobernanza post-release;
- política de datos;
- política IA;
- criterios de aceptación cumplidos;
- riesgos documentados;
- deudas no críticas formalmente aceptadas;
- aprobación humana final.

---

## 24. Checklist mínimo por PR futuro

Todo PR futuro desde v0.8.0 en adelante debe contestar:

- ¿Qué fase autoriza este trabajo?
- ¿Qué familia v0.7.0 respalda la tarea?
- ¿Qué decisión candidata la respalda?
- ¿Qué módulo toca?
- ¿Qué objeto de dominio toca?
- ¿Qué datos toca?
- ¿Qué datos excluye?
- ¿Qué deuda afecta?
- ¿Qué gate aplica?
- ¿Qué prueba sintética lo verifica?
- ¿Cómo preserva local-first?
- ¿Cómo preserva privacidad?
- ¿Cómo preserva seguridad?
- ¿Cómo evita vigilancia?
- ¿Qué no implementa?
- ¿Cómo se revierte?
- ¿Qué documentación actualiza?


---

## 25. Indicadores de preparación

### Verde

- trazado a familia aprobada;
- alcance pequeño;
- datos sintéticos;
- prueba clara;
- reversibilidad;
- no backend;
- no IA embebida;
- no datos reales;
- no aumento de visibilidad;
- no exporta privados.

### Amarillo

- toca exportación;
- toca importación;
- toca grupo;
- toca enlaces privados;
- toca prompts usados;
- toca reflexiones;
- toca herramientas externas;
- toca entrega;
- toca Vista Facilitador.

### Rojo

- requiere backend;
- requiere auth;
- requiere IA API;
- requiere datos reales;
- requiere publicación;
- requiere archivos finales;
- requiere dashboard en tiempo real;
- requiere analíticas;
- requiere cuentas externas;
- requiere investigación con datos.

---

## 26. Matriz preservar-transformar-diferir-bloquear-auditar

### Preservar

- ruta v0.5 → v1.0;
- v1.0.0 como ecosistema funcional publicable;
- gates por fase;
- revisión humana;
- local-first;
- privacidad por defecto;
- seguridad por diseño;
- agencia humana;
- no vigilancia;
- bitácoras;
- decision log;
- rutas canónicas;
- no sobreconstruir;
- SDD como guardarraíl hasta fase correspondiente.

### Transformar

- gobernanza v0.7.0 en cierre versionado;
- decisiones v0.7.0 en backlog v0.8.0;
- deuda en matriz por fase;
- roadmap heredado antiguo en antecedente histórico;
- Vista Facilitador en implementación futura no vigilante;
- portafolio emergente en portafolio curado;
- export/import en mecanismos por propósito;
- lenguaje canónico en criterios UX;
- módulos conceptuales en módulos implementables.

### Diferir

- backend;
- autenticación;
- base remota;
- sincronización;
- IA embebida;
- APIs IA;
- galería pública;
- investigación;
- analíticas;
- LMS;
- publicación estable hasta v1.0.0;
- marketplace readiness hasta v0.9.0;
- validación con personas hasta gate correspondiente.

### Bloquear

- interpretación antigua no vigente como roadmap rector;
- implementación directa desde v0.7.0;
- v1.0.0 como salto directo;
- cerrar deudas sin evidencia;
- datos reales sin gate;
- evaluación automática;
- detector IA;
- ranking;
- monitoreo continuo;
- telemetría conductual;
- administrador total;
- exportar todo;
- publicación automática;
- subida automática de archivos finales;
- credenciales;
- tokens.

### Auditar

- `DFUX-FAC-v0.6-001`;
- `group_progress`;
- exportación grupal;
- enlaces privados;
- notas;
- estado de entrega;
- badges;
- `last_updated`;
- interés en galería;
- autoría pública;
- herramientas externas;
- galería futura;
- investigación futura;
- validación con personas.

---

## 27. Decisiones candidatas

### DEC-GOV-001 · v0.7.0 cierra arquitectura documental, no implementación

```text
Estado: Candidata para aprobación documental
```

v0.7.0 debe cerrarse como mapa técnico-conceptual de arquitectura, seguridad y gobernanza.

### DEC-GOV-002 · Ruta vigente v0.5 → v1.0 gobierna la continuidad

```text
Estado: Candidata para aprobación documental
```

La gobernanza debe alinearse al mapa corregido v0.5 → v1.0, no a la hoja heredada antigua.

### DEC-GOV-003 · v0.8.0 es implementación incremental controlada

```text
Estado: Candidata para aprobación documental
```

Toda implementación debe esperar apertura formal de v0.8.0 y gate correspondiente.

### DEC-GOV-004 · v0.9.0 es validación + marketplace readiness

```text
Estado: Candidata para aprobación documental
```

La validación, accesibilidad, documentación de usuario, empaquetado y release candidate pertenecen a v0.9.0.

### DEC-GOV-005 · v1.0.0 es ecosistema funcional publicable

```text
Estado: Candidata para aprobación documental
```

v1.0.0 no es solo documentación ni paquete de tecnologías: es publicación estable del ecosistema funcional.

### DEC-GOV-006 · Gates por transición, no gate genérico

```text
Estado: Candidata para aprobación documental
```

La ruta requiere gate de cierre y apertura entre v0.7, v0.8, v0.9 y v1.0.

### DEC-GOV-007 · DFUX-FAC-v0.6-001 permanece activa

```text
Estado: Candidata para aprobación documental
```

La deuda de Vista Facilitador no se cierra en v0.7.0.

### DEC-GOV-008 · Implementación futura debe trazar origen documental

```text
Estado: Candidata para aprobación documental
```

Todo PR futuro debe indicar familia, decisión, módulo, objeto, datos, deuda y gate.

---

## 28. Riesgos de gobernanza

| Riesgo | Severidad | Control |
|---|---|---|
| Usar hoja heredada antigua como roadmap vigente | Alta | Corrección de encuadre |
| Saltar de v0.7.0 a v1.0.0 | Alta | Ruta versionada |
| Implementar en v0.7.0 | Alta | Gate de cierre |
| Abrir v0.8.0 sin backlog trazable | Alta | Gate apertura v0.8 |
| Publicar desde v0.8.0 | Crítica | v0.9 readiness |
| Declarar v1.0.0 sin validación | Crítica | Gate publicación |
| Cerrar DFUX-FAC sin evidencia | Crítica | Deuda activa |
| Introducir IA embebida por arrastre | Crítica | Gate extraordinario |
| Usar datos reales prematuramente | Crítica | Gate datos reales |
| Convertir Vista Facilitador en vigilancia | Crítica | No vigilancia |
| Sobrediseñar v0.8.0 | Media/alta | Alcance incremental |
| Confundir release candidate con release estable | Alta | Separación v0.9/v1.0 |

---

## 29. Controles de gobernanza

| Control | Función |
|---|---|
| Ruta versionada | Evita salto directo a v1.0.0. |
| Gate por transición | Evita avance automático. |
| Matriz de fases | Define qué autoriza cada versión. |
| Deuda visible | Evita cierre falso. |
| Familia aprobada | Base de trazabilidad. |
| PR checklist | Evita cambios ciegos. |
| Datos sintéticos | Protege privacidad durante implementación. |
| Feature flags/gates | Controla activación incremental. |
| Review humana | Condición de promoción. |
| Decision log | Registra razones. |
| Bitácora | Registra proceso. |
| Release criteria | Controla cierre y publicación. |

---

## 30. Criterios de cierre documental v0.7.0

v0.7.0 puede cerrarse cuando:

- las 14 familias están aprobadas;
- todos los documentos están en rutas canónicas;
- no hay sufijos `_BORRADOR` ni `_APROBADO` en repo;
- el mapa de decisiones técnicas refleja las 14 familias;
- existe comentario de hito para cada familia;
- existe registro de cierre;
- existe matriz de continuidad hacia v0.8.0;
- existe matriz de deudas;
- existe matriz de gates;
- se declara que v0.7.0 no implementó código;
- se declara que v0.7.0 no usó datos reales;
- se declara que v0.7.0 no desplegó;
- se declara que `DFUX-FAC-v0.6-001` sigue activa;
- se declara que v0.8.0 requiere apertura formal.

---

## 31. Criterios de aprobación humana

Para aprobar este documento, la persona responsable debe confirmar explícitamente que:

- la Familia 14 cierra v0.7.0, no abre v1.0.0 directamente;
- la gobernanza queda alineada al plan vigente v0.5 → v1.0;
- v0.8.0 queda definida como implementación incremental controlada;
- v0.9.0 queda definida como validación + marketplace readiness;
- v1.0.0 queda definida como ecosistema funcional publicable;
- la hoja heredada antigua no gobierna esta fase;
- backend, auth, IA embebida, datos reales, galería, analíticas y publicación quedan sujetos a gates específicos;
- `DFUX-FAC-v0.6-001` permanece activa;
- las deudas no se cierran sin evidencia;
- toda implementación futura debe trazar origen documental;
- ninguna decisión aquí activa implementación.

---

## 32. Impacto de cierre

La aprobación de este documento permitiría:

- cerrar el mapa de 14 familias de v0.7.0;
- preparar una matriz de continuidad hacia v0.8.0;
- construir un backlog incremental para v0.8.0;
- organizar deudas por fase;
- definir gates de apertura/cierre;
- evitar salto directo a v1.0.0;
- mantener v1.0.0 como ecosistema funcional publicable;
- proteger la continuidad documental.

La aprobación de este documento no permitiría:

- escribir código;
- abrir v0.8.0 sin documento de apertura;
- declarar release candidate;
- publicar v1.0.0;
- cerrar deuda sin evidencia;
- usar datos reales;
- activar backend, auth, IA embebida, galería, analíticas o subida de archivos.

---

## 33. Comentario de hito sugerido para eventual commit

Este comentario solo debe usarse si el documento es aprobado explícitamente y se integra al repositorio con nombre canónico semántico.

```text
Hito: integra el documento Gobernanza Técnica de Cierre v0.7.0 y Alineación Versionada hacia v1.0.0 de AI StoryLab 1 como decimocuarta y última familia del Mapa de Decisiones Técnicas v0.7.0.

El documento cierra v0.7.0 como fase documental de arquitectura técnica y seguridad, y alinea la continuidad con la ruta vigente v0.5 → v1.0: v0.8.0 como implementación incremental, v0.9.0 como validación + marketplace readiness y v1.0.0 como publicación estable del ecosistema funcional publicable.

El hito corrige el encuadre anterior: la hoja de ruta histórica v0.3/v0.4 queda como antecedente, no como fuente rectora vigente. La gobernanza se fundamenta en el Mapa_Ruta_v0_5_a_v1_0, la Matriz_Fases_v0_5_a_v1_0 y la Decision_Correccion_Ruta_v1_0_0_Ecosistema_Funcional_v0_5_0.

El documento establece gates por transición, deudas por fase, criterios de promoción desde v0.7.0 hacia v0.8.0, alcance recomendado para v0.8.0, alcance recomendado para v0.9.0 y criterios mínimos de publicación v1.0.0.

El hito mantiene activa la deuda DFUX-FAC-v0.6-001, bloquea el cierre de deudas sin evidencia, y exige que toda implementación futura trace su origen a familia, decisión, módulo, objeto, datos, deuda y gate.

Este hito no autoriza implementación, datos reales, backend, autenticación, IA embebida, APIs IA, galería pública, analíticas, investigación, publicación estable ni despliegue. Autoriza únicamente el cierre documental de v0.7.0 y la preparación gobernada de continuidad hacia v0.8.0.
```

Mensaje de commit sugerido:

```bash
git commit \\
  -m "docs: agregar gobernanza tecnica cierre v0.7 hacia v1.0" \\
  -m "Hito: integra la decimocuarta familia del Mapa de Decisiones Tecnicas v0.7.0. Cierra v0.7.0 como fase documental de arquitectura tecnica y seguridad, y alinea la continuidad con la ruta vigente v0.8 implementacion incremental, v0.9 validacion y marketplace readiness, y v1.0 ecosistema funcional publicable. El hito establece gates por transicion, deudas por fase y criterios de promocion, manteniendo activa DFUX-FAC-v0.6-001 y bloqueando implementacion prematura, datos reales, IA embebida, backend, auth, analiticas, galeria, despliegue y cierre de deuda sin evidencia."
```

---

## 34. Dictamen de aprobación

La Familia 14 queda aprobada como cierre de v0.7.0 y alineación versionada hacia v0.8.0, v0.9.0 y v1.0.0.

Su decisión más importante es:

```text
AI StoryLab 1 no avanza hacia v1.0.0 por salto directo ni por arrastre de roadmap antiguo, sino por una ruta versionada: v0.8.0 implementa incrementalmente, v0.9.0 valida y prepara release candidate, y v1.0.0 publica un ecosistema funcional estable.
```

Este documento no autoriza implementación.  
Este documento autoriza cerrar documentalmente v0.7.0 y preparar la matriz de continuidad hacia v0.8.0.

---

## 35. Registro de aprobación humana

La persona responsable aprobó este documento durante la sesión de trabajo de v0.7.0.

La aprobación significa:

- la Familia 14 cierra v0.7.0, no abre v1.0.0 directamente;
- la gobernanza queda alineada al plan vigente v0.5 → v1.0;
- v0.8.0 queda definida como implementación incremental controlada;
- v0.9.0 queda definida como validación + marketplace readiness;
- v1.0.0 queda definida como ecosistema funcional publicable;
- la hoja heredada antigua no gobierna esta fase;
- backend, auth, IA embebida, datos reales, galería, analíticas y publicación quedan sujetos a gates específicos;
- `DFUX-FAC-v0.6-001` permanece activa;
- las deudas no se cierran sin evidencia;
- toda implementación futura debe trazar origen documental;
- ninguna decisión aquí activa implementación.

Esta aprobación completa el mapa de 14 familias de `v0.7.0 · Arquitectura Técnica + Seguridad`.

El cierre documental de v0.7.0 autoriza preparar, como siguiente artefacto de continuidad, una matriz de cierre y transición hacia:

```text
v0.8.0 · Implementación incremental
```

No autoriza código, apertura automática de v0.8.0, release candidate, publicación v1.0.0, datos reales, backend, autenticación, APIs IA, IA embebida, galería pública, analíticas, investigación, despliegue ni cierre de deudas sin evidencia.

# Regla de Colocación Documental para Conocimiento Común de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Regla de colocación documental  
**Estado:** Aprobado para integración documental  
**ID maestro propuesto:** ASTL-V043-RCD-001  
**Cartapacio recomendado:** `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/`  
**Archivo recomendado:** `Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  
**Documentos relacionados:**  
- `00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`
- `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`

---

## 1. Propósito

Este documento establece la regla de colocación documental para los archivos de conocimiento común de AI StoryLab 1 durante la fase `v0.4.3 - Philosophical, Pedagogical & Competency Foundation`.

Su propósito es definir dónde deben vivir los documentos canónicos de conocimiento común, cómo deben organizarse en subcartapacios semánticos, cómo deben enlazarse desde otros cartapacios y qué rutas no deben usarse para evitar duplicación, dispersión conceptual o deuda estructural.

Esta regla complementa la convención de nombres de conocimiento común. La convención define cómo nombrar los archivos. Esta regla define dónde colocarlos y cómo relacionarlos con el resto del sistema documental.

---

## 2. Fundamento estructural

La estructura N3 de AI StoryLab 1 conserva numeración en la raíz porque funciona como mapa cardinal del sistema. Desde segundo nivel en adelante, no deben usarse prefijos numéricos.

Por tanto, la colocación correcta del conocimiento común es:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
```

No debe usarse:

```text
05_COMPETENCIAS_Y_PERFILES/
  01_Conocimiento_Comun/
```

La ruta `Conocimiento_Comun/` funciona como espacio transversal para aquello que aplica a múltiples perfiles, lentes y dimensiones del proyecto.

---

## 3. Ruta canónica general

La ruta canónica general para conocimiento común será:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

Esta ruta contiene documentos conceptuales reutilizables que alimentan:

- fundamento filosófico;
- marco pedagógico;
- competencias;
- taxonomías;
- perfiles de público;
- glosario general;
- documentación humana;
- futuras specs;
- futuras rúbricas;
- futuras decisiones de gobernanza.

La ruta canónica no debe duplicarse en otros cartapacios.

---

## 4. Organización interna aprobada

El cartapacio `Conocimiento_Comun/` se organizará mediante subcartapacios semánticos, no numerados.

Estructura recomendada:

```text
05_COMPETENCIAS_Y_PERFILES/
  Conocimiento_Comun/
    README.md

    Matriz/
      README.md
      Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

    Dimensiones_Operacionales/
      README.md
      Base_Conocimiento_Comun_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Etica_Aplicada_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Diseno_Universal_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Conocimiento_Situado_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Creatividad_Multimodal_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
      Base_Conocimiento_Comun_Responsabilidad_Cultural_Social_AI_StoryLab_1_v0_4_3.md

    Glosarios/
      README.md
      Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md

    Referencias/
      README.md
      Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

    Guias_Uso/
      README.md
      Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Esta estructura se adopta para evitar que `Conocimiento_Comun/` se convierta en un cartapacio plano con demasiados documentos mezclados.

---

## 5. Función de cada subcartapacio

### 5.1 `Matriz/`

Contiene documentos que organizan el marco general de conocimiento común.

Debe incluir:

```text
Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Función:

- definir el eje articulador;
- organizar las capas dialógicas;
- declarar dimensiones operacionales;
- establecer relación con fundamento filosófico, competencias y taxonomías;
- orientar la creación de fichas canónicas.

### 5.2 `Dimensiones_Operacionales/`

Contiene las fichas canónicas de las diez dimensiones operacionales del Humanismo Transdisciplinario de Investigación-Creación con IA Responsable.

Función:

- desarrollar cada dimensión;
- incluir síntesis epistemológica;
- presentar diez ideas fundacionales;
- definir conceptos clave;
- ofrecer referencias útiles;
- identificar buenas prácticas;
- sostener enlaces hacia competencias, taxonomías y fundamento filosófico.

### 5.3 `Glosarios/`

Contiene glosarios transversales.

Debe incluir:

```text
Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

Función:

- distinguir persona humana, máquina digital e inteligencia artificial;
- definir términos transversales;
- preparar conexión conceptual con competencias y taxonomías;
- evitar ambigüedad terminológica;
- apoyar WIKI_SYNC y documentación humana futura.

### 5.4 `Referencias/`

Contiene documentos de referencias compartidas.

Debe incluir inicialmente:

```text
Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Función:

- reunir referencias académicas, institucionales y prácticas;
- evitar que cada ficha canónica duplique bibliografías extensas;
- sostener consistencia epistemológica;
- permitir actualización ordenada de fuentes.

### 5.5 `Guias_Uso/`

Contiene guías internas de uso del conocimiento común.

Debe incluir inicialmente:

```text
Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Función:

- explicar cómo enlazar documentos canónicos;
- orientar uso interno por el equipo desarrollador/documental;
- definir cuándo generar WIKI_SYNC;
- prevenir duplicación;
- facilitar continuidad entre sesiones.

---

## 6. Estado de cartapacios

El cartapacio general deberá declararse como:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
Estado: Activo
```

Subcartapacios iniciales:

```text
Matriz/
Estado: Activo

Dimensiones_Operacionales/
Estado: Activo

Glosarios/
Estado: Activo

Referencias/
Estado: Pendiente_Activacion

Guias_Uso/
Estado: Pendiente_Activacion
```

`Referencias/` y `Guias_Uso/` pueden existir desde el inicio para sostener la arquitectura documental, pero no deben poblarse excesivamente antes de necesidad real.

---

## 7. Unidad estructural mínima

Todo cartapacio creado deberá incluir `README.md`.

Esto aplica a:

```text
Conocimiento_Comun/
Matriz/
Dimensiones_Operacionales/
Glosarios/
Referencias/
Guias_Uso/
```

Cada `README.md` deberá explicar:

- propósito del cartapacio;
- qué contiene;
- qué no contiene;
- relación con cartapacios vecinos;
- criterios de colocación;
- riesgos de seguridad y privacidad;
- relación con WIKI_SYNC;
- estado del cartapacio;
- responsable funcional;
- última revisión;
- versión documental interna.

El `README.md` no se versiona en el nombre del archivo. Su versión interna deberá declararse dentro del propio documento.

---

## 8. Rutas canónicas específicas

### 8.1 Documento matriz

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

### 8.2 Fichas de dimensiones operacionales

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Etica_Aplicada_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Diseno_Universal_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Conocimiento_Situado_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Creatividad_Multimodal_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Responsabilidad_Cultural_Social_AI_StoryLab_1_v0_4_3.md
```

### 8.3 Glosario general

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

### 8.4 Referencias compartidas

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

### 8.5 Guía de uso interna

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

---

## 9. Documentos que no deben colocarse aquí

No deben colocarse en `Conocimiento_Comun/` ni en sus subcartapacios:

- specs técnicas;
- código;
- componentes de interfaz;
- documentación de despliegue;
- modelos de amenaza;
- políticas formales de seguridad;
- políticas formales de privacidad;
- actas de cierre;
- bitácoras de sesión;
- changelogs;
- manifests;
- registros de decisión;
- guías humanas finales;
- documentos históricos archivados;
- evidencia formal de evaluación;
- documentos de implementación funcional.

Estos documentos tienen rutas propias dentro de la estructura N3.

---

## 10. Relación con `01_FUNDAMENTO_FILOSOFICO/`

El cartapacio `01_FUNDAMENTO_FILOSOFICO/` no debe contener copias de los documentos canónicos de conocimiento común.

Debe enlazarlos y articularlos.

Regla:

```text
01_FUNDAMENTO_FILOSOFICO/
  contiene documentos integradores y filosóficos.

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
  contiene piezas conceptuales canónicas reutilizables.
```

Ejemplo:

```text
01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
  enlaza a:
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
```

El fundamento filosófico podrá incluir definiciones breves, pero deberá enlazar a las fichas canónicas para el desarrollo conceptual completo.

---

## 11. Relación con `05_COMPETENCIAS_Y_PERFILES/Marco_Competencias_Taxonomias/`

El conocimiento común prepara lenguaje y conceptos para competencias y taxonomías, pero no define por sí mismo competencias, niveles de desempeño, rúbricas ni portafolios.

Regla:

```text
Conocimiento_Comun/
  define conceptos transversales.

Marco_Competencias_Taxonomias/
  desarrolla competencias, niveles, evidencias, taxonomías, rúbricas y portafolios.
```

Cuando un documento de competencias use una dimensión o concepto del conocimiento común, deberá enlazar al documento canónico correspondiente.

---

## 12. Relación con perfiles

El conocimiento común no pertenece a un perfil particular.

Debe servir transversalmente a:

```text
Programador_Humanista/
Investigador_Transdisciplinario/
Artista_Transdisciplinario/
Caleidoscopio/
```

Regla:

```text
Conocimiento_Comun/
  contiene lo transversal.

Programador_Humanista/
  aplica, prueba u operacionaliza primero cuando corresponda.

Investigador_Transdisciplinario/
  desarrolla evidencia, metodología e investigación.

Artista_Transdisciplinario/
  desarrolla mediación, experiencia y producción creativa.

Caleidoscopio/
  articula integración, tensión, recombinación y lectura sistémica.
```

Toda transferencia relevante entre perfiles deberá registrarse en documentación activa y considerarse para la bitácora de transferencia simétrica.

---

## 13. Relación con `21_WIKI_DOCUMENTACION_HUMANA/`

`21_WIKI_DOCUMENTACION_HUMANA/` no debe duplicar los documentos canónicos de conocimiento común.

Debe traducirlos, explicarlos o adaptarlos para públicos humanos cuando sea necesario.

Regla:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
  conserva la fuente conceptual canónica.

21_WIKI_DOCUMENTACION_HUMANA/
  produce guías humanas, explicaciones, rutas de lectura o materiales de apoyo.
```

Si un documento de conocimiento común afecta la comprensión de estudiantes, facilitadores, docentes o instituciones, deberá evaluarse si genera deuda WIKI_SYNC.

---

## 14. Relación con `18_DOCUMENTACION_ACTIVA/`

`18_DOCUMENTACION_ACTIVA/` registra el proceso vivo.

No debe almacenar documentos canónicos de conocimiento común, salvo que se trate de actas, bitácoras, manifests, changelogs, WIKI_SYNC o registros derivados del proceso de creación.

Regla:

```text
Si define concepto canónico:
  va en Conocimiento_Comun/.

Si registra proceso vivo:
  va en 18_DOCUMENTACION_ACTIVA/.

Si comunica a públicos humanos:
  genera WIKI_SYNC o guía humana, según aplique.
```

---

## 15. Relación con `00_CONTROL_MAESTRO/`

`00_CONTROL_MAESTRO/` contiene reglas, convenciones y tablas de ubicación.

Por tanto, los documentos que gobiernan la colocación de conocimiento común deben vivir aquí:

```text
00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Estas piezas no sustituyen al estándar estructural general. Lo precisan para el caso de conocimiento común durante v0.4.3.

---

## 16. Relación con seguridad y privacidad

Los documentos de conocimiento común pueden incluir implicaciones para Security by Design, Security by Default, local-first, privacidad y consentimiento.

Sin embargo, no sustituyen documentos propios de:

```text
16_SEGURIDAD_PRIVACIDAD_Y_DATOS/
```

Si una ficha conceptual identifica un riesgo de privacidad, seguridad o datos sensibles, deberá:

- mencionarlo como criterio conceptual;
- evitar proponer implementación;
- registrar deuda o enlace futuro si requiere tratamiento operativo;
- referir a documentos de seguridad o privacidad cuando existan.

---

## 17. Relación con deuda

La creación de conocimiento común puede generar o reducir deuda.

### 17.1 Reduce deuda estructural cuando:

- fija rutas canónicas;
- evita duplicación documental;
- establece convenciones;
- enlaza documentos relacionados;
- crea `README.md` en cartapacios nuevos;
- registra ubicación y propósito.

### 17.2 Genera deuda estructural cuando:

- se crea un archivo sin ruta canónica clara;
- se crea un subcartapacio sin `README.md`;
- se duplican conceptos en varios lugares;
- se cambia una ruta sin actualizar enlaces;
- se aprueba una ficha sin registrarla en tabla de ubicación.

### 17.3 Genera deuda WIKI_SYNC cuando:

- afecta comprensión de estudiantes, docentes, facilitadores o instituciones;
- introduce conceptos que necesitan guía humana;
- requiere traducción pedagógica o institucional;
- modifica el marco de lectura de documentos ya publicados.

### 17.4 No debe generar deuda técnica porque:

- no toca código;
- no modifica arquitectura funcional;
- no activa specs de implementación;
- no introduce backend, APIs, cloud, autenticación ni analíticas.

---

## 18. Relación con WIKI_SYNC

Todo documento canónico de conocimiento común deberá evaluar si requiere WIKI_SYNC.

No todo concepto requiere guía humana inmediata, pero todo concepto que afecte navegación, comprensión pedagógica o adopción institucional deberá generar entrada o deuda WIKI_SYNC.

Criterio orientador:

```text
Si el concepto solo organiza trabajo interno:
  WIKI_SYNC puede quedar como no requerido.

Si el concepto cambia cómo una persona usuaria entiende el proyecto:
  WIKI_SYNC debe registrarse como requerido o como deuda justificada.
```

---

## 19. Regla de enlace espejo

La regla de enlace espejo evita duplicación.

Un enlace espejo significa que un documento en otro cartapacio apunta al documento canónico de conocimiento común sin copiarlo completo.

Ejemplo:

```text
01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
  enlaza a:
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md
```

La copia literal de una ficha completa en otro cartapacio se considera duplicación y genera deuda estructural.

---

## 20. Criterios para crear nuevos subcartapacios futuros

La estructura inicial incluye subcartapacios semánticos suficientes para la fase v0.4.3.

Podrán crearse nuevos subcartapacios si existe volumen suficiente o necesidad de mantenimiento.

Condiciones para crear un subcartapacio adicional:

- justificación documental explícita;
- nombre semántico sin prefijo numérico;
- `README.md` propio;
- estado declarado;
- actualización de tabla de ubicación;
- revisión de enlaces existentes;
- evaluación de deuda estructural;
- evaluación WIKI_SYNC si afecta navegación humana.

No se deben crear subcartapacios por estética o preferencia momentánea.

---

## 21. Criterios de aceptación

Esta regla se considerará aprobada si:

- respeta la ruta `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/`;
- organiza conocimiento común en subcartapacios semánticos;
- respeta la prohibición de prefijos numéricos desde segundo nivel;
- exige `README.md` para cada cartapacio nuevo;
- distingue fuente canónica de enlaces espejo;
- evita duplicación con fundamento filosófico y wiki humana;
- distingue conocimiento común de competencias y taxonomías;
- integra documentación activa y bitácora de transferencia simétrica;
- reconoce impacto en deuda estructural y WIKI_SYNC;
- sostiene local-first, SDD, Security by Design y Security by Default;
- no autoriza cambios funcionales.

---

## 22. Límites explícitos

Esta regla no autoriza:

```text
backend
APIs externas
cloud
autenticación
analíticas externas
base de datos remota
subida automática de archivos
copilotos internos
cambios funcionales prematuros
refactor técnico sin spec
integraciones sin threat model
manejo remoto de datos sin privacidad y consentimiento
```

Cualquier propuesta futura en esas áreas requerirá especificación formal, revisión humana, modelo de amenazas, análisis de privacidad, consentimiento y decisión registrada.

---

## 23. Estado de aprobación

```text
Estado actual: aprobado para integración documental
Revisión requerida: completada
Archivo .md descargable: producido
Commit: pendiente hasta completar conjunto documental aprobado
Cambios funcionales: no autorizados
Impacto en deuda: reduce deuda estructural al aprobarse junto con convención y tabla
Impacto en WIKI_SYNC: probable, según guías humanas derivadas
Impacto en bitácora de continuidad: sí aplica
```

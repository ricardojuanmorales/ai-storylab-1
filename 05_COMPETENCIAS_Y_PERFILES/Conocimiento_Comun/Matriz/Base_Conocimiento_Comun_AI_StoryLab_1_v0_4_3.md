# Base de Conocimiento Común de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Documento matriz de conocimiento común  
**Estado:** Aprobado para integración documental  
**Cartapacio recomendado:** `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/`  
**Archivo recomendado:** `Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  

---

## 1. Propósito del documento

Este documento establece la base de conocimiento común de AI StoryLab 1 para la fase `v0.4.3 - Philosophical, Pedagogical & Competency Foundation`.

Su propósito es crear una capa conceptual compartida, reutilizable y canónica para orientar la producción posterior del fundamento filosófico, el marco pedagógico, las competencias, las taxonomías, los perfiles de público y la gobernanza documental hacia `v1.0`.

La base de conocimiento común no sustituye al fundamento filosófico. Lo prepara.

Tampoco sustituye especificaciones, rúbricas, modelos de seguridad, políticas de privacidad ni decisiones formales de implementación. Su función es ofrecer lenguaje común, criterios conceptuales y referencias internas para que los documentos posteriores no tengan que redefinir continuamente los mismos conceptos.

---

## 2. Función dentro de v0.4.3

La fase v0.4.3 requiere construir una base filosófica, pedagógica y competencial antes de avanzar hacia decisiones funcionales o técnicas.

Dentro de esa fase, este documento cumple cinco funciones:

1. Establece el vocabulario común del marco conceptual.
2. Organiza las dimensiones operacionales del marco filosófico integrador.
3. Define la estructura de los documentos canónicos independientes.
4. Propone una arquitectura de colocación documental compatible con el estándar N3.
5. Protege la continuidad entre fundamento filosófico, pedagogía, competencias, taxonomías, documentación activa y transferencia simétrica.

Este documento ayuda a evitar dispersión conceptual. También evita que el fundamento filosófico posterior se convierta en un documento excesivamente extenso, repetitivo o difícil de mantener.

La imagen operativa es sencilla: este documento organiza las piezas; el fundamento filosófico posterior las ensamblará como mapa de ruta.

---

## 3. Eje articulador

El eje articulador único de la base de conocimiento común será:

```text
Humanismo Transdisciplinario de Investigación-Creación con IA Responsable
```

Este eje no debe tratarse como una dimensión adicional ni como una consigna decorativa. Debe entenderse como el marco integrador que permite relacionar los conceptos, prácticas y criterios que sostienen AI StoryLab 1.

El Humanismo Transdisciplinario de Investigación-Creación con IA Responsable reconoce que la inteligencia artificial puede ampliar posibilidades creativas, investigativas y pedagógicas, pero no sustituye la imaginación humana, la decisión ética ni la construcción de sentido.

Este marco dialoga con múltiples tradiciones y puede contribuir a crear nuevas tradiciones de práctica educativa, creativa, investigativa y tecnológica.

---

## 4. Principio rector compartido

La base de conocimiento común se organiza alrededor del siguiente principio rector:

```text
La IA no sustituye la imaginación humana, la decisión ética ni la construcción de sentido.
La IA amplía posibilidades, pero la persona conserva la autoría, la agencia y la responsabilidad.
```

Este principio debe orientar todos los documentos derivados de esta base.

Su función no es limitar la experimentación creativa, sino impedir que el proyecto confunda apoyo tecnológico con delegación acrítica. La IA puede sugerir, contrastar, provocar, reorganizar o expandir alternativas. La persona conserva la responsabilidad de interpretar, seleccionar, justificar, revisar y decidir.

---

## 5. Naturaleza de la base de conocimiento común

La base de conocimiento común es una capa documental canónica.

Esto significa que sus documentos deben ser:

- reutilizables;
- estables;
- versionados;
- claros;
- autocontenidos;
- enlazables desde otros documentos;
- compatibles con el marco local-first;
- compatibles con Spec-Driven Development;
- compatibles con Security by Design y Security by Default;
- compatibles con la bitácora de transferencia simétrica;
- compatibles con WIKI_SYNC cuando afecten comprensión humana.

Cada documento canónico debe poder funcionar como referencia para el equipo desarrollador/documental, sin exigir una revisión completa de todo el fundamento filosófico.

Esta capa opera como biblioteca de conceptos, no como lista de funcionalidades.

---

## 6. Colocación documental canónica

La colocación documental de esta base debe respetar el estándar vigente de estructura y manejo de archivos de AI StoryLab 1.

La ruta canónica general para conocimiento común será:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

Sin embargo, este documento matriz no debe colocarse directamente en la raíz de `Conocimiento_Comun/`. Su ruta canónica específica será:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Esta ubicación se justifica porque `Conocimiento_Comun/` funciona como espacio transversal para aquello que aplica a los perfiles y lentes operativos del proyecto, incluyendo Programador Humanista, Investigador Transdisciplinario, Artista Transdisciplinario y Caleidoscopio, mientras que `Matriz/` contiene los documentos que organizan el marco general.

La base de conocimiento común no debe colocarse dentro de `01_FUNDAMENTO_FILOSOFICO/`, aunque el fundamento filosófico la use intensamente. Tampoco debe duplicarse dentro de `21_WIKI_DOCUMENTACION_HUMANA/`.

La regla de colocación será:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/
  contiene el documento matriz de conocimiento común.

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/
  contiene las fichas canónicas de las diez dimensiones operacionales.

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/
  contiene glosarios transversales.

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/
  contiene referencias compartidas.

05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/
  contiene guías internas de uso del conocimiento común.

01_FUNDAMENTO_FILOSOFICO/
  enlaza y articula las piezas desde el fundamento filosófico.

21_WIKI_DOCUMENTACION_HUMANA/
  traduce, explica o adapta las piezas para lectura humana ampliada cuando sea necesario.

18_DOCUMENTACION_ACTIVA/
  registra proceso vivo, decisiones, continuidad, deuda y WIKI_SYNC asociado.
```

Por tanto, se usará una lógica de enlace espejo, no de duplicación.

---

## 7. Estructura interna recomendada del cartapacio

Antes de crear fichas canónicas, se recomienda preparar el cartapacio `Conocimiento_Comun/` con una estructura semántica, modular y evolucionable:

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

Esta estructura evita que `Conocimiento_Comun/` se convierta en un cartapacio plano con demasiados documentos mezclados.

Cada subcartapacio deberá incluir su propio `README.md`, declarar estado documental interno y mantener nombres semánticos sin prefijos numéricos.

---

## 8. Convención semántica de nombres

Los archivos de conocimiento común no deben comenzar con números.

Se usará una convención semántica, descriptiva y versionada.

Patrón recomendado:

```text
Base_Conocimiento_Comun_<Concepto>_AI_StoryLab_1_v0_4_3.md
```

Ejemplos:

```text
Base_Conocimiento_Comun_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md
```

Para el glosario general:

```text
Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

La convención busca que cada archivo indique con claridad:

- su función documental;
- el concepto tratado;
- el proyecto al que pertenece;
- la versión de fase;
- su relación con conocimiento común.

Esta convención deberá registrarse primero en el cartapacio de control maestro correspondiente antes de producir el conjunto de fichas canónicas.

---

## 9. Convenciones previas requeridas

Antes de aprobar y producir el conjunto de fichas canónicas, se recomienda crear o actualizar los siguientes documentos de control:

```text
00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md

00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Estos documentos deberán confirmar:

- uso de `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/` con subcartapacios semánticos `Matriz/`, `Dimensiones_Operacionales/`, `Glosarios/`, `Referencias/` y `Guias_Uso/`;
- prohibición de prefijos numéricos desde segundo nivel;
- obligación de `README.md` por cartapacio nuevo;
- versionado explícito de documentos sustantivos;
- relación entre conocimiento común, fundamento filosófico, wiki humana y documentación activa;
- criterio de enlace espejo sin duplicación;
- relación con bitácora de transferencia simétrica;
- relación con deuda estructural y WIKI_SYNC.

---

## 10. Dimensiones operacionales

El Humanismo Transdisciplinario de Investigación-Creación con IA Responsable se expresa inicialmente mediante diez dimensiones operacionales:

1. Humanismo tecnológico
2. Pedagogía crítica
3. Aprendizaje lúdico
4. Investigación-creación
5. Ética aplicada
6. Diseño universal
7. Conocimiento situado
8. Creatividad multimodal
9. Literacidad crítica en IA
10. Responsabilidad cultural y social

Cada dimensión tendrá un documento canónico independiente en el cartapacio de conocimiento común.

Estas dimensiones no son departamentos separados. Funcionan como zonas de atención conceptual que dialogan entre sí.

---

## 11. Arquitectura por capas dialógicas

Las diez dimensiones se organizan mediante capas dialógicas.

Una capa dialógica no es una jerarquía rígida. Es una forma de lectura sistémica que permite observar cómo diferentes principios conversan, se tensionan y se corrigen mutuamente.

Las capas propuestas son:

### 11.1 Capa humana y ética

Dimensiones:

- Humanismo tecnológico
- Ética aplicada
- Responsabilidad cultural y social

Esta capa orienta la relación entre tecnología, dignidad humana, agencia, responsabilidad, cuidado, justicia, pertenencia y consecuencias sociales.

Ayuda a que AI StoryLab 1 no trate la tecnología como fin en sí mismo, sino como medio situado dentro de relaciones humanas, educativas, culturales e institucionales.

### 11.2 Capa pedagógica y formativa

Dimensiones:

- Pedagogía crítica
- Aprendizaje lúdico
- Diseño universal

Esta capa orienta experiencias de aprendizaje reflexivas, inclusivas, accesibles, participativas y transformadoras.

El aprendizaje lúdico se entiende como una forma seria de exploración, imaginación, ensayo, descubrimiento y construcción de sentido. No equivale a entretenimiento superficial ni a gamificación automática.

### 11.3 Capa investigativa y creativa

Dimensiones:

- Investigación-creación
- Conocimiento situado
- Creatividad multimodal

Esta capa orienta la producción de conocimiento mediante práctica creativa, documentación de procesos, atención al contexto, expresión multimodal y reflexión crítica sobre la experiencia.

Permite reconocer que crear también puede ser investigar, y que investigar también puede requerir formas narrativas, visuales, sonoras, interactivas o híbridas.

### 11.4 Capa crítico-tecnológica

Dimensión:

- Literacidad crítica en IA

Esta capa orienta la comprensión de la IA como herramienta, espejo cognitivo, sistema sociotécnico y objeto de estudio.

Su función es evitar tanto el rechazo simplista como la adopción acrítica. AI StoryLab 1 debe ayudar a leer, usar, cuestionar y contextualizar la IA.

---

## 12. Discusión dialógica entre principios

Las capas no deben aplicarse de manera mecánica.

Cuando aparezcan tensiones entre creatividad, privacidad, seguridad, autonomía docente, accesibilidad, viabilidad técnica o valor pedagógico, el proyecto deberá favorecer una discusión dialógica entre principios.

Esta discusión debe dar énfasis a la agencia humana.

La agencia humana no elimina los demás principios. Los convoca a una mesa de trabajo. En esa mesa, local-first, seguridad por diseño, seguridad por defecto, accesibilidad, responsabilidad cultural, aprendizaje lúdico, investigación-creación y literacidad crítica en IA deben dialogar antes de tomar decisiones.

En términos prácticos, una decisión futura debería preguntarse:

- ¿qué posibilidad humana amplía?
- ¿qué riesgo introduce?
- ¿qué agencia protege?
- ¿qué datos expone?
- ¿qué aprendizaje favorece?
- ¿qué responsabilidad requiere?
- ¿qué documentación necesita?

---

## 13. Relación humano, máquina e inteligencia artificial

La base de conocimiento común deberá distinguir explícitamente entre persona humana, máquina digital e inteligencia artificial.

Esta distinción es necesaria porque AI StoryLab 1 no debe usar “tecnología”, “máquina” e “IA” como sinónimos.

### 13.1 Persona humana

La persona humana es sujeto de agencia, interpretación, responsabilidad, autoría, imaginación, cuidado y construcción de sentido.

En AI StoryLab 1, la persona no se reduce a usuaria operativa. Puede ocupar distintas subjetividades: estudiante de escuela superior, estudiante universitario, docente o investigador.

### 13.2 Máquina digital

La máquina digital es infraestructura material y lógica: dispositivo, sistema operativo, navegador, archivo, interfaz, motor de ejecución, almacenamiento local o herramienta computacional.

La máquina ejecuta procesos, pero no asume responsabilidad ética ni pedagógica.

### 13.3 Inteligencia artificial

La IA es un tipo particular de sistema computacional capaz de producir salidas generativas, predictivas, clasificatorias o conversacionales a partir de modelos y datos.

En AI StoryLab 1, la IA puede funcionar según contexto como:

- herramienta pedagógica;
- apoyo creativo;
- espejo cognitivo;
- sistema sociotécnico;
- colaborador limitado;
- objeto de estudio crítico;
- fuente de riesgo si se usa sin criterio;
- mediación que requiere revisión humana.

La IA no debe ser tratada como autoridad automática.

---

## 14. Glosario general

Se recomienda crear un glosario general dentro de conocimiento común:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

Este glosario deberá incluir términos transversales como:

- persona humana;
- agencia;
- autoría;
- responsabilidad;
- máquina;
- sistema digital;
- inteligencia artificial;
- IA generativa;
- IA externa;
- copiloto interno;
- local-first;
- Spec-Driven Development;
- Security by Design;
- Security by Default;
- privacidad;
- consentimiento;
- competencia;
- taxonomía;
- evidencia;
- rúbrica;
- portafolio;
- investigación-creación;
- aprendizaje lúdico;
- literacidad crítica en IA;
- diseño universal;
- conocimiento situado.

El glosario deberá explicar la relación de cada término con competencias y taxonomías, sin desarrollar todavía el marco competencial completo.

---

## 15. Relación con el fundamento filosófico posterior

El fundamento filosófico de AI StoryLab 1 v0.4.3 se desarrollará después de esta base de conocimiento común.

Ese documento posterior deberá ser autocontenido, institucional y orientador. Incluirá definiciones breves de las dimensiones principales y enlazará a los documentos canónicos correspondientes.

La relación será:

```text
Base de conocimiento común:
define y estabiliza piezas conceptuales.

Fundamento filosófico:
integra las piezas como mapa de ruta y matriz de decisión.
```

El fundamento filosófico no deberá repetir íntegramente cada documento canónico. Deberá sintetizar, articular y orientar.

---

## 16. Relación con competencias y taxonomías

La base de conocimiento común prepara el terreno para competencias y taxonomías, pero no las define en detalle.

Las conexiones específicas entre conceptos, competencias, niveles de desempeño, evidencias, rúbricas y portafolios se reservarán para los documentos competenciales y taxonómicos.

Esta separación ayuda a mantener claridad documental:

- conocimiento común define conceptos;
- fundamento filosófico articula principios;
- marco pedagógico orienta experiencias;
- competencias definen capacidades;
- taxonomías organizan progresión;
- rúbricas establecen criterios de evaluación;
- specs traducen decisiones a diseño operativo.

---

## 17. Relación con las cuatro subjetividades

La base de conocimiento común debe poder servir a cuatro subjetividades estratégicas:

```text
estudiante de escuela superior
estudiante universitario
docente
investigador
```

Este documento establece el lenguaje compartido.

La diferenciación detallada por subjetividad se desarrollará en documentos posteriores. Sin embargo, todas las piezas de conocimiento común deben redactarse de modo que puedan ser interpretadas desde esas cuatro posiciones sin quedar capturadas por una sola.

---

## 18. Relación con local-first

Local-first es un principio transversal de AI StoryLab 1.

En esta base de conocimiento común, local-first no se entiende solo como una decisión técnica. También expresa una postura sobre autonomía, privacidad, control documental, soberanía pedagógica y cuidado de producciones creativas.

Cada documento canónico deberá ser compatible con:

- control local de archivos;
- minimización de datos;
- prudencia ante servicios externos;
- protección de producciones estudiantiles;
- respeto a contextos educativos;
- documentación clara de cualquier excepción futura.

La base de conocimiento común no autoriza excepciones a local-first. Solo puede ofrecer criterios para pensar futuras decisiones documentadas.

---

## 19. Relación con Spec-Driven Development

Spec-Driven Development opera como disciplina de continuidad entre concepto, decisión, diseño e implementación.

La base de conocimiento común no produce specs. Sin embargo, prepara vocabulario y criterios para futuras specs.

Cada documento canónico podrá orientar preguntas de diseño, criterios de aceptación o límites de alcance. Pero ninguna ficha conceptual autoriza por sí misma un cambio funcional.

Una idea puede ser filosóficamente valiosa y, aun así, no estar lista para implementación. En AI StoryLab 1, esa distancia debe ser visible y documentada.

---

## 20. Relación con Security by Design y Security by Default

Security by Design y Security by Default deben interpretarse desde esta base como principios conceptuales, pedagógicos y técnicos.

No pertenecen únicamente a una fase posterior de implementación. Deben estar presentes desde el lenguaje común.

Cada ficha canónica deberá considerar preguntas como:

- ¿qué riesgos aparecerían si este concepto se operacionaliza sin cuidado?
- ¿qué datos o producciones podrían quedar expuestos?
- ¿qué consentimiento podría requerirse en fases futuras?
- ¿qué comportamiento por defecto protegería mejor a la persona usuaria?
- ¿cómo se protege la agencia humana?
- ¿cómo se evita que la IA sea tratada como autoridad automática?

---

## 21. Límites explícitos de esta capa documental

Esta base de conocimiento común no autoriza:

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

Cualquier propuesta futura en esas áreas deberá tratarse en documentos específicos, con revisión humana, análisis de riesgos, privacidad, consentimiento y decisión formal.

---

## 22. Estructura robusta de documentos canónicos

Cada documento canónico de conocimiento común deberá seguir una estructura estable, robusta y evolucionable.

La estructura debe sostener tres necesidades simultáneas:

1. uso interno por el equipo desarrollador/documental;
2. conexión futura con competencias y taxonomías;
3. posibilidad de traducción posterior hacia documentación humana o institucional.

### 22.1 Encabezado documental

Cada ficha deberá iniciar con:

```text
Proyecto
Fase
Tipo de documento
Dimensión operacional
Capa dialógica
Estado
Cartapacio recomendado
Archivo recomendado
Relación con documentos canónicos
```

### 22.2 Propósito del documento

Debe explicar para qué existe la ficha, qué problema conceptual atiende y cómo ayuda al marco general.

### 22.3 Definición operativa de la dimensión

Debe ofrecer una definición clara, situada y utilizable dentro de AI StoryLab 1.

La definición debe evitar tres riesgos:

- ser demasiado genérica;
- convertirse en definición enciclopédica;
- prometer implementación funcional.

### 22.4 Síntesis epistemológica

Cada ficha deberá incluir una síntesis epistemológica desarrollada.

Esta sección debe explicar:

- qué tipo de conocimiento reconoce la dimensión;
- qué supuestos sostiene;
- qué tradiciones o campos convoca;
- qué tensiones introduce;
- qué límites reconoce;
- cómo dialoga con IA responsable;
- cómo contribuye al Humanismo Transdisciplinario de Investigación-Creación con IA Responsable.

Esta sección puede ser más extensa que la definición operativa, pero debe conservar lenguaje claro y orientador.

### 22.5 Diez ideas fundacionales de la dimensión

Cada ficha deberá identificar diez ideas fundacionales asociadas con la dimensión.

Para cada idea se recomienda incluir:

```text
Idea fundacional
Definición breve
Relevancia para AI StoryLab 1
Relación posible con competencias y taxonomías
```

Esta sección no define competencias todavía. Solo prepara el puente conceptual.

### 22.6 Conceptos clave

Además de las diez ideas fundacionales, cada ficha deberá listar conceptos clave de navegación rápida.

Estos conceptos funcionarán como términos de índice para el glosario general, WIKI_SYNC, futuras taxonomías y documentación humana.

### 22.7 Relación con el eje articulador

Debe explicar cómo la dimensión contribuye al Humanismo Transdisciplinario de Investigación-Creación con IA Responsable.

### 22.8 Relación con las capas dialógicas

Debe ubicar la dimensión dentro de una capa principal y reconocer relaciones con otras capas.

Ejemplo:

```text
Capa principal:
pedagógica y formativa

Relaciones secundarias:
humana y ética
crítico-tecnológica
investigativa y creativa
```

### 22.9 Relación humano, máquina e IA

Cada ficha deberá distinguir cómo la dimensión interpreta la relación entre:

- persona humana;
- máquina digital;
- inteligencia artificial;
- sistema sociotécnico;
- contexto educativo o investigativo.

La IA podrá aparecer como herramienta, apoyo creativo, espejo cognitivo, colaborador limitado, sistema sociotécnico u objeto de estudio crítico, según el contexto de la dimensión.

### 22.10 Agencia humana ante sistemas automatizados

Cada ficha deberá incluir una sección explícita sobre agencia humana.

Debe explicar cómo la dimensión protege o fortalece:

- autoría;
- decisión;
- interpretación;
- consentimiento;
- responsabilidad;
- revisión crítica;
- posibilidad de rechazar sugerencias automatizadas.

### 22.11 Implicaciones pedagógicas generales

Debe explicar cómo la dimensión puede orientar experiencias de aprendizaje, sin diseñar todavía actividades específicas.

### 22.12 Implicaciones para competencias y taxonomías

Debe indicar qué tipo de relación futura podría tener la dimensión con competencias, niveles de desempeño, evidencias, rúbricas o portafolios.

No debe desarrollar esos instrumentos en detalle.

### 22.13 Implicaciones para local-first

Debe explicar cómo la dimensión se interpreta desde autonomía, control local, minimización de datos, protección de archivos y soberanía documental.

### 22.14 Implicaciones para SDD

Debe indicar cómo esta dimensión podría orientar futuras specs, criterios de aceptación, decisiones de diseño o preguntas de revisión.

Debe reiterar que la ficha no autoriza implementación.

### 22.15 Implicaciones para Security by Design y Security by Default

Debe identificar riesgos posibles si la dimensión se operacionaliza de manera descuidada.

También debe identificar comportamientos prudentes por defecto.

### 22.16 Buenas prácticas

Cada ficha deberá incluir buenas prácticas conceptuales y documentales.

Estas buenas prácticas pueden orientar:

- redacción de documentos posteriores;
- diseño pedagógico;
- discusión de decisiones;
- uso responsable de IA;
- revisión humana;
- preservación de privacidad;
- conexión con competencias.

### 22.17 Riesgos de interpretación reduccionista

Debe advertir contra simplificaciones peligrosas.

Ejemplos de riesgo:

- reducir aprendizaje lúdico a entretenimiento;
- reducir diseño universal a accesibilidad visual;
- reducir literacidad crítica en IA a uso eficiente de prompts;
- reducir creatividad multimodal a producción de imágenes;
- reducir ética aplicada a una lista de prohibiciones.

### 22.18 Referencias útiles

Cada ficha deberá incluir referencias útiles equilibradas.

Se recomiendan tres tipos:

```text
Referencias académicas
Referencias institucionales o normativas
Referencias prácticas o metodológicas
```

Las referencias deberán apoyar el trabajo conceptual sin convertir la ficha en revisión bibliográfica extensa.

### 22.19 Criterios de uso en documentos posteriores

Debe explicar cuándo y cómo enlazar la ficha desde:

- fundamento filosófico;
- marco pedagógico;
- competencias;
- taxonomías;
- perfiles de público;
- specs futuras;
- documentación humana;
- WIKI_SYNC;
- bitácora de continuidad.

### 22.20 Documentos relacionados

Debe listar documentos relacionados dentro del repo.

Ejemplos:

```text
Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
Competencias_Transversales_AI_StoryLab_1_v0_4_3.md
Taxonomias_AI_StoryLab_1_v0_4_3.md
```

### 22.21 Estado de aprobación

Cada ficha deberá cerrar con:

```text
Estado actual
Revisión requerida
Archivo .md descargable
Commit
Cambios funcionales
Impacto en deuda
Impacto en WIKI_SYNC
Impacto en bitácora de continuidad
```

---

## 23. Documentos canónicos iniciales

La primera colección de documentos canónicos se organizará por subcartapacios.

Documento matriz:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Fichas de dimensiones operacionales:

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

Documento de glosario propuesto:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md
```

Documento de referencias compartidas propuesto:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Guía interna de uso propuesta:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

Documento integrador posterior:

```text
01_FUNDAMENTO_FILOSOFICO/Fundamento_Filosofico_AI_StoryLab_1_v0_4_3.md
```

---

## 24. Criterios de uso en documentos posteriores

Los documentos posteriores deberán usar esta base de conocimiento común para:

- evitar duplicación conceptual;
- mantener consistencia terminológica;
- enlazar definiciones canónicas;
- sostener decisiones pedagógicas;
- orientar criterios competenciales;
- preparar discusiones SDD;
- preservar local-first;
- integrar seguridad y privacidad desde el inicio;
- documentar tensiones entre principios;
- alimentar el glosario general;
- identificar deuda estructural o WIKI_SYNC cuando corresponda.

Cuando un documento use un concepto de esta base, deberá preferir enlazar al documento canónico correspondiente en lugar de redefinirlo desde cero.

---

## 25. Estado de aprobación

```text
Estado actual: aprobado para colocación local
Revisión requerida: colocar en ruta canónica y verificar en repo local
Próximo paso: crear convenciones previas en 00_CONTROL_MAESTRO
Archivo .md descargable: producido
Commit: pendiente hasta completar conjunto documental aprobado
Cambios funcionales: no autorizados
Impacto en deuda: pendiente de registro en documentación activa y mantenimiento
Impacto en WIKI_SYNC: probable, por enlace futuro con documentación humana
Impacto en bitácora de continuidad: sí aplica
```

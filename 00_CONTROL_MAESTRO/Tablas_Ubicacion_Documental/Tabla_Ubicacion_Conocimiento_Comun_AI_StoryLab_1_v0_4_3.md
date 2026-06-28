# Tabla de Ubicación Documental para Conocimiento Común de AI StoryLab 1 v0.4.3

**Proyecto:** AI StoryLab 1  
**Fase:** v0.4.3 - Philosophical, Pedagogical & Competency Foundation  
**Tipo de documento:** Tabla de ubicación documental  
**Estado:** Aprobado para integración documental  
**ID maestro propuesto:** ASTL-V043-TUB-001  
**Cartapacio recomendado:** `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/`  
**Archivo recomendado:** `Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md`  

**Documentos relacionados:**

```text
00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md
```

---

## 1. Propósito

Esta tabla establece la ubicación documental de las piezas de conocimiento común de AI StoryLab 1 durante la fase `v0.4.3 - Philosophical, Pedagogical & Competency Foundation`.

Su propósito es ofrecer una referencia rápida, verificable y mantenible para saber:

- dónde vive cada documento;
- qué función cumple;
- qué estado documental tiene;
- qué cartapacios debe enlazar;
- qué documentos no debe duplicar;
- qué deuda reduce o genera;
- cuándo requiere WIKI_SYNC;
- cómo se relaciona con la bitácora de transferencia simétrica.

Esta tabla no sustituye la convención de nombres ni la regla de colocación. Las operacionaliza.

---

## 2. Principio de ubicación

La base de conocimiento común vive de forma canónica en:

```text
05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/
```

Su organización interna aprobada es:

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

Los subcartapacios son semánticos y no deben usar prefijos numéricos.

---

## 3. Tabla general de cartapacios

| Cartapacio | Estado | Función principal | Contiene | No contiene | README requerido |
|---|---|---|---|---|---|
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/` | Activo | Raíz del conocimiento común transversal | Índice general y subcartapacios semánticos | Fichas sueltas sin clasificación, specs, código, bitácoras | Sí |
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/` | Activo | Documentos matriz que organizan el marco general | Base de conocimiento común | Fichas individuales, glosarios extensos, referencias acumuladas | Sí |
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Activo | Fichas canónicas de las diez dimensiones | Documentos por dimensión operacional | Glosarios generales, guías internas, referencias centralizadas | Sí |
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/` | Activo | Términos transversales y relaciones conceptuales | Glosario general humano/máquina/IA/competencias/taxonomías | Fichas de dimensión o rúbricas | Sí |
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/` | Pendiente_Activacion | Referencias compartidas y bibliografía común | Referencias académicas, institucionales y prácticas | Revisión bibliográfica extensa no aprobada | Sí |
| `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/` | Pendiente_Activacion | Guías internas para uso documental | Guía de uso del conocimiento común | Guías humanas finales para estudiantes o instituciones | Sí |

---

## 4. Tabla de documentos de control maestro

| Documento | Ruta canónica | Función | Estado esperado | Relación con conocimiento común | Impacto en deuda |
|---|---|---|---|---|---|
| Convención de nombres | `00_CONTROL_MAESTRO/Convenciones_Nombres/Convencion_Nombres_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Define cómo nombrar documentos de conocimiento común | Aprobado | Gobierna nombres semánticos, versionados y no numerados | Reduce deuda estructural |
| Regla de colocación | `00_CONTROL_MAESTRO/Reglas_Colocacion_Documental/Regla_Colocacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Define dónde colocar documentos y cómo enlazarlos | Aprobado | Gobierna rutas, subcartapacios y enlaces espejo | Reduce deuda estructural |
| Tabla de ubicación | `00_CONTROL_MAESTRO/Tablas_Ubicacion_Documental/Tabla_Ubicacion_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Resume ubicación, función, estado y reflejos | Aprobado | Sirve como mapa operativo de colocación | Reduce deuda estructural al aprobarse |

---

## 5. Tabla de documentos matriz

| Documento | Ruta canónica | Estado | Función | Enlaza a | No debe duplicarse en |
|---|---|---|---|---|---|
| `Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | Aprobado, requiere recolocación en `Matriz/` | Organiza eje articulador, capas dialógicas, dimensiones y estructura de fichas | Fichas de dimensiones, glosario general, fundamento filosófico posterior | `01_FUNDAMENTO_FILOSOFICO/`, `21_WIKI_DOCUMENTACION_HUMANA/`, `18_DOCUMENTACION_ACTIVA/` |

---

## 6. Tabla de dimensiones operacionales

| Dimensión | Documento canónico | Ruta canónica | Capa dialógica principal | Estado inicial | WIKI_SYNC |
|---|---|---|---|---|---|
| Humanismo tecnológico | `Base_Conocimiento_Comun_Humanismo_Tecnologico_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Humana y ética | Pendiente | Evaluar |
| Pedagogía crítica | `Base_Conocimiento_Comun_Pedagogia_Critica_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Pedagógica y formativa | Pendiente | Evaluar |
| Aprendizaje lúdico | `Base_Conocimiento_Comun_Aprendizaje_Ludico_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Pedagógica y formativa | Pendiente | Evaluar |
| Investigación-creación | `Base_Conocimiento_Comun_Investigacion_Creacion_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Investigativa y creativa | Pendiente | Evaluar |
| Ética aplicada | `Base_Conocimiento_Comun_Etica_Aplicada_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Humana y ética | Pendiente | Evaluar |
| Diseño universal | `Base_Conocimiento_Comun_Diseno_Universal_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Pedagógica y formativa | Pendiente | Evaluar |
| Conocimiento situado | `Base_Conocimiento_Comun_Conocimiento_Situado_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Investigativa y creativa | Pendiente | Evaluar |
| Creatividad multimodal | `Base_Conocimiento_Comun_Creatividad_Multimodal_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Investigativa y creativa | Pendiente | Evaluar |
| Literacidad crítica en IA | `Base_Conocimiento_Comun_Literacidad_Critica_IA_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Crítico-tecnológica | Pendiente | Evaluar |
| Responsabilidad cultural y social | `Base_Conocimiento_Comun_Responsabilidad_Cultural_Social_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/` | Humana y ética | Pendiente | Evaluar |

---

## 7. Tabla de glosarios

| Documento | Ruta canónica | Estado | Función | Relación con competencias y taxonomías | WIKI_SYNC |
|---|---|---|---|---|---|
| `Glosario_General_Humano_Maquina_IA_Competencias_Taxonomias_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/` | Pendiente | Define términos transversales: persona humana, máquina digital, IA, agencia, competencia, taxonomía, evidencia, rúbrica, portafolio, local-first, SDD, seguridad, privacidad y consentimiento | Prepara vocabulario común para documentos competenciales y taxonómicos sin definirlos todavía | Probable |

---

## 8. Tabla de referencias

| Documento | Ruta canónica | Estado | Función | Uso esperado | WIKI_SYNC |
|---|---|---|---|---|---|
| `Referencias_Base_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/` | Pendiente_Activacion | Reunir referencias académicas, institucionales y prácticas | Evitar bibliografía duplicada en cada ficha y sostener consistencia epistemológica | Evaluar |

---

## 9. Tabla de guías de uso

| Documento | Ruta canónica | Estado | Función | Uso esperado | WIKI_SYNC |
|---|---|---|---|---|---|
| `Guia_Uso_Conocimiento_Comun_AI_StoryLab_1_v0_4_3.md` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/` | Pendiente_Activacion | Explicar cómo usar, enlazar y mantener documentos de conocimiento común | Guía interna del equipo desarrollador/documental | Evaluar. Si se adapta para públicos externos, generar WIKI_SYNC |

---

## 10. Tabla de README requeridos

| README | Ruta | Estado esperado | Propósito | Prioridad |
|---|---|---|---|---|
| README de `Conocimiento_Comun/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/README.md` | Pendiente | Explicar propósito, alcance, subcartapacios y criterios de colocación | Alta |
| README de `Matriz/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Matriz/README.md` | Pendiente | Explicar documentos matriz y su relación con fichas | Alta |
| README de `Dimensiones_Operacionales/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Dimensiones_Operacionales/README.md` | Pendiente | Explicar estructura de fichas canónicas | Alta |
| README de `Glosarios/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Glosarios/README.md` | Pendiente | Explicar glosarios y términos transversales | Media |
| README de `Referencias/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Referencias/README.md` | Pendiente | Explicar referencias compartidas | Media |
| README de `Guias_Uso/` | `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/Guias_Uso/README.md` | Pendiente | Explicar guías internas y relación con WIKI_SYNC | Media |

---

## 11. Tabla de enlaces espejo

| Cartapacio que enlaza | Tipo de enlace | Documento fuente | Acción permitida | Acción no permitida |
|---|---|---|---|---|
| `01_FUNDAMENTO_FILOSOFICO/` | Enlace filosófico-integrador | Documentos canónicos en `Conocimiento_Comun/` | Sintetizar, definir brevemente y enlazar | Copiar fichas completas |
| `05_COMPETENCIAS_Y_PERFILES/Marco_Competencias_Taxonomias/` | Enlace competencial | Glosario y dimensiones operacionales | Usar conceptos para construir competencias y taxonomías | Redefinir conceptos sin enlace |
| `21_WIKI_DOCUMENTACION_HUMANA/` | Enlace pedagógico-humano | Documentos canónicos en `Conocimiento_Comun/` | Traducir, explicar o adaptar para públicos humanos | Sustituir la fuente canónica |
| `18_DOCUMENTACION_ACTIVA/` | Enlace de proceso vivo | Tabla, regla, convención, decisiones y deuda | Registrar decisiones, changelog, manifest, bitácora y WIKI_SYNC | Guardar documentos canónicos como duplicados |
| `20_MANTENIMIENTO_Y_EVOLUCION/` | Enlace de deuda | Cambios de rutas, enlaces y WIKI_SYNC | Registrar deuda estructural o WIKI_SYNC | Resolver deuda sin criterio de cierre |

---

## 12. Tabla de documentos que no pertenecen a conocimiento común

| Tipo de documento | Ruta correcta | Motivo |
|---|---|---|
| Specs técnicas | `.specify/specs/` y reflejos humanos correspondientes | Requieren estructura SDD |
| Threat models | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/Modelos_Amenazas/` | Seguridad operativa no vive en conocimiento común |
| Políticas de privacidad | `16_SEGURIDAD_PRIVACIDAD_Y_DATOS/` o raíz si aplica | Política formal distinta de concepto |
| Bitácoras de sesión | `18_DOCUMENTACION_ACTIVA/Bitacoras/` | Registro de proceso vivo |
| Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` | Historial de cambios |
| Manifest | `18_DOCUMENTACION_ACTIVA/Manifests/` | Inventario de paquete documental |
| Registro de decisiones | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` | Gobernanza viva |
| Guías humanas finales | `21_WIKI_DOCUMENTACION_HUMANA/` | Documentación para personas usuarias |
| Evidencias de evaluación | `15_EVALUACION_CALIDAD_Y_AUDITORIA/` | Evidencia formal |
| Código o componentes | `src/`, `public/`, raíz técnica según corresponda | Implementación funcional |

---

## 13. Tabla de impacto en deuda

| Acción | Tipo de deuda afectada | Efecto | Registro recomendado |
|---|---|---|---|
| Crear subcartapacios semánticos con README | Deuda estructural | Reduce | `20_MANTENIMIENTO_Y_EVOLUCION/Deuda_Estructural/` si se registra formalmente |
| Crear subcartapacios sin README | Deuda estructural | Aumenta | Registrar deuda estructural |
| Mover documento matriz a `Matriz/` | Deuda estructural | Aumenta temporalmente, reduce después de actualizar enlaces | Registrar como deuda controlada hasta actualizar rutas |
| Crear glosario general | Deuda competencial y documental | Reduce ambigüedad | Registrar en manifest y changelog |
| Crear fichas sin tabla de ubicación | Deuda estructural | Aumenta | Registrar deuda estructural |
| Crear guías humanas derivadas | Deuda WIKI_SYNC | Puede reducir | Registrar en WIKI_SYNC |
| Cambiar rutas sin actualizar enlaces espejo | Deuda estructural | Aumenta | Registrar deuda estructural |
| Introducir conceptos que afectan personas usuarias sin guía | Deuda WIKI_SYNC | Aumenta | Registrar deuda WIKI_SYNC |

---

## 14. Tabla de relación con documentación activa

| Evento | Documento activo requerido | Ruta sugerida |
|---|---|---|
| Aprobación de convención, regla y tabla | Registro de decisión | `18_DOCUMENTACION_ACTIVA/Registro_Decisiones/` |
| Producción de paquete de conocimiento común v0.4.3 | Manifest | `18_DOCUMENTACION_ACTIVA/Manifests/` |
| Cambio relevante de rutas | Changelog | `18_DOCUMENTACION_ACTIVA/Changelog/` |
| Impacto en continuidad entre sesiones | Bitácora de sesión y transferencia simétrica | `18_DOCUMENTACION_ACTIVA/Bitacoras/` |
| Necesidad de guía humana | WIKI_SYNC | `18_DOCUMENTACION_ACTIVA/WIKI_SYNC/` |

---

## 15. Tabla de relación con principios rectores

| Principio | Cómo se refleja en esta tabla |
|---|---|
| Local-first | La organización documental preserva control local, rutas explícitas y archivos Markdown versionados |
| Spec-Driven Development | La tabla no autoriza implementación; prepara trazabilidad conceptual para specs futuras |
| Security by Design | Toda ubicación considera riesgos de seguridad y privacidad desde la estructura documental |
| Security by Default | La tabla evita exposición, duplicación y ambigüedad documental por defecto |
| Agencia humana | El sistema documental facilita revisión, decisión y continuidad humana |
| Transferencia simétrica | Los cambios relevantes deben registrarse en bitácora y documentación activa |
| WIKI_SYNC | Los conceptos que afecten comprensión humana deben generar guía o deuda explícita |

---

## 16. Criterios de aceptación

Esta tabla se considerará aprobada si:

- refleja la ruta `05_COMPETENCIAS_Y_PERFILES/Conocimiento_Comun/`;
- integra los subcartapacios `Matriz/`, `Dimensiones_Operacionales/`, `Glosarios/`, `Referencias/` y `Guias_Uso/`;
- mantiene `README.md` como unidad estructural mínima;
- distingue documentos canónicos de documentos de proceso vivo;
- mantiene enlace espejo sin duplicación;
- identifica deuda estructural y WIKI_SYNC;
- enlaza con documentación activa;
- sostiene local-first, SDD, Security by Design y Security by Default;
- no autoriza cambios funcionales.

---

## 17. Límites explícitos

Esta tabla no autoriza:

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

La existencia de rutas documentales no habilita implementación.

---

## 18. Estado de aprobación

```text
Estado actual: aprobado para integración documental
Revisión requerida: completada
Archivo .md descargable: producido
Commit: pendiente hasta completar conjunto documental aprobado
Cambios funcionales: no autorizados
Impacto en deuda: reduce deuda estructural al aprobarse y aplicarse
Impacto en WIKI_SYNC: controlado, requiere evaluación por documento derivado
Impacto en bitácora de continuidad: sí aplica
```

# Mapa de Gates SDD : Ruta hacia v1.0.0

**Proyecto:** AI StoryLab 1  
**Versión de trabajo:** v0.4.5  
**Fecha:** 2026-07-04  
**Estado:** aprobado para commit de hito en PR #11  
**Rama:** `v0.4.5-specs-nucleo-pr11`  
**Documento fuente:** `Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md`  
**Función documental:** desarrollo estratégico-operativo del índice oficial de gates

> **Guardarraíl constitucional v0.4.5**  
> Este documento es un mapa de gobierno SDD. No autoriza implementación funcional, código de aplicación, backend, cloud, autenticación, analíticas, IA externa por defecto, uso de datos reales, subida automática ni automatizaciones funcionales. Todo avance posterior requiere especificación aprobada, análisis de riesgo, consentimiento informado y situado, criterios local-first, revisión humana PH-IT-AT y gate constitucional correspondiente.

## 1. Propósito

Este mapa aprobado desarrolla el Índice Oficial de Gates SDD hacia v1.0.0 y convierte su estructura en una ruta longitudinal de decisión. Su objetivo es ayudar a AI StoryLab 1 a avanzar sin confundir planificación, especificación, arquitectura, diseño, prototipo, prueba, validación y liberación estable.

El mapa no reemplaza el índice. Lo despliega. El índice dice cuáles son las compuertas; este mapa describe cómo se cruzan, qué protegen, qué bloquean, qué evidencia exigen y qué heredan a la versión siguiente.

```text
indice_oficial:
  funcion: estructura estable de gates

mapa_de_gates:
  funcion: lectura estratégica, operativa y longitudinal de esos gates

gates_evaluativos:
  funcion: checklists específicos para aprobar transición

specs:
  funcion: unidades de decisión que nacen o maduran según gate, riesgo y evidencia
```

## 2. Tesis de gobierno SDD

AI StoryLab 1 no avanza hacia v1.0.0 por acumulación de archivos ni por entusiasmo técnico. Avanza por una secuencia de autorización responsable.

```text
specs -> revisión PH-IT-AT -> evidencia -> gate -> deuda aceptada o bloqueante -> siguiente versión
```

Cada gate funciona como una compuerta de presión. Si falta consentimiento, privacidad, seguridad local-first, revisión humana, evidencia o deuda controlada, la compuerta no abre.

## 3. Orden rector del mapa

Este mapa conserva el orden constitucional aceptado en PR #11:

```text
A. Protección, consentimiento, privacidad y seguridad.
B. Experiencia creativa local-first.
C. Evidencia, trazabilidad e investigación-creación.
D. Semillas arquitectónicas y transición conceptual.
```

Este orden evita que la arquitectura se adelante a la agencia humana, que la experiencia se vuelva captura, que la evidencia se vuelva vigilancia o que las semillas arquitectónicas se conviertan en implementación no autorizada.

## 4. Principios de lectura longitudinal

```text
[✓] Una versión no debe cerrar si su gate crítico queda abierto.
[✓] Una spec futura no se redacta por ansiedad de completitud, sino por necesidad de gate.
[✓] Una deuda puede heredarse solo si no bloquea consentimiento, privacidad, seguridad, agencia humana o revisión PH-IT-AT.
[✓] Una semilla arquitectónica puede orientar, pero no implementar.
[✓] Una prueba humana requiere protocolo, consentimiento y evidencia.
[✓] Una ruta hacia v1.0.0 debe seguir siendo local-first por defecto.
```

## 5. Vista panorámica de gates

| Gate | Versión objetivo | Autoriza | No autoriza | Evidencia mínima | Estado v0.4.5 |
|---|---|---|---|---|---|
| Gate 0 | v0.4.5 | Activación documental PR #11 | Implementación | PR draft, bitácoras, protocolo | activo |
| Gate 1 | v0.4.5 | Cierre Specs Núcleo | Arquitectura detallada | revisión SPEC-OP-006, 007, 008 | pendiente, mapa aprobado |
| Gate 2 | v0.4.6 | Arquitectura conceptual | Código funcional | modelos conceptuales y límites | proyectado |
| Gate 3 | v0.4.7 | Diseño de experiencia no funcional | UI funcional | flujos humanos y lenguaje | proyectado |
| Gate 4 | v0.5.x | Prototipo local-first mínimo | Piloto real | datos ficticios y threat model | proyectado |
| Gate 5 | v0.6.x | Pruebas controladas | Despliegue amplio | protocolo de pruebas e incidentes | proyectado |
| Gate 6 | v0.8.x | Validación ampliada | Release automático | matriz de riesgos actualizada | proyectado |
| Gate 7 | v0.9.x | Release candidate | v1.0.0 sin auditoría | deuda crítica cerrada | proyectado |
| Gate 8 | v1.0.0 | Liberación estable | expansión post-v1 sin ciclo SDD | auditoría final y decisión | proyectado |

## 6. Gate 0 : Activación Documental PR #11

### 6.1 Función

Gate 0 confirma que PR #11 existe como contenedor documental y no como espacio de implementación. Protege la transición desde cierre constitucional v0.4.4 hacia apertura operativa v0.4.5.

### 6.2 Autoriza

```text
[✓] activar bitácora de sesión;
[✓] activar transferencia simétrica;
[✓] organizar protocolo de trabajo;
[✓] usar nombres semánticos;
[✓] revisar specs núcleo;
[✓] preparar índice y mapa de gates.
```

### 6.3 Bloquea

```text
[!] código de aplicación;
[!] backend, cloud, autenticación o analíticas;
[!] IA externa por defecto;
[!] datos reales;
[!] subida automática;
[!] automatización funcional.
```

### 6.4 Evidencia requerida

```text
- PR #11 abierto como draft;
- rama documental activa;
- cuerpo del PR alineado con alcance real;
- bitácora activa actualizada;
- transferencia simétrica activa;
- comentario de hito cuando aplique.
```

### 6.5 Criterio de cierre

Gate 0 se considera activo y suficientemente satisfecho cuando PR #11 permanece como draft documental, con límites explícitos y trazabilidad de decisiones.

## 7. Gate 1 : Cierre de Specs Núcleo v0.4.5

### 7.1 Función

Gate 1 valida la primera tríada de protección constitucional: consentimiento informado y situado, datos/privacidad y seguridad local-first. Esta tríada es la cerradura inicial del proyecto.

### 7.2 Specs requeridas

```text
SPEC-OP-006: Consentimiento Informado y Situado.
SPEC-OP-007: Datos y Privacidad.
SPEC-OP-008: Seguridad Local-First.
```

### 7.3 Autoriza

```text
[✓] cerrar el núcleo mínimo de protección;
[✓] ordenar dependencias futuras;
[✓] habilitar specs de experiencia creativa;
[✓] preparar transición conceptual hacia v0.4.6.
```

### 7.4 Bloquea

```text
[!] arquitectura detallada;
[!] implementación funcional;
[!] exportación real;
[!] uso de datos reales;
[!] IA externa;
[!] evaluación automática.
```

### 7.5 Evidencia requerida

```text
- revisión unitaria de SPEC-OP-006;
- revisión unitaria de SPEC-OP-007;
- revisión unitaria de SPEC-OP-008;
- matriz cruzada consentimiento/datos/seguridad;
- gate de aprobación de Specs Núcleo;
- deuda explícita por spec;
- dictamen PH-IT-AT.
```

### 7.6 Deuda permitida

```text
[~] ejemplos de lenguaje por edad;
[~] escenarios ficticios complementarios;
[~] refinamiento de microcopias;
[~] glosarios específicos.
```

### 7.7 Deuda no permitida

```text
[!] falta de consentimiento situado;
[!] falta de clasificación de datos;
[!] falta de privacidad por defecto;
[!] falta de criterio local-first;
[!] ambigüedad entre evidencia, evaluación e investigación.
```

### 7.8 Criterio de cierre

Gate 1 cierra cuando las tres specs núcleo quedan aprobadas o aprobadas con deuda menor explícita, el gate evaluativo documenta evidencia suficiente y no existe deuda crítica de consentimiento, datos o seguridad.

## 8. Gate 2 : Transición a Arquitectura Conceptual v0.4.6

### 8.1 Función

Gate 2 autoriza arquitectura conceptual sin implementación. Permite hablar de objetos de dominio, relaciones, flujos conceptuales y límites del sistema sin crear código ni infraestructura.

### 8.2 Autoriza

```text
[✓] modelos conceptuales;
[✓] entidades de dominio;
[✓] relaciones conceptuales;
[✓] diagramas no funcionales;
[✓] threat model local-first inicial;
[✓] criterios de reversibilidad arquitectónica.
```

### 8.3 Bloquea

```text
[!] base de datos real;
[!] API;
[!] autenticación;
[!] almacenamiento remoto;
[!] integración de IA;
[!] captura de datos reales.
```

### 8.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Objeto_Dominio.
- Spec_Operativa_Threat_Model_Local_First.
- Spec_Operativa_Modelo_Conceptual_Evidencia_Portafolio.
- Spec_Operativa_Decisiones_Reversibles_Arquitectura.
```

### 8.5 Evidencia requerida

```text
- modelos conceptuales sin código;
- lista de límites explícitos;
- relaciones entre entidades y consentimiento;
- riesgos de datos y seguridad;
- decisiones reversibles;
- dictamen PH-IT-AT.
```

### 8.6 Criterio de cierre

Gate 2 cierra cuando la arquitectura conceptual puede explicar el sistema sin necesitar infraestructura funcional. Si el documento requiere código para sostenerse, todavía no es arquitectura conceptual SDD: es implementación prematura.

## 9. Gate 3 : Transición a Diseño de Experiencia v0.4.7

### 9.1 Función

Gate 3 autoriza diseño de experiencia no funcional. Permite trabajar lenguaje, flujos humanos, prototipos de baja fidelidad, accesibilidad expresiva, no rigidez y experiencia creativa local-first.

### 9.2 Autoriza

```text
[✓] mapas de experiencia;
[✓] flujos humanos no funcionales;
[✓] microcopias por perfil;
[✓] prototipos visuales no funcionales;
[✓] criterios de interfaz no rígida;
[✓] experiencias lúdicas sin captura de datos.
```

### 9.3 Bloquea

```text
[!] interfaz funcional;
[!] formularios que capturen datos reales;
[!] tracking de comportamiento;
[!] evaluación automática;
[!] presión para compartir evidencia.
```

### 9.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Experiencia_Creativa_Local_First.
- Spec_Operativa_Interfaz_No_Rigida.
- Spec_Operativa_Reflexion_Usuario.
- Spec_Operativa_Lenguaje_por_Perfiles.
- Spec_Operativa_Accesibilidad_Expresiva.
```

### 9.5 Evidencia requerida

```text
- criterios de lenguaje habitable;
- criterios de accesibilidad expresiva;
- separación entre crear, guardar, evidenciar y compartir;
- pruebas de escritorio con escenarios ficticios;
- revisión AT de no rigidez;
- revisión PH de agencia;
- revisión IT de trazabilidad.
```

### 9.6 Criterio de cierre

Gate 3 cierra cuando la experiencia puede ser revisada humanamente sin convertirse en interfaz funcional ni mecanismo de captura.

## 10. Gate 4 : Transición a Prototipo Local-First v0.5.x

### 10.1 Función

Gate 4 autoriza un prototipo local-first mínimo y controlado, con escenarios ficticios y sin datos reales. Es la primera compuerta donde podría aparecer material funcional, pero solo si los gates previos lo autorizan.

### 10.2 Autoriza

```text
[✓] prototipo mínimo local-first;
[✓] uso de datos ficticios;
[✓] pruebas internas controladas;
[✓] verificación de no captura accidental;
[✓] documentación de límites funcionales.
```

### 10.3 Bloquea

```text
[!] piloto institucional;
[!] usuarios reales sin protocolo;
[!] datos reales;
[!] sincronización remota;
[!] IA externa;
[!] analíticas;
[!] exportación real no especificada.
```

### 10.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Escenarios_Ficticios_Prueba.
- Spec_Operativa_Prueba_Local_First.
- Spec_Operativa_No_Captura_Accidental.
- Spec_Operativa_Portafolio_Local.
- Spec_Operativa_Evidencia_Creativa.
```

### 10.5 Evidencia requerida

```text
- threat model local-first;
- protocolo de pruebas internas;
- evidencia de datos ficticios;
- prueba de no persistencia no consentida;
- matriz de riesgos actualizada;
- revisión PH-IT-AT.
```

### 10.6 Criterio de cierre

Gate 4 cierra cuando el prototipo demuestra control local-first, no usa datos reales, no depende de servicios externos y conserva separación entre creación, evidencia, reflexión y evaluación.

## 11. Gate 5 : Transición a Pruebas Controladas v0.6.x

### 11.1 Función

Gate 5 autoriza pruebas controladas, documentadas y revisadas. No autoriza despliegue amplio ni institucionalización. Su tarea es aprender con cuidado, no demostrar éxito a toda costa.

### 11.2 Autoriza

```text
[✓] pruebas controladas;
[✓] consentimiento específico de prueba;
[✓] registro de incidentes o no incidentes;
[✓] actualización de riesgos;
[✓] ajustes documentales.
```

### 11.3 Bloquea

```text
[!] despliegue amplio;
[!] evaluación académica automática;
[!] uso secundario de datos;
[!] prueba sin protocolo;
[!] prueba sin posibilidad de retiro.
```

### 11.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Protocolo_Pruebas_Controladas.
- Spec_Operativa_Consentimiento_Pruebas.
- Spec_Operativa_Registro_Incidentes.
- Spec_Operativa_Ajustes_Post_Prueba.
- Spec_Operativa_Investigacion_Creacion_Controlada.
```

### 11.5 Evidencia requerida

```text
- protocolo de prueba;
- consentimiento situado;
- informe de resultados;
- matriz de incidentes;
- deuda actualizada;
- dictamen PH-IT-AT.
```

### 11.6 Criterio de cierre

Gate 5 cierra cuando las pruebas controladas producen aprendizaje documentado sin abrir riesgos no consentidos ni convertir la prueba en evaluación.

## 12. Gate 6 : Transición a Validación Ampliada v0.8.x

### 12.1 Función

Gate 6 autoriza validación ampliada solo si las pruebas controladas fueron seguras, trazables y útiles. Esta etapa pregunta si el sistema puede sostener mayor complejidad sin romper su Constitución SDD.

### 12.2 Autoriza

```text
[✓] validación ampliada;
[✓] revisión de escalamiento;
[✓] criterios de exportación controlada;
[✓] actualización de deuda crítica;
[✓] verificación de perfiles.
```

### 12.3 Bloquea

```text
[!] release automático;
[!] expansión con deuda crítica;
[!] presión institucional para automatizar evaluación;
[!] uso secundario de datos;
[!] exportación no controlada.
```

### 12.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Exportacion_Controlada.
- Spec_Operativa_Escalamiento_Validacion.
- Spec_Operativa_Uso_Secundario_Datos.
- Spec_Operativa_Revision_Humana_Ampliada.
- Spec_Operativa_Mantenimiento_Deuda_Critica.
```

### 12.5 Evidencia requerida

```text
- informe de pruebas controladas;
- matriz de riesgos actualizada;
- deuda crítica clasificada;
- criterios de escalamiento;
- validación por perfiles;
- dictamen PH-IT-AT con capacidad de veto.
```

### 12.6 Criterio de cierre

Gate 6 cierra cuando el sistema puede crecer sin esconder deuda crítica, sin diluir consentimiento y sin sacrificar privacidad local-first.

## 13. Gate 7 : Preparación de Release Candidate v0.9.x

### 13.1 Función

Gate 7 prepara la versión candidata a liberación. Su tarea es comprobar que el sistema no solo funciona, sino que puede sostener auditoría, mantenimiento, trazabilidad y protección humana.

### 13.2 Autoriza

```text
[✓] release candidate;
[✓] auditoría final preparatoria;
[✓] cierre de deuda crítica;
[✓] matriz de cumplimiento constitucional;
[✓] checklist de liberación.
```

### 13.3 Bloquea

```text
[!] declarar v1.0.0 sin auditoría;
[!] mantener deuda crítica abierta;
[!] ocultar fallas de consentimiento;
[!] ocultar fallas de privacidad;
[!] liberar sin transferencia PH-IT-AT.
```

### 13.4 Specs que probablemente nacerán o madurarán

```text
- Spec_Operativa_Auditoria_Release_Candidate.
- Spec_Operativa_Checklist_Liberacion.
- Spec_Operativa_Deuda_Critica_Cero.
- Spec_Operativa_Regresion_Documental_Humana.
- Spec_Operativa_Cumplimiento_Constitucional_Final.
```

### 13.5 Evidencia requerida

```text
- gates previos cerrados;
- deuda crítica cerrada;
- trazabilidad completa;
- pruebas de regresión documental;
- pruebas humanas finales;
- matriz constitucional.
```

### 13.6 Criterio de cierre

Gate 7 cierra cuando v0.9.x puede sostener auditoría final sin pedir excepciones constitucionales.

## 14. Gate 8 : Liberación v1.0.0 Estable

### 14.1 Función

Gate 8 autoriza la primera versión estable. No se trata de declarar que el proyecto terminó, sino de confirmar que el sistema ha alcanzado una estabilidad ética, documental, operativa y humana suficiente para entrar en ciclo post-v1.0.0.

### 14.2 Autoriza

```text
[✓] liberación v1.0.0;
[✓] changelog estable;
[✓] decisión formal de liberación;
[✓] documentación de continuidad post-v1;
[✓] ciclo SDD posterior.
```

### 14.3 Bloquea

```text
[!] deuda constitucional;
[!] deuda de consentimiento;
[!] deuda de privacidad;
[!] deuda de seguridad;
[!] deuda de protección de menores;
[!] IA externa no consentida;
[!] evaluación automática como juez final.
```

### 14.4 Evidencia requerida

```text
- auditoría final constitucional;
- gates 0 a 7 cerrados o justificados;
- deuda crítica inexistente;
- consentimiento validado;
- privacidad validada;
- seguridad local-first validada;
- transferencia PH-IT-AT final;
- protección de estudiantes de escuela superior documentada.
```

### 14.5 Criterio de cierre

Gate 8 cierra cuando v1.0.0 puede liberarse sin traicionar la Constitución SDD, sin deuda crítica y sin convertir el sistema en una caja negra que decida por las personas.

## 15. Tablero maestro de dependencias

Este mapa requiere un tablero maestro complementario. El tablero no reemplaza el mapa, pero permite ver la relación entre versiones, gates, specs, deuda, evidencia y próximo PR.

```text
version -> gate -> specs requeridas -> specs dependientes -> evidencia -> deuda -> revisión PH-IT-AT -> próxima decisión
```

### 15.1 Familias de specs por aparición evolutiva

| Familia | Nace o madura principalmente en | Depende de | Riesgo que controla |
|---|---|---|---|
| Consentimiento | v0.4.5 | Constitución SDD | consentimiento genérico |
| Datos y privacidad | v0.4.5 | consentimiento | sobrerrecolección |
| Seguridad local-first | v0.4.5 | datos y consentimiento | falsa seguridad |
| Arquitectura conceptual | v0.4.6 | tríada núcleo | implementación prematura |
| Experiencia creativa | v0.4.7 | tríada núcleo | formularización rígida |
| Evidencia y portafolio | v0.5.x | experiencia y datos | vigilancia pedagógica |
| Pruebas controladas | v0.6.x | prototipo y consentimiento | pruebas sin protocolo |
| Exportación controlada | v0.8.x | portafolio y seguridad | fuga de datos |
| Release candidate | v0.9.x | gates previos | deuda crítica oculta |
| Liberación estable | v1.0.0 | auditoría final | release prematuro |

## 16. Paquetes por versión

Cada versión posterior debe dejar un paquete documental mínimo:

```text
Decision_de_version
Specs_creadas_o_actualizadas
Gate_o_checklist_aplicado
Matriz_de_riesgos_actualizada
Registro_de_deuda_actualizado
Bitacora_de_sesion
Transferencia_PH_IT_AT
Changelog
Prompt_de_continuidad
```

Este patrón asegura que el proyecto no avance como una colección de commits, sino como una secuencia de decisiones legibles.

## 17. Criterios para cerrar v0.4.5

```text
[ ] Índice Oficial de Gates aprobado en PR #11.
[ ] Mapa de Gates SDD hacia v1.0.0 incorporado como borrador completo.
[ ] Modelo Evolutivo de Specs por Gates registrado.
[ ] Specs Núcleo revisadas unitariamente.
[ ] Matriz cruzada consentimiento/datos/seguridad validada.
[ ] Gate de aprobación de Specs Núcleo aplicado.
[ ] Deuda crítica identificada.
[ ] Bitácoras activas actualizadas.
[ ] Bitácora del Capitán actualizada.
[ ] Changelog PR #11 actualizado.
[ ] Prompt de continuidad preparado.
```

## 18. Riesgos si el mapa se usa incorrectamente

```text
riesgo_1: convertir el mapa en calendario rígido.
control: usar gates como criterios de autorización, no como fechas cerradas.

riesgo_2: crear specs futuras demasiado pronto.
control: aplicar modelo evolutivo por gate, dependencia y evidencia.

riesgo_3: tratar semillas arquitectónicas como permiso de implementación.
control: repetir guardarraíl constitucional en cada documento de transición.

riesgo_4: olvidar perfiles humanos.
control: exigir revisión por estudiante de escuela superior, universitario, docente e investigador.

riesgo_5: reducir PH-IT-AT a firma simbólica.
control: documentar dictamen diferenciado por perfil creador.
```

## 19. Dictamen del mapa

El mapa queda como borrador completo para PR #11. No cierra v0.4.5 por sí solo. Ordena el camino para que el cierre de v0.4.5 pueda ocurrir con evidencia suficiente.

Su lectura principal es simple:

```text
no todo debe escribirse ahora;
no todo puede implementarse todavía;
no todo avance es progreso;
no todo documento es gate;
no toda deuda bloquea;
pero toda transición crítica debe tener evidencia, revisión y consentimiento.
```

AI StoryLab 1 avanza hacia v1.0.0 por compuertas, no por avalancha. El índice fija la estructura. Este mapa da la navegación. Los gates futuros decidirán cuándo abrir cada esclusa.

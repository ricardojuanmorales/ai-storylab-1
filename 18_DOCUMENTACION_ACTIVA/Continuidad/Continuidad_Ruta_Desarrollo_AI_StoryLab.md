# Continuidad de Ruta de Desarrollo AI StoryLab

**Proyecto:** AI StoryLab 1  
**Punto de partida:** post-merge PR #11  
**Fase cerrada:** v0.4.5 Specs Núcleo  
**Fase próxima:** v0.4.6 Arquitectura Conceptual No Funcional  
**Horizonte:** v1.0.0 estable  
**Naturaleza:** ruta documental SDD, sin implementación funcional

> **Guardarraíl constitucional**
> Esta ruta no autoriza implementación funcional. Solo organiza continuidad documental, gates, deuda y prioridades de desarrollo responsable hacia v1.0.0.

## Punto de continuidad

AI StoryLab 1 cerró PR #11 con la primera tríada constitucional aprobada:

```text
consentimiento_informado_y_situado
datos_y_privacidad
seguridad_local_first
```

Esta tríada no es una función del sistema. Es una cerradura de gobierno documental que toda spec futura debe consultar antes de tocar experiencia, evidencia, portafolio, exportación, investigación, evaluación, arquitectura conceptual o IA futura.

## Regla de continuidad

```text
ninguna_fase_avanza_si_faltan:
  - consentimiento situado;
  - clasificación de datos;
  - privacidad por defecto;
  - seguridad local-first;
  - matriz de acciones sensibles;
  - revisión PH-IT-AT;
  - evidencia de gate;
  - deuda controlada.
```

## Ruta hacia v1.0.0

### v0.4.6 : Arquitectura Conceptual No Funcional

Función:

```text
definir objetos de dominio, relaciones, límites, zonas conceptuales,
amenazas ampliadas y decisiones reversibles sin código ni infraestructura.
```

Documentos recomendados:

```text
Criterios_Semillas_Arquitectonicas_AI_StoryLab.md
Spec_Operativa_Objeto_Dominio_AI_StoryLab.md
Spec_Operativa_Threat_Model_Local_First_AI_StoryLab.md
Modelo_Conceptual_Evidencia_Portafolio_AI_StoryLab.md
Criterios_Decisiones_Reversibles_Arquitectura_AI_StoryLab.md
Gate_Transicion_Arquitectura_Conceptual_AI_StoryLab.md
```

Condición de cierre:

```text
La arquitectura conceptual explica el sistema sin necesitar código,
base de datos, API, cuenta, nube, IA externa ni datos reales.
```

### v0.4.7 : Diseño de Experiencia No Funcional

Función:

```text
diseñar flujos humanos, lenguaje, microcopias,
accesibilidad expresiva, experiencia lúdica y controles habitables.
```

Documentos recomendados:

```text
Mapa_Experiencia_Creativa_Local_First_AI_StoryLab.md
Guia_Lenguaje_Perfiles_Usuario_AI_StoryLab.md
Criterios_Interfaz_No_Rigida_AI_StoryLab.md
Escenarios_Ficticios_Edad_Contexto_AI_StoryLab.md
Gate_Transicion_Diseno_Experiencia_AI_StoryLab.md
```

Condición de cierre:

```text
La experiencia puede describirse y revisarse sin UI funcional,
sin capturar datos reales y sin pruebas con personas.
```

### v0.5.x : Prototipo Local-First Mínimo

Función:

```text
preparar prototipo local-first mínimo con datos ficticios,
sin backend, sin cloud y sin IA externa por defecto.
```

Condición de apertura:

```text
Debe existir threat model ampliado, matriz de acciones sensibles específica,
datos ficticios definidos y gate aprobado.
```

### v0.6.x : Pruebas Controladas

Función:

```text
preparar condiciones de prueba con protocolo, consentimiento,
registro de incidentes, límites de uso y revisión humana.
```

Condición de apertura:

```text
No puede comenzar sin protocolo formal, consentimiento por perfil,
protecciones para estudiantes y revisión institucional si aplica.
```

### v0.8.x : Validación Ampliada

Función:

```text
validar estabilidad documental, experiencia, protección,
trazabilidad y deuda antes de release candidate.
```

Condición de apertura:

```text
No puede comenzar con deuda crítica de consentimiento,
datos, seguridad, investigación, evaluación o IA.
```

### v0.9.x : Release Candidate

Función:

```text
preparar auditoría final, regresión documental,
deuda crítica cero y checklist de liberación.
```

### v1.0.0 : Liberación Estable

Función:

```text
liberar una versión estable documentada, auditable,
humana, local-first por defecto y protegida por gates.
```

## Prioridad inmediata para v0.4.6

La próxima sesión debe comenzar por esta secuencia:

```text
[ ] Activar nueva sesión post-merge desde main.
[ ] Confirmar que PR #11 está merged.
[ ] Leer cierre de sesión y prompt de activación.
[ ] Revisar índice, mapa y tablero maestro.
[ ] Revisar SPEC-OP-006, SPEC-OP-007 y SPEC-OP-008.
[ ] Revisar Gate de Specs Núcleo.
[ ] Revisar glosario, matriz de acciones sensibles y guía PH-IT-AT.
[ ] Abrir rama documental nueva para arquitectura conceptual no funcional.
[ ] Crear protocolo de trabajo de la nueva fase.
[ ] Crear plan de revisión de arquitectura conceptual.
[ ] Iniciar threat model local-first ampliado.
```

## Deuda que debe vigilarse al iniciar v0.4.6

```text
deuda_que_se_vuelve_bloqueante_en_v0_4_6:
  - threat model detallado local-first;
  - criterios de objeto de dominio;
  - decisiones reversibles;
  - matriz de acciones sensibles para arquitectura conceptual;
  - límites explícitos entre concepto, diseño, prototipo e implementación.
```

## Regla de herencia

Toda deuda heredada debe conservar:

```text
[✓] función documental;
[✓] ruta sugerida;
[✓] responsable conceptual;
[✓] versión destino;
[✓] razón por la cual no bloquea;
[✓] condición que la volvería bloqueante.
```

## Dictamen de continuidad

```text
continuidad:
  rumbo: v0.4.6 arquitectura conceptual no funcional
  prioridad: threat model local-first ampliado + objetos de dominio + decisiones reversibles
  implementacion: bloqueada
  metodo: SDD por gates, specs, deuda, evidencia y revisión PH-IT-AT
```

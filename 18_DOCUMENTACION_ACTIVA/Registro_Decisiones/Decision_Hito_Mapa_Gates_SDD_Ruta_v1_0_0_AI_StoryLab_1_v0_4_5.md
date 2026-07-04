# Decisión : Hito Mapa de Gates SDD hacia v1.0.0

**Proyecto:** AI StoryLab 1  
**Fecha:** 2026-07-04  
**Versión:** v0.4.5  
**PR:** #11, `docs: apertura operativa v0.4.5 specs núcleo`  
**Estado:** decisión documental aprobada para commit de hito

> **Guardarraíl constitucional v0.4.5**  
> Esta decisión no autoriza implementación funcional, código, backend, cloud, autenticación, analíticas, IA externa por defecto, datos reales, subida automática ni automatizaciones funcionales.

## 1. Decisión

Se aprueba como hito de PR #11 la incorporación conjunta del `Indice_Oficial_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md` y del `Mapa_Gates_SDD_Ruta_v1_0_0_AI_StoryLab_1_v0_4_5.md`, construido desde el índice oficial aprobado en la sesión.

## 2. Alcance

```text
incluye:
  - mapa completo de gates hacia v1.0.0;
  - tablero maestro de dependencias specs-gates-versiones;
  - actualización de bitácora de sesión activa;
  - actualización de transferencia simétrica activa;
  - actualización de Bitácora del Capitán;
  - changelog del PR #11;
  - tabla de ubicación canónica;
  - prompt de continuidad;
  - registro de deuda del hito.

excluye:
  - implementación funcional;
  - arquitectura detallada operativa;
  - diseño de UI funcional;
  - pruebas con datos reales;
  - IA externa;
  - exportación real;
  - automatización.
```

## 3. Razón

El Índice Oficial de Gates estabiliza la estructura. El mapa desarrolla esa estructura como ruta longitudinal, de modo que cada versión futura pueda saber qué gate intenta cruzar, qué specs necesita, qué evidencia debe producir y qué deuda no puede heredar.

## 4. Relación con el modelo evolutivo de specs

El mapa no lista todas las specs futuras como obligaciones cerradas. Las organiza como familias y probabilidades de aparición según gates. Esto conserva el modelo evolutivo aceptado: una spec nace cuando un gate, riesgo, evidencia, dependencia o experiencia humana la hace necesaria.

## 5. Criterio de aceptación del hito

```text
[✓] El mapa conserva el orden A+B+C+D.
[✓] El mapa usa el índice como esqueleto estable.
[✓] El mapa declara qué autoriza y qué bloquea cada gate.
[✓] El mapa define evidencia, deuda y revisión PH-IT-AT por transición.
[✓] El mapa preserva local-first y consentimiento situado.
[✓] El mapa no autoriza implementación.
```

## 6. Dictamen

El hito queda aprobado como trabajo documental de PR #11, junto con el Índice Oficial de Gates incluido en el mismo commit. Su valor es convertir la ruta hacia v1.0.0 en una secuencia auditable de compuertas, no en una lista de deseos técnicos.

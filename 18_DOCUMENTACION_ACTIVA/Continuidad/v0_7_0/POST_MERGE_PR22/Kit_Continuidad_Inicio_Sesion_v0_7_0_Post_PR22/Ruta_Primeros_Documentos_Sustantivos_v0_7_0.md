# Ruta de Primeros Documentos Sustantivos · AI StoryLab 1 v0.7.0

## 1. Propósito

Este documento propone el orden inicial de producción documental para v0.7.0.

La ruta puede ajustarse, pero no debe saltar directamente a implementación.

---

## 2. Secuencia recomendada

### Documento 1

```text
Mapa_Decisiones_Tecnicas_v0_7_AI_StoryLab.md
```

Función:

- organizar familias de decisiones;
- identificar dependencias;
- distinguir decisiones abiertas, candidatas y diferidas;
- impedir selección prematura de stack.

### Documento 2

```text
Arquitectura_Conceptual_Local_First_v0_7_AI_StoryLab.md
```

Función:

- definir principios local-first;
- mapear componentes conceptuales;
- separar datos, interfaz, lógica y almacenamiento;
- mantener independencia de proveedor.

### Documento 3

```text
Modelo_Roles_Permisos_Visibilidad_v0_7_AI_StoryLab.md
```

Función:

- definir sujetos;
- delimitar permisos;
- establecer visibilidad mínima necesaria;
- impedir administrador total.

### Documento 4

```text
Especificacion_Vista_Facilitador_No_Vigilante_v0_7_AI_StoryLab.md
```

Función:

- pagar deuda DFUX-FAC-v0.6-001 en plano técnico-conceptual;
- distinguir acompañamiento de vigilancia;
- especificar señales formativas permitidas y prohibidas.

### Documento 5

```text
Matriz_Seguridad_Privacidad_Datos_v0_7_AI_StoryLab.md
```

Función:

- mapear amenazas;
- definir controles;
- distinguir datos inexistentes, evitados, mínimos, derivados y sensibles;
- preparar criterios para v0.8.0.

---

## 3. Regla de avance

```yaml
regla_avance:
  no_abrir_documento_siguiente_hasta:
    - documento_actual_revisado
    - decisiones_abiertas_registradas
    - deudas_actualizadas
    - aprobacion_humana_explicita
```

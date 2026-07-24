# Bitácora de Evolución del Protocolo de Trabajo v3.2

```yaml
protocol_version: 3.2
status: APROBADO_PARA_USO
approval_date: 2026-07-23
predecessor: v3.1
effective_from: final_documentary_commit_of_H08_6_session
```

## Procedencia

v3.2 surge de la evaluación longitudinal de H08 y, de forma inmediata, de la
sesión de estabilización H08-6.

La primera parte de la sesión mostró fragmentación operacional, reejecuciones,
validación tardía de permisos y operadores incapaces de aceptar algunos estados
parciales. La segunda parte consolidó un flujo de un solo movimiento por hito.

## Aprendizajes ratificados

- un hito usa un operador principal;
- el operador es reanudable por diseño;
- los gates humanos permanecen visibles dentro de la misma ejecución;
- los estados cerrados son monotónicos;
- permisos de workflows se verifican antes del commit;
- documentación se normaliza antes del staging;
- evidencia se reutiliza mientras el head no cambia;
- comentarios se preparan después de la evidencia final;
- Ready, merge y gates globales nunca se infieren;
- la IA registra una autoevaluación y convierte errores en controles.

## Autoevaluación de la IA

```yaml
preventable_errors:
  - fragmentacion_de_operadores
  - repeticion_de_autorizaciones
  - validacion_tardia_de_permisos
  - reanudacion_no_modelada_desde_el_inicio
  - normalizacion_documental_tardia
root_causes:
  - priorizar_resolucion_local_sobre_flujo_integral
  - no_aplicar_desde_el_inicio_el_principio_un_hito_un_movimiento
  - preflight_incompleto_de_transporte_y_permisos
successful_patterns:
  - operador_unico
  - tokens_humanos_embebidos
  - allowlists
  - estado_monotonico
  - salida_normalizada
  - comentario_manual
human_feedback:
  - reducir_vueltas_innecesarias
  - seguir_protocolo_expedito
  - conservar_autoridad_humana
controls_added:
  - PROTO_ONE_MOVE_013
  - PROTO_MONOTONIC_014
  - PROTO_AUTH_015
  - PROTO_RESUME_016
  - PROTO_WORKFLOW_017
  - PROTO_LINT_018
  - PROTO_EVIDENCE_019
  - PROTO_COMMENT_020
  - PROTO_STATE_021
  - PROTO_FAILURE_022
  - PROTO_GATE_023
  - PROTO_VERBOSITY_024
  - PROTO_SELF_REVIEW_025
  - PROTO_CANVAS_026
  - PROTO_LAST_COMMIT_027
```

## Decisión humana

El responsable humano aprobó v3.2 como versión actual y autorizó incorporarla
en el último commit documental de la sesión.

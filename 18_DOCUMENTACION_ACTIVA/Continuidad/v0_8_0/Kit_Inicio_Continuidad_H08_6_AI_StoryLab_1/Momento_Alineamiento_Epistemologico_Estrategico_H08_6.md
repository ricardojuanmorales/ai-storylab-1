# Momento de Alineamiento Epistemológico y Estratégico · H08-6

**Naturaleza:** diálogo humano asistido por IA  
**Momento:** después de verificar el kit y antes de rama, PR o commit  
**Resultado:** acuerdo humano suficiente para definir y abrir H08-6  
**Duración:** proporcional a la complejidad

## Propósito

Reconstruir el estado heredado, comprender qué necesidad humana debe atender
H08-6 y acordar propósito, alcance, riesgos, evidencia y arquitectura antes de
ejecutar.

## Apertura

### Qué sabemos

- H08-5 está cerrado documentalmente y fusionado;
- el baseline es `main` en el merge commit indicado por el kit;
- el protocolo v3.1 continúa aprobado para H08;
- el portafolio y el roundtrip local-first están implementados;
- no se ha iniciado H08-6.

### Qué todavía no debe presumirse

- propósito funcional exacto de H08-6;
- rama y nombre del PR;
- hitos internos;
- cambios de schema o persistencia;
- alcance de interfaz;
- criterios de aceptación;
- pruebas focalizadas;
- deuda que pueda aceptarse.

## Preguntas epistemológicas

1. ¿Qué hechos están verificados por el kit y GitHub?
2. ¿Qué interpretaciones requieren confirmación humana?
3. ¿Qué problema humano justifica H08-6?
4. ¿Qué capacidades heredadas deben permanecer invariantes?
5. ¿Qué decisiones no pueden delegarse a IA o máquina?
6. ¿Qué evidencia permitiría declarar el hito completo?

## Preguntas estratégicas

1. ¿Cuál es el resultado humano más importante de H08-6?
2. ¿Qué queda explícitamente fuera?
3. ¿Cuál es la arquitectura de hitos internos?
4. ¿Qué pruebas demuestran progreso real?
5. ¿Qué riesgos éticos, pedagógicos, técnicos y documentales aparecen?
6. ¿Qué gates humanos se requieren?
7. ¿Cómo se conservará la ventana de contexto entre conversaciones?

## Cierre del momento

```yaml
alignment:
  facts_confirmed:
  assumptions_identified:
  purpose:
  strategic_priority:
  target_branch:
  PR_model:
  internal_milestones:
  allowed_scope:
  forbidden_scope:
  tests:
  publication_gate:
  protocol_version: 3.1
  human_agreement: PENDING
```

Solo después de que la persona declare alineamiento suficiente podrá
prepararse el primer commit de kit y activación.

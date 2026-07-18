
Feature: Checkpoint independiente H08-3A

  Scenario: Congelar el head funcional
    Given H08-3.4 fue publicado y verificado
    When comienza H08-3A
    Then el head funcional permanece identificado
    And los cambios funcionales están prohibidos

  Scenario: Repetir verificación automatizada
    Given el árbol solo contiene documentos del checkpoint
    When se ejecuta la suite focalizada y npm run verify
    Then migración persistencia recuperación e integración pasan
    And typecheck build y auditorías pasan

  Scenario: Preservar fuentes históricas
    Given existe un proyecto raw alpha.1 válido
    When se migra y promueve
    Then la fuente original permanece intacta

  Scenario: Preservar privacidad
    Given existen reflexiones evidencia y pseudónimo
    When se construyen índice y cuarentena
    Then no contienen payload ni contenido privado

  Scenario: Recuperar estados interrumpidos
    Given una escritura queda en staging
    When el repositorio recupera su estado
    Then aplica roll-forward determinista
    And deja snapshot índice recent coherentes

  Scenario: Rechazar corrupción y futuro
    Given existe corrupción o una versión futura
    When se intenta cargar
    Then la fuente se preserva
    And la operación se bloquea con clasificación segura

  Scenario: Mantener alcance diferido
    Then red nube telemetría analíticas e IndexedDB permanecen ausentes
    And importación roundtrip descarga M2 M3 y M4 permanecen fuera de alcance

  Scenario: Separar recomendación y dictamen
    Given termina la revisión automatizada
    When se emite una recomendación técnica
    Then el dictamen efectivo permanece pendiente de aprobación humana

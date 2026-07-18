
Feature: Integración de persistencia endurecida H08-3.4

  Scenario: Recuperar un proyecto H08-2 completo
    Given existe un proyecto completado compatible con H08-2
    When se guarda y recupera mediante el repositorio endurecido
    Then el proyecto completo permanece equivalente
    And el índice no contiene pseudónimo reflexiones ni evidencia

  Scenario: Integrar migración histórica
    Given existe un raw alpha.1 válido
    When se carga como proyecto reciente
    Then se migra a alpha.2
    And se promueve a envelope v1
    And la fuente raw permanece intacta

  Scenario: Integrar recuperación de staging
    Given una promoción fue interrumpida después de escribir staging
    When una nueva instancia del repositorio recupera el proyecto
    Then completa roll-forward
    And snapshot índice recent quedan coherentes
    And staging queda limpio

  Scenario: Observar corrupción localmente
    Given un envelope tiene un payload distinto de su digest
    When se intenta recuperar
    Then devuelve un error tipado con clasificación segura
    And conserva la fuente
    And registra cuarentena sin contenido privado

  Scenario: Preservar alcance
    Then no se añade red nube telemetría analíticas IndexedDB importación roundtrip ni descarga

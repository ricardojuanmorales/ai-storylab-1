Feature: Versionado y migración H08-3.1

  Scenario: Reconocer un proyecto actual
    Given existe un proyecto válido 0.8.0-alpha.2
    When se solicita migrarlo a la versión actual
    Then devuelve una copia válida 0.8.0-alpha.2
    And no modifica la fuente

  Scenario: Migrar alpha.1 hacia alpha.2
    Given existe un proyecto válido 0.8.0-alpha.1
    When se solicita migrarlo a la versión actual
    Then devuelve un proyecto válido 0.8.0-alpha.2
    And conserva todos los valores salvo schemaVersion
    And no modifica la fuente

  Scenario: Mantener determinismo
    Given el mismo proyecto válido 0.8.0-alpha.1
    When se migra en ejecuciones independientes
    Then los resultados son estructuralmente iguales

  Scenario: Mantener idempotencia del orquestador
    Given un proyecto ya migrado a 0.8.0-alpha.2
    When se procesa nuevamente
    Then devuelve una copia equivalente
    And no aplica otra transformación

  Scenario: Rechazar una versión futura
    Given un proyecto declara una versión posterior a 0.8.0-alpha.2
    When se intenta procesar
    Then devuelve SCHEMA_VERSION_UNSUPPORTED
    And conserva intacta la fuente

  Scenario: Rechazar legacy v0.3
    Given una entrada se identifica como legacy v0.3
    When se intenta procesar
    Then devuelve LEGACY_MIGRATION_REQUIRED
    And no fabrica una migración

  Scenario: Rechazar una fuente alpha.1 malformada
    Given una entrada declara 0.8.0-alpha.1 pero incumple su schema
    When se intenta migrar
    Then devuelve un error seguro de validación
    And no produce un destino parcial

  Scenario: No persistir durante H08-3.1
    Given una migración válida
    When se obtiene el resultado
    Then ningún adaptador de almacenamiento es invocado

Feature: Freeze contractual de portafolio y roundtrip

  Scenario: El paquete usa un envelope estricto
    Given un paquete de portafolio sintético
    When se valida contra la versión 1.0.0
    Then no admite claves inesperadas
    And declara schema de proyecto e integridad

  Scenario: Una reflexión privada no puede salir
    Given un proyecto con una reflexión privada
    When se construye la proyección exportable
    Then la reflexión privada no aparece en el payload

  Scenario: El checksum cubre el payload canónico
    Given dos payloads semánticamente idénticos con claves en distinto orden
    When se canonicalizan con storylab-canonical-json-v1
    Then producen el mismo SHA-256

  Scenario: El rechazo no muta almacenamiento
    Given un archivo inválido
    When falla cualquier validación previa a confirmación
    Then repository.save no se invoca

  Scenario: La importación crea una copia
    Given un paquete válido y confirmado
    When se importa
    Then solamente project.id se regenera
    And los identificadores internos se preservan

  Scenario: Alpha 1 migra y una versión futura se rechaza
    Given un paquete alpha.1
    When se importa
    Then se migra determinísticamente a alpha.2
    Given un paquete con versión 0.9.0
    When se importa
    Then se rechaza sin mutación

  Scenario: El roundtrip compara significado
    Given una proyección exportable válida
    When se exporta, importa, guarda y recupera
    Then el proyecto recuperado es semánticamente equivalente

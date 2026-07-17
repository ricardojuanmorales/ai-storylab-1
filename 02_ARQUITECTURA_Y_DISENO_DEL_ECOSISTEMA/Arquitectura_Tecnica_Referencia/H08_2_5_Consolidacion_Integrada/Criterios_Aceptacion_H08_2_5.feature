Feature: Consolidación integrada de H08-2

  Scenario: Persistir desde la interfaz
    Given App utiliza LocalStorageProjectRepository
    When una persona crea un proyecto
    Then se escribe la clave del proyecto
    And se escribe el puntero reciente

  Scenario: Recuperar el sistema integrado
    Given el proyecto fue creado desde la interfaz
    When App se desmonta y vuelve a montarse
    Then recupera el proyecto validado

  Scenario: Cerrar el ciclo después de recuperar
    Given M1 fue completada y curada
    When App recupera el proyecto
    And prepara export preview
    Then el paquete contiene la evidencia
    And excluye la reflexión privada

  Scenario: Bloquear corrupción integrada
    Given el adaptador contiene JSON inválido
    When App intenta recuperar
    Then bloquea el proyecto
    And permite descartarlo

  Scenario: Comunicar cuota integrada
    Given el storage rechaza escrituras por cuota
    When App intenta crear el proyecto
    Then presenta un mensaje seguro
    And no conserva escritura parcial

  Scenario: Borrar completamente
    Given existe proyecto y puntero reciente
    When la persona confirma el borrado
    Then ambas claves desaparecen

  Scenario: Mantener alcance
    Given H08-2.5 está activo
    Then importación permanece ausente
    And roundtrip permanece ausente
    And descarga permanece ausente

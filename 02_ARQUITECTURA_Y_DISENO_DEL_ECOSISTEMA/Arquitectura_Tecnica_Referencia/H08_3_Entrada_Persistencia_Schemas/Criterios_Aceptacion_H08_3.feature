Feature: Endurecimiento de persistencia y schemas H08-3

  Scenario: Migrar alpha.1 de forma segura
    Given existe un proyecto válido 0.8.0-alpha.1
    When la aplicación lo recupera
    Then produce un proyecto válido en la versión objetivo
    And conserva la intención creativa y la privacidad

  Scenario: Rechazar versión futura
    Given existe un snapshot con una versión más nueva
    When la aplicación intenta cargarlo
    Then lo rechaza con un error seguro
    And no altera la fuente

  Scenario: Recuperar escritura interrumpida
    Given una escritura quedó en staging
    When el repositorio inicia
    Then aplica una regla determinista
    And no presenta un proyecto parcial

  Scenario: Mantener índice mínimo
    Given existen varios proyectos sintéticos
    When se actualiza el índice
    Then solo conserva metadatos mínimos
    And no duplica reflexiones ni evidencia

  Scenario: Manejar cuota
    Given el almacenamiento falla por cuota
    When se intenta guardar
    Then devuelve un error tipado
    And conserva el estado previo coherente

  Scenario: Preservar alcance
    Given H08-3 está activo
    Then M2 M3 y M4 permanecen no funcionales
    And importación y roundtrip permanecen ausentes
    And no existe red ni nube

Feature: M1 Intención creadora funcional

  Scenario: Crear el proyecto local
    Given una persona usa un seudónimo sintético
    When crea un proyecto
    Then el proyecto existe en memoria
    And ninguna red es necesaria

  Scenario: Abrir M1
    Given un proyecto nuevo
    When inicia M1
    Then la misión cambia a in_progress

  Scenario: Guardar y editar el borrador
    Given M1 está en progreso
    When guarda una actividad textual
    Then el borrador permanece editable
    And todavía no es evidencia

  Scenario: Preparar evidencia
    Given existe un borrador
    When crea una evidencia
    Then la misión cambia a ready_for_review
    And el portafolio permanece vacío

  Scenario: Omitir reflexión
    Given existe una evidencia
    When deja la reflexión vacía
    Then puede continuar sin bloqueo

  Scenario: Decidir sin automatización
    Given una evidencia lista para revisión
    When registra una decisión
    Then actor es human_user
    And ninguna opción fue preseleccionada

  Scenario: Curar voluntariamente
    Given la decisión humana es accept
    When incorpora la evidencia
    Then aparece en el portafolio

  Scenario: Retirar sin destruir
    Given existe un item de portafolio
    When lo retira
    Then la evidencia original permanece

  Scenario: Reabrir
    Given M1 está completada
    When la reabre
    Then conserva los materiales creativos
    And retira la decisión y la curaduría vigentes

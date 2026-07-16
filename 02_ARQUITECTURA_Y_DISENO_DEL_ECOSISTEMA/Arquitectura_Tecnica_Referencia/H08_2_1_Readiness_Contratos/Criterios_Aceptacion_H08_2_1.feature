Feature: Primera vertical slice creativa local-first

  Background:
    Given un perfil sintético local
    And un proyecto válido
    And todas las capacidades diferidas están desactivadas

  Scenario: Abrir una misión configurable
    Given una definición de misión textual
    When la persona inicia la misión
    Then el progreso cambia a "in_progress"
    And ninguna red es necesaria

  Scenario: Guardar una actividad textual editable
    Given una misión en progreso
    When la persona guarda su respuesta
    Then la respuesta permanece editable
    And el proyecto conserva un resultado tipado

  Scenario: Crear evidencia textual
    Given una actividad guardada
    When la persona crea evidencia
    Then la evidencia inicia como borrador
    And no entra automáticamente al portafolio

  Scenario: Mantener una reflexión privada
    Given una evidencia
    When la persona escribe una reflexión
    Then la reflexión usa privacidad "private"
    And no queda seleccionada para exportación

  Scenario: Exigir decisión humana
    Given una evidencia revisada
    When no existe una decisión humana de aceptación
    Then la evidencia no puede entrar al portafolio

  Scenario: Rechazar referencia inexistente
    Given un item de portafolio
    When su evidenceId no existe en el proyecto
    Then se emite PORTFOLIO_EVIDENCE_NOT_FOUND

  Scenario: Rechazar evidencia duplicada
    Given una evidencia ya incorporada
    When se intenta incorporarla nuevamente
    Then se emite PORTFOLIO_DUPLICATE_EVIDENCE

  Scenario: Retirar del portafolio
    Given una evidencia incorporada
    When la persona retira el item
    Then el item desaparece del portafolio
    And la evidencia original permanece disponible

  Scenario: Previsualizar una exportación
    Given un proyecto válido
    When la persona solicita la vista previa
    Then se produce un ExportPackage validado
    And ninguna descarga ocurre sin confirmación

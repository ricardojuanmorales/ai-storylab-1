Feature: Recuperación local y export preview

  Scenario: Guardar automáticamente
    Given un proyecto sintético válido
    When una operación del ciclo creativo termina
    Then el repositorio guarda JSON bajo una clave versionada

  Scenario: Recuperar después de recargar
    Given existe un proyecto local válido
    When la aplicación inicia
    Then valida JSON Schema
    And valida invariantes
    And presenta el proyecto recuperado

  Scenario: Bloquear corrupción
    Given el JSON local está dañado
    When la aplicación intenta recuperarlo
    Then emite PERSISTENCE_DATA_CORRUPTED
    And no carga el proyecto silenciosamente

  Scenario: Manejar cuota
    Given el navegador rechaza la escritura por cuota
    When el repositorio guarda
    Then emite PERSISTENCE_QUOTA_EXCEEDED

  Scenario: Fallback en memoria
    Given localStorage no está disponible
    When la aplicación inicia
    Then utiliza InMemoryProjectRepository
    And comunica que la sesión es efímera

  Scenario: Borrar explícitamente
    Given existe un proyecto local
    When la persona prepara y confirma el borrado
    Then elimina el proyecto y su puntero reciente

  Scenario: Exigir portafolio
    Given el portafolio está vacío
    When solicita export preview
    Then emite EXPORT_SELECTION_REQUIRED

  Scenario: Proteger reflexión privada
    Given existe una reflexión private
    When genera export preview
    Then la reflexión no aparece en el paquete

  Scenario: No descargar
    Given el paquete fue validado
    When aparece la vista previa
    Then se muestra JSON revisable
    And no ocurre descarga ni publicación

Feature: Arco creativo completo H08-4

  Scenario: Recorrer las cuatro misiones sin secuencia punitiva
    Given un proyecto sintético recuperable
    When la persona completa M1, M2, M3 y M4
    Then M1, M2 y M4 conservan una actividad y una evidencia editable por misión
    And M3 conserva una actividad y una o múltiples evidencias editables
    And cada misión conserva cero o una reflexión privada editable
    And cada evidencia conserva cero o una decisión humana vigente
    And la persona puede regresar y revisar

  Scenario: Reabrir una misión completada
    Given una misión completada
    When la persona decide reabrirla
    Then el estado cambia mediante una transición válida
    And las demás misiones no se destruyen

  Scenario: Recuperar el arco después de remontar
    Given un proyecto guardado con progreso en las cuatro misiones
    When la aplicación se monta con el mismo repositorio
    Then el proyecto se recupera con estados y contenido coherentes

  Scenario: Proteger reflexión privada
    Given una reflexión marcada como privada
    When se prepara cualquier vista previa disponible en H08-4
    Then la reflexión privada no aparece

  Scenario: Representar multimodalidad honestamente
    Given una actividad de M3
    When la persona documenta una producción
    Then el sistema conserva texto o metadatos sintéticos
    And no afirma haber almacenado un archivo binario
    And no realiza acceso de red

  Scenario: Mantener H08-5 fuera de alcance
    Given el cierre de M4
    When la persona finaliza la misión
    Then el sistema puede preparar un handoff
    But no exporta, importa ni ejecuta roundtrip

  Scenario: Mantener agencia humana
    Given evidencia candidata
    When el sistema propone una próxima acción
    Then solo una acción humana puede confirmar selección, retiro o cierre

  Scenario: Preservar accesibilidad
    Given preferencias locales de accesibilidad
    When la persona navega el arco
    Then el foco, contraste, escala de texto y movimiento reducido se respetan

  Scenario: Mantener cardinalidad singular fuera de M3
    Given una misión M1, M2 o M4 con evidencia existente
    When la persona vuelve a guardar esa evidencia
    Then la evidencia vigente se actualiza
    And no se crea una evidencia duplicada para la misión

  Scenario: Conservar múltiples evidencias independientes en M3
    Given una misión M3 iniciada con actividad guardada
    When la persona crea dos evidencias de producción distintas
    Then ambas evidencias permanecen identificables y editables
    And cada evidencia puede recibir su propia decisión humana
    And ninguna evidencia afirma representar un archivo binario almacenado

  Scenario: Mantener una sola reflexión privada por misión
    Given una misión con reflexión privada existente
    When la persona edita la reflexión
    Then la reflexión vigente se actualiza sin crear otra
    And guardar la reflexión vacía retira solamente la reflexión de esa misión

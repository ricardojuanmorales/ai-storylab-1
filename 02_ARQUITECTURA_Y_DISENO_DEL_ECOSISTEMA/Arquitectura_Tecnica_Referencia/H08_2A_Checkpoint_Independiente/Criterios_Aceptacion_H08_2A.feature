Feature: Checkpoint independiente H08-2A

  Scenario: Congelar el head funcional
    Given el PR consolidado contiene H08-2.5
    When comienza H08-2A
    Then el head funcional revisado permanece identificado
    And los cambios funcionales están prohibidos

  Scenario: Repetir verificación automatizada
    Given el árbol está limpio
    When se ejecuta npm run verify
    Then typecheck y build pasan
    And las auditorías pasan
    And las pruebas pasan

  Scenario: Revisar la trayectoria humana
    Given la aplicación inicia sin proyecto
    When la persona completa M1 y recarga
    Then el proyecto se recupera
    And puede continuar y revisar su salida

  Scenario: Preservar privacidad
    Given existe una reflexión privada
    When se prepara export preview
    Then la reflexión privada no aparece

  Scenario: Preservar agencia
    Given existe evidencia
    When no hay decisión humana de aceptación
    Then la evidencia no entra al portafolio

  Scenario: Mantener alcance diferido
    Given H08-2A evalúa la vertical slice
    Then importación permanece ausente
    And roundtrip permanece ausente
    And descarga permanece ausente
    And M2 M3 y M4 permanecen no funcionales

  Scenario: Separar dictamen y gate
    Given termina la revisión
    When se emite el dictamen H08-2A
    Then la recomendación del gate se registra por separado
    And la decisión efectiva requiere aprobación humana

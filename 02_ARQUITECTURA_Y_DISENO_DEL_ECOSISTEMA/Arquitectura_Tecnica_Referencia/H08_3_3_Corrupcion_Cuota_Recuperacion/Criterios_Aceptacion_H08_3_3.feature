Feature: H08-3.3 corrupción, cuota y recuperación

  Scenario: cuota al escribir staging
    Given existe un snapshot confirmado
    When storage rechaza la escritura de staging por cuota
    Then el snapshot confirmado permanece intacto
    And se devuelve un error tipado de cuota

  Scenario: cuota al promover snapshot
    Given existe staging válido y un snapshot confirmado
    When storage rechaza la promoción por cuota
    Then el snapshot confirmado permanece intacto
    And el staging válido puede recuperarse después

  Scenario: checksum inválido
    Given existe un envelope con checksum inválido
    When se intenta cargar
    Then la carga se bloquea
    And la fuente se preserva sin sobrescritura

  Scenario: versión futura
    Given existe un payload con versión futura
    When se intenta cargar
    Then se devuelve unsupported_future_version
    And no se migra ni modifica la fuente

  Scenario: snapshot válido sin índice
    Given existe un snapshot válido sin entrada de índice
    When se ejecuta recuperación
    Then se reconstruyen únicamente sus metadatos

  Scenario: puntero recent huérfano
    Given recent apunta a un proyecto inexistente
    When se ejecuta recuperación
    Then el puntero huérfano se limpia
    And no se elimina ningún proyecto

  Scenario: storage indisponible
    Given storage falla en lectura
    When se solicita cargar
    Then se devuelve un error tipado
    And no se presenta una carga exitosa

  Scenario: fuente corrupta
    Given existe JSON corrupto
    When se detecta
    Then se clasifica sin registrar contenido sensible
    And queda pendiente de decisión humana

  Scenario: idempotencia
    Given un estado recuperable
    When la recuperación se ejecuta dos veces
    Then el resultado final es el mismo
    And no se crean residuos adicionales

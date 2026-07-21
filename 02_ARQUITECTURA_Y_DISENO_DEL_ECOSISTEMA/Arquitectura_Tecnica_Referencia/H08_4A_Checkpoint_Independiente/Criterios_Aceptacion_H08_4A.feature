Feature: Checkpoint independiente H08-4A

  Scenario: Congelar el head funcional
    Given H08-4.5 fue publicado y verificado
    When comienza H08-4A
    Then el head funcional permanece identificado
    And los cambios funcionales están prohibidos

  Scenario: Mantener la rama alineada
    Given el PR usa la rama autorizada
    When se compara la rama con main
    Then la rama está por delante sin estar por detrás
    And el merge base coincide con main

  Scenario: Repetir verificación automatizada
    Given el árbol solo contiene documentos del checkpoint
    When se ejecutan pruebas focalizadas y npm run verify
    Then typecheck build auditorías y pruebas pasan
    And el checkpoint reconoce cuatro misiones funcionales

  Scenario: Preservar cardinalidades
    Then M1 mantiene una evidencia editable
    And M2 mantiene una evidencia editable
    And M3 admite múltiples evidencias
    And M4 mantiene un registro de curaduría

  Scenario: Preservar agencia humana
    Then ninguna decisión se automatiza
    And cada evidencia conserva cero o una decisión humana vigente
    And el cierre curatorial puede invalidarse mediante reapertura aguas arriba

  Scenario: Preservar privacidad y recuperación
    Given existen reflexiones privadas en las cuatro misiones
    When se recupera el arco y se prepara el preview final
    Then el orden del portafolio se conserva
    And las reflexiones privadas no aparecen en el preview

  Scenario: Mantener alcance diferido
    Then importación roundtrip descarga publicación red y binarios permanecen ausentes

  Scenario: Separar recomendación y dictamen
    Given termina la revisión automatizada
    When se emite una recomendación técnica
    Then el dictamen efectivo permanece pendiente de aprobación humana

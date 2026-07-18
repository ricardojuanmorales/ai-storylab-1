Feature: Envelope, índice y escritura recuperable H08-3.2

  Scenario: Guardar mediante envelope
    Given existe un proyecto alpha.2 válido
    When el repositorio lo guarda
    Then escribe un staging verificable
    And promueve un envelope v1 válido
    And actualiza índice y proyecto reciente
    And retira el staging

  Scenario: Recuperar staging válido
    Given existe un staging válido sin promoción completa
    When el repositorio inicia una operación pública
    Then completa la escritura mediante roll-forward
    And no presenta un proyecto parcial

  Scenario: Mantener índice mínimo
    Given existen varios proyectos sintéticos
    When el repositorio actualiza el índice
    Then conserva únicamente metadatos autorizados
    And no contiene payload reflexiones ni evidencia

  Scenario: Promover snapshot raw alpha.2
    Given existe un snapshot raw alpha.2 válido
    And no existe envelope v1
    When el repositorio lo carga
    Then lo promueve mediante escritura recuperable
    And preserva la fuente raw

  Scenario: Resolver namespace alpha.1
    Given existe un snapshot raw alpha.1 válido
    And no existe envelope v1
    When el repositorio lo carga
    Then lo migra mediante el migrador H08-3.1
    And promueve un envelope alpha.2
    And preserva la fuente alpha.1

  Scenario: Rechazar staging inválido
    Given existe un staging inválido
    When el repositorio intenta recuperarlo
    Then devuelve un error tipado
    And no presenta ni destruye silenciosamente el contenido

  Scenario: Preservar alcance
    Given H08-3.2 está activo
    Then la UI de múltiples proyectos permanece ausente
    And importación roundtrip y descarga permanecen ausentes
    And no se añaden dependencias runtime

  Scenario: Mantener recent fuera del índice
    Given existe un índice v1 válido
    When se serializa
    Then no contiene recentProjectId
    And el proyecto reciente vive solo en su clave dedicada

  Scenario: Resolver precedencia de proyecto reciente
    Given existen punteros v1 alpha.2 y alpha.1
    When se carga el proyecto más reciente
    Then usa el primer puntero válido según la precedencia definida

  Scenario: Enumerar staging propio
    Given existen claves de almacenamiento propias y ajenas
    When el repositorio busca staging
    Then solo considera el prefijo storage:v1:staging
    And procesa las claves en orden lexicográfico

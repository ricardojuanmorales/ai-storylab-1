# H08-1.4 · Esqueleto modular y adaptadores

Esta unidad incorpora la capa de aplicación y adaptadores locales sustituibles sin
crear una experiencia funcional. El dominio continúa independiente del entorno.

## Decisión resumida

```yaml
application: use_case_functions
adapters:
  - in_memory_project_repository
  - system_clock
  - random_uuid_generator
persistence: ephemeral_in_memory_only
localStorage: not_selected
presentation: absent
H08_2: blocked
```

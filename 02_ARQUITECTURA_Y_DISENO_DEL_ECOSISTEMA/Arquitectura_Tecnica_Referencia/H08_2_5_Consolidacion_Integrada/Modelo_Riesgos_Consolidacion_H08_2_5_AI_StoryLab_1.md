# Modelo de riesgos de consolidación H08-2.5

| Riesgo | Control |
|---|---|
| suites verdes pero costura rota | prueba integrada real |
| mock oculta fallo del adaptador | `LocalStorageProjectRepository` en UI test |
| recuperación pierde privacidad | preview posterior a recuperación |
| cuota deja escritura parcial | almacenamiento sintético y aserción |
| corrupción solo probada con mock | JSON corrupto en adaptador real |
| borrado deja puntero | verificación de ambas claves |
| consolidación expande alcance | decisión de apertura no expansiva |
| auditoría da falsa confianza | checklist humano separado |


# Política de Auditoría de Secretos · H08-1.3

El baseline no necesita secretos.

La auditoría falla ante:

- archivos `.env`;
- claves privadas;
- tokens GitHub;
- claves AWS;
- claves o tokens con prefijos comunes;
- asignaciones sospechosas de `api_key`, `secret`, `token` o `password`.

La auditoría es preventiva y no sustituye un escáner institucional futuro.

Las fixtures deben ser sintéticas y no incluir nombres, correos, enlaces privados,
identificadores institucionales ni credenciales.

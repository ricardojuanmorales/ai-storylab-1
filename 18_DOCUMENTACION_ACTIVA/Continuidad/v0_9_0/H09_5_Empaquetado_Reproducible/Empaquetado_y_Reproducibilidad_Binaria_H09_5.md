# Empaquetado y reproducibilidad binaria · H09-5

```yaml
entry_head: eddc051c175997186097d232f05789fcea038f5c
functional_head: 588fa20eb4e8a4a2f5e0682391ad7d352696f6fc
artifact:
  format: DETERMINISTIC_ZIP_STORE
  sha256: 5644bbb0addfb1e12c161d29fadd7b904fb8d19dd9e144419c5c693a80f6df8a
  size_bytes: 486546
  entries: 7
  application_files: 3
  source_commit: 588fa20eb4e8a4a2f5e0682391ad7d352696f6fc
  candidate_version: 0.9.0-unreleased
  application_package_version: 0.8.0-alpha.1
local_clean_runs: 2
local_binary_reproducibility: PASS
functional_CI_run: 30109398826
cross_node_binary_reproducibility: PASS
cross_os_binary_reproducibility: NOT_DEMONSTRATED
local_artifact_sha256: 5644bbb0addfb1e12c161d29fadd7b904fb8d19dd9e144419c5c693a80f6df8a
ubuntu_CI_artifact_sha256: 4015414e6f7734f66aa41f37090d2c23ced9bb764070887209b6d2bfbacec1fc
publication: PROHIBITED
```

El paquete contiene `app/`, `MANIFEST.json`, `CHECKSUMS.sha256`, `README.txt`
y `VERIFY.txt`. Usa entradas sin compresión, rutas ordenadas, permisos fijos y
timestamp interno `1980-01-01T00:00:00Z`.

Dos checkouts independientes en macOS produjeron el hash
`5644bbb0addfb1e12c161d29fadd7b904fb8d19dd9e144419c5c693a80f6df8a`. Node 22 y Node 24 en Ubuntu CI produjeron entre
sí el mismo hash `4015414e6f7734f66aa41f37090d2c23ced9bb764070887209b6d2bfbacec1fc`.

Los hashes de macOS y Ubuntu no coinciden. Por ello, H09-5 demuestra
reproducibilidad binaria dentro de cada entorno controlado y entre Node 22/24
sobre Ubuntu, pero no demuestra identidad binaria entre sistemas operativos.
La diferencia se conserva como reserva explícita, sin reparación automática.

Reservas: el ZIP no es una release; la versión de aplicación permanece
`0.8.0-alpha.1`; browser, Windows y `file://` no están afirmados; H09-6 debe
reconciliar versiones; H09-7 ensamblará la candidata final y H09-A revisará el
paquete cerrado.

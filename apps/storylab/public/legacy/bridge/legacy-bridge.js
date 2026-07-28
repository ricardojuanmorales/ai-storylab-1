const LEGACY_KEYS = Object.freeze({
  progress: "aistorylab_student_progress_v0_2",
  group: "aistorylab_group_progress_v0_2",
});
const statusList = document.querySelector("#legacy-status");
const statusMessage = document.querySelector("#status-message");
const confirmation = document.querySelector("#confirm-backup");
const downloadButton = document.querySelector("#download-backup");
const encode = new TextEncoder();
const sha256 = async (value) => {
  const digest = await crypto.subtle.digest("SHA-256", encode.encode(value));
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
};
const readEntry = async (label, key) => {
  const raw = localStorage.getItem(key);
  if (raw === null) return { label, key, present: false, validJson: null, byteLength: 0, sha256: null, raw: null };
  let validJson = true;
  try { JSON.parse(raw); } catch { validJson = false; }
  return { label, key, present: true, validJson, byteLength: encode.encode(raw).byteLength, sha256: await sha256(raw), raw };
};
const renderStatus = (entries) => {
  statusList.replaceChildren();
  for (const entry of entries) {
    const term = document.createElement("dt");
    term.textContent = entry.label;
    const detail = document.createElement("dd");
    detail.textContent = entry.present ? `${entry.byteLength} bytes · JSON ${entry.validJson ? "válido" : "no válido"}` : "No encontrado";
    statusList.append(term, detail);
  }
  const present = entries.filter((entry) => entry.present).length;
  statusMessage.textContent = present > 0 ? `Se encontraron ${present} conjunto(s) de datos legacy.` : "No se encontraron datos legacy en este navegador.";
};
const downloadBackup = async (entries) => {
  const envelope = {
    format: "ai-storylab-legacy-backup",
    formatVersion: 1,
    sourceVersion: "0.3.0",
    generatedAt: new Date().toISOString(),
    origin: window.location.origin,
    sourceKeysPreserved: true,
    conversionPerformed: false,
    entries,
  };
  const blob = new Blob([`${JSON.stringify(envelope, null, 2)}\n`], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ai-storylab-legacy-v0.3.0-backup-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  statusMessage.textContent = "Respaldo descargado. Las claves originales permanecen sin cambios.";
};
const initialize = async () => {
  try {
    const entries = await Promise.all([
      readEntry("Progreso estudiantil", LEGACY_KEYS.progress),
      readEntry("Progreso grupal", LEGACY_KEYS.group),
    ]);
    renderStatus(entries);
    confirmation.addEventListener("change", () => { downloadButton.disabled = !confirmation.checked; });
    downloadButton.addEventListener("click", () => { if (confirmation.checked) void downloadBackup(entries); });
  } catch {
    statusMessage.textContent = "El almacenamiento local no está disponible en este navegador.";
    confirmation.disabled = true;
    downloadButton.disabled = true;
  }
};
void initialize();

import { validateStudentProgress } from "./validation.js";

/**
 * Build the export filename:
 *   ai-storylab-progreso-[student_code]-[fecha].json
 */
export function buildExportFileName(progress) {
  const code = (progress?.profile?.student_code || "sin-codigo")
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  return `ai-storylab-progreso-${code || "sin-codigo"}-${date}.json`;
}

/**
 * Stamp exported_at and return a copy ready to serialize.
 * Includes ALL accumulated history (the whole progress object).
 */
export function prepareExport(progress) {
  return {
    ...progress,
    exported_at: new Date().toISOString(),
  };
}

/**
 * Trigger a browser download of the student progress JSON.
 */
export function downloadProgressJSON(progress) {
  const payload = prepareExport(progress);
  const fileName = buildExportFileName(payload);
  triggerDownload(JSON.stringify(payload, null, 2), fileName);
  return fileName;
}

/**
 * Generic JSON download helper (also used by the group dashboard).
 */
export function triggerDownload(text, fileName) {
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Read a File object (from <input type="file">) and parse as JSON.
 * Returns a Promise resolving to the parsed object.
 */
export function readJSONFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch (err) {
        reject(new Error(`"${file.name}" no es un JSON válido.`));
      }
    };
    reader.onerror = () => reject(new Error(`No se pudo leer "${file.name}".`));
    reader.readAsText(file);
  });
}

/**
 * Import a student progress file: read + validate.
 * Returns the validation result (with .data ready to apply if valid).
 */
export async function importStudentProgressFile(file) {
  const parsed = await readJSONFile(file);
  return validateStudentProgress(parsed);
}

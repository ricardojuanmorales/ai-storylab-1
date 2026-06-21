/**
 * Thin, swappable persistence layer.
 * Today it is localStorage; tomorrow it can become an API/DB adapter
 * without touching the components that call load/save.
 */
const KEYS = {
  progress: "aistorylab_student_progress_v0_2",
  group: "aistorylab_group_progress_v0_2",
};

export const STORAGE_KEYS = KEYS;

function safeParse(raw) {
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (err) {
    console.warn("AI StoryLab: no se pudo leer el almacenamiento local.", err);
    return null;
  }
}

export function loadProgress() {
  return safeParse(localStorage.getItem(KEYS.progress));
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(KEYS.progress, JSON.stringify(progress));
    return true;
  } catch (err) {
    console.error("AI StoryLab: no se pudo guardar el progreso.", err);
    return false;
  }
}

export function loadGroupProgress() {
  return safeParse(localStorage.getItem(KEYS.group));
}

export function saveGroupProgress(group) {
  try {
    localStorage.setItem(KEYS.group, JSON.stringify(group));
    return true;
  } catch (err) {
    console.error("AI StoryLab: no se pudo guardar el progreso grupal.", err);
    return false;
  }
}

export function clearProgress() {
  localStorage.removeItem(KEYS.progress);
}

export function clearGroupProgress() {
  localStorage.removeItem(KEYS.group);
}

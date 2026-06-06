# Decision Log

## DEC-0001 — MVP local-first sin Supabase

Fecha: 2026-06-05  
Responsable: Equipo AI StoryLab  
Contexto: Se requiere un MVP funcional para el taller antes de implementar autenticación o base de datos.  
Decisión: El MVP será local-first, sin backend, con `localStorage` y exportación/importación JSON.  
Alternativas consideradas: Supabase desde el inicio, Google OAuth, dashboard remoto.  
Razón: Reducir complejidad, proteger privacidad y ejecutar el taller con resiliencia.  
Impacto: Supabase y autenticación quedan para versiones posteriores.  
Estado: Activa.

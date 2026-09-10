# NEXUS-X V2.2 — Document Fabric / Graph / AI

Versión experimental para repositorios de prueba.

## Cambios de esta versión
- API Gemini: solo se introduce la API Key. NEXUS-X la guarda localmente, prueba la conexión y selecciona automáticamente un modelo compatible; no requiere endpoint, modelo ni parámetros manuales.
- Modelo gratuito preferido: Gemini 3.7 Flash; fallback automático.
- La búsqueda web sigue siendo independiente de Gemini, por lo que puede continuar aunque la API de Gemini tenga cuota agotada.
- Evidencia documental agrupada por archivo: un documento aparece una sola vez aunque contenga muchas coincidencias internas.
- Claims documentales deduplicados.
- Grafo visual SVG interactivo: nodos de documentos y materiales, arrastre, zoom y clic para abrir el documento o ficha correspondiente.
- Relaciones documentales filtradas para evitar coincidencias genéricas de baja calidad.
- Se conserva la base de 111 registros y la identidad única NEXUS-X.

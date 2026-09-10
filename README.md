# NEXUS-X · Document Fabric + Internet

## Arquitectura
NEXUS-X no es solamente inventario. Construye una red local-first entre:

- registros físicos `NEXUS-X-0001` … `NEXUS-X-0111`;
- PDF, DOCX, XLSX/XLS, CSV, TXT y Markdown;
- fragmentos de documentos;
- fórmulas, protocolos y materiales;
- relaciones y evidencia;
- investigación web;
- IA opcional.

**1 registro = 1 ID NEXUS-X.** Las demás columnas son atributos.

## Documentos del repositorio
Al arrancar, NEXUS-X detecta automáticamente el repositorio de GitHub Pages donde está instalado (por ejemplo `usuario.github.io/repositorio`) y consulta su rama `main`. Busca automáticamente archivos compatibles en todo el árbol del repositorio.

No hace falta registrar cada PDF/Word/Excel manualmente. Al encontrarlos, los descarga, extrae el texto, genera fragmentos, relaciona menciones con los registros NEXUS-X y guarda el índice en IndexedDB para reutilizarlo localmente.

También se pueden indexar archivos manualmente desde **Documentos → Indexar archivo**.

## Internet + API
La versión experimental ya no depende de DuckDuckGo/Jina como mecanismo principal. Para que Internet sea real y estable, NEXUS-X usa **Gemini + Google Search grounding**.

Solo hay que pegar **una API Key de Gemini una vez** en **Ajustes → API de NEXUS-X → Guardar y conectar**. NEXUS-X configura automáticamente el modelo y el acceso a Google Search.

La clave se guarda en `localStorage` del navegador, **no en GitHub**, y no se necesita escribir endpoint ni nombre de modelo.

Si no hay API Key, el sistema sigue funcionando en modo local: inventario, documentos ya indexados, grafo, evidencia y QR no dependen de Internet.

## Seguridad de la clave
Una clave introducida en una aplicación estática de GitHub Pages queda disponible para el navegador que la guardó. No se incrusta en el código ni en el repositorio. Para una aplicación pública multiusuario, la arquitectura recomendada es mover las llamadas de API a un backend/proxy seguro.

## Validación
```bash
node tools/validate.mjs
```

La validación comprueba archivos esenciales, 111 registros, IDs únicos, formato de IDs y duplicados HTML.

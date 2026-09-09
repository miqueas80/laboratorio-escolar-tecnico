# NEXUS-X — Integración Excel + QR

Este paquete conecta el catálogo maestro del laboratorio con identificadores QR.

## Qué contiene

- `data/Sustancias_Lab_CN_NEXUS_CODIFICADO.xlsx`: Excel original con `CODIGO_NEXUS` y `QR_NEXUS`.
- `data/nexus-x-catalog.json`: catálogo optimizado para que NEXUS-X lo consulte desde GitHub Pages.
- `nexus-data.js`: capa de integración que carga el catálogo y permite buscar por código.
- `index.html`: página de prueba completa para verificar un QR/código antes de integrarlo en tu NEXUS-X principal.

## Formato QR

El QR debe contener solamente el código:

`NX-SUST-0001`

No pongas la ficha técnica dentro del QR. El código es el identificador permanente.

## Importante

Este paquete NO reemplaza tu NEXUS-X original. Sirve como integración segura de los datos del Excel. Primero probá la búsqueda de códigos; después se puede insertar `nexus-data.js` en tu interfaz original sin destruir el mapa, Gemini ni el visor.

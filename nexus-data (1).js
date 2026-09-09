/* NEXUS-X — Integración de catálogo/QR
   Carga data/nexus-x-catalog.json y expone window.NEXUSCatalog.
   QR válido: NX-SUST-0001 (el QR debe contener SOLO ese código).
*/
(() => {
  "use strict";
  const state = { records: [], byCode: new Map(), loaded: false };

  function clean(v) {
    return String(v ?? "").trim().toUpperCase();
  }

  function extractCode(raw) {
    const s = clean(raw);
    // Accept the exact code, or harmless surrounding whitespace.
    const m = s.match(/\bNX-SUST-\d{4}\b/);
    return m ? m[0] : null;
  }

  async function load(url = "data/nexus-x-catalog.json") {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`No se pudo cargar el catálogo (${res.status}).`);
    const data = await res.json();
    const records = Array.isArray(data) ? data : data.records;
    if (!Array.isArray(records)) throw new Error("Catálogo NEXUS-X inválido.");
    state.records = records;
    state.byCode = new Map(
      records.map(r => [clean(r.codigo_nexus), r])
    );
    state.loaded = true;
    return records;
  }

  function find(raw) {
    const code = extractCode(raw);
    if (!code) return null;
    return state.byCode.get(code) || null;
  }

  function getCode(raw) {
    return extractCode(raw);
  }

  window.NEXUSCatalog = {
    load,
    find,
    getCode,
    all: () => state.records.slice(),
    get loaded() { return state.loaded; }
  };
})();
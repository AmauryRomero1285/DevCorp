let searchIndex = [];

// índice de búsqueda
fetch("../assets/search/search-index.json")
  .then(res => res.json())
  .then(data => {
    searchIndex = data;
    document.dispatchEvent(new Event("searchIndex:loaded"));
  });

// inicializar
function initSearchInput(input) {
  if (!input) return;
  if (input.dataset.searchInitialized) return;
  input.dataset.searchInitialized = "true";

  // ===== BANNER =====
  const wrapper = document.createElement("div");
  wrapper.className = `
    absolute top-full left-0 mt-3 w-[360px]
    bg-white dark:bg-slate-800
    rounded-xl shadow-2xl
    border border-slate-200 dark:border-slate-700
    z-50 hidden
  `;

  // ===== FILTER CHIPS =====
  const filters = document.createElement("div");
  filters.className = "p-4 border-b border-slate-200 dark:border-slate-700";

  const sections = [
    "ALL",
    "Home",
    "Acerca de",
    "Servicios",
    "Tecnologías",
    "Proyectos",
    "Recursos"
  ];

  filters.innerHTML = `
    <p class="text-xs font-semibold text-slate-400 mb-2">FILTER BY</p>
    <div class="flex flex-wrap gap-2">
      ${sections
        .map(
          s => `
        <button
          data-section="${s === "ALL" ? "" : s}"
          class="filter-chip px-3 py-1 text-xs rounded-full
                 border border-slate-300 dark:border-slate-600
                 text-slate-600 dark:text-slate-300
                 hover:bg-primary hover:text-white transition">
          ${s}
        </button>`
        )
        .join("")}
    </div>
  `;

  // ===== RESULTS =====
  const resultsBox = document.createElement("div");
  resultsBox.className = "p-2 text-primary";

  wrapper.appendChild(filters);
  wrapper.appendChild(resultsBox);
  input.parentElement.appendChild(wrapper);

  let activeSection = "";

  // activar chip
  filters.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      filters.querySelectorAll(".filter-chip").forEach(b =>
        b.classList.remove("bg-primary", "text-white")
      );
      btn.classList.add("bg-primary", "text-white");
      activeSection = btn.dataset.section;
      updateResults();
    });
  });

  // ===== FILTRADO =====
  const updateResults = () => {
    const query = input.value.toLowerCase();
    resultsBox.innerHTML = "";

    if (!query && !activeSection) return;

    const results = searchIndex.filter(page => {
      const matchQuery =
        !query ||
        page.title.toLowerCase().includes(query) ||
        page.keywords.some(k => k.toLowerCase().includes(query));

      const matchSection =
        !activeSection ||
        getSectionFromUrl(page.url) === activeSection;

      return matchQuery && matchSection;
    });

    if (!results.length) {
      resultsBox.innerHTML = `
        <div class="px-4 py-3 text-sm text-slate-500">
          No se encontraron resultados
        </div>`;
      return;
    }

    results.forEach(r => {
      const a = document.createElement("a");
      a.href = r.url;
      a.className =
        "block px-4 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-700";

      a.innerHTML = `
        <div class="font-medium">${r.title}</div>
        <div class="text-xs text-slate-500">
          ${getSectionFromUrl(r.url)}
        </div>
      `;

      resultsBox.appendChild(a);
    });
  };

  // ===== VISIBILIDAD =====
  const show = () => wrapper.classList.remove("hidden");
  const hide = () => wrapper.classList.add("hidden");

  input.addEventListener("focus", show);
  input.addEventListener("input", () => {
    show();
    if (searchIndex.length) updateResults();
    else document.addEventListener("searchIndex:loaded", updateResults, { once: true });
  });

  document.addEventListener("click", e => {
    if (!input.parentElement.contains(e.target)) hide();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") hide();
  });
}
function getSectionFromUrl(url) {
  if (url.includes("index")) return "Home";
  if (url.includes("about")) return "Acerca de";
  if (url.includes("services")) return "Servicios";
  if (url.includes("tech")) return "Tecnologías";
  if (url.includes("projects")) return "Proyectos";
  if (url.includes("404")) return "Sistema";
  return "General";
}

function initAllSearchInputs() {
  const staticInputs = document.querySelectorAll(
    'input[type="search"], input[placeholder="Search our site..."]'
  );
  staticInputs.forEach(initSearchInput);
}

document.addEventListener("DOMContentLoaded", initAllSearchInputs);

document.addEventListener("partial:loaded", e => {
  const partial = document.getElementById(e.detail.id);
  if (!partial) return;

  const dynamicInputs = partial.querySelectorAll(
    'input[type="search"], input[placeholder="Search our site..."]'
  );
  dynamicInputs.forEach(initSearchInput);
});

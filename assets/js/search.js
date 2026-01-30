let searchIndex = [];

//índice de búsqueda
fetch("../assets/search/search-index.json")
  .then(res => res.json())
  .then(data => {
    searchIndex = data;
    document.dispatchEvent(new Event("searchIndex:loaded"));
  });

//inicializar
function initSearchInput(input) {
  if (!input) return;

  // Evitar inicializar varias veces el mismo input
  if (input.dataset.searchInitialized) return;
  input.dataset.searchInitialized = "true";

  const resultsBox = document.createElement("div");
  resultsBox.className =
    "absolute top-full mt-1 text-primary w-full bg-white dark:bg-slate-800  shadow-lg ";
  input.parentElement.appendChild(resultsBox);

  //filtrado
  const updateResults = () => {
    const query = input.value.toLowerCase();
    resultsBox.innerHTML = "";
    if (!query) return;

    const results = searchIndex.filter(page =>
      page.title.toLowerCase().includes(query) ||
      page.keywords.some(k => k.toLowerCase().includes(query))
    );

    results.forEach(r => {
      const a = document.createElement("a");
      a.href = r.url;
      a.textContent = r.title;
      a.className =
        "block px-4 py-2 text-sm text-primary hover:bg-slate-100 dark:hover:bg-slate-700";
      resultsBox.appendChild(a);
    });
  };

  input.addEventListener("input", () => {
    if (searchIndex.length) {
      updateResults();
    } else {
      document.addEventListener("searchIndex:loaded", updateResults, { once: true });
    }
  });
}

function initAllSearchInputs() {
  const staticInputs = document.querySelectorAll(
    'input[type="search"], input[placeholder="Search our site..."]'
  );
  staticInputs.forEach(initSearchInput);
}
document.addEventListener("DOMContentLoaded", () => {
  initAllSearchInputs();
});
document.addEventListener("partial:loaded", (e) => {
  const partial = document.getElementById(e.detail.id);
  if (!partial) return;

  const dynamicInputs = partial.querySelectorAll(
    'input[type="search"], input[placeholder="Search our site..."]'
  );
  dynamicInputs.forEach(initSearchInput);
});

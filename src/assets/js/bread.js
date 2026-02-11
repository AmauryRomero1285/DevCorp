document.addEventListener("partial:loaded", (e) => {
  if (e.detail.id !== "breadcrumb") return;

  const currentPage = window.location.pathname.split("/").pop();

  const pageNameMap = {
    "aboutUs_page.html": "Sobre Nosotros",
    "services_page.html": "Servicios",
    "tech_page.html": "Tecnologías",
    "projects_page.html": "Proyectos",
    "contact_page.html": "Contacto",
  };

  const span = document.getElementById("current-page");

  if (span && pageNameMap[currentPage]) {
    span.textContent = pageNameMap[currentPage];
  }
});

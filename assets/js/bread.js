document.addEventListener("partial:loaded", (e) => {
  if (e.detail.id !== "breadcrumb") return;

  const currentPage = window.location.pathname.split("/").pop();

  const pageNameMap = {
    "aboutUsPage.html": "Sobre Nosotros",
    "servicesPage.html": "Servicios",
    "techPage.html": "Tecnologías",
    "projectsPage.html": "Proyectos",
    "contact_page.html": "Contacto",
  };

  const span = document.getElementById("current-page");

  if (span && pageNameMap[currentPage]) {
    span.textContent = pageNameMap[currentPage];
  }
});

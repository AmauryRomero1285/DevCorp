document.addEventListener("partial:loaded", (e) => {
  if (e.detail.id !== "breadcrumb") return;

  const currentPage = window.location.pathname.split("/").pop();

  const pageNameMap = {
    "aboutUsPage.html": "About Us",
    "servicesPage.html": "Services",
    "techPage.html": "Technologies",
    "projectsPage.html": "Projects",
    "contact.html": "Contact",
  };

  const span = document.getElementById("current-page");

  if (span && pageNameMap[currentPage]) {
    span.textContent = pageNameMap[currentPage];
  }
});

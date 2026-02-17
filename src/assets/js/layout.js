async function loadPartial(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  document.dispatchEvent(
    new CustomEvent("partial:loaded", {
      detail: { id },
    }),
  );
}

loadPartial("header", "../partials/header.html");
loadPartial("footer", "../partials/footer.html");
loadPartial("breadcrumb", "../partials/breadcrumb.html");

// src/layout/breadcrumb/breadcrumb.jsx
import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  // Divide la ruta y filtra partes vacías
  const pathParts = location.pathname.split("/").filter((part) => part !== "");

  // Si estamos en home, no mostramos breadcrumb o lo dejamos mínimo
  if (pathParts.length === 0) {
    return null; // o puedes mostrar solo "Home"
  }

  // Función para convertir slug a título legible
  const formatTitle = (slug) => {
    return slug
      .replace(/-/g, " ")           // desarrollo-movil → desarrollo movil
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Desarrollo Movil
  };

  // Construye las rutas acumuladas para cada enlace
  const getPathTo = (index) => {
    return "/" + pathParts.slice(0, index + 1).join("/");
  };

  return (
    <div className="bg-slate-50 dark:bg-background-dark/95 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center flex-wrap gap-3 text-sm">
          {/* Siempre mostramos Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-colors ${
                isActive
                  ? "text-primary font-medium"
                  : "text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              }`
            }
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Home
          </NavLink>

          {/* Separador */}
          <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-sm">
            chevron_right
          </span>

          {/* Generamos un enlace por cada segmento */}
          {pathParts.map((part, index) => {
            const isLast = index === pathParts.length - 1;
            const title = formatTitle(part);
            const pathTo = getPathTo(index);

            return (
              <div key={index} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-sm">
                    chevron_right
                  </span>
                )}

                {isLast ? (
                  // Último elemento: no enlace, resaltado
                  <span className="text-primary dark:text-primary/90 font-bold">
                    {title}
                  </span>
                ) : (
                  // Elementos intermedios: enlaces navegables
                  <NavLink
                    to={pathTo}
                    className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
                  >
                    {title}
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
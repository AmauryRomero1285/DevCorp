import { NavLink, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter((part) => part !== "");
  const lastPath = pathParts[pathParts.length - 1] || "Dashboard";

  const currentPage = lastPath
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="bg-slate-50 dark:bg-background-dark/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center flex-wrap gap-3 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              }`
            }
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Home
          </NavLink>

          <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-sm">
            chevron_right
          </span>

          <span className="text-primary dark:text-primary/90 font-bold">
            {currentPage}
          </span>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;

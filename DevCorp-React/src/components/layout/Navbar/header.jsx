// components/Header.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../../utils/Theme";
import ContactFormModal from "../Form/form";

export default function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      setQuery("");
    }
  };

  return (
    <>
      <header
        className="
        sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 
        backdrop-blur-md border-b border-slate-200 dark:border-slate-800 
        transition-colors
      "
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-primary p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="mr-5">
              <span
                className="
                text-xl font-extrabold tracking-tight 
                text-slate-900 dark:text-white uppercase leading-none
                font-display 
              "
              >
                DevCorp
              </span>
              <span
                className="
                block text-[10px] font-bold tracking-widest 
                text-primary uppercase mt-0.5
              "
              >
                Enterprise
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            <Link
              to="/servicios"
              className="
              flex items-center gap-1 text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors py-2
            "
            >
              Servicios
            </Link>

            <Link
              to="/sobreNosotros"
              className="
              nav-link-underline text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors
            "
            >
              Sobre Nosotros
            </Link>

            <Link
              to="/tecnologias"
              className="
              nav-link-underline text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors
            "
            >
              Tecnologías
            </Link>

            <Link
              to="/proyectos"
              className="
              nav-link-underline text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors
            "
            >
              Proyectos
            </Link>

            <Link
              to="/recursos"
              className="
              nav-link-underline text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors 
              flex items-center gap-1.5
            "
            >
              Recursos
            </Link>

            <Link
              to="/contacto"
              className="
              nav-link-underline text-sm font-semibold 
              text-slate-700 dark:text-slate-300 
              hover:text-primary transition-colors
            "
            >
              Contacto
            </Link>

            <form onSubmit={handleSearch} className="relative">
              <div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="
                  peer w-60 pl-12 pr-4 py-3 rounded-lg text-sm
                  bg-slate-100 dark:bg-slate-800
                  text-slate-700 dark:text-slate-200
                  border border-slate-200 dark:border-slate-700
                  focus:outline-none focus:ring-primary focus:ring-primary/40 focus:border-primary
                  transition-all
                "
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 peer-focus:text-primary transition-colors">
                  search
                </span>
              </div>
            </form>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            <span className="material-symbols-outlined text-2xl text-slate-700 dark:text-slate-200">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Botón CTA que abre el modal */}
          <div className="flex items-center gap-6 ml-2">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="
              hidden sm:flex min-w-[100px] cursor-pointer 
              items-center justify-center rounded-lg h-11 px-6
              bg-primary hover:bg-primary/90
              text-white text-sm font-bold
              shadow-lg shadow-primary/20
              transition-all active:scale-95
            "
            >
              ¡Comencemos!
            </button>
          </div>
        </div>
      </header>

      {/* El modal se renderiza aquí */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

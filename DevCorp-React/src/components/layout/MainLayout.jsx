// MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Navbar/header";
import Footer from "../layout/Footer/footer";
import Breadcrumb from "../layout/breadcrumb/breadcrumb";

export default function Layout() {
  const location = useLocation();

  // Muestra breadcrumb en estas rutas y cualquier subruta que empiece por ellas
  const showBreadcrumb = [
    "/contacto",
    "/servicios",
    "/sobreNosotros",
    "/tecnologias",
  ].some((route) => 
    location.pathname === route || location.pathname.startsWith(route + "/")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-grow dark:bg-background-dark">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
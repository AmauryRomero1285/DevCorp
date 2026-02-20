//MainLayout
import { Outlet, useLocation } from "react-router-dom";
import Header from "../layout/Navbar/header"; 
import Footer from "../layout/Footer/footer";
import Breadcrumb from "../layout/breadcrumb/breadcrumb"; 

export default function Layout({ children }) {
  const location = useLocation();
  const validRoutes=["/contacto","/servicios","/sobreNosotros","/tecnologias"]
  const path = validRoutes.includes(location.pathname);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {path && <Breadcrumb />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// src/routes/routes.jsx
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

// Tus páginas
import Search from "../pages/Search/search";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/services_page";
import MobileDevelopment from "../pages/Services/MobileDevelopment/MobileDevelopment";
import AboutUs from "../pages/AboutUs/aboutUs_page";
import Contact from "../pages/Contact/contact_page";
import NotFound from "../pages/NotFound/error404_page";
import Technologies from "../pages/Tech/tech_page";
import Projects from "../pages/Projects/project_page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/servicios" element={<Services />}>
          <Route path="desarrollo-movil" element={<MobileDevelopment />} />
        </Route>

        <Route path="/proyectos" element={<Projects/>}/>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sobreNosotros" element={<AboutUs />} />
        <Route path="/tecnologias" element={<Technologies />} />
        <Route path="/search" element={<Search />} />

        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

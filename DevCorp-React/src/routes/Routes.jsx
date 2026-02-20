// src/routes/routes.jsx
import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

// Tus páginas
import Search from "../pages/Search/search";
import Home from "../pages/Home/Home";
import Services from '../pages/Services/services_page';
import AboutUs from '../pages/AboutUs/aboutUs_page';
import Contact from "../pages/Contact/contact_page";
import NotFound from "../pages/NotFound/error404_page";
import Technologies from "../pages/Tech/tech_page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sobreNosotros" element={<AboutUs />} />
        <Route path="/tecnologias" element={<Technologies/>}/>
        <Route path="/search" element={<Search/>}/>

      </Route>
    </Routes>
  );
}

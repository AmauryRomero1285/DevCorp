// src/pages/Services/Services.jsx
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "terminal",
      title: "Desarrollo Web",
      description:
        "Desarrollamos aplicaciones web personalizadas utilizando frameworks modernos y arquitecturas backend robustas. Nuestras soluciones están diseñadas para crecer junto con tu negocio.",
      path: "/servicios/desarrollo-web", // ← agrega cuando crees la subpágina
    },
    {
      icon: "smartphone",
      title: "Desarrollo Móvil",
      description:
        "Creamos aplicaciones móviles que ofrecen experiencias de usuario fluidas en iOS y Android. Priorizamos la usabilidad, el rendimiento y la mantenibilidad a largo plazo.",
      path: "/servicios/desarrollo-movil", // ← ruta anidada
    },
    {
      icon: "cloud_queue",
      title: "Infraestructura en la Nube",
      description:
        "Diseñamos y gestionamos infraestructuras en la nube que optimizan el rendimiento y la disponibilidad. Nuestras soluciones facilitan la automatización y la eficiencia operativa.",
      path: "/servicios/infraestructura-nube", // ← futuro
    },
    {
      icon: "psychology",
      title: "IA & Machine Learning",
      description:
        "Implementamos soluciones de inteligencia artificial y aprendizaje automático que convierten los datos en información valiosa. Estos modelos mejoran la automatización y la toma de decisiones estratégicas.",
      path: "/servicios/ia-machine-learning",
    },
    {
      icon: "verified_user",
      title: "Ciberseguridad",
      description:
        "Ofrecemos servicios de ciberseguridad para proteger los activos digitales de las empresas. Nuestro enfoque se basa en la prevención, detección y mejora continua.",
      path: "/servicios/ciberseguridad",
    },
  ];

  const location = useLocation();
  const isSubRoute =
    location.pathname !== "/servicios" &&
    location.pathname.startsWith("/servicios/");

  if (isSubRoute) {
    return <Outlet />;
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">
      <main className="flex-grow">
        {/* Sección hero / introducción (sin cambios) */}
<section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-widest">
                <span className="size-1.5 rounded-full bg-primary"></span>
                Innovando Soluciones Digitales
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                Nuestros <span className="text-primary">Servicios</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Impulsamos a las empresas mediante soluciones de software escalables y seguras. Diseñamos, desarrollamos e
                implementamos plataformas tecnológicas que apoyan el crecimiento y la eficiencia operativa.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  Explora Nuestro Portafolio
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-3.5 rounded-lg font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Agenda una cita
                </button>
              </div>
            </div>

            {/* Tarjeta lateral visible solo en xl+ */}
            <div className="hidden xl:block">
              <div className="relative p-1">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none min-w-[320px]">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Global Expertise</span>
                    <span className="size-3 rounded-full bg-green-500 animate-pulse"></span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">public</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">12+ Oficinas operando</div>
                        <div className="text-xs text-slate-500">Soporte Técnico 24/7</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">groups</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">500+ Especialistas</div>
                        <div className="text-xs text-slate-500">Ingenieros Certificados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de tarjetas */}
        <section className="bg-white dark:bg-background-dark/30 py-24 border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Capacidades Empresariales
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Soluciones tecnológicas orientadas a la transformación digital
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group bg-white dark:bg-slate-800/40 p-10 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none"
                >
                  <div className="size-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  {service.path ? (
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
                    >
                      Ver más
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                  ) : (
                    <a
                      className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
                      href="#"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </a>
                  )}
                </div>
              ))}

              {/* Tarjeta especial "¡Vamos!" */}
              <div className="service-card group bg-slate-50 dark:bg-slate-800/20 p-10 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700/50 flex flex-col justify-center items-center text-center">
                <div className="size-14 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    add
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-400">
                  ¿Necesitas una solución?
                </h3>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                  Comunícate con nuestros expertos
                </p>
                <button className="mt-6 text-sm font-bold text-primary underline underline-offset-4 hover:no-underline">
                  <Link to="/contacto">¡Vamos!</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <Outlet />
      </main>
    </div>
  );
}

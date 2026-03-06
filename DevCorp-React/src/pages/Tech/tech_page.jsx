export default function Technologies() {
  const sections = [
    {
      icon: "desktop_windows",
      title: "Desarrollo Frontend",
      subtitle: "Creación de interfaces de usuario inmersivas y responsivas.",
      items: [
        {
          name: "React",
          logo: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
          desc: "El estándar de la industria para crear aplicaciones web de alto rendimiento basadas en componentes con una interacción de usuario excepcional.",
        },
        {
          name: "Vue.js",
          logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
          desc: "Un marco versátil elegido por su arquitectura liviana y facilidad de integración en ecosistemas complejos existentes.",
        },
        {
          name: "Next.js",
          logo: "https://hello-pomelo.com/wp-content/uploads/2024/11/nextjs-icon-dark-background.png",
          desc: "Potenciamos experiencias web ultrarrápidas y optimizadas para SEO mediante la renderización del lado del servidor y la generación de sitios estáticos.",
        },
      ],
    },
    {
      icon: "database",
      title: "Backend & APIs",
      subtitle: "Arquitecturas del lado del servidor robustas, seguras y escalables.",
      items: [
        {
          name: "Node.js",
          logo: "https://img.beget.com/cp/plain/shared/xoKELFIyHKF4-V5ZaKBvDC7xhOoZJW71/logo_nodejs2x.png@.webp",
          desc: "Tiempo de ejecución impulsado por eventos y de alta concurrencia utilizado para crear aplicaciones y microservicios escalables en tiempo real.",
        },
        {
          name: "Python",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          desc: "Aprovechado para proyectos con uso intensivo de datos, integraciones de IA y desarrollo rápido de lógica backend empresarial estable.",
        },
        {
          name: "Go (Golang)",
          logo: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png",
          desc: "Elegido para servicios nativos de la nube de alto rendimiento y aplicaciones a nivel de sistema que requieren una eficiencia extrema.",
        },
      ],
    },
    {
      icon: "smartphone",
      title: "Desarrollo Móvil",
      subtitle: "Soluciones móviles nativas y multiplataforma.",
      items: [
        {
          name: "Swift",
          logo: "https://inapp.com/wp-content/uploads/elementor/thumbs/swift-01-q064zvxwvwfqj18sfnr3i8rdxe1oc4f6ax5t3livgy.png",
          desc: "Optimizado para crear aplicaciones iOS nativas de alta calidad con integración perfecta en el ecosistema de Apple.",
        },
        {
          name: "Kotlin",
          logo: "https://ih1.redbubble.net/image.1058383425.1181/st,small,507x507-pad,600x600,f8f8f8.u4.jpg",
          desc: "El lenguaje moderno para el desarrollo de Android, que ofrece seguridad y concisión para aplicaciones móviles robustas.",
        },
        {
          name: "Flutter",
          logo: "https://yt3.googleusercontent.com/ytc/AIdro_nqx_sCd8ZIeIcodS0sfeMKJ8rVTslmQHUe_udwGNH2Pg=s900-c-k-c0x00ffffff-no-rj",
          desc: "Nuestro marco preferido para crear hermosas aplicaciones multiplataforma compiladas de forma nativa desde una única base de código.",
        },
      ],
    },
    {
      icon: "cloud",
      title: "DevOps & Cloud",
      subtitle: "Pipelines automatizadas e infraestructura de alta disponibilidad.",
      items: [
        {
          name: "AWS",
          logo: "https://silentinfotech.com/web/image/4914-61bd4858/AWS-Logo.jpg",
          desc: "Infraestructura de nube integral para alojar servicios disponibles globalmente con seguridad y escalabilidad incomparables.",
        },
        {
          name: "Microsoft Azure",
          logo: "https://cdn.prod.website-files.com/655b60964be1a1b36c746790/655b60964be1a1b36c746d28_62f25e0037dc73b07553db89_62e129061449c93a6a2041c0_azur%252520(2).png",
          desc: "Soluciones en la nube profundamente integradas ideales para flujos de trabajo empresariales y estrategias de nube híbrida.",
        },
        {
          name: "Docker",
          logo: "https://raw.githubusercontent.com/docker-library/docs/c350af05d3fac7b5c3f6327ac82fe4d990d8729c/docker/logo.png",
          desc: "Utilizar la contenedorización para garantizar la coherencia en los entornos de desarrollo, prueba y producción.",
        },
      ],
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">
      <main className="flex-grow">
        {/* Hero / Introducción */}
        <section className="max-w-7xl mx-auto px-6 py-20 sm:py-28 lg:py-40">
          <div className="max-w-4xl space-y-8 lg:space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-bold uppercase tracking-widest">
              <span className="size-2 rounded-full bg-primary"></span>
              Tecnologías
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Nuestro stack de <span className="text-primary">Tecnología</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              Utilizamos una selección de herramientas y marcos de trabajo de
              primer nivel para crear soluciones empresariales de alto
              rendimiento, seguras y escalables. Explore los componentes
              principales de nuestra arquitectura digital.
            </p>
          </div>
        </section>

        {/* Secciones de tecnologías */}
        <div className="max-w-7xl mx-auto px-6 pb-24 lg:pb-32 space-y-24 lg:space-y-32">
          {sections.map((section, index) => (
            <section key={index}>
              <div className="flex items-center gap-5 mb-12 lg:mb-16">
                <div className="size-14 lg:size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl lg:text-4xl">
                    {section.icon}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-base lg:text-lg mt-1">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
                {section.items.map((tech, i) => (
                  <div
                    key={i}
                    className="group bg-white dark:bg-slate-800/50 p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl hover:shadow-slate-200/40 dark:hover:shadow-none transition-all duration-300 flex flex-col min-h-[260px] lg:min-h-[280px]"
                  >
                    <div className="size-20 lg:size-24 mb-6 lg:mb-8 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-2xl mx-auto">
                      <img
                        alt={tech.name}
                        className="max-w-[70%] max-h-[70%] object-contain dark:invert"
                        src={tech.logo}
                      />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-center dark:text-white">
                      {tech.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed text-center flex-grow">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

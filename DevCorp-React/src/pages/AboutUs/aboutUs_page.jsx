export default function AboutUs() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">

      <main className="flex-grow">
 
        <section className="max-w-7xl mx-auto px-6 py-20 sm:py-28 lg:py-40">
          <div className="max-w-4xl space-y-10 lg:space-y-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-bold uppercase tracking-widest">
              <span className="size-2 rounded-full bg-primary"></span>
              Quienes Somos
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Innovando el futuro del <span className="text-primary">Software</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
              Impulsamos a empresas globales mediante el desarrollo de ecosistemas digitales de alto rendimiento. Trabajamos
              con un enfoque estratégico que combina ingeniería, innovación y visión empresarial.
            </p>
          </div>
        </section>

        {/* Historia + Timeline */}
        <section className="bg-white dark:bg-background-dark/50 py-24 lg:py-32 border-y border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
              <div className="space-y-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
                  Nuestra Historia
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  ¡Más de una década creando soluciones tecnológicas!<br /><br />
                  Fundada en 2012, DevCorp nació como un pequeño grupo de ingenieros enfocados en resolver problemas
                  críticos de arquitectura empresarial. Con el paso de los años, la empresa evolucionó hasta convertirse en
                  un referente en innovación de software, colaborando tanto con grandes corporaciones como con startups
                  tecnológicas.
                </p>

                <div className="grid grid-cols-2 gap-6 lg:gap-8">
                  <div className="p-8 lg:p-10 bg-slate-50 dark:bg-slate-800/40 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm lg:text-base font-semibold text-slate-500 uppercase tracking-wide">
                      Años de Excelencia
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 bg-slate-50 dark:bg-slate-800/40 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">450k+</div>
                    <div className="text-sm lg:text-base font-semibold text-slate-500 uppercase tracking-wide">
                      Líneas de Código
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-10 lg:pl-12 border-l-2 border-slate-200 dark:border-slate-700 ml-4 lg:ml-0">
                <div className="space-y-16 lg:space-y-20">
                  {[
                    { year: "2015", title: "The Inception", desc: "DevCorp was founded in a small garage in Silicon Valley with a focus on cloud-native infrastructure.", active: true },
                    { year: "2018", title: "Global Expansion", desc: "Opened our first European HQ in London and expanded our service portfolio to include AI & ML." },
                    { year: "2025", title: "Enterprise Leader", desc: "Recognized as a premier engineering partner for enterprise digital transformation worldwide." }
                  ].map((item, i) => (
                    <div key={i} className="relative">
                      <span
                        className={`absolute -left-[45px] top-1.5 size-5 rounded-full border-4 border-white dark:border-background-dark transition-all ${
                          item.active ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                        }`}
                      ></span>
                      <div className={`font-bold mb-3 ${item.active ? 'text-primary' : 'text-slate-400'}`}>
                        {item.year}
                      </div>
                      <h4 className="text-xl lg:text-2xl font-bold dark:text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Fundamentales */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-5">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              Valores Fundamentales
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400">
              Nuestros valores influyen en cada decisión, proyecto y relación con nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: "lightbulb", title: "Innovación", desc: "Exploramos nuevas tecnologías para resolver problemas de forma creativa y eficiente." },
              { icon: "verified", title: "Calidad", desc: "Aplicamos altos estándares de desarrollo, arquitectura limpia y pruebas constantes." },
              { icon: "handshake", title: "Integridad", desc: "Construimos relaciones basadas en la transparencia, la ética profesional y el cumplimiento de compromisos." }
            ].map((val, i) => (
              <div
                key={i}
                className="p-8 lg:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="size-16 lg:size-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-4xl lg:text-5xl">{val.icon}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 dark:text-white">{val.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Liderazgo / Equipo */}
        <section className="bg-slate-50 dark:bg-background-dark/40 py-24 lg:py-32 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                  Liderazgo
                </h2>
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl">
                  Ellos guían la estrategia de la empresa y aseguran la excelencia en cada proyecto.
                </p>
              </div>
              <a className="text-primary font-bold text-base lg:text-lg flex items-center gap-2 group hover:gap-3 transition-all">
                Nuestro equipo completo
                <span className="material-symbols-outlined text-xl lg:text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { name: "Marcus Sterling", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800" },
                { name: "Elena Rodriguez", role: "CTO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" },
                { name: "David Chen", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" },
                { name: "Sarah Thompson", role: "Product Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800" }
              ].map((person, i) => (
                <div key={i} className="text-center group">
                  <div className="relative inline-block mb-6 lg:mb-8">
                    <div
                      className="size-40 sm:size-48 lg:size-56 rounded-full border-4 border-white dark:border-slate-700 shadow-2xl bg-cover bg-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20"
                      style={{ backgroundImage: `url(${person.img})` }}
                    ></div>
                    <div className="absolute bottom-3 right-3 size-10 lg:size-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="material-symbols-outlined text-base lg:text-lg">link</span>
                    </div>
                  </div>
                  <h4 className="text-lg lg:text-xl font-bold dark:text-white">{person.name}</h4>
                  <p className="text-primary text-sm lg:text-base font-bold uppercase tracking-widest mt-2">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="bg-primary rounded-3xl p-12 lg:p-16 xl:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 size-64 lg:size-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-8 lg:space-y-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                ¿Listo para crear algo extraordinario?
              </h2>

              <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
                Invitamos a las organizaciones a colaborar con nuestros equipos de ingeniería para transformar ideas en soluciones digitales de alto impacto.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-white text-primary px-10 py-5 rounded-xl font-extrabold text-lg lg:text-xl hover:bg-slate-100 transition-all shadow-2xl">
                  ¡Contáctanos!
                </button>
                <button className="border-2 border-white/40 text-white px-10 py-5 rounded-xl font-extrabold text-lg lg:text-xl hover:bg-white/10 transition-all">
                  Ve nuestros servicios
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default function SocialLinksSection() {
  const socials = [
    { name: 'LinkedIn', color: '#0077b5', followers: '50k+ Seguidores', desc: 'Insights corporativos y red profesional.' },
    { name: 'Twitter / X', color: '#000000', followers: '25k+ Seguidores', desc: 'Noticias en tiempo real y tech updates.' },
    { name: 'GitHub', color: '#333333', followers: '1.2k Repos', desc: 'Open source y contribuciones técnicas.' },
    { name: 'Instagram', color: '#e4405f', followers: '12k+ Seguidores', desc: 'Cultura, eventos y vida en DevCorp.' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
          Redes Sociales
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Únete a nuestra comunidad y mantente al día con las últimas innovaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href="#"
            className="group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div
              className="size-14 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:text-white"
              style={{ backgroundColor: `${social.color}10`, color: social.color }}
            >
              {/* Aquí irían los SVG de cada red */}
              <span className="text-3xl font-bold">•</span> {/* placeholder */}
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{social.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{social.desc}</p>

            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {social.followers}
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
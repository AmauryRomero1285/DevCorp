// src/components/SocialLinkSection.jsx
export default function SocialLinkSection() {
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
        {/* LinkedIn */}
        <a
          href="#"
          className="social-card group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full">
            <div className="size-14 rounded-2xl bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#0077b5] group-hover:text-white">
              <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">LinkedIn</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Insights corporativos y red profesional.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                50k+ Seguidores
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </a>

        {/* Twitter / X */}
        <a
          href="#"
          className="social-card group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full">
            <div className="size-14 rounded-2xl bg-slate-900/10 dark:bg-white/10 text-slate-900 dark:text-white flex items-center justify-center mb-6 transition-colors group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900">
              <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Twitter / X</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Noticias en tiempo real y tech updates.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                25k+ Seguidores
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="#"
          className="social-card group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full">
            <div className="size-14 rounded-2xl bg-[#333]/10 text-[#333] dark:text-white flex items-center justify-center mb-6 transition-colors group-hover:bg-[#333] group-hover:text-white">
              <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">GitHub</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Open source y contribuciones técnicas.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                1.2k Repos
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </a>

        {/* Instagram */}
        <a
          href="#"
          className="social-card group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full">
            <div className="size-14 rounded-2xl bg-[#e4405f]/10 text-[#e4405f] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#e4405f] group-hover:text-white">
              <svg className="size-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Instagram</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Cultura, eventos y vida en DevCorp.
            </p>
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                12k+ Seguidores
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
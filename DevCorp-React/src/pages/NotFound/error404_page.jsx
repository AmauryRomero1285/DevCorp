export default function NotFound() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col antialiased">
      <main className="flex-grow flex flex-col">
        <section className="flex-grow flex flex-col items-center justify-center max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="space-y-8 max-w-2xl">
            {/* El gran 404 con texto superpuesto */}
            <div className="relative">
              <h1
                className="text-[10rem] sm:text-[14rem] font-extrabold text-slate-100 dark:text-slate-800/50 leading-none select-none error-title-glow"
              >
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tighter">
                  Page Not Found
                </span>
              </div>
            </div>

            {/* Mensaje principal */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                ¡Vaya! La página que buscas ha sido movida o eliminada.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                No te preocupes, nuestros desarrolladores han sido notificados. Usa la navegación para volver.
              </p>
            </div>

            {/* Botones + buscador */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a
                href="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined">home</span>
                Página principal
              </a>

              <div className="relative w-full sm:w-96 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
                    search
                  </span>
                </div>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                  placeholder="Search our site..."
                  type="text"
                />
              </div>
            </div>

            {/* Iconos de navegación rápida */}
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-60">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
                <a
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  href="/tecnologias"
                >
                  Tecnologías
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                <a
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  href="/proyectos"
                >
                  Proyectos
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">library_books</span>
                <a
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  href="/recursos"
                >
                  Recursos
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">contact_support</span>
                <a
                  className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors"
                  href="/soporte"
                >
                  Soporte
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
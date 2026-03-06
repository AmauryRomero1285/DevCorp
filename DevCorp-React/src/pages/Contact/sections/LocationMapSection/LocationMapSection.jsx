// src/components/LocationMapSection.jsx
export default function LocationMapSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900/50 py-20">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
          Mapa de Ubicación
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
        <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl">
          Visítenos en nuestro centro de innovación global. Estamos ubicados en el corazón tecnológico de San Francisco.
        </p>
      </div>

      <div className="w-full px-6 max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
          <div className="absolute inset-0 bg-[#0b1e2b] overflow-hidden">
            {/* Grid decorativo */}
            <div className="absolute inset-0 opacity-40">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%" />
              </svg>
            </div>

            {/* Pin + tooltip */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/40 scale-150"></div>
                <div className="relative bg-primary p-3 rounded-full shadow-2xl shadow-primary/50">
                  <span className="material-symbols-outlined text-white text-3xl">location_on</span>
                </div>
              </div>

              <div className="mt-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 min-w-[200px] transform transition-transform group-hover:scale-105">
                <div className="font-bold text-slate-900 dark:text-white">DevCorp HQ</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  100 Tech Plaza, San Francisco
                </div>
                <div className="mt-3 flex items-center gap-2 text-primary font-bold text-xs uppercase cursor-pointer hover:underline">
                  Obtener Direcciones
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones zoom (decorativos) */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
            <button className="size-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-50">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="size-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-50">
              <span className="material-symbols-outlined">remove</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function LocationMapSection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900/50 py-20">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
          Mapa de Ubicación
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
        <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl">
          Visítenos en nuestro centro de innovación. Estamos ubicados en el corazón tecnológico de Puebla.
        </p>
      </div>

      <div className="w-full px-6 max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl group">
          {/* Placeholder - reemplazar con Google Maps, Mapbox, etc. */}
          <div className="absolute inset-0 bg-[#0b1e2b] flex items-center justify-center text-white text-xl font-medium">
            Mapa interactivo – implementación pendiente
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/40 scale-150"></div>
              <div className="relative bg-primary p-3 rounded-full shadow-2xl shadow-primary/50">
                <span className="material-symbols-outlined text-white text-3xl">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
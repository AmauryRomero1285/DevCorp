// src/components/ContactSection.jsx
export default function ContactSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 sm:py-32">
      <div className="flex flex-col items-center text-center space-y-12">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-widest">
            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
            Connect with us
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Let's Build Something <span className="text-primary">Exceptional</span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a vision for a complex software project? Our team of enterprise architects and developers is ready to turn your challenges into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl pt-8">
          {/* Dirección */}
          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="size-14 shrink-0 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Global Headquarters</h3>
              <p className="text-slate-500 dark:text-slate-400 text-base mt-2 leading-relaxed">
                100 Tech Plaza, Suite 500<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:shadow-primary/5">
            <div className="size-14 shrink-0 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl text-slate-900 dark:text-white">Direct Line</h3>
              <p className="text-slate-500 dark:text-slate-400 text-base mt-2 leading-relaxed">
                +1 (800) DEV-CORP<br />
                Mon-Fri, 9am - 6pm PST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
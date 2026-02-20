export default function TrustedBySection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/30 py-12 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">
          Trusted by Industry Leaders Worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Aquí puedes reemplazar con los logos reales o placeholders */}
          <img alt="Partner Logo" className="h-8 w-auto" src="https://via.placeholder.com/120x32?text=Logo1" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://via.placeholder.com/120x32?text=Logo2" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://via.placeholder.com/120x32?text=Logo3" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://via.placeholder.com/120x32?text=Logo4" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://via.placeholder.com/120x32?text=Logo5" />
        </div>
      </div>
    </section>
  );
}
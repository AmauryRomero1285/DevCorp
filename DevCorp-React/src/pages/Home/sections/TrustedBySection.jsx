export default function TrustedBySection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/30 py-12 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">
          Trusted by Industry Leaders Worldwide
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Aquí puedes reemplazar con los logos reales o placeholders */}
          <img alt="Partner Logo" className="h-8 w-auto" src="https://img.icons8.com/color/512/square.png" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://img.icons8.com/color/512/square.png" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://img.icons8.com/color/512/square.png" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://img.icons8.com/color/512/square.png" />
          <img alt="Partner Logo" className="h-8 w-auto" src="https://img.icons8.com/color/512/square.png" />
        </div>
      </div>
    </section>
  );
}
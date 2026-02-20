export default function FinalCTASection() {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-primary rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Ready to build the <span className="text-primary">impossible</span>?
            </h2>
            <p className="text-lg text-slate-300">
              Join the elite enterprises that have accelerated their growth with DevCorp's engineering prowess.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-primary rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/10">
                Schedule a Strategy Session
              </button>
              <button className="w-full sm:w-auto px-10 py-4 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                View Our Stack
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
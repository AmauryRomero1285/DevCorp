export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-background-dark pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-widest">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              Next-Gen Enterprise Solutions
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.05]">
              Engineering the <span className="text-primary">Digital Future</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              DevCorp Enterprise delivers bespoke software solutions that scale with your ambitions.
              From cloud architecture to complex ecosystem integration, we build the foundations of tomorrow.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 transition-all flex items-center gap-2">
                Start Your Project
                <span className="material-symbols-outlined">trending_flat</span>
              </button>
              <button className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Our Method
              </button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                alt="DevCorp Team"
                className="w-full aspect-video object-cover"
                src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 z-20">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400">verified</span>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">99.9%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Uptime Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function TestimonialStatsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0" stroke="white" stroke-width="0.5" />
              <path d="M0 80 L80 0" stroke="white" stroke-width="0.5" />
              <path d="M0 60 L60 0" stroke="white" stroke-width="0.5" />
            </svg>
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="material-symbols-outlined text-6xl text-white/30 mb-8">format_quote</span>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                  "DevCorp's expertise in handling large-scale enterprise data was pivotal for our digital transformation. They didn't just build a tool; they redefined our entire workflow."
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="size-14 rounded-full border-2 border-white/20 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg')" }}
                  ></div>
                  <div>
                    <div className="text-lg font-bold text-white">Amaury Romero</div>
                    <div className="text-sm text-white/70"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-white">
                <div className="text-3xl font-black mb-1">150+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">Engineers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-white">
                <div className="text-3xl font-black mb-1">500k+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">Lines of Code</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-white">
                <div className="text-3xl font-black mb-1">12</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">Global Offices</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-white">
                <div className="text-3xl font-black mb-1">98%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">Retention</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="size-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="size-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center shadow-lg transition-transform active:scale-90">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default function ProcessSection() {
  const steps = [
    { number: "01", title: "Discovery", icon: "search_insights", desc: "In-depth analysis of business requirements, stakeholder needs, and technical constraints." },
    { number: "02", title: "Design",     icon: "architecture",   desc: "Drafting comprehensive technical blueprints and intuitive user experience journeys." },
    { number: "03", title: "Development", icon: "terminal",      desc: "Agile development cycles with continuous integration and rigorous quality assurance." },
    { number: "04", title: "Launch",     icon: "rocket_launch",  desc: "Seamless deployment followed by 24/7 monitoring and proactive maintenance." }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Precision Engineering <span className="text-primary">Process</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our four-phase approach ensures transparency, efficiency, and excellence at every stage of the lifecycle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className="mb-6 size-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-300 ring-4 ring-slate-100 dark:ring-slate-700/50">
                <span className="material-symbols-outlined text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
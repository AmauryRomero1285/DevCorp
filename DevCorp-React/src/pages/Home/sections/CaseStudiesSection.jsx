export default function CaseStudiesSection() {
  const cases = [
    {
      category: "FinTech Architecture",
      title: "Global Payment Ecosystem",
      desc: "Scaling a distributed transaction system to handle 1M+ req/sec with sub-millisecond latency.",
      img: "https://www.apple.com/v/education/k12/home/ah/images/learn-to-code/hero__bdrr6j8wm23m_xlarge.jpg"
    },
    {
      category: "AI & Logistics",
      title: "Predictive Supply Chain",
      desc: "Implementing ML models to optimize real-time routing for a Fortune 500 logistics firm.",
      img: "https://developer.apple.com/swift-student-challenge/images/swift-coding-club-life_2x.jpg"
    },
    {
      category: "Cloud Infrastructure",
      title: "Enterprise Cloud Migration",
      desc: "Modernizing legacy infrastructure for a healthcare provider into a secure hybrid-cloud environment.",
      img: "https://developer.apple.com/learn/images/student-studying-table-large_2x.jpg?3"
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
              Exploring how we solve complex engineering challenges for our global partners.
            </p>
          </div>
          <a
            className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
            href="#"
          >
            View All Projects
            <span className="material-symbols-outlined">east</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold flex items-center gap-2">
                    View Case Study
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-primary text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
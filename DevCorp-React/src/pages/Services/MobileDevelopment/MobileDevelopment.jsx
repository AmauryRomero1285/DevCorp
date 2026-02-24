import React from 'react';

export default function MobileDevelopment() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              Mobile Innovation
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Mobile App <br />
              <span className="text-primary">Development</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              We build world-class mobile experiences that combine stunning design with robust performance. Elevate your enterprise presence on every screen.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2">
                Start Your Project
                <span className="material-symbols-outlined">rocket_launch</span>
              </button>

              <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl"></div>
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 w-full h-6 bg-slate-800 flex justify-center">
                  <div className="w-20 h-4 bg-slate-900 rounded-b-xl"></div>
                </div>
                <img
                  alt="Mobile UI"
                  className="w-full h-full object-cover opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjU2O5HuBsTxzT-rnFkRKT3AkqcFLgyE05vobScoi8Q9tFm7CxklUaQW5PIyLsy6kOwrkiOsFO6Wt975zmmJLKApbfFnigPZhxE_8sQ0_5PBBXe4wPkmztSlQxyS3OrbD0qZgGl-AND_rqMsgkcvG04xatbA-XzEm_-oFUTtta6OOP7wTHveEEvCYqsSCeZsXB2qc4qFvprramfAZiZmj-m7roDUli26y27yq5UCMDdKsmqOHeZnF_xPS-JBYvAIscFRTO3LDN0e1y"
                />
                <div className="absolute inset-x-0 bottom-8 px-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="h-2 w-1/2 bg-white/30 rounded mb-2"></div>
                    <div className="h-4 w-3/4 bg-white/60 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating stat card (visible en sm+) */}
              <div className="absolute -left-12 top-1/4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold">App Growth</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">+124% Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-white dark:bg-background-dark/30 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Our Expertise</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="size-14 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                <img
                  alt="iOS"
                  className="size-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgXCp-2BxBf7TuKFH3_EcAoU2ccZ4HEwVfRPLYrHVIHBVuSlrWIr44W5gKC21Bf9QKD2W7e-FPsa-vSJrnrEKka367A17q1uiwOmN-I-SoSo9xCphBYdLRQroI-e89It6rfUX_c0crR24ESfjXcHPZsev9bEmjkeGo9c2A-0no2FCi7Oe9ao9N60ewUg_xpu9-z6qDpcH2U7pcVVbeOPAI1-noyHB6qjA4ftak4vMyOiZPHbaqZ-DsKYKjn1vBTuRnTYMx3YeolTC0"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">iOS Development</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Swift and Objective-C expertise to build high-end applications for iPhone, iPad, and Apple Watch.
              </p>
            </div>

            {/* Android */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="size-14 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                <img
                  alt="Android"
                  className="size-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGizWCngEcEY2NRzul6nxYUGay6VJoOsT7-EqYlaH6wTp_lW07U0cD1KEL1afuNu5qGGS8b9oVLu2J0666F_W2YhFiPRVGHdobrNKsdeD6ofs0x9pio064FgTxwPXBlhW3TIc-hN3u1jR_cd3ub1RKq9AxLo_L_5ju6qt8ZTh4gRPROkHuIUkZvB6lCT0FtVD513WugFhJ6JzfWD8d-ad8_H5bLsbWJ41bKetQUp-Q28NpG_-heWRkVRhchikBBfMIBjMvknKeeGlO"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Android Development</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Kotlin-first development for a fragmented ecosystem, ensuring performance and compatibility.
              </p>
            </div>

            {/* Cross-platform */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-colors">
              <div className="size-14 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                <img
                  alt="Cross-platform"
                  className="size-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaeOWLL5Aw2m2gXedQfUAR9cNCiIW1AnB1liSyfZpINNLl1rEmnJ1cbTFmttGpfxHl8Mc5COIciHQcN4D5uiDIzMjPNjv3Q3FgDhQF3wcmlv3KE0pvKPJg-EXbg1gD4b-h2GJrWEZjQ4RBUZQQslhdzvNzmzqNtYatIb0y1ITIiI4qd3SpM1fkvrMGqu8ymqvpoF4gP0ei7g3FMHoBaqwtMw-wWIVCSeXKYW6AKcHNb5dea6BA-bYt__d6Jh_PFW388Oy91LLBZE5W"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Flutter and React Native solutions to reach multiple platforms with a single high-quality codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Performance */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Built for Performance</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Our development philosophy centers on creating apps that are not just functional, but exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'draw', title: 'Premium UI/UX Design', desc: 'Intuitive interfaces and fluid animations designed to captivate and retain users.' },
            { icon: 'api', title: 'API Integration', desc: 'Secure and robust connections to your existing enterprise backend systems and 3rd party services.' },
            { icon: 'bolt', title: 'Performance Optimization', desc: 'Advanced caching, memory management, and fast load times for an unbeatable user experience.' },
            { icon: 'security', title: 'Enterprise Security', desc: 'End-to-end encryption, biometric authentication, and data privacy compliance as standard.' },
            { icon: 'monitoring', title: 'Analytics & Tracking', desc: 'Integrated behavioral analytics to understand user journeys and optimize conversions.' },
            { icon: 'support_agent', title: 'Post-Launch Support', desc: 'Continuous maintenance, OS updates, and feature enhancements to keep your app ahead.' },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800/40 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-6 block">{item.icon}</span>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">Our 4-Step Process</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A systematic approach to transforming your vision into a successful mobile product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { step: 1, title: 'Strategy', desc: 'Market research, user personas, and technical roadmap definition.' },
              { step: 2, title: 'Design', desc: 'UX wireframing, high-fidelity UI design, and interactive prototyping.' },
              { step: 3, title: 'Development', desc: 'Agile coding sprints with regular builds and progress tracking.' },
              { step: 4, title: 'QA & Launch', desc: 'Rigorous device testing and App Store/Play Store deployment.' },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative z-10 text-center ${index < 3 ? 'process-step' : ''}`}
              >
                <div className="size-16 rounded-full bg-primary flex items-center justify-center font-bold text-2xl mx-auto mb-6 ring-8 ring-slate-800/50">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-primary/5 rounded-[2rem] p-8 lg:p-16 border border-primary/10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold mb-6">Case Study</div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">NexGen FinTech SuperApp</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              How we helped a leading financial institution launch a mobile-first banking experience that reached 1M+ downloads in the first month.
            </p>
            <div className="flex gap-10 mb-8">
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Crash-free users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.8/5</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">App Store Rating</div>
              </div>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-8">
              Read the full story
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-2 rotate-2 group hover:rotate-0 transition-transform duration-500">
              <img
                alt="FinTech App"
                className="rounded-xl w-full h-[400px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3AsgDqtwMgShf3qIc-wtAL5_CMgtYLXB5cqJZJGJpumidrgnBOnJh9UPhDK4a36gaIIOQQysvoYXpWcdYaXiWntDX-6TxztgFgtsjFVMHuSj7e5mLberoG3KUBRJiWnRFekYeI0Nbox5y4mqAPckKZ8AQ9WSw9wNDtSizzCTqOHUdGDy6-slA1l6kw3-ziNhmOH88j2IV0M07pvbAXK91AxAkxwNsf_sDB6rJJxaHwEKkxEyt-ISwAakdpKRm4M_RrG5GGqu13Hf"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Ready to build your next mobile app?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Our experts are ready to turn your ideas into digital reality.
          </p>
          <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all">
            Let's Talk Strategy
          </button>
        </div>
      </section>
    </>
  );
}
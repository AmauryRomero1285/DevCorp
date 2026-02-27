// src/components/projects/PortfolioAndTestimonials.jsx
import React, { useState } from "react";

const initialTestimonials = [
  {
    name: "Marcus Thorne",
    role: "CTO, NexaWealth Financial",
    text: "DevCorp didn't just build our platform; they revolutionized our entire digital workflow. Their expertise in fintech regulations was critical for our global launch.",
    rating: 5,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_2I68-mk6shjUHNpjXyFcrELiIrmMiqrBi2InzdG_cs2PXzbvWVzSPsWBida6UTFc0zfGGbSdBzcG6IqKamvwRejxPuu-JsG_GWvr4qPdSqYtI1K7QCB503Lhcl3jqmJ0n7qb95XFRMtnwWKuVreRbTe3NH8sDpl7rAQBE88_l9FMcViyWXK9M0IungF-BVSXqlGGb1f__k1xjhsnBuDtqYO2ob3DEatXAabDaFl-cqDQvHu33lkc9ff-KkmEfTbHa1pmv7iL5Fu",
    icon: "domain",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "Head of Innovation, BioSync Medical",
    text: "The AI-driven patient tracking they implemented has reduced our administrative overhead by 40%. A true partner in healthcare innovation.",
    rating: 5,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2bx8hrbwv_C1mo3RtA_RSzQGMrO9MKaJpTVVYrwDHaWaCDu3GODmxFIm0TcdwgkqzGHI24j4SeLNnBUADodhfQqfooccr313hznX4Ofd3Al97IvlECII1Fm03GvptKO9LXr4uTKkyK10zMUoueWlCibKd1eFrdjYGJtqcQULRUYeF_eQ-OQkY1OI6UQfBe85FjrOjRlI-GNK0Uk_BNTece9FG9nejV-e--UFXnD_zix684KIWgRdnpgw866UW39clpIYoauPBAH3n",
    icon: "medical_services",
  },
  {
    name: "Liam Vester",
    role: "Founder, GlobalRetail Group",
    text: "The scalability of the e-commerce architecture DevCorp provided handled our Black Friday traffic effortlessly. We saw 2x growth in conversion.",
    rating: 4,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0hJDVSXmNCOXI2-KGMUIil266mjc2DR6aaD89rVJMe2Dc2Ma9OwVqhYqdH6mbMdQYyzsd3Wg2OoRxc_jkpw6u38qIBtHBq6RTSz5yzsfFDE-ppy4vbrkQRIiytDTqbs9ghkrDOsri42DJie6I6rJMxpR7VEsadut8dGKESwtA2sLr12hojTNMjXLoNv2SfzFNNTPlcPNPPpNIXRdRMm51W3Zp3lkipAUHAcAW0BXBcYuDaxlznCV_PfELBUVXNOIYzQNWoMhy57kP",
    icon: "shopping_cart",
  },
];

export default function PortfolioAndTestimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
    photo: "",
    icon: "domain",
  });

  const handleTestimonialChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.role || !newTestimonial.text) {
      alert("Por favor completa los campos obligatorios: nombre, cargo y testimonio.");
      return;
    }

    setTestimonials((prev) => [...prev, { ...newTestimonial }]);
    
    // Resetear formulario
    setNewTestimonial({
      name: "",
      role: "",
      text: "",
      rating: 5,
      photo: "",
      icon: "domain",
    });
    
    setShowTestimonialForm(false);
  };

  return (
    <>
      {/* Galería de Proyectos */}
      <section className="py-24 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-3 text-primary mb-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-sm font-bold uppercase tracking-widest">
                Galería de Proyectos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Our Complete Portfolio
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="px-5 py-2 rounded-full bg-primary text-white font-bold text-xs whitespace-nowrap">
              All
            </button>
            <button className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary font-bold text-xs transition-colors whitespace-nowrap">
              Fintech
            </button>
            <button className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary font-bold text-xs transition-colors whitespace-nowrap">
              Health
            </button>
            <button className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary font-bold text-xs transition-colors whitespace-nowrap">
              SaaS
            </button>
            <button className="px-5 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary font-bold text-xs transition-colors whitespace-nowrap">
              AI & ML
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes mantener tus tarjetas de proyectos estáticas o hacerlas dinámicas */}
          <div className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="h-52 overflow-hidden relative">
              <img
                alt="OmniStore Core"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8BCp32io0LgmHaMJvuj77_TxKSeWinYN_M0De-qkOAKbounWUKYGC8SxukhO3m0Ag9jEwz9JjhgeuzZFBXSO2GBYdaIpyHFMUNz8N496UH_rqOI1SLuJXE_bABC4KBHrq1-u-RF65IPB8xF1XIynB7f6jPBLISyzRKLN2qrQYY7VQN5GxXnEYFoJ6NZU-hlHMU342XLE6sZ3NOLnmgeIZIU60GyIJxiEXaiS0H8xxwioTHQtiU-jfQPp_EhH2f8Th_TjbpFIh9mH8"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur text-primary text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md shadow-sm">
                  E-commerce
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                OmniStore Core
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                Headless commerce engine supporting multi-channel retail with high-concurrency inventory synchronization.
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-all text-sm">
                View Details{" "}
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Agrega más tarjetas estáticas aquí si lo deseas */}
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-slate-900 py-24 px-6 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 text-primary mb-2">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Testimonios
                </span>
                <span className="h-px w-8 bg-primary"></span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-slate-400 max-w-2xl text-lg">
                Direct feedback from the executives and engineering leaders we've partnered with.
              </p>
            </div>

            <button
              onClick={() => setShowTestimonialForm(true)}
              className="px-6 py-3 rounded-xl bg-primary/20 hover:bg-primary/40 text-primary hover:text-white font-semibold transition-all flex items-center gap-2 shadow-md whitespace-nowrap"
            >
              <span className="material-symbols-outlined">add_circle</span>
              Agregar Testimonio
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-2xl shadow-sm border border-white/5 flex flex-col h-full hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`material-symbols-outlined text-xl ${i < t.rating ? "fill-1" : ""}`}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 flex-1 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6 mb-6">
                  {t.photo ? (
                    <img
                      alt={t.name}
                      className="size-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                      src={t.photo}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/56?text=${t.name[0]}`;
                      }}
                    />
                  ) : (
                    <div className="size-14 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">
                      {t.role}
                    </p>
                  </div>
                  <div className="ml-auto opacity-30 text-white">
                    <span className="material-symbols-outlined text-3xl">
                      {t.icon || "domain"}
                    </span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-primary/20 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-all mt-auto">
                  Ver proyecto relacionado
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para agregar nuevo testimonio */}
      {showTestimonialForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Agregar Nuevo Testimonio
              </h3>
              <button
                onClick={() => setShowTestimonialForm(false)}
                className="text-3xl text-slate-500 hover:text-slate-900 dark:hover:text-white leading-none"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddTestimonial} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={newTestimonial.name}
                  onChange={handleTestimonialChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  Cargo / Empresa *
                </label>
                <input
                  type="text"
                  name="role"
                  value={newTestimonial.role}
                  onChange={handleTestimonialChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  Testimonio *
                </label>
                <textarea
                  name="text"
                  value={newTestimonial.text}
                  onChange={handleTestimonialChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                    Calificación (1-5) *
                  </label>
                  <input
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    value={newTestimonial.rating}
                    onChange={handleTestimonialChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                    Icono
                  </label>
                  <select
                    name="icon"
                    value={newTestimonial.icon}
                    onChange={handleTestimonialChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  >
                    <option value="domain">domain (empresa)</option>
                    <option value="medical_services">medical_services</option>
                    <option value="shopping_cart">shopping_cart</option>
                    <option value="business">business</option>
                    <option value="person">person</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  URL de foto (opcional)
                </label>
                <input
                  type="url"
                  name="photo"
                  value={newTestimonial.photo}
                  onChange={handleTestimonialChange}
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowTestimonialForm(false)}
                  className="px-6 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition font-medium"
                >
                  Agregar Testimonio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
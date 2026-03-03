// src/components/projects/PortfolioAndTestimonials.jsx
import React, { useState } from "react";

const projectTypes = [
  { id: "domain", label: "Corporativo / Fintech", icon: "domain" },
  { id: "medical_services", label: "Salud / BioTech", icon: "medical_services" },
  { id: "shopping_cart", label: "E-commerce / Retail", icon: "shopping_cart" },
  { id: "smart_toy", label: "IA / Machine Learning", icon: "smart_toy" },
  { id: "cloud", label: "SaaS / Cloud Computing", icon: "cloud" },
];

const ROLE_OPTIONS = ["CEO", "CTO", "Founder", "Head of Innovation", "Product Manager", "Lead Engineer"];
const COMPANY_OPTIONS = ["NexaWealth Financial", "BioSync Medical", "GlobalRetail Group", "TechFlow Solutions", "EcoSmart Energy"];

const initialTestimonials = [
  {
    name: "Marcus Thorne",
    role: "CTO",
    company: "NexaWealth Financial",
    text: "DevCorp didn't just build our platform; they revolutionized our entire digital workflow.",
    rating: 5,
    photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_2I68-mk6shjUHNpjXyFcrELiIrmMiqrBi2InzdG_cs2PXzbvWVzSPsWBida6UTFc0zfGGbSdBzcG6IqKamvwRejxPuu-JsG_GWvr4qPdSqYtI1K7QCB503Lhcl3jqmJ0n7qb95XFRMtnwWKuVreRbTe3NH8sDpl7rAQBE88_l9FMcViyWXK9M0IungF-BVSXqlGGb1f__k1xjhsnBuDtqYO2ob3DEatXAabDaFl-cqDQvHu33lkc9ff-KkmEfTbHa1pmv7iL5Fu",
    icon: "domain",
  }
];

const DEFAULT_AVATAR = "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg";
const DEFAULT_PROJECT_IMAGE = "https://picsum.photos/200/237?grayscale&blur=2&random=1";

const projectsData = [
  {
    id: 1,
    category: "SaaS",
    title: "OmniStore Core",
    description: "Headless commerce engine supporting multi-channel retail with high-concurrency inventory synchronization.",
    image: DEFAULT_PROJECT_IMAGE,
    tag: "E-commerce",
  },
  {
    id: 2,
    category: "Fintech",
    title: "NexaPay Gateway",
    description: "Secure payment processing with real-time fraud detection and global multi-currency settlement.",
    image: "https://images.unsplash.com",
    tag: "Banking",
  }
];

export default function PortfolioAndTestimonials() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    company: "",
    text: "",
    rating: 5,
    photo: "",
    icon: "domain",
  });

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const handleTestimonialChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.role || !newTestimonial.company || !newTestimonial.text) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    setTestimonials((prev) => [...prev, { ...newTestimonial }]);
    setNewTestimonial({ name: "", role: "", company: "", text: "", rating: 5, photo: "", icon: "domain" });
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
              <span className="text-sm font-bold uppercase tracking-widest">Galería de Proyectos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Our Portfolio</h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {["All", "Fintech", "Health", "SaaS", "AI & ML"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all whitespace-nowrap ${
                  activeFilter === cat ? "bg-primary text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lógica para mostrar mensaje si no hay proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200 dark:border-primary/5 hover:border-primary/20 shadow-sm transition-all duration-300">
                <div className="h-52 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={project.image || DEFAULT_PROJECT_IMAGE} 
                    onError={(e) => e.target.src = DEFAULT_PROJECT_IMAGE}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-primary text-[10px] uppercase font-bold px-3 py-1 rounded-md shadow-sm">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <button className="w-full bg-primary/5 hover:bg-primary text-primary hover:text-white py-3 rounded-lg font-bold transition-all text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-700 mb-4">folder_off</span>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">No hay proyectos relacionados aún en esta categoría.</p>
          </div>
        )}
      </section>



      {/* Sección Testimonios */}
      <section className="bg-slate-900 py-24 px-6 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Client Feedback</h2>
            <button onClick={() => setShowTestimonialForm(true)} className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all">Add Yours</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl relative group">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{t.icon}</span>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <span key={star} className={`material-symbols-outlined text-xl ${star < t.rating ? 'text-yellow-400 fill-1' : 'text-slate-600'}`}>star</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.photo?.trim() ? t.photo : DEFAULT_AVATAR} 
                    onError={(e) => e.target.src = DEFAULT_AVATAR}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" 
                  />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-slate-500 text-sm">{t.role}{t.company ? `, ${t.company}` : ""}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Formulario */}
      {showTestimonialForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Agregar Testimonio</h3>
              <button onClick={() => setShowTestimonialForm(false)} className="text-3xl text-slate-500 leading-none">×</button>
            </div>
            <form onSubmit={handleAddTestimonial} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Nombre *</label>
                <input type="text" name="name" value={newTestimonial.name} onChange={handleTestimonialChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none focus:ring-1 focus:ring-primary" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Cargo *</label>
                  <select name="role" value={newTestimonial.role} onChange={handleTestimonialChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none cursor-pointer" required>
                    <option value="" disabled>Cargo</option>
                    {ROLE_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Empresa *</label>
                  <select name="company" value={newTestimonial.company} onChange={handleTestimonialChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none cursor-pointer" required>
                    <option value="" disabled>Empresa</option>
                    {COMPANY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Testimonio *</label>
                <textarea name="text" value={newTestimonial.text} onChange={handleTestimonialChange} rows={3} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none resize-none" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Calificación *</label>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-2 rounded-lg justify-around border dark:border-slate-700">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button key={n} type="button" onClick={() => handleTestimonialChange({ target: { name: 'rating', value: n } })} className={`material-symbols-outlined ${newTestimonial.rating >= n ? 'text-yellow-400 fill-1' : 'text-slate-400'}`}>star</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Icono / Proyecto</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-primary text-xl">{newTestimonial.icon}</span>
                    <select name="icon" value={newTestimonial.icon} onChange={handleTestimonialChange} className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none appearance-none cursor-pointer">
                      {projectTypes.map(pt => <option key={pt.id} value={pt.id}>{pt.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">Foto URL (opcional)</label>
                <input type="url" name="photo" value={newTestimonial.photo} onChange={handleTestimonialChange} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white outline-none" />
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t dark:border-slate-800">
                <button type="button" onClick={() => setShowTestimonialForm(false)} className="px-6 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold">Cancelar</button>
                <button type="submit" className="px-8 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/20">Agregar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

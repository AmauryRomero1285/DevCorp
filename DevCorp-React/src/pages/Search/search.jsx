// src/pages/Search/Search.tsx
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

// Datos estáticos de ejemplo (puedes moverlos a un archivo data.ts o JSON)
const searchableContent = [
  { title: "Desarrollo Web", description: "Sitios modernos con React, Next.js y Tailwind", path: "/servicios" },
  { title: "Aplicaciones Móviles", description: "Apps nativas y cross-platform con Flutter o React Native", path: "/servicios" },
  { title: "Arquitectura en la Nube", description: "AWS, Azure, Google Cloud, DevOps", path: "/servicios" },
  { title: "React y TypeScript", description: "Frontend escalable y tipado", path: "/tecnologias" },
  { title: "Node.js y Express", description: "Backend robusto y APIs REST/GraphQL", path: "/tecnologias" },
  { title: "Proyecto E-commerce", description: "Tienda en línea completa", path: "/proyectos" },
  // Agrega más de tus páginas reales
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = useMemo(() => {
    if (!query) return [];

    return searchableContent.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">
        Resultados para: <span className="text-primary">"{query}"</span>
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-10">
        {results.length} resultado{results.length !== 1 ? "s" : ""}
      </p>

      {results.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-slate-500">No encontramos resultados para "{query}"</p>
          <p className="mt-2 text-slate-400">Prueba con otras palabras como "web", "cloud", "react"</p>
        </div>
      ) : (
        <div className="space-y-6">
          {results.map((item, idx) => (
            <a
              key={idx}
              href={item.path}
              className="block p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{item.description}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
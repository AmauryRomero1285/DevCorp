// src/components/Modal.jsx
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title = "Contáctanos", children }) {
  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Opcional: bloquear scroll del body
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose} // clic fuera → cerrar
    >
      {/* Fondo oscuro / overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm" />

      {/* Contenido del modal */}
      <div 
        className={`
          relative bg-white dark:bg-slate-800/90 
          rounded-3xl border border-slate-200 dark:border-slate-700 
          shadow-2xl shadow-slate-900/30 dark:shadow-primary/10
          max-w-3xl w-full max-h-[90vh] overflow-y-auto
          transform transition-all duration-300
          scale-100 opacity-100
        `}
        onClick={(e) => e.stopPropagation()} // evitar que cierre al clicar dentro
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-slate-500 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Título */}
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white px-8 pt-8 pb-4 border-b border-slate-200 dark:border-slate-700/50">
            {title}
          </h2>
        )}

        {/* Contenido (el formulario irá aquí) */}
        <div className="p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
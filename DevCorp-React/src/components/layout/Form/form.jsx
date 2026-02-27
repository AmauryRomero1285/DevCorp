// src/components/ContactFormModal.jsx
import { useEffect, useState } from 'react';
import useContactForm from "../../../hooks/useContactForm";
import Modal from '../../common/modal/modal';

export default function ContactFormModal({ isOpen, onClose }) {
  const {
    formData,
    errors,
    isSubmitting,
    isCaptchaValid,
    handleChange,
    handleSubmit,
    handleCaptchaSuccess,
    resetCaptcha,
  } = useContactForm();

  // Estado para saber si reCAPTCHA está inicializado y listo
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);

  // Limpieza antes de cerrar
  const handleClose = () => {
    Object.keys(formData).forEach((key) =>
      handleChange({ target: { name: key, value: "" } })
    );
    resetCaptcha();
    onClose();
  };

  // Callbacks globales para reCAPTCHA
  useEffect(() => {
    window.onCaptchaSuccess = (token) => {
      console.log("Captcha listo");
      handleCaptchaSuccess(token);
    };

    window.onCaptchaExpired = () => {
      resetCaptcha();
    };

    return () => {
      delete window.onCaptchaSuccess;
      delete window.onCaptchaExpired;
    };
  }, [handleCaptchaSuccess, resetCaptcha]);

  // Detectar cuando reCAPTCHA está listo (polling simple)
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
        setIsCaptchaReady(true);
        clearInterval(interval);
      }
    }, 300); // chequea cada 300ms

    // Timeout de seguridad (si no carga en 10s, error)
    const timeout = setTimeout(() => {
      if (!isCaptchaReady) {
        console.warn('[reCAPTCHA] No se cargó después de 10 segundos');
        // Opcional: mostrar error al usuario
        // setErrors(prev => ({ ...prev, captcha: 'CAPTCHA no cargó. Intenta recargar.' }));
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isOpen, isCaptchaReady]);

  // Click en contenedor visual → ejecuta reCAPTCHA con reintentos
  const handleCaptchaClick = () => {
    if (!isCaptchaReady) {
      console.log('[reCAPTCHA] Aún no está listo, espera un momento...');
      return;
    }

    const tryExecute = (attempt = 1) => {
      if (window.grecaptcha && typeof window.grecaptcha.execute === 'function') {
        try {
          window.grecaptcha.execute();
          console.log('[reCAPTCHA] Ejecutado en intento ' + attempt);
        } catch (err) {
          console.warn('[reCAPTCHA] Error en intento ' + attempt + ':', err);
        }
      } else if (attempt < 6) {
        setTimeout(() => tryExecute(attempt + 1), 400); // reintento más espaciado
      } else {
        console.warn('[reCAPTCHA] Falló después de 6 intentos');
        // Opcional: error visible
        // setErrors(prev => ({ ...prev, captcha: 'No se pudo validar CAPTCHA. Intenta de nuevo.' }));
      }
    };

    tryExecute();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const success = await handleSubmit(e);
    if (success) {
      handleClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Contáctanos">
      <form onSubmit={handleFormSubmit} className="space-y-6">

        {/* Campos del formulario – iguales a los tuyos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="full_name">
              Nombre Completo
            </label>
            <input
              className={`w-full bg-white dark:bg-slate-900 border ${errors.full_name ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
              id="full_name"
              name="full_name"
              type="text"
              placeholder="ej. Juan Pérez"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            {errors.full_name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">warning</span>
                {errors.full_name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              className={`w-full bg-white dark:bg-slate-900 border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">warning</span>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Tipo de Servicio */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="service_type">
            Tipo de Servicio
          </label>
          <select
            className={`w-full bg-white dark:bg-slate-900 border ${errors.service_type ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-2 focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer appearance-none`}
            id="service_type"
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
          >
            <option value="" disabled>Selecciona un servicio</option>
            <option value="web">Desarrollo Web</option>
            <option value="mobile">Aplicaciones Móviles</option>
            <option value="cloud">Arquitectura en la Nube</option>
            <option value="ai">IA & Machine Learning</option>
          </select>
          {errors.service_type && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span>
              {errors.service_type}
            </p>
          )}
        </div>

        {/* Detalles del Proyecto */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="project_details">
            Detalles del Proyecto
          </label>
          <textarea
            className={`w-full bg-white dark:bg-slate-900 border ${errors.project_details ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all resize-none`}
            id="project_details"
            name="project_details"
            rows={4}
            placeholder="Cuéntanos sobre tu proyecto y sus objetivos..."
            value={formData.project_details}
            onChange={handleChange}
            minLength={20}
          />
          {errors.project_details && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span>
              {errors.project_details}
            </p>
          )}
        </div>

        {/* CAPTCHA con loading y click seguro */}
        <div className="space-y-3">
          <div
            id="captcha_container"
            className={`relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 rounded-xl transition-all overflow-visible ${isCaptchaReady ? 'cursor-pointer' : 'cursor-wait'}`}
            onClick={isCaptchaReady ? handleCaptchaClick : undefined}
          >
            <div
              className="g-recaptcha"
              data-sitekey="6LeRBXIsAAAAALqEQituH5Mm4cJ1d39my4m2F9xH"
              data-callback="onCaptchaSuccess"
              data-expired-callback="onCaptchaExpired"
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0,
                width: "100%",
                height: "100%",
                zIndex: 20,
                cursor: "pointer",
              }}
            ></div>

            {/* Overlay visual */}
            <div className="flex items-center gap-3 z-10 pointer-events-none">
              <div
                className={`size-6 border-2 rounded flex items-center justify-center transition-all duration-300 ${isCaptchaValid ? "bg-primary/20 border-primary" : "bg-white border-slate-300 dark:border-slate-600"}`}
              >
                <span
                  className={`material-symbols-outlined text-primary text-lg transition-opacity duration-300 ${isCaptchaValid ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                >
                  check
                </span>
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                No soy un robot
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-end opacity-60 z-10 pointer-events-none">
              <svg className="size-8 text-primary/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
              <span className="text-[9px] font-bold uppercase tracking-tighter text-slate-400">
                reCAPTCHA
              </span>
            </div>

            {/* Indicador de carga */}
            {!isCaptchaReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-black/40 rounded-xl z-30">
                <span className="text-white text-sm font-medium animate-pulse">
                  Cargando verificación...
                </span>
              </div>
            )}
          </div>

          {errors.captcha && (
            <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span>
              {errors.captcha}
            </p>
          )}
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={isSubmitting || !isCaptchaValid || !isCaptchaReady}
          className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          <span className="material-symbols-outlined">send</span>
        </button>
      </form>
    </Modal>
  );
}
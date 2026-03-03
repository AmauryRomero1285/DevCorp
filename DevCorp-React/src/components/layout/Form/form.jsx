// src/components/ContactFormModal.jsx
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useContactForm from "../../../hooks/useContactForm";
import Modal from "../../common/modal/modal";

export default function ContactFormModal({ isOpen, onClose }) {
  const {
    formData,
    errors,
    touched, // Importamos touched para controlar la visibilidad de errores
    isSubmitting,
    isCaptchaValid,
    handleChange,
    handleSubmit,
    handleCaptchaSuccess,
    resetCaptcha,
  } = useContactForm();

  const recaptchaRef = useRef(null);
  const [isCaptchaReady, setIsCaptchaReady] = useState(false);

  const handleClose = () => {
    // Resetear campos individualmente para limpiar el estado del hook
    Object.keys(formData).forEach((key) =>
      handleChange({ target: { name: key, value: "" } })
    );
    if (recaptchaRef.current) recaptchaRef.current.reset();
    resetCaptcha();
    onClose();
  };

  const handleRecaptchaLoad = () => setIsCaptchaReady(true);

  const handleCaptchaClick = () => {
    if (recaptchaRef.current && isCaptchaReady && !isCaptchaValid) {
      recaptchaRef.current.execute();
    }
  };

  const handleFormSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success) handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Contáctanos">
      <form onSubmit={handleFormSubmit} className="space-y-6 max-w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="full_name">
              Nombre Completo
            </label>
            <input
              className={`w-full bg-white dark:bg-slate-900 border ${touched.full_name && errors.full_name ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
              id="full_name"
              name="full_name"
              type="text"
              placeholder="ej. Juan Pérez"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            {touched.full_name && errors.full_name && (
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
              className={`w-full bg-white dark:bg-slate-900 border ${touched.email && errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {touched.email && errors.email && (
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
            className={`w-full bg-white dark:bg-slate-900 border ${touched.service_type && errors.service_type ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-2 focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-700 dark:text-slate-300 transition-all cursor-pointer appearance-none`}
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
        </div>

        {/* Detalles del Proyecto */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="project_details">
            Detalles del Proyecto
          </label>
          <textarea
            className={`w-full bg-white dark:bg-slate-900 border ${touched.project_details && errors.project_details ? "border-red-500" : "border-slate-200 dark:border-slate-700"} focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all resize-none`}
            id="project_details"
            name="project_details"
            rows={4}
            placeholder="Escribe los detalles aquí..."
            value={formData.project_details}
            onChange={handleChange}
          />
          {touched.project_details && errors.project_details && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span>
              {errors.project_details}
            </p>
          )}
        </div>

        {/* CAPTCHA SEGURO */}
        <div className="space-y-3">
          <div
            onClick={handleCaptchaClick}
            className={`relative flex items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border rounded-xl transition-all ${
              isCaptchaValid ? "border-green-500/50 bg-green-50/30" : "border-slate-200 dark:border-slate-800"
            } ${isCaptchaReady ? "cursor-pointer" : "cursor-wait opacity-50"}`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${isCaptchaValid ? "bg-green-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-400"}`}>
                <span className="material-symbols-outlined text-xl">
                  {isCaptchaValid ? "verified_user" : "shield"}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {isCaptchaValid ? "Verificación Completada" : "Verificación de Seguridad"}
                </p>
                <p className="text-xs text-slate-500">
                  {isCaptchaValid ? "Eres humano oficialmente" : "Haz clic para validar"}
                </p>
              </div>
            </div>

            <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LeRBXIsAAAAALqEQituH5Mm4cJ1d39my4m2F9xH"
                asyncScriptOnLoad={handleRecaptchaLoad}
                onChange={handleCaptchaSuccess}
                onExpired={resetCaptcha}
                badge="inline"
              />
            </div>

            {isCaptchaValid && (
              <span className="material-symbols-outlined text-green-500 animate-bounce">check_circle</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isCaptchaValid}
          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </Modal>
  );
}

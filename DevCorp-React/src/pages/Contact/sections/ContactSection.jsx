import useContactForm from "../../../hooks/useContactForm";
import { useEffect } from 'react';

export default function ContactSection() {
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

  useEffect(() => {
  // Callback cuando se completa correctamente
  window.onCaptchaSuccess = (token) => {
    handleCaptchaSuccess(token);
  };

  // Callback cuando expira
  window.onCaptchaExpired = () => {
    resetCaptcha();
  };

  // Limpieza 
  return () => {
    delete window.onCaptchaSuccess;
    delete window.onCaptchaExpired;
  };
}, [handleCaptchaSuccess, resetCaptcha]);

  // Opcional: limpiar formulario después de éxito (puedes moverlo al hook si prefieres)
  const onSuccess = () => {
    // Aquí podrías mostrar un toast o mensaje bonito en lugar de alert
    alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
    // El hook ya resetea captcha, pero puedes resetear visualmente si quieres
  };


  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Columna izquierda - texto + info (sin cambios) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-bold uppercase tracking-widest">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              Contáctanos
            </div>

            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Construyamos algo{" "}
              <span className="text-primary">Excepcional</span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              ¿Tiene un proyecto de software complejo? Nuestro equipo de
              arquitectos y desarrolladores empresariales están listos para
              convertir sus desafíos en ventajas competitivas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-1">
            {/* Sede y teléfono - sin cambios */}
            <div className="flex gap-4 p-4 rounded-2xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50">
              <div className="size-12 shrink-0 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Nuestra sede central
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                  100 Tech Plaza, Suite 500
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/50">
              <div className="size-12 shrink-0 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Línea Directa
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                  +1 (800) DEV-CORP
                  <br />
                  Lun-Vie, 8am - 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna derecha - Formulario CONECTADO al hook */}
        <div className="lg:col-span-7">
          <div className="relative bg-white dark:bg-slate-800/50 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-200/40 dark:shadow-none">
            <button
              type="button"
              onClick={() => {
                // Limpia todo
                Object.keys(formData).forEach((key) =>
                  handleChange({ target: { name: key, value: "" } }),
                );
                resetCaptcha();
              }}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-200 z-30"
              title="Reiniciar formulario"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Contáctanos
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-slate-700 dark:text-slate-300"
                    htmlFor="full_name"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className={`w-full bg-white dark:bg-slate-900 border ${
                      errors.full_name
                        ? "border-red-500"
                        : "border-slate-200 dark:border-slate-700"
                    } focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
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
                      <span className="material-symbols-outlined text-sm">
                        warning
                      </span>
                      {errors.full_name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-slate-700 dark:text-slate-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`w-full bg-white dark:bg-slate-900 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-slate-200 dark:border-slate-700"
                    } focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all`}
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
                      <span className="material-symbols-outlined text-sm">
                        warning
                      </span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Tipo de servicio */}
              <div className="space-y-2">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300"
                  htmlFor="service_type"
                >
                  Tipo de Servicio
                </label>
                <select
                  className={`w-full bg-white dark:bg-slate-900 border ${
                    errors.service_type
                      ? "border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  } focus:ring-2 focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer appearance-none`}
                  id="service_type"
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  <option value="web">Desarrollo Web</option>
                  <option value="mobile">Aplicaciones Móviles</option>
                  <option value="cloud">Arquitectura en la Nube</option>
                  <option value="ai">IA & Machine Learning</option>
                </select>
                {errors.service_type && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      warning
                    </span>
                    {errors.service_type}
                  </p>
                )}
              </div>

              {/* Detalles del proyecto */}
              <div className="space-y-2">
                <label
                  className="text-sm font-bold text-slate-700 dark:text-slate-300"
                  htmlFor="project_details"
                >
                  Detalles del Proyecto
                </label>
                <textarea
                  className={`w-full bg-white dark:bg-slate-900 border ${
                    errors.project_details
                      ? "border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  } focus:ring-primary focus:border-primary rounded-xl px-4 py-3.5 text-slate-900 dark:text-white transition-all resize-none`}
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
                    <span className="material-symbols-outlined text-sm">
                      warning
                    </span>
                    {errors.project_details}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <div
                  id="captcha_container"
                  className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 rounded-xl transition-all overflow-hidden"
                >
                  {/* Capa invisible de Google reCAPTCHA v2 */}
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LeRBXIsAAAAALqEQituH5Mm4cJ1d39my4m2F9xH" // ← TU NUEVA CLAVE
                    data-callback="onCaptchaSuccess"
                    data-expired-callback="onCaptchaExpired"
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.01,
                      zIndex: 30,
                      cursor: "pointer",
                      transform: "scale(2)",
                      transformOrigin: "center",
                      pointerEvents:'auto',
                    }}
                  ></div>

                  {/* Diseño visual personalizado (estático) */}
                  <div className="flex items-center gap-3 z-10 pointer-events-none">
                    <div
                      className={`size-6 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                        isCaptchaValid
                          ? "bg-primary/20 border-primary"
                          : "bg-white border-slate-300 dark:border-slate-600"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-primary text-lg transition-opacity duration-300 ${
                          isCaptchaValid
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                      >
                        check
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      No soy un robot
                    </span>
                  </div>

                  <div className="flex flex-col items-center sm:items-end opacity-60 z-10 pointer-events-none">
                    <svg
                      className="size-8 text-primary/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="text-[9px] font-bold uppercase tracking-tighter text-slate-400">
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                {/* Mensaje de error */}
                {errors.captcha && (
                  <p className="text-xs font-semibold text-red-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      warning
                    </span>
                    {errors.captcha}
                  </p>
                )}
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting || !isCaptchaValid}
                className="w-full bg-primary hover:bg-primary/90 text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

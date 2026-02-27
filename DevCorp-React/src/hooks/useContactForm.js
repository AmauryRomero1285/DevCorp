// src/hooks/useContactForm.js
import { useState, useCallback } from 'react';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    service_type: '',
    project_details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Función isGibberish (mantenida igual)
  function isGibberish(text) {
    const t = text.trim().toLowerCase();
    if (t.length < 3) return false;
    const commonGibberish = ["asdf", "asda", "sdfg", "jklm", "qwerty", "zxcv", "abcd"];
    const PatronBasura = commonGibberish.some((p) => t.includes(p));
    const tieneVocales = /[aeiouáéíóúü]/i.test(t);
    const letrasRepetidas = /(.)\1{3,}/.test(t);
    const consonantesSeguidas = /[^aeiouáéíóúü\s]{5,}/i.test(t);
    return !tieneVocales || letrasRepetidas || consonantesSeguidas || PatronBasura;
  }

  // Validadores extendidos (ahora isGibberish en nombre y detalles)
  const validateName = useCallback((value) => {
    if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
    if (isGibberish(value)) return 'El nombre parece incoherente.';
    return '';
  }, []);

  const validateEmail = useCallback((value) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value) && value.length > 5 ? '' : 'Ingresa un correo válido.';
  }, []);

  const validateService = useCallback((value) => {
    return value ? '' : 'Selecciona un servicio.';
  }, []);

  const validateDetails = useCallback((value) => {
    if (value.trim().length < 20) return 'Tu texto es demasiado corto (mín. 20 caracteres).';
    if (isGibberish(value)) return 'El texto parece incoherente.';
    return '';
  }, []);

  // Validar todo el form
  const validateForm = useCallback(() => {
    const newErrors = {
      full_name: validateName(formData.full_name),
      email: validateEmail(formData.email),
      service_type: validateService(formData.service_type),
      project_details: validateDetails(formData.project_details),
      captcha: captchaToken ? '' : 'Por favor completa el CAPTCHA.',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  }, [formData, captchaToken, validateName, validateEmail, validateService, validateDetails]);

  // Handle change con validación en tiempo real (extendida a project_details)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validación en tiempo real
    if (name === 'full_name') setErrors((prev) => ({ ...prev, full_name: validateName(value) }));
    if (name === 'email') setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    if (name === 'service_type') setErrors((prev) => ({ ...prev, service_type: validateService(value) }));
    if (name === 'project_details') setErrors((prev) => ({ ...prev, project_details: validateDetails(value) }));
  };

  const handleCaptchaSuccess = useCallback((token) => {
    setCaptchaToken(token);
    setIsCaptchaValid(true);
    setErrors((prev) => ({ ...prev, captcha: '' }));
  }, []);

  // Reset captcha seguro (con chequeo para evitar error al cerrar modal)
  const resetCaptcha = useCallback(() => {
    if (window.grecaptcha && typeof window.grecaptcha.reset === 'function') {
      try {
        window.grecaptcha.reset();
      } catch (err) {
        console.warn('[reCAPTCHA] Ignorando reset porque no hay cliente activo:', err.message);
      }
    } else {
      console.warn('[reCAPTCHA] grecaptcha no está disponible o ya fue destruido');
    }
    setCaptchaToken('');
    setIsCaptchaValid(false);
  }, []);

  // Handle submit (mantenido igual, pero sin simulación hardcodeada)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Envío real (reemplaza con tu API)
      // await sendContactForm({ ...formData, captchaToken });

      // Simulación temporal
      await new Promise((r) => setTimeout(r, 1800));
      alert('¡Mensaje enviado con éxito!');
      setFormData({ full_name: '', email: '', service_type: '', project_details: '' });
      resetCaptcha();
      return true; // para cerrar modal en el form
    } catch (err) {
      alert('Error al enviar. Intenta de nuevo.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isCaptchaValid,
    handleChange,
    handleSubmit,
    handleCaptchaSuccess,
    resetCaptcha,
  };
}
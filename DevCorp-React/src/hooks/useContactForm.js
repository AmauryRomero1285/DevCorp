// src/hooks/useContactForm.js
import { useState, useEffect, useCallback } from 'react';

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

  // ── Validadores (los mismos que tenías, pero adaptados) ──
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

  // Tu función isGibberish (cópiala aquí)
  function isGibberish(text) {
    const t = text.trim().toLowerCase();
    if (t.length < 3) return false;
    const commonGibberish = [
      "asdf",
      "asda",
      "sdfg",
      "jklm",
      "qwerty",
      "zxcv",
      "abcd",
    ];
    const PatronBasura = commonGibberish.some((p) => t.includes(p));
    const tieneVocales = /[aeiouáéíóúü]/i.test(t);
    const letrasRepetidas = /(.)\1{3,}/.test(t);
    const consonantesSeguidas = /[^aeiouáéíóúü\s]{5,}/i.test(t);
    return (
      !tieneVocales || letrasRepetidas || consonantesSeguidas || PatronBasura
    );
  }

  // Validar todo
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

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validación en tiempo real (opcional: solo en blur o submit)
    if (name === 'full_name') setErrors((prev) => ({ ...prev, full_name: validateName(value) }));
    if (name === 'email') setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    // ... lo mismo para los demás
  };

  const handleCaptchaSuccess = useCallback((token) => {
    setCaptchaToken(token);
    setIsCaptchaValid(true);
    setErrors((prev) => ({ ...prev, captcha: '' }));
  }, []);

  const resetCaptcha = useCallback(() => {
    if (window.grecaptcha) window.grecaptcha.reset();
    setCaptchaToken('');
    setIsCaptchaValid(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Aquí va el envío real (usa tu servicio/api.js)
      await sendContactForm({ ...formData, captchaToken });

      // Simulación
      await new Promise((r) => setTimeout(r, 1800));
      alert('¡Mensaje enviado con éxito!');
      setFormData({ full_name: '', email: '', service_type: '', project_details: '' });
      resetCaptcha();
    } catch (err) {
      alert('Error al enviar. Intenta de nuevo.');
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
import { useState, useCallback } from 'react';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    service_type: '',
    project_details: '',
  });

  // Estado para saber qué campos ha interactuado el usuario
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Función isGibberish mejorada
  function isGibberish(text) {
    const t = text.trim().toLowerCase();
    if (t.length < 3) return false;
    const commonGibberish = ["asdf", "asda", "sdfg", "jklm", "qwerty", "zxcv", "abcd"];
    const patronBasura = commonGibberish.some((p) => t.includes(p));
    const tieneVocales = /[aeiouáéíóúü]/i.test(t);
    const letrasRepetidas = /(.)\1{3,}/.test(t);
    const consonantesSeguidas = /[^aeiouáéíóúü\s]{5,}/i.test(t);
    return !tieneVocales || letrasRepetidas || consonantesSeguidas || patronBasura;
  }

  // Validadores individuales
  const validateName = useCallback((value) => {
    if (!value.trim()) return 'El nombre es requerido.';
    if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
    if (isGibberish(value)) return 'El nombre parece incoherente.';
    return '';
  }, []);

  const validateEmail = useCallback((value) => {
    if (!value.trim()) return 'El correo es requerido.';
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(value) ? '' : 'Ingresa un correo válido.';
  }, []);

  const validateService = useCallback((value) => {
    return value ? '' : 'Selecciona un servicio.';
  }, []);

  const validateDetails = useCallback((value) => {
    if (!value.trim()) return 'Los detalles son requeridos.';
    if (value.trim().length < 20) return 'Mínimo 20 caracteres.';
    if (isGibberish(value)) return 'El mensaje parece incoherente o contiene texto basura.';
    return '';
  }, []);

  // Handle change con lógica de "touched"
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Marcamos el campo como "tocado" para que se puedan mostrar errores
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validación en tiempo real solo si el campo ha sido tocado o tiene contenido
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

  const resetCaptcha = useCallback(() => {
    setCaptchaToken('');
    setIsCaptchaValid(false);
    // Limpiar errores y toques al resetear
    setErrors({});
    setTouched({});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Forzamos la validación de todos los campos al intentar enviar
    const formErrors = {
      full_name: validateName(formData.full_name),
      email: validateEmail(formData.email),
      service_type: validateService(formData.service_type),
      project_details: validateDetails(formData.project_details),
    };

    setErrors(formErrors);
    setTouched({ full_name: true, email: true, service_type: true, project_details: true });

    const hasErrors = Object.values(formErrors).some(err => err !== '');
    if (hasErrors || !isCaptchaValid) return false;

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      return true; 
    } catch (err) {
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    touched, // Exportamos touched para el componente visual
    isSubmitting,
    isCaptchaValid,
    handleChange,
    handleSubmit,
    handleCaptchaSuccess,
    resetCaptcha,
  };
}

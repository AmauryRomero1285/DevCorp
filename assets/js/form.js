const emailInput = document.getElementById('email');
const errorElement = document.getElementById('email-error');

// Referencias Captcha
const captchaContainer = document.getElementById('captcha_container');
const captchaErrorMessage = document.getElementById('captcha_error');

// Referencias de los campos
const fullNameInput = document.getElementById('full_name');
const serviceTypeInput = document.getElementById('service_type');
const projectDetailsInput = document.getElementById('project_details');

// Validar el correo electrónico
function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(email) && email.length > 5;

  if (email === '') {
    errorElement.classList.add('hidden');
    emailInput.classList.remove('border-red-500');
    return;
  }

  if (isValid) {
    errorElement.classList.add('hidden');
    emailInput.classList.remove('border-red-500');
  } else {
    errorElement.classList.remove('hidden');
    emailInput.classList.add('border-red-500');
  }
}

emailInput.addEventListener('input', validateEmail);

// Validación al enviar el formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = this;
  const btn = form.querySelector('button[type="submit"]');

  // Validación de campos vacíos
  let isValid = true;

  // Validar Nombre Completo
  if (fullNameInput.value.trim() === '') {
    fullNameInput.classList.add('border-red-500');
    isValid = false;
  } else {
    fullNameInput.classList.remove('border-red-500');
  }

  // Validar correo
  if (emailInput.value.trim() === '') {
    emailInput.classList.add('border-red-500');
    isValid = false;
  } else {
    emailInput.classList.remove('border-red-500');
  }

  // Validar Selección de Servicio
  if (serviceTypeInput.value === '') {
    serviceTypeInput.classList.add('border-red-500');
    isValid = false;
  } else {
    serviceTypeInput.classList.remove('border-red-500');
  }

  // Validar Detalles del Proyecto
  if (projectDetailsInput.value.trim() === '') {
    projectDetailsInput.classList.add('border-red-500');
    isValid = false;
  } else {
    projectDetailsInput.classList.remove('border-red-500');
  }

  // Validación del reCAPTCHA
  const captchaValue = grecaptcha.getResponse(); // Obtener la respuesta del reCAPTCHA
  if (!captchaValue) {
    captchaContainer.classList.add('border-red-500');
    captchaErrorMessage.classList.remove('hidden');
    isValid = false;
  } else {
    captchaContainer.classList.remove('border-red-500');
    captchaErrorMessage.classList.add('hidden');
  }

  // Si todo es válido, proceder con el envío
  if (isValid) {
    const originalContent = btn.innerHTML;
    btn.innerHTML = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      alert("¡Formulario enviado con éxito!");
      btn.innerHTML = originalContent;
      btn.disabled = false;
      form.reset();
      grecaptcha.reset();  // Restablecer el reCAPTCHA después del envío
    }, 2000);
  }
});

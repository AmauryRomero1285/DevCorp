// Referencias
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("email-error");

const nameInput = document.getElementById("full_name");
const nameErrorElement = document.getElementById("name-error");

const captchaContainer = document.getElementById("captcha_container");
const captchaErrorMessage = document.getElementById("captcha_error");
const customCheck = document.getElementById("custom-check");
const customBox = document.getElementById("custom-box");

const serviceSelect = document.getElementById("service_type");
const serviceErrorElement = document.getElementById("service-error");

const projectDetails = document.getElementById("project_details");
const projectErrorElement = document.getElementById("details-error");

const form = document.getElementById("contact-form");

const errorIcon =
  '<span class="material-symbols-outlined text-sm">warning</span>';

// Callback global para reCAPTCHA
window.onCaptchaSuccess = function () {
  customCheck.classList.remove("hidden");
  customBox.classList.add("border-primary", "bg-primary/10");
  captchaContainer.classList.remove("border-red-500");
  captchaErrorMessage.classList.add("hidden");
};

function resetCustomCaptcha() {
  if (typeof grecaptcha !== "undefined") grecaptcha.reset();
  customCheck.classList.add("hidden");
  customBox.classList.remove("border-primary", "bg-primary/10");
  captchaContainer.classList.remove("border-red-500");
}

// auxiliares
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
    "asas",
  ];
  const PatronBasura = commonGibberish.some((p) => t.includes(p));
  const tieneVocales = /[aeiouáéíóúü]/i.test(t);
  const letrasRepetidas = /(.)\1{3,}/.test(t);
  const consonantesSeguidas = /[^aeiouáéíóúü\s]{5,}/i.test(t);
  return (
    !tieneVocales || letrasRepetidas || consonantesSeguidas || PatronBasura
  );
}

async function checkGrammar(text) {
  try {
    const response = await fetch("https://api.languagetool.org", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ text: text, language: "es" }),
    });
    const data = await response.json();
    return data.matches.length;
  } catch (e) {
    return 0;
  }
}

// validaciones

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailRegex.test(email) && email.length > 5;
  isValid
    ? errorElement.classList.add("hidden")
    : errorElement.classList.remove("hidden");
  isValid
    ? emailInput.classList.remove("border-red-500")
    : emailInput.classList.add("border-red-500");
  return isValid;
}

function validateNameSync() {
  const name = nameInput.value.trim();
  const isShort = name.length < 3;
  const isBadText = isGibberish(name);
  const isValid = !isShort && !isBadText;
  if (isValid) {
    nameErrorElement.classList.add("hidden");
    nameInput.classList.remove("border-red-500");
    return true;
  } else {
    const msg = isShort
      ? "El nombre debe tener al menos 3 caracteres."
      : "El nombre parece incoherente.";
    nameErrorElement.innerHTML = `${errorIcon} ${msg}`;
    nameErrorElement.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
  }
  return isValid;
}

function validateService() {
  const isValid = serviceSelect.value !== "";
  isValid
    ? serviceErrorElement.classList.add("hidden")
    : serviceErrorElement.classList.remove("hidden");
  isValid
    ? serviceSelect.classList.remove("border-red-500")
    : serviceSelect.classList.add("border-red-500");
  return isValid;
}

function validateProjectDetailsSync() {
  const details = projectDetails.value.trim();
  const isShort = details.length < 20;
  const isBadText = isGibberish(details);
  const isValid = !isShort && !isBadText;
  if (isValid) {
    projectErrorElement.classList.add("hidden");
    projectDetails.classList.remove("border-red-500");
    return true;
  } else {
    const msg = isShort
      ? "Tu texto es demasiado corto (mín. 20 caracteres)."
      : "El texto parece incoherente.";
    projectErrorElement.innerHTML = `${errorIcon} ${msg}`;
    projectErrorElement.classList.remove("hidden");
    projectDetails.classList.add("border-red-500");
  }
  return isValid;
}

// eventos
emailInput.addEventListener("input", validateEmail);
nameInput.addEventListener("input", validateNameSync);
serviceSelect.addEventListener("change", validateService);
projectDetails.addEventListener("input", validateProjectDetailsSync);

// envio del formulario
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Validaciones Locales
  const isEmailOk = validateEmail();
  const isNameOk = validateNameSync();
  const isServiceOk = validateService();
  const isDetailsOk = validateProjectDetailsSync();
  const captchaValue =
    typeof grecaptcha !== "undefined" ? grecaptcha.getResponse() : "";

  // Verificación de captcha
  if (!captchaValue) {
    captchaContainer.classList.add("border-red-500");
    captchaErrorMessage.classList.remove("hidden");
  }

  if (!isEmailOk || !isNameOk || !isServiceOk || !isDetailsOk || !captchaValue)
    return;

  // Bloqueo de botón y validaciones
  const btn = form.querySelector('button[type="submit"]');
  const originalContent = btn.innerHTML;
  btn.innerHTML = "Verificando texto...";
  btn.disabled = true;

  // Validar nombre
  const nameValue = nameInput.value.trim();

  if (isGibberish(nameValue)) {
    nameErrorElement.innerHTML = `${errorIcon} El nombre contiene caracteres inválidos o incoherentes.`;
    nameErrorElement.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    btn.innerHTML = originalContent;
    btn.disabled = false;
    return;
  }

  const nameErrors = await checkGrammar(nameValue);
  if (nameErrors > 0) {
    nameErrorElement.innerHTML = `${errorIcon} Por favor, escribe un nombre válido.`;
    nameErrorElement.classList.remove("hidden");
    nameInput.classList.add("border-red-500");
    btn.innerHTML = originalContent;
    btn.disabled = false;
    return;
  }
  // Validar mensaje
  if (isGibberish(projectDetails.value)) {
    projectErrorElement.innerHTML = `${errorIcon} El texto parece incoherente.`;
    projectErrorElement.classList.remove("hidden");
    projectDetails.classList.add("border-red-500");
    btn.innerHTML = originalContent;
    btn.disabled = false;
    return;
  }
  const detailsErrors = await checkGrammar(projectDetails.value);
  if (detailsErrors > 5) {
    projectErrorElement.innerHTML = `${errorIcon} El texto tiene demasiados errores ortográficos.`;
    projectErrorElement.classList.remove("hidden");
    projectDetails.classList.add("border-red-500");
    btn.innerHTML = originalContent;
    btn.disabled = false;
    return;
  }

  // Simulación de envío
  btn.innerHTML = "Enviando...";
  setTimeout(() => {
    alert("¡Formulario enviado con éxito!");
    btn.innerHTML = originalContent;
    btn.disabled = false;
    form.reset();
    resetCustomCaptcha();
  }, 2000);
});

// Reiniciar formulario

const resetBtn = document.getElementById("reset-form-btn");

function fullReset() {
  form.reset();
  resetCustomCaptcha();
  const errorMessages = [
    errorElement,
    nameErrorElement,
    serviceErrorElement,
    projectErrorElement,
    captchaErrorMessage,
  ];
  const inputs = [
    emailInput,
    nameInput,
    serviceSelect,
    projectDetails,
    captchaContainer,
  ];

  errorMessages.forEach((el) => el.classList.add("hidden"));
  inputs.forEach((el) => el.classList.remove("border-red-500"));

  console.log("Formulario reiniciado correctamente");
}

resetBtn.addEventListener("click", fullReset);

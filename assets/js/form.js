const emailInput = document.getElementById('email');
const errorElement = document.getElementById('email-error');

function validateEmail() {
  const email = emailInput.value.trim();
  
  // Expresión regular estricta para "business email"
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

// Eventos recomendados
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);
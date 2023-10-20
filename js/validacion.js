document.addEventListener('DOMContentLoaded', function () {
  const campoPassword = document.getElementById("password1");
  const campoPassword2 = document.getElementById("password2");
  const registroBtn = document.getElementById("registrarse");

  campoPassword.addEventListener("input", passwordCheck);
  campoPassword2.addEventListener("input", passwordCheck);

  function passwordCheck() {
      const password1 = campoPassword.value;
      const password2 = campoPassword2.value;

      if (password1 === password2 && password1.length >= 6) {
          campoPassword2.setCustomValidity('');
          campoPassword2.classList.remove('is-invalid');
          campoPassword2.classList.add('is-valid');
      } else {
          campoPassword2.setCustomValidity('Las contraseñas deben ser iguales y tener al menos 6 caracteres.');
          campoPassword2.classList.remove('is-valid');
          campoPassword2.classList.add('is-invalid');
      }
  }

  // Agregar más funciones de validación para otros campos si es necesario

  registroBtn.addEventListener('click', function (event) {
      const form = document.querySelector('form');
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
      }
      form.classList.add('was-validated');
  });
});

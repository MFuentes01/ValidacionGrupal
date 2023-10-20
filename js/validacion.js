document.addEventListener('DOMContentLoaded', function () {
    const campoNombre = document.getElementById("nombre");
    const campoApellido = document.getElementById("apellido");
    const campoCorreo = document.getElementById("email");
    const campoPassword = document.getElementById("password1");
    const campoPassword2 = document.getElementById("password2");
    const registroBtn = document.getElementById("registrarse");
    const form = document.querySelector('form');
    const checkboxTerminos = document.getElementById("checkboxTerminos");
    const textoTerminos = document.getElementById("textoTerminos");

    campoPassword.addEventListener("input", passwordCheck);
    campoPassword2.addEventListener("input", passwordCheck);

    function passwordCheck() {
        const password1 = campoPassword.value;
        const password2 = campoPassword2.value;
      
        if (password1 === password2 && (password1.length >= 6 )) {
          campoPassword2.setCustomValidity('');
          campoPassword2.classList.remove('is-invalid');
          campoPassword2.classList.add('is-valid');
        } else {
          campoPassword2.setCustomValidity('Las contraseñas deben ser iguales y tener al menos 6 caracteres.');
          campoPassword2.classList.remove('is-valid');
          campoPassword2.classList.add('is-invalid');
        }
      
        // Si ambos campos de contraseña están en blanco, quitar las clases de validación.
        if (password1 === '' && password2 === '') {
          campoPassword2.setCustomValidity('');
          campoPassword2.classList.remove('is-valid');
        }
      }
      
    registroBtn.addEventListener('click', function (event) {
      if (!form.checkValidity() || !checkboxTerminos.checked) {
        event.preventDefault();
        event.stopPropagation();
        textoTerminos.style.display = "block";
      } else {
        campoNombre.value = "";
        campoApellido.value = "";
        campoCorreo.value = "";
        campoPassword.value = "";
        campoPassword2.value = "";
        alert("Registro exitoso");
        // Restablecer los campos de contraseña
        campoPassword.value = "";
        campoPassword2.value = "";
        campoPassword2.setCustomValidity(''); // Restablecer la validación
        campoPassword2.classList.remove('is-valid');
        campoPassword2.classList.remove('is-invalid');
      }
      form.classList.add('was-validated');
    });

    checkboxTerminos.addEventListener("change", function () {
      if (checkboxTerminos.checked) {
        textoTerminos.style.display = "none";
        registroBtn.disabled = false;
      } else {
        textoTerminos.style.display = "block";
        registroBtn.disabled = true;
      }
    });
  });
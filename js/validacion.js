document.addEventListener('DOMContentLoaded', function () {
    const campoPassword = document.getElementById("password1");
    const campoPassword2 = document.getElementById("password2");
    const registroBtn = document.getElementById("registrarse");

    let password = "";
    let password2 = "";

    // Agregar evento 'input' para validar en tiempo real
    campoPassword.addEventListener("input", passwordCheck);
    campoPassword2.addEventListener("input", passwordCheck);

    function passwordCheck() {
        password = campoPassword.value;
        password2 = campoPassword2.value;

        if (password.length < 6 || password !== password2) {
            campoPassword2.classList.remove('is-valid');
            campoPassword2.classList.add('is-invalid');
        } else {
            campoPassword2.classList.remove('is-invalid');
            campoPassword2.classList.add('is-valid');
        }
    }

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
});



const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

function validar() {
    let valido = true;

    if (nombre.value.length < 3) {
        errorNombre.textContent = "Mínimo 3 caracteres";
        nombre.className = "invalido";
        valido = false;
    } else {
        errorNombre.textContent = "";
        nombre.className = "valido";
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value)) {
        errorCorreo.textContent = "Correo inválido";
        correo.className = "invalido";
        valido = false;
    } else {
        errorCorreo.textContent = "";
        correo.className = "valido";
    }

    const regexPass = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regexPass.test(password.value)) {
        errorPassword.textContent = "8 caracteres, número y símbolo";
        password.className = "invalido";
        valido = false;
    } else {
        errorPassword.textContent = "";
        password.className = "valido";
    }

    if (password.value !== confirmar.value || confirmar.value === "") {
        errorConfirmar.textContent = "No coinciden";
        confirmar.className = "invalido";
        valido = false;
    } else {
        errorConfirmar.textContent = "";
        confirmar.className = "valido";
    }

    if (edad.value < 18) {
        errorEdad.textContent = "Debes ser mayor de edad";
        edad.className = "invalido";
        valido = false;
    } else {
        errorEdad.textContent = "";
        edad.className = "valido";
    }

    enviar.disabled = !valido;
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", validar);
});

document.getElementById("formulario").addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulario validado correctamente ✅");
});

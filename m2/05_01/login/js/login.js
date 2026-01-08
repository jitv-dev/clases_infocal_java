const usuarioValido = "admin";
const contrasenaValida = "12345";

const formulario = document.getElementById("loginForm");
const areaMensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    const usuarioGuardado = localStorage.getItem("usuarioGuardado");
    if (usuarioGuardado) {
        usuario.value = usuarioGuardado;
        console.log("Usuario guardado:", usuarioGuardado);
    }

    // const btnOlvidar = document.getElementById("btnOlvidar");
    // btnOlvidar.addEventListener("click", function() {
    //     localStorage.removeItem("usuarioGuardado");
    //     usuario.value = "";
    //     console.log("Usuario eliminado del almacenamiento local");

    //     areaMensaje.innerHTML = `<div class="alert alert-info" role="alert">
    //         Usuario eliminado del almacenamiento local.
    //     </div>`;
    // });


    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        console.log("Inicio de sesión exitoso");
        console.log("Usuario:", usuario);

        localStorage.setItem("usuarioGuardado", usuario);
        console.log("Usuario guardado:", usuario);

        areaMensaje.innerHTML = `<div class="alert alert-success" role="alert">
            Inicio de sesión exitoso. ¡Bienvenido, ${usuario}!
        </div>`;

        formulario.reset();
    } else {
        console.log("Error de inicio de sesión");
        console.log("Usuario ingresado:", usuario);
        console.log("Contraseña ingresada:", contrasena);

        areaMensaje.innerHTML = `<div class="alert alert-danger" role="alert">
            Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.
        </div>`;
    }
});


console.log("Sistema inicializado");
console.log("Esperando interacción del usuario");
console.log("Usuario válido: " + usuarioValido);
console.log("Contraseña válida: " + contrasenaValida);

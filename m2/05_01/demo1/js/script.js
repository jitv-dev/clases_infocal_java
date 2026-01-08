let nombre = prompt("Por favor, ingresa tu nombre: ");

let mensajeElemento = document.getElementById("mensaje");

if(nombre && nombre.trim() !== "") {
    mensajeElemento.textContent = `¡Hola, ${nombre}! Bienvenid@ a nuestra página web.`;
} else {
    mensajeElemento.textContent = `¡Hola! Bienvenid@ a nuestra página web.`;
}
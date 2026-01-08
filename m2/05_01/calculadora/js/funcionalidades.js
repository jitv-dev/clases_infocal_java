//Variables globales
let pantallaValor = '0'; // Valor en pantalla
let operadorActual = null; // Operación actual (+, -, *, /)
let valorAnterior = null; // Valor guardado
let reiniciarPantalla = false; // Indica si hay que limpiar pantalla

//Obtener elementos de la pantalla
const pantalla = document.getElementById('pantalla');

//Actualizar pantalla
function actualizarPantalla() {
    pantalla.textContent = pantallaValor; // Muestra el valor en el HTML
}

//Funcion numero
function agregarNumero(numero) {
    // Si hay que reiniciar, empieza número nuevo
    if (reiniciarPantalla) {
        pantallaValor = numero;
        reiniciarPantalla = false;
    } else {
        // Si es 0 inicial, lo reemplaza
        if (pantallaValor === '0' && numero !== '.') {
            pantallaValor = numero;
        } else {
            // Evita doble punto
            if (numero === '.' && pantallaValor.includes('.')) {
                return;
            }
            pantallaValor += numero;
        }
    }
    actualizarPantalla();
}

//Funcion operador
function agregarOperador(op) {
    // Si hay operación pendiente, calcula primero
    if (valorAnterior !== null && operadorActual !== null && !reiniciarPantalla) {
        calcular();
    }

    valorAnterior = parseFloat(pantallaValor); // Guarda el número
    operadorActual = op; // Guarda el operador
    reiniciarPantalla = true; // Prepara para limpiar pantalla
}

//Resultados
function calcular() {
    // Si no hay nada que calcular, sale
    if (operadorActual === null || reiniciarPantalla) {
        return;
    }

    const valorActual = parseFloat(pantallaValor);
    let resultado;

    // Realiza la operación
    switch (operadorActual) {
        case '+':
            resultado = valorAnterior + valorActual;
            break;
        case '-':
            resultado = valorAnterior - valorActual;
            break;
        case '*':
            resultado = valorAnterior * valorActual;
            break;
        case '/':
            // Evita dividir por 0
            if (valorActual === 0) {
                alert('No se puede dividir por cero');
                return;
            } else {
                resultado = valorAnterior / valorActual;
                break;
            }
        default:
            return;
    }

    pantallaValor = resultado.toString();
    operadorActual = null;
    valorAnterior = null;
    reiniciarPantalla = true;
    actualizarPantalla();
}

//Limpiar pantalla
function limpiar() {
    pantallaValor = '0';
    operadorActual = null;
    valorAnterior = null;
    reiniciarPantalla = false;
    actualizarPantalla();
}

//Borrar
function borrar() {
    // Borra último dígito o vuelve a 0
    if (pantallaValor.length > 1) {
        pantallaValor = pantallaValor.slice(0, -1);
    } else {
        pantallaValor = '0';
    }
    actualizarPantalla();
}

//Soporte de teclado
window.addEventListener('keydown', function (event) {
    const key = event.key;
    
    // Números
    if (key >= '0' && key <= '9' || key === '.') {
        agregarNumero(key);
    } 
    // Operadores
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        agregarOperador(key);
    } 
    // Enter o Igual
    else if (key === 'Enter' || key === '=') {
        calcular();
    } 
    // Escape (Limpiar)
    else if (key === 'Escape') {
        limpiar();
    } 
    // Borrar
    else if (key === 'Backspace') {
        borrar();
    }
});
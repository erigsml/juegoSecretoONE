
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

//declarar funcion tradicional
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no aceptó
        if (numeroUsuario > numeroSecreto) {
            asignarTexto('p', 'El número secreto es menor');
        } else {
            asignarTexto('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroAleatorio() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTexto('p', 'Ya se sortearon todos los numeros posibles.');
    } else {
        //condiciones si está el número generado en la lista    
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTexto('h1', 'Juego del número secreto Sofía y Erick');
    asignarTexto('p', `Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números
    //Generar número aleatorio
    //Número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

//llamadas a funciones
condicionesIniciales();

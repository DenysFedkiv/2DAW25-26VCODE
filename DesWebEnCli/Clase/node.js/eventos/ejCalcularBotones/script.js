let pNumeros = document.getElementById("nums");

let operador1 = 0;
let operador2 = 0;
let operacion = "";
let n2 = false;
let r = false;

function numero(num) {
    if(r) {
        pNumeros.innerText = "";
        operador1 = 0;
        operador2 = 0;
        r = false;
    }
    if(!n2) {
        operador1 *= 10;
        operador1 += parseInt(num.value);
        pNumeros.innerText = operador1;
    } else {
        operador2 *= 10;
        operador2 += parseInt(num.value);
        pNumeros.innerText = operador1 + " " + operacion + " " + operador2;
    }

}

function operador(op) {
    if(!n2) {
        operacion = op.value;
        n2 = true;
        pNumeros.innerText = operador1 + " " + operacion;
    }
}

function calcular() {

    if(n2 && operador2.length != 0) {
        if(operacion == "+") {
            pNumeros.innerText = operador1 + operador2;
        }
        else if(operacion == "-") {
            pNumeros.innerText = operador1 - operador2;
        }
        else if(operacion == "*") {
            pNumeros.innerText = operador1 * operador2;
        }
        else if(operacion == "/") {
            pNumeros.innerText = operador1 / operador2;
        }
        n2 = false;
        r = true;
    }
}

// function numero(num) {
//     if(r) {
//         pNumeros.innerText = "";
//         r = false;
//     }
//     if(num.value == 1) {
//         pNumeros.innerText += 1;
//     }
//     else if(num.value == 2) {
//         pNumeros.innerText += 2;
//     }
//     else if(num.value == 3) {
//         pNumeros.innerText += 3;
//     }
//     else if(num.value == 4) {
//         pNumeros.innerText += 4;
//     }
//     else if(num.value == 5) {
//         pNumeros.innerText += 5;
//     }
//     else if(num.value == 6) {
//         pNumeros.innerText += 6;
//     }
//     else if(num.value == 7) {
//         pNumeros.innerText += 7;
//     }
//     else if(num.value == 8) {
//         pNumeros.innerText += 8;
//     }
//     else if(num.value == 9) {
//         pNumeros.innerText += 9;
//     }
//     else if(num.value == 0) {
//         pNumeros.innerText += 0;
//     }
// }

// function operador(op) {
//     if(!n2) {
//         operacion = op.value;
//         pNumeros.innerText += " " + operacion + " ";
//         n2 = true;
//     }
// }

// function calcular() {
//     let numeros = pNumeros.innerText.split(operacion);

//     if(n2 && numeros[1].length != 0) {
//         if(operacion == "+") {
//             pNumeros.innerText = numeros[0] + numeros[1];
//         }
//         else if(operacion == "-") {
//             pNumeros.innerText = numeros[0] - numeros[1];
//         }
//         else if(operacion == "*") {
//             pNumeros.innerText = numeros[0] * numeros[1];
//         }
//         else if(operacion == "/") {
//             pNumeros.innerText = numeros[0] / numeros[1];
//         }
//         n2 = false;
//         r = true;
//     }
// }
console.log("Hola Mundo!");

let nombre = "Jose";
var nombre2 = "Jose";
const edad = 18;
nombre = 12;
console.log(nombre);
//edad = 10;
console.log(edad);

console.log("");

function calcular (num1, num2, operacion) {
    if (operacion == "+") return num1 + num2;
    else if (operacion == "-") return num1 - num2;
    else if (operacion == "*") return num1 * num2;
    else if (operacion == "/") return num1 / num2;
    else return "Operacion no valida";
}

console.log(calcular(12, 10, "+"));

console.log(calcular(12, 10, "-"));

console.log(calcular(12, 10, "*"));

console.log(calcular(12, 10, "/"));

alert(calcular(12, 10, "+"));

alert(calcular(12, 10, "-"));

alert(calcular(12, 10, "*"));

alert(calcular(12, 10, "/"));

let userInput = prompt("Introduce un numero", "No escrito nada");
alert(userInput);

let confirmacion = confirm("Quiere continuar");

let btnNum1;
let btnNum2;

function btnSuma() {
    btnNum1 = parseInt(prompt("Introduce numero 1"));
    btnNum2 = parseInt(prompt("Introduce numero 2"));
    alert(btnNum1 + btnNum2);
}

function btnResta() {
    btnNum1 = parseInt(prompt("Introduce numero 1"));
    btnNum2 = parseInt(prompt("Introduce numero 2"));
    alert(btnNum1 - btnNum2);
}

function btnMultiplicacion() {
    btnNum1 = parseInt(prompt("Introduce numero 1"));
    btnNum2 = parseInt(prompt("Introduce numero 2"));
    alert(btnNum1 * btnNum2);
}

function btnDivision() {
    btnNum1 = parseInt(prompt("Introduce numero 1"));
    btnNum2 = parseInt(prompt("Introduce numero 2"));
    alert(btnNum1 / btnNum2);
}
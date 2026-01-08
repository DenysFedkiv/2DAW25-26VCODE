function imprimir(mensaje) {
    console.log("dMensaje " + mensaje);
}

imprimir();
imprimir(5);
imprimir("nombre");

function suma(num1, num2) {
    console.log(arguments);
    return num1 + num2;
}

console.log(suma(10, 20));
console.log(suma(10, "20i"));
console.log(suma());

function muchosVariables(...numeros) {
    for(numero in numeros) {
        console.log(numero);
    }
}

muchosVariables(1, 2, 3, 5, 10);
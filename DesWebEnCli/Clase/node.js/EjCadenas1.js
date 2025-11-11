const prompt = require("prompt-sync")();
let nombreCompleto = prompt("Introduce su nombre completo: ");
nombreCompleto = nombreCompleto.trim();
let nombreCompletoMay = nombreCompleto.toUpperCase();
let nombreCompletoMin = nombreCompleto.toLowerCase();

console.log(nombreCompleto);
console.log(nombreCompletoMay);
console.log(nombreCompletoMin);

let email = prompt("Introduce su email: ");
let nombreUsuario;
let dominio;

if(email.includes("@")) {
    nombreUsuario = email.split("@")[0];
    dominio = email.split("@")[1];
    console.log(nombreUsuario);
    console.log(dominio);
} else {
    console.log("Error email incorecto");
}


let numeroTel = prompt("Introduce su numero: ");
numeroTel = numeroTel.replace("-", " ");
numeroTel = numeroTel.replace("-", " ");
numeroTel = "+34 ".concat(numeroTel);
console.log(numeroTel);

let url = prompt("Introduce una URL");
console.log(url.startsWith("https://"));
let protocolo = url.substring("https://".length, url.indexOf("."));
let link = url.substring(url.indexOf(".") + 1);
console.log(protocolo);
console.log(link);
console.log(url.endsWith(".com"));

let palabras = prompt("Introduce 4 palabras separadas por coma: ");
let palabrasArr = palabras.split(",");
console.log(palabrasArr[1].toUpperCase());
console.log(palabrasArr[palabrasArr.length-1].length);
let palabrasGui = "";
for(let i = 0; i < palabrasArr.length; i++) {
    palabrasGui += palabrasArr[i];
    if(i < palabrasArr.length - 1) {
        palabrasGui += "-";
    }
}
console.log(palabrasGui);
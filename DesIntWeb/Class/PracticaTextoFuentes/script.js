let e1 = document.getElementById("enlaceInicio");
let e2 = document.getElementById("enlaceViajes");
let e3 = document.getElementById("enlaceGaleria");

e1.style.border = "1px solid black";
e2.style.border = "2px solid black";
e3.style.border = "4px solid black";

let parrafos = document.getElementsByClassName("parrJs");

for(let parr of parrafos) {
    parr.style.color = "tomato";
}

let enlaces = document.querySelectorAll("footer ul li a");

for(let i = 0; i < enlaces.length; i++) {
    enlaces[i].innerText = "Este enlace ha sido mofificado " + enlaces[i].innerText + " este es el enlace " + (i + 1);
}
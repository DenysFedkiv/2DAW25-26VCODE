let edad = prompt("Introduce su edad");

let precioProdInicial = prompt("Introduce precio de producto");

if(edad < 18) alert("Precio inicial: " + precioProdInicial + " | Descuento: " + (precioProdInicial * 0.15) + " | Precio final: " + (precioProdInicial - precioProdInicial * 0.15));
else if(edad < 65) alert("Precio inicial: " + precioProdInicial + " | Descuento: " + (precioProdInicial * 0) + " | Precio final: " + (precioProdInicial - precioProdInicial * 0));
else if(edad >= 65) alert("Precio inicial: " + precioProdInicial + " | Descuento: " + (precioProdInicial * 0.2) + " | Precio final: " + (precioProdInicial - precioProdInicial * 0.2));
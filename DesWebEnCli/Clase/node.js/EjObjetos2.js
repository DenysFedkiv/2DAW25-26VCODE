const prompt = require("prompt-sync")();

let libro = {"titulo" : "Libro1", "ISBN" : "240-550-231", "anyo" : "2012"};
console.log(libro.titulo);
console.log(libro["ISBN"]);
libro.disponible = true;
console.log(libro);

libro["titulo"] = prompt("Inroduce titulo nuevo: ");
libro["autor"] = {"nombre" : prompt("Introduce nombre de autor: "), "nacionalidad" : prompt("Introduce nacionalidad de autor: ")};
console.log(libro.autor.nombre);
console.log(Object.keys(libro));
console.log(Object.values(libro.autor));

let biblioteca = [];

let titulo = prompt("Introduce titulo");
let ISBN = prompt("Introduce ISBN");
let anyo = prompt("Introduce anyo");
let autor = {};
autor["nombre"] = prompt("Introduce nombre de autor");
autor["nacionalidad"] = prompt("Introduce nacionalidad de autor");

let libro1 = {"titulo" : titulo, "ISBN" : ISBN, "anyo" : anyo, "autor" : autor}

titulo = prompt("Introduce titulo");
ISBN = prompt("Introduce ISBN");
anyo = prompt("Introduce anyo");
autor = {};
autor["nombre"] = prompt("Introduce nombre de autor");
autor["nacionalidad"] = prompt("Introduce nacionalidad de autor");

let libro2 = {"titulo" : titulo, "ISBN" : ISBN, "anyo" : anyo, "autor" : autor}

titulo = prompt("Introduce titulo");
ISBN = prompt("Introduce ISBN");
anyo = prompt("Introduce anyo");
autor = {};
autor["nombre"] = prompt("Introduce nombre de autor");
autor["nacionalidad"] = prompt("Introduce nacionalidad de autor");

let libro3 = {"titulo" : titulo, "ISBN" : ISBN, "anyo" : anyo, "autor" : autor}
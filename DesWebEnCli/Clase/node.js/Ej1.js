const prompt = require('prompt-sync')();

let pedido = ["pizza", "ensalada", "refresco"];
let platoNuevo = prompt("Introduce plato nuevo: ");
pedido.push(platoNuevo);
console.log(pedido);

pedido.shift();
pedido.unshift("pan de ajo");
console.log(pedido);
console.log(pedido.length);

let indice = prompt("Introduce indice: ");
platoNuevo = prompt("Introduce plato nuevo: ");
pedido[indice] = platoNuevo;
pedido.splice(1, 0, "postre");
pedido.pop();
pedido.pop();
console.log(pedido);

let platoBuscar = prompt("Introduce plato a buscar: ");
if(pedido.includes(platoBuscar)) {
    console.log("El plato esta en el pedido en posicion " + pedido.indexOf(platoBuscar));
} else {
    console.log("El plato no esta en el pedido");
}

let pedidoCopia = [...pedido];
pedidoCopia.push("cafe");
console.log(pedido);

let pedidoCompleto = [["pizza", 12], ["bebida", 3]];
platoNuevo = prompt("Introduce un plato: ");
let precio = parseInt(prompt("Introduce precio de plato: "));
pedidoCompleto.push([platoNuevo, precio]);
console.log("Precio de segundo plato es " + pedidoCompleto[1][1]);
pedidoCompleto[0][0] = "lomo";
console.log(pedidoCompleto);

let entrantes = [];
platoNuevo = prompt("Introduce un entrante: ");
entrantes.push(platoNuevo);
platoNuevo = prompt("Introduce un entrante: ");
entrantes.push(platoNuevo);
let principales = [];
platoNuevo = prompt("Introduce un plato principal: ");
principales.push(platoNuevo);
platoNuevo = prompt("Introduce un plato principal: ");
principales.push(platoNuevo);
let menuCompleto = [...entrantes, ...principales];
let ultimoEle = menuCompleto.pop();
console.log(menuCompleto);
console.log(ultimoEle);
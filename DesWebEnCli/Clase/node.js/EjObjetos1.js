const prompt = require("prompt-sync")();

let jugadores = [];
let jugador1 = {"nombre" : prompt("Introduce nombre de jugador "), "dorsal" : prompt("Introduce dorsal "), "posicion" : prompt("Introduce posicion "), "numeroDeGoles " : prompt("Introduce numero de goles "), "numeroDeTrajetas" : prompt("Introduce numero de tarjetas ")};
let jugador2 = {"nombre" : prompt("Introduce nombre de jugador "), "dorsal" : prompt("Introduce dorsal "), "posicion" : prompt("Introduce posicion "), "numeroDeGoles " : prompt("Introduce numero de goles "), "numeroDeTrajetas" : prompt("Introduce numero de tarjetas ")};
let jugador3 = {"nombre" : prompt("Introduce nombre de jugador "), "dorsal" : prompt("Introduce dorsal "), "posicion" : prompt("Introduce posicion "), "numeroDeGoles " : prompt("Introduce numero de goles "), "numeroDeTrajetas" : prompt("Introduce numero de tarjetas ")};
jugadores.push(jugador1);
jugadores.push(jugador2);
jugadores.push(jugador3);
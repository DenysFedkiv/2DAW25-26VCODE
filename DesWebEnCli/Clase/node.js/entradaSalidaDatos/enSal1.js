const nombre = document.getElementById("nombre");
const pos = document.getElementById("posicion");
const gol = document.getElementById("goles");
const resultado = document.getElementById("resultado");

let jugadores = [];
let jugador = ["jugadorP", "posP", 10];

jugadores.push(jugador);

function anadir() {
    jugadores.push([nombre.value, pos.value, parseInt(gol.value)]);
}

function mostrar() {
    let cadena = "<ul>";
    for(let indice in jugadores) {
        cadena += `<li>El nombre es ${jugadores[indice][0]} posicion ${jugadores[indice][1]} goles ${jugadores[indice][2]}
        <button onclick="eliminar(${indice})">Borar</button>
        </li>`;
    }
    cadena += "</ul>";
    resultado.innerHTML = cadena;
}

function eliminar(num) {
    jugadores.splice(num, 1);
    mostrar();
}
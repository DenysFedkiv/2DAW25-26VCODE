let addButton = document.getElementById("addButton");
let display = document.getElementById("display");

let jugadores = [];

function mostrar() {
    display.innerHTML = "";

    let lista = document.createElement("ul");

    let totalJug = document.createElement("li");
    totalJug.innerText = "Numero total de jugadores: " + jugadores.length;

    let totalEqui = document.createElement("li");
    
    let equipos = [];
    
    for(let jugador of jugadores) {
        if(!equipos.includes(jugador["equipo"])) {
            equipos.push(jugador["equipo"]);
        }
    }

    totalEqui.innerText = "Numero total de equipos: " + equipos.length;

    let totalGoles = document.createElement("li");
    totalGoles.innerText = "0";

    for(let jugador of jugadores) {
        totalGoles.innerText = parseInt(totalGoles.innerText) + parseInt(jugador["goles"]);
    }
    totalGoles.innerText = "Total goles: " + totalGoles.innerText;

    let totalAmar = document.createElement("li");
    totalAmar.innerText = "0";

    for(let jugador of jugadores) {
        totalAmar.innerText = parseInt(totalAmar.innerText) + parseInt(jugador["amarillas"]);
    }
    totalAmar.innerText = "Total tarjetas amarillas: " + totalAmar.innerText;

    let totalRoj = document.createElement("li");
    totalRoj.innerText = "0";

    for(let jugador of jugadores) {
        totalRoj.innerText = parseInt(totalRoj.innerText) + parseInt(jugador["rojas"]);
    }
    totalRoj.innerText = "Total tarjetas rojas: " + totalRoj.innerText;

    lista.append(totalJug);
    lista.append(totalEqui);
    lista.append(totalGoles);
    lista.append(totalAmar);
    lista.append(totalRoj);

    display.append(lista);

    let listaEqui = document.createElement("ul");

    for(let equipo of equipos) {
        let liEquipo = document.createElement("li");

        liEquipo.innerText = "Equipo: " + equipo;

        let listaJug = document.createElement("ul");
        for(let i in jugadores) {
            if(equipo == jugadores[i]["equipo"]) {
                let liJug = document.createElement("li");

                liJug.innerText = "Nombre: " + jugadores[i]["nombre"] + " | Goles: " + jugadores[i]["goles"] + " | Amarillas: " + jugadores[i]["amarillas"] + " | Rojas: " + jugadores[i]["rojas"] + " | ";

                let borrar = document.createElement("button");

                borrar.innerText = "Borrar";

                borrar.id = i;

                borrar.addEventListener("click", borrarJug);

                liJug.append(borrar)

                listaJug.append(liJug);
            }
        }

        liEquipo.append(listaJug);

        listaEqui.append(liEquipo);
    }

    display.append(listaEqui);
}

function addJugador() {
    let equipo = document.getElementById("equipo").value;
    let nombre = document.getElementById("nombre").value;
    let goles = document.getElementById("goles").value;
    let amarillas = document.getElementById("amarillas").value;
    let rojas = document.getElementById("rojas").value;

    jugadores.push({"equipo" : equipo, "nombre" : nombre, "goles" : goles, "amarillas" : amarillas, "rojas" : rojas});

    mostrar();
}

function borrarJug(btn) {
    jugadores.splice(parseInt(btn.target.id), 1);

    mostrar();
}

addButton.addEventListener("click", addJugador);
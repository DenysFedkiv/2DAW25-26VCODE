const prompt = require("prompt-sync")();

let opcion = 1;

let poquemones = [];

while(opcion != 0) {
    console.log("0) Salir");
    console.log("1) Introducir un poquemon ");
    console.log("2) Modificar poquemon ");
    console.log("3) Eliminar poquemon ");
    console.log("4) Mostrar todos ");

    opcion = prompt("Elige opcion ");

    if(opcion == 1) {
        let nombre = prompt("Introduce nombre ");
        let raza = prompt("Introduce raza ");
        let poder = prompt("Introduce poder ");
        let vida = prompt("Introduce vida ");

        let poquemon = {"nombre" : nombre, "raza" : raza, "poder" : poder, "vida" : vida};

        poquemones.push(poquemon);
    }
    else if(opcion == 2) {
        let nombreM = prompt("Introduce nombre de poquemon que quieres cambiar ");

        for(let poquemonM of poquemones) {
            console.log(poquemonM);
            if(poquemonM["nombre"] == nombreM) {
                let opcionM = 1;
                
                while(opcionM != 0) {
                    console.log("Nombre: " + poquemonM["nombre"] + " | Raza: " + poquemonM["raza"] + " | Poder: " + poquemonM["poder"] + " | Vida: " + poquemonM["vida"]);
                    console.log("0) Salir");
                    console.log("1) Cambiar raza ");
                    console.log("2) Cambiar poder ");
                    console.log("3) Cambiar vida ");
    
                    opcionM = prompt("Elige opcion ");

                    if(opcionM == 1) {
                        let razaM = prompt("Introduce nueva raza ");
                        poquemonM["raza"] = razaM;
                    }
                    else if(opcionM == 2) {
                        let poderM = prompt("Introduce nuevo poder ");
                        poquemonM["poder"] = poderM;
                    }
                    else if(opcionM == 3) {
                        let vidaM = prompt("Introduce nueva vida ");
                        poquemonM["vida"] = vidaM;
                    }
                    else if(opcionM == 0) {
                        console.log("Fin de modificacion");
                        break;
                    }
                    else {
                        console.log("Opcion incorecta");
                    }
                }
                break;
            }
            else {
                console.log("Poquemon no existe");
            }
        }

    }
    else if(opcion == 3) {
        let nombreM = prompt("Introduce nombre de poquemon que quieres cambiar ");

        for(let poquemonM of poquemones) {
            if(poquemonM["nombre"] == nombreM) {
                poquemones.splice(poquemones.indexOf(nombreM), 1);
                console.log(nombreM + " eliminado");
                break;
            }
            else {
                console.log("Poquemon no existe");
            }
        }
    }
    else if(opcion == 4) {
        if(poquemones.length != 0) {
            for(let i = 0; i < poquemones.length; i++) {
                let poq = poquemones[i];
                console.log("Nombre: " + poq["nombre"] + " | Raza: " + poq["raza"] + " | Poder: " + poq["poder"] + " | Vida: " + poq["vida"]);
                if(poquemones.length != 1) {                    
                    if(i != poquemones.length - 1) {
                        prompt("Pulsa enter para continuar ");
                    }
                }
            }
        }
    }
    else if(opcion == 0) {
        console.log("Fin de programa");
    }
    else {
        console.log("Opcion incorecta!!!");
    }
}
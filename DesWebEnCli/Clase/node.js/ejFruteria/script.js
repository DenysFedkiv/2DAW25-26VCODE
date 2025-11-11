let frutas = [];
let frutasVendidas = [];

let display = document.getElementById("display");

function mostrar() {
    display.innerHTML = "";
    
    let lista = document.createElement("ul");
    
    lista.innerHTML += "<li>Tipo | Precio/kg | kg disponible</li>";
    
    for(let fruta of frutas) {
        lista.innerHTML += "<li>" + fruta["tipo"] + " | " + fruta["precio"] + "/kg | " + fruta["disponible"] + "kg</li>";
    }
    
    display.append(lista);
}

function add() {
    display.innerHTML = "";

    let form = document.createElement("form");

    let tipo = document.createElement("input");
    tipo.setAttribute("type", "text");
    tipo.setAttribute("name", "tipo");
    tipo.setAttribute("id", "tipo");

    let lTipo = document.createElement("label");
    lTipo.setAttribute("for", "tipo");
    lTipo.innerText = "Tipo "
    
    let precio = document.createElement("input");
    precio.setAttribute("type", "text");
    precio.setAttribute("name", "precio");
    precio.setAttribute("id", "precio");
    
    let lPrecio = document.createElement("label");
    lPrecio.setAttribute("for", "precio");
    lPrecio.innerText = "Precio/kg ";
    
    let disponible = document.createElement("input");
    disponible.setAttribute("type", "number");
    disponible.setAttribute("min", "0");
    disponible.setAttribute("name", "disponible");
    disponible.setAttribute("id", "disponible");
    
    let lDisponible = document.createElement("label");
    lDisponible.setAttribute("for", "disponible");
    lDisponible.innerText = "kg disponible ";

    let button = document.createElement("button");
    button.setAttribute("onclick", "cerrarAdd()");
    button.innerText = "Añadir";


    form.append(lTipo);
    form.append(tipo);
    form.innerHTML += "<br>";
    form.append(lPrecio);
    form.append(precio);
    form.innerHTML += "<br>";
    form.append(lDisponible);
    form.append(disponible);
    form.innerHTML += "<br>";
    form.append(button);

    display.append(form)
}

function cerrarAdd() {
    let tipo = document.getElementById("tipo");
    let precio = document.getElementById("precio");
    let disponible = document.getElementById("disponible");

    let fruta = {"tipo" : tipo.value, "precio" : precio.value, "disponible" : disponible.value};
    
    frutas.push(fruta);

    mostrar();
}

function comprar() {
    display.innerHTML = "";

    let lista = document.createElement("ul");
    
    lista.innerHTML += "<li>Tipo | Precio/kg | kg disponible</li>";
    
    for(let i in frutas) {
        if(parseInt(frutas[i]["disponible"]) > 0) {
            lista.innerHTML += "<li>" + frutas[i]["tipo"] + " | " + frutas[i]["precio"] + "/kg | " + frutas[i]["disponible"] + "kg<br><input id='kgCompra" + i + "' type='number' min='1'><button onclick='comprarF(" + i + ")'>Comprar</button></li>";
        }
    }
    
    display.append(lista);
}

function comprarF(index) {
    let kgCompra = parseInt(document.getElementById("kgCompra" + index).value);

    if(parseInt(frutas[index]["disponible"]) >= kgCompra) {
        let fruta = {"tipo" : frutas[index]["tipo"], "precio" : frutas[index]["precio"], "vendido" : kgCompra};
    
        frutasVendidas.push(fruta);

        frutas[index]["disponible"] -= kgCompra;

        mostrar();
    }
    else {
        alert("Numero de unidades no disponible");
    }
}

function datos() {
    display.innerHTML = "";

    let lista = document.createElement("ul");
    
    lista.innerHTML += "<li>Tipos de frutas: " + frutas.length + "</li>";
    
    let kgTotal = 0;
    
    for(let fruta of frutas) {
        kgTotal += parseInt(fruta["disponible"]);
    }
    
    lista.innerHTML += "<li>Disponible de frutas: " + kgTotal + "kg</li>";
    
    let totalVendido = 0;
    
    for(let fruta of frutasVendidas) {
        totalVendido += fruta["vendido"];
    }
    
    lista.innerHTML += "<li>Vendido de frutas: " + totalVendido + "kg</li>";

    let totalMoney = 0;
    
    for(let fruta of frutasVendidas) {
        totalMoney += parseInt(fruta["vendido"]) * parseFloat(fruta["precio"]);
    }
    
    lista.innerHTML += "<li>Dinero recaudado de frutas: " + totalMoney + "€</li>";

    let mediaPrecio = 0;
    
    for(let fruta of frutas) {
        mediaPrecio += parseFloat(fruta["precio"]);
    }
    
    mediaPrecio = mediaPrecio / frutas.length;

    lista.innerHTML += "<li>Media de precio de frutas: " + mediaPrecio.toFixed(2) + "€</li>";
    
    display.append(lista);
}
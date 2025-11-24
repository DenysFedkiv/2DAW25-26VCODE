const crearPedidoBtn = document.getElementById("crearPedido");
const mostrarPedidosBtn = document.getElementById("mostrarPedidos");
const mostrarInventarioBtn = document.getElementById("mostrarInventario");
const statsGeneralesBtn = document.getElementById("statsGenerales");
const statsBeneficiosBtn = document.getElementById("statsBeneficios");

let pedidos = [];
let inventario = [];
const tamanoPrecio = {"small" : 2.50, "medium" : 3.00, "large" : 3.50};
const tipoPrecio = {"solo" : 0, "espresso" : 0.50, "latte" : 0.80, "macchiato" : 1.00};

const pedidosCont = document.getElementById("pedidos");
const inventarioCont = document.getElementById("inventario");
const statsGeneralesCont = document.getElementById("statsGeneralesCont");
const statsBeneficiosCont = document.getElementById("statsBeneficiosCont");
const formCrearPedido = document.getElementById("formCrearPedido");


let addPedidoBtn = document.getElementById("btnCrearPedido");

for(let toppingCheck of document.querySelectorAll(".toppingsCrear")) {
    toppingCheck.addEventListener("click", limitToppings);
}

function limitToppings() {
    let toppingsA = document.querySelectorAll(".toppingsCrear");
    

    for(let check of toppingsA) {
        check.removeAttribute("disabled");
    }
    
    contador = 0;

    for(let check of toppingsA) {
        if(check.checked) {
            contador += 1;
        }
    }

    if(contador == 5) {
        for(let check of toppingsA) {
            if(!check.checked) {
                check.setAttribute("disabled", true);
            }
        }
    }
}

limitToppings();

function crearPedidoForm() {
    if(formCrearPedido.style.display == "none") {
        resetDisplay();
        formCrearPedido.style.display = "block";
    }
    else {
        resetDisplay();
    }
}

crearPedidoBtn.addEventListener("click", crearPedidoForm);

function resetDisplay() {
    pedidosCont.style.display = "none";
    inventarioCont.style.display = "none";
    statsGeneralesCont.style.display = "none";
    statsBeneficiosCont.style.display = "none";
    formCrearPedido.style.display = "none";
}

function crearPedido() {
    const tamano = document.getElementById("tamanoCrear").value;
    const tipo = document.getElementById("tipoCrear").value;
    
    id = pedidos.length;
    
    let toppings = [];
    let toppingsAx = document.querySelectorAll(".toppingsCrear:checked");
    
    for(let top of toppingsAx) {
        toppings.push(top.value);
    }
    
    let pedido = {"id" : id, "tamano" : tamano, "tipo" : tipo, "toppings" : toppings}
    
    pedidos.push(pedido);
}

addPedidoBtn.addEventListener("click", crearPedido);

function mostrarPedidos() {
    if(pedidosCont.style.display == "none") {
        resetDisplay();
        pedidosCont.style.display = "block";
    }
    else {
        resetDisplay();
    }

    pedidosCont.innerHTML = "";

    for(let pedido of pedidos) {
        let finalizar = document.createElement("button");
        
        finalizar.dataset.id = pedido["id"];
        finalizar.addEventListener("click", finalizarPedido);
        finalizar.innerText = "Finalizar";

        let p = document.createElement("p");

        let tops = "";

        for(let top of pedido["toppings"]) {
            tops += top + ", ";
        }

        tops = tops.substring(0, tops.length-2);

        p.innerText = "Tamaño: " + pedido["tamano"] + " | Tipo: " + pedido["tipo"] + " | Topping: " + tops + " | ";

        p.append(finalizar);
        pedidosCont.append(p);
    }
}

function mostrarInventario() {
    if(inventarioCont.style.display == "none") {
        resetDisplay();
        inventarioCont.style.display = "block";
    }
    else {
        resetDisplay();
    }

    inventarioCont.innerHTML = "";

    for(let pedido of inventario) {
        let finalizar = document.createElement("button");
        
        finalizar.dataset.id = pedido["id"];
        finalizar.addEventListener("click", finalizarPedido);
        finalizar.innerText = "Finalizar";

        let p = document.createElement("p");

        let tops = "";

        for(let top of pedido["toppings"]) {
            tops += top + ", ";
        }

        tops = tops.substring(0, tops.length-2);

        p.innerText = "Tamaño: " + pedido["tamano"] + " | Tipo: " + pedido["tipo"] + " | Topping: " + tops + " | Precio: " + pedido["precio"] + "€";

        p.append(finalizar);
        inventarioCont.append(p);
    }
}

function finalizarPedido(e) {
    let div = document.createElement("div");
    if(e.currentTarget.dataset.id.includes("y")) {
        div = document.getElementById("finalizarConfirmacion");
        div.remove();


        console.log(e.currentTarget.dataset.id);
        console.log(pedidos[e.currentTarget.dataset.id.substring(0, 1)]);

        let pedido = pedidos[e.currentTarget.dataset.id.substring(0, 1)];

        console.log(pedido);

        let precio = 0;

        precio += tamanoPrecio[pedido["tamano"]];
        precio += tipoPrecio[pedido["tipo"]];

        if(pedido["toppings"].length < 3) {
            precio += 0.50;
        }
        else if(pedido["toppings"].length <= 5) {
            precio += 1;
        }

        invent = {"tamano" : pedido["tamano"], "tipo" : pedido["tipo"], "toppings" : pedido["toppings"], "precio" : precio};

        inventario.push(invent);

        pedidos.splice(e.currentTarget.dataset.id.substring(0, 1), 1);

        for(let i = e.currentTarget.dataset.id.substring(0, 1); i < pedidos.length; i++) {
            pedidos[i]["id"] -= 1;
        }

        mostrarPedidos();
    }
    else if(e.currentTarget.dataset.id.includes("n")) {
        div = document.getElementById("finalizarConfirmacion");
        div.remove();
    }
    else {
        div.id = "finalizarConfirmacion";
    
        let titulo = document.createElement("h1");
        titulo.innerText = "¿Quieres finalizar el pedido?";
    
        let siBtn = document.createElement("button");
        siBtn.innerText = "Confirmar";
        siBtn.dataset.id = e.currentTarget.dataset.id + "y";
        siBtn.addEventListener("click", finalizarPedido);
        
        let noBtn = document.createElement("button");
        noBtn.innerText = "Cancelar";
        noBtn.dataset.id = e.currentTarget.dataset.id + "n";
        noBtn.addEventListener("click", finalizarPedido);
    
        div.append(titulo);
        div.append(siBtn);
        div.append(noBtn);
    
        document.body.append(div);
    }
}

function statsGenerales() {
    if(statsGeneralesCont.style.display == "none") {
        resetDisplay();
        statsGeneralesCont.style.display = "block";
    }
    else {
        resetDisplay();
    }

    statsGeneralesCont.style.display = "block";

    let lista = document.createElement("ul");

    let totalCafesP = pedidos.length;
    let totalCafesPS = 0;
    let totalCafesPM = 0;
    let totalCafesPL = 0;

    for(let pedido of pedidos) {
        if(pedido["tamano"] == "small") totalCafesPS += 1;
        else if(pedido["tamano"] == "medium") totalCafesPM += 1;
        else if(pedido["tamano"] == "large") totalCafesPL += 1;
    }

    let totalCafesPTS = 0;
    let totalCafesPTE = 0;
    let totalCafesPTL = 0;
    let totalCafesPTM = 0;

    for(let pedido of pedidos) {
        if(pedido["tipo"] == "solo") totalCafesPTS += 1;
        else if(pedido["tipo"] == "espresso") totalCafesPTE += 1;
        else if(pedido["tipo"] == "latte") totalCafesPTL += 1;
        else if(pedido["tipo"] == "macchiato") totalCafesPTM += 1;
    }

    let totalTopCacao = 0;
    let totalTopVanilla = 0;
    let totalTopCaramelo = 0;
    let totalTopCanela = 0;
    let totalTopNata = 0;
    let totalTopSirope = 0;
    let totalTopChocolate = 0;
    let totalTopAvellana = 0;

    for(let pedido of pedidos) {
        for(let top of pedido["toppings"]) {
            if(top == "cacao") totalTopCacao += 1;
            else if(top == "vanilla") totalTopVanilla += 1;
            else if(top == "caramelo") totalTopCaramelo += 1;
            else if(top == "canela") totalTopCanela += 1;
            else if(top == "nata") totalTopNata += 1;
            else if(top == "sirope") totalTopSirope += 1;
            else if(top == "chocolate") totalTopChocolate += 1;
            else if(top == "avellana") totalTopAvellana += 1;
        }
    }

    let liTotalCafesP = document.createElement("li");
    liTotalCafesP.innerText = "Total Cafes: " + totalCafesP;
    let liTotalCafesPS = document.createElement("li");
    liTotalCafesPS.innerText = "Total Cafes por tamaño: pequeños - " + totalCafesPS + ", medianos - " + totalCafesPM + ", grandes - " + totalCafesPL;
    let liTotalCafesPT = document.createElement("li");
    liTotalCafesPT.innerText = "Total Cafes por tipo: solo - " + totalCafesPTS + ", espresso - " + totalCafesPTE + ", latte - " + totalCafesPTL + ", macchiato - " + totalCafesPTM;
    let liTotalTop = document.createElement("li");
    liTotalTop.innerText = "Total toppings: cacao - " + totalTopCacao + ", vanilla - " + totalTopVanilla + ", caramelo - " + totalTopCaramelo + ", canela - " + totalTopCanela + ", nata - " + totalTopNata + ", sirope - " + totalTopSirope + ", chocolate - " + totalTopChocolate + ", avellana - " + totalTopAvellana;

    lista.append(liTotalCafesP);
    lista.append(liTotalCafesPS);
    lista.append(liTotalCafesPT);
    lista.append(liTotalTop);

    let tituloP = document.createElement("h1");
    tituloP.innerText = "Estadisticas Pedidos";
    
    statsGeneralesCont.append(tituloP);
    statsGeneralesCont.append(lista);



    let listaI = document.createElement("ul");

    let totalCafesPInv = inventario.length;
    let totalCafesPSInv = 0;
    let totalCafesPMInv = 0;
    let totalCafesPLInv = 0;

    for(let pedido of inventario) {
        if(pedido["tamano"] == "small") totalCafesPSInv += 1;
        else if(pedido["tamano"] == "medium") totalCafesPMInv += 1;
        else if(pedido["tamano"] == "large") totalCafesPLInv += 1;
    }

    let totalCafesPTSInv = 0;
    let totalCafesPTEInv = 0;
    let totalCafesPTLInv = 0;
    let totalCafesPTMInv = 0;

    for(let pedido of inventario) {
        if(pedido["tipo"] == "solo") totalCafesPTSInv += 1;
        else if(pedido["tipo"] == "espresso") totalCafesPTEInv += 1;
        else if(pedido["tipo"] == "latte") totalCafesPTLInv += 1;
        else if(pedido["tipo"] == "macchiato") totalCafesPTMInv += 1;
    }

    let totalTopCacaoInv = 0;
    let totalTopVanillaInv = 0;
    let totalTopCarameloInv = 0;
    let totalTopCanelaInv = 0;
    let totalTopNataInv = 0;
    let totalTopSiropeInv = 0;
    let totalTopChocolateInv = 0;
    let totalTopAvellanaInv = 0;

    for(let pedido of inventario) {
        for(let top of pedido["toppings"]) {
            if(top == "cacao") totalTopCacaoInv += 1;
            else if(top == "vanilla") totalTopVanillaInv += 1;
            else if(top == "caramelo") totalTopCarameloInv += 1;
            else if(top == "canela") totalTopCanelaInv += 1;
            else if(top == "nata") totalTopNataInv += 1;
            else if(top == "sirope") totalTopSiropeInv += 1;
            else if(top == "chocolate") totalTopChocolateInv += 1;
            else if(top == "avellana") totalTopAvellanaInv += 1;
        }
    }

    let liTotalCafesPInv = document.createElement("li");
    liTotalCafesPInv.innerText = "Total Cafes: " + totalCafesPInv;
    let liTotalCafesPSInv = document.createElement("li");
    liTotalCafesPSInv.innerText = "Total Cafes por tamaño: pequeños - " + totalCafesPSInv + ", medianos - " + totalCafesPMInv + ", grandes - " + totalCafesPLInv;
    let liTotalCafesPTInv = document.createElement("li");
    liTotalCafesPTInv.innerText = "Total Cafes por tipo: solo - " + totalCafesPTS + ", espresso - " + totalCafesPTEInv + ", latte - " + totalCafesPTLInv + ", macchiato - " + totalCafesPTMInv;
    let liTotalTopInv = document.createElement("li");
    liTotalTopInv.innerText = "Total toppings: cacao - " + totalTopCacaoInv + ", vanilla - " + totalTopVanillaInv + ", caramelo - " + totalTopCarameloInv + ", canela - " + totalTopCanelaInv + ", nata - " + totalTopNataInv + ", sirope - " + totalTopSiropeInv + ", chocolate - " + totalTopChocolateInv + ", avellana - " + totalTopAvellanaInv;

    listaI.append(liTotalCafesPInv);
    listaI.append(liTotalCafesPSInv);
    listaI.append(liTotalCafesPTInv);
    listaI.append(liTotalTopInv);

    let br = document.createElement("br");

    statsGeneralesCont.append(br);
   
    let tituloI = document.createElement("h1");
    tituloI.innerText = "Estadisticas Inventario";

    statsGeneralesCont.append(tituloI);
    statsGeneralesCont.append(listaI);
}

function statsBeneficios() {
    if(statsBeneficiosCont.style.display == "none") {
        resetDisplay();
        statsBeneficiosCont.style.display = "block";
    }
    else {
        resetDisplay();
    }

    statsBeneficiosCont.innerHTML = "";

    statsBeneficiosCont.style.display = "block";

    let lista = document.createElement("ul");
    
    let dineroRec = 0;

    for(let pedido of inventario) {
        dineroRec += pedido["precio"];
    }

    let topUsados = [];

    let totalTopCacaoInv = 0;
    let totalTopVanillaInv = 0;
    let totalTopCarameloInv = 0;
    let totalTopCanelaInv = 0;
    let totalTopNataInv = 0;
    let totalTopSiropeInv = 0;
    let totalTopChocolateInv = 0;
    let totalTopAvellanaInv = 0;

    for(let pedido of inventario) {
        for(let top of pedido["toppings"]) {
            if(top == "cacao") totalTopCacaoInv += 1;
            else if(top == "vanilla") totalTopVanillaInv += 1;
            else if(top == "caramelo") totalTopCarameloInv += 1;
            else if(top == "canela") totalTopCanelaInv += 1;
            else if(top == "nata") totalTopNataInv += 1;
            else if(top == "sirope") totalTopSiropeInv += 1;
            else if(top == "chocolate") totalTopChocolateInv += 1;
            else if(top == "avellana") totalTopAvellanaInv += 1;
        }
    }

    topUsados.push(totalTopCacaoInv);
    topUsados.push(totalTopVanillaInv);
    topUsados.push(totalTopCarameloInv);
    topUsados.push(totalTopCanelaInv);
    topUsados.push(totalTopNataInv);
    topUsados.push(totalTopSiropeInv);
    topUsados.push(totalTopChocolateInv);
    topUsados.push(totalTopAvellanaInv);

    topUsados.sort();

    let top1 = "";
    let top2 = "";
    let top3 = "";

    if(topUsados[0] == totalTopAvellanaInv) {
        top1 = "Avellana";
    }
    else if(topUsados[0] == totalTopCacaoInv) {
        top1 = "Cacao";
    }
    else if(topUsados[0] == totalTopCanelaInv) {
        top1 = "Canela";
    }
    else if(topUsados[0] == totalTopCarameloInv) {
        top1 = "Caramelo";
    }
    else if(topUsados[0] == totalTopChocolateInv) {
        top1 = "Chocolate";
    }
    else if(topUsados[0] == totalTopNataInv) {
        top1 = "Nata";
    }
    else if(topUsados[0] == totalTopSiropeInv) {
        top1 = "Sirope";
    }
    else if(topUsados[0] == totalTopVanillaInv) {
        top1 = "Vanilla";
    }

    if(topUsados[1] == totalTopAvellanaInv) {
        top2 = "Avellana";
    }
    else if(topUsados[1] == totalTopCacaoInv) {
        top2 = "Cacao";
    }
    else if(topUsados[1] == totalTopCanelaInv) {
        top2 = "Canela";
    }
    else if(topUsados[1] == totalTopCarameloInv) {
        top2 = "Caramelo";
    }
    else if(topUsados[1] == totalTopChocolateInv) {
        top2 = "Chocolate";
    }
    else if(topUsados[1] == totalTopNataInv) {
        top2 = "Nata";
    }
    else if(topUsados[1] == totalTopSiropeInv) {
        top2 = "Sirope";
    }
    else if(topUsados[1] == totalTopVanillaInv) {
        top2 = "Vanilla";
    }

    if(topUsados[2] == totalTopAvellanaInv) {
        top3 = "Avellana";
    }
    else if(topUsados[2] == totalTopCacaoInv) {
        top3 = "Cacao";
    }
    else if(topUsados[2] == totalTopCanelaInv) {
        top3 = "Canela";
    }
    else if(topUsados[2] == totalTopCarameloInv) {
        top3 = "Caramelo";
    }
    else if(topUsados[2] == totalTopChocolateInv) {
        top3 = "Chocolate";
    }
    else if(topUsados[2] == totalTopNataInv) {
        top3 = "Nata";
    }
    else if(topUsados[2] == totalTopSiropeInv) {
        top3 = "Sirope";
    }
    else if(topUsados[2] == totalTopVanillaInv) {
        top3 = "Vanilla";
    }

    let totalCafesPInv = inventario.length;
    let totalCafesPSInv = 0;
    let totalCafesPMInv = 0;
    let totalCafesPLInv = 0;

    for(let pedido of inventario) {
        if(pedido["tamano"] == "small") totalCafesPSInv += 1;
        else if(pedido["tamano"] == "medium") totalCafesPMInv += 1;
        else if(pedido["tamano"] == "large") totalCafesPLInv += 1;
    }

    let totalTam = [];

    totalTam.push(totalCafesPSInv);
    totalTam.push(totalCafesPMInv);
    totalTam.push(totalCafesPLInv);

    totalTam.sort();

    let topTam = "";

    if(totalTam[0] == totalCafesPLInv) topTam = "Grande"; 
    else if(totalTam[0] == totalCafesPMInv) topTam = "Mediano"; 
    else if(totalTam[0] == totalCafesPSInv) topTam = "Pequeño";

    let totalCafesPTSInv = 0;
    let totalCafesPTEInv = 0;
    let totalCafesPTLInv = 0;
    let totalCafesPTMInv = 0;

    for(let pedido of inventario) {
        if(pedido["tipo"] == "solo") totalCafesPTSInv += 1;
        else if(pedido["tipo"] == "espresso") totalCafesPTEInv += 1;
        else if(pedido["tipo"] == "latte") totalCafesPTLInv += 1;
        else if(pedido["tipo"] == "macchiato") totalCafesPTMInv += 1;
    }

    totalTipo = [];

    totalTipo.push(totalCafesPTSInv);
    totalTipo.push(totalCafesPTEInv);
    totalTipo.push(totalCafesPTLInv);
    totalTipo.push(totalCafesPTMInv);

    totalTipo.sort();

    let topTipo = "";

    if(totalTipo[0] == totalCafesPTSInv) topTipo = "Solo";
    else if(totalTipo[0] == totalCafesPTEInv) topTipo = "Espresso";
    else if(totalTipo[0] == totalCafesPTLInv) topTipo = "Latte";
    else if(totalTipo[0] == totalCafesPTMInv) topTipo = "Macchiato";

    let liDinero = document.createElement("li");
    liDinero.innerText = "Dinero recaudado: " + dineroRec;

    let liTopsUsados = document.createElement("li");
    liTopsUsados.innerText = "Toppings mas usados: " + top1 + ", " + top2 + ", " + top3;

    let liTopsTam = document.createElement("li");
    liTopsTam.innerText = "Tamano mas pedido: " + topTam;

    let liTopsTipo = document.createElement("li");
    liTopsTipo.innerText = "Tipo mas pedido: " + topTipo;

    let cafS = 0;
    let mediaTopS = 0;
    let cafM = 0;
    let mediaTopM = 0;
    let cafL = 0;
    let mediaTopL = 0;

    for(let pedido of inventario) {
        if(pedido["tamano"] == "small") {
            cafS += 1;
            mediaTopS += pedido["toppings"].length;
        }
        if(pedido["tamano"] == "medium") {
            cafM += 1;
            mediaTopM += pedido["toppings"].length;
        }
        if(pedido["tamano"] == "large") {
            cafL += 1;
            mediaTopL += pedido["toppings"].length;
        }
    }

    mediaTopS /= cafS;
    mediaTopM /= cafM;
    mediaTopL /= cafL;

    let liMediaTopS = document.createElement("li");
    liMediaTopS.innerText = "Media toppings por cafe pequeño" + mediaTopS;
    let liMediaTopM = document.createElement("li");
    liMediaTopM.innerText = "Media toppings por cafe mediano" + mediaTopM;
    let liMediaTopL = document.createElement("li");
    liMediaTopL.innerText = "Media toppings por cafe grande" + mediaTopL;

    lista.append(liDinero);
    lista.append(liTopsTam);
    lista.append(liTopsTipo);
    lista.append(liMediaTopS);
    lista.append(liMediaTopM);
    lista.append(liMediaTopL);

    let titulo = document.createElement("h1");
    titulo.innerText = "Estadistica de beneficios";

    statsBeneficiosCont.append(titulo); 
    statsBeneficiosCont.append(lista);
}

mostrarPedidosBtn.addEventListener("click", mostrarPedidos);

mostrarInventarioBtn.addEventListener("click", mostrarInventario);

statsGeneralesBtn.addEventListener("click", statsGenerales);

statsBeneficiosBtn.addEventListener("click", statsBeneficios);

resetDisplay();
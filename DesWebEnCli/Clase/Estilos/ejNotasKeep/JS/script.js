function crearNota() {
    let tituloNota = document.getElementById("tituloNota");
    let textNota = document.getElementById("textNota");
    let colorNota = document.getElementById("colorNota");
    let prioridadNota = document.getElementById("prioridadNota");
    let colorTexto = document.getElementById("colorTexto");
    
    let contNotas = document.getElementById("notasCont");
    let contNotasDest = document.getElementById("dest-notas");
    
    let nota = document.createElement("div");
    
    let notaTitulo = document.createElement("h2");
    notaTitulo.innerText = tituloNota.value;
    
    let notaTexto = document.createElement("p");
    notaTexto.innerText = textNota.value;

    let modCont = document.createElement("div");
    let mod = document.createElement("img");

    modCont.classList.add("modNota");
    mod.src = "IMG/editar.svg";

    modCont.addEventListener("click", notaMod);
    modCont.append(mod);

    nota.append(modCont);
    nota.append(notaTitulo);
    nota.append(notaTexto);
    
    nota.classList.add("nota");
    nota.classList.add("nota" + colorNota.value);
    nota.style.color = colorTexto.value;
    
    if(prioridadNota.checked) {
        nota.classList.add("notaDest");
        contNotasDest.append(nota);
    }
    else {
        contNotas.append(nota);
    }
    
    resetNotaForms();
}

function crearNotaForm() {
    let crearNota = document.getElementById("crearNota");
    let buscarNota = document.getElementById("buscarNota");
    let estadisticaNotaNota = document.getElementById("estadisticasNota");
    let fromCont = document.getElementById("formCont");
    
    if(crearNota.style.display == "block") {
        resetNotaForms();
    }
    else {
        crearNota.style.display = "block";
        buscarNota.style.display = "none";
        estadisticaNotaNota.style.display = "none";
    }
}

function buscarNotaForm() {
    let crearNota = document.getElementById("crearNota");
    let buscarNota = document.getElementById("buscarNota");
    let estadisticaNotaNota = document.getElementById("estadisticasNota");
    
    let formBuscar = document.getElementById("formBuscar");

    formBuscar.style.display = "block";

    let resultadoBuscar = document.getElementById("resultadoBuscar");

    resultadoBuscar.innerHTML = "";

    if(buscarNota.style.display == "block") {
        resetNotaForms();
    }
    else {
        crearNota.style.display = "none";
        buscarNota.style.display = "block";
        estadisticaNotaNota.style.display = "none";
    }
}

function statsNotaForm() {
    let crearNota = document.getElementById("crearNota");
    let buscarNota = document.getElementById("buscarNota");
    let estadisticaNotaNota = document.getElementById("estadisticasNota");
    
    if(estadisticaNotaNota.style.display == "block") {
        resetNotaForms();
    }
    else {
        crearNota.style.display = "none";
        buscarNota.style.display = "none";
        estadisticaNotaNota.style.display = "block";
    }
}

function resetNotaForms() {
    let crearNota = document.getElementById("crearNota");
    let buscarNota = document.getElementById("buscarNota");
    let estadisticaNotaNota = document.getElementById("estadisticasNota");
    
    crearNota.style.display = "none";
    buscarNota.style.display = "none";
    estadisticaNotaNota.style.display = "none";
}

function buscarNota() {
    let tituloNotaBuscar = document.getElementById("tituloNotaBuscar");
    let colorNotaBuscar = document.getElementById("colorNotaBuscar");
    let prioridadNotaBuscar = document.getElementById("prioridadNotaBuscar");
    let resultadoBuscar = document.getElementById("resultadoBuscar");

    let formBuscar = document.getElementById("formBuscar");

    formBuscar.style.display = "none";

    let notas = [];

    for(let nota of document.querySelectorAll(".nota")) {
        let nTitulo = nota.querySelector("h2").innerText;
        let nColor = nota.classList.contains("nota" + colorNotaBuscar.value);
        let nProridad = nota.classList.contains("notaDest");

        let n = document.createElement("div");
        let titulo = document.createElement("h2");
        let texto = document.createElement("p");
        let modCont = document.createElement("div");
        let mod = document.createElement("img");
        
        
        n.className = nota.classList.toString() + " nB";
        n.style.color = nota.style.color;
        titulo.innerText = nTitulo;
        texto.innerText = nota.querySelector("p").innerText;
        modCont.classList.add("modNota");
        mod.src = "IMG/editar.svg";

        modCont.addEventListener("click", notaMod);
        modCont.append(mod);

        n.append(modCont);
        n.append(titulo);
        n.append(texto);
        
        nB = nota.classList.contains("nB");
        
        if(prioridadNotaBuscar.checked) {
            if(nTitulo == tituloNotaBuscar.value && nColor && nProridad && !nB) {
                for(let i in document.querySelectorAll(".nota:not(.nB)")) {
                    if(nota == document.querySelectorAll(".nota:not(.nB)")[i]) {
                        n.dataset.index = i;
                    }
                }
                notas.push(n);
            }
        }
        else {
            if(nTitulo == tituloNotaBuscar.value && nColor && !nProridad && !nB) {
                for(let i in document.querySelectorAll(".nota:not(.nB)")) {
                    if(nota == document.querySelectorAll(".nota:not(.nB)")[i]) {
                        n.dataset.index = i;
                    }
                }
                notas.push(n);
            }
        }
    }

    if(notas.length != 0) {
        for(let nota of notas) {
            resultadoBuscar.append(nota);
        }
    }
    else {
        resultadoBuscar.innerText = "No hay resultados de busqueda"
    }
}

function notaMod(e) {

    let div = document.createElement("div");

    div.id = "modNotaCont";
    div.style.width = "30%";
    div.style.backgroundColor = "gray";
    div.style.position = "fixed";
    div.style.top = "30%";
    div.style.left = "35%";

    div.dataset.index = e.target.parentElement.dataset.index;

    let titulo = document.createElement("input");
    let text = document.createElement("textarea");
    let color = document.createElement("select");
    let prioridad = document.createElement("input");
    let guardar = document.createElement("button");

    titulo.id = "tituloMod";
    titulo.style.display = "block";
    titulo.value = e.target.parentElement.querySelector("h2").innerText;

    text.id = "textMod";
    text.style.display = "block";
    text.value = e.target.parentElement.querySelector("p").innerText;
    
    color.id = "colorMod";
    color.style.display = "block";
    for(let i = 1; i <= 6; i++) {
        let option = document.createElement("option");
        option.innerText = "Color " + i;
        option.value = "Color" + i;
        color.append(option);
    }
    color.value = e.target.parentElement.classList[1].substring(4);
    
    prioridad.id = "prioridadMod";
    prioridad.style.display = "block";
    prioridad.type = "checkbox";
    prioridad.checked = e.target.parentElement.classList.contains("notaDest");

    guardar.innerText = "Guardar";
    
    guardar.addEventListener("click", guardarMod);

    div.append(titulo);
    div.append(text);
    div.append(color);
    div.append(prioridad);
    div.append(guardar);

    document.body.append(div);
}

function guardarMod(e) {
    let titulo = document.getElementById("tituloMod").value;
    let text = document.getElementById("textMod").value;
    let color = document.getElementById("colorMod").value;
    let prioridad = document.getElementById("prioridadMod").checked;

    let nota = document.querySelectorAll(".nota:not(.nB)")[e.target.parentElement.dataset.index];
    let dest = nota.classList.contains("notaDest");

    nota.querySelector("h2").innerText = titulo;
    nota.querySelector("p").innerText = text;
    nota.classList.replace(nota.classList[1], "nota" + color);
    if(prioridad) {
        if(!nota.classList.contains("notaDest")) {
            nota.classList.add("notaDest");
        }
    }
    else {
        if(nota.classList.contains("notaDest")) {
            nota.classList.remove("notaDest");
        }
    }

    let contNotas = document.getElementById("notasCont");
    let contNotasDest = document.getElementById("dest-notas");

    if(dest) {
        if(!nota.classList.contains("notaDest")) {
            contNotas.append(nota);
        }
    }
    else {
        if(nota.classList.contains("notaDest")) {
            contNotasDest.append(nota);
        }
    }

    let modNotaCont = document.getElementById("modNotaCont");
    modNotaCont.remove();
    resetNotaForms();
    buscarNotaForm();
    buscarNota();
}

resetNotaForms();
let contNotasMod = 0;
let contNotasBoradas = 0;

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
        nota.dataset.index = document.querySelectorAll(".notaDest:not(.nB)").length;
        contNotasDest.append(nota);
    }
    else {
        nota.dataset.index = document.querySelectorAll(".nota:not(.nB)").length;
        contNotas.append(nota);
    }

    
    resetNotaForms();
}

function crearNotaForm() {
    let crearNota = document.getElementById("crearNota");
    let buscarNota = document.getElementById("buscarNota");
    let estadisticaNotaNota = document.getElementById("estadisticasNota");
    
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

        let estadisticaNotaCont = document.getElementById("estadisticasResultado");

        estadisticaNotaCont.innerHTML = "";

        let notasActivas = document.querySelectorAll(".nota:not(.nB)").length;
        
        let notasPrioridad = document.querySelectorAll(".notaDest:not(.nB)").length;

        let notasSinPrioridad = notasActivas - notasPrioridad;

        let letrasNotasActivas = 0;
        
        for(let nota of document.querySelectorAll(".nota:not(.nB)")) {
            letrasNotasActivas += nota.querySelector("h2").innerText.length;
            letrasNotasActivas += nota.querySelector("p").innerText.length;
        }

        let mediaLetras = parseInt(letrasNotasActivas / notasActivas);

        let ul = document.createElement("ul"); 

        let liNA = document.createElement("li");
        liNA.innerText = "Notas activas: " + notasActivas;
        let liNB = document.createElement("li");
        liNB.innerText = "Notas borradas: " + contNotasBoradas;
        let liNM = document.createElement("li");
        liNM.innerText = "Notas modificadas: " + contNotasMod;
        let liNP = document.createElement("li");
        liNP.innerText = "Notas con prioridad: " + notasPrioridad;
        let liNSP = document.createElement("li");
        liNSP.innerText = "Notas sin prioridad: " + notasSinPrioridad;
        let liNL = document.createElement("li");
        liNL.innerText = "Numero de letras de notas activas: " + letrasNotasActivas;
        let liNML = document.createElement("li");
        liNML.innerText = "Media de letras de notas activas: " + mediaLetras;

        ul.append(liNA);
        ul.append(liNB);
        ul.append(liNM);
        ul.append(liNP);
        ul.append(liNSP);
        ul.append(liNL);
        ul.append(liNML);

        estadisticaNotaCont.append(ul);
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
    resultadoBuscar.style.display = "block";

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

    div.dataset.index = e.currentTarget.parentElement.dataset.index;

    let titulo = document.createElement("input");
    let text = document.createElement("textarea");
    let color = document.createElement("select");
    let prioridad = document.createElement("input");
    let guardar = document.createElement("button");
    let borrar = document.createElement("button");

    titulo.id = "tituloMod";
    titulo.value = e.currentTarget.parentElement.querySelector("h2").innerText;

    text.id = "textMod";
    text.setAttribute("rows", "4");
    text.value = e.currentTarget.parentElement.querySelector("p").innerText;
    
    color.id = "colorMod";
    for(let i = 1; i <= 6; i++) {
        let option = document.createElement("option");
        option.innerText = "Color " + i;
        option.value = "Color" + i;
        color.append(option);
    }
    color.value = e.currentTarget.parentElement.classList[1].substring(4);
    
    prioridad.id = "prioridadMod";
    prioridad.style.display = "block";
    prioridad.type = "checkbox";
    prioridad.checked = e.currentTarget.parentElement.classList.contains("notaDest");

    guardar.innerText = "Guardar";
    guardar.id = "guardarMod";
    
    guardar.addEventListener("click", guardarMod);

    borrar.innerText = "Borrar nota";
    borrar.id = "borrarNota";
    borrar.addEventListener("click", borrarNota);

    div.append(titulo);
    div.append(text);
    div.append(color);
    div.append(prioridad);
    div.append(guardar);
    div.append(borrar);

    document.body.append(div);
}

function guardarMod(e) {
    let titulo = document.getElementById("tituloMod").value;
    let text = document.getElementById("textMod").value;
    let color = document.getElementById("colorMod").value;
    let prioridad = document.getElementById("prioridadMod").checked;

    let nota = document.querySelectorAll(".nota:not(.nB)")[e.currentTarget.parentElement.dataset.index];
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

    let resultadoBuscar = document.getElementById("resultadoBuscar");
    let formBuscar = document.getElementById("formBuscar");

    formBuscar.style.display = "block";
    resultadoBuscar.style.display = "none";

    contNotasMod += 1;
}

function borrarNota(e) {
    let nota = document.querySelectorAll(".nota:not(.nB)")[e.currentTarget.parentElement.dataset.index];
    let modNotaCont = document.getElementById("modNotaCont");
    
    for(let n = parseInt(e.currentTarget.parentElement.dataset.index) + 1; n < document.querySelectorAll(".nota:not(.nB)").length; n++) {
        document.querySelectorAll(".nota:not(.nB)")[n].dataset.index -= 1;
    }

    modNotaCont.remove();
    nota.remove();
    resetNotaForms();
    buscarNotaForm();
    buscarNota();
    contNotasBoradas += 1;
}

function modNotaIni() {
    let notasMod = document.querySelectorAll(".modNota");

    for(let mod of notasMod) {
        mod.addEventListener("click", notaMod);
    }
}

modNotaIni();

resetNotaForms();
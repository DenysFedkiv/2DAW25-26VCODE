let restar1 = 0;
let sumar1 = 0;
let restar1E3 = 0;
let sumar1E3 = 0;
let restar1E6 = 0;
let sumar1E6 = 0;



function crearPagina() {
    let div = document.createElement("div");
    let contador = document.createElement("h1");
    let btn1 = document.createElement("button");
    let btn1E3 = document.createElement("button");
    let btn1E6 = document.createElement("button");

    contador.style.textAlign = "center";
    contador.innerText = "0";
    contador.id = "contador";

    btn1.innerText = "1";
    btn1E3.innerText = "1000";
    btn1E6.innerText = "1000000";

    btn1.value = "1";
    btn1E3.value = "1000";
    btn1E6.value = "1000000";

    btn1.addEventListener("click", cambiarContador);
    btn1E3.addEventListener("click", cambiarContador);
    btn1E6.addEventListener("click", cambiarContador);

    document.body.append(div);
    div.append(contador);
    div.append(btn1);
    div.append(btn1E3);
    div.append(btn1E6);
}

function cambiarContador(e) {
    console.log("ejecutado" + e.target.value);
    let contador = document.getElementById("contador");
    if(e.target.value == 1) {
        if(Math.floor(Math.random() * 10000) % 2 == 0) {
            contador.innerText = parseInt(contador.innerText) + 1;
            sumar1 += 1;
        }
        else {
            contador.innerText = parseInt(contador.innerText) - 1;
            restar1 += 1;
        }
        if(restar1 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por restar");
        }
        if(sumar1 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por sumar");
        }
    }
    else if(e.target.value == 1000) {
        if(Math.floor(Math.random() * 10000) % 2 == 0) {
            contador.innerText = parseInt(contador.innerText) + 1000;
            sumar1E3 += 1;
        }
        else {
            contador.innerText = parseInt(contador.innerText) - 1000;
            restar1E3 += 1;
        }
        if(restar1E3 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por restar");
        }
        if(sumar1E3 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por sumar");
        }
    }
    else if(e.target.value == 1000000) {
        if(Math.floor(Math.random() * 10000) % 2 == 0) {
            contador.innerText = parseInt(contador.innerText) + 1000000;
            sumar1E6 += 1;
        }
        else {
            contador.innerText = parseInt(contador.innerText) - 1000000;
            restar1E6 += 1;
        }
        if(restar1E6 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por restar");
        }
        if(sumar1E6 == 3) {
            e.target.removeEventListener("click", cambiarContador);
            e.target.style.textDecoration = "line-through";
            alert("Desabilitado por sumar");
        }
    }
}

setTimeout(crearPagina, 10000);
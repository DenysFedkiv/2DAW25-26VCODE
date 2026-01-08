let productos;

const main = document.querySelector("main");
const tiendaDisplay = document.getElementById("tienda-display");

function mostrarProd(ps) {
    productos = ps;
    
    for(let i = 0; i < productos["length"]; i++) {
        let prod = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let precio = document.createElement("p");
        let contadorCont = document.createElement("div")
        let addBtn = document.createElement("button");
        let restBtn = document.createElement("button");
        let caritoBtn = document.createElement("button");
        let contador = document.createElement("p");
        
        prod.classList.add("producto");
        img.classList.add("producto-img");
        title.classList.add("producto-title");
        precio.classList.add("producto-precio");
        contadorCont.classList.add("producto-contador-cont");
        addBtn.classList.add("producto-addBtn");
        restBtn.classList.add("producto-restBtn");
        caritoBtn.classList.add("producto-caritoBtn");
        contador.classList.add("producto-contador");
        
        img.src = productos[i]["url"];
        
        title.innerText = productos[i]["nombre"];

        precio.innerText = productos[i]["precio"] + "€/Kg";
        
        addBtn.innerText = "+";
        addBtn.addEventListener("click", addContador);

        contador.innerText = 0;

        restBtn.innerText = "-";
        restBtn.addEventListener("click", restContador);

        caritoBtn.innerText = "Anadir";
        caritoBtn.addEventListener("click", addToCarito);
        
        prod.append(img);
        prod.append(title);
        prod.append(precio);
        contadorCont.append(addBtn);
        contadorCont.append(contador);
        contadorCont.append(restBtn);
        prod.append(contadorCont);
        prod.append(caritoBtn);
        tiendaDisplay.append(prod);
    }
}

function addContador(e) {
    let contador = e.currentTarget.parentElement.querySelector(".producto-contador");
    if(parseInt(contador.innerText) < 10) contador.innerText = parseInt(contador.innerText) + 1;
    checkContador(e);
}

function restContador(e) {
    let contador = e.currentTarget.parentElement.querySelector(".producto-contador");
    if(parseInt(contador.innerText) > 0) contador.innerText = parseInt(contador.innerText) - 1;
    checkContador(e);
}

function defaultContador() {
    let btns = document.querySelectorAll(".producto-caritoBtn");

    for(let btn of btns) {
        btn.disabled = true;
    }
}

function checkContador(e) {
    if(parseInt(e.currentTarget.parentElement.querySelector(".producto-contador").innerText) == 0) {
        e.currentTarget.parentElement.parentElement.querySelector(".producto-caritoBtn").disabled = true;
    }
    else {
        e.currentTarget.parentElement.parentElement.querySelector(".producto-caritoBtn").disabled = false;
    }
}

function addToCarito(e) {
    let caritoProductos = document.getElementById("carito-productos");
    let productoImg = e.currentTarget.parentElement.querySelector(".producto-img");
    let producoTitle = e.currentTarget.parentElement.querySelector(".producto-title");
    let productoPrecio = e.currentTarget.parentElement.querySelector(".producto-precio");
    let contador = e.currentTarget.parentElement.querySelector(".producto-contador-cont .producto-contador");

    let prod = document.createElement("div");
    let lSide = document.createElement("div");
    let rSide = document.createElement("div");
    let img = document.createElement("img");
    let titleCont = document.createElement("div");
    let title = document.createElement("p");
    let cantidad = document.createElement("p");
    let total = document.createElement("p");
    let deleteBtn = document.createElement("button");

    prod.classList.add("carito-productos-prod");
    lSide.classList.add("carito-productos-prod-lSide");
    rSide.classList.add("carito-productos-prod-rSide");
    img.classList.add("carito-productos-prod-img");
    titleCont.classList.add("carito-productos-prod-titleCont");
    title.classList.add("carito-productos-prod-title");
    cantidad.classList.add("carito-productos-prod-cantidad");
    total.classList.add("carito-productos-prod-total");
    deleteBtn.classList.add("carito-productos-prod-deleteBtn");

    img.src = productoImg.src;

    title.innerText = producoTitle.innerText;

    cantidad.innerText = "x" + contador.innerText;

    total.innerText = parseFloat(productoPrecio.innerText) * parseInt(contador.innerText) + "€";

    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", deleteFromCarito);

    lSide.append(img);
    titleCont.append(title);
    titleCont.append(cantidad);
    lSide.append(titleCont);
    rSide.append(total);
    rSide.append(deleteBtn);
    prod.append(lSide);
    prod.append(rSide);

    caritoProductos.append(prod);

    calcCaritoTotal();
}

function calcCaritoTotal() {
    let totalE = document.getElementById("carito-checkout-total-precio");
    let total = 0;

    let prods = document.querySelectorAll(".carito-productos-prod");

    for(let prod of prods) {
        total += parseFloat(prod.querySelector(".carito-productos-prod-total").innerText);
    }

    totalE.innerText = total + "€";
}

function deleteFromCarito(e) {
    e.currentTarget.parentElement.parentElement.remove();

    calcCaritoTotal();
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {mostrarProd(data); defaultContador();})
    .catch(error => console.log("Error", error));
});
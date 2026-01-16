let productos;

const main = document.querySelector("main");

const tiendaBtn = document.getElementById("btn-tienda");
const tienda = document.getElementById("tienda");
const tiendaDisplay = document.getElementById("tienda-display");
const tiendaCatFrutaBtn = document.getElementById("tienda-cats-fruta");
const tiendaCatVerduraBtn = document.getElementById("tienda-cats-verdura");

let vistaActiva = "Tienda";
let categoriaActiva = "fruta";

const adminBtn = document.getElementById("btn-admin");
const admin = document.getElementById("administracion");
const adminDisplay = document.getElementById("admin-productos-display");
const adminCatFrutaBtn = document.getElementById("admin-cats-fruta");
const adminCatVerduraBtn = document.getElementById("admin-cats-verdura");

const managerBtn = document.getElementById("btn-manager");
const manager = document.getElementById("manager");

function cambiarVista(e) {
    tienda.style.display = "none";
    admin.style.display = "none";
    manager.style.display = "none";

    if(e.currentTarget.innerText == "Tienda") {
        tienda.style.display = "block";
        admin.style.display = "none";
        manager.style.display = "none";
        localStorage.setItem("vistaActiva", "Tienda");
        mostrarProd(localStorage.getItem("vistaActiva"));
    }
    else if(e.currentTarget.innerText == "Administracion") {
        tienda.style.display = "none";
        admin.style.display = "grid";
        manager.style.display = "none";
        localStorage.setItem("vistaActiva", "Administracion");
        mostrarProd(localStorage.getItem("vistaActiva"));
    }
    else if(e.currentTarget.innerText == "Manager") {
        tienda.style.display = "none";
        admin.style.display = "none";
        manager.style.display = "block";
        localStorage.setItem("vistaActiva", "Manager");
    }
}



function defualtVista() {
    let e = {currentTarget : {innerText : ""}}
    if(localStorage.getItem("vistaActiva") != null) {
        e.currentTarget.innerText = localStorage.getItem("vistaActiva");
    }
    else {
        e.currentTarget.innerText = "Tienda";
    }

    cambiarVista(e);
}

tiendaBtn.addEventListener("click", cambiarVista);
adminBtn.addEventListener("click", cambiarVista);
managerBtn.addEventListener("click", cambiarVista);

function defaultCategoria() {
    if(localStorage.getItem("categoriaActiva") == null) categoriaActiva = "fruta";
    else categoriaActiva = localStorage.getItem("categoriaActiva");
}

function setCategoriaActiva(e) {
    if(categoriaActiva != e.currentTarget.id.split("-")[2]) {
        if(e.currentTarget.id.split("-")[2] == "fruta") categoriaActiva = "fruta";
        else if(e.currentTarget.id.split("-")[2] == "verdura") categoriaActiva = "verdura";
        localStorage.setItem("categoriaActiva", categoriaActiva);
        mostrarProd(localStorage.getItem("vistaActiva") != null ? localStorage.getItem("vistaActiva") : "Tienda");
    }
}

tiendaCatFrutaBtn.addEventListener("click", setCategoriaActiva);
tiendaCatVerduraBtn.addEventListener("click", setCategoriaActiva);
adminCatFrutaBtn.addEventListener("click", setCategoriaActiva);
adminCatVerduraBtn.addEventListener("click", setCategoriaActiva);


function mostrarProd(vista) {
    if(vista != "Manager") {
        console.log(vista);
        if(vista == "Tienda") {
            tiendaDisplay.innerHTML = "";
        }
        else if(vista == "Administracion") {
            adminDisplay.innerHTML = "";
        }
        
        console.log(vista);
        console.log(productos);
        for(let i = 0; i < productos["length"]; i++) {
            if(productos[i]["categoria"] != categoriaActiva) continue;
            let prod = document.createElement("div");
            let img = document.createElement("img");
            let title = document.createElement("h2");
            let precio = document.createElement("p");
            let contadorCont = null;
            let addBtn = null;
            let restBtn = null;
            let caritoBtn = null;
            let contador = null;
            if(vista == "Tienda") {
                contadorCont = document.createElement("div");
                addBtn = document.createElement("button");
                restBtn = document.createElement("button");
                caritoBtn = document.createElement("button");
                contador = document.createElement("p");
            }
            
            prod.classList.add("producto");
            img.classList.add("producto-img");
            title.classList.add("producto-title");
            precio.classList.add("producto-precio");
            if(vista == "Tienda") {
                contadorCont.classList.add("producto-contador-cont");
                addBtn.classList.add("producto-addBtn");
                restBtn.classList.add("producto-restBtn");
                caritoBtn.classList.add("producto-caritoBtn");
                contador.classList.add("producto-contador");
            }
            
            img.src = productos[i]["url"];
            
            title.innerText = productos[i]["nombre"];
    
            precio.innerText = productos[i]["precio"] + "€/Kg";
    
            if(vista == "Tienda") {
                addBtn.innerText = "+";
                addBtn.addEventListener("click", addContador);
        
                contador.innerText = 0;
        
                restBtn.innerText = "-";
                restBtn.addEventListener("click", restContador);
        
                caritoBtn.innerText = "Anadir";
                caritoBtn.addEventListener("click", addToCarito);
            }
            
            prod.append(img);
            prod.append(title);
            prod.append(precio);
            if(vista == "Tienda") {
                contadorCont.append(addBtn);
                contadorCont.append(contador);
                contadorCont.append(restBtn);
                prod.append(contadorCont);
                prod.append(caritoBtn);
                tiendaDisplay.append(prod);
            }
            else if(vista == "Administracion") {
                prod.addEventListener("click", modProducto);
                adminDisplay.append(prod);
            }
        }
    }
    else {
        console.log("Manager");
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
        btn.style.display = "none";
    }
}

function checkContador(e) {
    if(parseInt(e.currentTarget.parentElement.querySelector(".producto-contador").innerText) == 0) {
        e.currentTarget.parentElement.parentElement.querySelector(".producto-caritoBtn").style.display = "none";
    }
    else {
        e.currentTarget.parentElement.parentElement.querySelector(".producto-caritoBtn").style.display = "block";
    }
}

function checkCaritoDisplay() {
    let carito = document.getElementById("carito");
    let caritoProductos = document.getElementById("carito-productos");

    if(caritoProductos.childElementCount != 0) carito.style.display = "flex";
    else carito.style.display = "none";
}

function addToCarito(e) {
    let carito = document.getElementById("carito");
    let caritoProductos = document.getElementById("carito-productos");
    let productoImg = e.currentTarget.parentElement.querySelector(".producto-img");
    let producoTitle = e.currentTarget.parentElement.querySelector(".producto-title");
    let productoPrecio = e.currentTarget.parentElement.querySelector(".producto-precio");
    let contador = e.currentTarget.parentElement.querySelector(".producto-contador-cont .producto-contador");

    if(carito.style.display == "none" || carito.style.display == "") carito.style.display = "flex";

    let productoActual = null;
    let caritoProdsActual = caritoProductos.querySelectorAll(".carito-productos-prod");  
    for(let prod of caritoProdsActual) {
        let title = prod.querySelector(".carito-productos-prod-title");
        if(title.innerText == producoTitle.innerText) {
            productoActual = prod;
            break;
        }
    }
    if(productoActual != null) {
        let total = productoActual.querySelector(".carito-productos-prod-total");

        productoActual.querySelector(".carito-productos-prod-cantidad").innerText = "x" + (parseInt(productoActual.querySelector(".carito-productos-prod-cantidad").innerText.substring(1)) + parseInt(contador.innerText));
        total.innerText = parseFloat(productoPrecio.innerText) * parseInt(productoActual.querySelector(".carito-productos-prod-cantidad").innerText.substring(1)) + "€";
    }
    else {
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
    }

    calcCaritoTotal();
    guardarCarito();
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
    
    let carito = document.getElementById("carito");
    let productosCount = document.getElementById("carito-productos").childElementCount;

    if(productosCount == 0) carito.style.display = "none";

    calcCaritoTotal();
    guardarCarito();
}

function guardarCarito() {
    let caritoProductos = document.getElementById("carito-productos");
    let caritoStorage = caritoProductos.innerHTML;
    localStorage.setItem("carito", caritoStorage);
}

function cargarCarito() {
    let caritoProductos = document.getElementById("carito-productos");
    if(localStorage.getItem("carito") != null) {
        caritoProductos.innerHTML = localStorage.getItem("carito");        
    }
    let btns = caritoProductos.querySelectorAll(".carito-productos-prod-deleteBtn");
    for(let btn of btns) {
        btn.addEventListener("click", deleteFromCarito);
    }
}

function modProducto(e) {
    console.log(e.currentTarget);
    
    let form = document.getElementById("admin-form");
    let formNombre = document.getElementById("admin-form-nombre");
    let formPrecio = document.getElementById("admin-form-precio");
    let formUrl = document.getElementById("admin-form-url");
    let formCategoria = document.getElementById("admin-form-categoria");

    let prodNombre = e.currentTarget.querySelector(".producto-title");
    let prodPrecio = e.currentTarget.querySelector(".producto-precio");
    let prodUrl = e.currentTarget.querySelector(".producto-img").src;

    formNombre.value = prodNombre.innerText;
    formPrecio.value = parseInt(prodPrecio.innerText);
    formUrl.value = prodUrl;
    formCategoria.value = categoriaActiva;
}

async function getProductos() {
    try {

        let response = await fetch("http://localhost:3000/productos");
        let data = await response.json();
        if(response.ok) {
            productos = data;
            defualtVista();
            cargarCarito();
            checkCaritoDisplay();
            defaultCategoria();
        }
        else {
            productos = [];
        }
    }
    catch (e) {
        
    }
}

document.addEventListener("DOMContentLoaded", getProductos);
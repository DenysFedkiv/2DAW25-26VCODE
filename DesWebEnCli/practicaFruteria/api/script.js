let productos;
let comprado = [];

const main = document.querySelector("main");

const tiendaBtn = document.getElementById("btn-tienda");
const tienda = document.getElementById("tienda");
const tiendaDisplay = document.getElementById("tienda-display");
const tiendaCatFrutaBtn = document.getElementById("tienda-cats-fruta");
const tiendaCatVerduraBtn = document.getElementById("tienda-cats-verdura");
const caritoProductos = document.getElementById("carito-productos");
const caritoCheckoutBtn = document.getElementById("carito-checkout-btn");
const caritoClearBtn = document.getElementById("carito-clear-btn");

let categoriaActiva = "fruta";

const adminBtn = document.getElementById("btn-admin");
const admin = document.getElementById("administracion");
const adminDisplay = document.getElementById("admin-productos-display");
const adminCatFrutaBtn = document.getElementById("admin-cats-fruta");
const adminCatVerduraBtn = document.getElementById("admin-cats-verdura");
const adminAddBtn = document.getElementById("admin-cats-add");
const formSaveBtn = document.getElementById("admin-form-saveBtn");
const formDeleteBtn = document.getElementById("admin-form-deleteBtn");
const formAddBtn = document.getElementById("admin-form-addBtn");

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
        statsGenereal();
        statsProductos();
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
            initAdminForm("add");
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

            prod.dataset.id = productos[i]["id"];
            
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
                defaultContador();
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

    if(caritoProductos.childElementCount != 0) {
        carito.style.display = "flex";
        calcCaritoTotal();
    }
    else carito.style.display = "none";
}

function addToCarito(e) {
    let carito = document.getElementById("carito");
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
    let caritoStorage = caritoProductos.innerHTML;
    localStorage.setItem("carito", caritoStorage);
}

function cargarCarito() {
    if(localStorage.getItem("carito") != null) {
        caritoProductos.innerHTML = localStorage.getItem("carito");        
    }
    let btns = caritoProductos.querySelectorAll(".carito-productos-prod-deleteBtn");
    for(let btn of btns) {
        btn.addEventListener("click", deleteFromCarito);
    }
}

function limpiarCarito() {
    caritoProductos.innerHTML = "";
    guardarCarito();
    checkCaritoDisplay();
}

caritoClearBtn.addEventListener("click", limpiarCarito);

function checkoutCarito() {
    console.log("1");
    if(caritoProductos.childElementCount != 0) {
        venta = {};
        console.log("2");
        for(let prod of caritoProductos.children) {
            nombre = prod.querySelector(".carito-productos-prod-title");
            cantidad = parseInt(prod.querySelector(".carito-productos-prod-cantidad").innerText.substring(1));
            for(let p of productos) {
                if(p["nombre"] == nombre.innerText) {
                    venta[p["id"]] = {"producto" : p, "cantidad" : cantidad};
                    break;
                }
            }
        }
        comprado.push(venta);
        limpiarCarito();
        setCompras();
    }
}

caritoCheckoutBtn.addEventListener("click", checkoutCarito);

function setCompras() {
    localStorage.setItem("comprado", JSON.stringify(comprado));
}

function cargarCompras() {
    if(localStorage.getItem("comprado") == null) comprado = [];
    else comprado = JSON.parse(localStorage.getItem("comprado"));
}

function modProducto(e) {
    console.log(e.currentTarget);
    
    let formNombre = document.getElementById("admin-form-nombre");
    let formPrecio = document.getElementById("admin-form-precio");
    let formUrl = document.getElementById("admin-form-url");
    let formCategoria = document.getElementById("admin-form-categoria");
    
    let prodNombre = e.currentTarget.querySelector(".producto-title");
    let prodPrecio = e.currentTarget.querySelector(".producto-precio");
    let prodUrl = e.currentTarget.querySelector(".producto-img").src;

    formNombre.value = prodNombre.innerText;
    formPrecio.value = parseFloat(prodPrecio.innerText);
    formUrl.value = prodUrl;
    formCategoria.value = categoriaActiva;
    formSaveBtn.dataset.id = e.currentTarget.dataset.id;
    formSaveBtn.dataset.nombre = prodNombre.innerText;
    formDeleteBtn.dataset.id = e.currentTarget.dataset.id;
    initAdminForm("update");
}

async function updateProducto(e) {
    let id = e.currentTarget.dataset.id;
    let nombreOld = e.currentTarget.dataset.nombre;
    let nombre = document.getElementById("admin-form-nombre").value;
    let precio = document.getElementById("admin-form-precio").value;
    let url = document.getElementById("admin-form-url").value;
    let categoria = document.getElementById("admin-form-categoria").value;
    if(nombre == "" || precio == "" || url == "") {
        alert("Error -> Tiene que llenar todos los campos")
    }
    else {
        try {
            response = await fetch("http://localhost:3000/productos/" + id, {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    nombre : nombre,
                    precio : parseFloat(precio),
                    url : url,
                    categoria : categoria
                })
            });
            if(response.ok) {
                data = await response.json();
                console.log(data);
                console.log(nombreOld);
                for(let prod of caritoProductos.children) {
                    console.log(prod.querySelector(".carito-productos-prod-title").innerText);
                    if(prod.querySelector(".carito-productos-prod-title").innerText == nombreOld) {
                        console.log(prod);
                        console.log(prod.querySelector(".carito-productos-prod-total").innerText);
                        prod.querySelector(".carito-productos-prod-title").innerText = nombre;
                        prod.querySelector(".carito-productos-prod-img").src = url;
                        prod.querySelector(".carito-productos-prod-total").innerText = parseInt(prod.querySelector(".carito-productos-prod-cantidad").innerText.substring(1)) * precio + "€";
                        break;
                    }
                }
                guardarCarito();
                getProductos();
            }
            else {
                alert("Error");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

formSaveBtn.addEventListener("click", updateProducto);

async function deleteProducto(e) {
    id = e.currentTarget.dataset.id;
    
    try {
        response = await fetch("http://localhost:3000/productos/" + id, {
            method : "DELETE",
            headers : {"Content-Type" : "application/json"}
        });
        if(response.ok) {
            data = await response.json();
            console.log(data);
            getProductos();
        }
        else {
            alert("Error");
        }
    }
    catch (e) {
        console.log(e);
    }
}

formDeleteBtn.addEventListener("click", deleteProducto);

async function addProducto(e) {
    console.log(e.currentTarget);
    
    if(e.currentTarget.id == "admin-cats-add") {
        let formNombre = document.getElementById("admin-form-nombre");
        let formPrecio = document.getElementById("admin-form-precio");
        let formUrl = document.getElementById("admin-form-url");
        let formCategoria = document.getElementById("admin-form-categoria");
    
        formNombre.value = "";
        formPrecio.value = "";
        formUrl.value = "";
        initAdminForm("add");
    }
    else {
        let nombre = document.getElementById("admin-form-nombre").value;
        let precio = document.getElementById("admin-form-precio").value;
        let url = document.getElementById("admin-form-url").value;
        let categoria = document.getElementById("admin-form-categoria").value;
        if(nombre == "" || precio == "" || url == "") {
            alert("Error -> Tiene que llenar todos los campos")
        }
        else {
            try {
            response = await fetch("http://localhost:3000/productos", {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    nombre : nombre,
                    precio : parseFloat(precio),
                    url : url,
                    categoria : categoria
                    })
                });
                if(response.ok) {
                    data = await response.json();
                    console.log(data);
                    getProductos();
                }
                else {
                    alert("Error");
                }
            }
            catch (e) {
                console.log(e);
            }
        }
    }
}

adminAddBtn.addEventListener("click", addProducto);
formAddBtn.addEventListener("click", addProducto);

function initAdminForm(forma) {
    if(forma == "add") {
        formSaveBtn.style.display = "none";
        formDeleteBtn.style.display = "none";
        formAddBtn.style.display = "block";
    }
    else if(forma == "update") {
        formSaveBtn.style.display = "block";
        formDeleteBtn.style.display = "block";
        formAddBtn.style.display = "none";
    }
}

async function getProductos() {
    try {
        let response = await fetch("http://localhost:3000/productos");
        if(response.ok) {
            let data = await response.json();
            productos = data;
            defaultCategoria();
            cargarCompras();
            defualtVista();
            cargarCarito();
            checkCaritoDisplay();
        }
        else {
            productos = [];
        }
    }
    catch (e) {
        console.log(e);
    }
}

function statsGenereal() {
    let ventasTotal = 0;
    let ticketsTotal = comprado.length;
    let mejorProd = {};

    let ventasTotalEl = document.getElementById("manager-stats-generales-ventasTotal-value");
    let ticketsTotalEl = document.getElementById("manager-stats-generales-ticketsTotal-value");
    let mejorProdEl = document.getElementById("manager-stats-generales-prodFav-value");

    for(let venta of comprado) {
        for(let id in venta) {
            ventasTotal+=(venta[id]["producto"]["precio"] * venta[id]["cantidad"]);
            mejorProd[venta[id]["producto"]["nombre"]] = mejorProd[venta[id]["producto"]["nombre"]] == undefined ? {"tickets" : 1} : {"tickets" : mejorProd[venta[id]["producto"]["nombre"]]["tickets"]+1};
        }
    }
    
    let mejorProdAx = "";
    let max = 0;
    for(let prod in mejorProd) {
        if(mejorProdAx == "") {
            mejorProdAx = prod;
        }
        if(mejorProd[prod]["tickets"] > max) {
            max = mejorProd[prod]["tickets"];
            mejorProdAx = prod;
        }
    }
    mejorProd = mejorProdAx;
    console.log(ventasTotal);
    console.log(ticketsTotal);
    console.log(mejorProd);
    ventasTotalEl.innerText = ventasTotal;
    ticketsTotalEl.innerText = ticketsTotal;
    mejorProdEl.innerText = mejorProd;
}

function statsProductos() {
    let managerProdLista = document.getElementById("manager-stats-productos-lista");

    managerProdLista.innerHTML = "";
    
    for(let venta of comprado) {
        for(let id in venta) {
            if(managerProdLista.childElementCount == 0) {
                let prod = document.createElement("div");
                let prodImg = document.createElement("img");
                let prodTitle = document.createElement("p");
                let prodUdVendidas = document.createElement("p");
                let prodTickets = document.createElement("p");
                let prodIngresos = document.createElement("p");

                prod.classList.add("manager-stats-productos-lista-prod");
                prodImg.classList.add("manager-stats-productos-lista-prod-img");
                prodTitle.classList.add("manager-stats-productos-lista-prod-title");
                prodUdVendidas.classList.add("manager-stats-productos-lista-prod-udVendidas");
                prodTickets.classList.add("manager-stats-productos-lista-prod-tickets");
                prodIngresos.classList.add("manager-stats-productos-lista-prod-ingresos");
                
                prodImg.src = venta[id]["producto"]["url"];
                prodTitle.innerText = venta[id]["producto"]["nombre"];
                prodUdVendidas.innerText = venta[id]["cantidad"];
                prodTickets.innerText = 1;
                prodIngresos.innerText = venta[id]["cantidad"] * venta[id]["producto"]["precio"];

                prod.append(prodImg);
                prod.append(prodTitle);
                prod.append(prodUdVendidas);
                prod.append(prodTickets);
                prod.append(prodIngresos);
                managerProdLista.append(prod);
            }
            else {
                existe = false;
                for(let prodE of managerProdLista.children) {
                    if(prodE.querySelector(".manager-stats-productos-lista-prod-title").innerText == venta[id]["producto"]["nombre"]) {
                        console.log(1);
                        let prodUdVendidas = prodE.querySelector(".manager-stats-productos-lista-prod-udVendidas");
                        let prodTickets = prodE.querySelector(".manager-stats-productos-lista-prod-tickets");
                        let prodIngresos = prodE.querySelector(".manager-stats-productos-lista-prod-ingresos");

                        prodUdVendidas.innerText = parseInt(prodUdVendidas.innerText) + venta[id]["cantidad"];
                        prodTickets.innerText = parseInt(prodTickets.innerText) + 1;
                        prodIngresos.innerText = parseFloat(prodIngresos.innerText) + (venta[id]["cantidad"] * venta[id]["producto"]["precio"]);
                        existe = true;
                        break;
                    }
                }
                if(!existe) {
                    let prod = document.createElement("div");
                    let prodImg = document.createElement("img");
                    let prodTitle = document.createElement("p");
                    let prodUdVendidas = document.createElement("p");
                    let prodTickets = document.createElement("p");
                    let prodIngresos = document.createElement("p");
                    
                    prod.classList.add("manager-stats-productos-lista-prod");
                    prodImg.classList.add("manager-stats-productos-lista-prod-img");
                    prodTitle.classList.add("manager-stats-productos-lista-prod-title");
                    prodUdVendidas.classList.add("manager-stats-productos-lista-prod-udVendidas");
                    prodTickets.classList.add("manager-stats-productos-lista-prod-tickets");
                    prodIngresos.classList.add("manager-stats-productos-lista-prod-ingresos");
                    
                    prodImg.src = venta[id]["producto"]["url"];
                    prodTitle.innerText = venta[id]["producto"]["nombre"];
                    prodUdVendidas.innerText = venta[id]["cantidad"];
                    prodTickets.innerText = 1;
                    prodIngresos.innerText = venta[id]["cantidad"] * venta[id]["producto"]["precio"];
                    
                    prod.append(prodImg);
                    prod.append(prodTitle);
                    prod.append(prodUdVendidas);
                    prod.append(prodTickets);
                    prod.append(prodIngresos);
                    managerProdLista.append(prod);
                }
            }
        }
        
    }

}

document.addEventListener("DOMContentLoaded", getProductos);
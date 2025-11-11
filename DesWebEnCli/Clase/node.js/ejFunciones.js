productos = ['laptop', 'mouse', 'teclado', 'monitor', 'tablet', 'auriculares'];
cantidades = [5, 15, 8, 3, 12, 20];
precios = [899.99, 25.50, 45.00, 299.99, 199.99, 75.25];


function nuevoInventraio(prod, cant, precio) {
    let inventario = [];
    let producto = {};
    for(let i = 0; i < prod.length; i++) {
        producto = {"nombre" : prod[i], "cantidad" : cant[i], "precio" : precio[i]};
        inventario.push(producto);
    }

    return inventario;
}


function mostrarInventario(inventario) {
    console.log("=== INVENTARIO COMPLETO ===");
    for(let i = 0; i < inventario.length; i++) {
        console.log(i + 1 + ". " + inventario[i].nombre + " - Cantidad: " + inventario[i].cantidad + " - Precio: €" + inventario[i].precio);
    }
}

function buscarProducto(inventario, nombreProducto) {
    let existe = false;
    console.log("=== BÚSQUEDA DE PRODUCTO ===");
    console.log("Buscando: " + nombreProducto);
    for(let i = 0; i < inventario.length; i++) {
        if(inventario[i].nombre == nombreProducto) {
            console.log("Producto encontrado en posicion " + i);
            console.log("Producto: " + inventario[i].nombre + " - Cantidad: " + inventario[i].cantidad + " - Precio: €" + inventario[i].precio);
            existe = true;
            break;
        }
    }
    if(!existe) {
        console.log("Producto no existe");
    }
}

function analizarInventario(inventario) {
    let totalInventario = 0;
    let masCaro = inventario[0];
    let stockB = 0;
    let mayorStock = inventario[0];

    console.log("=== ANÁLISIS DE INVENTARIO ===");
    for(let i = 0; i < inventario.length; i++) {
        totalInventario += inventario[i]["cantidad"] * inventario[i]["precio"];
        if(masCaro["precio"] < inventario[i]["precio"]) {
            masCaro = inventario[i];
        }
        if(inventario[i]["cantidad"] < 10) {
            stockB++;
        }
        if(mayorStock["cantidad"] < inventario[i]["cantidad"]) {
            mayorStock = inventario[i];
        }
    }
    console.log("Total de inventario: " + totalInventario);
    console.log("Mas caro es: " + masCaro["nombre"]);
    console.log("Productos con stock bajo: " + stockB);
    console.log("Mas stock tiene: " + mayorStock["nombre"]);
}

function actualizarStock(inventario) {
    console.log("=== ACTUALIZACIÓN DE STOCK ===");

    let cont = 0;
    for(let i = 0; i < inventario.length; i++) {
        if(inventario[i]["cantidad"] < 5) {
            let cantidadA = inventario[i]["cantidad"];
            inventario[i]["cantidad"] += 10;
            cont++;
            console.log("Rebasteciendo " + inventario[i]["nombre"] + ": " + cantidadA + " -> " + inventario[i]["cantidad"] + " unidades");
        }
    }
    if(cont != 0) {
        console.log("Stock actualizado correctamente");
    }
    else {
        console.log("No hay productos para actualizar");
    }
}

let inventario = nuevoInventraio(productos, cantidades, precios);



console.log(inventario);

console.log();

mostrarInventario(inventario);

console.log();

buscarProducto(inventario, "monitor2");

console.log();

analizarInventario(inventario);

console.log();

actualizarStock(inventario);
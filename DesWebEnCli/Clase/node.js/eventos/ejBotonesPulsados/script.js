const colores = ["lightyellow", "lightblue", "lightgreen", "lavender", "peachpuff", "honeydew", "thistle"];

function cambiarColor(button) {
    if(button.value == 6) {
        button.value = 0;
        button.style.backgroundColor = colores[button.value];
    } else {
        button.value = parseInt(button.value) + 1;
        button.style.backgroundColor = colores[button.value];
    }
}

function resetColores() {
    let botones = document.querySelectorAll("#contBotones button");
    for(let boton of botones) {
        boton.value = 0;
        boton.style.backgroundColor = colores[boton.value];
    }
}

resetColores();
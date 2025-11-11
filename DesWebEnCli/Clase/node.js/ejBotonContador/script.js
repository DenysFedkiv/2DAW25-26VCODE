let contador = 0;

function aumentarContador(num) {
    let div = document.getElementById("div");

    if(num.value == "3") {
        contador += 4;
    }
    else {
        contador += parseInt(num.value);
    }
    div.innerText = contador;
}
let notaExamen;
let notaPractica;

function getNotaExamen() {
    notaExamen = parseInt(prompt("Introduce nota de Examen"));
}

function getNotaPractica() {
    notaPractica = parseInt(prompt("Introduce nota de Practica"));
}

function calcularNota() {
    if(notaExamen == NaN) {
        alert("Falta nota de examen");
    }
    else if(notaPractica == NaN) {
        alert("Falta nota de practica");
    } else {
        let notaFinal = notaExamen * 0.6 + notaPractica * 0.4;

        if(notaFinal < 5) {
            alert("Nota final: " + notaFinal +  " | Resultado: Insuficiente");
        }
        else if(notaFinal < 6) {
            alert("Nota final: " + notaFinal +  " | Resultado: Suficiente");
        }
        else if(notaFinal < 7) {
            alert("Nota final: " + notaFinal +  " | Resultado: Bien");
        }
        else if(notaFinal < 9) {
            alert("Nota final: " + notaFinal +  " | Resultado: Notable");
        }
        else if(notaFinal <= 10) {
            alert("Nota final: " + notaFinal +  " | Resultado: Sobresaliente");
        }
    }
}
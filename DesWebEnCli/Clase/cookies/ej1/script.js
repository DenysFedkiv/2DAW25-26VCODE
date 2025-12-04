let btnSi = document.getElementById("btnSi");
let overlay = document.getElementById("overlay");

function checkConsentimiento() {
    let cookies = document.cookie.split("; ");

    console.log(cookies);
    
    for(let cookie of cookies) {
        if(cookie == "consentimiento=true") {
            overlay.style.display = "none";
            console.log(true);
            break;
        }
        else {
            overlay.style.display = "flex";
            console.log(false);
        }
    }
}

document.addEventListener("DOMContentLoaded", checkConsentimiento);

function confirmar() {
    document.cookie = "consentimiento=true; max-age=" + (30 * 24 * 60 * 60);
    overlay.style.display = "none";
}

btnSi.addEventListener("click", confirmar);
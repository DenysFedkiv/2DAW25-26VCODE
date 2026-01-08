let usuarios = {
    "admin": "1234",
    "usuario1": "pass1"
};

let header = document.querySelector("header");
let headerTitle = document.querySelector("header h1");
let logRegForm = document.querySelector("header form");
let logRegBtn = document.getElementById("logReg");
let logoutBtn = document.getElementById("logout");
let personalizar = document.getElementById("personalizar");

function checkLogin() {
    let cookies = document.cookie.split("; ");

    for(let cookie of cookies) {
        if(cookie.split("=")[0] == "usuario") {
            if(cookie.split("=")[1] != "") {
                logRegForm.style.display = "none";
                personalizar.style.display = "flex";
                logoutBtn.style.display = "block";
                headerTitle.innerText = "Bienvenido " + cookie.split("=")[1];
                actualizarEstilos();
                break;
            }
        }
        else {
            logRegForm.style.display = "flex";
            personalizar.style.display = "none";
            logoutBtn.style.display = "none";
            headerTitle.innerText = "Iniciar sesion";
            estilosBase();
        }
    }
}

function login() {
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    
    if(username in usuarios) {
        console.log("si");
        
        if(pass == usuarios[username]) {
            logRegForm.style.display = "none";
            personalizar.style.display = "flex";
            logoutBtn.style.display = "block";
            headerTitle.innerText = "Bienvenido " + username;
            colorFondo.value = "#FFFFFF";
            tipoLetra.value = "sans";
            tamanoLetra.value = "16";
            document.cookie = "usuario=" + username + "; max-age=240";
            document.cookie = username + "-tipoLetra=sans; max-age=240";
            document.cookie = username + "-tamanoLetra=16; max-age=240";
            document.cookie = username + "-colorFondo=#ffffff; max-age=240";
            actualizarEstilos();
        }
    }
    else {
        console.log("no");
        
        logRegBtn.removeEventListener("click", login);
        logRegBtn.addEventListener("click", registrar);
        logRegBtn.innerText = "Registrar";
        headerTitle.innerText = "Registrar cuenta nueva";
    }
}

logRegBtn.addEventListener("click", login);

function registrar() {
    let username = document.getElementById("username").value.replace(/\s+/g, "");
    let pass = document.getElementById("pass").value;

    usuarios[username] = pass;
    logRegBtn.removeEventListener("click", registrar);
    logRegBtn.addEventListener("click", login);
    logRegBtn.innerText = "Login";
}

function cookiesEstilos(e) {
    let username = headerTitle.innerText.split(" ")[1];
    if(e.currentTarget.tagName == "SELECT") {
        document.cookie = username + "-tipoLetra=" + e.currentTarget.value + "; max-age=240";
    }
    else if(e.currentTarget.type == "color") {
        document.cookie = username + "-colorFondo=" + e.currentTarget.value + "; max-age=240";
    }
    else if(e.currentTarget.type == "number") {
        document.cookie = username + "-tamanoLetra=" + e.currentTarget.value + "; max-age=240";
    }
    actualizarEstilos();
}

function actualizarEstilos() {
    let cookies = document.cookie.split("; ");
    let username = headerTitle.innerText.split(" ")[1];

    for(let cookie of cookies) {
        if(cookie.split("=")[0] == username + "-colorFondo") {
            document.body.style.backgroundColor = cookie.split("=")[1];
        }
        else if(cookie.split("=")[0] == username + "-tipoLetra") {
            for(let p of document.querySelectorAll("p")) {
                p.classList.remove("sans");
                p.classList.remove("serif");
                p.classList.remove("mono");
                p.classList.add(cookie.split("=")[1]);
            }
        }
        else if(cookie.split("=")[0] == username + "-tamanoLetra") {
            for(let p of document.querySelectorAll("p")) {
                p.style.fontSize = cookie.split("=")[1] + "px";
            }
        }
    }
}

function estilosBase() {
    document.body.style.backgroundColor = "";
    for(let p of document.querySelectorAll("p")) {
        p.classList.remove("sans");
        p.classList.remove("serif");
        p.classList.remove("mono");
    }
    for(let p of document.querySelectorAll("p")) {
        p.style.fontSize = "";
    }
}

function logout() {
    let cookies = document.cookie.split("; ");
    let username = headerTitle.innerText.split(" ")[1];

    for(let cookie of cookies) {
        if(cookie.split("=")[0] == "usuario") {
            document.cookie = "usuario= ; max-age=-1";
            for(let cookie of cookies) {
                if(cookie.split("=")[0] == username + "-colorFondo") {
                    document.cookie = username + "-colorFondo= ; max-age=-1"
                }
                else if(cookie.split("=")[0] == username + "-tipoLetra") {
                    document.cookie = username + "-tipoLetra= ; max-age=-1"
                }
                else if(cookie.split("=")[0] == username + "-tamanoLetra") {
                    document.cookie = username + "-tamanoLetra= ; max-age=-1"
                }
            }
            break;
        }
    }
    logoutBtn.style.display = "none";
    checkLogin();
    estilosBase();
}

logoutBtn.addEventListener("click", logout);

let colorFondo = document.getElementById("color");
let tipoLetra = document.getElementById("tipoLetra");
let tamanoLetra = document.getElementById("tamanoLetra");

colorFondo.addEventListener("input", cookiesEstilos);
tipoLetra.addEventListener("change", cookiesEstilos);
tamanoLetra.addEventListener("input", cookiesEstilos);

document.addEventListener("DOMContentLoaded", checkLogin);
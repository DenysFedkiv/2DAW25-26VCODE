let usuarios = {};

let us = "";
let tp = "";
for(let i = 0; i < localStorage.length; i++) {
    if(localStorage.key(i) == "usuarios") {
        us = localStorage.getItem("usuarios").trim().split(" ");
    }
    if(localStorage.key(i) == "tipo") {
        tp = localStorage.getItem("usuarios").trim().split(" ");
    }
}

for(let i = 0; i < us.length; i++) {
    usuarios[us[i]] = tp[i];
}
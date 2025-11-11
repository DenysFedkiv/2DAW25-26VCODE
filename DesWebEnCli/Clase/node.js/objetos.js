let persona = ["jose", 20, "+346666666", "Calle ...."];
let personas= [].push(persona);

let personaObjeto = {"nombre" : "Jose", "edad" : 20, "calle" : "Calle ...."};
console.log(personaObjeto["nombre"]);
console.log(personaObjeto.nombre);

let direccion = {"calle" : "Calle Nota", "codigoPostal" : 22390};
personaObjeto = {"nombre" : "Jose", "edad" : 20, "direccion" : direccion};

console.log(personaObjeto.direccion.calle);
console.log(personaObjeto.direccion.codigoPostal);
console.log("edad" in personaObjeto);
delete personaObjeto["edad"];
console.log("edad" in personaObjeto);


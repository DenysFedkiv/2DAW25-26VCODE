//Arrays son dinamicos, no tienen limite
//1) Arrays se pueden crear con diferentes tipos de datos
console.log("1)");
let array1 = [1, 2, 3, "Nombre", function () {console.log("Array function")}, 3.14];

console.log(array1);
//2) .lenth para ver cuantos elemnetos tiene array
console.log("2)");
console.log(array1.length);

let array2 = [1, 2, 3];

console.log(array2);

//3) .push para añadir un elemento al final del array
console.log("3)");
array2.push(4);

console.log(array2);

//4) .pop elimina y devuelve ultimo elemento de array
console.log("4)");
let ultimo = array2.pop(); 
console.log(ultimo);

console.log(array2);

//5) .unshift para añadir un elemento al principio del array
console.log("5)");
let array3 = [2, 1, 1, 2, 3];

console.log(array3);

array3.unshift(3);
console.log(array3);

//6) .shift elimina y devuelve primer elemento de array
console.log("6)");
let primero = array3.shift();
console.log(primero);

//7) .splice(n, m) para eliminar m elementos desde array de posicion n
console.log("7)");
let array4 = ["a", "b", "c"];
console.log(array4);

array4.splice(2, 1);
console.log(array4);

array4 = ["a", "b", "c"];
console.log(array4);

array4.splice(1, 2);
console.log(array4);

//8) .splice(n, 0, e) para insertar elemento e desde posicion n
console.log("8)");
array4 = ["a", "b", "c"];
console.log(array4);

array4.splice(2, 0, "bc");
console.log(array4);

//9) .splice(n, m, e1, e2, etc.) para reemplazar m elementos desde posicion n por otros elementos e1, e2, etc.
console.log("9)");
console.log(array4);

array4.splice(2, 4, "c", "d", "e", "f");
console.log(array4);

//10) .icludes(e) para saber si arrays contiene elemento e, si si devuelve true, si no devuelve false | .indexOf(e) para devolver posicion de elemento e si existe, si no existe devuelve -1
console.log(array4);

console.log(array4.includes("d"));
console.log(array4.indexOf("d"));

//11) Al modificar array5C se modifica array5
console.log("11)");
let array5 = [1, 2, 3, 4];
let array5C = array5;
console.log(array5);
console.log(array5C);

array5C[1] = 3;
console.log(array5);
console.log(array5C);
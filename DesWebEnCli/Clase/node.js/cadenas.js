let cadena1 = "Hola Mundo de programacion!";
let cadenaSplit = cadena1.split(" ");
console.log(cadena1);
console.log(cadenaSplit);

console.log();
// Para separar cada caracter se usa ("")
cadenaSplit = cadena1.split("");
console.log(cadena1);
console.log(cadenaSplit);

console.log();
let cadena2 = cadena1.concat(" Hola Mundo!");
console.log(cadena2);

console.log();
let cadena3 = "Me gustan manzanas";
let cadena4 = cadena3.replace("manzanas", "melocotones");
console.log(cadena3);
console.log(cadena4);

console.log();
cadena4 = cadena2.replace(/Hola/g, "H");
console.log(cadena1);
console.log(cadena4);

console.log();
cadena4 = cadena2.replaceAll("Hola", "HH");
console.log(cadena1);
console.log(cadena4);

console.log();
console.log(cadena4.toLowerCase());
console.log(cadena4.toUpperCase());

console.log();
let cadena5 = "      Espacion en blanco      ";
console.log(cadena5);
console.log(cadena5.trim());

console.log();
let cadena6 = "+34584563873 numero de casa"
console.log(cadena6);
console.log(cadena6.substring(0, 12));

console.log();
console.log(cadena6.includes("56"));
console.log(cadena6.startsWith("+34"));
console.log(cadena6.endsWith("casa"));

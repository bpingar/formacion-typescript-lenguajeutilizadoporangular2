function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
var nombre = "Beatriz del Pino";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
//Variables y tipos
var nombre2 = "Beatriz del Pino";
var edad = 31;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
alert("Hola Mundo alert");
var a = 7;
var b = 12;
if (a == 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF:" + a_1 + " - " + b);
}
console.log("FUERA DEL IF:" + a + " - " + b);
// Funciones y tipado
function devuelveNumero(num) {
    return "Número devuelto: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = true;
    }
    else {
        var num = false;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));

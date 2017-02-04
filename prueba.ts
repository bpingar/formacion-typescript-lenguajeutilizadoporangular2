function holaMundo(nombre){
    return "Hola Mundo!! Soy "+nombre;
}

var nombre="Beatriz del Pino";

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML=holaMundo(nombre);

//Variables y tipos
var nombre2:string = "Beatriz del Pino";
var edad:number = 31;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "JavaScript", "CSS"];

etiqueta.innerHTML = nombre+" - "+ edad ; 

alert("Hola Mundo alert");

var a = 7;
var b = 12;
if(a==7){
    let a=4;
    var b = 1;
    console.log("DENTRO DEL IF:"+a+" - "+b);
}
console.log("FUERA DEL IF:"+a+" - "+b);

// Funciones y tipado

function devuelveNumero(num:number):string{
    return "Número devuelto: "+num;
}

function devuelveString(texto:string):any{
    if(texto=="hola"){
        var num=true;
    }else{
        var num=false;
    }
    return num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola"));
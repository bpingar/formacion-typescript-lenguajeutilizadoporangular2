var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        if (modelo == null) {
            this.modelo = "BMW Genérico";
        }
        else {
            this.modelo = modelo;
        }
        this.velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche1 = new Coche("Renault Clio");
var coche2 = new Coche();
var coche3 = new Coche();
//coche1.setColor("ROJO");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche2.setColor("AZUL");
coche3.setColor("VERDE");
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad del coche 1 despues de frenar es: " + coche1.getVelocidad());
/*console.log("El color del coche 2 es: "+ coche2.getColor());
console.log("El color del coche 3 es: "+ coche3.getColor());
*/ 

interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color:string;
    public modelo:string;
    public velocidad:number;

    constructor(modelo:any=null){
        this.color="Blanco";
        if(modelo==null){
            this.modelo="BMW Genérico";
        }else{
            this.modelo=modelo;
        }
        this.velocidad=0;
    }

    public getColor():string{
        return this.color;
    }

    public setColor(color:string){
        this.color=color;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo=modelo;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }
    
    public getVelocidad():number{
        return this.velocidad;
    }
}

var coche1= new Coche("Renault Clio");
var coche2= new Coche();
var coche3= new Coche();

//coche1.setColor("ROJO");
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();

coche2.setColor("AZUL");
coche3.setColor("VERDE");

console.log("El modelo del coche 1 es: "+ coche1.getModelo());
console.log("El color del coche 1 es: "+ coche1.getColor());
console.log("La velocidad del coche 1 es: "+ coche1.getVelocidad());
coche1.frenar();
console.log("La velocidad del coche 1 despues de frenar es: "+ coche1.getVelocidad());
/*console.log("El color del coche 2 es: "+ coche2.getColor());
console.log("El color del coche 3 es: "+ coche3.getColor());
*/
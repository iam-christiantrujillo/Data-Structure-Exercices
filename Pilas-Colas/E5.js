// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra
// Cola 1: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 2: [ amarillo, rojo, azul, morado]
// Cola 3: [rosa, verde, negro, blanco]

class Colores{
    constructor(){
        this.colaColores = []
        this.colaPares = []
        this.colaNones = []
    }

    add(color){
        this.colaColores.push(color)
    }

    acomodar(){

        for(var i=0; i < this.colaColores.length; i++){

            if( i % 2 == 0 ){
                this.colaPares.push(this.colaColores[i])
            }else{
                this.colaNones.push(this.colaColores[i])
            }

        }
    }
    
}

const newCola = new Colores()

newCola.add("amarillo")
newCola.add("rosa")
newCola.add("rojo")
newCola.add("verde")
newCola.add("azul")
newCola.add("negro")
newCola.add("morado")
newCola.add("blanco")

newCola.acomodar()

console.log(newCola)
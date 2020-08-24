// 1.- Hacer una función que reciba una pila como parámetro, y un número, la función debe de sacar el número de elementos que diga el número (segundo parámetro)
// Entrada : mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'], 3)
// Salida: ['Manzana','Cebolla','Apio','Naranja']

class Stack{
    constructor(lista,number){
        this.lista = lista
        this.number = number
    }

    miFuncion(Elementos,numero){
        this.lista = Elementos
        this.number = numero

        for ( var i=1; i<=this.number; i++){
            this.lista.pop()
        }
    }
}

const nuevaPila = new Stack ()

nuevaPila.miFuncion(["Manzana","Cebolla","Apio","Naranja","Papaya","Sandia","Melon"], 3)

console.log(nuevaPila)
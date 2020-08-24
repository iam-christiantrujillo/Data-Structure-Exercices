// 2.- Escribir una función reemplazar que tenga como parámetro una pila de elementos de tipo Number y dos valores también de tipo Number nuevo y viejo de forma que si el segundo valor aparece en algún lugar de la pila,sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,5,8,1,7]

class Stack{
    constructor(lista,add,deleteElements){
        this.lista = lista
        this.add = add
        this.deleteElements = deleteElements
    }

    reemplazar(Elementos,numero1,deleteElements){
        this.lista = Elementos
        this.add = numero1
        this.deleteElements = deleteElements

        for ( var i=1; i<=this.deleteElements; i++){
            this.lista.pop()
        }
        
        this.lista.push(this.add)
    }
}

const nuevaPila = new Stack ()

nuevaPila.reemplazar([3,2,3,4,6,8,1,2,5,5],7 ,2)

console.log(nuevaPila)
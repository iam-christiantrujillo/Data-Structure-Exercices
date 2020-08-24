// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista.
// Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.


class Node{ // este es mi nodo
    constructor(dato){
        this.dato = dato
        this.next = null
    }
}

class LinkedList{ // esta es mi lista enlazada
    constructor(){
        this.head = null // esto significa que no hay nada en la lista 
        this.length = 0 // numero de elementos dentro de la lista
    }

    //Como agregamos algo a una lista
    add(dato){
        const node = new Node(dato) //creando nodo con su dato

        if(this.head === null){ //si mi lista esta vacia 
            this.head = node //asigno el primer nodo como la cabeza de la lista
        }else{ //ejecuta esto cuando hay mas elementos en la lista
            //Tengo que buscar el ultimo elemento de mi lsita 
            //y asociarlo con el penultimo 
            var currentNode = this.head //Un auxiliar de nuestro nodo

                while(currentNode.next){ //Va a ejecutar esto mientras esto sea verdadero
                    if(node.dato !== currentNode.dato){ //esto hara que revise si ese elemento ya esta en la lista
                    //mientras haya un nodo sigue buscando            
                        currentNode = currentNode.next
                    }else{
                        return //en el caso de que ya este en la lista no se agregara 
                    }
                }
                currentNode.next = node
        }
        this.length++;
            //es para saber cuantos elementos tengo en mi lista 
            //aumento en uno el numero de elemntos dentro de mi lista        
    }
}

const myList = new LinkedList();
myList.add(22);
myList.add(33)
myList.add(44)
myList.add(55)
myList.add(66)
myList.add(33)

console.log(JSON.stringify(myList)) //json.stringify convierte objeto a string



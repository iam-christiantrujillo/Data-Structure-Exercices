// 2.- Escribir un programa para formar una lista que realicen las siguientes tareas:
// a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por
// el último nodo.
// b) Recorrer la Lista para mostrar los Elementos por pantalla.
// c) Mostrar todos los Nodos que superen un valor determinado. 

class Node {

    constructor(dato, next){
        this.dato = dato;
        this.next = next;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.length = 0;
    }

    add(dato){
        const node = new Node(dato);
        if(this.head === null){
            this.head = node;
        }else{
            var currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        this.length++;
    }


    MostarValorQueSupera(value){
        if(this.head === null){
            console.log("No hay elementos en la lista")
        }else{
            var currentNode = this.head;

            while(currentNode){
                if(currentNode.dato > value){
                    console.log("El valor " + currentNode.dato + " supera a " + value);
                }
                currentNode = currentNode.next;
            }
        }
    }
}

const myList = new LinkedList();
myList.add(22);
myList.add(33);
myList.add(44);
myList.add(55)
myList.MostarValorQueSupera(25);
console.log(JSON.stringify(myList))
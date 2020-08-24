// Escribe una función que dado un árbol binario A, obtenga una copia B del mismo. 

class Node{

    constructor(dato,left,right){
        this.dato = dato
        this.left = left
        this.right = right
    }
}

class Tree {

    constructor(){
        this.root = null
    }

    add(dato){
        if(this.root === null){
            this.root = new Node(dato,null,null)
            return; //por que quiero que aqui acabe el metodo
        }

        var currentNode = this.root
        while(true){ //loop infinito 
            if(currentNode.dato > dato){ //esto va a la izquierda

                if(currentNode.left !== null){ //hay otro nodo a la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode.left = new Node(dato,null,null)
                    return;
                }
            }else{ //si no va a la izquierda va a la derecha
                //aqui voy a programar la derecha
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                }else{
                    currentNode.right = new Node(dato,null,null)
                    return;
                }
            }   
        }
    }
}

function duplicar(tree){

    var copia = tree
    console.log("Original:", tree)
    console.log("Copia:", copia)

}

const mytree = new Tree()

mytree.add(30)
mytree.add(15)
mytree.add(60)
mytree.add(7)
mytree.add(22)

duplicar(mytree)


// Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.

class Node{

    constructor(dato,left,right){
        this.dato = dato
        this.left = left
        this.right = right
    }


}

class Tree {
    // Tiene el metodo agregar nodo
    // Tiene el metodo verificar si existe el nodo

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
            }else{ //si no va a la izquierda va ala derecha
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                }else{
                    currentNode.right = new Node(dato,null,null)
                    return;
                }
            }   
        }
    }

    nodosApartirDe(dato){

        var currentNode = this.root
        while(currentNode !== null){ //Mientras haya un currentNode
            if(dato === currentNode.dato){
                console.log ("Nodos a partir de " + dato + ":", currentNode) 
                return
            }else{
                if(dato < currentNode.dato){
                    //Me voy a buscar a la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode = currentNode.right
                }
            }

        }
        return false;
    }
    

}

const mytree = new Tree()

mytree.add(30)
mytree.add(15)
mytree.add(60)
mytree.add(7)
mytree.add(22)
mytree.add(17)
mytree.add(27)
mytree.add(45)
mytree.add(75)


mytree.nodosApartirDe(60)


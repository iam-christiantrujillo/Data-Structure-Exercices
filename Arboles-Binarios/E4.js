// Escribe una función que devuelva el número de hojas de un árbol binario.

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
        this.contador= 0
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
                    this.contador++

                    return;
                }
            }else{ //si no va a la izquierda va ala derecha
                //aqui voy a programar la derecha
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                }else{
                    currentNode.right = new Node(dato,null,null)
                    this.contador++

                    return;
                }
            }   
        }
    }

    numeroDeHojas(){
        var contador = this.contador
        console.log("El número de hojas de este arbol son: " , contador)
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
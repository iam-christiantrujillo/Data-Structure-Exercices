// Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no. 


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

function comparar(tree1, tree2){

    if((JSON.stringify(tree1) === JSON.stringify(tree2)) === true){
        console.log("Estos arboles son iguales")
    } else if((JSON.stringify(tree1) === JSON.stringify(tree2)) === false ){
        console.log("Estos arboles NO son iguales")
    }

}

const mytree = new Tree()
const mytree2 = new Tree()
const mytree3 = new Tree()

mytree.add(30)
mytree.add(15)
mytree.add(60)
mytree.add(7)
mytree.add(22)

mytree2.add(30)
mytree2.add(15)
mytree2.add(60)
mytree2.add(7)
mytree2.add(22)

mytree3.add(30)
mytree3.add(12)
mytree3.add(62)
mytree3.add(8)
mytree3.add(22)

comparar(mytree, mytree2)
comparar(mytree, mytree3)



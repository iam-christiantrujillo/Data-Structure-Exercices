// 4.-  Un almacén tiene capacidad para apilar n contenedores. Cada contenedor tiene un número
// de identificación. Cuando se desea retirar un contenedor específico, deben retirarse
// primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro
// y regresarlos. 


class Almacen{
    constructor(){
        this.contador = 0
        this.pila = {}
        this.numQuitados = 0
        this.quitados= {}
    }

    apilar(nuevoElemnto){
        this.pila[this.contador] = nuevoElemnto; 
        this.contador++;
    }

    quitar(numeroDeContenedor){
        this.idDeContenedorQuitado = numeroDeContenedor



        while ( this.contador !==this.idDeContenedorQuitado){
            this.contador--;
            var contenedor = this.pila[this.contador]
            delete this.pila[this.contador]
            console.log("SE LEVANTA:", contenedor)
            this.quitados[this.numQuitados] = contenedor
            this.numQuitados++

        }

        
        this.numQuitados--;
        var contenedor = this.quitados[this.numQuitados]
        delete this.quitados[this.numQuitados]
        console.log("SE RETIRA: ", contenedor)
        
    }

    PonerContenedoresRetirados(){
        
        while(this.numQuitados !== 0){
        this.numQuitados--
        var regreso = this.quitados[this.numQuitados]
        delete this.quitados[this.numQuitados]
        this.pila[this.contador] = regreso;
        this.contador++;
        }
        delete this.numQuitados 
        delete this.quitados
    }
}

var nuevoAlmacen = new Almacen()

nuevoAlmacen.apilar("Contenedor a")
nuevoAlmacen.apilar("Contenedor b")
nuevoAlmacen.apilar("Contenedor c")
nuevoAlmacen.apilar("Contenedor d")
nuevoAlmacen.apilar("Contenedor e")

nuevoAlmacen.quitar(0)
nuevoAlmacen.PonerContenedoresRetirados()



console.log(nuevoAlmacen)
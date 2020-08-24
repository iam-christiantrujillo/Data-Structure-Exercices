// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta. 
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

class Viaje{
    constructor(){
        this.count= 0
        this.ida= []
        this.regreso = []
    }

    add(Elementos){
        this.ida[this.count] = Elementos
        this.count++
    }

    regresar(){
        console.log(this.ida)
        console.log("Regresando a casa")
        for(var i=this.count; i>=0; i--){
        this.count= i
        var result = this.ida[this.count]
        delete this.ida[this.count]
        this.regreso.push(result)
        }
        this.regreso.shift()

        delete this.count
        delete this.ida
    }

}

const Recorrido = new Viaje()

console.log("Empezando el viaje")
Recorrido.add("Pueblo Origen")
Recorrido.add("Pueblo 1")
Recorrido.add("Pueblo 2")
Recorrido.add("Destino")

Recorrido.regresar()
console.log(Recorrido)





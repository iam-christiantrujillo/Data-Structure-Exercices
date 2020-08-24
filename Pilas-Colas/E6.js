class Cola{
    constructor(Cola){
        this.cola = Cola
        this.losQueTienenBoleto = []
        this.losQueNoTienenBoleto= []
    }

    Separar(){

        for(var i=0; i<this.cola.length; i++){

            if(this.cola[i].ticket === true){
                var usuario = this.cola[i]
                this.losQueTienenBoleto.push(usuario)

            }else{
                var usuario = this.cola[i]
                this.losQueNoTienenBoleto.push(usuario)
            }
        }
    }
}

var colaConcierto = new Cola([{user:'User1',ticket:true},{user:'User2',ticket:true},{user:'User3',ticket:false},{user:'User4',ticket:true},
{user:'User5',ticket:false},{user:'User6',ticket:false},{user:'User7',ticket:true},{user:'User8',ticket:true},
{user:'User9',ticket:true},{user:'User10',ticket:false},{user:'User11',ticket:true}])

colaConcierto.Separar()

console.log(colaConcierto)
class Pedido {
    constructor(id) {
        this.id = id;
        this.pronto = false;
    }
 
    marcarComoPronto() {
        this.pronto = true;
    }
 
}
 
module.exports = Pedido;
 
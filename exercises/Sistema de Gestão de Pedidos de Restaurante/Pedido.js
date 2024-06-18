class Pedido {
    constructor(id) {
      this.id = id;
      this.pronto = false;
    }

    marcarComoPronto(item) {
      this.pronto = true;
    }

   
}

module.exports = Pedido;
class Pedido {
    constructor(numero, itens = []) {
       this.numero = numero;
       this.itens = itens;
       this.pronto = false;
    }

    adicionarItem(item) {
      this.itens.push(item);
    }

    marcarComoPronto() {
        this.pronto = true;
    }

    listarItens() {
        return this.itens;
    }
}


module.exports = Pedido;
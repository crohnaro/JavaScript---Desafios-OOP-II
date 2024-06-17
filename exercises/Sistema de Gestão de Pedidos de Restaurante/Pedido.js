class Pedido {
    constructor(numero, itens = []) {
        this.numero = numero;
        this.itens = itens;
        this.pronto = false;
    }
 
    adicionarItem(item) {
        this.itens.push(item);
        return item;
    }
 
    marcarComoPronto() {
        this.pronto = true;
    }
}
 
module.exports = Pedido
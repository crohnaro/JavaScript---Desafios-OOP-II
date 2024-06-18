const Pedido = require('./Pedido');

class Restaurante {
    constructor() {
        this.pedidos = [];
    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    removerPedido(numero) {
        this.pedidos = this.pedidos.filter(pedido => pedido.numero !== numero);
    }

    listarPedidosPendentes() {
        return this.pedidos.filter(pedido => !pedido.pronto);
    }

    listarPedidosProntos() {
        return this.pedidos.filter(pedido => pedido.pronto);
    }
}

module.exports = Restaurante;
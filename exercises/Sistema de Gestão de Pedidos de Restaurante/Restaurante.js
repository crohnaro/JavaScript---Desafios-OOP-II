class Restaurante {
    constructor() {
        this.pedidos = [];
    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    removerPedido(id) {
        this.pedidos = this.pedidos.filter(pedido => pedido.id !== id);
    }

    listarPedidosPendentes() {
        return this.pedidos.filter(pedido => !pedido.pronto);
    }

    listarPedidosProntos() {
        return this.pedidos.filter(pedido => pedido.pronto);
    }
}

module.exports = Restaurante;
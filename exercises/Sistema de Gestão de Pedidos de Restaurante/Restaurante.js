class Restaurante {
    constructor() {
        this.pedidos = [];
    }

    adicionarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    removerPedido(pedidoId) {
        this.pedidos = this.pedidos.filter(p => p.id !== pedidoId);
    }

    calcularTotal() {
       return this.pedidos.reduce((total, pedido) => total + pedido.calcularTotal(), 0);
    }

    listarPedidos() {
        return this.pedidos;
    }

    listarPedidosPendentes() {
        return this.pedidos.filter(pedido => !pedido.pronto);
    }

    listarPedidosProntos() {
        return this.pedidos.filter(pedido => pedido.pronto);
    }
}

module.exports = Restaurante;
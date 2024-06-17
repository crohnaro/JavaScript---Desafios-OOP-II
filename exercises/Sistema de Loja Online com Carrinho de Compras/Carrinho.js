class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
        this.itens.push({ produto, quantidade });
    }

    removerItem(produto) {
        this.itens = this.itens.filter(item => item.produto !== produto);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }

    listarItens() {
        return this.itens;
    }
}

module.exports = Carrinho;

class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
        const itemIndex = this.itens.findIndex(item => item.produto.nome === produto.nome);
        if (itemIndex === -1) {
            this.itens.push({ produto, quantidade });
        } else {
            this.itens[itemIndex].quantidade += quantidade;
        }
    }

    removerItem(produto) {
        this.itens = this.itens.filter(item => item.produto.nome !== produto.nome);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
    }

    listarItens() {
        return this.itens;
    }
}

module.exports = Carrinho;


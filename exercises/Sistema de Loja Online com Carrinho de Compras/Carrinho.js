class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
        // Check if the product already exists in the cart
        const itemExistente = this.itens.find(item => item.produto.nome === produto.nome);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            this.itens.push({ produto, quantidade });
        }
    }

    removerItem(produto) {
        this.itens = this.itens.filter(item => item.produto.nome !== produto.nome);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }

    listarItens() {
        return this.itens;
    }
}

module.exports = Carrinho;

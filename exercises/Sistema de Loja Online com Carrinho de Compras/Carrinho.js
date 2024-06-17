class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
       this.itens.push({produto, quantidade});
    }

    removerItem(produto) {
        this.itens = this.itens.filter(item => item.produto !== produto);
    }

    calcularTotal() {
        let total = 0;
        this.itens.forEach(item => {
            total += item.produto.preco * item.quantidade;
        });
        return total;
    }

    listarItens() {
        return this.itens;
    }
}

module.exports = Carrinho;
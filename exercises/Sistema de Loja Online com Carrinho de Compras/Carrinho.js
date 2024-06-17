class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarItem(produto, quantidade) {
        // Verifica se o produto já está no carrinho
        const itemExistente = this.itens.find(item => item.produto === produto);

        if (itemExistente) {
            // Se o produto já existe, atualiza a quantidade
            itemExistente.quantidade += quantidade;
        } else {
            // Caso contrário, adiciona um novo item ao carrinho
            this.itens.push({ produto, quantidade });
        }
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

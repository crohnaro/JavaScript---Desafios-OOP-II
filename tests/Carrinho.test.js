const Carrinho = require('../exercises/Sistema de Loja Online com Carrinho de Compras/Carrinho');
const Produto = require('../exercises/Sistema de Loja Online com Carrinho de Compras/Produto');

test('Adicionar item ao carrinho', () => {
    const carrinho = new Carrinho();
    const produto = new Produto('Camiseta', 50);
    carrinho.adicionarItem(produto, 2);
    expect(carrinho.itens).toEqual([{ produto, quantidade: 2 }]);
});

test('Remover item do carrinho', () => {
    const carrinho = new Carrinho();
    const produto = new Produto('Camiseta', 50);
    carrinho.adicionarItem(produto, 2);
    carrinho.removerItem(produto);
    expect(carrinho.itens).toEqual([]);
});

test('Calcular total do carrinho', () => {
    const carrinho = new Carrinho();
    const produto1 = new Produto('Camiseta', 50);
    const produto2 = new Produto('Calça', 100);
    carrinho.adicionarItem(produto1, 2);
    carrinho.adicionarItem(produto2, 1);
    const total = carrinho.calcularTotal();
    expect(total).toBe(200);
});

test('Listar itens do carrinho', () => {
    const carrinho = new Carrinho();
    const produto1 = new Produto('Camiseta', 50);
    const produto2 = new Produto('Calça', 100);
    carrinho.adicionarItem(produto1, 2);
    carrinho.adicionarItem(produto2, 1);
    const itens = carrinho.listarItens();
    expect(itens).toEqual([
        { produto: produto1, quantidade: 2 },
        { produto: produto2, quantidade: 1 }
    ]);
});
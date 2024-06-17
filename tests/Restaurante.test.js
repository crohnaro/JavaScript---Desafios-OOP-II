
const Restaurante = require('../exercises/Sistema de Gestão de Pedidos de Restaurante/Restaurante');
const Pedido = require('../exercises/Sistema de Gestão de Pedidos de Restaurante/Pedido');
 
test('Adicionar pedido ao restaurante', () => {
    const restaurante = new Restaurante();
    const pedido = new Pedido(1);
    restaurante.adicionarPedido(pedido);
    expect(restaurante.pedidos).toContain(pedido);
});
 
test('Remover pedido do restaurante', () => {
    const restaurante = new Restaurante();
    const pedido = new Pedido(1);
    restaurante.adicionarPedido(pedido);
    restaurante.removerPedido(1);
    expect(restaurante.pedidos).not.toContain(pedido);
});
 
test('Listar pedidos pendentes no restaurante', () => {
    const restaurante = new Restaurante();
    const pedido1 = new Pedido(1);
    const pedido2 = new Pedido(2);
    restaurante.adicionarPedido(pedido1);
    restaurante.adicionarPedido(pedido2);
    pedido2.marcarComoPronto();
    const pendentes = restaurante.listarPedidosPendentes();
    expect(pendentes).toContain(pedido1);
    expect(pendentes).not.toContain(pedido2);
});
 
test('Listar pedidos prontos no restaurante', () => {
    const restaurante = new Restaurante();
    const pedido1 = new Pedido(1);
    const pedido2 = new Pedido(2);
    restaurante.adicionarPedido(pedido1);
    restaurante.adicionarPedido(pedido2);
    pedido2.marcarComoPronto();
    const prontos = restaurante.listarPedidosProntos();
    expect(prontos).toContain(pedido2);
    expect(prontos).not.toContain(pedido1);
});
 
 
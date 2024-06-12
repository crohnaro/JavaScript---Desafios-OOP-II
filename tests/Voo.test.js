const Voo = require('../exercises/Sistema de Reserva de Voos/Voo');
const Passageiro = require('../exercises/Sistema de Reserva de Voos/Passageiro');

test('Reservar assento no voo', () => {
    const voo = new Voo('AB123', 'Paris');
    const passageiro = new Passageiro('Ana', 'P123456');
    const reservou = voo.reservarAssento(passageiro);
    expect(reservou).toBe(true);
    expect(voo.reservas).toContain(passageiro);
});

test('Cancelar reserva no voo', () => {
    const voo = new Voo('AB123', 'Paris');
    const passageiro = new Passageiro('Ana', 'P123456');
    voo.reservarAssento(passageiro);
    const cancelou = voo.cancelarReserva(passageiro);
    expect(cancelou).toBe(true);
    expect(voo.reservas).not.toContain(passageiro);
});

test('Listar passageiros do voo', () => {
    const voo = new Voo('AB123', 'Paris');
    const passageiro1 = new Passageiro('Ana', 'P123456');
    const passageiro2 = new Passageiro('Carlos', 'P654321');
    voo.reservarAssento(passageiro1);
    voo.reservarAssento(passageiro2);
    const passageiros = voo.listarPassageiros();
    expect(passageiros).toContain(passageiro1);
    expect(passageiros).toContain(passageiro2);
});
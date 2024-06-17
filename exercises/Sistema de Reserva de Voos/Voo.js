class Voo {
    constructor(numero, destino) {
        this.numero = numero;
        this.destino = destino;
        this.reservas = [];
    }

    reservarAssento(passageiro) {
        if (this.reservas.includes(passageiro)) {
            console.log(`Passageiro ${passageiro.nome} já está reservado neste voo.`);
            return false;
        }

        this.reservas.push(passageiro);
        console.log(`Assento reservado para ${passageiro.nome} no voo ${this.numero}.`);
        return true;
    }

    cancelarReserva(passageiro) {
        const index = this.reservas.indexOf(passageiro);
        if (index === -1) {
            console.log(`Passageiro ${passageiro.nome} não está reservado neste voo.`);
            return false;
        }

        this.reservas.splice(index, 1);
        console.log(`Reserva cancelada para ${passageiro.nome} no voo ${this.numero}.`);
        return true;
    }

    listarPassageiros() {
        return [...this.reservas];
    }
}

module.exports = Voo;
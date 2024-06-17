class Voo {
    constructor(numero, destino) {
        this.numero = numero;
        this.destino = destino;
        this.reservas = [];
    }

    reservarAssento(passageiro) {
        this.reservas.push(passageiro);
        return true;
    }

    cancelarReserva(passageiro) {
        const index = this.reservas.indexOf(passageiro);
        if (index !== -1) {
            this.reservas.splice(index, 1);
            return true;
        }
        return false;
    }

    listarPassageiros() {
        return this.reservas;
    }
    
}

module.exports = Voo;
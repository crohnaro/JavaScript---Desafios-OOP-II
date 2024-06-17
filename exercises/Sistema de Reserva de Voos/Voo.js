class Voo {
    constructor(numero, destino) {
     this.numero = numero;
     this.destino = destino;
     this.reservas = [];

    }
    adicionarPassageiro(passageiro) {
        this.passageiros.push(passageiro);
    }
    listarPassageiros() {
        return this.reservas;
    }
    reservarAssento(passageiro) {
        if(!this.reservas.includes(passageiro)) {
            this.reservas.push(passageiro);
        return true;
    }
    return false;

}
   

cancelarReserva(passageiro) {
    const index = this.reservas.indexOf(passageiro);
    if(index !== -1) {
        this.reservas.splice(index, 1);
        return true;
    }
    return false;

}

}


module.exports = Voo;
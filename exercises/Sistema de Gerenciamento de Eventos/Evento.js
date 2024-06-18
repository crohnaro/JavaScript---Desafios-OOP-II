class Evento {
    constructor(nome, data) {
        this.nome = nome;
        this.data = data;
        this.participantes = [];
    }

    adicionarParticipante(pessoa) {
        if (!this.participantes.includes(pessoa)) {
            this.participantes.push(pessoa);
            return true;
        }
        return false;
    }

    removerParticipante(pessoa) {
        const index = this.participantes.indexOf(pessoa);
        if (index !== -1) {
            this.participantes.splice(index, 1);
            return true;
        }
        return false;
    }

    listarParticipantes() {
        return this.participantes;
    }
}

module.exports = Evento;
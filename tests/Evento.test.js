const Evento = require('../exercises/Sistema de Gerenciamento de Eventos/Evento');
const Pessoa = require('../exercises/Sistema de Gerenciamento de Eventos/Pessoa');

test('Adicionar participante ao evento', () => {
    const evento = new Evento('Workshop de JavaScript', '2024-08-01');
    const pessoa = new Pessoa('Pedro', 'pedro@example.com');
    const adicionou = evento.adicionarParticipante(pessoa);
    expect(adicionou).toBe(true);
    expect(evento.participantes).toContain(pessoa);
});

test('Remover participante do evento', () => {
    const evento = new Evento('Workshop de JavaScript', '2024-08-01');
    const pessoa = new Pessoa('Pedro', 'pedro@example.com');
    evento.adicionarParticipante(pessoa);
    const removeu = evento.removerParticipante(pessoa);
    expect(removeu).toBe(true);
    expect(evento.participantes).not.toContain(pessoa);
});

test('Listar participantes do evento', () => {
    const evento = new Evento('Workshop de JavaScript', '2024-08-01');
    const pessoa1 = new Pessoa('Pedro', 'pedro@example.com');
    const pessoa2 = new Pessoa('Ana', 'ana@example.com');
    evento.adicionarParticipante(pessoa1);
    evento.adicionarParticipante(pessoa2);
    const participantes = evento.listarParticipantes();
    expect(participantes).toContain(pessoa1);
    expect(participantes).toContain(pessoa2);
});
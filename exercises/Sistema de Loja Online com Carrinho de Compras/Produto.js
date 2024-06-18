class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
      }
    
      adicionarEstoque(quantidade) {
        if (quantidade > 0) {
          this.quantidade += quantidade;
          return true;
        }
        return false;
      }
    
      vender(quantidade) {
        if (quantidade > 0 && quantidade <= this.quantidade) {
          this.quantidade -= quantidade;
          return true;
        }
        return false;
      }
    
}

module.exports = Produto;
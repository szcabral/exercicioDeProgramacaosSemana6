class Produto {
    constructor (nome, preco){
    this.nome = nome;
    this.preco = preco;
}
    calcularDesconto () {
        return this.preco - (this.preco * 0,10);
    }
}
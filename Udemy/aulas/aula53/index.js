function Pessoa(nome, sobrenome){
    this.nome;
    this.sobrenome;
    this.nomeCompleto = () => this.nome + "" + this.sobrenome;
}

const pessoa1 = new Pessoa("Diogo", "Antonny");
Pessoa.prototype.Dizeoi  = function(){
    return "oi";
}
const pessoa2 = new Pessoa('Joaozinho', "Banana");
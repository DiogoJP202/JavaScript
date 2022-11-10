const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Antonny'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

let chave = 'nome';

console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = "Felipe";
pessoa1.sobrenome = "Feliciano";
pessoa1.idade = 17;

pessoa1.falaNome = function() {
    return (`${this.nome} diz seu nome!`);
}

pessoa1.getDataNascimento = function(){
    const DataAtual = new Date();
    return DataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falaNome());
console.log(pessoa1.getDataNascimento()); 

for ( chave in pessoa1){
    console.log(pessoa1[chave]);
}
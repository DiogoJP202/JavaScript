/*
Estrutura Básica de um Object:
const pessoa1 = {
    Nome: 'Diogo',
    Sobrenome: 'Antonny',
    Idade: 17
}
console.log(pessoa1.Idade);
*/
function criarPessoa(nome,sobrenome,idade){
    return{nome, sobrenome, idade};
}

let pessoa1 = criarPessoa('Diogo', 'Antonny', 17);
console.log(pessoa1.nome);

const pessoa2 = {
    nome: 'Felipe',
    sobrenome: 'Feliciano',
    idade: 17,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} fala 'OI!'.`);
    },
    incrementaIdade(){
        this.idade++;
        console.log(`Felipe ficou mais velho! Agora ele tem ${this.idade} anos.`);
    }
}
console.log(pessoa2.fala());
console.log(pessoa2.incrementaIdade());
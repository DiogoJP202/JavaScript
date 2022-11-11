const pessoas = [
    {nome: 'Diogo', idade: 18},
    {nome: 'João', idade: 42},
    {nome: 'Luiz', idade: 31},
    {nome: 'Felipe', idade: 15},
    {nome: 'Will', idade: 27},
    {nome: 'Daniel', idade: 23}
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(pessoaMaisVelha);
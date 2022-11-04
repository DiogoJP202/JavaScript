const pessoas = [
    {nome: 'Diogo', idade: 18},
    {nome: 'Felipe', idade: 24},
    {nome: 'Daniel', idade: 45},
    {nome: 'Will', idade: 78},
    {nome: 'Gerald', idade: 35},
    {nome: 'Dovaquina', idade: 15},
];

const nomes = pessoas.map(valor => valor.nome)
console.log(nomes);

const idades = pessoas.map( valor => ({idade: valor.idade})) 
// para os {} nao virarem da arrow function, envolvemos-o em um (), logo, transformando-o em uma expressao.
console.log(idades);

const id = pessoas.map((valor, indice) => {
    valor.id = indice + 2
    return valor;
});
console.log(id);

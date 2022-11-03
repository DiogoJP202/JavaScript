const pessoas = [
    {nome: 'Diogo', idade: 18},
    {nome: 'Felipe', idade: 24},
    {nome: 'Daniel', idade: 45},
    {nome: 'Will', idade: 78},
    {nome: 'Gerald', idade: 35},
    {nome: 'Dovaquina', idade: 15},
];

const pessoas5Letras = pessoas.filter( valor => valor.nome.length >= 5);
console.log(pessoas5Letras);

const pessoasMais50Anos = pessoas.filter(valor => valor.idade > 30);
console.log(pessoasMais50Anos);

const pessoasFimDoNomeA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(pessoasFimDoNomeA);
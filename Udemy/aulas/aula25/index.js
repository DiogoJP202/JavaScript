const pessoa = {
    nome: 'Diogo',
    sobrenome: 'Antonny',
    idade: 17
}

for(let chave in pessoa){
    console.log(`${chave}:`, pessoa[chave]);
}
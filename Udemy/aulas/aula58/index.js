const pessoas = [
    {id: 3, nome: 'Diogo'},
    {id: 2, nome: 'Felipe'},
    {id: 1, nome: 'Joao'},
];

const novasPessoas = new Map();
for (pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
console.log(novasPessoas)
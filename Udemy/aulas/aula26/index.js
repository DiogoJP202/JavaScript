const nome = 'Diogo ';
const sobrenome = 'Antonny ';

for (let chave = 0; chave < nome.length; chave++){
    console.log(nome[chave]);
}
for (let chave = 0; chave < sobrenome.length; chave++){
    console.log(sobrenome[chave]);
}
console.log('---------------------------------');
for (let chave in nome){
    console.log(nome[chave]);
}
for (let chave in sobrenome){
    console.log(sobrenome[chave]);
}
console.log('---------------------------------');
for(let valor of nome){
    console.log(valor);
}
for(let valor of sobrenome){
    console.log(valor);
}
console.log('---------------------------------');
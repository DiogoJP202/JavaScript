//const nomes = ['diogo', 'will', 'felipe', 'daniel'];
const nomes = new Array('diogo', 'will', 'felipe', 'daniel');
console.log(nomes[2]);
delete nomes[2];
console.log(nomes);
//
const removido = nomes.pop(); 
console.log(removido);

nomes.unshift('soares');
nomes.push('feliciano');

const meuNome = nomes.slice(0,1);
console.log(meuNome);
const nomeCompleto = `Diogo Antonny Santos Soares`;
console.log(nomeCompleto);
const nomeCompleto1 = nomeCompleto.split(' ');
console.log(nomeCompleto1);
const nomeCompleto2 = nomeCompleto1.join(`, `);
console.log(nomeCompleto2);

  

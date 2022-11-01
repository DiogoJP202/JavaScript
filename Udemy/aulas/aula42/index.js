const nomes = ['Diogo','Antonny','Maria','Jose','Fernando'];

const deletados = nomes.splice(-1, 0);
console.log(deletados);
console.log(nomes);
nomes.splice(2,0,'feliing');
console.log(nomes);
nomes.splice(3,1,'Chaos');
console.log(nomes);
nomes.splice((nomes.length/2),0,'Meio','meio', 'MeIo');
console.log(nomes);
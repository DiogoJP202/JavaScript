let alunos = ['Diogo','Felipe','Will','Daniel'];
for (let x = 0; x < (alunos.length); x++){
    console.log(alunos[x]);
} 
alunos.push('andre'); //adiciona ao final.
console.log(alunos, 1); 
alunos.unshift('love');  //adiciona no começo.
console.log(alunos, 2);
alunos.pop(); // Tira o valor final do array
console.log(alunos, 3);
alunos.shift(); //// Tira o valor inicial do array
console.log(alunos, 4);
let deletado = delete alunos[1]; 
console.log(alunos, 5);
console.log(alunos.slice(0,2));
console.log(alunos.slice(0, -1));
console.log(typeof alunos);
console.log(alunos instanceof Array);
alunos = 123;
console.log(alunos instanceof Array);
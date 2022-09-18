let alunos = ['Diogo','Felipe','Will','Daniel'];
for (let x = 0; x < (alunos.length); x++){
    console.log(alunos[x]);
}
alunos.push('andre');
console.log(alunos);
alunos.unshift('love');
console.log(alunos);
alunos.pop();
console.log(alunos);
alunos.shift();
console.log(alunos);
let deletado = delete alunos[1];
console.log(alunos);
console.log(alunos.slice(0,2));
console.log(alunos.slice(0, -1));
console.log(typeof alunos);
console.log(alunos instanceof Array);
alunos = 123;
console.log(alunos instanceof Array);
let varA = 'A'; //B C A
let varB = 'B';
let varC = 'C';

/*
const ValorA = varA;
varA = varB;
varB = varC;
varC = ValorA;
*/
[varA, varB, varC] = [varB, varC, varA]
console.log(varA,varB,varC);
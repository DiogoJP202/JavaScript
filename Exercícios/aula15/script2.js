var VarC = [10,9,8,7,6,5,4,3,2,1,0]
var chave = 0
VarC.sort(Number)
do{
    console.log(`Chave de identificação ${VarC[chave]}.`)
    chave ++
} while(chave < VarC.length)
VarC.push(100)
console.log(VarC)
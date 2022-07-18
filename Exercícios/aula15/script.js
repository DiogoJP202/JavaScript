let numero = [1,3,5,7]
console.log(`O vetor numero possui os valores ${numero}`)
numero[2+1]= 9
console.log(`O vetor numero possui os valores ${numero}`)
console.log(`O numero de valores que o vetor possui é ${numero.length}`)
numero.sort()
numero.push(Number(10))
console.log(`O vetor numero possui os valores ${numero}`)
let vet = [3,4,7,8,1]
for(let chave = 0; chave < vet.length; chave ++){
    console.log( vet[chave])
}
console.log('-----------')
for(let chave in numero){
    /*
    é a mesma coisa do que:
    for(let chave = 0; chave < vet.length; chave ++) {
        console.log( vet [chave] ) } 
}*/
    console.log(numero[chave])
}
console.log('-----------')
console.log(numero.indexOf(10))

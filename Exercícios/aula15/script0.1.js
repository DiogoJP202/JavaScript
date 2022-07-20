let numeros = [1,2,3,'',5,6,7,8]
numeros.push(10)
numeros.push(9)
numeros.sort(function(a, b){return a-b})
/*
for(var chave = numeros.length -1; chave >= 0; chave --){
    console.log(`Valor ${numeros[chave]} da chave ${chave}.`)
}
*/
/*
for(var chave = 0; chave < numeros.length; chave ++){
    console.log(`Valor ${numeros[chave]} da chave ${chave}.`)
}
*/
for(let chave in numeros){
    if(numeros[chave]==""){
        console.log(`O valor da chave ${chave} é vazio.`) 
    }else{
        console.log(`Valor ${numeros[chave]} da chave ${chave}.`) 
    }
}
let Cadeira_01 = 'vazia'
let Cadeira_02 = 'ocupada'
let Cadeira_03 = 'vazia'
let Cadeira_04 = 'ocupada'
let Cadeira_05 = 'ocupada'
let Cadeiras = [Cadeira_01,Cadeira_02,Cadeira_03,Cadeira_04,Cadeira_05]
for(let PosiçãoDeCadeira = 0; PosiçãoDeCadeira < Cadeiras.length ; PosiçãoDeCadeira++){
    console.log(`A cadeira ${PosiçãoDeCadeira +1} está ${Cadeiras[PosiçãoDeCadeira]}!`)
}
let Numero1;
let Numero2;
let paragrafo = document.getElementsByTagName('p')[0]
while(Numero1 === null || Numero2 === null || Numero1 === undefined || Numero2 === undefined){ 
    alert("Escreva apenas números!") 
    Numero1 = prompt("Escolha o primeiro número: ")
    Numero2 = prompt("Escolha o segundo número: ")

}

    let Soma = Number(Numero1) + Number(Numero2)
    let Subt = Number(Numero1) - Number(Numero2)
    let Mult =Number(Numero1) * Number(Numero2)
    let Divi =Number(Numero1) / Number(Numero2)
    paragrafo.innerHTML += `<br>A soma entre ${Numero1} e ${Numero2} é igual a ${Soma}.`
    paragrafo.innerHTML += `<br>A subtração entre ${Numero1} e ${Numero2} é igual a ${Subt}.`
    paragrafo.innerHTML += `<br>A multiplicação entre ${Numero1} e ${Numero2} é igual a ${Mult}.`
    paragrafo.innerHTML += `<br>A divisão entre ${Numero1} e ${Numero2} é igual a ${Divi}.` 

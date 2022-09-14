let DataAtual = new Date()
let AnoAtual = DataAtual.getFullYear()
const Nome = 'Diogo Antonny'
const Idade = 17
const Peso = 65
const Altura = 1.80
const AnoDeNascimento = AnoAtual - Idade
let IMC = Peso/(Altura**2)

console.log(`${Nome} tem ${Idade} anos, pesa ${Peso} kg, tem ${Altura} de altura e seu IMC é de ${IMC}.`)
console.log(`Diogo nasceu em ${AnoDeNascimento}.`)
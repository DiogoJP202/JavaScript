//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number).
//Retorne true se a imagem estiver no modo paisagem

let paisagem = (largura = 0, altura = 0) => altura < largura;
console.log(paisagem(500, 400));
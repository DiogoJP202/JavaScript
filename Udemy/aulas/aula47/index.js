const numeros = [2, 3, 5, 6, 10, 25, 42, 13, 54, 33,24];

const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((contador, valor) => contador += valor);
console.log(numerosPares);
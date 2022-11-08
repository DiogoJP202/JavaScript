const numeros = [4, 50, 32, 15, 30, 90, 3, 5, 7];
const total = numeros.reduce((acumulador, valor, indice, array) => { 
    acumulador += valor;
    return acumulador;
},0);
console.log(total);

const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares);

const dobro = numeros.map(valor => valor*2);
console.log(dobro);
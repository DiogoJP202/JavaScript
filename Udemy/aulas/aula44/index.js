const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

/*
for( let numero of numeros){
    if(numero > 10) console.log(numero);
}
*/

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);
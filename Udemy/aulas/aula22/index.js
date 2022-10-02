const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
//const [mil, doismil,tresmil, ...resto] = numeros;
const [mil,,tresmil,,cincomil, ...resto] = numeros;
console.log(cincomil);

const N = [[1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = N;
const [um, dois, tres] = lista1;
const [quatro, cinco, seis] = lista2;
const [sete, oito, novo] = lista3;
console.log(um, lista1[2], quatro, lista2)
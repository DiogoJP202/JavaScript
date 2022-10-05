const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros){
    if (numero === 5){
        console.log('Retirado!')
        continue;
    }
    if(numero === 8 ){
        console.log("Numero Achado!")
        break;
    }
    console.log(numero);
}
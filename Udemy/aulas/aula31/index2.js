let contador = 0;
function Contador(){
    contador ++;
    console.log(contador);
}
let timer = setInterval(Contador, 1000);

setTimeout(function(){clearInterval(timer);}, 11000)
setTimeout(function(){console.log('Olá, mundo!');}, 500)
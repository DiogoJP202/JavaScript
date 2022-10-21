(function(){
    contadorAte10();
    
})();//tambem conseguimos colocar parametros

function contadorAte10(){
    let contador = 0;
    let timer = setInterval(function(){
            console.log(contador);
            contador ++;
    }, 1000); 
    setTimeout(function(){
        clearInterval(timer);
    }, 10000)
}
function esperaAi(msg, tempo, ){
    return new Promise((resolve, reject) => {
       // if(msg !== 'string') reject(new Error('error'));
        setTimeout(() =>{
            resolve(msg)
        }, tempo);
    });
}

function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

esperaAi('Frase 1', aleatorio(1, 3)).then((resposta) => {
    console.log(resposta);
    return esperaAi('Frase 2', aleatorio(1, 3)).then((resposta) => {
        console.log(resposta);    
        esperaAi('Frase 3', aleatorio(1, 3)).then((resposta) => {
            console.log(resposta);
        });
    });
}).catch((erro) => {
    console.log(erro);
});

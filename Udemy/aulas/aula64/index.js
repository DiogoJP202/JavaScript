function esperaAi(msg, tempo, ){
    return new Promise((resolve, reject) => {
       // if(msg !== 'string') reject(new Error('error'));
        setTimeout(() =>{
            resolve(msg)
        }, tempo);
    });
};

function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

const promises = [
    esperaAi('Promisse 1', aleatorio(1, 3)),
    esperaAi('Promisse 2', aleatorio(1, 3)),
    esperaAi('Promisse 3', aleatorio(1, 3))
];

/*
Promise.all(promises).then((valor) => {
    console.log(valor);
}).catch((erro) => {
    console.log(erro);
});
*/

/*
Promise.race(promises).then((valor) => {
    console.log(valor);
}).catch((erro) => {
    console.log(erro);
});
*/

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache!'); //manda diretamente ao then.
    } else {
        console.log('Baixando Página...')
        return esperaAi('Página instalada!', 3000);
    }
}

baixaPagina().then(dados => console.log(dados)).catch(erro => erro);
function esperaAi(msg, tempo,){
    return new Promise((resolve, reject) => {
       // if(msg !== 'string') reject(new Error('error'));
        setTimeout(() =>{
            if(typeof msg !== 'string'){
                reject('A MENSAGEM NÃO É UMA STRING.');
                return;
            };

            resolve(msg.toUpperCase() + ' - Passou na Promise.');
            return;
        }, tempo);
    });
};

function aleatorio(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

/*
esperaAi("Fase 1", aleatorio()).then(valor => {
    console.log(valor);
    return esperaAi("Fase 2", aleatorio());
})
.then(valor => {
    console.log(valor);
    return esperaAi("Fase 3", aleatorio());
})
.then(valor => {
    console.log(valor);
    return valor;
})
.then(valor => console.log('Terminamos na fase: ' + valor))
.catch(erro => console.log(erro));
*/

async function execulta(){
    try{
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);

        console.log(`Terminando com a fase ${fase3}`);
    } catch(erro){
        console.log(erro);
    }
};

execulta();
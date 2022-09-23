function saudacao(nome){
    console.log(`Bom dia, ${nome}!`);
    return true;
}
let nomeUsuario = saudacao('Diogo');
console.log(nomeUsuario);

function soma(x=0, y=0){
    let resp = Number(x + y);
    return resp;
}
console.log(soma(6,4));

let raiz = function(numero) {return numero ** 0.5;}

console.log(raiz(11));

let raiz2 = (numero) => {return numero ** 0.5;}
console.log(raiz2(9));
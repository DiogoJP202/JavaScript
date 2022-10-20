function retornaFuncao(){
    const nome = 'Diogo';
    return function (){
        return nome;
    }
}

const funcao = retornaFuncao();

console.dir(funcao()); //console.dir mostra informações de uma função anônima no console do navegador.


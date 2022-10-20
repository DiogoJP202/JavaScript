function soma(a = 0, b = 0){
    return a + b; // retorna um valor.
}

function soma2(a = 0, b = 0){
    console.log(a + b); // NÃO retorna um valor.
}

/*
document.addEventListener('click', function(event){
    body.style.backgroundColor = 'red';
}); // Não retorna um valor mas execulta uma ação.
*/

function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Diogo', 'Antonny');

const p2 = {
    nome: 'Luiz',
    sobrenome: 'Roberto'
}

console.log(p1, typeof p1);
console.log(p2, typeof p2);
// Duas variáveis que criaram a mesma coisa.

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const fala = falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador){
    return function (numero){
        return multiplicador * numero;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

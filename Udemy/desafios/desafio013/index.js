//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisível por 3 = Fizz-
//Número é divisível por 5 = Buzz-
//Número é divisível por 3 e 5 = FizzBuzz-
//Número NÃO é divisível por 3 e 5  = retorna o próprio número
//Checar se o número é realmente um número
//Use a função com números 0 e 100

let verificarNumero = (x) => {
    if(x <= 100 && x >= 0 ){
        if(typeof(x) !== "number") return 'Não é um número.';
        if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
        if(x % 3 === 0) return 'Fizz';
        if(x % 5 === 0) return 'Buzz';
        return 'Não é divisível.';
    }
    console.log('Apenas números entre 0 e 100.');
}
console.log('a',verificarNumero('a'));
for (let i =0; i <= 100; i++){
    console.log(i,verificarNumero(i));
}

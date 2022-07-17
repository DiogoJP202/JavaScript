function par_imp(num){
    if (num%2==0){
        return 'Par'
    } else {
        return 'ímpar'
    }
}
/*var resp = par_imp(14)
console.log(resp)*/
console.log(par_imp(3))
console.log('-----------------')
function  soma(n1=0, n2=0){
    return n1 + n2
} 
console.log(soma(1, 4))
console.log('-----------------')
var X = function (Y){
    return Y*2
}
console.log(X(6))
console.log('-----------------')
function fatorial(n){//isso é uma funcao que pode ser ativada, o "N" é algum numero que pode ser escolhido 
for(var mult = n - 1; mult >= 1; mult --){// enquanto mult for menor ou igual a 1 tire -1 de mult e faça mult vezes o valor atual de N
    n = mult * n
}
return n //quando mult for = 0 retorne n
}
console.log(fatorial(10))// Aqui chama a funcao fatorial e da o numero(parametro) 5
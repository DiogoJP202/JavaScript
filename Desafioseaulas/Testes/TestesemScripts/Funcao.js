function mult(n1, n2){//(n1=0,n2=0)'se algum dos valores não for passado o n1/n2 sera 0.'
    //return n1*n2
    if(n1 == null){
        n1 = 0
    }
    if(n2 == null){
        n2 = 0
    }
    let multi = n1 * n2
    return multi
}
function soma(n1=0, n2=0){
    return n1+n2
}
function divi(n1, n2){
    if(n1 == null){
        n1 = 0
    }
    if(n2 == null){
        n2 = 0
    }
    return n1/n2
}
console.log(divi(20, 2))
function criaPessoa(nome, idade){
    return{
        nome,
        idade
    }
}

const arr = new Array;
arr.push(criaPessoa('diogo', 18));
arr.push(criaPessoa('tonny', 26));
console.log(arr)
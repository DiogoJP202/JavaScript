function fatorial(n){
    if(n == 1 || n == 0){
        return 1
    } else {
        var fato = n
        for(var mult = 1; mult < fato; mult++){
            n*=mult
        }
        return n
    }
}
console.log(fatorial(5))
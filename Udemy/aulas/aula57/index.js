function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const fala = { 
    fala(){
    console.log(`${this.nome} ${this.sobrenome} fala oi!`)
}
};

const come = {
come(){
    console.log(`${this.nome} ${this.sobrenome} está comendo.`)
}
};

const bebe = {
bebe(){
    console.log(`${this.nome} ${this.sobrenome} está bebendo.`)
}
};

const pessoaPrototype = {...bebe, ...come, ...fala}

const p1 = criaPessoa('Diogo', 'Antonny')
p1.fala();

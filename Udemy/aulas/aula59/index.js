class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome; 
    };

    falar(){
        console.log(`${this.nome} diz oi!`);
    };

    comer(){
        console.log(`${this.nome} está comendo!`)
    };

    bebe(){
        console.log(`${this.nome} está bebendo!`);
    };
};

const p1 = new Pessoa('Diogo', 'Antonny');
p1.bebe();

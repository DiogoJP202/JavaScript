function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sonbrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: sou um método!`);
    };
}

const p1 = new Pessoa('Diogo', 'Antonny');
console.log(p1.metodo());
const p2 = new Pessoa('Felipe', 'Feliciano');
console.log(p2.metodo());

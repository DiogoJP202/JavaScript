const _velocidade = Symbol();
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade] ++;
    }

    desacelerar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade] --;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor != 'number') return;
        if(valor <= 0 || valor >= 100) return;
        this[_velocidade] = valor;
    }
};

const carro1 = new Carro('Fusca');

carro1.velocidade = 30;
console.log(carro1.velocidade)
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' já ligado!')
            return;
        }
        this.ligado = true;
    };
    
    desligar(){
        if(!this.ligado) {
            console.log(this.nome + ' já desligado!')
            return;
        }
        this.ligado = false;
    };
};

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
         super(nome);
         this.cor = cor;
         this.modelo = modelo;
    };
};

class tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    };
}

const produto1 = new DispositivoEletronico('Computer');

const produto2 = new SmartPhone('Sansung', 'Red', 'J12');

const produto3 = new tablet('iPad', true);

console.log(produto2)

produto1.ligar();
produto1.ligar();

produto3.ligar();
produto3.ligar();
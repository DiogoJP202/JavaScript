class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentaVolume(){
        if(this.valume >= 100) return console.log("Volume Maxímo!");
        this.volume += 2;
    }

    diminueVolume(){
        if(this.valume <= 0) return console.log("Volume Minímo!");
        this.volume -= 2;
    }

    static trocaPilha(){
        let timer = setInterval(() => {
            console.log('Trocando pilha...');
        }, 1000);
        setTimeout(() => {
            clearInterval(timer)
            console.log('Pilhas trocadas!');
        }, 4000);
    }
}; 

const controle01 = new ControleRemoto('Sansung');

controle01.aumentaVolume();
controle01.aumentaVolume();
controle01.aumentaVolume();
controle01.aumentaVolume();
console.log(controle01);

ControleRemoto.trocaPilha();
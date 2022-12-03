class Formulario{
    constructor(){
        this.nome = document.querySelector('#INome');
        this.sobreN = document.querySelector('#ISobreN');
        this.CPF = document.querySelector('#ICPF');
        this.senha = document.querySelector('#ISenha');
        this.confirmaSenha = document.querySelector('#IRepetirS');
        this.enviar = document.querySelector('#enviar');
    };

    verificaNome(){
        if(this.nome !== 'string'){
            this.criaParagrafo();
        }
    };
};
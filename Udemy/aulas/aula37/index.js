function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`; 
        },

        peso,
        altura,

        get imc(){
            const indice = this.peso / (altura**2);
            return indice.toFixed(2);
        } 
    }
}

const p1 = criaPessoa('Diogo', 'Antonny', 65, 1.8);
console.log(p1.fala('falando sobre HTML.'));
console.log(p1.imc);
p1.nomeCompleto = "Dioogo Antonny Santos Soares"
console.log(p1.nome);
export default class Password{
    constructor(){
        this.resp = document.querySelector('.resposta');
        this.random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        this.cAlert = 0;
        this.senha = '';
    }

    createAlert(text){
        const main = document.querySelector('main');
        const p = document.createElement('p');
        
        p.classList.add('alert');
        p.innerHTML = `<strong>${text}</strong>`;
        
        main.appendChild(p);
    }

    createPassword(character, number, upperCase, lowerCase, symbol){
        this.senha = ''
        
        for(this.senha.length; this.senha.length <= character;){
            number === true && this.geraNumeros();
            upperCase === true && this.geraLetrasMaiúsculas();
            lowerCase === true && this.geraLetrasMinúsculas();
            symbol === true && this.geraSimbulos();
        }
       
        document.querySelector('.password').innerHTML = `${this.senha}`;
        this.resp.style.display = "block";
    }

    geraNumeros = () => this.senha += String.fromCharCode(this.random(48, 57))

    geraLetrasMaiúsculas = () => this.senha += String.fromCharCode(this.random(65, 90))

    geraLetrasMinúsculas = () => this.senha += String.fromCharCode(this.random(97, 122))

    geraSimbulos(){
        const simbulos = [' ','!','"','#','$','%','&','`','(',')','*','+','\'','\'','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
        return this.senha += simbulos[this.random(0, simbulos.length)]; 
    }

    cleanAll(){
        this.senha = ''
        this.resp.style.display = "none";
        
        if(this.cAlert === 1){
            document.querySelector('.alert').remove();
            this.cAlert = 0;
        } 

        document.querySelector('#ICaracteres').value = 0;
        document.querySelector('#IaddNumber').checked = false;
        document.querySelector('#IUpperCase').checked = false;
        document.querySelector('#ILowerCase').checked = false;
        document.querySelector('#ISymbol').checked = false;
    }
}
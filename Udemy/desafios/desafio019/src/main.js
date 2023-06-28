import './assets/css/style.css';

class Password{
    constructor(){
        this.resp = document.querySelector('.resposta');
        this.random = (array) => array[Math.floor(Math.random() * array.length)];
        this.cAlert = 0;
        this.senha = '';
    }

    createAlert(text){
        const main = document.querySelector('main');
        const p = document.createElement('p');
        
        p.classList.add('alert')
        p.innerHTML = `<strong>${text}</strong>`;
        main.appendChild(p);
    }

    createPassword(character, number, upperCase, lowerCase, symbol){
        this.senha = ''

        for(this.senha.length; this.senha.length <= character;){
            if(number === true) this.geraNumeros();
            if(upperCase === true) this.geraLetrasMaiúsculas();
            if(lowerCase === true) this.geraLetrasMinúsculas();
            if(symbol === true) this.geraSimbulos();
        }

        document.querySelector('.password').innerHTML = `${this.senha}`;
        this.resp.style.display = "block";
    }

    geraNumeros(){
        const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return this.senha += this.random(numbers);
    }

    geraLetrasMaiúsculas(){
        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        return this.senha += this.random(alphabet);
    }

    geraLetrasMinúsculas(){
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        return this.senha += this.random(alphabet);
    }

    geraSimbulos(){
        const simbulos = [' ','!','”','#','$','%','&','`','(',')','*','+','\'','\'','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
        return this.senha += this.random(simbulos); 
    }

    cleanAll(){
        this.senha = ''
        this.resp.style.display = "none";
        
        if(pass.cAlert === 1){
            document.querySelector('.alert').remove();
            pass.cAlert = 0;
        } 

        document.querySelector('#ICaracteres').value = 0;
        document.querySelector('#IaddNumber').checked = false;
        document.querySelector('#IUpperCase').checked = false;
        document.querySelector('#ILowerCase').checked = false;
        document.querySelector('#ISymbol').checked = false;
    }
}

const pass = new Password();

document.addEventListener('click', (event) => {
    const element = event.target;
    
    if(element.classList.contains('enviar')){
        const maxCharacter = document.querySelector('#ICaracteres');
        const inputNumber = document.querySelector('#IaddNumber');
        const inputUpperCase = document.querySelector('#IUpperCase');
        const inputLowerCase = document.querySelector('#ILowerCase');
        const inputSymbol = document.querySelector('#ISymbol');
    
        if(pass.cAlert === 1){
            document.querySelector('.alert').remove();
            pass.cAlert = 0;
        } 
    
        if(Number(maxCharacter.value) <= 0 || Number(maxCharacter.value) > 1000){
            pass.resp.style.display = "none";

            pass.createAlert('Pelo menos 1 caractere e no máximo 1000.');
            pass.cAlert ++;
        } else if(inputNumber.checked === false && inputLowerCase.checked === false && inputUpperCase.checked === false && inputSymbol.checked === false){
            pass.resp.style.display = "none";

            pass.createAlert('Marque pelo menos uma caixa!');
            pass.cAlert ++;
        } else {
            pass.createPassword(Number(maxCharacter.value), inputNumber.checked, inputUpperCase.checked, inputLowerCase.checked, inputSymbol.checked);
        }
    }

    if(element.classList.contains('limpar')){
        pass.cleanAll();
    }

    // if(element.classList.contains('copy')){
    //     pass.senha.select();
    //     pass.senha.setSelectionRange(0, 99999)
    //     document.execCommand("copy");
    // }
});
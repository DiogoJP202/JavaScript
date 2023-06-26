import './assets/css/style.css';

class Password{
    constructor(){
        this.form = document.querySelector('form');
    }

    createPassword(character, number, upperCase, lowerCase, symbol){
        
    }
}

const pass = new Password();

pass.form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const inputCharacter = document.querySelector('#ICaracteres');
    const inputNumber = document.querySelector('#IaddNumber');
    const inputUpperCase = document.querySelector('#IUpperCase');
    const inputLowerCase = document.querySelector('#ILowerCase');
    const inputSymbol = document.querySelector('#ISymbol');

    pass.createPassword(inputCharacter.value, inputNumber.value, inputUpperCase.value, inputLowerCase.value, inputSymbol.value);
});
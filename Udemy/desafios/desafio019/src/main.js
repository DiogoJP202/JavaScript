import './assets/css/style.css';
import Password from './modules/passwordClass.js'

const pass = new Password();

document.addEventListener('click', event => {
    const element = event.target;
    
    if(element.classList.contains('enviar')){
        const maxCharacter = Number(document.querySelector('#ICaracteres').value);
        const inputNumber = document.querySelector('#IaddNumber');
        const inputUpperCase = document.querySelector('#IUpperCase');
        const inputLowerCase = document.querySelector('#ILowerCase');
        const inputSymbol = document.querySelector('#ISymbol');
    
        if(pass.cAlert === 1){
            document.querySelector('.alert').remove();
            pass.cAlert = 0;
        } 
    
        if(maxCharacter <= 0 || maxCharacter > 1000){
            pass.resp.style.display = "none";

            pass.createAlert('Pelo menos 1 caractere e no máximo 1000.');
            pass.cAlert ++;
            return;
        }
        
        if(inputNumber.checked === false && inputLowerCase.checked === false && inputUpperCase.checked === false && inputSymbol.checked === false){
            pass.resp.style.display = "none";

            pass.createAlert('Marque pelo menos uma caixa!');
            pass.cAlert ++;
            return;
        }

        pass.createPassword(maxCharacter, inputNumber.checked, inputUpperCase.checked, inputLowerCase.checked, inputSymbol.checked);
    }

    element.classList.contains('limpar') && pass.cleanAll();
    

    // if(element.classList.contains('copy')){
    //     pass.senha.select();
    //     pass.senha.setSelectionRange(0, 99999)
    //     document.execCommand("copy");
    // }
});
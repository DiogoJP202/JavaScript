const resp = document.querySelector('#resultado');
const form = document.querySelector('form');
const input = document.querySelector('#ICPF');

form.addEventListener('submit', enviarEventoForm);

function enviarEventoForm(event){
    event.preventDefault();

    const cpf = new CPF(input.value);
    let cpfArray = Array.from(cpf.valor);

    const ultimosDigitos = cpfArray.filter( (valor, indice) => {
        if(indice == 9 || indice == 10) return valor
    });

    cpfArray = cpfArray.slice(0,9);
    
    const ultimosDigitosGerados = cpf.fazContaCPF(cpfArray);

    cpf.validador(ultimosDigitos, ultimosDigitosGerados);
};

function CPF(valor){ this.valor = valor; };

CPF.prototype.criaP = () => document.createElement('p');

CPF.prototype.fazContaCPF = (array) => {
    let contador1 = 10;
    const Array = array.map( (valor) => parseInt(valor) );

    let multDoArray1 = Array.map( (valor) => {
        valor = parseInt(valor);
        valor *= contador1;
        contador1 -= 1;
        return valor;
    });

    const resultado1 = multDoArray1.reduce( (contador, valor) => {
        contador += valor;
        return contador;
    }, 0);

    const digito1 = () => {
       const conta =  11 - (resultado1 % 11);
       if(conta > 9) return 0;
       return conta; 
    };

    Array.push(digito1());

    contador1 = 11;

    multDoArray1 = Array.map( (valor) => {
        valor = parseInt(valor);
        valor *= contador1;
        contador1 -= 1;
        return valor;
    });

    const resultado2 = multDoArray1.reduce( (contador, valor) => {
        contador += valor;
        return contador;
    }, 0);

    const digito2 = () => {
        const conta =  11 - (resultado2 % 11);
        if(conta > 9) return 0;
        return conta; 
     };

    const ultimosDigitos = [(`${digito1()}`), (`${digito2()}`)];
    return ultimosDigitos;
};

CPF.prototype.validador = function (digitosOriginais, digitosAvaliados){
    //validador do cpf com a conta concluida.
    const digitos1 = digitosOriginais.reduce( (contador, valor) => {
        contador += valor;
        return contador;
    });

    const digitos2 = digitosAvaliados.reduce( (contador, valor) => {
        contador += valor;
        return contador;
    });

    if(digitos1 === digitos2){
        resp.innerHTML = "";
        const paragrafro = this.criaP();
        paragrafro.innerHTML = "valid CPF!";
        resp.appendChild(paragrafro);
        resp.classList.add('valido');
    } else {
        resp.innerHTML = "";
        const paragrafro = this.criaP();
        paragrafro.innerHTML = "invalid CPF!";
        resp.appendChild(paragrafro);
        resp.classList.add('invalido');
    }
};
const resp = document.querySelector('#resultado');
const form = document.querySelector('form');
const input = document.querySelector('#ICPF');

form.addEventListener('submit', enviarEventoForm);

function enviarEventoForm(event){
    event.preventDefault();
    const cpf = new CPF(input.value);
    const cpfArray = Array.from(cpf.valor);
    const ultimosDigitos = cpfArray.filter( (valor, indice) => {
        if(indice == 9 || indice == 10) return valor
    });
};

function CPF(valor){ this.valor = valor; };

CPF.prototype.criaP = () => document.createElement('p');

CPF.prototype.Validador = function (valor){
    //validador do cpf com a conta concluida.

    /* 
        resp.innerHTML = "";
        const paragrafro = this.criaP();
        paragrafro.innerHTML = "Tudo Certo!";
        resp.appendChild(paragrafro);
        resp.classList.add('valido');
    */
};

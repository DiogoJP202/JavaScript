form.addEventListener('submit', enviarEventoForm);

function enviarEventoForm(event){
    event.preventDefault();

    const form = document.querySelector('form');
    const divsR = document.querySelectorAll('.resp');
    const enviar = document.querySelector('#enviar');

    class Formulario{
        constructor(nome, sobreN, CPF, senha, confirmaSenha, enviar){
            this.nome = nome;
            this.sobreN = sobreN;
            this.CPF = CPF;
            this.senha = senha;
            this.confirmaSenha = confirmaSenha;
            this.enviar = enviar;
        };
    
        verificaNome(){
            divsR[0].innerHTML = "";
            if(typeof this.nome !== 'string'){
                const p = this.criaP();
                p.innerHTML = 'O usuário deverá conter apenas lestras!';
                divsR[0].appendChild(p);
                return false;
            }
            return true;
        };  

        verificaSobreN(){
            divsR[1].innerHTML = "";
            if(typeof this.sobreN !== 'string'){
                const p = this.criaP();
                p.innerHTML = 'O usuário deverá conter apenas lestras!';
                divsR[1].appendChild(p);
                return false;
            }
            return true;
        };

        criaP(){
            return document.createElement('p');
        }

        valida() {
            if(typeof this.CPF === 'undefined') return false;
            if(this.CPF.length !== 11) return false;
            if(this.isSequencia()) return false;
          
            const cpfParcial = this.CPF.slice(0, -2);
            const digito1 = this.criaDigito(cpfParcial);
            const digito2 = this.criaDigito(cpfParcial + digito1);
          
            const novoCpf = cpfParcial + digito1 + digito2;
            divsR[2].innerHTML = "";
            if(novoCpf !== this.CPF){
                const p = this.criaP();
                p.innerHTML = 'CPF inválido!';
                divsR[2].appendChild(p);
                return false;
            }
            return true;
          };
        
          criaDigito(cpfParcial) {
            const cpfArray = Array.from(cpfParcial);
          
            let regressivo = cpfArray.length + 1;
            const total = cpfArray.reduce((ac, val) => {
              ac += (regressivo * Number(val));
              regressivo--;
              return ac;
            }, 0);
          
            const digito = 11 - (total % 11);
            return digito > 9 ? '0' : String(digito);
          };
        
          isSequencia() {
            const sequencia = this.CPF[0].repeat(this.CPF.length);
            return sequencia === this.CPF;
          };

          verificaSenhas(){
            const senha1 = this.senha;
            const senha2 = this.confirmaSenha;
            divsR[4].innerHTML = "";
            if(senha1 !== senha2){
                const p = this.criaP();
                p.innerHTML = 'As senhas precisam ser iguais!';
                divsR[4].appendChild(p);
                return false;
            };
            return true;
          };
    };

    const formulario = new Formulario(
        document.querySelector('#INome').value, 
        document.querySelector('#ISobreN').value, 
        document.querySelector('#ICPF').value, 
        document.querySelector('#ISenha').value, 
        document.querySelector('#IRepetirS').value, 
        document.querySelector('#enviar').value
        );

    if( formulario.verificaNome() === true && formulario.verificaSobreN() === true &&formulario.valida() === true && formulario.verificaSenhas() === true ){
        const divEnviar = document.querySelector('#enviado');

        divEnviar.classList.remove('desaparecer');
        divEnviar.classList.add('aparecer');

        setTimeout(() =>{
            divEnviar.classList.remove('aparecer');
            divEnviar.classList.add('desaparecer');
        }, 1000)

        };
};
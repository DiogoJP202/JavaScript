const form = document.querySelector('.form')

form.addEventListener('submit', function (event)//nesse caso, eu não consigo chamar a funcão sem um nome 
{
  event.preventDefault();
  class IMCClass{
    constructor(){
      this.inputPeso = event.target.querySelector('#IPeso');
      this.inputAltura = event.target.querySelector('#IAltura');
      this.valorPeso = Number(this.inputPeso.value);
      this.valorAltura = Number(this.inputAltura.value);
  
      if(!this.valorPeso || !this.valorAltura){
        this.setResultado('Valor Inválido!', false);
        return;
      } 
      this.IMC = this.getIMC(this.valorPeso, this.valorAltura);
      this.nivelIMC = this.getNivelIMC(this.IMC); 
      this.msg = `Seu IMC é ${this.IMC} (${this.nivelIMC}).`;
      this.setResultado(this.msg, true)
    };
  
    criaP(){
      const p = document.createElement('p'); 
      return p;
    };
    
    setResultado(msg, isValid){
      const resultado = document.querySelector('#Resultado');
      resultado.innerHTML = "";
      const p = this.criaP(); 
      if(isValid){
        p.classList.add('Paragrafo-Resultado');
       } else{
        p.classList.add('bad');
       }
      p.innerHTML = msg;
      resultado.appendChild(p);
    };
    
    getIMC(Peso, Altura){
      const imc =  Peso / (Altura**2);
      return imc.toFixed(2);
    };
    
    getNivelIMC(IMC){
      const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
        if(IMC >= 39.9) return nivel[5];
        if(IMC >= 34.9) return nivel[4];
        if(IMC >= 29.9) return nivel[3]; 
        if(IMC >= 24.9) return nivel[2];
        if(IMC >= 18.5) return nivel[1];
        if(IMC < 18.5)  return nivel[0];
    };
  };  
  const IMCTESTE =  new IMCClass();
});
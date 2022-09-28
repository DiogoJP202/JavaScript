const PesoIMC = document.querySelector('#IPeso');
const AlturaIMC = document.querySelector('#IAltura');
const formu = document.querySelector('.form');
formu.addEventListener('submit', clicar);
const Res = document.querySelector('#Resultado');

function clicar(evento){
  evento.preventDefault();
  let Peso = PesoIMC.value;
  let Altura = AlturaIMC.value;
  let IMC = Peso / (Altura**2);

  Res.innerHTML = "";
  
  if(IMC < 18.5){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está abaixo do peso normal.`;
  } else if(IMC >= 18.5 && IMC <= 24.9){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está com o peso normal.`;    
  } else if(IMC >= 25 && IMC <= 29.9){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está com o peso acima do normal.`;
  } else if(IMC >= 30 && IMC <= 34.9){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está com obesidade grau 1.`;
  } else if(IMC >= 35 && IMC <= 39.9){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está com obesidade grau 2.`;
  } else if (IMC >= 40){
    Res.innerHTML += `Seu IMC é de ${IMC.toFixed(2)} e você está com obesidade grau 3.`;
  }
}
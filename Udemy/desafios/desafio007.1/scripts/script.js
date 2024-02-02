const form = document.querySelector('.form')

form.addEventListener('submit', function (event)//nesse caso, eu não consigo chamar a funcão sem um nome 
{
  event.preventDefault();
  const inputPeso = event.target.querySelector('#IPeso');
  const inputAltura = event.target.querySelector('#IAltura');
  const valorPeso = Number(inputPeso.value);
  const valorAltura = Number(inputAltura.value);
  console.log("chegou aqui")

  if(!valorPeso || !valorAltura){
    setResultado('Valor Inválido!', false);
    return;
  } 
    const IMC = getIMC(valorPeso, valorAltura);
    const nivelIMC = getNivelIMC(IMC);
    
    const msg = `Seu IMC é ${IMC} (${nivelIMC}).`;
    setResultado(msg, true)
})

function criaP(){
  const p = document.createElement('p'); 
  return p;
}

function setResultado(msg, isValid){
  const resultado = document.querySelector('#Resultado');
  resultado.innerHTML = "";
  const p = criaP(); 
  if(isValid){
    p.classList.add('Paragrafo-Resultado');
   } else{
    p.classList.add('bad');
   }
  p.innerHTML = msg;
  resultado.appendChild(p);
}

function getIMC(Peso, Altura){
  const imc =  Peso / (Altura**2);
  return imc.toFixed(2);
}

function getNivelIMC(IMC){
  const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    if(IMC >= 39.9) return nivel[5];
    if(IMC >= 34.9) return nivel[4];
    if(IMC >= 29.9) return nivel[3]; 
    if(IMC >= 24.9) return nivel[2];
    if(IMC >= 18.5) return nivel[1];
    if(IMC < 18.5)  return nivel[0];
}
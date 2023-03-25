const form = document.querySelector('form');

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("radio")){
        if(element.id === "ImodoEscuro") mudaCorSite("black"); 
        if(element.id === "ImodoClaro") mudaCorSite("white");
    }
});

function mudaCorSite(color){
    const corpo = document.getElementsByTagName("body")[0];
    const main = document.querySelector('main')
    const fieldset = document.getElementsByTagName("fieldset")[0];
    const input1 = document.querySelector("#CorSite"); 
    const borders = document.querySelectorAll('.border');
    let color2;
    
    if(color === "black") color2 = "white" 
    if(color === "white") color2 = "black"

    corpo.style.backgroundColor = color;
    corpo.style.color = color2;
    fieldset.style.backgroundColor = color;
    fieldset.style.borderColor = color2;
    input1.style.borderColor = color2;
    
    for(let index in borders){
        borders[index].style.borderColor = color2;
    }
}

function sekiroTimer(){
    let corpo = document.querySelector("body");
    let timer = setInterval(()=>{
        corpo.classList.add('sekiro');
        setTimeout(() => {
            corpo.classList.remove('sekiro');
        }, 3000)
    }, 60000)
    
}
//faze animacao de presente abrindo

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formObj = {
        name: document.querySelector('#INome'),
        lastName: document.querySelector('Isobrenome'),
        food: document.querySelector('#Ifood'),
        color: document.querySelector('#ICor'),
        animal: document.querySelectorAll('.animal')
    }
});

sekiroTimer();
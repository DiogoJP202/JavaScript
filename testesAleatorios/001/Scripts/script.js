document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("radio")){
        if(element.id === "ImodoEscuro") mudaCorSite("black"); 
        if(element.id === "ImodoClaro") mudaCorSite("white");
    }
});

function mudaCorSite(color){
    let corpo = document.getElementsByTagName("body")[0];
    let fieldset = document.getElementsByTagName("fieldset")[0];
    let input1 = document.querySelector("#CorSite"); 
    let color2;

    if(color === "black") color2 = "white" 
    if(color === "white") color2 = "black"

    corpo.style.backgroundColor = color;
    corpo.style.color = color2;
    fieldset.style.borderColor = color2;
    input1.style.borderColor = color2;
}
//faze animacao de presente abrindo
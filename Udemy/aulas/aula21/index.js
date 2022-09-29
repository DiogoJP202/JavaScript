const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;
console.log(diaSemana);// indice 0 é domingo

switch(diaSemana){
    case 0:
        diaSemanaTexto = "Domingo"
        break;
    case 1:
        diaSemanaTexto = "Segunda"
        break;
    case 2:
        diaSemanaTexto = "Terça"
        break;
    case 3:
        diaSemanaTexto = "Quarta"
        break;
    case 4:
        diaSemanaTexto = "Quinta"
        break;
    case 5:
        diaSemanaTexto = "Sexta"
        break;
    case 6:
        diaSemanaTexto = "Sabádo"
        break;
    default:
         diaSemana = "";
} 
console.log(diaSemanaTexto);
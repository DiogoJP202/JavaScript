/* 
const data = new Date();
const wekeend = data.getDay();
const day = data.getDate();
const month = data.getMonth();
const year = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();

function getWeekend(){
    switch(wekeend){
        case 0:
            return "Domingo";
        case 1:
            return "Segunda-feira";
        case 2:
            return "Terça-feira";
        case 3:
            return "Quarta-feira";
        case 4:
            return "Quinta-feira";
        case 5:
            return "Sexta-feira";
        case 6:
            return "Sábado";
        default:
            return "";
}
}

function getMonth(){
    switch(month){
        case 0:
            return "Janeiro";
        case 1:
            return "Fevereiro";
        case 2:
            return "Março";
        case 3:
            return "Abril";
        case 4:
            return "Maio";
        case 5:
            return "Junho";
        case 6:
            return "Julho";
        case 7:
            return "Agosto";
        case 8:
            return "Setembro";
        case 9:
            return "Outubro";
        case 10:
            return "Novembro";
        case 11:
            return "Dezembro";
    }
}

function brazilianDate(){
    return `${getWeekend()}, ${month + 1} de ${getMonth()} de ${year} ${zeroAEsquerda(hours)}:${zeroAEsquerda(minutes)}`;
}

function zeroAEsquerda(num){
   return num >= 10 ? num : `0${num}`
}
const resultado = document.querySelector('.container');
const p = document.createElement('p');
p.classList.add('res');
p.innerHTML = brazilianDate();
resultado.appendChild(p);
*/
const resultado = document.querySelector('.container');
const p = document.createElement('p');
p.classList.add('res');
resultado.appendChild(p);
const data = new Date();
p.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle: 'full'});

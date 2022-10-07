function Relogio(){
const relogio = document.querySelector('#ITimer')

let timer;
let segundos = 0;

function getTimeFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pr-BR', { hour12: false, timeZone: 'GMT'})
}

function startClock(){
        timer = setInterval(function() {
        segundos++;
        relogio.innerHTML= getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('CIniciar')){
        clearInterval(timer);
        startClock();
        relogio.classList.remove('pausado');
    }
    if(el.classList.contains('CPausar')){
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
    if(el.classList.contains('CZerar')){
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    }
})
}
Relogio();
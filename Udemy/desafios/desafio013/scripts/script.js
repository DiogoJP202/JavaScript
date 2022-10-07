

    const buttonIniciar = document.querySelector('#IIniciar');
    const buttonPausar = document.querySelector('#IPausar');
    const buttonZerar = document.querySelector('#IZerar');
    const tempo = document.querySelector('#timer');

    //Os outros botões só funcionaram quando o buttonIniciar for inicializado.

    let segundos = 0;
    let minutos = 0;
    let horas = 0;

    buttonIniciar.addEventListener('click',function(){
        const seconds = document.querySelector('#seconds');
        const minutes = document.querySelector('#minutes');
        const hours = document.querySelector('#hours');

        let timer = setInterval(contadorDeTempo, 1000);

        tempo.style.color = 'black';

        buttonZerar.addEventListener('click', function(){
            zerar()
        })

        buttonPausar.addEventListener('click', function(){
            pausar();
        })

        function contadorDeTempo(){
            if(horas >= 24){
                zerar();
            }
            if(minutos >= 59){
                horas ++;
                minutos = 0;
                minutes.innerHTML = zeroAEsquerda(minutos);
                return hours.innerHTML = zeroAEsquerda(horas);
            }
            if(segundos > 59){
                minutos ++;
                segundos = 0;
                seconds.innerHTML = zeroAEsquerda(segundos);
                return minutes.innerHTML = zeroAEsquerda(minutos);
            }
            if(segundos <= 59){
                segundos++
                return seconds.innerHTML = zeroAEsquerda(segundos);
        }
        }

        function zeroAEsquerda(x){
            if(x < 10) return x = `0${x}`;
            return x;
        }

        function pausar(){
            clearInterval(timer);
            tempo.style.color = 'red';
        }
        function zerar(){
            clearInterval(timer);
            tempo.style.color = 'black';
            horas = 0;
            minutos = 0;
            segundos = 0;
            seconds.innerHTML = zeroAEsquerda(segundos);
            minutes.innerHTML = zeroAEsquerda(minutos);
            return hours.innerHTML = zeroAEsquerda(horas);
        }
    })
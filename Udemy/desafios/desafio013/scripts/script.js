

    const buttonIniciar = document.querySelector('#IIniciar');
    const buttonPausar = document.querySelector('#IPausar');
    const buttonZerar = document.querySelector('#IZerar');

    //Os outros botões só funcionaram quando o buttonIniciar for inicializado.

    buttonIniciar.addEventListener('click',function(){
        const seconds = document.querySelector('#seconds');
        const minutes = document.querySelector('#minutes');
        const hours = document.querySelector('#hours');

        let segundos = 0;
        let minutos = 0;
        let horas = 0;
        let timer = setInterval(contadorDeTempo, 1000);

        buttonZerar.addEventListener('click', function(){
            zerar()
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

        function zerar(){
            clearInterval(timer);
            horas = 0;
            minutos = 0;
            segundos = 0;
            seconds.innerHTML = zeroAEsquerda(segundos);
            minutes.innerHTML = zeroAEsquerda(minutos);
            return hours.innerHTML = zeroAEsquerda(horas);
        }
    })
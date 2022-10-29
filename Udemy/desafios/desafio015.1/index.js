function matrixRain() {
  const c = document.getElementById('matrix');
  const ctx = c.getContext('2d');

  c.height = window.innerHeight;
  c.width = window.innerWidth;

  const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
  const fontSize = 18;
  const columns = c.width / fontSize;
  const drops = new Array(Math.floor(columns)).fill(1);
  function draw(){
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px arial`;
      
      for(let i = 0; i < drops.length; i++){
          let text = letters[Math.floor(Math.random()*letters.length)];

          ctx.fillText(text, i * fontSize, drops[i] * fontSize); 
          drops[i] ++;
          if(drops[i] * fontSize > c.height && Math.random() > 0.99){
              drops[i] = 0;
          }
      }
      window.requestAnimationFrame(draw);
  }
  window.addEventListener('resize',(matrixRain))
  draw();
}

function Criacalculadora(){
    
        const display = document.querySelector('.display');

        this.start = () => {
            this.clickButtons();
            this.pressEnter();
        };

        this.pressEnter = () => {
            display.addEventListener('keyup', e => {
                if(e.keyCode === 13) this.makeTheMath();
            })
        };

        this.clickButtons = () => {
            document.addEventListener('click', e => {
               const el = e.target;
               
               if(el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);

               if(el.classList.contains('btn-clear')) this.clearDisplay();
               
               if(el.classList.contains('btn-del')) this.clearCharacter();
               
               if(el.classList.contains('btn-eq')) this.makeTheMath();
            })
        };
        
        this.makeTheMath = () => {
            let math = display.value;
            try{
                math = eval(math);
                if(!math) {
                    alert('conta inválida!');
                    return;
                } 
            } catch(e){
                alert('conta inválida!');
                return;
            }

            display.value = math;
        };

        this.clearDisplay = () => {
            display.value = "";
        };
        
        this.clearCharacter = () => {
            display.value = display.value.slice(0, -1);
        };

        this.btnParaDisplay = (valor) => {
            display.value += valor;
        };
}
const calculadora = new Criacalculadora();
calculadora.start();
matrixRain();

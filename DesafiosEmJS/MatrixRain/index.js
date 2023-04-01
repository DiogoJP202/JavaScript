const c = document.getElementById("matrix");
const ctx = c.getContext("2d"); //setting context.

c.height = window.innerHeight; //makes the canvas occupy 100% of the window.
c.width = window.innerWidth; 

const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
//letters that will be used on the canvas.
const fontSize = 18;
const columns = c.width / fontSize; //find out how many columns are needed according to screen size and font size.
const drops = new Array(Math.floor(columns)).fill(1); // create an array for each drop, always starting from the initial position y = 1.

function draw(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; //makes the screen flicker at start;
    ctx.fillRect(0, 0, c.width, c.height);

    // Setting font color and style.
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px arial`;
    
    for(let i=0; i < drops.length; i++){
        if(drops[i] * fontSize > c.height && Math.random() > 0.95) drops[i] = 0; // Whenever you reach the maximum height, the drops restart.
        const text = letters[Math.floor(Math.random() * letters.length)]; //take a random letter.
        ctx.fillText(text, i * fontSize, drops[i] * fontSize); // Will fill the screen with letters until it reaches the maximum width.
        drops[i]++;
    }
    window.requestAnimationFrame(draw); //calls the callback('draw'), which creates a loop of the function calling itself.
}

draw();
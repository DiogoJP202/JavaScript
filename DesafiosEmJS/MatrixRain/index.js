const c = document.getElementById("matrix");
const ctx = c.getContext("2d"); //setting context.

c.height = window.height; //makes the canvas occupy 100% of the window.
c.width = window.width; 
ctx.fillRect(0, 0, c.width, c.height); //occupies 100% of canvas.
ctx.font = '60px arial'; //
ctx.fillText("Matrix Rain",  0, 60);
ctx.fillStyle = "#0f0"

const letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
//letters that will be used on the canvas.
const fontSize = 18;
const columns = c.width/fontSize; //find out how many columns are needed according to screen size and font size.
const drops = new Array(Math.floor(columns)).fill(1); // create an array for each drop, always starting from the initial position y = 1.

function draw(){
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; //makes the screen flicker at start;
    ctx.fillRect(0, 0, c.width, c.height);
}

draw();
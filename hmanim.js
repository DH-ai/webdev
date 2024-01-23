let prescroll = window.scrollY;

window.onscroll = function(){
    const cuurentscroll = window.scrollY;
    if (prescroll>cuurentscroll){
        document.getElementById("navbar").style.top="0px";
    } else{
        document.getElementById('navbar').style.top="-60px"
    }
}



// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
var canvasContainer = document.getElementById('nodrop');
canvas.height = canvasContainer.clientHeight;
canvas.width = canvasContainer.clientWidth;



var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');




var fontSize = 10;

var columns ;
var newcoloumn ; 
var drops = [];


columns = Math.floor(canvas.width / fontSize);

for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

window.addEventListener('resize',function(){
    canvas.width = canvasContainer.clientWidth;
    
    columns = Math.floor(canvas.width/fontSize)
    
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    // console.log(drops.length + " , " + columns);
})


function draw() {
    
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvasContainer.clientWidth, canvasContainer.clientHeight);
    for (var i = 0; i < columns; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        // console.log(text)
        ctx.fillText(text, i * fontSize, drops[i]* fontSize);
        drops[i]++;
        // console.log(drops.length+"huhu")
        if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(function () {
    draw();

},33);
// initialize();
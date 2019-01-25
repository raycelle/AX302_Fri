console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//draw a line
ctx.moveTo(50,50);      //start coordinate
ctx.lineTo(250,250);    //end coordinate
ctx.strokeStyle = "green";//color
ctx.lineWidth = 5;      //line thickness
ctx.stroke();           //draw line

ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.lineWidth = 5;
ctx.stroke();

//filled in rectangle
ctx.fillStyle = "yellow";       //fill color
ctx.fillRect(125,125,50,50);    //(x-coordinate, y-coordinate, witdth, height)

//border rectangle
ctx.strokeStyle = "blue";       //line color
ctx.strokeRect(50,50,200,200);  //(x-coordinate, y-coordinate, width, height)

//clears a rectangular space in the canvas
ctx.clearRect(135,135, 30,30); //(x-coordinate, y-coordinate, width, height)



//Canvas 1: Checkerboard
var c1 = document.getElementById('one');
var ctx1 = c1.getContext('2d');
ctx1.fillStyle = "rgb(100,0,100)";
ctx1.fillRect(0, 0, 150, 150);
ctx1.fillRect(150, 150, 150, 150);

// Canvas 2: Window
var c2 = document.getElementById('two');
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(100,200,100)";
ctx2.fillRect(0, 0, 300, 300);
ctx2.clearRect(20, 20, 120, 120);
ctx2.clearRect(20, 160, 120, 120);
ctx2.clearRect(160, 20, 120, 120);
ctx2.clearRect(160, 160, 120, 120);









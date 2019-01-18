console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.moveTo(50,50);
ctx.lineTo(250,250);
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();

ctx.moveTo(250,50);
ctx.lineTo(50,250);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();

ctx.fillStyle = "yellow";
ctx.fillRect(125,125,50,50);

ctx.strokeStyle = "blue";
ctx.strokeRect(50,50,200,200);

ctx.clearRect(135,135, 30,30);


var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");









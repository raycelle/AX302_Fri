console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 400;

//ball coordinates and magnitude of movement
var x, y;
var mx, my;

//second ball variables
var x1, y1;
var mx1, my1;

//initialize animation
function init(){
    x = 300;
    y = 200;
    mx = 3;
    my = 4;
    x1 = 100;
    y1 = 100;
    mx1 = 6;
    my1 = 2;
    return setInterval(draw, 10);
}

//draw circle
function circle(circleX, circleY, r, color){
    ctx.beginPath();
    ctx.arc(circleX , circleY , r , 0 , 6.28);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

//clear canvas
function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//draw frames
function draw(){
    clear()
    circle(x, y, 30,"blue");

    x += mx;
    y += my;

    if(x < 15 || x > WIDTH - 15){
        mx = -mx;
    } 
    if(y < 15 || y > HEIGHT - 15){
        my = -my;
    } 

    //second circle
    circle(x1, y1, 10, "red");

    x1 += mx1;
    y1 += my1;

    if(x1 < 15 || x1 > WIDTH - 15){
        mx1 = -mx1;
    } 
    if(y1 < 15 || y1 > HEIGHT - 15){
        my1 = -my1;
    } 

}


init();


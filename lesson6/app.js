console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")

//variables
var WIDTH = 600;
var HEIGHT = 600;

//position and size of player
var x, y, s;

//player movement in x-y directions
var mx, my;

//position and size of ball
var circleX, circleY, circleS;
var circleCollision = false;

//*** Challenge *** 
//position and size of enemy
var enemyX, enemyY, enemyS;
var enemyCollision = false;

var score = 0;

//*** Challenge *** 
//Tracks if game is over
var gameover = false;


//import images to canvas
function drawPacman(){
    var pacman = new Image();
    pacman.src = "pacman.png";
    ctx.drawImage(pacman, x, y, s, s);
}

function drawCircle(){
    var circle = new Image();
    circle.src = "circle.png";
    ctx.drawImage(circle, circleX, circleY, circleS, circleS);
}

//*** Challenge ***
//Draws enemy
function drawEnemy(){
    var enemy = new Image();
    enemy.src = "ghost.png";
    ctx.drawImage(enemy, enemyX, enemyY, enemyS, enemyS);
}

//clear frame
function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

//initialize animation
function init(){
    //set up player
    x = 300;
    y = 300;
    s = 50;
    mx = 0;
    my = 0;

    //set up circle
    circleS = 50;
    circleX = Math.floor(Math.random()*(WIDTH - circleS));
    circleY = Math.floor(Math.random()*(HEIGHT - circleS));

    //set up circle
    enemyS = 50;
    enemyX = Math.floor(Math.random()*(WIDTH - enemyS));
    enemyY = Math.floor(Math.random()*(HEIGHT - enemyS));

    //set up keys
    window.onkeydown = keydownControl;

    return setInterval(draw, 10);
}

function keydownControl(e){
    if(e.keyCode == 37){
        mx = -4;
        my = 0;
    }
    if(e.keyCode == 38){
        mx = 0;
        my = -4;
    }
    if(e.keyCode == 39){
        mx = 4;
        my = 0;
    }
    if(e.keyCode == 40){
        mx = 0;
        my = 4;
    }
}

function draw(){
    clear();

    //*** Challenge ***
    //Draws frames only if game is not over
    if(!gameover){
        
        drawPacman();
        drawCircle();

        //*** Challenge ***
        //Draws enemy and makes is follow Pacman
        drawEnemy();
        followPacman()

        //move player
        x += mx;
        y += my;

        if(x + mx > WIDTH - s || x + mx < 0){
            mx = -mx;
        }
        if(y + my > HEIGHT - s || y + my < 0){
            my = -my;
        }

        collisionCheck();
        collisionHandle();
    } 
    //*** Challenge ***
    //Show game over 
    else {
        ctx.font = "40px Impact";
        ctx.fillText("GAME OVER",210, 300);
    }
}

function collisionCheck(){
    if( (x + s >= circleX) && (x <= circleX + circleS) && 
        (y + s >= circleY) && (y <= circleY + circleY) ) {
        circleCollision = true;
    } else {
        circleCollision = false;
    }

    //*** Challenge ***
    //check if collides with enemy
    if( (x + s >= enemyX) && (x <= enemyX + enemyS) && 
        (y + s >= enemyY) && (y <= enemyY + enemyS) ) {
        enemyCollision = true;
    } else {
        enemyCollision = false;
    }

}

function collisionHandle(){
    if(circleCollision){
        score += 1;
        document.getElementById("score").innerHTML = "Score: " + score;
        circleX = Math.floor(Math.random()*(WIDTH - circleS));
        circleY = Math.floor(Math.random()*(HEIGHT - circleS));
    }

    //*** Challenge ***
    //check if collides with enemy
    if(enemyCollision){
        gameover = true;
    }

}


//*** Challenge ***
//enemy chase Pacman
function followPacman(){
    if (enemyX < x){
        enemyX += 1;
    }
    if (enemyX > x){
        enemyX -= 1;
    }
    if (enemyY < y){
        enemyY += 1;
    }
    if (enemyY > y){
        enemyY -= 1;
    }

}


init();
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
            {preload:preload, create:create, update:update});


var score = 0;
var lives = 3;

function preload(){
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('diamond', 'assets/diamond.png');
    game.load.image('firstaid', 'assets/firstaid.png')
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //create sky
    game.add.sprite(0, 0, 'sky');

    //create group of platforms
    platforms = game.add.physicsGroup();
    platforms.enableBody = true;

    var ground = platforms.create(0, 560, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    var ledge1 = platforms.create(-100, 250, 'ground');
    ledge1.body.immovable = true;

    var style = {font: "bold 32px Arial", fill:"#fff"};

    scorelabel = game.add.text( 300, 563 ,"Score: ", style);
    scoretext = game.add.text(420, 563, score, style);
    scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    liveslabel = game.add.text( 10, 5 ,"Lives: ", style);
    livestext = game.add.text(120, 5, lives, style);
    liveslabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    livestext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
}

function update(){}
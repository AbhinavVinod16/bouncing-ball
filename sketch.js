const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var engine, world;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    engine = Engine.create();
    world = engine.world;
    
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(730,580,200,30);
    block4.shapeColor = "red";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=10;
    ball.velocityY=10;

}

function draw() {
    engine = Engine.create();
    world = engine.world;
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        music.play();
      
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        music.stop();
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "green";
        music.play();
      
    }
    //write code to bounce off ball from the block3
    if(block4.isTouching(ball)){
        ball.shapeColor = "red";
        music.stop();
        
    }

    //write code to bounce off ball from the block4
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    drawSprites();
}

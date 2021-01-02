const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState=0;
var playButton;
var man1;
var rope1;
var gr;
var string;
var flag=0;
var bl1;
var bl2;
var bl3;
var bl4;
var button1;
var polygon1i;

var b1i
var gr1
function preload(){
 polygon1i=loadImage("polygon.png")

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-143);
    engine = Engine.create();
    world = engine.world;

   man1 =new ropeman(70,height-80)
   gr=new Ground(90,height-20,100,20)
  
  bl1=new blocks(240,30,70,40);
  bl2=new blocks(400,30,90,45);
  bl3=new blocks(590,30,50,70);
  bl4=new blocks(770,30,90,20);

 
 
  //gr1=createSprite(600,height-20,200,20)
  //gr1.velocityX=-3;
  //gr1.shapeColor=("white");

}

function draw(){
 Engine.update(engine);
 spawnQ();
 
 


    
    text("PRESS ENTER TO START THR GAME",600,300);
    textSize(20);
    text("ROPEMAN",200,50);
 


 
 
  button1=createButton("2");
  button1.position(568,10)
  button1.size(39,40)
// background("white")
  
     man1.display();
     gr.display();
     bl1.display();
     bl2.display();
     bl3.display();
     bl4.display();
  
 drawSprite();
} 
    
function keyPressed(){
  if(keyCode===13){
    gameState=1;

  }
}
function mousePressed(){
  string=new rope(man1.body,bl1.body);

}

function spawnQ(){
  if(frameCount%100===0){
    console.log(frameCount)
    var q1;
	q1=createSprite(800,200,70,40);
	q1.addImage(polygon1i)
  //  q1.shapeColor="red";
    text("2+2=?",q1.x,q1.y);
    q1.velocityX=-3;

  }
}
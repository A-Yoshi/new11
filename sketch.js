var man, manan;
var track, trackim;
var invr, invl;

function preload(){
 
  manan= loadAnimation("Runner-1.png", "Runner-2.png");
  trackim=loadImage("path.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  track=createSprite (200, 200);
  invr=createSprite (390, 200, 1, 400);
  invl=createSprite (10, 200, 10, 400);
  man=createSprite (200, 200, 10, 10);

  invl.visible=false;
  invr.visible=false;

  track.velocityY=5;
  track.y=height/2;
 
 
  track.addImage("track",trackim);
  man.addAnimation("man", manan);
 
  man.scale=0.1;
  track.scale=1.2
}

function draw() {
  
  background("0");
 
 

  if(track.y > 400){
   track.y=100;
 }

  man.x= mouseX;

  man.collide(invl);
  man.collide(invr);

  drawSprites();
}
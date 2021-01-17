var bg;
var Chicken,chicken1,chicken2,chicken3,chicken4,chicken5;
var Egg,eggs;
var Bucket,bucket;
var eggsGroup,brokenEggsGroup;
var brokenEggs,BrokenEggs;
var gameState = 0;

var CP,cp;

function preload(){
bg = loadImage("images/bg.png")
Chicken = loadImage("images/Chicken.png");
Egg =loadImage("images/Egg.png")
Bucket=loadImage("images/Bucket.png");
brokenEggs=loadImage("images/BrokenEgg.png");
CP=loadImage("images/CP.png");
}
function setup() {
  createCanvas(1500,705);

  chicken1=createSprite(200,90,50,50);
  chicken1.addImage(Chicken);
  chicken1.scale=.3;

  chicken2=createSprite(500,90,50,50);
  chicken2.addImage(Chicken);
  chicken2.scale=.3;

  chicken3=createSprite(800,90,50,50);
  chicken3.addImage(Chicken);
  chicken3.scale=.3;

  chicken4=createSprite(1100,90,50,50);
  chicken4.addImage(Chicken);
  chicken4.scale=.3;

  chicken5=createSprite(1400,90,50,50);
  chicken5.addImage(Chicken);
  chicken5.scale=.3;

  bucket=createSprite(800,610,50,50);
  bucket.addImage(Bucket);
  bucket.scale=0.3;


  eggsGroup = createGroup();
  CPGroup = createGroup();
}

function draw() {
  background(bg);

if (keyIsDown(LEFT_ARROW)) {
bucket.x = bucket.x -25; 
}

if (keyIsDown(RIGHT_ARROW)) {
  bucket.x = bucket.x +25; 
  }

  if(bucket.isTouching(eggsGroup)){
    eggsGroup.destroyEach();
  }

if(eggsGroup.x < 650){
  eggsGroup.addImage(brokenEggs);
}

if(gameState === 1){
  clear();
  game.play();
}

  if(gameState === 0){
    fill("white");
    textSize(40);
    text("Press the SpaceBar to play",600,355);
    text("Use the left and right key to control the bucket",400,300);
    text("Catch the eggs don't let them fall and don't catch anything else other than the eggs",30,400);
    if(keyIsDown("space")){
      gameState === 1;
    }
  }

  if(gameState === 1){
  createEggs();
  createCP();
  }


  drawSprites();
}
function createEggs(){
if(frameCount % 30 === 0){
var eggs=createSprite(800,90,50,50);
eggs.x = Math.round(random(200,1400));
eggs.addImage(Egg);
eggs.scale=0.1;
eggs.velocityY = 20;
eggs.lifetime = 705;
eggsGroup.add(eggs);
}
}
function createCP(){
if(frameCount % 100 === 0){
var cp=createSprite(800,90,50,50);
cp.x = Math.round(random(200,1400));
cp.addImage(CP);
cp.scale=0.1;
cp.velocityY = 20;
CPGroup.add(cp);
}
}

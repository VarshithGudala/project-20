var bgpicImg;
var Bgsprite;
var sleepImg;
var brushImg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;
var Astronautsl;
var Astronautea;
var Astronautgy;
var Astronautbr;
var Astronautba;
var Astronautdr;
var Astronautmo;

function preload(){
  bgpicImg = loadImage("Astronaut's daily routine/iss.png");
  sleepImg = loadAnimation("Astronaut's daily routine/sleep.png");
  brushImg = loadAnimation("Astronaut's daily routine/brush.png");
  gymImg = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png","Astronaut's daily routine/gym11.png","Astronaut's daily routine/gym12.png");
  eatImg = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png");
  drinkImg = loadAnimation("Astronaut's daily routine/drink1.png","Astronaut's daily routine/drink2.png");
  moveImg = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png");
  bathImg = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png")
}




function setup() {
createCanvas(1530,720);
Bgsprite = createSprite(700,200 , 50, 50);
Bgsprite.addImage(bgpicImg);
Bgsprite.scale = 0.34;

Astronaut = createSprite(300,230);
Astronaut.addAnimation("sleeping",sleepImg);
Astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    Astronaut.addAnimation("brushing",brushImg);
    Astronaut.changeAnimation("brushing");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }

  
  if(keyDown("DOWN_ARROW")){
    Astronaut.addAnimation("bath",bathImg);
    Astronaut.changeAnimation("bath");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }


  
  if(keyDown("LEFT_ARROW")){
    Astronaut.addAnimation("drink",drinkImg);
    Astronaut.changeAnimation("drink");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }


  
  if(keyDown("RIGHT_ARROW")){
    Astronaut.addAnimation("eat",eatImg);
    Astronaut.changeAnimation("eat");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }

  
  if(keyDown("space")){
    Astronaut.addAnimation("brushing",brushImg);
    Astronaut.changeAnimation("brushing");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 0;
    Astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    Astronaut.addAnimation("moving",moveImg);
    Astronaut.changeAnimation("moving");
    Astronaut.y = 350;
    Astronaut.x = 100;
    Astronaut.velocityX = 1;
    Astronaut.velocityY = 1;
  }
}
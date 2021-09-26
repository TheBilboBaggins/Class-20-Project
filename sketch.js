

var iss
var bath,astronaut
var brush
var drink
var eat
var gym
var move
var sleep
function preload(){
  iss  = loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png")
  brush = loadImage("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym = loadAnimation("gym1.png","gym2.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("SLEEP",sleep)
  astronaut.scale = 0.10

}

function draw() {
  background(iss);  
 text ("Bath is Right ARROW",200,200)
 drawSprites();
  
 
 
 if(keyDown(RIGHT_ARROW)){
   astronaut.addAnimation("BATH", bath)
   astronaut.changeAnimation("BATH")
 }
 if(keyDown(LEFT_ARROW)){
astronaut.addAnimation("Brush", brush)
  astronaut.changeAnimation("Brush")
}
if(keyDown(UP_ARROW)){
  astronaut.addAnimation("Drink", drink)
  astronaut.changeAnimation("Drink")
} 
 if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("Eat",eat)
  astronaut.changeAnimation("Eat")
 }
 if(keyPress("r")){
   astronaut.addAnimation("Gym",gym)
   astronaut.changeAnimation("Gym")
 }
 
 
 
  

}

function keyPressed(){
  if(keyPressed("r"))
  astronaut.addAnimation("Gym",gym)
  astronaut.changeAnimation("Gym")
}
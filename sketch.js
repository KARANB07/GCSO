var car,wall;
var speed,weight;
var de;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");  
  car.depth=car.depth+1;
  
  car.velocityX=speed;
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    de=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if(de>180)
{
  car.shapeColor=color(230,0,0);
  
}  
if(de<180&& de>100){
  car.shapeColor=color(230,230,0);
  
}
if(de<100){
  car.shapeColor=color(0,255,0);
  
}
  }
  drawSprites();
}
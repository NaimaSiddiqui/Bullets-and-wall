var thickness,wall;
var bullet,weight,speed;

var damage=0;
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 100, 30);
 bullet.shapeColor= "white"

 wall= createSprite(1200,200,thickness,height/2);
 thickness= random(22,83);
 wall.shapeColor=color(80,80,80);

speed= random(223,321);
weight=random(30,52);
bullet.velocityX=speed;
bullet.shapeColor="black";

}

function draw() {
  background(0,0,0);  
  
  if(bullet.collide(wall)){
   damage= (0.5* weight* speed*speed)/(thickness*thickness*thickness);
  }
  if(damage > 10){
    wall.shapeColor= color(255,0,0);
    console.log("wall red, not effective")
}

  if(damage <= 10)
  {
    wall.shapeColor= color(0,255,0);
    console.log("wall green,  effective")
  }
  
 

  
 
  drawSprites();
stroke("white");
textSize(15);
fill("white");
  text("Speed:  "+speed,1000,50);
text("Weight:  "+weight,1000,70);
  text("Damage:  "+ damage,1000,90);
 
}
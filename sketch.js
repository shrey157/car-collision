var car,wall;
var speed,weight=1,deformation;

function setup() {
  createCanvas(1600,400);
 speed=random(49,79)
 weight=random(400,1500)
car=createSprite(50,200,40,20)
car.velocityX=speed; 

wall=createSprite(500,200,60,800);  
wall.shapeColor=(80,80,80)

}

function draw() {
  background(255,255,255);  
  if(istouching(car,wall)){
 Deformation();
 console.log(deformation);
 car.velocityX=0;
  }
 

  drawSprites();    
                   }
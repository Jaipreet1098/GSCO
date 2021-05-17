var car, wall;
var speed, weight;





function setup() {
  createCanvas(1600,400);
  background="black";
  car=createSprite(50, 200, 50, 50);
  
  wall=createSprite(1500, 200, 60, 100);
wall.shapeColour="cyan";
  


  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed; 
}

function draw() {
  background(255,255,255); 
  
if(wall.x - car.x){
  car.velocityX=0;
  var Deformation =0.5 * weight * speed * speed/22500;
if(Deformation>180){
  car.shapeColour="red";
}
if(Deformation<180 && Deformation>100){
  car.shapeColour="yellow";
}
if(Deformation<100){
  car.shapeColour="green";
}

}










  drawSprites();
}
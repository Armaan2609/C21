var bullet, wall;
var speed, weight;
var thickness;
var gun, gunImage;



function preload(){
  gunImage=loadImage("Gun.png");
  
}



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,80,10);
  bullet.shapeColor="white";
  
  gun=createSprite(200, 213, 50, 50);
  gun.addImage("tester",gunImage);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(23,83);
}

function draw() {
  background("black"); 

  bullet.velocityX=speed;

  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red"
      fill("red")
      text("RESULT = REJECTED",700,200)
    }
    if(damage<10){
      wall.shapeColor="green";
      fill("green")
      text("RESULT = PASSED",600,200);
    }
  }


 
  drawSprites();
}

function hasCollided(){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;
}
var car ,wall ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);
 
  car = createSprite(30, 200, 50, 50);
  car.shapeColor = "white" ;

  wall = createSprite(1450 , 200 , 60 , height / 2);
  wall.shapeColor = "black" ;

  speed = random(55 , 90);
  weight = random(400 , 1500);

}

function draw() {
  background("grey");  

  console.log(speed);

if(keyWentDown("space")){
  car.velocityX = speed ;
}
//car.x = mouseX ;

car.debug = false ;

if(wall.x - car.x < wall.width/2 + car.width / 2){
    car.velocityX = 0 ;
    var deformation = 0.5 * weight * speed * speed/22509;
    
    if(deformation>180){
        car.shapeColor = color(255 , 0 , 0);
    }
    
    if(deformation<180 && deformation > 80){
      car.shapeColor = color(230 , 230 , 0);
    }
    
    if(deformation<80){
      car.shapeColor = color(0 , 255 , 0);
    }
}

  drawSprites();
}
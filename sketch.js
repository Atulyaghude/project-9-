var ball
function setup() {
  createCanvas(1200,600);
  ball=createSprite(300,450,100,100);
  
}

function draw() 
{
  background("blue");
  drawSprites();
  if(keyDown(LEFT_ARROW)){
    ball.velocityX=-6
    
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityX=6
    background("Red");
  }
}





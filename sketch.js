var block
var block2
var square3
var square4

function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block2 = createSprite(300, 100, 50, 50);
  square3 = createSprite(200,50,50,60);
  square4 = createSprite(400,50,50,30);
  square3.velocityX = 5; 
}

function draw() {
  background("green"); 
  block2.x = mouseX;
  block2.y = mouseY;
  if(colition(block,block2)){
   block.shapeColor  = "red"
   block2.shapeColor = "red" 
  } else {
    block.shapeColor  = "blue"
    block2.shapeColor = "blue"  
  }

if(colition(square3,square4)){
  square3.velocityX = -5;
}
  drawSprites();
}

